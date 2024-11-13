/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrganizationsTableInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  bank_account?: string | null,
};

export type ModelOrganizationsTableConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bank_account?: ModelStringInput | null,
  and?: Array< ModelOrganizationsTableConditionInput | null > | null,
  or?: Array< ModelOrganizationsTableConditionInput | null > | null,
  not?: ModelOrganizationsTableConditionInput | null,
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

export type OrganizationsTable = {
  __typename: "OrganizationsTable",
  id: string,
  name?: string | null,
  email?: string | null,
  bank_account?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrganizationsTableInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  bank_account?: string | null,
};

export type DeleteOrganizationsTableInput = {
  id: string,
};

export type CreateOrdersTableInput = {
  id?: string | null,
  order_datetime?: string | null,
  payment_info?: string | null,
  delivery_address?: AddressInput | null,
  driver_current_location?: string | null,
  order_status?: string | null,
  driver_rating?: number | null,
  user_comments?: string | null,
  ordersTableID_driverId?: string | null,
  ordersTableID_clientId?: string | null,
};

export type AddressInput = {
  lat?: number | null,
  long?: number | null,
  house_number?: number | null,
  references?: string | null,
};

export type ModelOrdersTableConditionInput = {
  order_datetime?: ModelStringInput | null,
  payment_info?: ModelStringInput | null,
  driver_current_location?: ModelStringInput | null,
  order_status?: ModelStringInput | null,
  driver_rating?: ModelFloatInput | null,
  user_comments?: ModelStringInput | null,
  and?: Array< ModelOrdersTableConditionInput | null > | null,
  or?: Array< ModelOrdersTableConditionInput | null > | null,
  not?: ModelOrdersTableConditionInput | null,
  ordersTableID_driverId?: ModelIDInput | null,
  ordersTableID_clientId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type OrdersTable = {
  __typename: "OrdersTable",
  id: string,
  order_datetime?: string | null,
  payment_info?: string | null,
  delivery_address?: Address | null,
  driver_current_location?: string | null,
  order_status?: string | null,
  driver_rating?: number | null,
  user_comments?: string | null,
  ID_driver?: DriversTable | null,
  ID_client?: ClientsTable | null,
  createdAt: string,
  updatedAt: string,
  ordersTableID_driverId?: string | null,
  ordersTableID_clientId?: string | null,
};

export type Address = {
  __typename: "Address",
  lat?: number | null,
  long?: number | null,
  house_number?: number | null,
  references?: string | null,
};

export type DriversTable = {
  __typename: "DriversTable",
  id: string,
  name?: string | null,
  email?: string | null,
  cellphone_number?: string | null,
  capacity?: number | null,
  plates?: string | null,
  bank_account?: string | null,
  driver_rating?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ClientsTable = {
  __typename: "ClientsTable",
  id: string,
  name?: string | null,
  cellphone_number?: string | null,
  adresses?: Address | null,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateOrdersTableInput = {
  id: string,
  order_datetime?: string | null,
  payment_info?: string | null,
  delivery_address?: AddressInput | null,
  driver_current_location?: string | null,
  order_status?: string | null,
  driver_rating?: number | null,
  user_comments?: string | null,
  ordersTableID_driverId?: string | null,
  ordersTableID_clientId?: string | null,
};

export type DeleteOrdersTableInput = {
  id: string,
};

export type CreateDriversTableInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  cellphone_number?: string | null,
  capacity?: number | null,
  plates?: string | null,
  bank_account?: string | null,
  driver_rating?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelDriversTableConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cellphone_number?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  plates?: ModelStringInput | null,
  bank_account?: ModelStringInput | null,
  driver_rating?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDriversTableConditionInput | null > | null,
  or?: Array< ModelDriversTableConditionInput | null > | null,
  not?: ModelDriversTableConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDriversTableInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  cellphone_number?: string | null,
  capacity?: number | null,
  plates?: string | null,
  bank_account?: string | null,
  driver_rating?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteDriversTableInput = {
  id: string,
};

export type CreateClientsTableInput = {
  id?: string | null,
  name?: string | null,
  cellphone_number?: string | null,
  adresses?: AddressInput | null,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelClientsTableConditionInput = {
  name?: ModelStringInput | null,
  cellphone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClientsTableConditionInput | null > | null,
  or?: Array< ModelClientsTableConditionInput | null > | null,
  not?: ModelClientsTableConditionInput | null,
};

export type UpdateClientsTableInput = {
  id: string,
  name?: string | null,
  cellphone_number?: string | null,
  adresses?: AddressInput | null,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteClientsTableInput = {
  id: string,
};

export type ModelOrganizationsTableFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bank_account?: ModelStringInput | null,
  and?: Array< ModelOrganizationsTableFilterInput | null > | null,
  or?: Array< ModelOrganizationsTableFilterInput | null > | null,
  not?: ModelOrganizationsTableFilterInput | null,
};

export type ModelOrganizationsTableConnection = {
  __typename: "ModelOrganizationsTableConnection",
  items:  Array<OrganizationsTable | null >,
  nextToken?: string | null,
};

export type ModelOrdersTableFilterInput = {
  id?: ModelIDInput | null,
  order_datetime?: ModelStringInput | null,
  payment_info?: ModelStringInput | null,
  driver_current_location?: ModelStringInput | null,
  order_status?: ModelStringInput | null,
  driver_rating?: ModelFloatInput | null,
  user_comments?: ModelStringInput | null,
  and?: Array< ModelOrdersTableFilterInput | null > | null,
  or?: Array< ModelOrdersTableFilterInput | null > | null,
  not?: ModelOrdersTableFilterInput | null,
  ordersTableID_driverId?: ModelIDInput | null,
  ordersTableID_clientId?: ModelIDInput | null,
};

export type ModelOrdersTableConnection = {
  __typename: "ModelOrdersTableConnection",
  items:  Array<OrdersTable | null >,
  nextToken?: string | null,
};

export type ModelDriversTableFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cellphone_number?: ModelStringInput | null,
  capacity?: ModelIntInput | null,
  plates?: ModelStringInput | null,
  bank_account?: ModelStringInput | null,
  driver_rating?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDriversTableFilterInput | null > | null,
  or?: Array< ModelDriversTableFilterInput | null > | null,
  not?: ModelDriversTableFilterInput | null,
};

export type ModelDriversTableConnection = {
  __typename: "ModelDriversTableConnection",
  items:  Array<DriversTable | null >,
  nextToken?: string | null,
};

export type ModelClientsTableFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  cellphone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClientsTableFilterInput | null > | null,
  or?: Array< ModelClientsTableFilterInput | null > | null,
  not?: ModelClientsTableFilterInput | null,
};

export type ModelClientsTableConnection = {
  __typename: "ModelClientsTableConnection",
  items:  Array<ClientsTable | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionOrganizationsTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bank_account?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationsTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationsTableFilterInput | null > | null,
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

export type ModelSubscriptionOrdersTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  order_datetime?: ModelSubscriptionStringInput | null,
  payment_info?: ModelSubscriptionStringInput | null,
  driver_current_location?: ModelSubscriptionStringInput | null,
  order_status?: ModelSubscriptionStringInput | null,
  driver_rating?: ModelSubscriptionFloatInput | null,
  user_comments?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrdersTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrdersTableFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDriversTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  cellphone_number?: ModelSubscriptionStringInput | null,
  capacity?: ModelSubscriptionIntInput | null,
  plates?: ModelSubscriptionStringInput | null,
  bank_account?: ModelSubscriptionStringInput | null,
  driver_rating?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriversTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriversTableFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionClientsTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  cellphone_number?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientsTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientsTableFilterInput | null > | null,
};

export type CreateOrganizationsTableMutationVariables = {
  input: CreateOrganizationsTableInput,
  condition?: ModelOrganizationsTableConditionInput | null,
};

export type CreateOrganizationsTableMutation = {
  createOrganizationsTable?:  {
    __typename: "OrganizationsTable",
    id: string,
    name?: string | null,
    email?: string | null,
    bank_account?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationsTableMutationVariables = {
  input: UpdateOrganizationsTableInput,
  condition?: ModelOrganizationsTableConditionInput | null,
};

export type UpdateOrganizationsTableMutation = {
  updateOrganizationsTable?:  {
    __typename: "OrganizationsTable",
    id: string,
    name?: string | null,
    email?: string | null,
    bank_account?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationsTableMutationVariables = {
  input: DeleteOrganizationsTableInput,
  condition?: ModelOrganizationsTableConditionInput | null,
};

export type DeleteOrganizationsTableMutation = {
  deleteOrganizationsTable?:  {
    __typename: "OrganizationsTable",
    id: string,
    name?: string | null,
    email?: string | null,
    bank_account?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrdersTableMutationVariables = {
  input: CreateOrdersTableInput,
  condition?: ModelOrdersTableConditionInput | null,
};

export type CreateOrdersTableMutation = {
  createOrdersTable?:  {
    __typename: "OrdersTable",
    id: string,
    order_datetime?: string | null,
    payment_info?: string | null,
    delivery_address?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    driver_current_location?: string | null,
    order_status?: string | null,
    driver_rating?: number | null,
    user_comments?: string | null,
    ID_driver?:  {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    ID_client?:  {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ordersTableID_driverId?: string | null,
    ordersTableID_clientId?: string | null,
  } | null,
};

export type UpdateOrdersTableMutationVariables = {
  input: UpdateOrdersTableInput,
  condition?: ModelOrdersTableConditionInput | null,
};

export type UpdateOrdersTableMutation = {
  updateOrdersTable?:  {
    __typename: "OrdersTable",
    id: string,
    order_datetime?: string | null,
    payment_info?: string | null,
    delivery_address?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    driver_current_location?: string | null,
    order_status?: string | null,
    driver_rating?: number | null,
    user_comments?: string | null,
    ID_driver?:  {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    ID_client?:  {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ordersTableID_driverId?: string | null,
    ordersTableID_clientId?: string | null,
  } | null,
};

export type DeleteOrdersTableMutationVariables = {
  input: DeleteOrdersTableInput,
  condition?: ModelOrdersTableConditionInput | null,
};

export type DeleteOrdersTableMutation = {
  deleteOrdersTable?:  {
    __typename: "OrdersTable",
    id: string,
    order_datetime?: string | null,
    payment_info?: string | null,
    delivery_address?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    driver_current_location?: string | null,
    order_status?: string | null,
    driver_rating?: number | null,
    user_comments?: string | null,
    ID_driver?:  {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    ID_client?:  {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ordersTableID_driverId?: string | null,
    ordersTableID_clientId?: string | null,
  } | null,
};

export type CreateDriversTableMutationVariables = {
  input: CreateDriversTableInput,
  condition?: ModelDriversTableConditionInput | null,
};

export type CreateDriversTableMutation = {
  createDriversTable?:  {
    __typename: "DriversTable",
    id: string,
    name?: string | null,
    email?: string | null,
    cellphone_number?: string | null,
    capacity?: number | null,
    plates?: string | null,
    bank_account?: string | null,
    driver_rating?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateDriversTableMutationVariables = {
  input: UpdateDriversTableInput,
  condition?: ModelDriversTableConditionInput | null,
};

export type UpdateDriversTableMutation = {
  updateDriversTable?:  {
    __typename: "DriversTable",
    id: string,
    name?: string | null,
    email?: string | null,
    cellphone_number?: string | null,
    capacity?: number | null,
    plates?: string | null,
    bank_account?: string | null,
    driver_rating?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteDriversTableMutationVariables = {
  input: DeleteDriversTableInput,
  condition?: ModelDriversTableConditionInput | null,
};

export type DeleteDriversTableMutation = {
  deleteDriversTable?:  {
    __typename: "DriversTable",
    id: string,
    name?: string | null,
    email?: string | null,
    cellphone_number?: string | null,
    capacity?: number | null,
    plates?: string | null,
    bank_account?: string | null,
    driver_rating?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateClientsTableMutationVariables = {
  input: CreateClientsTableInput,
  condition?: ModelClientsTableConditionInput | null,
};

export type CreateClientsTableMutation = {
  createClientsTable?:  {
    __typename: "ClientsTable",
    id: string,
    name?: string | null,
    cellphone_number?: string | null,
    adresses?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateClientsTableMutationVariables = {
  input: UpdateClientsTableInput,
  condition?: ModelClientsTableConditionInput | null,
};

export type UpdateClientsTableMutation = {
  updateClientsTable?:  {
    __typename: "ClientsTable",
    id: string,
    name?: string | null,
    cellphone_number?: string | null,
    adresses?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteClientsTableMutationVariables = {
  input: DeleteClientsTableInput,
  condition?: ModelClientsTableConditionInput | null,
};

export type DeleteClientsTableMutation = {
  deleteClientsTable?:  {
    __typename: "ClientsTable",
    id: string,
    name?: string | null,
    cellphone_number?: string | null,
    adresses?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetOrganizationsTableQueryVariables = {
  id: string,
};

export type GetOrganizationsTableQuery = {
  getOrganizationsTable?:  {
    __typename: "OrganizationsTable",
    id: string,
    name?: string | null,
    email?: string | null,
    bank_account?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsTablesQueryVariables = {
  filter?: ModelOrganizationsTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsTablesQuery = {
  listOrganizationsTables?:  {
    __typename: "ModelOrganizationsTableConnection",
    items:  Array< {
      __typename: "OrganizationsTable",
      id: string,
      name?: string | null,
      email?: string | null,
      bank_account?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrdersTableQueryVariables = {
  id: string,
};

export type GetOrdersTableQuery = {
  getOrdersTable?:  {
    __typename: "OrdersTable",
    id: string,
    order_datetime?: string | null,
    payment_info?: string | null,
    delivery_address?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    driver_current_location?: string | null,
    order_status?: string | null,
    driver_rating?: number | null,
    user_comments?: string | null,
    ID_driver?:  {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    ID_client?:  {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ordersTableID_driverId?: string | null,
    ordersTableID_clientId?: string | null,
  } | null,
};

export type ListOrdersTablesQueryVariables = {
  filter?: ModelOrdersTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersTablesQuery = {
  listOrdersTables?:  {
    __typename: "ModelOrdersTableConnection",
    items:  Array< {
      __typename: "OrdersTable",
      id: string,
      order_datetime?: string | null,
      payment_info?: string | null,
      driver_current_location?: string | null,
      order_status?: string | null,
      driver_rating?: number | null,
      user_comments?: string | null,
      createdAt: string,
      updatedAt: string,
      ordersTableID_driverId?: string | null,
      ordersTableID_clientId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDriversTableQueryVariables = {
  id: string,
};

export type GetDriversTableQuery = {
  getDriversTable?:  {
    __typename: "DriversTable",
    id: string,
    name?: string | null,
    email?: string | null,
    cellphone_number?: string | null,
    capacity?: number | null,
    plates?: string | null,
    bank_account?: string | null,
    driver_rating?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListDriversTablesQueryVariables = {
  filter?: ModelDriversTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriversTablesQuery = {
  listDriversTables?:  {
    __typename: "ModelDriversTableConnection",
    items:  Array< {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClientsTableQueryVariables = {
  id: string,
};

export type GetClientsTableQuery = {
  getClientsTable?:  {
    __typename: "ClientsTable",
    id: string,
    name?: string | null,
    cellphone_number?: string | null,
    adresses?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListClientsTablesQueryVariables = {
  filter?: ModelClientsTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsTablesQuery = {
  listClientsTables?:  {
    __typename: "ModelClientsTableConnection",
    items:  Array< {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrganizationsTableSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationsTableFilterInput | null,
};

export type OnCreateOrganizationsTableSubscription = {
  onCreateOrganizationsTable?:  {
    __typename: "OrganizationsTable",
    id: string,
    name?: string | null,
    email?: string | null,
    bank_account?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationsTableSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationsTableFilterInput | null,
};

export type OnUpdateOrganizationsTableSubscription = {
  onUpdateOrganizationsTable?:  {
    __typename: "OrganizationsTable",
    id: string,
    name?: string | null,
    email?: string | null,
    bank_account?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationsTableSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationsTableFilterInput | null,
};

export type OnDeleteOrganizationsTableSubscription = {
  onDeleteOrganizationsTable?:  {
    __typename: "OrganizationsTable",
    id: string,
    name?: string | null,
    email?: string | null,
    bank_account?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrdersTableSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersTableFilterInput | null,
};

export type OnCreateOrdersTableSubscription = {
  onCreateOrdersTable?:  {
    __typename: "OrdersTable",
    id: string,
    order_datetime?: string | null,
    payment_info?: string | null,
    delivery_address?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    driver_current_location?: string | null,
    order_status?: string | null,
    driver_rating?: number | null,
    user_comments?: string | null,
    ID_driver?:  {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    ID_client?:  {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ordersTableID_driverId?: string | null,
    ordersTableID_clientId?: string | null,
  } | null,
};

export type OnUpdateOrdersTableSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersTableFilterInput | null,
};

export type OnUpdateOrdersTableSubscription = {
  onUpdateOrdersTable?:  {
    __typename: "OrdersTable",
    id: string,
    order_datetime?: string | null,
    payment_info?: string | null,
    delivery_address?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    driver_current_location?: string | null,
    order_status?: string | null,
    driver_rating?: number | null,
    user_comments?: string | null,
    ID_driver?:  {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    ID_client?:  {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ordersTableID_driverId?: string | null,
    ordersTableID_clientId?: string | null,
  } | null,
};

export type OnDeleteOrdersTableSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersTableFilterInput | null,
};

export type OnDeleteOrdersTableSubscription = {
  onDeleteOrdersTable?:  {
    __typename: "OrdersTable",
    id: string,
    order_datetime?: string | null,
    payment_info?: string | null,
    delivery_address?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    driver_current_location?: string | null,
    order_status?: string | null,
    driver_rating?: number | null,
    user_comments?: string | null,
    ID_driver?:  {
      __typename: "DriversTable",
      id: string,
      name?: string | null,
      email?: string | null,
      cellphone_number?: string | null,
      capacity?: number | null,
      plates?: string | null,
      bank_account?: string | null,
      driver_rating?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    ID_client?:  {
      __typename: "ClientsTable",
      id: string,
      name?: string | null,
      cellphone_number?: string | null,
      email?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    ordersTableID_driverId?: string | null,
    ordersTableID_clientId?: string | null,
  } | null,
};

export type OnCreateDriversTableSubscriptionVariables = {
  filter?: ModelSubscriptionDriversTableFilterInput | null,
};

export type OnCreateDriversTableSubscription = {
  onCreateDriversTable?:  {
    __typename: "DriversTable",
    id: string,
    name?: string | null,
    email?: string | null,
    cellphone_number?: string | null,
    capacity?: number | null,
    plates?: string | null,
    bank_account?: string | null,
    driver_rating?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateDriversTableSubscriptionVariables = {
  filter?: ModelSubscriptionDriversTableFilterInput | null,
};

export type OnUpdateDriversTableSubscription = {
  onUpdateDriversTable?:  {
    __typename: "DriversTable",
    id: string,
    name?: string | null,
    email?: string | null,
    cellphone_number?: string | null,
    capacity?: number | null,
    plates?: string | null,
    bank_account?: string | null,
    driver_rating?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteDriversTableSubscriptionVariables = {
  filter?: ModelSubscriptionDriversTableFilterInput | null,
};

export type OnDeleteDriversTableSubscription = {
  onDeleteDriversTable?:  {
    __typename: "DriversTable",
    id: string,
    name?: string | null,
    email?: string | null,
    cellphone_number?: string | null,
    capacity?: number | null,
    plates?: string | null,
    bank_account?: string | null,
    driver_rating?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateClientsTableSubscriptionVariables = {
  filter?: ModelSubscriptionClientsTableFilterInput | null,
};

export type OnCreateClientsTableSubscription = {
  onCreateClientsTable?:  {
    __typename: "ClientsTable",
    id: string,
    name?: string | null,
    cellphone_number?: string | null,
    adresses?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateClientsTableSubscriptionVariables = {
  filter?: ModelSubscriptionClientsTableFilterInput | null,
};

export type OnUpdateClientsTableSubscription = {
  onUpdateClientsTable?:  {
    __typename: "ClientsTable",
    id: string,
    name?: string | null,
    cellphone_number?: string | null,
    adresses?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteClientsTableSubscriptionVariables = {
  filter?: ModelSubscriptionClientsTableFilterInput | null,
};

export type OnDeleteClientsTableSubscription = {
  onDeleteClientsTable?:  {
    __typename: "ClientsTable",
    id: string,
    name?: string | null,
    cellphone_number?: string | null,
    adresses?:  {
      __typename: "Address",
      lat?: number | null,
      long?: number | null,
      house_number?: number | null,
      references?: string | null,
    } | null,
    email?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
