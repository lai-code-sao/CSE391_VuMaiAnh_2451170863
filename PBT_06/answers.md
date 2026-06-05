Phần A:
Câu A1 — Grid System (tuan_4_css_frameworks/bootstrap/02_grid_system/02_grid_system.md + mục 3)  
Layout cho HTML ở kích thước ≥ 992px:
<img src="/PBT_06/images/Desktop_layout.png" alt="Ảnh layout cho HTML ở desktop">

Layout cho HTML ở kích thước 768px - 991px:
<img src="/PBT_06/images/Tablet_layout.png" alt="Ảnh layout cho HTML ở tablet">

Layout cho HTML ở kích thước < 768px:
<img src="/PBT_06/images/Mobile_layout.png" alt="Ảnh layout cho HTML ở mobile">

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


