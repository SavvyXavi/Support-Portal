import { TicketType } from './../../types/ticket-type.enum';

export class Tickets {
  Title: string;
  RefNumber: string;
  Description: string;
  Body: string;
  CustomerName: string;
  AssetIdentifier: string;
  Schedule: string;
  SlaSeverity: string;
  Status: string;
  UpdatedDate: string;
  VisibleToCustomer?: true;
  ContactEmailOrId?: string;
  TicketCategoryNameOrId: string;
  TicketTypeNameOrId: string;
  Name: string;
  LatestPublicComment: string;
  LastUpdatedBy: string;
}

// "Title": "string",  Entry Field
//  "Description": "string", Entry Field
//  "CustomerNameOrId": "string", Pulled from Login
//  "AssetRefOrId": "string",   (Eventually we will pull this for a drop down but for now put in a place holder.)
//  "VisibleToCustomer": true,  (You will send this as is.)
//  "ContactEmailOrId": "string", (This will be the login (we will use gen exp to make sure it’s an email address for login ID))
//   “TicketCategoryNameOrId”: “string” See Below
//  “TicketTypeNameOrId”: “string” See Below
