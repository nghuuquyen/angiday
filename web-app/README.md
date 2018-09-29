# README #

AnGiDay - Ứng dụng Gợi Ý Và Tìm Kiếm Món Ăn

### How do I get set up? ###

* Configuration

Tạo mới file `.env` và thiết lập thông số trong file `.env` như mẫu `.env.example`

#### Manual (Cách thủ công)

Cài đặt Node.js, Ruby, Mongodb và Redis. 

Mở terminal lên, di chuyển đến thư
mục root của project (cụ thể là `angiday`) rồi chạy lệnh dưới đây.

* Install Dependencies

chạy lệnh `npm install`

* Database configuration

Thiết lập kết nối database trong file `.env`, cấu hình đường dẫn kết nối, mật khẩu của bạn.

* How to run tests

Chạy lệnh `npm test`

* Deployment instructions

Chạy lệnh `grunt build` để đóng gói và build ứng dụng.

#### With Docker (Sử dụng Docker Container)

Cài Đặt Docker, mở terminal (hoặc CMD với window) lên, di chuyển đến thư
mục root của project (cụ thể là `angiday`) rồi chạy lệnh dưới đây.

```
docker-compose up -d
```

Thế là xong, mở trình duyệt tại địa chỉ `localhost:3000` và xem kết quả.

Chú ý, để tắt ứng dụng đi thì tại màn hình terminal trỏ đến thư mục root của project chạy lệnh

```
docker-compose down
```

Trong trường hợp muốn xoá sạch các container thì có thể chạy lệnh sau 

```
docker stop $(docker ps -a -q)
```

và sau đó là lệnh 

```
docker rm $(docker ps -a -q)
```

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
