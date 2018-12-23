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
    ],
    eShops: [
      {
        id: '1',
        name: 'Bánh Cuốn Nóng Lan',
        address: '415 Hoàng Diệu,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/banh-cuon-nong-lan'
      },
      {
        id: '2',
        name: 'Bánh Cuốn Nóng 203',
        address: '203 Bế Văn Đàn, P. Hòa Khê,  Quận Thanh Khê, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/banh-cuon-nong-203'
      }
    ],
    eRecipes: [
      {
        id: '1',
        ingredients: [
          '200 bột bánh cuốn',
          '600 ml nước lạnh',
          '1 muỗng cafe muối',
          '1 muỗng dầu ăn',
          'Nhân bánh',
          '100 g nạc heo xay',
          '100 nạc gà',
          '1 củ hành',
          'Vài tai nấm mèo',
          'Gia vị nêm:',
          'đường, muối, nước mắm, tiêu, 1 chút bột ngọt',
          'Làm nước mắm: đường, nước mắm',
          'chanh, ớt'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/bcf2fa73bfb9922e/751x532cq70/photo.jpg',
        name: 'Bánh cuốn',
        directions: [
          'Pha bột',
          'Bột bánh cuốn + nước + muối, Sau cùng 1 muỗng dầu ăn',
          'Xào nhân, Cho chút dầu xào củ hành cho thơm rồi thêm thịt vô xào + 1 chút nước lạnh cho chín thịt, nêm đường, bột ngọt, nước mắm cho vừa ăn sau cùng cho cho thêm nấm mèo.',
          'Làm nước mắm: 1 đường 1 nước mắm 2 nước lạnh 1 miếng chanh',
          'Đổ bánh, Chảo không dính cho 1 chút dầu, thoa dầu để nóng chảo rồi đổ bột tràn đều, đậy nắp rồi trút ra đĩa để nhân vô cuộn lại'
        ]
      },
      {
        id: '2',
        ingredients: [
          '400 gr thịt nạc xay (lựa có mỡ)',
          '100 gr nấm trắng',
          '1/2 củ hành',
          'Hành tím băm nhuyễn',
          'Gia vị'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/ee72010dc28130d5/751x532cq70/photo.jpg',
        name: 'Bánh Cuốn Nhân Thịt Xào Nấm',
        directions: [
          'Thịt xay ướp gi vị để thấm 15p',
          'Nấm ngâm nước muối loãng 15p. Vớt lên xả sạch để ráo nước. Xắt nhỏ',
          'Củ hành xắt hạt lựu.',
          'Phi thơm hành tím rồi cho thịt xay vào xào cho tơi ra. Cho tiếp củ hành vào xào chín và ráo nước. Cuối cùng cho nấm vào xào chín là được.',
          'Pha bột bánh cuốn rồi tráng bánh bằng chảo hoặc nồi hơi nước sau đó cho nhân vào cuộn lại'
        ]
      }
    ]
  },
  {
    code: 'banh_loc',
    name: 'bánh lọc',
    description: 'Bánh bột lọc vốn có vị dai dai, thanh máyt của bột lọc, thơm ngọt của tôm, thịt nhưng không gây cảm giác ngấy. Khi ăn, chấm chìm bánh bột lọc vào bát mắm ớt cay cay rồi cho vào miệng, cảm giác như đang được thưởng thức mọi tinh hoa của ẩm thực đất cố Đô.',
    imageUrl: 'https://images.foody.vn/res/g70/691577/prof/s640x400/foody-mobile-my-jpg-528-636434837807617699.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90'
    ],
    eShops: [
      {
        id: '1',
        name: 'Quán Mỹ - Bánh Lọc & Nậm',
        address: '54 Chi Lăng,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/quan-my-banh-loc-nam'
      },
      {
        id: '2',
        name: 'Quán Tâm - Bánh Bèo & Bánh Lọc',
        address: '291 Nguyễn Chí Thanh, P. Phước Ninh,  Quận Hải Châu, Đà Nẵng',
        link: 'https://monngondathanh.com/mon-ngon/mon-an-ngon-da-nang/#3_Bun_cha_ca_8211_Mon_an_ngon_Da_Nang	'
      }
    ],
    eRecipes: [
      {
        id: '1',
        ingredients: [
          'Bột lọc đã nhồi sẵn',
          'Tôm',
          'Thịt ba chỉ',
          'Nấm meo',
          'Lá chuối',
          'Nước mắm, đường, bột ngọt, đường, tiêu, ớt, hành tím'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/b0a0061639c2ce8c/751x532cq70/photo.jpg',
        name: 'Bánh lọc hấp',
        directions: [
          'Nhồi bột đều, kĩ, vò thành khối tròn rồi dùng thớt và chai thuỷ tinh cán mỏng đều',
          'Làm nhân: Phi thơm hành rồi xào với thịt ba chỉ bằm nhỏ, tôm, nấm mèo cắt nhỏ. Nêm nếm nước mắm, tiêu, đường, bột ngọt cho vừa miệng',
          'Để phần nhân vào trong phần vỏ bánh, khéo léo nặn thành hình ưa thích.',
          'Lá chuối rửa sạch, hơ lửa hoặc trụng nước sôi cho mềm. Rồi cuốn bánh bằng là chuối tể tách riêng từng bánh, tránh dính nhau',
          'Đưa đi hấp cho tới khi vỏ bánh trong là chín',
          'Thưởng thức cùng nước mắm chua ngọt'
        ]
      },
      {
        id: '2',
        ingredients: [
          '200 gr thịt ba chỉ (ba rọi)',
          '300 gr tôm nhỏ',
          'Mắm, đường, hạt tiêu dầu ăn',
          '300 gr bột năng',
          '400 ml nước'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/35c0ab6784bc8bdd/751x532cq70/photo.jpg',
        name: 'Bánh lọc gói lá',
        directions: [
          'Xào nhân: Tôm cắt râu, bóc vỏ đầu, cắt đuôi. Thịt ba chỉ thái miếng mỏng nhỏ. Ướp mắm, đường, tiêu bột khoảng 30 phút cho ngấm. Cho 2 muỗng dầu ăn vào chảo, đun nóng, trút tôm thịt vào đảo (nếu có dầu điều thì màu sẽ đẹp hơn, không có dầu điều thì dùng 1 muỗng cafe nước hàng kho thịt cũng được). Nêm nếm lại cho vừa miệng, nên cho đậm vị ngọt một chút. Đảo đến khi tôm và thịt săn lại là được.',
          'Trùng bột: Tỉ lệ pha bột là 3 bột:4 nước, nghĩa là cứ 300gr bột thì dùng 400ml nước, gia vị là 1/2 muỗng cafe muối/hạt nêm/bột canh, 1/2 muỗng canh đường, 1 muỗng canh dầu ăn. Quậy bột, nước, muối, đường, dầu ăn cho đều. Bắc chảo đế dày, trút hỗn hợp bột vào, quậy trên lửa vừa, khi bột bắt đầu nóng thì hạ lửa nhỏ, quậy liên tục để không bị đóng bột dưới đáy chảo. Đến khi hỗn hợp bắt đầu nặng tay, đặc dần nhưng vẫn còn màu đục thì tắt bếp.',
          'Gói bánh: Lá chuối gói bánh rửa sạch, trụng qua nước sôi có chút muối để lá mềm mà vẫn giữ được màu xanh. Cắt miếng khoảng 10x15cm. Dùng cọ phết dầu ăn vào mặt lá không có gân, chính là mặt sẽ đặt bột) Múc 1 muỗng bột vào lá, dàn theo chiều dọc, đặt tôm và thịt vào giữa theo chiều dọc. Gói bánh, gấp lần lượt 2 mép theo chiều dọc sao cho sát vào bột, sau đó gập 2 đầu. Dùng dây cột bánh theo chiều ngang, có thể cột 2 chiếc bánh làm 1 cọc, xoay mặt không có nếp gấp ra ngoài.',
          'Hấp bánh: Đun sôi nước, cho bánh vào xửng hấp 20-30 phút là chín bánh.',
          'Mắm chấm: 3 muỗng canh mắm + 2 muỗng canh nước lọc + 1 muỗng canh đường + 1/2 muỗng cốt chanh + ớt dằm nát. Quậy đều.'
        ]
      }
    ]
  },
  {
    code: 'bun_cha_ca',
    name: 'bún chả cá',
    description: 'Đây là món quà sáng ngon có tiếng của ẩm thực Đà Nẵng. Một tô bún chả cá gồm có chả cá, su hào, bí đỏ, măng tươi, chút ruốc heo, hành và cà chua thật ngon mắt. Chả cá gồm 2 loại: chả cá hấp và chả cá chiên. Tùy theo lựa chọn của thực khách, người bán sẽ bỏ 1 hoặc cả 2 loại chả vào tô bún rồi chan thứ nước lèo ngọt thanh rất dễ chịu được hầm từ chính xương cá.',
    imageUrl: 'https://monngondathanh.com/wp-content/uploads/2018/01/bun-cha-ca-da-nang.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90'
    ],
    eShops: [
      {
        id: '1',
        name: 'Bún Chả Cá - Nguyễn Chí Thanh',
        address: '109 Nguyễn Chí Thanh,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/bun-cha-ca-nguyen-chi-thanh	'
      },
      {
        id: '2',
        name: 'Chả cá Bà Lữ',
        address: '317 phố Hùng Vương, thành phố Đà Nẵng',
        link: 'https://monngondathanh.com/mon-ngon/mon-an-ngon-da-nang/#3_Bun_cha_ca_8211_Mon_an_ngon_Da_Nang	'
      }
    ],
    eRecipes: [
      {
        id: '1',
        ingredients: [
          'Bún',
          'Xương chân giò',
          'Chả cá chiên',
          'Rau ngò',
          'Củ cải trắng'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/acdc59fc441418b5/751x532cq70/photo.jpg',
        name: 'Bún chả cá',
        directions: [
          'Chân giò rửa muối sạch, nấu nước sôi trụng xương chân giò. Sau đó hầm mềm chân giò, nêm muối, bỏ củ cải trắng vào cho ngọt nước. - chả cá chiên mua về thái cục trụng sơ nước sôi bỏ. Sau đó bỏ chả cá vào nồi nước lèo đã hầm mềm. Nêm gia vị nước lèo vừa ăn.',
          'Ăn kèm rau sống, ớt xắt, chanh, tương ớt, bún (có thể thay bằng bánh canh tuỳ sở thích). Làm 1 chén nước chấm xì dầu để chấm giò: xì dầu, tương ớt 3mcf, đường 1mcf, ớt xắt quậy đều nêm vừa ăn theo khẩu vị',
          'Thế là bạn đã có 1 tô bún chả cá theo phong cách nhanh gọn lẹ mà vẫn thơm ngon hấp dẫn. Chúc cả nhà ngon miệng'
        ]
      },
      {
        id: '2',
        ingredients: [
          '1 con cá cam',
          '1 miếng chả cá thu hấp',
          '1 miếng chả cá thu chiên',
          'Bắp cải, bí đỏ, măng, thơm, cà chua',
          'Bún và rau sống ăn kèm',
          'Hành lá, hành tỏi băm, gia vị các loại',
          'Món này có 1 gia vị không thể thiếu là mắm ruốc Đà Nẵng'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/95eb5cee8ce8a96a/751x532cq70/photo.jpg',
        name: 'Bún chả cá Đà Nẵng',
        directions: [
          'Cá cam cắt lát rồi ướp ít muối, nước mắm, tiêu và bột ngọt. Chả cá cắt miếng nhỏ vừa ăn. Bí đỏ, bắp cải cắt miếng, măng cắt thành sợi dài. Cà chua cắt làm 8, thơm cắt miếng nhỏ',
          'Cho dầu ăn vào nồi, phi thơm hành tỏi và cho cà chua vào xào, rồi cho măng vào xào chung. Nêm ít mắm cho món ăn dậy mùi thơm. Đổ nước vào và cho bí đỏ vào nấu, nước sôi thì thả cá vào. Lấy mắm ruốc cho ra cái chén, đổ nước vào hòa tan mắm ruốc, để lắng lại rồi đổ vào nồi nước dùng. Cho bắp cải, thơm và chả cá vào nấu sôi lại thì tắt bếp. Cho hành lá vào rồi nêm lại cho vừa ăn là xong. Món này cần phải dậy mùi mắm ruốc mới đúng hương vị đặc trưng củ'
        ]
      }
    ]
  },
  {
    code: 'banh_beo',
    name: 'bánh bèo',
    description: 'Bánh bèo là một món bánh rất thịnh hành ở miền Trung, ngoài ra cũng có nhiều ở miền Nam Việt Nam. Bánh bèo gồm có ba phần chính là bánh làm từ bột gạo, nhân để rắc lên bánh làm bằng tôm xay nhuyễn, và nước chấm, một hỗn hợp mà nước mắm là thành phần chính và thường đổ trực tiếp vào bánh chứ không cần chấm.',
    imageUrl: 'https://vina-jpodufumfywuunpq60f.stackpathdns.com/wp-content/uploads/2015/09/banh-beo-hue-food-620x350.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90'
    ],
    eShops: [
      {
        id: '1',
        name: 'Bánh Bèo Bà Bé',
        address: '100 Hoàng Văn Thụ,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/ba-be-banh-beo'
      },
      {
        id: '2',
        name: 'Quán Tâm - Bánh Bèo & Bánh Lọc',
        address: '291 Nguyễn Chí Thanh, P. Phước Ninh,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/quan-tam-banh-beo-banh-loc'
      }
    ],
    eRecipes: [
      {
        id: '1',
        ingredients: [
          '300 g bột gạo',
          '70 g bột năng',
          '1,2 lít nước',
          '300 g thịt nạc xay',
          '300 g tôm sống',
          '100 g đậu phộng rang',
          'hành lá, hành củ, hành tây và gia vị'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/1a4dcf2b30180df4/751x532cq70/photo.jpg',
        name: 'Bánh Bèo Xứ Quảng',
        directions: [
          'Cho bột gạo,bột năng và nữa muỗng cà phê muối vào song với 1,2 lít nước khuấy cho tan.(dùng bột tài ký)',
          'Tôm lột vỏ băm nhuyễn cho vào chung với thịt nạc ướp một muỗng hành tím băm,nữa muỗng cà phê muối,một muỗng cà phê nước mắm,nửa muỗng bột ngọt,chút tiêu.',
          'Chuẩn bị xửng và chén để hấp bánh.Nước hấp phải được nửa song.làm nóng chén rồi cho vào chén chút dầu ăn rồi khuấy nồi bột đều lên mới múc bột đổ vào khoảng 2 phần chén rồi hấp khoảng 7 phút,bánh trông là chín.Lần lượt hấp cho hết bột',
          'Cho dầu ăn vô chảo để phi hành tím.xong lấy dầu này đổ vào chén hành lá cắt nhỏ,',
          'Dùng chảo này cho hai muỗng canh dầu ăn cho hành tây cắt nhỏ lên xào rồi cho tôm thịt lên xào săn,thêm một chén nước.pha một muỗng canh bột năng với ít nước từ từ đổ lên nồi nhân cho hơi sệt lại.Thêm một muỗng dầu điều màu cho đẹp,nêm vùa ăn,thêm tiêu và hành lá.',
          'Pha mắm 1 mắm,2 đường,3 nước thêm ớt,không chanh. Cho ít dầu hành lên bánh chan nhân lên, thêm hành phi, đậu phộng rang rồi chan mắm lên và ăn thôi'
        ]
      },
      {
        id: '2',
        ingredients: [
          '1 gói bột bánh bèo tài ký',
          '200 g tôm tươi',
          '100 g tôm khô',
          'Nước mắm, đường, bột ngọt',
          'Hành lá, hành tím, ớt',
          'Xửng hấp, chén đổ bánh'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/8ec9d6076555f6db/751x532cq70/photo.jpg',
        name: 'Bánh bèo Huế',
        directions: [
          'Pha gói bột với 1 lít nước.',
          'Tôm khô ngâm nở, rửa sạch cho vô cối xay nhuyễn.',
          'Tôm tươi cắt đầu đuôi rửa sạch. Nấu sôi nửa chén nước cho tôm lên luộc chín. Rồi lột vỏ tôm cho vào cối xay.',
          'Cho hai muỗng cà phê dầu ăn phi thơm cũ hành tím băm cho tôm khô và tôm tươi vừa xay lên chấy khô. Vì tôm khô có vị mặn nên thêm một muỗng cà phê đường và chút tiêu cho thơm.',
          'Chuẩn bị nồi nước sôi để hấp bánh. Cho chút dầu ăn vô chén rồi cho những chén này vào nồi cho nóng mới đổ bột vô. Chỉ đổ một lớp bột mỏng tráng dưới đáy chén thôi nhé. Rồi đậy nắp chừng 4-5 phút thấy bánh trong là được. Lấy chén bánh ra để nguội mới lấy bánh ra đĩa thì mới không bị bể.',
          'Bánh mì xé nhỏ chiên giòn.',
          'Phi hành tím. Hành lá cắt nhỏ cho ra chén rồi đổ dầu ăn nóng vào để giữ được màu xanh đẹp.',
          'Nước luộc tôm lược qua rây rồi cho vào song với 4 muỗng canh nước mắm, bốn muỗng canh đường rồi nêm lại cho vừa ăn. nước mắm bánh bèo chỉ thêm ớt không có chanh tỏi. Bánh bánh ra đĩa chan hành dầu lên,cho tôm chấy, bánh mì chiên, hành phi và nước mắm'
        ]
      }
    ]
  },
  {
    code: 'bun_mam',
    name: 'bún mắm',
    description: 'Bún mắm là món ăn có tiếng của người miền Trung, nhưng đối với người dân Đà Nẵng thì bún mắm quan trọng hơn cả. Cũng vì lẽ thế mà ăn bún mắm của Đà Nẵng có vị đặc trưng rất riêng, riêng đến nỗi theo thành cái tên từ lúc nào không hay “bún mắm Đà Nẵng”. Đối với ai chưa từng thử qua, có lẽ cảm nhận đầu tiên khi nghe cái tên này, nghĩ hẳn món ăn rất mặn, bún mắm cơ mà. Nhưng, ai đã ăn rồi, chắc chắn lại phải them thuồng mà nuốt nước miếng ừng ực, mường tượng ra cái vị đậm đà, ngầy ngậy ngay trong giác quan. Nào là vị thịt heo quay giòn, vị sate cay nồng, mùi bò hoi hoi, mùi rau thơm vảng vất.',
    imageUrl: 'https://img-global.cpcdn.com/005_recipes/73d250de5780c4cd/751x532cq70/photo.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90', 'mam_nem-50', 'thit_heo-100', 'da_nang-100'
    ],
    eShops: [
      {
        id: '1',
        name: 'Bún Mắm Ngọc',
        address: '20 Đoàn Thị Điểm,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/bun-mam-ngoc'
      },
      {
        id: '2',
        name: 'Bún Mắm Bà Đông',
        address: '141 Huỳnh Thúc Kháng, P. Bình Hiên,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/ba-dong'
      }
    ],
    eRecipes: [
      {
        id: '1',
        ingredients: [
          '500 g ba rọi heo',
          '1 kg bún',
          '1 chai mắm nêm',
          '100 g đậu phộng sống',
          'Rau thơm, xà lách',
          'Dưa leo, cà rốt',
          'Dầu ăn, muối đường, tỏi, ớt,chanh'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/1a4dcf2b30180df4/751x532cq70/photo.jpg',
        name: 'Bánh Bèo Xứ Quảng',
        directions: [
          'Thịt heo rửa sạch luộc chín với chút muối, chút bột ngọt. Cắt lát mỏng',
          'Rau sống lặt rửa sạch. Cà rốt, dưa leo bào sợi ướp với chanh, đường.',
          'Đậu phộng rửa sạch để ráo rang chín với chút dầu ăn và chút muối.',
          'Giả tỏi ớt pha mắm nêm với chanh,, đườngvà muỗng canh dầu ăn có phi ớt khô.',
          'Bày rau bún thịt ra tô, thêm đậu phộng rang,chan mắm nêm vào và thưởng thức thôi.'
        ]
      }
    ]
  },
  {
    code: 'chao_cho_nam_o',
    name: 'cháo chờ nam ô',
    description: 'Món cháo chờ ở Nam Ô có vị đậm đà, ngọt thanh, vì được chế biến từ những nguyên liệu tươi ngon, được chuẩn bị trong ngày, và các công đoạn thực hiện diễn ra sau khi khách gọi, nên nóng hổi, thơm lạ.',
    imageUrl: 'https://www.dulichvietnam.com.vn/data/chao-cho-nam-o-6.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90', 'an_toi-50', 'thit_heo-100', 'da_nang-80', 'ca_kho-100'
    ],
    eShops: [
      {
        id: '1',
        name: 'Cháo Chờ Bà Thắng',
        address: '28 Ngô Xuân Thu,  Quận Liên Chiểu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/chao-cho-ba-thang'
      },
      {
        id: '2',
        name: 'Cháo Chờ O Tươi',
        address: '11 Lạc Long Quân,  Quận Liên Chiểu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/chao-cho-o-tuoi	'
      }
    ],
    eRecipes: []
  },
  {
    code: 'my_quang',
    name: 'mỳ quảng',
    description: 'Mì Quảng thường được làm từ sợi mì bằng bột gạo xay mịn và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mì mỏng khoảng 2mm. Sợi mì làm bằng bột mỳ được trộn thêm một số phụ gia cho đạt độ giòn, dai. Dưới lớp mì là các loại rau sống, trên mì là thịt heo nạc, tôm, thịt gà cùng với nước dùng được hầm từ xương heo. Người ta còn bỏ thêm đậu phụng rang khô và giã dập, hành lá thái nhỏ, rau thơm, ớt đỏ... Thông thường nước dùng rất ít.',
    imageUrl: 'https://img-global.cpcdn.com/005_recipes/4afb6cc7c3f55210/640x640sq70/photo.jpg',
    keywords: [
      'an_sang-50', 'an_trua-40', 'banh-100', 'mien_trung-100', 'an_vat-90', 'an_toi-50', 'thit_heo-100', 'da_nang-80', 'ca_kho-100', 'quang_nam-100', 'thit_bo-100', 'thit_ga-100'
    ],
    eShops: [
      {
        id: '1',
        name: 'Mì Quảng 1A',
        address: '1A Hải Phòng,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/mi-quang-1a	'
      },
      {
        id: '2',
        name: 'Mì Quảng Bích',
        address: '1 - 5 Đặng Dung,  Quận Liên Chiểu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/mi-quang-bich'
      }
    ],
    eRecipes: [
      {
        id: '1',
        ingredients: [
          '3 lạng Sườn non',
          '2 lạng Tôm',
          '6 quả Trứng cút',
          '1 kg mỳ quảng',
          'Rau sống các loại, gia vị, đậu phộng rang'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/19b6c1a25ef068c8/751x532cq70/photo.jpg',
        name: 'Mỳ quảng tôm sườn trứng',
        directions: [
          'Ướp sườn non: 1 muỗng hành băm, 1 muỗng tỏi băm, chút tiêu, 1/2 muỗng muối, 1 muỗng nước mắm, 1 muỗng hạt nêm, 1/2 muỗng nghệ, 1/2 muỗng đường—-> ướp 30’ cho thấp',
          'Ướp tôm: tôm cắt đầu, đuôi, chân càng, ướp như trên',
          'Trứng cút: luộc chín và bóc vỏ',
          'Chuẩn bị rau sống',
          'Nấu nước lều: phi hành tỏi cho thơm, dậy mùi, cho sườn vào vào lăn cho săn, tiếp cho tôm vào xào tiếp luôn, xào đến khi thấy tôm săn lại là okie. Vớt ra. Cho nước hầm của quả vào (em hay nấu nước hầm từ bắp cải và cà rốt, ngọt ko cần đường, hạt nêm gì luôn, em hạn chế ăn thịt heo nha). Nấu sôi lại nước.',
          'Trình bày và măm mă: mỳ quảng cho ra tô (mỳ quảng em mua ở chợ bà Hoa người ta cắt rồi trộn với dầu nén, thơm lừng nên em ko trụng lại nữa để khỏi mất mùi), xắp tôm, trứng, sườn, rưới nước lều lên, rắc chút hành ngò, đậu phộng.',
          'Xong roài đó mấy chị, mời cả nhà măm măm'
        ]
      },
      {
        id: '2',
        ingredients: [
          '2 con cá lóc to',
          '1 trái cà chua chín',
          '400 g mỳ quảng',
          'Rau sống',
          'Đậu phộng rang',
          'Hành ngò',
          'Tỏi, ớt, bột nghệ, màu điều'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/4afb6cc7c3f55210/751x532cq70/photo.jpg',
        name: 'Mỳ Quảng cá lóc',
        directions: [
          'Cá lóc phi lê, phần thịt cắt xéo miếng hơi lớn, đem chiên vừa vàng thì lấy ra, đừng chiên giòn nha, ướp: 1/2 muỗng cafe muối, 1 muỗng cafe đường, chút tiêu, chút bột ngọt, đầu hành đập dập. Lắc nhẹ cho cá thấm đều gia vị mà ko bị nát. Ướp ít nhất 2h. Nếu ko có em bé thì bạn giã thêm 1-2 trái ớt xanh, cho vào ướp chung cho thơm.',
          'Nếu thích ăn đầu cá, bạn cho đầu cá vào chiên rồi ướp chung với phần thịt phile ở trên. Nếu ko, bạn đem cả xương và đầu cá hầm lấy nước ngọt. Cho 1.5l nước vào nồi cùng 1 củ hành tây, nêm 1/2 muỗng cafe muối hột, 1 muỗng cafe đường. Nấu sôi, hớt sạch bọt rồi hạ lửa liu riu, đậy nắp hầm 30’ cho nhừ, xương cá ra nước ngọt.',
          'Cho 2 muỗng canh dầu vào chảo, đập đầu hành vào phi thơm rồi cho cà chua băm nhỏ vào xào cho mềm. Cho phile cá đã ướp vào xào, thêm 1 muỗng canh nước mắm, 1 muỗng cafe đường vào. Đảo nhẹ cá, để cho săn lại rồi thêm 2 vá nước hầm xương cá vào, để nhỏ lửa rim cho cá săn lại và sệt nước là được',
          'Nước hầm cá đã xong, lọc lấy nước, bỏ xương, mình tiếc nuối gỡ hết thịt còn dính trên xương và đầu cá cho vào nồi luôn. Cho hết thịt cá đã rim vào nồi, thêm dầu màu điều và hành ngò vào là xong',
          'Rau sống ăn mỳ quảng gồm có: xà lách xắt nhỏ, rau thơm, bắp chuối bào, rau cải con. Xếp rau vào tô rồi cho sợi mỳ lên trên, xếp cá lên, chan nước nhưn, rắc lên ít hành ngò và đậu phộng rang. Mình rất thích thêm vào 1 muỗng tương ớt Hội An nữa. Mỳ quảng có nước nhưn hơi mặn, khi ăn chỉ chan xâm xấp mỳ chứ ko ngập nước như bún.',
          'Dọn mỳ kèm bánh tráng (bánh đa mè) nướng và 1 chén mắm mặn dằm ớt. Bánh tráng là để bẻ nhỏ trộn chung vào mỳ. Ng Sài gòn khi ăn các món nước thường ưa chấm. Ng miền Trung thì ko. Các món nước miền Trung thường phải ướp trước khi nấu và thịt/cá phải thấm, đậm đà, khi ăn ko cần chấm thêm. Nước mắm dọn kèm là để thêm vào mỳ nếu thấy nhạt. Nhớ trộn cho đều lên nha'
        ]
      },
      {
        id: '3',
        ingredients: [
          'Một con gà ta khoảng 1kg (cho 5-6 người ăn)',
          '1 lít nước dừa tươi',
          '4-5 củ hành khô',
          '2 củ tỏi',
          'Ớt tươi, dầu phộng (dầu lạc), ớt màu (ớt bột khô xay nhuyễn)',
          'Mì quảng ',
          'Đậu phộng rang (lạc rang)',
          'Bánh tráng nướng (bánh đa)',
          'Hành ngò, rau ăn kèm gồm xà lách, rau húng lủi',
          'Rau sống: bắp chuối bào, giá, cải non',
          'Gia vị: hạt tiêu, muối, nước mắm ngon, bột ngọt, đường, một trái chanh'
        ],
        imageUrl: 'https://danang.huongnghiepaau.com/images/mon-ngon-mien-trung/chon-thit-ga-ta.jpg',
        name: 'Mỳ Quảng gà',
        directions: [
          'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi rồi cho thịt gà và xương gà vào xào cho đến khi chúng săn lại.',
          'Sau đó, bạn cho nước dừa vào nồi, nấu cùng với gà trong vòng 15 - 20 phút. Khi thịt gà mềm và xương gà cũng đã tiết hết nước ngọt, bạn tiến hành nêm nếm lại cho vừa miệng thì tắt bếp. Bạn có thể cho thêm một ít dầu ớt để nước dùng có màu đẹp mắt.',
          'Nấu một nồi nước sôi khác, cho mì quảng vào chần trong 2 phút rồi vớt ra để ráo.',
          'Chuẩn bị ớt cắt lát, nước mắm ớt nguyên chất, chanh cắt lát và các loại rau sống, bày ra đĩa. Cho rau sống vào tô, thêm mì đã chần lên trên rồi chan nước dùng và thịt gà vào, thêm đậu phộng rang, hành, ngò cắt nhỏ nữa là xong.',
          'Khi thưởng thức, bạn vắt chanh, bẻ nhỏ bánh tráng nướng vào, trộn đều và thưởng thức. Món ăn này sẽ càng ngon hơn nếu có thêm một ít tương ớt rim kiểu miền Trung.'
        ]
      }
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
    ],
    eShops: [
      {
        id: '1',
        name: 'Nướng Cay - Lẩu & Nướng',
        address: '168 Đường 3 Tháng 2,  Quận Hải Châu, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/nuong-cay-lau-nuong'
      },
      {
        id: '2',
        name: 'Nướng Cay Hồng Anh',
        address: '19 Phan Tứ,  Quận Ngũ Hành Sơn, Đà Nẵng',
        link: 'https://www.foody.vn/da-nang/nuong-cay-hong-an	'
      }
    ],
    eRecipes: [
      {
        id: '1',
        ingredients: [
          'Gói ướp gia vị nướng',
          'Dầu oliu',
          'Tiêu/ Ớt / Tỏi / Hành tím',
          'Bạch tuộc 500gr (1 con)',
          'Rau húng / Rau quế và Đậu bắp',
          'Nước tương',
          'Than và lò nướng + giấy bạc'
        ],
        imageUrl: 'https://img-global.cpcdn.com/005_recipes/9c0ed66a96116be5/751x532cq70/photo.jpg',
        name: 'Bạch Tuột Nướng Cay',
        directions: [
          'Sơ chế sạch bạch tuộc bằng nước muối. Móc sạch ruột và túi mật bên trong. Cắt ra từng miếng vừa ăn.',
          'Thêm gia vị để ướp bạch tuộc và đậu bắp. Ướp bạch tuộc trong thời gian từ 10-15p. Với các gia vị đi kèm như : Gói sốt ướp đồ nướng (mua trực tiếp từ chợ hoặc siêu thị) + dầu oliu + hành tỏi ớt băm nhỏ + 1 muỗng nhỏ nước tương + chút tiêu.',
          'Đối vs đồ nướng thì không gì bằng việc mình tự nướng trên bếp than cả mọi người ạ. Nên phải chuẩn bị bếp than + giấy bạc nhé. Mình kẹp giấy bạc lên vỉ nướng để tránh đổ gia vị xuống bếp gây khói và ám mùi nướng. Dùng cọ phết dầu ô liu lên sơ mặt giấy bạc và bắt đầu nướng bạch tuộc. Khi thấy bạch tuộc săn lại, màu đẹp thì mình lấy xuống nhé. Có thể xiên qua que để có món bạch tuộc xiên que.',
          'Đối với đậu bắp cũng như vậy nhé. Tranh thủ lửa than còn nóng mình đặt đậu bắp lên và nướng sơ. Đừng nướng chín quá không ngon. Cho đậu bắp nhai trong miệng còn giòn giòn và thấm vị là được.',
          'Sau khi nướng xong. Thì trình bày ra đĩa. Có thể ăn kèm vs cơm nóng hoặc làm vài lon bia vs gia đình, bạn bè hết xẩy nha !',
          'Nước sốt chấm có thể tuỳ biến bằng muối tiêu chanh. Hoặc tự chế biến sốt chấm theo ý thích. Trên hình là mình làm sốt chấm chua ngọt (nguyên liệu : Ớt xay, dầu hào, tương cà, tương ớt, chút đường và chút bột năng để sốt quện vào nhau). Chúc các bạn thành công.'
        ]
      }
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
    ],
    eShop: [],
    eRecipes: []
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
    ],
    eShop: [],
    eRecipes: []
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
    ],
    eShop: [],
    eRecipes: []
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
    ],
    eShop: [],
    eRecipes: []
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
    ],
    eShop: [],
    eRecipes: []
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
    ],
    eShop: [],
    eRecipes: []
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
    ],
    eShop: [],
    eRecipes: []
  },
  {
    code: 'kem_bo',
    name: 'kem bơ',
    description: 'Kem là món tráng miệng khoái khẩu của nhiều người. Kem xuất hiện từ lâu với tên đầu tiên là "tuyết ngọt". Ở Việt Nam, kem bắt đầu xuất hiện vào thế kỷ 20 khi người Pháp mang công thức và cách chế biến sang phục vụ đội quân xâm lược. Món ăn ngọt dạng đông lạnh này được làm chủ yếu từ sữa, trứng gà, đường... Nhà mình rất thích món kem bơ. Bởi ngoài lợi ích của quả bơ đối với sức khỏe như ngăn ngừa các bênh tim mạch, chống lão hoá, ngăn ngừa ung thư, đẹp da.., bơ còn có mùi H thơm, ngậy rất hấp dẫn. Và đặc biệt làm kem bơ ăn lạnh lại càng ngon hơn. Kem bơ chuẩn phải mịn, không có đá dăm, thơm, ngậy bùi và rất ngon.',
    imageUrl: 'https://www.bepgiadinh.com/wp-content/uploads/2016/03/29/kem-bo.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'tu_tap_ban_be-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'mon_trang_mieng-100'
    ],
    eShop: [],
    eRecipes: []
  },
  {
    code: 'tra_dao',
    name: 'trà đào',
    description: 'Trà đào món phổ biến hầu như ai cũng biết và đã thưởng thức qua. Mỗi nơi có 1 công thức mang hương vị riêng. Trà đào của mình chủ yếu vị ngọt thanh và không có vị chua chua. Siêu giải khát mùa hè.',
    imageUrl: 'https://img-global.cpcdn.com/005_recipes/63f478b1c937ce54/751x532cq70/photo.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'tu_tap_ban_be-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'mon_trang_mieng-100', 'do_uong-100', 'giai_khat-100'
    ],
    eShop: [],
    eRecipes: []
  },
  {
    code: 'bia_hoi',
    name: 'bia hơi',
    description: 'Bia hơi là một trong những loại nước giải khát được giới sinh viên và tầng lớp bình dân trong xã hội ưa chuộng. Khoác lên mình lớp áo vàng và mang trong mình vị cay cay của cồn thêm vào đó là vị mát mát sau khi được ướp lạnh thì bia hơi đã đi vào lòng của sinh viên của các chú thợ hồ của tầng lớp bình dân trong xã hội một cách nhẹ nhàng và bình yên từ lúc nào không hay. Và dần dần chiếm vị thế không thế cực kì quan trọng trong xã hội bây giờ, gần như là k thể thiếu trong nhưng ngày hè oi bức của các tỉnh thành trên đất nước Việt Nam.',
    imageUrl: 'http://sohanews.sohacdn.com/zoom/700_438/2016/voucher-bia-2-ylxt-1480068098109-crop-1480068104420-1480093221962-0-0-319-514-crop-1480093273633.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'nhau-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'do_uong-100', 'giai_khat-100', 'tu_tap_ban_be-100'
    ],
    eShop: [],
    eRecipes: []
  },
  {
    code: 'ga_nuong',
    name: 'gà nướng',
    description: 'Gà "đi bộ" nhà quê thì khỏi bàn về độ ngon rồi hén. Nướng vàng trên lửa than ngoài vườn thơm nức mũi, bay tận vào trong nhà, rắc lá chanh bào nhuyễn thơm lừng. Cắn miếng gà nhai cùng lá chanh, chấm muối tiêu chanh/muối ớt thôi rồi tê tái quên đường về luôn nhé. Bởi vậy đừng ai hỏi sao em nó khoái về quê đến vậy.',
    imageUrl: 'http://toinayangi.vn/wp-content/uploads/2014/11/cach-tam-uop-ga-nuong-1.jpg',
    keywords: [
      'an_sang-10', 'an_trua-10', 'mien_trung-100', 'an_vat-100', 'nhau-100',
      'an_toi-100', 'hen_ho-90', 'gia_sinh_vien-80', 'an_chinh-100', 'tu_tap_ban_be-100'
    ],
    eShop: [],
    eRecipes: []
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


// 'mon_an_cho_bua_sang',
// 'mon_an_cung_ban_be',
// 'mon_an_mua_dong',
// 'mon_an_cho_bua_toi',
// 'mon_an_cho_bua_trua',
// 'an_nhau',
// 'do_uong',

let userCollections = [
  {
    username: 'admin',
    collections: ['mon_an_cho_bua_sang', 'mon_an_cung_ban_be', 'mon_an_mua_dong']
  },
  {
    username: 'user01',
    collections: ['mon_an_cung_ban_be', 'mon_an_mua_dong']
  },
  {
    username: 'user02',
    collections: ['mon_an_mua_dong', 'mon_an_cho_bua_toi']
  },
  {
    username: 'user03',
    collections: ['mon_an_cho_bua_toi', 'mon_an_cho_bua_trua']
  },
  {
    username: 'user04',
    collections: ['mon_an_cho_bua_trua', 'an_nhau']
  },
  {
    username: 'user05',
    collections: ['an_nhau', 'do_uong']
  },
  {
    username: 'user06',
    collections: ['mon_an_cho_bua_toi']
  },
  {
    username: 'user07',
    collections: ['mon_an_mua_dong']
  },
  {
    username: 'user08',
    collections: ['mon_an_cho_bua_toi']
  },
  {
    username: 'user09',
    collections: ['mon_an_mua_dong']
  },
  {
    username: 'user10',
    collections: ['mon_an_mua_dong']
  }
];

module.exports = {
  keywords,
  foods,
  collections,
  users,
  userCollections
};

