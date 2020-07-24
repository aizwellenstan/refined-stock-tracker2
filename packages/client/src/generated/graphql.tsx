import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};

export type ActivitiesInput = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Order>,
  performerId?: Maybe<Scalars['ID']>,
  teamId?: Maybe<Scalars['ID']>,
  categoryId?: Maybe<Scalars['ID']>,
  afterDate?: Maybe<Scalars['Date']>,
  beforeDate?: Maybe<Scalars['Date']>,
};

export type Activity = {
   __typename?: 'Activity',
  /** ID of the activity */
  id: Scalars['ID'],
  /** Name of the activity */
  name: Scalars['String'],
  /** Description of the streaming */
  description: Scalars['String'],
  /** Whether public */
  public: Scalars['Int'],
  /** URL of the activity */
  url: Scalars['String'],
  /** Thumbnail of the activity */
  thumbnail: Scalars['String'],
  /** Start date time on ISO 8601 */
  startAt: Scalars['Date'],
  /** End date time on ISO 8601 */
  endAt: Scalars['Date'],
  /** Created date time */
  createdAt: Scalars['Date'],
  /** Updated date time */
  updatedAt: Scalars['Date'],
  /** Sources of the activity */
  performers: Array<Performer>,
  /** Associated category */
  category?: Maybe<Category>,
  /** Matched team */
  team?: Maybe<Team>,
};

export type ActivityConnection = {
   __typename?: 'ActivityConnection',
  nodes: Array<Activity>,
  pageInfo: PageInfo,
};

export type CategoriesInput = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Order>,
};

export type Category = {
   __typename?: 'Category',
  /** ID of the category */
  id: Scalars['ID'],
  /** name */
  name: Scalars['String'],
  /** Activities */
  activities: ActivityConnection,
};


export type CategoryActivitiesArgs = {
  input?: Maybe<ActivitiesInput>
};

export type CategoryConnection = {
   __typename?: 'CategoryConnection',
  nodes: Array<Category>,
  pageInfo: PageInfo,
};


export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
   __typename?: 'PageInfo',
  /** Whether or not there are next pages */
  hasNextPage: Scalars['Boolean'],
  /** Whether or not there are previous pages */
  hasPreviousPage: Scalars['Boolean'],
  /** Total count */
  totalCount?: Maybe<Scalars['Int']>,
};

export type Performer = {
   __typename?: 'Performer',
  /** ID of the performer */
  id: Scalars['ID'],
  /** Name of the performer */
  name: Scalars['String'],
  /** Romanized name of the performer */
  latinName: Scalars['String'],
  /** Ruby for name of the performer */
  ruby: Scalars['String'],
  /** URL of the avatar for the performer */
  avatar: Scalars['String'],
  /** URL of the full-body image for the performer */
  fullBody: Scalars['String'],
  /** Hex colour code */
  color: Scalars['String'],
  /** Description of the performer */
  description: Scalars['String'],
  /** If the  performer is public */
  public: Scalars['Int'],
  /** Unknown... */
  position?: Maybe<Scalars['Int']>,
  /** Created date time */
  createdAt: Scalars['Date'],
  /** Updated date time */
  updatedAt: Scalars['Date'],
  /** External services' information */
  socialAccounts: Array<SocialAccount>,
  /** Involved teams */
  teams: Array<Team>,
  /** Activities */
  activities: ActivityConnection,
};

export type PerformerConnection = {
   __typename?: 'PerformerConnection',
  nodes: Array<Performer>,
  pageInfo: PageInfo,
};

export type PerformersInput = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Order>,
};

export type Query = {
   __typename?: 'Query',
  /** Search performers, activities, teams and categories */
  search: SearchResult,
  /** Fetch single activity */
  activity?: Maybe<Activity>,
  /** Fetch activities */
  activities: ActivityConnection,
  /** Fetch single performer */
  performer?: Maybe<Performer>,
  /** Fetch performers */
  performers: PerformerConnection,
  /** Fetch single category */
  category?: Maybe<Category>,
  /** Fetch categories */
  categories: CategoryConnection,
  /** Fetch single team */
  team?: Maybe<Team>,
  /** Fetch teams */
  teams: TeamConnection,
};


export type QuerySearchArgs = {
  query: Scalars['String']
};


export type QueryActivityArgs = {
  id: Scalars['ID']
};


export type QueryActivitiesArgs = {
  input?: Maybe<ActivitiesInput>
};


export type QueryPerformerArgs = {
  id: Scalars['ID']
};


export type QueryPerformersArgs = {
  input?: Maybe<PerformersInput>
};


export type QueryCategoryArgs = {
  id: Scalars['ID']
};


export type QueryCategoriesArgs = {
  input?: Maybe<CategoriesInput>
};


export type QueryTeamArgs = {
  id: Scalars['ID']
};


export type QueryTeamsArgs = {
  input?: Maybe<TeamsInput>
};

export type SearchResult = {
   __typename?: 'SearchResult',
  performers: Array<Performer>,
  activities: Array<Activity>,
  teams: Array<Team>,
  categories: Array<Category>,
};

export type SocialAccount = {
  /** Internal ID of the channel */
  id: Scalars['ID'],
  /** Created date time */
  createdAt: Scalars['Date'],
  /** Updated date time */
  updatedAt: Scalars['Date'],
};

export type Team = {
   __typename?: 'Team',
  /** ID of the team */
  id: Scalars['ID'],
  /** Name of the team */
  name: Scalars['String'],
  /** Created date time */
  createdAt: Scalars['Date'],
  /** Updated date time */
  updatedAt: Scalars['Date'],
  /** Involved performers */
  members: Array<Performer>,
  /** Activities */
  activities: ActivityConnection,
};

export type TeamConnection = {
   __typename?: 'TeamConnection',
  nodes: Array<Team>,
  pageInfo: PageInfo,
};

export type TeamsInput = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order?: Maybe<Order>,
  performerId?: Maybe<Scalars['ID']>,
};

export type TwitterAccount = SocialAccount & {
   __typename?: 'TwitterAccount',
  /** Internal ID of the channel */
  id: Scalars['ID'],
  /** Screenname of the account like @twitter */
  screenName: Scalars['String'],
  /** Created date time */
  createdAt: Scalars['Date'],
  /** Updated date time */
  updatedAt: Scalars['Date'],
};

export type YoutubeAccount = SocialAccount & {
   __typename?: 'YoutubeAccount',
  /** Internal ID of the channel */
  id: Scalars['ID'],
  /** ID of the channel */
  channelId: Scalars['ID'],
  /** Name of the channel */
  channelName: Scalars['String'],
  /** Order of creation */
  creationOrder: Scalars['Int'],
  /** Created date time */
  createdAt: Scalars['Date'],
  /** Updated date time */
  updatedAt: Scalars['Date'],
};

export type PageInfoFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'totalCount'>
);

export type TeamSmallFragment = (
  { __typename?: 'Team' }
  & Pick<Team, 'id' | 'name'>
);

export type ActivityFragment = (
  { __typename?: 'Activity' }
  & Pick<Activity, 'id' | 'name' | 'description' | 'public' | 'url' | 'thumbnail' | 'startAt' | 'endAt'>
  & { performers: Array<(
    { __typename?: 'Performer' }
    & PerformerFragment
  )>, category: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'name'>
  )>, team: Maybe<(
    { __typename?: 'Team' }
    & TeamSmallFragment
  )> }
);

export type PerformerFragment = (
  { __typename?: 'Performer' }
  & Pick<Performer, 'id' | 'name' | 'latinName' | 'ruby' | 'avatar' | 'color' | 'description' | 'fullBody' | 'public' | 'position'>
);

type SocialAccount_YoutubeAccount_Fragment = (
  { __typename?: 'YoutubeAccount' }
  & Pick<YoutubeAccount, 'channelId' | 'channelName' | 'id'>
);

type SocialAccount_TwitterAccount_Fragment = (
  { __typename?: 'TwitterAccount' }
  & Pick<TwitterAccount, 'screenName' | 'id'>
);

export type SocialAccountFragment = SocialAccount_YoutubeAccount_Fragment | SocialAccount_TwitterAccount_Fragment;

export type PerformerLargeFragment = (
  { __typename?: 'Performer' }
  & { teams: Array<(
    { __typename?: 'Team' }
    & TeamFragment
  )>, socialAccounts: Array<(
    { __typename?: 'YoutubeAccount' }
    & SocialAccount_YoutubeAccount_Fragment
  ) | (
    { __typename?: 'TwitterAccount' }
    & SocialAccount_TwitterAccount_Fragment
  )> }
  & PerformerFragment
);

export type TeamFragment = (
  { __typename?: 'Team' }
  & Pick<Team, 'id' | 'name'>
  & { members: Array<(
    { __typename?: 'Performer' }
    & PerformerFragment
  )> }
);

export type CategoryFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'name'>
  & { activities: (
    { __typename?: 'ActivityConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'totalCount'>
    ) }
  ) }
);

export type FetchActivitiesQueryVariables = {
  input?: Maybe<ActivitiesInput>
};


export type FetchActivitiesQuery = (
  { __typename?: 'Query' }
  & { activities: (
    { __typename?: 'ActivityConnection' }
    & { nodes: Array<(
      { __typename?: 'Activity' }
      & ActivityFragment
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    ) }
  ) }
);

export type FetchPerformerLargeQueryVariables = {
  id: Scalars['ID']
};


export type FetchPerformerLargeQuery = (
  { __typename?: 'Query' }
  & { performer: Maybe<(
    { __typename?: 'Performer' }
    & PerformerLargeFragment
  )>, activities: (
    { __typename?: 'ActivityConnection' }
    & { nodes: Array<(
      { __typename?: 'Activity' }
      & ActivityFragment
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    ) }
  ) }
);

export type FetchPerformersQueryVariables = {
  offset?: Maybe<Scalars['Int']>
};


export type FetchPerformersQuery = (
  { __typename?: 'Query' }
  & { performers: (
    { __typename?: 'PerformerConnection' }
    & { nodes: Array<(
      { __typename?: 'Performer' }
      & PerformerFragment
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    ) }
  ) }
);

export type FetchTeamsQueryVariables = {
  offset?: Maybe<Scalars['Int']>
};


export type FetchTeamsQuery = (
  { __typename?: 'Query' }
  & { teams: (
    { __typename?: 'TeamConnection' }
    & { nodes: Array<(
      { __typename?: 'Team' }
      & TeamFragment
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    ) }
  ) }
);

export type SearchResultFragment = (
  { __typename?: 'SearchResult' }
  & { activities: Array<(
    { __typename?: 'Activity' }
    & ActivityFragment
  )>, performers: Array<(
    { __typename?: 'Performer' }
    & PerformerFragment
  )>, teams: Array<(
    { __typename?: 'Team' }
    & TeamFragment
  )>, categories: Array<(
    { __typename?: 'Category' }
    & CategoryFragment
  )> }
);

export type SearchQueryVariables = {
  query: Scalars['String']
};


export type SearchQuery = (
  { __typename?: 'Query' }
  & { search: (
    { __typename?: 'SearchResult' }
    & SearchResultFragment
  ) }
);

export type FetchCategoriesQueryVariables = {};


export type FetchCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: (
    { __typename?: 'CategoryConnection' }
    & { nodes: Array<(
      { __typename?: 'Category' }
      & CategoryFragment
    )> }
  ) }
);

export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  totalCount
}
    `;
export const PerformerFragmentDoc = gql`
    fragment Performer on Performer {
  id
  name
  latinName
  ruby
  avatar
  color
  description
  fullBody
  public
  position
}
    `;
export const TeamFragmentDoc = gql`
    fragment Team on Team {
  id
  name
  members {
    ...Performer
  }
}
    ${PerformerFragmentDoc}`;
export const SocialAccountFragmentDoc = gql`
    fragment SocialAccount on SocialAccount {
  id
  ... on YoutubeAccount {
    channelId
    channelName
  }
  ... on TwitterAccount {
    screenName
  }
}
    `;
export const PerformerLargeFragmentDoc = gql`
    fragment PerformerLarge on Performer {
  ...Performer
  teams {
    ...Team
  }
  socialAccounts {
    ...SocialAccount
  }
}
    ${PerformerFragmentDoc}
${TeamFragmentDoc}
${SocialAccountFragmentDoc}`;
export const TeamSmallFragmentDoc = gql`
    fragment TeamSmall on Team {
  id
  name
}
    `;
export const ActivityFragmentDoc = gql`
    fragment Activity on Activity {
  id
  name
  description
  public
  url
  thumbnail
  startAt
  endAt
  performers {
    ...Performer
  }
  category {
    name
  }
  team {
    ...TeamSmall
  }
}
    ${PerformerFragmentDoc}
${TeamSmallFragmentDoc}`;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  name
  activities {
    pageInfo {
      totalCount
    }
  }
}
    `;
export const SearchResultFragmentDoc = gql`
    fragment SearchResult on SearchResult {
  activities {
    ...Activity
  }
  performers {
    ...Performer
  }
  teams {
    ...Team
  }
  categories {
    ...Category
  }
}
    ${ActivityFragmentDoc}
${PerformerFragmentDoc}
${TeamFragmentDoc}
${CategoryFragmentDoc}`;
export const FetchActivitiesDocument = gql`
    query FetchActivities($input: ActivitiesInput) {
  activities(input: $input) {
    nodes {
      ...Activity
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${ActivityFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useFetchActivitiesQuery__
 *
 * To run a query within a React component, call `useFetchActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchActivitiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFetchActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchActivitiesQuery, FetchActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchActivitiesQuery, FetchActivitiesQueryVariables>(FetchActivitiesDocument, baseOptions);
      }
export function useFetchActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchActivitiesQuery, FetchActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchActivitiesQuery, FetchActivitiesQueryVariables>(FetchActivitiesDocument, baseOptions);
        }
export type FetchActivitiesQueryHookResult = ReturnType<typeof useFetchActivitiesQuery>;
export type FetchActivitiesLazyQueryHookResult = ReturnType<typeof useFetchActivitiesLazyQuery>;
export type FetchActivitiesQueryResult = ApolloReactCommon.QueryResult<FetchActivitiesQuery, FetchActivitiesQueryVariables>;
export const FetchPerformerLargeDocument = gql`
    query FetchPerformerLarge($id: ID!) {
  performer(id: $id) {
    ...PerformerLarge
  }
  activities(input: {performerId: $id, limit: 100, order: DESC}) {
    nodes {
      ...Activity
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${PerformerLargeFragmentDoc}
${ActivityFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useFetchPerformerLargeQuery__
 *
 * To run a query within a React component, call `useFetchPerformerLargeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPerformerLargeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPerformerLargeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchPerformerLargeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchPerformerLargeQuery, FetchPerformerLargeQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchPerformerLargeQuery, FetchPerformerLargeQueryVariables>(FetchPerformerLargeDocument, baseOptions);
      }
export function useFetchPerformerLargeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchPerformerLargeQuery, FetchPerformerLargeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchPerformerLargeQuery, FetchPerformerLargeQueryVariables>(FetchPerformerLargeDocument, baseOptions);
        }
export type FetchPerformerLargeQueryHookResult = ReturnType<typeof useFetchPerformerLargeQuery>;
export type FetchPerformerLargeLazyQueryHookResult = ReturnType<typeof useFetchPerformerLargeLazyQuery>;
export type FetchPerformerLargeQueryResult = ApolloReactCommon.QueryResult<FetchPerformerLargeQuery, FetchPerformerLargeQueryVariables>;
export const FetchPerformersDocument = gql`
    query FetchPerformers($offset: Int) {
  performers(input: {limit: 50, offset: $offset}) {
    nodes {
      ...Performer
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${PerformerFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useFetchPerformersQuery__
 *
 * To run a query within a React component, call `useFetchPerformersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPerformersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPerformersQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFetchPerformersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchPerformersQuery, FetchPerformersQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchPerformersQuery, FetchPerformersQueryVariables>(FetchPerformersDocument, baseOptions);
      }
export function useFetchPerformersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchPerformersQuery, FetchPerformersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchPerformersQuery, FetchPerformersQueryVariables>(FetchPerformersDocument, baseOptions);
        }
export type FetchPerformersQueryHookResult = ReturnType<typeof useFetchPerformersQuery>;
export type FetchPerformersLazyQueryHookResult = ReturnType<typeof useFetchPerformersLazyQuery>;
export type FetchPerformersQueryResult = ApolloReactCommon.QueryResult<FetchPerformersQuery, FetchPerformersQueryVariables>;
export const FetchTeamsDocument = gql`
    query FetchTeams($offset: Int) {
  teams(input: {limit: 100, offset: $offset}) {
    nodes {
      ...Team
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${TeamFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useFetchTeamsQuery__
 *
 * To run a query within a React component, call `useFetchTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTeamsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFetchTeamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchTeamsQuery, FetchTeamsQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchTeamsQuery, FetchTeamsQueryVariables>(FetchTeamsDocument, baseOptions);
      }
export function useFetchTeamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchTeamsQuery, FetchTeamsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchTeamsQuery, FetchTeamsQueryVariables>(FetchTeamsDocument, baseOptions);
        }
export type FetchTeamsQueryHookResult = ReturnType<typeof useFetchTeamsQuery>;
export type FetchTeamsLazyQueryHookResult = ReturnType<typeof useFetchTeamsLazyQuery>;
export type FetchTeamsQueryResult = ApolloReactCommon.QueryResult<FetchTeamsQuery, FetchTeamsQueryVariables>;
export const SearchDocument = gql`
    query Search($query: String!) {
  search(query: $query) {
    ...SearchResult
  }
}
    ${SearchResultFragmentDoc}`;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;
export const FetchCategoriesDocument = gql`
    query FetchCategories {
  categories {
    nodes {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useFetchCategoriesQuery__
 *
 * To run a query within a React component, call `useFetchCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FetchCategoriesQuery, FetchCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<FetchCategoriesQuery, FetchCategoriesQueryVariables>(FetchCategoriesDocument, baseOptions);
      }
export function useFetchCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FetchCategoriesQuery, FetchCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FetchCategoriesQuery, FetchCategoriesQueryVariables>(FetchCategoriesDocument, baseOptions);
        }
export type FetchCategoriesQueryHookResult = ReturnType<typeof useFetchCategoriesQuery>;
export type FetchCategoriesLazyQueryHookResult = ReturnType<typeof useFetchCategoriesLazyQuery>;
export type FetchCategoriesQueryResult = ApolloReactCommon.QueryResult<FetchCategoriesQuery, FetchCategoriesQueryVariables>;
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  SearchResult: ResolverTypeWrapper<SearchResult>,
  Performer: ResolverTypeWrapper<Performer>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  SocialAccount: ResolverTypeWrapper<SocialAccount>,
  Team: ResolverTypeWrapper<Team>,
  ActivityConnection: ResolverTypeWrapper<ActivityConnection>,
  Activity: ResolverTypeWrapper<Activity>,
  Category: ResolverTypeWrapper<Category>,
  ActivitiesInput: ActivitiesInput,
  Order: Order,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  PerformersInput: PerformersInput,
  PerformerConnection: ResolverTypeWrapper<PerformerConnection>,
  CategoriesInput: CategoriesInput,
  CategoryConnection: ResolverTypeWrapper<CategoryConnection>,
  TeamsInput: TeamsInput,
  TeamConnection: ResolverTypeWrapper<TeamConnection>,
  YoutubeAccount: ResolverTypeWrapper<YoutubeAccount>,
  TwitterAccount: ResolverTypeWrapper<TwitterAccount>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  String: Scalars['String'],
  SearchResult: SearchResult,
  Performer: Performer,
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  Date: Scalars['Date'],
  SocialAccount: SocialAccount,
  Team: Team,
  ActivityConnection: ActivityConnection,
  Activity: Activity,
  Category: Category,
  ActivitiesInput: ActivitiesInput,
  Order: Order,
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  PerformersInput: PerformersInput,
  PerformerConnection: PerformerConnection,
  CategoriesInput: CategoriesInput,
  CategoryConnection: CategoryConnection,
  TeamsInput: TeamsInput,
  TeamConnection: TeamConnection,
  YoutubeAccount: YoutubeAccount,
  TwitterAccount: TwitterAccount,
}>;

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  public?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  startAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  endAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  performers?: Resolver<Array<ResolversTypes['Performer']>, ParentType, ContextType>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>,
}>;

export type ActivityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityConnection'] = ResolversParentTypes['ActivityConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  activities?: Resolver<ResolversTypes['ActivityConnection'], ParentType, ContextType, CategoryActivitiesArgs>,
}>;

export type CategoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryConnection'] = ResolversParentTypes['CategoryConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
}>;

export type PerformerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Performer'] = ResolversParentTypes['Performer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  latinName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ruby?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fullBody?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  public?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  socialAccounts?: Resolver<Array<ResolversTypes['SocialAccount']>, ParentType, ContextType>,
  teams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>,
  activities?: Resolver<ResolversTypes['ActivityConnection'], ParentType, ContextType>,
}>;

export type PerformerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerformerConnection'] = ResolversParentTypes['PerformerConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Performer']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  search?: Resolver<ResolversTypes['SearchResult'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'query'>>,
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<QueryActivityArgs, 'id'>>,
  activities?: Resolver<ResolversTypes['ActivityConnection'], ParentType, ContextType, QueryActivitiesArgs>,
  performer?: Resolver<Maybe<ResolversTypes['Performer']>, ParentType, ContextType, RequireFields<QueryPerformerArgs, 'id'>>,
  performers?: Resolver<ResolversTypes['PerformerConnection'], ParentType, ContextType, QueryPerformersArgs>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>,
  categories?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, QueryCategoriesArgs>,
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamArgs, 'id'>>,
  teams?: Resolver<ResolversTypes['TeamConnection'], ParentType, ContextType, QueryTeamsArgs>,
}>;

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = ResolversObject<{
  performers?: Resolver<Array<ResolversTypes['Performer']>, ParentType, ContextType>,
  activities?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>,
  teams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>,
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
}>;

export type SocialAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialAccount'] = ResolversParentTypes['SocialAccount']> = ResolversObject<{
  __resolveType: TypeResolveFn<'YoutubeAccount' | 'TwitterAccount', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
}>;

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  members?: Resolver<Array<ResolversTypes['Performer']>, ParentType, ContextType>,
  activities?: Resolver<ResolversTypes['ActivityConnection'], ParentType, ContextType>,
}>;

export type TeamConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamConnection'] = ResolversParentTypes['TeamConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
}>;

export type TwitterAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwitterAccount'] = ResolversParentTypes['TwitterAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  screenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
}>;

export type YoutubeAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['YoutubeAccount'] = ResolversParentTypes['YoutubeAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  channelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  channelName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creationOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Activity?: ActivityResolvers<ContextType>,
  ActivityConnection?: ActivityConnectionResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  CategoryConnection?: CategoryConnectionResolvers<ContextType>,
  Date?: GraphQLScalarType,
  PageInfo?: PageInfoResolvers<ContextType>,
  Performer?: PerformerResolvers<ContextType>,
  PerformerConnection?: PerformerConnectionResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SearchResult?: SearchResultResolvers<ContextType>,
  SocialAccount?: SocialAccountResolvers,
  Team?: TeamResolvers<ContextType>,
  TeamConnection?: TeamConnectionResolvers<ContextType>,
  TwitterAccount?: TwitterAccountResolvers<ContextType>,
  YoutubeAccount?: YoutubeAccountResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
