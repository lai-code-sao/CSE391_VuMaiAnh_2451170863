Track A (Bootstrap):  
Phần A:
Câu A1 — Grid System (tuan_4_css_frameworks/bootstrap/02_grid_system/02_grid_system.md + mục 3)  
Layout cho HTML ở kích thước ≥ 992px:
<img src="/PBT_06/screenshots/Desktop_layout.png" alt="Ảnh layout cho HTML ở desktop">

Layout cho HTML ở kích thước 768px - 991px:
<img src="/PBT_06/screenshots/Tablet_layout.png" alt="Ảnh layout cho HTML ở tablet">

Layout cho HTML ở kích thước < 768px:
<img src="/PBT_06/screenshots/Mobile_layout.png" alt="Ảnh layout cho HTML ở mobile">

Kích thước	|< 768px	|768px - 991px|	≥ 992px|
|---|---|---|---|
Số cột|	12/12 |	6/12 |	3/12 |
Box layout|	1 box/hàng |	2 box/hàng |	4 box/hàng |

- `col-md-6` nghĩa là 
768px trở lên:
chiều rộng = 6/12 = 50%  
- Không cần viết col-sm-12 vì Bootstrap dùng Mobile First.  

Câu A2 — Utilities & Components (tuan_4_css_frameworks/bootstrap/04_utilities/04_utilities.md + mục 3)  
1. 
- Ý nghĩa từng class  
`d-none` → `display: none`  
`d-md-block` → từ breakpoint md (≥768px), đổi thành `display: block`  
- Element này hiển thị khi kích thước màn hình ≥ 768px, ẩn khi kích thước màn hình < 768px  
2. 
- `mt-3` = `margin-top: 1rem;` → Tạo khoảng cách phía trên.  
- `mb-4` = `margin-bottom: 1.5rem;` → Tạo khoảng cách phía dưới.  
- `ms-2` = margin-left: 0.5rem; → Khoảng cách bên trái.  
- `px-4` = `padding-left: 1.5rem;` và `padding-right: 1.5rem;`  
→ Đệm trái và phải.  
- `mb-auto` = `margin-bottom: auto;` → Margin tự động.  
3. 

| Class              | Mobile                                  | Tablet/Desktop             |
| ------------------ | --------------------------------------- | -------------------------- |
| `.container`       | Responsive có max-width theo breakpoint | Có max-width               |
| `.container-fluid` | 100%                                    | 100%                       |
| `.container-md`    | 100%                                    | Có max-width từ md trở lên |

Phần C:  
Câu C1 (tuan_4_css_frameworks/bootstrap/05_customization/05_customization.md + mục 2 và 3)  
- Muốn đổi màu `$primary` từ xanh mặc định sang` #E63946`.
    + Cần công cụ:   
        + Node.js + npm  
        + Package bootstrap  
        + Package sass   
    + File cần sửa your-custom.scss  
    + Quy trình:  
```scss
// Bước 1: Import functions
@import "bootstrap/scss/functions";

// Bước 2: Override variable
$primary: #E63946;

// Bước 3: Import Bootstrap
@import "bootstrap/scss/bootstrap";
```
- KHÔNG nên override trực tiếp .btn-primary `{ background: red; }` mà nên dùng SASS variables vì  
    + Chỉ sửa được một component  
    + Phải bảo trì nhiều CSS  
    + Không tận dụng được hệ thống Bootstrap  
    + Dễ gặp lỗi specificity  
- So sánh CSS thuần với Bootstrap:  

| Tiêu chí             | CSS Thuần           | Bootstrap                 |
| -------------------- | ------------------- | ------------------------- |
| Số dòng CSS          | ~50–60 dòng         | 0–5 dòng                  |
| Thời gian phát triển | Lâu hơn             | Nhanh hơn                 |
| Responsive           | Tự viết media query | Có sẵn                    |
| Components           | Tự xây dựng         | Có sẵn                    |
| Học tập CSS          | Tốt                 | Ít hiểu sâu CSS hơn       |
| Tùy biến             | Rất cao             | Có giới hạn bởi framework |

- Nên dùng Bootstrap khi:  
    + Prototype nhanh.  
    + Đồ án môn học.  
    + Landing page.  
    + Dashboard admin.  
    + Website CRUD.  
    + Dự án cần hoàn thành nhanh.  
    + Team muốn giao diện nhất quán.  
- Không nên dùng Bootstrap khi:  
    + Website có thiết kế độc quyền.  
    + Design System riêng của công ty.  
    + UI phức tạp, sáng tạo.  
    + Cần tối ưu bundle cực mạnh.  
    + Muốn kiểm soát từng pixel.  
