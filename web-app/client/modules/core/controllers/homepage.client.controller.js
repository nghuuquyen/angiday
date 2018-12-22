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
    'KeywordService', '_', '$window', 'Authentication', 'RecomendationService'
  ];

  function Controller(KeywordService, _, $window, Authentication, RecomendationService) {
    var vm = this;
    vm.topPopularFoods = [];

    if (Authentication.user) {
      // Load user new feeds.
      RecomendationService.getFoodNewFeeds({ userId: Authentication.user.id })
        .$promise.then(foods => {
          vm.topPopularFoods = foods;
        })
        .catch(err => console.log(err));
    } else {
      // Load top popular foods.
      RecomendationService.getTopPopularFoods()
        .$promise.then(foods => {
          vm.topPopularFoods = foods;
        })
        .catch(err => console.log(err));
    }

    // ********* PUBLIC VARIABLES ********* //
    vm.suggestCollections = [
      {
        id: 1,
        name: 'Món giải nhiệt',
        imageUrl: 'https://media.ngoisao.vn/news/2014/5/5/49/20140504161306_71825_20140504093807_jpg1.jpg'
      },
      {
        id: 2,
        name: 'Chè',
        imageUrl: 'https://thucthan.com/media/2018/03/cach-nau-che-buoi/cach-nau-che-buoi.jpg'
      },
      {
        id: 3,
        name: 'Nước giải khát',
        imageUrl: 'http://www.brandsvietnam.com/upload/news/480px/2016/8539_NuocGiaiKhat.jpg'
      },
      {
        id: 4,
        name: 'Sinh tố',
        imageUrl: 'https://cdn.tgdd.vn/Files/2018/05/29/1091772/3-cach-lam-sinh-to-bo--12.jpg'
      },
      {
        id: 5,
        name: 'Món rau củ',
        imageUrl: 'http://tinlamdep.com/data/image/monngonmoingay/2015/08/7/bi-quyet-de-co-mon-rau-cu-qua-xao-thom-ngon-dep-mat-lai-giau-dinh-duong-c.jpg'
      },
      {
        id: 6,
        name: 'Canh giải nhiệt',
        imageUrl: 'https://tinshowbiz.vn/wp-content/uploads/2018/03/4-mon-canh-giai-nhiet-cho-thoi-tiet-nong-bung-dau-1.jpg'
      }
    ];

    vm.collections = [
      {
        id: 1,
        name: 'Món giải nhiệt',
        imageUrl: 'https://media.ngoisao.vn/news/2014/5/5/49/20140504161306_71825_20140504093807_jpg1.jpg'
      },
      {
        id: 2,
        name: 'Chè',
        imageUrl: 'https://thucthan.com/media/2018/03/cach-nau-che-buoi/cach-nau-che-buoi.jpg'
      },
      {
        id: 3,
        name: 'Nước giải khát',
        imageUrl: 'http://www.brandsvietnam.com/upload/news/480px/2016/8539_NuocGiaiKhat.jpg'
      },
      {
        id: 4,
        name: 'Sinh tố',
        imageUrl: 'https://cdn.tgdd.vn/Files/2018/05/29/1091772/3-cach-lam-sinh-to-bo--12.jpg'
      },
      {
        id: 5,
        name: 'Món rau củ',
        imageUrl: 'http://tinlamdep.com/data/image/monngonmoingay/2015/08/7/bi-quyet-de-co-mon-rau-cu-qua-xao-thom-ngon-dep-mat-lai-giau-dinh-duong-c.jpg'
      },
      {
        id: 6,
        name: 'Canh giải nhiệt',
        imageUrl: 'https://tinshowbiz.vn/wp-content/uploads/2018/03/4-mon-canh-giai-nhiet-cho-thoi-tiet-nong-bung-dau-1.jpg'
      },
      {
        id: 7,
        name: 'Các món bánh Việt đơn giản',
        imageUrl: 'https://media.ohay.tv/v1/content/2015/08/cach-lam-banh-loc-10-ohay-tv-31573.jpg'
      },
      {
        id: 8,
        name: 'Các món bánh Âu đơn giản',
        imageUrl: 'https://media.cooky.vn/article/s640/Article238-635634831273038709.jpg'
      },
      {
        id: 9,
        name: 'Bánh mỳ',
        imageUrl: 'http://cafefcdn.com/thumb_w/650/2017/photo1512551207705-1512551207987-1512620980236.jpg'
      },
      {
        id: 10,
        name: 'Rau củ xào chay',
        imageUrl: 'https://media.cooky.vn/recipe/g1/2560/s800x500/recipe2560-635712545307920568.jpg'
      },
      {
        id: 11,
        name: 'Lẩu nóng',
        imageUrl: 'https://i2.wp.com/congthucmonngon.com/wp-content/uploads/2018/04/Lam-lau-Thai-cay-nong-ngay-mua.jpg?ssl=1'
      },
      {
        id: 12,
        name: 'Trà sữa',
        imageUrl: 'http://channel.mediacdn.vn/prupload/879/2018/08/img20180810151337779.jpg'
      },
      {
        id: 13,
        name: 'Món ngon cuối tuần',
        imageUrl: 'https://nhungmonanngon.com/wp-content/uploads/2016/07/cach-lam-thit-xa-xiu-thom-ngon-nhu-o-nha-hang-4-324x235.jpg'
      },
      {
        id: 14,
        name: 'Món tráng miệng',
        imageUrl: 'https://kenh14cdn.com/2017/pudding-sp3-1492782943616.jpg'
      },
      {
        id: 15,
        name: 'Món ăn cho trẻ',
        imageUrl: 'https://anh.eva.vn/upload/4-2017/images/2017-10-25/1508904932-mon-ngon-cho-be.jpg'
      }
    ];

    /**
     * @var Array 
     * @description 
     * Input tags selected by user.
     */
    vm.tags = [];

    // ********* PUBLIC FUNCTIONS ********* //
    vm.loadTags = loadTags;
    vm.doSearchFoodByTags = doSearchFoodByTags;

    // ********* PRIVATE FUNCTIONS ********* //

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
      let word_ids = vm.tags.map(item => item.id).join(',');

      // Redirecting to search results page.
      $window.location.replace($window.location.origin + `/search?word_ids=${word_ids}`);
    }
  }
})();