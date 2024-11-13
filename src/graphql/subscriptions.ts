/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOrganizationsTable = /* GraphQL */ `subscription OnCreateOrganizationsTable(
  $filter: ModelSubscriptionOrganizationsTableFilterInput
) {
  onCreateOrganizationsTable(filter: $filter) {
    id
    name
    email
    bank_account
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationsTableSubscriptionVariables,
  APITypes.OnCreateOrganizationsTableSubscription
>;
export const onUpdateOrganizationsTable = /* GraphQL */ `subscription OnUpdateOrganizationsTable(
  $filter: ModelSubscriptionOrganizationsTableFilterInput
) {
  onUpdateOrganizationsTable(filter: $filter) {
    id
    name
    email
    bank_account
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationsTableSubscriptionVariables,
  APITypes.OnUpdateOrganizationsTableSubscription
>;
export const onDeleteOrganizationsTable = /* GraphQL */ `subscription OnDeleteOrganizationsTable(
  $filter: ModelSubscriptionOrganizationsTableFilterInput
) {
  onDeleteOrganizationsTable(filter: $filter) {
    id
    name
    email
    bank_account
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationsTableSubscriptionVariables,
  APITypes.OnDeleteOrganizationsTableSubscription
>;
export const onCreateOrdersTable = /* GraphQL */ `subscription OnCreateOrdersTable(
  $filter: ModelSubscriptionOrdersTableFilterInput
) {
  onCreateOrdersTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrdersTableSubscriptionVariables,
  APITypes.OnCreateOrdersTableSubscription
>;
export const onUpdateOrdersTable = /* GraphQL */ `subscription OnUpdateOrdersTable(
  $filter: ModelSubscriptionOrdersTableFilterInput
) {
  onUpdateOrdersTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrdersTableSubscriptionVariables,
  APITypes.OnUpdateOrdersTableSubscription
>;
export const onDeleteOrdersTable = /* GraphQL */ `subscription OnDeleteOrdersTable(
  $filter: ModelSubscriptionOrdersTableFilterInput
) {
  onDeleteOrdersTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrdersTableSubscriptionVariables,
  APITypes.OnDeleteOrdersTableSubscription
>;
export const onCreateDriversTable = /* GraphQL */ `subscription OnCreateDriversTable(
  $filter: ModelSubscriptionDriversTableFilterInput
) {
  onCreateDriversTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDriversTableSubscriptionVariables,
  APITypes.OnCreateDriversTableSubscription
>;
export const onUpdateDriversTable = /* GraphQL */ `subscription OnUpdateDriversTable(
  $filter: ModelSubscriptionDriversTableFilterInput
) {
  onUpdateDriversTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDriversTableSubscriptionVariables,
  APITypes.OnUpdateDriversTableSubscription
>;
export const onDeleteDriversTable = /* GraphQL */ `subscription OnDeleteDriversTable(
  $filter: ModelSubscriptionDriversTableFilterInput
) {
  onDeleteDriversTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDriversTableSubscriptionVariables,
  APITypes.OnDeleteDriversTableSubscription
>;
export const onCreateClientsTable = /* GraphQL */ `subscription OnCreateClientsTable(
  $filter: ModelSubscriptionClientsTableFilterInput
) {
  onCreateClientsTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateClientsTableSubscriptionVariables,
  APITypes.OnCreateClientsTableSubscription
>;
export const onUpdateClientsTable = /* GraphQL */ `subscription OnUpdateClientsTable(
  $filter: ModelSubscriptionClientsTableFilterInput
) {
  onUpdateClientsTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateClientsTableSubscriptionVariables,
  APITypes.OnUpdateClientsTableSubscription
>;
export const onDeleteClientsTable = /* GraphQL */ `subscription OnDeleteClientsTable(
  $filter: ModelSubscriptionClientsTableFilterInput
) {
  onDeleteClientsTable(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteClientsTableSubscriptionVariables,
  APITypes.OnDeleteClientsTableSubscription
>;
