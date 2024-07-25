import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { Stack, NestedStack } from "aws-cdk-lib";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// Get the first resolver
const amplifyData = backend.data;

// Get resolvers from the first resolver
const connectionStack = amplifyData.node.children.filter((child) =>
  child.node.id.includes("ConnectionStack")
);

// If the connectionStack has more than 500 resources
if (connectionStack[0].node.children.length > 10) {
  console.log("All Resources Count:", connectionStack[0].node.children.length);

  // Crete new nestedStacks every nestedStacks can hold 200 resources, each.
  // connectionStack[0].node.children.length / 200 = number of nestedStacks
  const nestedStacksCount = Math.ceil(
    connectionStack[0].node.children.length / 5
  );

  console.log("Splitting, Nested Stacks Count:", nestedStacksCount);

  for (let i = 0; i < nestedStacksCount; i++) {
    const nestedStack = new NestedStack(
      connectionStack[0],
      `ConnectionStackSplit${i}`
    );

    // Get items with start i * 200 to (i + 1) * 200 resources
    const startIndex = i * 5;
    const endIndex = (i + 1) * 5;

    // Add the resources to the nestedStack
    connectionStack[0].node.children
      .slice(startIndex, endIndex)
      .forEach((child) => {
        nestedStack.node.addDependency(child.node);
        console.log(child.node.id);
      });

    amplifyData.node.addDependency(nestedStack);
    console.log(nestedStack.node.id);
  }

  // Remove stack from the data stack
  connectionStack[0].node.children.forEach((child) => {
    connectionStack[0].node.tryRemoveChild(child.node.id);
  });
}