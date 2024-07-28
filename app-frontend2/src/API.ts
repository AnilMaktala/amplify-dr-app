/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  owner?: string | null,
  name: string,
  category: string,
  tag?: string | null,
  author: string,
};

export type ModelBlogConditionInput = {
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  tag?: ModelStringInput | null,
  author?: ModelIDInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  owner?: string | null,
  name: string,
  posts?: ModelPostConnection | null,
  category: string,
  tag?: string | null,
  author: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  owner?: string | null,
  title: string,
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  tags?: ModelPostTagsConnection | null,
  category?: string | null,
  author: string,
  createdAt: string,
  updatedAt: string,
  blogPostsId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  owner?: string | null,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
};

export type ModelPostTagsConnection = {
  __typename: "ModelPostTagsConnection",
  items:  Array<PostTags | null >,
  nextToken?: string | null,
};

export type PostTags = {
  __typename: "PostTags",
  id: string,
  postId: string,
  tagId: string,
  post: Post,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  owner?: string | null,
  label: string,
  posts?: ModelPostTagsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  category?: string | null,
  tag?: string | null,
  author?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  owner?: string | null,
  title: string,
  category?: string | null,
  author: string,
  blogPostsId?: string | null,
};

export type ModelPostConditionInput = {
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  author?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type UpdatePostInput = {
  id: string,
  owner?: string | null,
  title?: string | null,
  category?: string | null,
  author?: string | null,
  blogPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  owner?: string | null,
  label: string,
};

export type ModelTagConditionInput = {
  owner?: ModelStringInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTagInput = {
  id: string,
  owner?: string | null,
  label?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  owner?: string | null,
  content: string,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  owner?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  owner?: string | null,
  content?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  owner?: string | null,
  firstName: string,
  lastName: string,
  email?: string | null,
  team?: string | null,
};

export type ModelUserConditionInput = {
  owner?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  team?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  owner?: string | null,
  firstName: string,
  lastName: string,
  email?: string | null,
  team?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  owner?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  team?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUser2Input = {
  id?: string | null,
  owner?: string | null,
  firstName: string,
  lastName: string,
  email?: string | null,
  team?: string | null,
  location?: string | null,
};

export type ModelUser2ConditionInput = {
  owner?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  team?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelUser2ConditionInput | null > | null,
  or?: Array< ModelUser2ConditionInput | null > | null,
  not?: ModelUser2ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type User2 = {
  __typename: "User2",
  id: string,
  owner?: string | null,
  firstName: string,
  lastName: string,
  email?: string | null,
  team?: string | null,
  location?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUser2Input = {
  id: string,
  owner?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  team?: string | null,
  location?: string | null,
};

export type DeleteUser2Input = {
  id: string,
};

export type CreateAuthorInput = {
  id?: string | null,
  owner?: string | null,
  firstName: string,
  lastName: string,
  email?: string | null,
};

export type ModelAuthorConditionInput = {
  owner?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Author = {
  __typename: "Author",
  id: string,
  owner?: string | null,
  firstName: string,
  lastName: string,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAuthorInput = {
  id: string,
  owner?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
};

export type DeleteAuthorInput = {
  id: string,
};

export type CreatePostTagsInput = {
  id?: string | null,
  postId: string,
  tagId: string,
};

export type ModelPostTagsConditionInput = {
  postId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelPostTagsConditionInput | null > | null,
  or?: Array< ModelPostTagsConditionInput | null > | null,
  not?: ModelPostTagsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdatePostTagsInput = {
  id: string,
  postId?: string | null,
  tagId?: string | null,
};

export type DeletePostTagsInput = {
  id: string,
};

export type SearchableBlogFilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  category?: SearchableStringFilterInput | null,
  tag?: SearchableStringFilterInput | null,
  author?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableBlogFilterInput | null > | null,
  or?: Array< SearchableBlogFilterInput | null > | null,
  not?: SearchableBlogFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableBlogSortInput = {
  field?: SearchableBlogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBlogSortableFields {
  id = "id",
  owner = "owner",
  name = "name",
  category = "category",
  tag = "tag",
  author = "author",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableBlogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableBlogAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
  cardinality = "cardinality",
}


export enum SearchableBlogAggregateField {
  id = "id",
  owner = "owner",
  name = "name",
  category = "category",
  tag = "tag",
  author = "author",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableBlogConnection = {
  __typename: "SearchableBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  category?: SearchableStringFilterInput | null,
  author?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  blogPostsId?: SearchableIDFilterInput | null,
  and?: Array< SearchablePostFilterInput | null > | null,
  or?: Array< SearchablePostFilterInput | null > | null,
  not?: SearchablePostFilterInput | null,
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePostSortableFields {
  id = "id",
  owner = "owner",
  title = "title",
  category = "category",
  author = "author",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  blogPostsId = "blogPostsId",
}


export type SearchablePostAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePostAggregateField,
};

export enum SearchablePostAggregateField {
  id = "id",
  owner = "owner",
  title = "title",
  category = "category",
  author = "author",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  blogPostsId = "blogPostsId",
}


export type SearchablePostConnection = {
  __typename: "SearchablePostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableUser2FilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  firstName?: SearchableStringFilterInput | null,
  lastName?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  team?: SearchableStringFilterInput | null,
  location?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableUser2FilterInput | null > | null,
  or?: Array< SearchableUser2FilterInput | null > | null,
  not?: SearchableUser2FilterInput | null,
};

export type SearchableUser2SortInput = {
  field?: SearchableUser2SortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUser2SortableFields {
  id = "id",
  owner = "owner",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  team = "team",
  location = "location",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUser2AggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUser2AggregateField,
};

export enum SearchableUser2AggregateField {
  id = "id",
  owner = "owner",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  team = "team",
  location = "location",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUser2Connection = {
  __typename: "SearchableUser2Connection",
  items:  Array<User2 | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAuthorFilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  firstName?: SearchableStringFilterInput | null,
  lastName?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableAuthorFilterInput | null > | null,
  or?: Array< SearchableAuthorFilterInput | null > | null,
  not?: SearchableAuthorFilterInput | null,
};

export type SearchableAuthorSortInput = {
  field?: SearchableAuthorSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableAuthorSortableFields {
  id = "id",
  owner = "owner",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableAuthorAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableAuthorAggregateField,
};

export enum SearchableAuthorAggregateField {
  id = "id",
  owner = "owner",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableAuthorConnection = {
  __typename: "SearchableAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  tag?: ModelStringInput | null,
  author?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  author?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  label?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  team?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUser2FilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  team?: ModelStringInput | null,
  location?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUser2FilterInput | null > | null,
  or?: Array< ModelUser2FilterInput | null > | null,
  not?: ModelUser2FilterInput | null,
};

export type ModelUser2Connection = {
  __typename: "ModelUser2Connection",
  items:  Array<User2 | null >,
  nextToken?: string | null,
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
};

export type ModelPostTagsFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostTagsFilterInput | null > | null,
  or?: Array< ModelPostTagsFilterInput | null > | null,
  not?: ModelPostTagsFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  tag?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  blogPostsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  postCommentsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  team?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUser2FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  team?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUser2FilterInput | null > | null,
  or?: Array< ModelSubscriptionUser2FilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionPostTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostTagsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostTagsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type UpdateBlogNameMutationVariables = {
  blogid?: string | null,
  blogName?: string | null,
};

export type UpdateBlogNameMutation = {
  updateBlogName?: string | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    owner?: string | null,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    category: string,
    tag?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    owner?: string | null,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    category: string,
    tag?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    owner?: string | null,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    category: string,
    tag?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    category?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    category?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    category?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    owner?: string | null,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    owner?: string | null,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    owner?: string | null,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUser2MutationVariables = {
  input: CreateUser2Input,
  condition?: ModelUser2ConditionInput | null,
};

export type CreateUser2Mutation = {
  createUser2?:  {
    __typename: "User2",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUser2MutationVariables = {
  input: UpdateUser2Input,
  condition?: ModelUser2ConditionInput | null,
};

export type UpdateUser2Mutation = {
  updateUser2?:  {
    __typename: "User2",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUser2MutationVariables = {
  input: DeleteUser2Input,
  condition?: ModelUser2ConditionInput | null,
};

export type DeleteUser2Mutation = {
  deleteUser2?:  {
    __typename: "User2",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostTagsMutationVariables = {
  input: CreatePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type CreatePostTagsMutation = {
  createPostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePostTagsMutationVariables = {
  input: UpdatePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type UpdatePostTagsMutation = {
  updatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePostTagsMutationVariables = {
  input: DeletePostTagsInput,
  condition?: ModelPostTagsConditionInput | null,
};

export type DeletePostTagsMutation = {
  deletePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type FindblogQueryVariables = {
  blogid?: string | null,
};

export type FindblogQuery = {
  findblog?: string | null,
};

export type SearchBlogsQueryVariables = {
  filter?: SearchableBlogFilterInput | null,
  sort?: Array< SearchableBlogSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableBlogAggregationInput | null > | null,
};

export type SearchBlogsQuery = {
  searchBlogs?:  {
    __typename: "SearchableBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null,
  sort?: Array< SearchablePostSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePostAggregationInput | null > | null,
};

export type SearchPostsQuery = {
  searchPosts?:  {
    __typename: "SearchablePostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchUser2sQueryVariables = {
  filter?: SearchableUser2FilterInput | null,
  sort?: Array< SearchableUser2SortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUser2AggregationInput | null > | null,
};

export type SearchUser2sQuery = {
  searchUser2s?:  {
    __typename: "SearchableUser2Connection",
    items:  Array< {
      __typename: "User2",
      id: string,
      owner?: string | null,
      firstName: string,
      lastName: string,
      email?: string | null,
      team?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchAuthorsQueryVariables = {
  filter?: SearchableAuthorFilterInput | null,
  sort?: Array< SearchableAuthorSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableAuthorAggregationInput | null > | null,
};

export type SearchAuthorsQuery = {
  searchAuthors?:  {
    __typename: "SearchableAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      owner?: string | null,
      firstName: string,
      lastName: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    owner?: string | null,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    category: string,
    tag?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    category?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    owner?: string | null,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      owner?: string | null,
      content: string,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      owner?: string | null,
      firstName: string,
      lastName: string,
      email?: string | null,
      team?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUser2QueryVariables = {
  id: string,
};

export type GetUser2Query = {
  getUser2?:  {
    __typename: "User2",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUser2sQueryVariables = {
  filter?: ModelUser2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUser2sQuery = {
  listUser2s?:  {
    __typename: "ModelUser2Connection",
    items:  Array< {
      __typename: "User2",
      id: string,
      owner?: string | null,
      firstName: string,
      lastName: string,
      email?: string | null,
      team?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      owner?: string | null,
      firstName: string,
      lastName: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostTagsQueryVariables = {
  id: string,
};

export type GetPostTagsQuery = {
  getPostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPostTagsQueryVariables = {
  filter?: ModelPostTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTagsQuery = {
  listPostTags?:  {
    __typename: "ModelPostTagsConnection",
    items:  Array< {
      __typename: "PostTags",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BlogByAuthorQueryVariables = {
  author: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BlogByAuthorQuery = {
  blogByAuthor?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostByAuthorQueryVariables = {
  author: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostByAuthorQuery = {
  postByAuthor?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type User2ByTeamQueryVariables = {
  team: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUser2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type User2ByTeamQuery = {
  user2ByTeam?:  {
    __typename: "ModelUser2Connection",
    items:  Array< {
      __typename: "User2",
      id: string,
      owner?: string | null,
      firstName: string,
      lastName: string,
      email?: string | null,
      team?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostTagsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByPostIdQuery = {
  postTagsByPostId?:  {
    __typename: "ModelPostTagsConnection",
    items:  Array< {
      __typename: "PostTags",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByTagIdQuery = {
  postTagsByTagId?:  {
    __typename: "ModelPostTagsConnection",
    items:  Array< {
      __typename: "PostTags",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
  owner?: string | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    owner?: string | null,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    category: string,
    tag?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    owner?: string | null,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    category: string,
    tag?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    owner?: string | null,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    category: string,
    tag?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    category?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    category?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    owner?: string | null,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      owner?: string | null,
      name: string,
      category: string,
      tag?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    tags?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    category?: string | null,
    author: string,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    owner?: string | null,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    owner?: string | null,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    owner?: string | null,
    label: string,
    posts?:  {
      __typename: "ModelPostTagsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUser2SubscriptionVariables = {
  filter?: ModelSubscriptionUser2FilterInput | null,
  owner?: string | null,
};

export type OnCreateUser2Subscription = {
  onCreateUser2?:  {
    __typename: "User2",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUser2SubscriptionVariables = {
  filter?: ModelSubscriptionUser2FilterInput | null,
  owner?: string | null,
};

export type OnUpdateUser2Subscription = {
  onUpdateUser2?:  {
    __typename: "User2",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUser2SubscriptionVariables = {
  filter?: ModelSubscriptionUser2FilterInput | null,
  owner?: string | null,
};

export type OnDeleteUser2Subscription = {
  onDeleteUser2?:  {
    __typename: "User2",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    team?: string | null,
    location?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
  owner?: string | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    owner?: string | null,
    firstName: string,
    lastName: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostTagsSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagsFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostTagsSubscription = {
  onCreatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostTagsSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagsFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostTagsSubscription = {
  onUpdatePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePostTagsSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagsFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostTagsSubscription = {
  onDeletePostTags?:  {
    __typename: "PostTags",
    id: string,
    postId: string,
    tagId: string,
    post:  {
      __typename: "Post",
      id: string,
      owner?: string | null,
      title: string,
      category?: string | null,
      author: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      owner?: string | null,
      label: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
