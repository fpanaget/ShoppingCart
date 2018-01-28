// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  local_apiBaseUrl: "http://localhost:4001",
  apiBaseUrl: "https://api.eu.apiconnect.ibmcloud.com/laraziosinlibmcom-vu2018/sb/v3",
  authBaseUrl: "https://api.eu.apiconnect.ibmcloud.com/laraziosinlibmcom-vu2018/sb/shoppingoauth2",
  clientId: "3ab5e86c-fe60-412e-9028-4d28624bab0f"
};
