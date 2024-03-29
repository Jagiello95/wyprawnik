// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiamFnaWVsbG85NSIsImEiOiJja240OHp0aXowZjNtMndzOXZrNGQ1cmttIn0.JBP7jKtPPYz79T-D1IZYww'
  },
  defaultLocale: 'en',
  availableLocales: ['en', 'de', 'pl'],
  authUrl: 'http://localhost:3000',
  squadUrl: 'http://localhost:3001',
  appUrl: 'http://localhost:4200/#/auth/login/'
};