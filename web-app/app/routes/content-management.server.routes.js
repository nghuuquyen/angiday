"use strict";

const path = require('path');
const router = require('express').Router();
const Ctrl = require('../controllers').ContentManagement;
const axios = require('axios');
const config = require(path.resolve('./config/config'));
const hostAPI = config.hosts.api;


function renderCampaignPreviewContentPage(req, res, next) {
  const campaignId = req.params.cid;

  let configs = {
    method: 'GET',
    url: hostAPI + `/campaign/${campaignId}`
  };

  axios(configs).then(res => res.data)
    .then(campaign => {
      res.render('campaign/preview', {
        user: req.user,
        campaign
      });
    })
    .catch(err => next(err));
}

// Content management pages.
router.route('/cms/campaign/preview/:cid').get(renderCampaignPreviewContentPage);


// Content management pages.
router.route('/cms/*').get(Ctrl.renderCMSindexPage);

module.exports = router;
