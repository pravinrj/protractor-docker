
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
   
    //directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    specs: ['login_spec.js'],

      };