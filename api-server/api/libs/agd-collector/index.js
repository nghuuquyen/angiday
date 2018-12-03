'use strict'

const { google } = require('googleapis')

const key = require('./keys/auth.json')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes)
const view_id = '157859587'

process.env.GOOGLE_APPLICATION_CREDENTIALS = './auth.json'

jwt.authorize((err, response) => {
  google.analytics('v3').data.ga.get(
    {
      auth: jwt,
      ids: 'ga:' + view_id,
      'start-date': '10daysAgo',
      'end-date': 'today',
      "dimensions": 'ga:sessionDurationBucket',
      "metrics": "ga:hits"
    },
    (err, result) => {
      console.log(err, result.data)
    }
  )
})

