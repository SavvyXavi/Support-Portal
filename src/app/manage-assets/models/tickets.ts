export class Tickets {
  title: string;
  description: string;
  customerNameOrId: string;
  assetRefOrId: string;
  visibleToCustomer: true;
  contactEmailOrId: string;
  ticketCategoryNameOrId: string;
  ticketTypeNameOrId: string;
}

// "Title": "string",  Entry Field
//  "Description": "string", Entry Field
//  "CustomerNameOrId": "string", Pulled from Login
//  "AssetRefOrId": "string",   (Eventually we will pull this for a drop down but for now put in a place holder.)
//  "VisibleToCustomer": true,  (You will send this as is.)
//  "ContactEmailOrId": "string", (This will be the login (we will use gen exp to make sure it’s an email address for login ID))
//   “TicketCategoryNameOrId”: “string” See Below
//  “TicketTypeNameOrId”: “string” See Below
