/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog(
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
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog(
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
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog(
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
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
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
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
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
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
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
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag(
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
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag(
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
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag(
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
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
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
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
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
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
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
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
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
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
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
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
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
`;
export const onCreateUser2 = /* GraphQL */ `
  subscription OnCreateUser2(
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
`;
export const onUpdateUser2 = /* GraphQL */ `
  subscription OnUpdateUser2(
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
`;
export const onDeleteUser2 = /* GraphQL */ `
  subscription OnDeleteUser2(
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
`;
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor(
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
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor(
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
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor(
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
`;
export const onCreatePostTags = /* GraphQL */ `
  subscription OnCreatePostTags(
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
`;
export const onUpdatePostTags = /* GraphQL */ `
  subscription OnUpdatePostTags(
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
`;
export const onDeletePostTags = /* GraphQL */ `
  subscription OnDeletePostTags(
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
`;
