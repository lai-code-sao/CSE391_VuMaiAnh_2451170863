Phần A:  

Câu A1 — Viewport & Mobile-First (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```  
- Nếu THIẾU thẻ này, iPhone giả định trang rộng 980px (như desktop) → thu nhỏ lại → chữ bé xíu → UX tệ.  
- Mobile-First:  
    + Code cho mobile trước.  
    + Thêm complexity khi màn hình rộng hơn.  
VD:  
```css
.product-grid { grid-template-columns: 1fr; }
@media (min-width: 768px) {
    .product-grid { 
        grid-template-columns: repeat(4, 1fr); }
}
```  
- Desktop-First:  
    + Code cho desktop trước.  
    + Thêm complexity khi màn hình nhỏ hơn.   
VD:  
```css
.product-grid { grid-template-columns: repeat(4, 1fr); }
@media (max-width: 768px) {
    .product-grid { 
        grid-template-columns: repeat(2, 1fr); }
}
```  
- Lý do Mobile-First tốt hơn:  
    + Nó giúp CSS mặc định đơn giản hơn, và các màn hình lớn mới nhận thêm các rule mở rộng thông qua min-width media queries.  
    + Buộc bạn ưu tiên nội dung quan trọng trước (content thinking).  
    + Google và performance tools đánh giá cao hơn.  

Câu A2 — Breakpoints (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
Breakpoints chuẩn:  
Breakpoint|	Class infix|	Dimensions| Representative device|Column|
|---|---|---|---|---|
Extra small	|None|	<576px| iPhone SE, các điện thoại nhỏ|1 cột|
Small|	sm	|≥576px|iPhone Plus, điện thoại ngang|2 cột|
Medium|	md	|≥768px|iPad dọc, tablet|3 cột|
Large|	lg	|≥992px|Laptop nhỏ|3-4 cột|
Extra large|	xl	|≥1200px|Desktop, laptop lớn|4 cột|
Extra extra large|	xxl|	≥1400px|Màn hình 4K, ultrawide|>=4 cột|

Câu A3 - Media Queries (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
```css
.container { width: 100%; padding: 10px; }

@media (min-width: 576px) { .container { width: 540px; } }
@media (min-width: 768px) { .container { width: 720px; } }
@media (min-width: 992px) { .container { width: 960px; } }
@media (min-width: 1200px) { .container { width: 1140px; } }
```
Chiều rộng màn hình	|.container width|
|---|---|
375px (iPhone SE)|	100% |
600px|	540px |
800px|	720px |
1000px|	960px |
8400px|	1140px |  

Câu A4 - SCSS Basics (tuan_3_css_advanced/16_sass_scss.md + mục 3)  
1. Variables: Lưu giá trị dùng lại.  
VD:  
```scss
$primary-color: #7c3aed;
$color-danger: #dc2626;
$transition-base: 0.3s ease;

.btn-primary {
    background: $primary-color;      
    color: white;
    transition: color $transition-base;
}

.btn-primary:hover {
    color: $primary-color;
}

.badge { background: $color-danger; }
```  
2. Nesting: Lồng selector.  
VD:  
```scss
.card {
    padding: $space-2;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__p {
        font-size: $font-size-base;
        font-family: $font-family-base;
    }

    &__btn {
        background: $bg;
        color: $color;
        padding: $space-3 $space-6;
    }
}
```  
3. Mixins (@mixin, @include):  
- @mixin: Hàm CSS tái sử dụng có tham số.  
- @include: Gọi mixin.  
VD:  
```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin card-style($fs,$color: white){
    color: $color;
    padding: $space-2 $space-3;
    border: $border-sm;
    border-radius: $radius-sm;

    &:hover {
        transform: translateY(-5px);
    }
}

.hero {
    @include flex-center;
}

.card {
    @include card-style(18px);
}
```  
4. @extend / Inheritance: Kế thừa selector khác.  
VD:  
```scss
.btn {
    padding: 10px 20px;
    border-radius: 8px;
}

.btn-primary {
    @extend .btn;
    background: blue;
} 
```  

Phần C:  
Câu C1 — Phân tích trang web thực (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
1. Tiki.com  
Mobile (375px):  
<img src="/PBT_05/images/Mobile375.1.png" alt="Ảnh trang Tiki trên điện thoại 375px">
<img src="/PBT_05/images/Mobile375.2.png" alt="Ảnh trang Tiki trên điện thoại 375px">
<img src="/PBT_05/images/Mobile375.3.png" alt="Ảnh trang Tiki trên điện thoại 375px">
<img src="/PBT_05/images/Mobile375.4.png" alt="Ảnh trang Tiki trên điện thoại 375px">
<img src="/PBT_05/images/Mobile375.5.png" alt="Ảnh trang Tiki trên điện thoại 375px">
<img src="/PBT_05/images/Mobile375.6.png" alt="Ảnh trang Tiki trên điện thoại 375px">
<img src="/PBT_05/images/Mobile375.7.png" alt="Ảnh trang Tiki trên điện thoại 375px">

Tablet (768px):  
<img src="/PBT_05/images/Tablet768.1.png" alt="Ảnh trang Tiki trên máy tính bảng 768px">
<img src="/PBT_05/images/Tablet768.2.png" alt="Ảnh trang Tiki trên máy tính bảng 768px">
<img src="/PBT_05/images/Tablet768.3.png" alt="Ảnh trang Tiki trên máy tính bảng 768px">
<img src="/PBT_05/images/Tablet768.4.png" alt="Ảnh trang Tiki trên máy tính bảng 768px">
<img src="/PBT_05/images/Tablet768.5.png" alt="Ảnh trang Tiki trên máy tính bảng 768px">


Desktop (1440px):  
<img src="/PBT_05/images/Desktop1440.1.1.png" alt="Ảnh trang Tiki trên màn hình 1440px">
<img src="/PBT_05/images/Desktop1440.2.2.png" alt="Ảnh trang Tiki trên màn hình 1440px">
<img src="/PBT_05/images/Desktop1440.3.3.png" alt="Ảnh trang Tiki trên màn hình 1440px">
<img src="/PBT_05/images/Desktop1440.4.4.png" alt="Ảnh trang Tiki trên màn hình 1440px">

2.  
- Navigation thay đổi    
+ Không chuyển sang hamburger menu.  
+ Không dùng dropdown menu cho điều hướng chính.  
| Desktop                                  | Tablet giống Mobile                                      |
| ---------------------------------------- | ------------------------------------------- |
| Navigation nằm ở header phía trên        | Navigation chuyển xuống thanh dưới màn hình |
| Có menu và nhiều liên kết trên đầu trang | Chỉ giữ các chức năng chính                 |
| Có sidebar danh mục                      | Sidebar bị ẩn                               |

- 
    | Desktop                                  | Tablet | Mobile                                      |
  | -- | ---------------------------------------- | --------|----------------------------------- |
   Banner chính |  2 cột     | 1 cột |1 cột|
   Các icon tính năng nhanh |10 cột  |        5 cột     | 5 cột|
   Danh sách sản phẩm tiêu chuẩn |      6 cột              |      5 cột                         |2 cột|
   Khu vực flash sale |   6 cột    | 8 cột |4 cột|
  Khu vực banner ô vuông danh mục|           6 cột            |        3 cột                       |2 cột|

- Elements bị ẩn trên mobile:  
    + Toàn bộ cột Sidebar danh mục sản phẩm  
    + Thanh Topbar thông báo trên cùng  
    + Các liên kết điều hướng trên Header  
    + Các từ khóa gợi ý xu hướng  
    + Nút Trang chủ và nút Tài khoản  
    + Các nút điều hướng tròn trắng ở hai đầu các khối sản phẩm cuộn ngang  
    + Dãy cam kết dịch vụ  
    + Các thông tin phụ trên thẻ sản phẩm  
- Font size có thay đổi  

3.  @media rules  
<img src="/PBT_05/images/media.1.png" alt="Ảnh media query tiki.com dùng">
<img src="/PBT_05/images/media.2.png" alt="Ảnh media query tiki.com dùng">







