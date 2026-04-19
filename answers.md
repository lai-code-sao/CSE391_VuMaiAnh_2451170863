Câu A1 - HTTP & Browser (tuan_1_html5/01_introduction_html_universe.md + Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương (ý 1) và phần 4 mục 4.3 (ý 2))
1. Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter:
B1: Request của bạn xuất phát từ laptop → đi qua router WiFi nhà trọ
B2: → Qua nhà mạng VNPT → chạy trong tuyến cáp nội địa
B3: → Đến data center của Sea Limited tại Hà Nội
B4: → Server xử lý: "Bạn muốn xem danh sách sản phẩm"
B5: → Response chạy ngược lại: cáp nội địa → VNPT → router → laptop
B6: → Chrome nhận file HTML, CSS, JS → render ra giao diện → bạn thấy danh sách sản phẩm
2. Trong DevTools của Chrome, tab Network cho thấy thông tin:
- Số requests được gửi
- Số dữ liệu thực tế đã được gửi qua đường dây mạng từ server về máy tính của bạn.
- Tổng dung lượng của các tệp tin sau khi trình duyệt đã giải nén và sẵn sàng để render.
- Thời gian trình duyệt đã tải xong và phân giải mã HTML thành cây DOM
- Tổng thời gian để tất cả tài nguyên tải xong hoàn toàn.

    + Status Code của request đầu tiên

    <div>
        <img src="images/Screenshot 2026-04-19 013333.png" style="width: 1000px; height: 600px; ">
    </div>

    + Tổng thời gian load trang

    <div>
    <img src="images/Screenshot 2026-04-19 013334.png" style="width: 1000px; height: 600px; ">
    </div>

    + Một request trả về file CSS

    <div>
    <img src="images/Screenshot 2026-04-19 013700.png" style="width: 1000px; height: 600px; ">
    </div>
Câu A2 - Semantic HTML (tuan_1_html5/00_design_thinking_layout.md + phần 5)
-Lỗi 1: Dùng thẻ <div> cho phần header
-Lỗi 2: Dùng thẻ <div> cho phần main
-Lỗi 3: Dùng thẻ <div> cho phần footer
-Lỗi 4: Thẻ <img> chưa có thuộc tính alt
Sửa lại:
```<header class="header">
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</header>
<main class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg" alt="ảnh điện thoại"></div>
    </div>
</main>
<footer class="footer">© 2026 ShopTLU</footer>```html

Câu A3 - Block vs Inline (tuan_1_html5/00_design_thinking_layout.md + phần 6 mục 6.1)
Kết quả:
<img src="images/PBT_01_A3.png" style="width: 1000px; height: 600px; ">
Giải thích:
Thẻ <div> là thẻ Block -> mỗi thẻ TỰ XUỐNG DÒNG
Thẻ <span> và <strong> là thẻ Inline -> các thẻ NẰM CÙNG DÒNG
Câu A4 - Table (tuan_1_html5/05_tables_hyperlinks.md + phần table)

Thẻ	        | Vai trò	    | Ghi nhớ
| :--- | :--- | :--- | 
`<thead>`	    | Header	    | Tiêu đề cột
`<tbody>`     | Body	        | Dữ liệu chính
`<tfoot>`	    | Footer	    | Tổng kết

Lý do KHÔNG NÊN dùng table để tạo layout trang web:
- Bảng có cấu trúc rất cứng nhắc. Trên màn hình điện thoại, bảng sẽ không thể tự động xếp chồng các cột lên nhau thành hàng dọc được. Điều này dẫn đến việc người dùng phải cuộn ngang để xem hết trang web.
- Cơ chế của Table: Trình duyệt thường phải đợi tải xuống toàn bộ code của bảng rồi mới bắt đầu tính toán kích thước các ô và hiển thị chúng ra màn hình 
-> Tốc độ tải trang chậm
- Chỉ dùng table cho DATA tabular.

 