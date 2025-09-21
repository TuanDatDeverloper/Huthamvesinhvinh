CREATE DATABASE IF NOT EXISTS huthamvesinhvinh;
USE huthamvesinhvinh;

-- Tạo bảng dịch vụ
CREATE TABLE services (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  details JSON,
  price VARCHAR(50),
  warranty VARCHAR(50),
  icon VARCHAR(50)
);

-- Dữ liệu mẫu cho bảng dịch vụ
INSERT INTO services (title, description, details, price, warranty, icon) VALUES
('Thông tắc cống', 'Xử lý tình trạng tắc cống do rác thải, lá cây, chất bẩn tích tụ lâu ngày. Sử dụng thiết bị chuyên dụng không làm hỏng đường ống.', '["Thông tắc cống sinh hoạt","Thông tắc cống thoát nước mưa","Xử lý tắc nghẽn nghiêm trọng"]', 'Từ 200.000đ', '3 tháng', 'Wrench'),
('Hút hầm vệ sinh', 'Dịch vụ hút bể phốt, hầm cầu với xe chuyên dụng hiện đại. Đảm bảo vệ sinh an toàn và không gây ô nhiễm môi trường.', '["Hút bể phốt gia đình","Hút bồn chứa nước thải","Vệ sinh khử trùng sau hút"]', 'Từ 500.000đ', '6 tháng', 'Truck'),
('Nạo vét hố ga', 'Vệ sinh và nạo vét hố ga, hố thu nước mưa để đảm bảo hệ thống thoát nước hoạt động trơn tru.', '["Nạo vét hố ga sinh hoạt","Vệ sinh hố thu nước mưa","Thay thế nắp hố ga","Sửa chữa hố ga hỏng"]', 'Từ 150.000đ', '3 tháng', 'Droplets'),
('Xử lý mùi hôi', 'Khử mùi hôi từ cống, hầm vệ sinh bằng công nghệ xử lý hiện đại, an toàn cho sức khỏe.', '["Xử lý mùi hôi cống thoát nước","Khử mùi hầm vệ sinh","Xử lý mùi từ bể phốt","Phun thuốc khử trùng"]', 'Từ 300.000đ', '1 tháng', 'Wind'),
('Vệ sinh đường ống', 'Vệ sinh toàn bộ hệ thống đường ống bằng máy cao áp, loại bỏ cặn bẩn và vi khuẩn.', '["Vệ sinh ống nước","Vệ sinh ống thoát nước","Kiểm tra rò rỉ","Thay thế ống hỏng"]', 'Từ 400.000đ', '6 tháng', 'Zap');


-- Tạo bảng vị trí bản đồ TP Vinh
CREATE TABLE locations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  latitude DOUBLE,
  longitude DOUBLE,
  description TEXT
);

-- Dữ liệu mẫu vị trí TP Vinh
INSERT INTO locations (name, latitude, longitude, description) VALUES
('Thành phố Vinh', 18.679585, 105.681443, 'Trung tâm thành phố Vinh, Nghệ An');
