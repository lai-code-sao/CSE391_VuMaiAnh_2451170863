Phần A:  
Câu A1 - 3 Cách nhúng CSS (tuan_2_css_core
/08_introduction_css.md + mục 3 và tuan_2_css_core
/10_inheritance_cascading.md + mục 3)  
1. Inline CSS — trong attribute style:
- VD: 
```html
<h1 style="color: #32c463; font-size: 30px; font-family: 'Courier New', Courier, monospace;">Tiêu đề</h1>
```
- Ưu điểm:  
    + Kích hoạt nhanh chóng cho một phần tử duy nhất.
    + Có độ ưu tiên cao nhất (ghi đè tất cả các cách khác).
    + Hữu ích khi test nhanh.
- Nhược điểm: Code cực kỳ rối và lặp lại -> khó bảo trì.
- Chỉ dùng khẩn cấp / override tạm thời.  
2. Internal CSS — trong thẻ `<style>`:
- VD: 
```html
<head>
    <style>
        h2{
            font-weight: bold;
            color: #a4b93a; 
            font-size: 32px; 
        }
    </style>
</head>
```
- Ưu điểm: Không cần tạo file riêng, tiện cho các trang web chỉ có duy nhất một trang.  
- Nhược điểm:  
    + Khó bảo trì: Nếu dự án có nhiều trang, bạn phải copy đoạn code này sang từng file. Khi cần sửa màu, bạn phải đi lục từng file một.
    + Làm tăng dung lượng file HTML.  
- Dùng cho prototype hoặc trang đơn.    
3. External CSS — file riêng:
- VD: 
```html
<!--index.html-->
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
```css
/* styles.css */
h1 { color: #2563eb; font-size: 32px; }
```  
- Ưu điểm:  
    + Caching: Browser cache file CSS → trang thứ 2, thứ 3 load ngay, không tải CSS lại.  
    + Tái sử dụng: Dùng cùng 1 file CSS cho nhiều trang — sửa 1 chỗ = đổi toàn bộ site.  
    + Maintainability: Tách HTML (structure) và CSS (presentation) → team làm song song được.  
    + Performance: Minified CSS (xóa space, comment) → file nhỏ hơn → load nhanh hơn.  
- Nhược điểm: Tạo thêm một yêu cầu tải file, nếu file quá nặng hoặc mạng chậm có thể khiến trang web hiện ra mà chưa có định dạng trong giây lát.  
- Dùng cho mọi dự án thật.   

Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách viết sau cùng "thắng" vì trình duyệt phân tích từ trên xuống dưới.  

Câu A2 -  CSS Selectors — Dự đoán kết quả (tuan_2_css_core
/09_css_selectors.md + mục 2, mục 3)  
1. `h1 `                    → Chọn: Tất cả thẻ `<h1>`
2. `.price`                 → Chọn: Thẻ có class="price"
3. `#app header`            → Chọn: Thẻ header nằm trong thẻ có id="app" 
4. `nav a:first-child`      → Chọn: Thẻ `<a>` là con đầu tiên nằm trong thẻ `<nav>`
5. `.product.featured h2`   → Chọn: Thẻ `<h2>` nằm trong thẻ có class="product featured"
6. `article > p`            → Chọn: Thẻ `<p>` là con trực tiếp của thẻ `article`
7. `a[href="/"]`            → Chọn: Thẻ `<a>` có thuộc tính href="/"
8. `.top-bar.dark h1`       → Chọn: Thẻ `<h1>` nằm trong thẻ có class="top-bar dark"  
<img src="/PBT_03/screenshots/selectors_test.png" alt="Ảnh kiểm chứng đáp án">  

Câu A3 - Box Model — Tính toán kích thước (tuan_2_css_core
/11_box_model.md + mục 3)  
TH1: content-box  
→ Chiều rộng hiển thị = 400+20x2+5x2 = 450px  
→ Không gian chiếm trên trang = 450+10x2 = 470px  
TH2: border-box  
→ Chiều rộng hiển thị = 400px  
→ Kích thước content thực tế = 400-20x2-5x2 = 350px  
→ Không gian chiếm trên trang = 400+10x2 = 420px  
TH3: Margin collapse  
→ Khoảng cách giữa box-a và box-b = 40px  
→ KHÔNG PHẢI 65px vì margin collapse nên margin dọc giữa 2 block element GỘPLẠI = lấy cái LỚN HƠN  

Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = 40px  

Câu A4 - Specificity (tuan_2_css_core
/09_css_selectors.md + mục 3)  
1. Tính specificity score cho mỗi rule:
Rule A: `p` = 0-0-1 = 1  
Rule B: `.price` = 0-1-0 = 10
Rule C: `#main-price` = 1-0-0 = 100
Rule D: `p.price` = 0-1-1 = 11
2. Element sẽ có màu đỏ vì specificity 100 cao nhất.  
3. Nếu thêm ```html<p class="price" id="main-price" style="color: orange;">```, element có màu cam.  
4. Nếu Rule A thêm `!important`, element có màu đen vì `!important` có  specificity vô hạn.  

Phần B:  
Câu B2 - Box Model Lab (tuan_2_css_core
/11_box_model.md + mục 3)  
Phần 1:  

`Content-box`  
<img src="/PBT_03/screenshots/demo_content_box.png" alt="Ảnh demo hộp dùng content-box">  

`Border-box`
<img src="/PBT_03/screenshots/demo_border_box.png" alt="Ảnh demo hộp dùng border-box">  

Hộp 1 (content-box): chiều rộng thực tế = 350px (đo từ DevTools)  
Hộp 2 (border-box): chiều rộng thực tế = 300px (đo từ DevTools)  
Giải thích sự khác biệt: Với border-box, padding và border co vào trong. Với content-box, padding và border phình ra ngoài.  

Phần 2:  

`Content-box`  
<img src="/PBT_03/screenshots/B2P2_demo_content_box.png" alt="Ảnh demo hộp dùng content-box">  
<img src="/PBT_03/screenshots/B2P2_demo_content_box1.png" alt="Ảnh demo hộp dùng content-box">  
<img src="/PBT_03/screenshots/B2P2_demo_content_box2.png" alt="Ảnh demo hộp dùng content-box">  
<img src="/PBT_03/screenshots/B2P2_demo_content_box3.png" alt="Ảnh demo hộp dùng content-box">  

`Border-box`
<img src="/PBT_03/screenshots/B2P2_demo_border_box.png" alt="Ảnh demo hộp dùng border-box">   
<img src="/PBT_03/screenshots/B2P2_demo_border_box1.png" alt="Ảnh demo hộp dùng border-box">   
<img src="/PBT_03/screenshots/B2P2_demo_border_box2.png" alt="Ảnh demo hộp dùng border-box">   
<img src="/PBT_03/screenshots/B2P2_demo_border_box3.png" alt="Ảnh demo hộp dùng border-box">   

Nếu KHÔNG dùng border-box, thì chiều rộng thực tế của container:  250+15x2+500+20x2+250+15x2 = 1100px > 1000px  

Câu B3 - Specificity Battle (tuan_2_css_core
/10_inheritance_cascading.md + mục 3)  
1. 
```css
p{
    color: blue;
}
```  
-> Specificity: 0,0,1  
2. 
```css
div>p{
    color: chocolate;
}
```
-> Specificity: 0,0,2  
3. 
```css
.text{
    color: gold;
}
```
-> Specificity: 0,1,0  
4. 
```css
h2+p{
    color:black;
}
```
-> Specificity: 0,0,2  
5. 
```css
.content .highlight{
    color:cadetblue;
}
```
-> Specificity: 0,2,0   
6. 
```css
h2~p{
    color:aqua;
}
```
-> Specificity: 0,0,2   
7. 
```css
.container div #demo{
    color:fuchsia;
}
```
-> Specificity: 1,1,1   
8. 
```css
#container p{
    color: darkmagenta;
}
```
-> Specificity: 1,0,1  
9. 
```css
#content p{
    color: darkcyan;
}
```
-> Specificity: 1,0,1  
10. 
```css
#demo{
    color: brown;
}
```
-> Specificity: 1,0,0  

=> Element cuối cùng hiển thị màu fuchsia vì specificity của rule là lớn nhất.  

Kết quả:  
<img src="/PBT_03/screenshots/anh_kq.png" alt="Ảnh kết quả">  

- Thay đổi thứ tự rule trong CSS file thì kết quả không đổi vì specificity 111 là lớn nhất và không có cái nào cùng mức viết sau nó.  

Phần C:
Câu C1 - Debug CSS Layout (tuan_2_css_core
/11_box_model.md + mục 3)  
1.  (content-box!)  
Chiều rộng thực tế của sidebar: 300+20x2+1x2 = 342px  
Chiều rộng thực tế của content: 660+30x2+1x2 = 722px  
2. Layout bị vỡ do kích thước container khi tính toán < kích thước container thực tế.  
3. Có 2 cách sửa khác nhau:  
Cách 1: Dùng border-box
```css
*{
    box-sizing: border-box;
}
.container {
    width: 960px;
    margin: 0 auto;
}
.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}
```  

Cách 2: Không dùng border-box
```css
.container {
    width: 960px;
    margin: 0 auto;
}
.sidebar {
    width: 258px;
    padding: 20px;
    border: 1px solid #ccc;
    float: left;
}
.content {
    width: 598px;
    padding: 30px;
    border: 1px solid #ccc;
    float: left;
}
```  
4.  
Cách 1: Dùng border-box  
<img src="/PBT_03/screenshots/debug_layout_c1.1.png" alt="Ảnh minh chứng cách 1">
<img src="/PBT_03/screenshots/debug_layout_c1.2.png" alt="Ảnh minh chứng cách 1">
<img src="/PBT_03/screenshots/debug_layout_c1.3.png" alt="Ảnh minh chứng cách 1">
<img src="/PBT_03/screenshots/debug_layout_c1.4.png" alt="Ảnh minh chứng cách 1">  

Cách 2: Không dùng border-box  
<img src="/PBT_03/screenshots/debug_layout_c2.1.png" alt="Ảnh minh chứng cách 2">
<img src="/PBT_03/screenshots/debug_layout_c2.2.png" alt="Ảnh minh chứng cách 2">
<img src="/PBT_03/screenshots/debug_layout_c2.3.png" alt="Ảnh minh chứng cách 2">  

Câu C2 - Cascade Puzzle (tuan_2_css_core
/10_inheritance_cascading.md + mục 3)  
1. "Sản phẩm A" (h2) có font-size = 20px và color = green  
`body { font-size: 16px; color: #333; }` -> font-size = 16px và color = #333  
`.container { font-size: 14px; }` -> font-size = 14px và color = #333  
`.card { color: blue; }` -> font-size = 14px và color = blue  
`.card .title { font-size: 20px; }` -> font-size = 20px và color = blue  
`#featured .title { color: red; }` -> font-size = 20px và color = red  
`.highlight { color: green !important; }` -> font-size = 20px và color = green    
2. "Mô tả sản phẩm" (p trong card featured) có color = blue  
`body { font-size: 16px; color: #333; }` -> color = #333    
`.container { font-size: 14px; }` -> color = #333  
`.card { color: blue; }` -> color = blue  
`.card p { color: inherit; }` -> color = blue  
3. "Sản phẩm B" (h2) có font-size = 20px và color = blue  
`body { font-size: 16px; color: #333; }` -> font-size = 16px và color = #333  
`.container { font-size: 14px; }` -> font-size = 14px và color = #333  
`.card { color: blue; }` -> font-size = 14px và color = blue  
`.card .title { font-size: 20px; }` -> font-size = 20px và color = blue   
4. "Mô tả sản phẩm B" (p.highlight) có color = green  
`body { font-size: 16px; color: #333; }` -> color = #333  
`.container { font-size: 14px; }` -> color = #333  
`.card { color: blue; }` -> color = blue  
`.card p { color: inherit; }` -> color = blue  
`.highlight { color: green !important; }` -> color = green  

<img src="/PBT_03/screenshots/kiem_chung_C2.png" alt="Ảnh kiểm chứng câu C2">
