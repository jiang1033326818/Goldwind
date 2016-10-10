module.exports = {
  path: 'thailandtourv3/home',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Home'))
      })
    }
  }
};
