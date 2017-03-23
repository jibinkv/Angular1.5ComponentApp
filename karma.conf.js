'use strict';

var path = require('path');
var conf = require('./gulp/conf');

var _ = require('lodash');
var wiredep = require('wiredep');

var pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
];

var angularFiles = [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js'
];

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  return wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.src, '/app/**/*.module.js'),
      path.join(conf.paths.src, '/app/**/*.js'),
      path.join(conf.paths.src, '/**/*.spec.js')
    ])
    .concat(pathSrcHtml)
    .concat(angularFiles);
}

module.exports = function(config) {

  var configuration = {
    files: listFiles(),

    singleRun: true,

    autoWatch: false,

    ngHtml2JsPreprocessor: {
      stripPrefix: conf.paths.src + '/',
      moduleName: 'Angular1.5ComponentApp'
    },

    logLevel: 'WARN',

    frameworks: ['jasmine', 'angular-filesort'],

    angularFilesort: {
      whitelist: [path.join(conf.paths.src, '/**/!(*.html|*.spec).js')]
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-coverage',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    reporters: ['progress', 'coverage']
  };

  // This is the default preprocessors configuration for a usage with Karma cli
  // The coverage preprocessor in added in gulp/unit-test.js only for single tests
  // It was not possible to do it there because karma doesn't let us now if we are
  // running a single test or not
  configuration.preprocessors = {};
  pathSrcHtml.forEach(function(path) {
    configuration.preprocessors[path] = ['ng-html2js'];
  });

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};

// module.exports = function(config) {
//   config.set({
//     preprocessors: {
//       'src/**/*.html': ['ng-html2js']
//     },

//     files: [
//       'bower_components/angular/angular.js',
//       'bower_components/angular-mocks/angular-mocks.js',
//       'src//app/**/*.module.js',
//       'src/app/**/*.js',
//       '/**/*.spec.js',
//       'src/app/**/*.html',
//     ],

//     ngHtml2JsPreprocessor: {
//       stripPrefix: 'src/',
//       moduleName: 'templates'
//     }
//   });
// };


