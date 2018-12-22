let keywords = [
  {
    code: 'an_sang',
    name: 'ăn sáng'
  },
  {
    code: 'banh',
    name: 'bánh'
  },
  {
    code: 'mien_trung',
    name: 'miền Trung '
  },
  {
    code: 'an_vat',
    name: 'ăn vặt'
  },
  {
    code: 'an_trua',
    name: 'ăn trưa'
  },
  {
    code: 'an_toi',
    name: 'ăn tối'
  },
  {
    code: 'mam_nem',
    name: 'mắm nêm'
  },
  {
    code: 'thit_heo',
    name: 'thịt heo'
  },
  {
    code: 'da_nang',
    name: 'đà nẵng'
  },
  {
    code: 'ca_kho',
    name: 'cá khô'
  },
  {
    code: 'ca_loc',
    name: 'cá lóc'
  },
  {
    code: 'thit_bo',
    name: 'thịt bò'
  },
  {
    code: 'thit_ga',
    name: 'thịt gà'
  },
  {
    code: 'quang_nam',
    name: 'quãng nam'
  },
  {
    code: 'an_chinh',
    name: 'ăn chính'
  },
  {
    code: 'hen_ho',
    name: 'hẹn hò'
  },
  {
    code: 'nhau',
    name: 'nhậu'
  },
  {
    code: 'nuong_cay',
    name: 'nướng cay'
  },
  {
    code: 'banh_trang',
    name: 'bánh tráng'
  },
  {
    code: 'gia_sinh_vien',
    name: 'giá sinh viên'
  },
  {
    code: 'chan_ga',
    name: 'chân gà'
  },
  {
    code: 'mon_nuong',
    name: 'món nướng'
  },
  {
    code: 'hue',
    name: 'huế'
  },
  {
    code: 'mon_nong',
    name: 'món nóng'
  },
  {
    code: 'mon_nuoc',
    name: 'món nước'
  },
  {
    code: 'mon_cay',
    name: 'món cay'
  },
  {
    code: 'tom',
    name: 'tôm'
  },
  {
    code: 'gia_do',
    name: 'giá đỗ'
  },
  {
    code: 'mon_trang_mieng',
    name: 'món tráng miệng'
  },
  {
    code: 'do_uong',
    name: 'đồ uống'
  },
  {
    code: 'giai_khat',
    name: 'giải khát'
  },
  {
    code: 'tu_tap_ban_be',
    name: 'tụ tập bạn bè'
  }
];


let foods = [
  {
    code: 'banh_cuon',
    name: 'bánh cuốn',
    description: 'Bánh Cuốn Nóng  siêu ngon với những miếng bánh mềm mịn, nóng hổi cuốn thêm chút mộc nhĩ, thịt băm và rồi rắc thêm ít giăm bông, ít hành khô thơm nức mũi.',
    imageUrl: 'https://images.foody.vn/res/g68/671726/prof/s576x330/foody-mobile-cuon2-jpg-862-636347555982275587.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90'
    ]
  },
  {
    code: 'banh_loc',
    name: 'bánh lọc',
    description: 'Bánh bột lọc vốn có vị dai dai, thanh máyt của bột lọc, thơm ngọt của tôm, thịt nhưng không gây cảm giác ngấy. Khi ăn, chấm chìm bánh bột lọc vào bát mắm ớt cay cay rồi cho vào miệng, cảm giác như đang được thưởng thức mọi tinh hoa của ẩm thực đất cố Đô.',
    imageUrl: 'https://images.foody.vn/res/g70/691577/prof/s640x400/foody-mobile-my-jpg-528-636434837807617699.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90'
    ]
  },
  {
    code: 'bun_cha_ca',
    name: 'bún chả cá',
    description: 'Đây là món quà sáng ngon có tiếng của ẩm thực Đà Nẵng. Một tô bún chả cá gồm có chả cá, su hào, bí đỏ, măng tươi, chút ruốc heo, hành và cà chua thật ngon mắt. Chả cá gồm 2 loại: chả cá hấp và chả cá chiên. Tùy theo lựa chọn của thực khách, người bán sẽ bỏ 1 hoặc cả 2 loại chả vào tô bún rồi chan thứ nước lèo ngọt thanh rất dễ chịu được hầm từ chính xương cá.',
    imageUrl: 'https://monngondathanh.com/wp-content/uploads/2018/01/bun-cha-ca-da-nang.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90'
    ]
  },
  {
    code: 'banh_beo',
    name: 'bánh bèo',
    description: 'Bánh bèo là một món bánh rất thịnh hành ở miền Trung, ngoài ra cũng có nhiều ở miền Nam Việt Nam. Bánh bèo gồm có ba phần chính là bánh làm từ bột gạo, nhân để rắc lên bánh làm bằng tôm xay nhuyễn, và nước chấm, một hỗn hợp mà nước mắm là thành phần chính và thường đổ trực tiếp vào bánh chứ không cần chấm.',
    imageUrl: 'https://vina-jpodufumfywuunpq60f.stackpathdns.com/wp-content/uploads/2015/09/banh-beo-hue-food-620x350.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90'
    ]
  },
  {
    code: 'bun_mam',
    name: 'bún mắm',
    description: 'Bún mắm là món ăn có tiếng của người miền Trung, nhưng đối với người dân Đà Nẵng thì bún mắm quan trọng hơn cả. Cũng vì lẽ thế mà ăn bún mắm của Đà Nẵng có vị đặc trưng rất riêng, riêng đến nỗi theo thành cái tên từ lúc nào không hay “bún mắm Đà Nẵng”. Đối với ai chưa từng thử qua, có lẽ cảm nhận đầu tiên khi nghe cái tên này, nghĩ hẳn món ăn rất mặn, bún mắm cơ mà. Nhưng, ai đã ăn rồi, chắc chắn lại phải them thuồng mà nuốt nước miếng ừng ực, mường tượng ra cái vị đậm đà, ngầy ngậy ngay trong giác quan. Nào là vị thịt heo quay giòn, vị sate cay nồng, mùi bò hoi hoi, mùi rau thơm vảng vất.',
    imageUrl: 'https://img-global.cpcdn.com/005_recipes/73d250de5780c4cd/751x532cq70/photo.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90', 'mam_nem-50', 'thit_heo-100', 'da_nang-100'
    ]
  },
  {
    code: 'chao_cho_nam_o',
    name: 'cháo chờ nam ô',
    description: 'Món cháo chờ ở Nam Ô có vị đậm đà, ngọt thanh, vì được chế biến từ những nguyên liệu tươi ngon, được chuẩn bị trong ngày, và các công đoạn thực hiện diễn ra sau khi khách gọi, nên nóng hổi, thơm lạ.',
    imageUrl: 'https://www.dulichvietnam.com.vn/data/chao-cho-nam-o-6.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90', 'an_toi-50', 'thit_heo-100', 'da_nang-80', 'ca_kho-100'
    ]
  },
  {
    code: 'my_quang',
    name: 'mỳ quảng',
    description: 'Mì Quảng thường được làm từ sợi mì bằng bột gạo xay mịn và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mì mỏng khoảng 2mm. Sợi mì làm bằng bột mỳ được trộn thêm một số phụ gia cho đạt độ giòn, dai. Dưới lớp mì là các loại rau sống, trên mì là thịt heo nạc, tôm, thịt gà cùng với nước dùng được hầm từ xương heo. Người ta còn bỏ thêm đậu phụng rang khô và giã dập, hành lá thái nhỏ, rau thơm, ớt đỏ... Thông thường nước dùng rất ít.',
    imageUrl: 'https://img-global.cpcdn.com/005_recipes/4afb6cc7c3f55210/640x640sq70/photo.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90', 'an_toi-50', 'thit_heo-100', 'da_nang-80', 'ca_kho-100', 'quang_nam-100', 'thit_bo-100', 'thit_ga-100'
    ]
  },
  {
    code: 'nuong_cay',
    name: 'nướng cay',
    description: 'https://images.foody.vn/res/g10/97621/prof/s576x330/foody-mobile-cay-jpg-404-636156055475543846.jpg',
    imageUrl: 'https://img-global.cpcdn.com/005_recipes/4afb6cc7c3f55210/640x640sq70/photo.jpg',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-10', 'mien_trung-100', 'an_vat-100',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'ca_kho-100',
      'thit_bo-100', 'thit_ga-100', 'an_chinh-90', 'nhau-95', 'hen_ho-90', 'nuong_cay-100'
    ]
  },
  {
    code: 'banh_trang_thit_heo',
    name: 'bánh tráng thịt heo',
    description: 'Đặc sản Bánh tráng cuốn thịt heo cũng khá nổi tiếng ở Đà Nẵng. Món ăn này có lẽ xuất phát từ người dân địa phương, có lẽ vì khí hậu ở Đà Nẵng hay mưa nên các chị, các mẹ, các gia đình hay tổ chức ngồi tụm ba, tụm bảy để làm món gì đó lạ lạ (không phải là cơm, cháo) để ăn cho vui, và một trong những món rẻ, ngon mà hấp dẫn mọi người đó có lẽ là món Bánh tráng cuốn thịt heo.',
    imageUrl: 'https://danang.huongnghiepaau.com/images/mon-ngon-mien-trung/banh-trang-cuon-thit-heo.jpg',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-100', 'mien_trung-100', 'an_vat-100',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'thit_bo-100', 'an_chinh-90',
      'nhau-95', 'hen_ho-90', 'banh_trang-100', 'mam_nem-100'
    ]
  },
  {
    code: 'chan_ga_nuong',
    name: 'chân gà nướng',
    description: 'Chân gà nướng muối ớt là món nhậu bình dân nhưng ngon tuyệt và cũng là món được nhiều bạn trẻ ưa thích . Để có được chân gà nướng muối ớt thì cách chế biến phải thật khéo léo. Các món nướng quan trọng nhất là kết hợp gia vị khi tẩm ướp sao cho hương vị hòa quyện không bị nghịch thì mùi hương và màu sắc sẽ góp phần tô điểm cho món ăn.',
    imageUrl: 'https://znews-photo.zadn.vn/w660/Uploaded/tmuitg/2018_03_20/_MG_9592.JPG',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-100', 'mien_trung-100', 'an_vat-100',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'thit_bo-100', 'an_chinh-90',
      'nhau-95', 'hen_ho-90', 'gia_sinh_vien-90', 'chan_ga-90', 'mon_nuong-100'
    ]
  },
  {
    code: 'bun_bo_hue',
    name: 'bún bò huế',
    description: 'Bún bò Huế là một trong những đặc sản của xứ Huế, mặc dù món bún này ở đâu cũng có. Tại Huế, món này được gọi đơn giản là "bún bò". Các địa phương khác gọi là "bún bò Huế" để chỉ xuất xứ của món ăn này. Món ăn có nguyên liệu chính là bún, thịt bắp bò, giò heo, cùng nước dùng có màu đỏ đặc trưng. Đôi khi tô bún còn được thêm vào thịt bò tái, chả cua, và các loại nguyên liệu khác tùy theo sở thích của người nấu.',
    imageUrl: 'https://i-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-100', 'mien_trung-100', 'an_vat-100',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'thit_bo-100', 'an_chinh-90',
      'nhau-95', 'hen_ho-90', 'gia_sinh_vien-80', 'hue-100', 'mon_nong-100', 'mon_nuoc-100', 'mon_cay-100'
    ]
  },
  {
    code: 'pho',
    name: 'phở',
    description: 'Phở là một món ăn truyền thống của Việt Nam, cũng có thể xem là một trong những món ăn tiêu biểu cho nền ẩm thực Việt Nam. Thành phần chính của phở là bánh phở và nước dùng (hay nước lèo theo cách gọi miền Nam) cùng với thịt bò hoặc thịt gà cắt lát mỏng. Ngoài ra còn kèm theo các gia vị như: tương, tiêu, chanh, nước mắm, ớt.',
    imageUrl: 'https://znews-photo.zadn.vn/w660/Uploaded/Ohunoaa/2016_12_22/8.jpg',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-100', 'mien_trung-100', 'an_vat-100',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'thit_bo-100', 'an_chinh-90',
      'hen_ho-90', 'gia_sinh_vien-80', 'hue-100', 'mon_nong-100', 'mon_nuoc-100', 'mon_cay-100'
    ]
  },
  {
    code: 'banh_xeo',
    name: 'bánh xèo',
    description: 'Bánh xèo là một loại bánh làm từ bột phổ biến ở Việt Nam, phiên bản bánh xèo của Nhật Bản và Triều Tiên có bột bên ngoài, bên trong có nhân là tôm, thịt, giá đỗ; kimchi, khoai tây, hẹ, thủy sản (bánh xèo Triều Tiên); tôm, thịt, cải thảo (Nhật Bản) được rán màu vàng, đúc thành hình tròn hoặc gấp lại thành hình bán nguyệt. Tuỳ theo từng địa phương tại Việt Nam mà bánh được thưởng thức với nét đặc trưng riêng. Thường có 2 phong cách: đổ bánh xèo giòn và bánh xèo dai.',
    imageUrl: 'https://thucthan.com/media/2018/06/banh-xeo/banh-xeo.jpg',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-100', 'mien_trung-100', 'an_vat-100',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'an_chinh-80', 'tom-100', 'gia_do-100',
      'hen_ho-90', 'gia_sinh_vien-80', 'hue-100', 'mon_nong-100', 'mon_cay-100'
    ]
  },
  {
    code: 'xoi',
    name: 'xôi',
    description: 'Xôi là đồ ăn thông dụng được làm từ nguyên liệu chính là gạo nếp, đồ/hấp chín bằng hơi nước, thịnh hành trong ẩm thực của nhiều nước châu Á.',
    imageUrl: 'https://www.bepgiadinh.com/wp-content/uploads/2013/10/18/996954_674209942590294_1121689639_n.jpg',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-100', 'mien_trung-100', 'an_vat-100', 'tu_tap_ban_be-50',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'an_chinh-80', 'tom-100', 'gia_do-100',
      'hen_ho-90', 'gia_sinh_vien-80', 'hue-100', 'mon_nong-100', 'thit_ga-100'
    ]
  },
  {
    code: 'lau',
    name: 'lẩu',
    description: 'Lẩu (từ có nguồn gốc theo giọng Quảng Đông: 爐, âm Hán Việt: lô, nghĩa là "bếp lò"); còn gọi là cù lao là một loại món ăn phổ biến xuất phát từ Mông Cổ, nhưng ngày nay được các nước Đông Á ưa thích. Một nồi lẩu bao gồm một bếp (ga, than hay điện) đang đỏ lửa và nồi nước dùng đang sôi. Các món ăn sống được để xung quanh và người ăn gắp đồ ăn sống bỏ vào nồi nước dùng, đợi chín tới và ăn nóng. Thông thường đồ ăn dùng làm món lẩu là: thịt, cá, lươn, rau, nấm, hải sản... Ở nhiều nơi, món lẩu thường được ăn vào mùa đông nhằm mục đích giữ thức ăn nóng sốt.',
    imageUrl: 'https://daynauan.info.vn//images/mon-viet/lau-ga-nau-nam.jpg',
    keywords: [
      'an_sang-10', 'an_trua-100', 'banh-100', 'mien_trung-100', 'an_vat-100', 'nhau-100',
      'an_toi-100', 'thit_heo-100', 'da_nang-100', 'an_chinh-80', 'tom-100', 'gia_do-100', 'tu_tap_ban_be-100',
      'hen_ho-90', 'gia_sinh_vien-80', 'hue-100', 'mon_nong-100', 'thit_ga-100', 'mon_nuoc-100', 'mon_cay-100'
    ]
  },
  {
    code: 'kem_bo',
    name: 'kem bơ',
    description: 'Kem là món tráng miệng khoái khẩu của nhiều người. Kem xuất hiện từ lâu với tên đầu tiên là "tuyết ngọt". Ở Việt Nam, kem bắt đầu xuất hiện vào thế kỷ 20 khi người Pháp mang công thức và cách chế biến sang phục vụ đội quân xâm lược. Món ăn ngọt dạng đông lạnh này được làm chủ yếu từ sữa, trứng gà, đường... Nhà mình rất thích món kem bơ. Bởi ngoài lợi ích của quả bơ đối với sức khỏe như ngăn ngừa các bênh tim mạch, chống lão hoá, ngăn ngừa ung thư, đẹp da.., bơ còn có mùi H thơm, ngậy rất hấp dẫn. Và đặc biệt làm kem bơ ăn lạnh lại càng ngon hơn. Kem bơ chuẩn phải mịn, không có đá dăm, thơm, ngậy bùi và rất ngon.',
    imageUrl: 'https://www.bepgiadinh.com/wp-content/uploads/2016/03/29/kem-bo.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'tu_tap_ban_be-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'mon_trang_mieng-100'
    ]
  },
  {
    code: 'tra_dao',
    name: 'trà đào',
    description: 'Trà đào món phổ biến hầu như ai cũng biết và đã thưởng thức qua. Mỗi nơi có 1 công thức mang hương vị riêng. Trà đào của mình chủ yếu vị ngọt thanh và không có vị chua chua. Siêu giải khát mùa hè.',
    imageUrl: 'https://img-global.cpcdn.com/005_recipes/63f478b1c937ce54/751x532cq70/photo.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'tu_tap_ban_be-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'mon_trang_mieng-100', 'do_uong-100', 'giai_khat-100'
    ]
  },
  {
    code: 'bia_hoi',
    name: 'bia hơi',
    description: 'Bia hơi là một trong những loại nước giải khát được giới sinh viên và tầng lớp bình dân trong xã hội ưa chuộng. Khoác lên mình lớp áo vàng và mang trong mình vị cay cay của cồn thêm vào đó là vị mát mát sau khi được ướp lạnh thì bia hơi đã đi vào lòng của sinh viên của các chú thợ hồ của tầng lớp bình dân trong xã hội một cách nhẹ nhàng và bình yên từ lúc nào không hay. Và dần dần chiếm vị thế không thế cực kì quan trọng trong xã hội bây giờ, gần như là k thể thiếu trong nhưng ngày hè oi bức của các tỉnh thành trên đất nước Việt Nam.',
    imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2016/voucher-bia-2-ylxt-1480068098109-crop-1480068104420-1480093221962-0-0-319-514-crop-1480093273633.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'nhau-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'do_uong-100', 'giai_khat-100', 'tu_tap_ban_be-100'
    ]
  },
  {
    code: 'ga_nuong',
    name: 'gà nướng',
    description: 'Gà "đi bộ" nhà quê thì khỏi bàn về độ ngon rồi hén. Nướng vàng trên lửa than ngoài vườn thơm nức mũi, bay tận vào trong nhà, rắc lá chanh bào nhuyễn thơm lừng. Cắn miếng gà nhai cùng lá chanh, chấm muối tiêu chanh/muối ớt thôi rồi tê tái quên đường về luôn nhé. Bởi vậy đừng ai hỏi sao em nó khoái về quê đến vậy.',
    imageUrl: 'http://toinayangi.vn/wp-content/uploads/2014/11/cach-tam-uop-ga-nuong-1.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'nhau-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'an_chinh-100', 'tu_tap_ban_be-100'
    ]
  }
];

// code: 'banh_cuon',
// code: 'banh_loc',
// code: 'bun_cha_ca',
// code: 'banh_beo',
// code: 'bun_mam',
// code: 'chao_cho_nam_o',
// code: 'my_quang',
// code: 'nuong_cay',
// code: 'banh_trang_thit_heo',
// code: 'chan_ga_nuong',
// code: 'bun_bo_hue',
// code: 'pho',
// code: 'banh_xeo',
// code: 'xoi',
// code: 'lau',
// code: 'kem_bo',
// code: 'tra_dao',
// code: 'bia_hoi',
// code: 'ga_nuong'
let collections = [
  {
    code: 'mon_an_cho_bua_sang',
    name: 'món ăn cho bữa sáng',
    imageUrl: 'https://cuonnroll.vn/wp-content/uploads/2018/07/cuonnroll_cac-mon-an-don-gian-cho-bua-sang-2.jpg',
    foods: [
      'banh_cuon', 'banh_loc', 'banh_beo', 'bun_mam', 'chao_cho_nam_o', 'pho', 'my_quang', 'xoi'
    ]
  },
  {
    code: 'mon_an_cung_ban_be',
    name: 'món ăn cùng bạn bè',
    imageUrl: 'https://znews-photo.zadn.vn/w860/Uploaded/mdf_eioxrd/2018_06_24/Oc__Anh_dianacamvan.jpg',
    foods: [
      'bia_hoi', 'ga_nuong', 'chan_ga_nuong', 'lau', 'tra_dao'
    ]
  },
  {
    code: 'mon_an_mua_dong',
    name: 'món ăn mùa đông',
    imageUrl: 'https://thumb.guucdn.net/640x360/images.guucdn.net/full/2016/07/01/0193b942dd1671548c7b0f05fb139f6fc8d22b86.jpg',
    foods: [
      'bun_bo_hue', 'ga_nuong', 'chan_ga_nuong', 'lau', 'nuong_cay'
    ]
  },
  {
    code: 'mon_an_cho_bua_toi',
    name: 'món ăn cho bữa tối',
    imageUrl: 'http://www.xaluan.com/images/news/Image/2015/08/13/455cc891d66925.img.jpg',
    foods: [
      'my_quang', 'pho', 'banh_xeo', 'kem_bo', 'bun_mam'
    ]
  },
  {
    code: 'mon_an_cho_bua_trua',
    name: 'món ăn cho bữa trưa',
    imageUrl: 'http://2sao.vietnamnetjsc.vn/images/2017/02/14/14/24/photo01487037001073.jpg',
    foods: [
      'my_quang', 'pho', 'banh_xeo', 'kem_bo', 'bun_mam'
    ]
  },
  {
    code: 'an_nhau',
    name: 'ăn nhậu',
    imageUrl: 'https://cdn-images-1.medium.com/max/960/1*GPiZmWqaYNjKSYVCW7krVQ.jpeg',
    foods: [
      'bia_hoi', 'ga_nuong', 'chan_ga_nuong', 'lau', 'nuong_cay'
    ]
  },
  {
    code: 'do_uong',
    name: 'đồ uống',
    imageUrl: 'https://www.huongnghiepaau.com/images/pha-che/cong-thuc/thuc-uong-nguyen-lieu-tu-nhien.jpg',
    foods: [
      'bia_hoi', 'tra_dao', 'kem_bo'
    ]
  }
];

let users = [
  {
    username: 'admin',
    fullName: 'System Admin',
    email: 'admin@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user01',
    fullName: 'Trần Thị Kiều Anh',
    email: 'user01@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user02',
    fullName: 'Nguyễn Quang Thắng',
    email: 'user02@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user03',
    fullName: 'Trần Đình Trọng',
    email: 'user03@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user04',
    fullName: 'Nguyễn Minh Quang',
    email: 'user04@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user05',
    fullName: 'Đỗ Trọng Hiếu',
    email: 'user05@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user06',
    fullName: 'Trần Minh Tuấn Anh',
    email: 'user06@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user07',
    fullName: 'Lương Ngọc Toàn',
    email: 'user07@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user08',
    fullName: 'Đỗ Minh Ngọc',
    email: 'user08@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user09',
    fullName: 'Nguyễn Trần Đình Anh',
    email: 'user09@angiday.vn',
    password: '123456789'
  },
  {
    username: 'user10',
    fullName: 'Lê Anh Tuấn',
    email: 'user10@angiday.vn',
    password: '123456789'
  }
];

module.exports = {
  keywords,
  foods,
  collections,
  users
};

