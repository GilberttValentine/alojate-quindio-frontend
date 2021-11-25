// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:'http://localhost:3000/api',
  CLOUDINARY_URL:"https://api.cloudinary.com/v1_1/errorhyperion/image/upload",
  CLOUDINARY_UPLOAD_PRESET:"d8zhm4a7",
  CLOUDINARY_LODGING_URL:"https://res.cloudinary.com/errorhyperion/image/upload/v1637435910",
  CLOUDINARY_PROFILE_URL:"https://res.cloudinary.com/errorhyperion/image/upload/v1637434697/profile",
  CLOUDINARY_TYPE_URL:"https://res.cloudinary.com/errorhyperion/image/upload/v1637434697/type"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
