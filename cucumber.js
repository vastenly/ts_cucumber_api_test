let common = [
  'src/features/**/*.feature',
  '--require-module ts-node/register',
  '--require src/step-definitions/**/*.ts',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty'
].join(' ');

module.exports = {
  default: common
};
