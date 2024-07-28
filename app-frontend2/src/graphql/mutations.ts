/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const updateBlogName = /* GraphQL */ `mutation UpdateBlogName($blogid: String, $blogName: String) {
  updateBlogName(blogid: $blogid, blogName: $blogName)
}
` as GeneratedMutation<
  APITypes.UpdateBlogNameMutationVariables,
  APITypes.UpdateBlogNameMutation
>;
export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
    id
    owner
    name
    posts {
      nextToken
      __typename
    }
    category
    tag
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlogMutationVariables,
  APITypes.CreateBlogMutation
>;
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
    id
    owner
    name
    posts {
      nextToken
      __typename
    }
    category
    tag
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlogMutationVariables,
  APITypes.UpdateBlogMutation
>;
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
    id
    owner
    name
    posts {
      nextToken
      __typename
    }
    category
    tag
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlogMutationVariables,
  APITypes.DeleteBlogMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
    id
    owner
    title
    blog {
      id
      owner
      name
      category
      tag
      author
      createdAt
      updatedAt
      __typename
    }
    comments {
      nextToken
      __typename
    }
    tags {
      nextToken
      __typename
    }
    category
    author
    createdAt
    updatedAt
    blogPostsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
    id
    owner
    title
    blog {
      id
      owner
      name
      category
      tag
      author
      createdAt
      updatedAt
      __typename
    }
    comments {
      nextToken
      __typename
    }
    tags {
      nextToken
      __typename
    }
    category
    author
    createdAt
    updatedAt
    blogPostsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
    id
    owner
    title
    blog {
      id
      owner
      name
      category
      tag
      author
      createdAt
      updatedAt
      __typename
    }
    comments {
      nextToken
      __typename
    }
    tags {
      nextToken
      __typename
    }
    category
    author
    createdAt
    updatedAt
    blogPostsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
    id
    owner
    label
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
    id
    owner
    label
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
    id
    owner
    label
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    owner
    post {
      id
      owner
      title
      category
      author
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    content
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    owner
    post {
      id
      owner
      title
      category
      author
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    content
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    owner
    post {
      id
      owner
      title
      category
      author
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    content
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    team
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    team
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    team
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUser2 = /* GraphQL */ `mutation CreateUser2(
  $input: CreateUser2Input!
  $condition: ModelUser2ConditionInput
) {
  createUser2(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    team
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUser2MutationVariables,
  APITypes.CreateUser2Mutation
>;
export const updateUser2 = /* GraphQL */ `mutation UpdateUser2(
  $input: UpdateUser2Input!
  $condition: ModelUser2ConditionInput
) {
  updateUser2(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    team
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUser2MutationVariables,
  APITypes.UpdateUser2Mutation
>;
export const deleteUser2 = /* GraphQL */ `mutation DeleteUser2(
  $input: DeleteUser2Input!
  $condition: ModelUser2ConditionInput
) {
  deleteUser2(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    team
    location
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUser2MutationVariables,
  APITypes.DeleteUser2Mutation
>;
export const createAuthor = /* GraphQL */ `mutation CreateAuthor(
  $input: CreateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  createAuthor(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAuthorMutationVariables,
  APITypes.CreateAuthorMutation
>;
export const updateAuthor = /* GraphQL */ `mutation UpdateAuthor(
  $input: UpdateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  updateAuthor(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAuthorMutationVariables,
  APITypes.UpdateAuthorMutation
>;
export const deleteAuthor = /* GraphQL */ `mutation DeleteAuthor(
  $input: DeleteAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  deleteAuthor(input: $input, condition: $condition) {
    id
    owner
    firstName
    lastName
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAuthorMutationVariables,
  APITypes.DeleteAuthorMutation
>;
export const createPostTags = /* GraphQL */ `mutation CreatePostTags(
  $input: CreatePostTagsInput!
  $condition: ModelPostTagsConditionInput
) {
  createPostTags(input: $input, condition: $condition) {
    id
    postId
    tagId
    post {
      id
      owner
      title
      category
      author
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    tag {
      id
      owner
      label
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostTagsMutationVariables,
  APITypes.CreatePostTagsMutation
>;
export const updatePostTags = /* GraphQL */ `mutation UpdatePostTags(
  $input: UpdatePostTagsInput!
  $condition: ModelPostTagsConditionInput
) {
  updatePostTags(input: $input, condition: $condition) {
    id
    postId
    tagId
    post {
      id
      owner
      title
      category
      author
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    tag {
      id
      owner
      label
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostTagsMutationVariables,
  APITypes.UpdatePostTagsMutation
>;
export const deletePostTags = /* GraphQL */ `mutation DeletePostTags(
  $input: DeletePostTagsInput!
  $condition: ModelPostTagsConditionInput
) {
  deletePostTags(input: $input, condition: $condition) {
    id
    postId
    tagId
    post {
      id
      owner
      title
      category
      author
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    tag {
      id
      owner
      label
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostTagsMutationVariables,
  APITypes.DeletePostTagsMutation
>;
