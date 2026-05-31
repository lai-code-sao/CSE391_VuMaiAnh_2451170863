Phần A:  

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