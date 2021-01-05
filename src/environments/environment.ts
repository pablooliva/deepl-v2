require('dotenv').config();

export const environment = {
  production: false,
  // @ts-ignore
  deeplToken: process.env.DEEPL_TOKEN
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
