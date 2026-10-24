module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['features/step_definitions/**/*.js'],
    format: ['summary', 'html:reports/cucumber_report.html'],
    publishQuiet: true
  }
};