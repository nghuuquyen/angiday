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
    'KeywordService', '_', '$window', 'Authentication'
  ];

  function Controller(KeywordService, _, $window, Authentication) {
    var vm = this;

    alert('Hello, ' + Authentication.user.fullName);
    
    // ********* PUBLIC VARIABLES ********* //
    vm.topPopularFoods = [
      {
        id: 1,
        name: 'Bún chả cá',
        description : 'Đây là món quà sáng ngon có tiếng của ẩm thực Đà Nẵng. Một tô bún chả cá gồm có chả cá, su hào, bí đỏ, măng tươi, chút ruốc heo, hành và cà chua thật ngon mắt.',
        imageUrl: 'https://monngondathanh.com/wp-content/uploads/2018/01/bun-cha-ca-da-nang.jpg'
      },
      {
        id: 2,
        name: 'Bánh cuốn',
        description : 'Bánh Cuốn Nóng  siêu ngon với những miếng bánh mềm mịn, nóng hổi cuốn thêm chút mộc nhĩ, thịt băm và rồi rắc thêm ít giăm bông, ít hành khô thơm nức mũi.',
        imageUrl: 'https://images.foody.vn/res/g68/671726/prof/s576x330/foody-mobile-cuon2-jpg-862-636347555982275587.jpg'
      },
      {
        id: 3,
        name: 'Mì Quảng',
        description : 'Mì Quảng thường được làm từ sợi mì bằng bột gạo xay mịn và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mì mỏng khoảng 2mm ...',
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/4afb6cc7c3f55210/640x640sq70/photo.jpg'
      },
      {
        id: 4,
        name: 'Trà đào',
        description : 'Trà đào món phổ biến hầu như ai cũng biết và đã thưởng thức qua. Mỗi nơi có 1 công thức mang hương vị riêng. Trà đào của mình chủ yếu vị ngọt thanh và không ...',
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/92771e6891a25fcf/751x532cq70/photo.jpg'
      },
      {
        id: 5,
        name: 'Gà nướng',
        description : 'Gà "đi bộ" nhà quê thì khỏi bàn về độ ngon rồi hén. Nướng vàng trên lửa than ngoài vườn thơm nức mũi, bay tận vào trong nhà, rắc lá chanh bào nhuyễn thơm lừng ...',
        imageUrl: 'http://toinayangi.vn/wp-content/uploads/2014/11/cach-tam-uop-ga-nuong-1.jpg'
      }
    ];

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