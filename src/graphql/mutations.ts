/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOrganizationsTable = /* GraphQL */ `mutation CreateOrganizationsTable(
  $input: CreateOrganizationsTableInput!
  $condition: ModelOrganizationsTableConditionInput
) {
  createOrganizationsTable(input: $input, condition: $condition) {
    id
    name
    email
    bank_account
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrganizationsTableMutationVariables,
  APITypes.CreateOrganizationsTableMutation
>;
export const updateOrganizationsTable = /* GraphQL */ `mutation UpdateOrganizationsTable(
  $input: UpdateOrganizationsTableInput!
  $condition: ModelOrganizationsTableConditionInput
) {
  updateOrganizationsTable(input: $input, condition: $condition) {
    id
    name
    email
    bank_account
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrganizationsTableMutationVariables,
  APITypes.UpdateOrganizationsTableMutation
>;
export const deleteOrganizationsTable = /* GraphQL */ `mutation DeleteOrganizationsTable(
  $input: DeleteOrganizationsTableInput!
  $condition: ModelOrganizationsTableConditionInput
) {
  deleteOrganizationsTable(input: $input, condition: $condition) {
    id
    name
    email
    bank_account
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrganizationsTableMutationVariables,
  APITypes.DeleteOrganizationsTableMutation
>;
export const createOrdersTable = /* GraphQL */ `mutation CreateOrdersTable(
  $input: CreateOrdersTableInput!
  $condition: ModelOrdersTableConditionInput
) {
  createOrdersTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrdersTableMutationVariables,
  APITypes.CreateOrdersTableMutation
>;
export const updateOrdersTable = /* GraphQL */ `mutation UpdateOrdersTable(
  $input: UpdateOrdersTableInput!
  $condition: ModelOrdersTableConditionInput
) {
  updateOrdersTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrdersTableMutationVariables,
  APITypes.UpdateOrdersTableMutation
>;
export const deleteOrdersTable = /* GraphQL */ `mutation DeleteOrdersTable(
  $input: DeleteOrdersTableInput!
  $condition: ModelOrdersTableConditionInput
) {
  deleteOrdersTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrdersTableMutationVariables,
  APITypes.DeleteOrdersTableMutation
>;
export const createDriversTable = /* GraphQL */ `mutation CreateDriversTable(
  $input: CreateDriversTableInput!
  $condition: ModelDriversTableConditionInput
) {
  createDriversTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDriversTableMutationVariables,
  APITypes.CreateDriversTableMutation
>;
export const updateDriversTable = /* GraphQL */ `mutation UpdateDriversTable(
  $input: UpdateDriversTableInput!
  $condition: ModelDriversTableConditionInput
) {
  updateDriversTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDriversTableMutationVariables,
  APITypes.UpdateDriversTableMutation
>;
export const deleteDriversTable = /* GraphQL */ `mutation DeleteDriversTable(
  $input: DeleteDriversTableInput!
  $condition: ModelDriversTableConditionInput
) {
  deleteDriversTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDriversTableMutationVariables,
  APITypes.DeleteDriversTableMutation
>;
export const createClientsTable = /* GraphQL */ `mutation CreateClientsTable(
  $input: CreateClientsTableInput!
  $condition: ModelClientsTableConditionInput
) {
  createClientsTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClientsTableMutationVariables,
  APITypes.CreateClientsTableMutation
>;
export const updateClientsTable = /* GraphQL */ `mutation UpdateClientsTable(
  $input: UpdateClientsTableInput!
  $condition: ModelClientsTableConditionInput
) {
  updateClientsTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClientsTableMutationVariables,
  APITypes.UpdateClientsTableMutation
>;
export const deleteClientsTable = /* GraphQL */ `mutation DeleteClientsTable(
  $input: DeleteClientsTableInput!
  $condition: ModelClientsTableConditionInput
) {
  deleteClientsTable(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClientsTableMutationVariables,
  APITypes.DeleteClientsTableMutation
>;
