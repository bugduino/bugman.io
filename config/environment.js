/* jshint node: true */
const SERVER_HOST = "";

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'twocket-client',
    podModulePrefix: 'twocket-client/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      SOCKET_URL: 'ws://localhost:4000'
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    DS: {
      host: 'http://localhost:4000',
      namespace: 'api'
    },

    googleFonts: [
      'Josefin+Slab:100,300,400,700',
      'Roboto:300'
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
    'font-src': "'self' fonts.gstatic.com",
    'style-src': "'self' fonts.googleapis.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.DS.host = `https://${SERVER_HOST}`
    ENV.APP.SOCKET_URL = `wss://${SERVER_HOST}`
  }

  return ENV;
};
