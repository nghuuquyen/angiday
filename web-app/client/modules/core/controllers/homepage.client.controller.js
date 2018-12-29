/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller 
 * @description
 * Controller for homepage.
 */
(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomePageController', Controller);

  Controller.$inject = [
    'KeywordService', '_', '$window', 'Authentication', 'RecomendationService',
    'UserCollectionService', 'SearchTrackingService', 'Utilities'
  ];

  function Controller(KeywordService, _, $window, Authentication, RecomendationService,
    UserCollectionService, SearchTrackingService, Utilities) {

    var vm = this;
    vm.topPopularFoods = [];

    // ********* PUBLIC VARIABLES ********* //
    vm.showButtonUpdateNewFeed = false;
    vm.userLogged = Authentication.user ? true : false;

    /**
     * @var Array  
     * @description 
     * Input tags selected by user.
     */
    vm.tags = [];

    // ********* PUBLIC FUNCTIONS ********* //
    vm.loadTags = loadTags;
    vm.doSearchFoodByTags = doSearchFoodByTags;
    vm.doFollowCollection = doFollowCollection;
    vm.updateFoodNewFeeds = updateFoodNewFeeds;

    // ********* PRIVATE FUNCTIONS ********* //

    if (Authentication.user) {
      // Load user new feeds.
      updateFoodNewFeeds();
    } else {
      // Load top popular foods.
      RecomendationService.getTopPopularFoods()
        .$promise.then(foods => {
          vm.topPopularFoods = foods;
        })
        .catch(err => console.log(err));
    }

    RecomendationService.getAllCollections()
      .$promise.then(collections => {
        vm.collections = collections;

        if (Authentication.user) {
          UserCollectionService.query({ user: Authentication.user.id })
            .$promise.then(followedCollections => {
              vm.collections.forEach(collection => {
                if (isFollowed(collection, followedCollections)) {
                  collection.followed = true;
                } else {
                  collection.followed = false;
                }
              });
            });
        }
      });

    function updateFoodNewFeeds() {
      RecomendationService.getFoodNewFeeds({ userId: Authentication.user.id })
        .$promise.then(foods => {
          vm.topPopularFoods = foods;
          vm.showButtonUpdateNewFeed = false;
        })
        .catch(err => console.log(err));
    }

    function isFollowed(collection, followedCollections) {
      return followedCollections.findIndex(i => i.collection.id === collection.id) !== -1 ? true : false;
    }

    function doFollowCollection(collection) {
      if (!Authentication.user) return;

      if (collection.followed) {
        // Do unfollowing
        UserCollectionService.query({
          user: Authentication.user.id, collection: collection.id
        }).$promise.then((data) => {
          if (data && data[0]) {
            UserCollectionService.remove({
              id: data[0].id
            }).$promise.then(() => {
              collection.followed = false;
              vm.showButtonUpdateNewFeed = true;
            });
          } else {
            collection.followed = true;
          }
        });
      } else {
        // Do following
        UserCollectionService.save({
          user: Authentication.user.id, collection: collection.id
        }).$promise.then(() => {
          collection.followed = true;
          vm.showButtonUpdateNewFeed = true;
        });
      }
    }
    /**
     * @name loadTags
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @description
     * Funcation called when user input keyword to search input, it perform 
     * autocomplete feature.
     * 
     * @param {String} query 
     * @return {Promise<Object>} List tags matching with input query string. 
     */
    function loadTags(query) {
      return KeywordService.search({ keyword: query }).$promise
        .then(keywords => {
          return _.map(keywords, keyword => {
            // Transform to ng-tags input format.
            return {
              name: keyword.name,
              text: keyword.name,
              id: keyword.id,
              score: keyword.score
            };
          });
        })
        .then(keywords => {
          return keywords;
        });
    }

    /**
     * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
     * @name doSearchFoodByTags
     * @description
     * Get input tags from user and redirect to search results page.
     * 
     * @return void 
     */
    function doSearchFoodByTags() {
      let word_ids = vm.tags.filter(item => {
        if (item.id) return item;
      }).map(item => item.id).join(',');

      let keywords = vm.tags.filter(item => {
        if (item.id) return item;
      }).map(item => item.id);

      let texts = vm.tags.filter(item => {
        if (!item.id) return item;
      }).map(item => item.text.replace(/-/g, ' '));

      SearchTrackingService.save({
        user: vm.userLogged ? Authentication.user.id : '',
        keywords: keywords,
        texts: texts
      }).$promise.then(track => {
        Utilities.sessionStorageManager.setValue('search_id', track);

        // Redirecting to search results page.
        $window.location.replace($window.location.origin + `/search?word_ids=${word_ids}`);
      });
    }
  }
})();