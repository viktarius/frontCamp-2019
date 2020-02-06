// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const { SpecReporter } = require('jasmine-spec-reporter');

const ReportportalAgent = require('agent-js-jasmine');

const agent = new ReportportalAgent({
  token: "c34fcc5a-a2ed-418f-a0c5-56e7e6afdbe7",
  endpoint: "https://web.demo.reportportal.io/api/v1",
  launch: "viktarius_TEST_frontCamp",
  project: "viktarius_personal",
  attachPicturesToLogs: true,
  attributes: []
});

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(agent.getJasmineReporter());
  },
  afterLaunch:() => {
    return agent.getExitPromise();
  }
};
