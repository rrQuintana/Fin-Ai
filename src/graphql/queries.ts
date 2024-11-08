/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOrganizationsTable = /* GraphQL */ `query GetOrganizationsTable($id: ID!) {
  getOrganizationsTable(id: $id) {
    id
    name
    email
    bank_account
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrganizationsTableQueryVariables,
  APITypes.GetOrganizationsTableQuery
>;
export const listOrganizationsTables = /* GraphQL */ `query ListOrganizationsTables(
  $filter: ModelOrganizationsTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizationsTables(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      bank_account
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrganizationsTablesQueryVariables,
  APITypes.ListOrganizationsTablesQuery
>;
export const getOrdersTable = /* GraphQL */ `query GetOrdersTable($id: ID!) {
  getOrdersTable(id: $id) {
    id
    order_datetime
    payment_info
    delivery_address {
      lat
      long
      house_number
      references
      __typename
    }
    driver_current_location
    order_status
    driver_rating
    user_comments
    ID_driver {
      id
      name
      email
      cellphone_number
      capacity
      plates
      bank_account
      driver_rating
      createdAt
      updatedAt
      __typename
    }
    ID_client {
      id
      name
      cellphone_number
      email
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    ordersTableID_driverId
    ordersTableID_clientId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrdersTableQueryVariables,
  APITypes.GetOrdersTableQuery
>;
export const listOrdersTables = /* GraphQL */ `query ListOrdersTables(
  $filter: ModelOrdersTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrdersTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      order_datetime
      payment_info
      driver_current_location
      order_status
      driver_rating
      user_comments
      createdAt
      updatedAt
      ordersTableID_driverId
      ordersTableID_clientId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersTablesQueryVariables,
  APITypes.ListOrdersTablesQuery
>;
export const getDriversTable = /* GraphQL */ `query GetDriversTable($id: ID!) {
  getDriversTable(id: $id) {
    id
    name
    email
    cellphone_number
    capacity
    plates
    bank_account
    driver_rating
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDriversTableQueryVariables,
  APITypes.GetDriversTableQuery
>;
export const listDriversTables = /* GraphQL */ `query ListDriversTables(
  $filter: ModelDriversTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listDriversTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      cellphone_number
      capacity
      plates
      bank_account
      driver_rating
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDriversTablesQueryVariables,
  APITypes.ListDriversTablesQuery
>;
export const getClientsTable = /* GraphQL */ `query GetClientsTable($id: ID!) {
  getClientsTable(id: $id) {
    id
    name
    cellphone_number
    adresses {
      lat
      long
      house_number
      references
      __typename
    }
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetClientsTableQueryVariables,
  APITypes.GetClientsTableQuery
>;
export const listClientsTables = /* GraphQL */ `query ListClientsTables(
  $filter: ModelClientsTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientsTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      cellphone_number
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
  APITypes.ListClientsTablesQueryVariables,
  APITypes.ListClientsTablesQuery
>;
