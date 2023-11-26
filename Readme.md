# Hồ Duy Hoàng - 20110487

## Em xin gửi lời cảm ơn chân thành đến Thầy Nguyễn Minh Đạo đã dạy và truyền đạt những kiến thức quý giá cho em trong suốt thời gian học tập vừa qua. Trong thời gian tham gia lớp công nghệ phần mềm mới của thầy, em đã biết thêm nhiều kiến thức bổ ích, trau dồi cho bản thân, tinh thần học tập nghiêm túc và hiệu quả. Đây chắc chắn sẽ là những kiến thức có giá trị sâu sắc, là hành trang để em vững bước sau này trở thành một coder chuyên nghiệp.

## Bộ môn công nghệ phần mềm mới là môn học thú vị, bổ ích và có tính thực tế cao. Đảm bảo cung cấp đầy đủ kiến thức, kỹ năng, giúp sinh viên có thể ứng dụng vào công nghệ xây dựng trang web hiện nay. Tuy nhiên, do khả năng tiếp thu kiến thức còn nhiều hạn hẹp, hiểu chưa sâu rộng nên bài đồ án khó tránh khỏi những thiếu sót, kính mong thầy xem xét và góp ý để bài đồ án của em được hoàn thiện và tốt hơn.

# Utalik Shop Ecommerce của Hoàng, Đồ án Công nghệ phần mềm mới

> Website thương mại điện tử build với MERN Stack

<img src="./frontend/public/images/ảnh 1.png">
<img src="./frontend/public/images/ảnh 2.png">
<img src="./frontend/public/images/ảnh 3.png">
<img src="./frontend/public/images/ảnh 4.png">
<img src="./frontend/public/images/ảnh 5.png">
<img src="./frontend/public/images/ảnh 6.png">

Đồ án có tích hợp thanh toán Paypal

## Các chức năng của đồ án

- Giỏ hàng đầy đủ tính năng
- Đánh giá và xếp hạng sản phẩm
- Carousel sản phẩm nổi bật
- Phân trang sản phẩm
- Tính năng tìm kiếm sản phẩm
- Hồ sơ người dùng với đơn hàng
- Quản lý sản phẩm của quản trị viên
- Quản lý người dùng của quản trị viên
- Trang chi tiết đơn hàng của quản trị viên
- Tùy chọn đánh dấu đơn hàng đã giao
- Quy trình thanh toán (vận chuyển, phương thức thanh toán, v.v.)
- Tích hợp thanh toán qua PayPal / thẻ tín dụng-
  Seeder cơ sở dữ liệu (sản phẩm và người dùng)

## Cách sử dụng

- Tạo cơ sở dữ liệu MongoDB để lấy các thông tin cấu hình cho biến môi trường `MongoDB URI` - [MongoDB Atlas]
- Đường link: https://www.mongodb.com/cloud/atlas/register
- Tìm hiểu về Paypal thanh toán trên môi trưởng sandbox, để lấy các biến môi trường cấu hình cho `.env`

### Biến môi trường

Cấu hình tại file `.env`

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'secret'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Tùy biến JWT_SECRET & PAGINATION_LIMIT theo nhu cầu

### Các lệnh cài đặt các dependencies cho cả Frontend & Backend

```
npm install
cd frontend
npm install
```

### Chạy chương trình

```

# Run cả Fronted & Backend
npm run dev

# Chỉ chạy Backend (port: 5000)
npm run server

# Chỉ chạy Frontend (port: 3000)

cd frotnend
npm start
```

## Build & Deploy

```
# Lệnh:
cd frontend
npm run build
```

### Seed Database

Các lệnh seed database vào MongoDB

```
# Nhập data vào MongoDB (các file để tùy biến data tại `backend\data`)
npm run data:import

# Xóa data đã có từ MongoDB
npm run data:destroy


```

```
Đăng nhập tài khoản

admin@email.com (Admin)
123456

hoang@email.com (Customer)
123456

huy@email.com (Customer)
123456
```

---

## Tài khoản và mật khẩu Paypal test thanh toán:

- Mail: sb-047q6428395913@personal.example.com
- Pass: $)2dCq9?
