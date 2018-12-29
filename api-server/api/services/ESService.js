const elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({
  host: process.env.ES_HOST || 'elasticsearch:9200'
});

const APP_INDEX_NAME = 'angiday';

module.exports = {
  initialAppIndex,
  removeAllIndexes,
  addAllWordsToIndex,
  searchKeywords
}

async function searchKeywords(searchText) {
  let results = await client.search({
    index: APP_INDEX_NAME,
    q: `keyword:${searchText}`
  });

  results.hits.hits.forEach(hit => {
    console.log(hit);
  });
}


async function addAllWordsToIndex() {
  sails.log.debug('addAllWordsToIndex!');
  let words = await Keyword.find({});

  let word_datas = words.map(w => {
    return {
      wordId: w.id,
      wordName: w.name
    }
  });

  for (let i in word_datas) {
    console.log(word_datas[i])
    console.log('-------');
    let res = await client.index({
      index: APP_INDEX_NAME,
      id: word_datas[i].wordId,
      type: 'keyword',
      body: word_datas[i]
    });

    console.log(res);
  }
}

function removeAllIndexes() {
  client.indices.delete({
    index: '_all'
  }, function (err, res) {

    if (err) {
      sails.log.error(err.message);
    } else {
      sails.log.debug('Indexes have been deleted!');
    }
  });
}

async function initialAppIndex() {
  sails.log.debug('Start initialAppIndex');
  let indexExists = await client.indices.exists({ index: APP_INDEX_NAME });

  if (indexExists) {
    sails.log.debug('application elasticsearch index already exists.');
    return;
  }

  let createIndex = await client.indices.create({
    index: APP_INDEX_NAME,
    body: {
      "settings": {
        "index": {
          "number_of_shards": 1,
          "number_of_replicas": 1,
          "analysis": {
            "analyzer": {
              "my_analyzer": {
                "tokenizer": "vi_tokenizer",
                "char_filter": [],
                "filter": []
              }
            }
          }
        }
      },
      "mappings": {
        "keyword": {
          "properties": {
            "wordId": {
              "type": "text",
              "analyzer": "my_analyzer"
            },
            "wordName": {
              "type": "text",
              "analyzer": "my_analyzer"
            }
          }
        }
      }
    }
  });

  sails.log.debug('Create or update application elasticsearch index successfully.');
}


