import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  /** Example field (placeholder) */
  id: Scalars['Int'];
  /** Name of the Category */
  name: Scalars['String'];
  /** Can this category be used in a bundle (as an item) */
  bundelable: Scalars['Boolean'];
  /** Subcategories */
  subCategories: Array<Category>;
  parentCategory?: Maybe<Category>;
};

export type CreateCategoryInput = {
  /** Name of the category */
  name: Scalars['String'];
  /** Can this category be used in a bundle? */
  bundelable: Scalars['Boolean'];
  /** Id of the parent category */
  parentCategoryId?: Maybe<Scalars['Float']>;
};

export type CreateItemInput = {
  regCode: Scalars['String'];
};

export type CreateNoteInput = {
  /** Content of the note */
  content: Scalars['String'];
  /** Id of the item for relation */
  itemId: Scalars['Int'];
};

export type CreateUserInputDto = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  full_name: Scalars['String'];
  role: Scalars['Float'];
  personal_code: Scalars['String'];
};


export type Item = {
  __typename?: 'Item';
  id: Scalars['Int'];
  regCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  notes: Array<Note>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  updateCategory: Category;
  removeCategory: Category;
  createNote: Note;
  removeNote: Note;
  createItem: Item;
  updateItem: Item;
  removeItem: Item;
  deleteUser: Scalars['Boolean'];
  createUser: User;
  updatePassword: Scalars['Boolean'];
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
  id: Scalars['Int'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationCreateNoteArgs = {
  createNoteInput: CreateNoteInput;
};


export type MutationRemoveNoteArgs = {
  id: Scalars['Int'];
};


export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput;
};


export type MutationUpdateItemArgs = {
  updateItemInput: UpdateItemInput;
};


export type MutationRemoveItemArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInputDto;
};


export type MutationUpdatePasswordArgs = {
  id: Scalars['Float'];
  newpass: Scalars['String'];
  previouspass: Scalars['String'];
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  item: Item;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  note: Note;
  notes: Array<Note>;
  items: Array<Item>;
  item: Item;
  userById: User;
  userByPersonalCode: User;
  userByUsername: User;
  userByPhone: User;
  users: Array<User>;
};


export type QueryNoteArgs = {
  id: Scalars['Float'];
};


export type QueryItemArgs = {
  id: Scalars['Int'];
};


export type QueryUserByIdArgs = {
  id: Scalars['Float'];
};


export type QueryUserByPersonalCodeArgs = {
  id: Scalars['String'];
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryUserByPhoneArgs = {
  phone: Scalars['String'];
};

export type UpdateCategoryInput = {
  /** Name of the category */
  name?: Maybe<Scalars['String']>;
  /** Can this category be used in a bundle? */
  bundelable?: Maybe<Scalars['Boolean']>;
};

export type UpdateItemInput = {
  regCode?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  phone: Scalars['String'];
  email: Scalars['String'];
  registration_date: Scalars['DateTime'];
  role: Scalars['Float'];
  full_name: Scalars['String'];
  personal_code: Scalars['String'];
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'bundelable'>
    & { subCategories: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    )>, parentCategory?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    )> }
  )> }
);


export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    id
    name
    bundelable
    subCategories {
      id
    }
    parentCategory {
      id
    }
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;