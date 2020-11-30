
import convict = require('convict');

const values = convict({
  environment: {
    doc: 'The application environment.',
    format: ['local', 'local-ts', 'develop', 'qa', 'stage'],
    default: 'local-ts',
    env: 'ENVIRONMENT'
  },
  jestTimeout: {
    doc: 'Timeout for tests',
    format: 'int',
    default: 300000
  },
  e2eTimeout: {
    doc: 'Timeout for e2e tests',
    format: 'int',
    default: 900000
  },
  rest: {
    baseUrl: {
      doc: 'URL of backend api server where to send requests',
      env: 'API_BASE_URL',
      default: 'http://localhost:3000',
      format: 'url'
    }
  },
  ui: {
    baseUrl: {
      doc: 'URL of UI',
      env: 'UI_BASE_URL',
      default: 'http://localhost:3666',
      format: 'url'
    },
    oktaOrgUrl: {
      doc: 'URL of okta org',
      env: 'OKTA_ORG_URL',
      default: 'http://localhost',
      format: 'url'
    },
    authClientId: {
      doc: 'Client id for UI to auth',
      env: 'UI_OKTA_AUTH_CLIENT_ID',
      format: String,
      default: ''
    },
    authUserName: {
      doc: 'User name for UI to auth',
      env: 'UI_OKTA_AUTH_USERNAME',
      format: String,
      default: ''
    },
    authUserPassword: {
      doc: 'User password for UI to auth',
      env: 'UI_OKTA_AUTH_PASSWORD',
      format: String,
      default: ''
    },
    defaultTimeout: {
      doc: 'Timeout for UI load and wait events',
      format: 'int',
      default: 100000
    }
  },
  auth: {
    url: {
      doc: 'URL of server to authorize',
      env: 'AUTH_OKTA_URL',
      format: String,
      default: ''
    },
    clientId: {
      doc: 'Client id of okta for auth',
      env: 'AUTH_CLIENT_ID',
      format: String,
      default: ''
    },
    clientSecret: {
      doc: 'Client id of okta for auth',
      env: 'AUTH_CLIENT_SECRET',
      format: String,
      default: ''
    },
    scope: {
      doc: 'Client id of okta for auth',
      env: 'AUTH_SCOPE',
      format: String,
      default: ''
    }
  }
});

values.validate({ allowed: 'strict' });

export const config = values.getProperties();
