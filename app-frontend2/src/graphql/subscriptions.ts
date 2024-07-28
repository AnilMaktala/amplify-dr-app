/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog(
  $filter: ModelSubscriptionBlogFilterInput
  $owner: String
) {
  onCreateBlog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog(
  $filter: ModelSubscriptionBlogFilterInput
  $owner: String
) {
  onUpdateBlog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog(
  $filter: ModelSubscriptionBlogFilterInput
  $owner: String
) {
  onDeleteBlog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onCreatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onUpdatePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onDeletePost(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag(
  $filter: ModelSubscriptionTagFilterInput
  $owner: String
) {
  onCreateTag(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag(
  $filter: ModelSubscriptionTagFilterInput
  $owner: String
) {
  onUpdateTag(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag(
  $filter: ModelSubscriptionTagFilterInput
  $owner: String
) {
  onDeleteTag(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUser2 = /* GraphQL */ `subscription OnCreateUser2(
  $filter: ModelSubscriptionUser2FilterInput
  $owner: String
) {
  onCreateUser2(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUser2SubscriptionVariables,
  APITypes.OnCreateUser2Subscription
>;
export const onUpdateUser2 = /* GraphQL */ `subscription OnUpdateUser2(
  $filter: ModelSubscriptionUser2FilterInput
  $owner: String
) {
  onUpdateUser2(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUser2SubscriptionVariables,
  APITypes.OnUpdateUser2Subscription
>;
export const onDeleteUser2 = /* GraphQL */ `subscription OnDeleteUser2(
  $filter: ModelSubscriptionUser2FilterInput
  $owner: String
) {
  onDeleteUser2(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUser2SubscriptionVariables,
  APITypes.OnDeleteUser2Subscription
>;
export const onCreateAuthor = /* GraphQL */ `subscription OnCreateAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onCreateAuthor(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAuthorSubscriptionVariables,
  APITypes.OnCreateAuthorSubscription
>;
export const onUpdateAuthor = /* GraphQL */ `subscription OnUpdateAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onUpdateAuthor(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorSubscriptionVariables,
  APITypes.OnUpdateAuthorSubscription
>;
export const onDeleteAuthor = /* GraphQL */ `subscription OnDeleteAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onDeleteAuthor(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorSubscriptionVariables,
  APITypes.OnDeleteAuthorSubscription
>;
export const onCreatePostTags = /* GraphQL */ `subscription OnCreatePostTags(
  $filter: ModelSubscriptionPostTagsFilterInput
  $owner: String
) {
  onCreatePostTags(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostTagsSubscriptionVariables,
  APITypes.OnCreatePostTagsSubscription
>;
export const onUpdatePostTags = /* GraphQL */ `subscription OnUpdatePostTags(
  $filter: ModelSubscriptionPostTagsFilterInput
  $owner: String
) {
  onUpdatePostTags(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostTagsSubscriptionVariables,
  APITypes.OnUpdatePostTagsSubscription
>;
export const onDeletePostTags = /* GraphQL */ `subscription OnDeletePostTags(
  $filter: ModelSubscriptionPostTagsFilterInput
  $owner: String
) {
  onDeletePostTags(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostTagsSubscriptionVariables,
  APITypes.OnDeletePostTagsSubscription
>;
