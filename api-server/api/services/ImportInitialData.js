const dataset = require('./data-init/InitialDataset');

async function start() {
  sails.log.debug('=== Data Prepare Status ===');
  sails.log.debug('Total foods: --------', dataset.foods.length);
  sails.log.debug('Total keywords: -----', dataset.keywords.length);
  sails.log.debug('Total collections: --', dataset.collections.length);
  sails.log.debug('Total users: --------', dataset.users.length);


  // ====== Group 1 ======
  // await clearData();
  // await importUsers(dataset.users);
  // await importFoods(dataset.foods);
  // await importKeywords(dataset.keywords);
  // await importCollections(dataset.collections);

  // ====== Group 2 ======
  // await importFoodCollectionsRelation(dataset.collections);
  // await importFoodKeywordRelations(dataset.foods);
  // await importUserCollectionsRelation(dataset.userCollections);

  // ====== Group 3 ======
  // await importUserKeywordInteractions();
  // await importUserFoodInteractions();
}

async function clearData() {
  sails.log.debug('=== Data Clearing ===');
  await User.destroy({});
  await Food.destroy({});
  await Keyword.destroy({});
  await Collection.destroy({});
  await FoodKeywordRelation.destroy({});
  await FoodCollectionRelation.destroy({});
  sails.log.debug('=== Done Data Clearing ===');
}

async function importUsers(users) {
  sails.log.debug('=== Start Import User ===');
  for (let i in users) {
    try {
      await User.findOrCreate({ username: users[i].username }, users[i]);
    } catch (err) {
      sails.log.error(err);
      break;
    }
  }
  sails.log.debug('=== Done Import User ===');
}

async function importFoods(foods) {
  sails.log.debug('=== Start Import Foods ===');
  for (let i in foods) {
    try {
      let food = foods[i];
      delete food.keywords;

      await Food.findOrCreate({ code: food.code }, food);
    } catch (err) {
      sails.log.error(err);
      break;
    }
  }
  sails.log.debug('=== Done Import Foods ===');
}

async function importKeywords(keywords) {
  sails.log.debug('=== Start Import Keywords ===');
  for (let i in keywords) {
    try {
      await Keyword.findOrCreate({ code: keywords[i].code }, keywords[i]);
    } catch (err) {
      sails.log.error(err);
      break;
    }
  }
  sails.log.debug('=== Done Import Keywords ===');
}

async function importCollections(collections) {
  sails.log.debug('=== Start Import Collections ===');
  for (let i in collections) {
    try {
      let c = {
        code: collections[i].code,
        name: collections[i].name,
        imageUrl: collections[i].imageUrl
      };

      await Collection.findOrCreate({ code: c.code }, c);
    } catch (err) {
      sails.log.error(err);
      break;
    }
  }

  sails.log.debug('=== Done Import Collections ===');
}

async function importFoodCollectionsRelation(collections) {
  sails.log.debug('=== Start Import Collections ===');
  for (let i in collections) {
    try {
      let c = await Collection.findOne({ code: collections[i].code });
      let foods = await Food.find({ code: { in: collections[i].foods } });

      for (let j in foods) {
        let f = foods[j];

        let conds = { food: f.id, collection: c.id };

        await FoodCollectionRelation.findOrCreate(conds, conds);
      }
    } catch (err) {
      sails.log.error(err);
      break;
    }
  }
  sails.log.debug('=== Done Import Collections ===');
}


async function importUserCollectionsRelation(userCollections) {
  sails.log.debug('=== Start Import User Collections ===');
  for (let i in userCollections) {
    try {
      let u = await User.findOne({ username: userCollections[i].username });
      let collections = await Collection.find({ code: { in: userCollections[i].collections } });

      for (let j in collections) {
        let c = collections[j];

        let conds = { user: u.id, collection: c.id };

        await UserCollection.findOrCreate(conds, conds);
      }
    } catch (err) {
      sails.log.error(err);
      break;
    }
  }
  sails.log.debug('=== Done Import User Collections ===');
}


async function importFoodKeywordRelations(foods) {
  sails.log.debug('=== Start Import FoodKeywordRelations ===');
  let keywords = await Keyword.find({});

  for (let i in foods) {
    try {
      let food = await Food.findOne({ code: foods[i].code });
      for (let j in foods[i].keywords) {
        let kCode = foods[i].keywords[j].split('-')[0];
        let kScores = foods[i].keywords[j].split('-')[1];

        let keyword = await keywords.find(k => k.code === kCode);

        let findCond = { food: food.id, keyword: keyword.id };
        let createData = {
          food: food.id,
          keyword: keyword.id,
          scores: kScores,
          log: `${food.code}-${kScores}-${keyword.code}`
        };

        //sails.log.debug(findCond, createData);
        await FoodKeywordRelation.findOrCreate(findCond, createData);
      }
    } catch (err) {
      sails.log.error(err);
      break;
    }
  }
  sails.log.debug('=== Done Import FoodKeywordRelations ===');
}


async function importUserKeywordInteractions() {
  sails.log.debug('=== Start Import UserKeywordInteractions ===');
  let keywords = await Keyword.find({});
  let users    = await User.find({});

  for (let i in users) {
    let u = users[i];
    let numberOfWords = Math.floor(Math.random() * 15);

    for(let j = 1; j <= numberOfWords; j++) {
      let k = keywords[Math.floor(Math.random() * keywords.length)];
      let actionTypes = ['vote', 'search', 'click'];
      let t = actionTypes[Math.floor(Math.random() * actionTypes.length)];

      UserInteractiveLog.keywordInteractiveLog(u.username, k.id, t);
    }
  }
  sails.log.debug('=== Done Import UserKeywordInteractions ===');
}

async function importUserFoodInteractions() {
  sails.log.debug('=== Start Import UserFoodInteractions ===');
  let foods = await Food.find({});
  let users = await User.find({});

  for (let i in users) {
    let u = users[i];
    let numberOfFoods = Math.floor(Math.random() * 15);

    for(let j = 1; j <= numberOfFoods; j++) {
      let f = foods[Math.floor(Math.random() * foods.length)];
      let actionTypes = ['vote', 'search', 'click'];
      let t = actionTypes[Math.floor(Math.random() * actionTypes.length)];

      UserInteractiveLog.foodInteractiveLog(u.username, f.id, t);
    }
  }
  sails.log.debug('=== Done Import UserFoodInteractions ===');
}


module.exports = {
  start
}
