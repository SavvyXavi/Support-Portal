// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env: 'Local',
  ver: 'Local Only!',
  /* serverUrl: 'https://finalauth.noble1it.com',  */
  serverUrl: 'https://localhost:8400',
  secret: 'Noble1Solutions',
  LoginPull: 'https://harmonyprodpartnersone.azurewebsites.net/api/',
  CusLoginPull: 'https://harmonyprodcustomersone.azurewebsites.net/api/',
  /* DataPull: 'https://n1stestdata.noble1it.com', */
  DataPull: 'http://localhost:6300',
  LogoutUrl: 'https://qa2supportportal.azurewebsites.net/',
  AssetTest: 'https://locapicall.noble1it.com/profile'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
