/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {
  // Create indexing
  MongodbIndexing.doIndexing();

  // await ImportInitialData.start();

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

  // await ESService.removeAllIndexes();
  // await ESService.initialAppIndex();
  // await ESService.addAllWordsToIndex();
  // await ESService.searchKeywords('giải');

  return done();
};

