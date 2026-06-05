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

- col-md-6 nghĩa là 
768px trở lên:
chiều rộng = 6/12 = 50%  
- Không cần viết col-sm-12 vì Bootstrap dùng Mobile First.
