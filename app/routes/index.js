import BaseApplication  from "./base/BaseApplication";

module.exports = {
  name: 'app',
  path: '/re/',
  component: BaseApplication,
  childRoutes: [
    require('./special'),
    require('./404')
  ]
};
