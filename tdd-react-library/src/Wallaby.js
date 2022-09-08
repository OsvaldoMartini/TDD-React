module.exports = function wallabyConfig(wallaby) {
  return {
    files: [
      'lib/use-extender/*.js',
      'modules/**/*.js',
      'plugins/**/*.js',
      'src/**/*.js'
    ],

    tests: [
      'test/lib/*test.js',
      'test/**/*Spec.js'
    ],
     env: {
      kind: 'electron',
      options: { width: 400, height: 400 }
    }
  };
};