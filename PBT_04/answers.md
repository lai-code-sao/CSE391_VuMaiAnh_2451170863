Phần A:  
Câu A1 - 5 Loại Positioning (tuan_2_css_core/12_css_positioning.md + mục 2, mục 3)   
Position|Vẫn chiếm chỗ trong flow?|Tham chiếu vị trí            |Cuộn theo trang?      |Use case                                    |
|---    |---                      |---                          |---                   |---                                         |
static  |Có                       |Mặc định        	            |Có	                   |Mặc định — không cần viết                   |
relative|Có                       |Dịch so với vị trí gốc	    |Có	                   |Làm anchor cho absolute con, dịch nhẹ       |
absolute|Không                    |Bám vào cha relative gần nhất|Có                    |Badge, dropdown, tooltip, overlay           |
fixed   |Không                    |Bám vào viewport	            |Không 	               |Chat button, cookie banner, header cố định  |
sticky  |Có                       |Bình thường	                |Có khi chưa đến ngưỡng|Sticky header, sticky table header, sidebar |   
- `absolute` tham chiếu body khi không có thẻ tổ tiên relative nào gần nó, tham chiếu parent khi cha nó relative. "Nearest positioned ancestor" là phần tử cha, ông hoặc tổ tiên gần nhất ngược lên trên cây DOM có thuộc tính position khác với giá trị mặc định (static).  

Câu A2 - Flexbox vs Grid (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
- Trường hợp 1:  
```css
.container { display: flex; }
.item { flex: 1; }
```  
4 items → Bố cục = 4 cột chia đều  
<img src="/PBT_04/images/A2_hinh1.jpg" alt="Sơ đồ bố cục 4 cột chia đều">

- Trường hợp 2:  
```css
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
```  
6 items → Bố cục = 3 hàng, 2 cột  
<img src="/PBT_04/images/A2_hinh2.jpg" alt="Sơ đồ bố cục 3 hàng, 2 cột">

- Trường hợp 3:  
```css
.container { display: flex; justify-content: space-between; align-items: center; }
```  
3 items → Bố cục = 3 cột, item 1 gắn sát về bên trái, item 2 nằm giữa trục ngang, item 3 gắn sát về bên phải, cả 3 item nằm giữa container theo trục dọc.  
<img src="/PBT_04/images/A2_hinh3.jpg" alt="Sơ đồ bố cục 3 cột, item 1 gắn sát về bên trái, item 2 nằm giữa trục ngang, item 3 gắn sát về bên phải, cả 3 item nằm giữa container theo trục dọc">

- Trường hợp 4:  
```css
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
```  
3 items → Bố cục = 3 cột, item 1 và item 3 có độ rộng cố định và bằng nhau, độ rộng còn lại là của item 2 sau khi đã trừ khoảng cách giữa các item.  
<img src="/PBT_04/images/A2_hinh4.jpg" alt="Sơ đồ bố cục 3 cột, item 1 và item 3 có độ rộng cố định và bằng nhau, độ rộng còn lại là của item 2 sau khi đã trừ khoảng cách giữa các item">

- Trường hợp 5:  
```css
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
```  
7 items → Bố cục = 1 hàng item cuối gắn sát về bên phải container.  
<img src="/PBT_04/images/A2_hinh5.jpg" alt="Sơ đồ bố cục 1 hàng item cuối gắn sát về bên phải">

Phần B:
Câu B1 - Positioning Playground (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
- Trạng thái header khi scroll  
<img src="/PBT_04/images/B1_hinh1.png" alt="Trạng thái header khi scroll">

- Trạng thái sidebar khi scroll  
<img src="/PBT_04/images/B1_hinh2.png" alt="Trạng thái sidebar khi scroll">

- Badge trên card  
<img src="/PBT_04/images/B1_hinh3.png" alt="Badge trên card">  

Phần C:
Câu C1 - Flexbox vs Grid: Khi nào dùng gì? (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
1. Navigation bar ngang (logo + menu + buttons)  
Dùng Flexbox vì Flexbox phù hợp cho layout 1 chiều.  
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)  
Dùng Grid vì thao tác lưới chia cột thuận tiện hơn.  
3. Layout blog: main content + sidebar  
Dùng Grid vì dễ chia độ rộng cột hơn.  
4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)   
Dùng Flexbox cho Footer vì chỉ có 1 hàng nên không cần dùng Grid, dùng Grid cho nội dung trong cột vì Flexbox phù hợp cho layout 1 chiều.  
5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)  
Dùng Flex vì Flexbox phù hợp cho layout 1 chiều.  

Câu C2 - Debug Flexbox (tuan_3_css_advanced/13_creating_responsive_layouts.md + mục 3)  
Lỗi 1:  
Nguyên nhân: Cards không đều chiều cao do `.card` thiếu thuộc tính height; nút "Mua" bị nhảy lên/xuống do `button` thiếu thuộc tính margin-top.  

```css
.card-container { display: flex; flex-wrap: wrap; }
.card {
    display: flex;
    flex-direction: column;
    width: 28%; margin: 1.5%; 
    border: 1px black solid;
    border-radius: 10px;
    height: 30rem;
    padding: 5px;
}
.card img {
    width: 100%; 
    height: 300px;
    object-fit: cover;
}
.card h3 { 
    font-size: 14px; }
.card btn {
    padding: 5px; 
    margin-top: auto;
    margin-bottom: 10px; 
}
```  

Trước khi sửa:  

<img src="/PBT_04/images/C2_L1.jpeg" alt="Ảnh lỗi 1">

Sau khi sửa:  

<img src="/PBT_04/images/C2_Loi1_DaSua.jpeg" alt="Ảnh lỗi 1 sau khi sửa">

Lỗi 2:   
Nguyên nhân: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên do `.hero` thiếu thuộc tính `align-items: center;` và `justify-content: center;`.   

```css
.hero{
    grid-area: hero-banner;
    height: 100vh;
    width: 100%;
    display: flex;
    border: 1px black solid;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
}
.hero-content{
    border: 1px black solid;
    border-radius: 10px;
    display: flex;
    text-align: center;
    color: blue;
    min-height: 200px;
    align-items: center;
    justify-content: center;
}
```  

Trước khi sửa:  

<img src="/PBT_04/images/C2_L2.jpeg" alt="Ảnh lỗi 1">

Sau khi sửa:  

<img src="/PBT_04/images/C2_L2_DS.jpeg" alt="Ảnh lỗi 1 sau khi sửa">  

Lỗi 3:  
Nguyên nhân: Sidebar bị co lại khi content quá dài do `.sidebar` thiếu thuộc tính `flex-shrink: 0;` để ngăn sidebar co lại.  

```css
.layout { display: flex; }
.sidebar {
    width: 250px;
    flex-shrink: 0;
}
.content {
    flex: 1; 
}
```

Trước khi sửa:  

<img src="/PBT_04/images/C2_L3.jpeg" alt="Ảnh lỗi 1">

Sau khi sửa:  

<img src="/PBT_04/images/C2_L3_DS.jpeg" alt="Ảnh lỗi 1 sau khi sửa">  


