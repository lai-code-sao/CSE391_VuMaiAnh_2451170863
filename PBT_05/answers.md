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

