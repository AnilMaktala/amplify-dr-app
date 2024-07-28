/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const findblog = /* GraphQL */ `query Findblog($blogid: String) {
  findblog(blogid: $blogid)
}
` as GeneratedQuery<APITypes.FindblogQueryVariables, APITypes.FindblogQuery>;
export const searchBlogs = /* GraphQL */ `query SearchBlogs(
  $filter: SearchableBlogFilterInput
  $sort: [SearchableBlogSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableBlogAggregationInput]
) {
  searchBlogs(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchBlogsQueryVariables,
  APITypes.SearchBlogsQuery
>;
export const searchPosts = /* GraphQL */ `query SearchPosts(
  $filter: SearchablePostFilterInput
  $sort: [SearchablePostSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchablePostAggregationInput]
) {
  searchPosts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchPostsQueryVariables,
  APITypes.SearchPostsQuery
>;
export const searchUser2s = /* GraphQL */ `query SearchUser2s(
  $filter: SearchableUser2FilterInput
  $sort: [SearchableUser2SortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableUser2AggregationInput]
) {
  searchUser2s(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchUser2sQueryVariables,
  APITypes.SearchUser2sQuery
>;
export const searchAuthors = /* GraphQL */ `query SearchAuthors(
  $filter: SearchableAuthorFilterInput
  $sort: [SearchableAuthorSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableAuthorAggregationInput]
) {
  searchAuthors(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      owner
      firstName
      lastName
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchAuthorsQueryVariables,
  APITypes.SearchAuthorsQuery
>;
export const getBlog = /* GraphQL */ `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
` as GeneratedQuery<APITypes.GetBlogQueryVariables, APITypes.GetBlogQuery>;
export const listBlogs = /* GraphQL */ `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBlogsQueryVariables, APITypes.ListBlogsQuery>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getTag = /* GraphQL */ `query GetTag($id: ID!) {
  getTag(id: $id) {
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
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      label
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      content
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUser2 = /* GraphQL */ `query GetUser2($id: ID!) {
  getUser2(id: $id) {
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
` as GeneratedQuery<APITypes.GetUser2QueryVariables, APITypes.GetUser2Query>;
export const listUser2s = /* GraphQL */ `query ListUser2s(
  $filter: ModelUser2FilterInput
  $limit: Int
  $nextToken: String
) {
  listUser2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUser2sQueryVariables,
  APITypes.ListUser2sQuery
>;
export const getAuthor = /* GraphQL */ `query GetAuthor($id: ID!) {
  getAuthor(id: $id) {
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
` as GeneratedQuery<APITypes.GetAuthorQueryVariables, APITypes.GetAuthorQuery>;
export const listAuthors = /* GraphQL */ `query ListAuthors(
  $filter: ModelAuthorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      firstName
      lastName
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorsQueryVariables,
  APITypes.ListAuthorsQuery
>;
export const getPostTags = /* GraphQL */ `query GetPostTags($id: ID!) {
  getPostTags(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPostTagsQueryVariables,
  APITypes.GetPostTagsQuery
>;
export const listPostTags = /* GraphQL */ `query ListPostTags(
  $filter: ModelPostTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      tagId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostTagsQueryVariables,
  APITypes.ListPostTagsQuery
>;
export const blogByAuthor = /* GraphQL */ `query BlogByAuthor(
  $author: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  blogByAuthor(
    author: $author
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BlogByAuthorQueryVariables,
  APITypes.BlogByAuthorQuery
>;
export const postByAuthor = /* GraphQL */ `query PostByAuthor(
  $author: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postByAuthor(
    author: $author
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostByAuthorQueryVariables,
  APITypes.PostByAuthorQuery
>;
export const user2ByTeam = /* GraphQL */ `query User2ByTeam(
  $team: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUser2FilterInput
  $limit: Int
  $nextToken: String
) {
  user2ByTeam(
    team: $team
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.User2ByTeamQueryVariables,
  APITypes.User2ByTeamQuery
>;
export const postTagsByPostId = /* GraphQL */ `query PostTagsByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  postTagsByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      tagId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostTagsByPostIdQueryVariables,
  APITypes.PostTagsByPostIdQuery
>;
export const postTagsByTagId = /* GraphQL */ `query PostTagsByTagId(
  $tagId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  postTagsByTagId(
    tagId: $tagId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      tagId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostTagsByTagIdQueryVariables,
  APITypes.PostTagsByTagIdQuery
>;
