Phần A: 
Câu A1  — var / let / const (tuan_4_javascript_basics/02_getting_started.md + mục 3)  
- Dự đoán:  
Đoạn 1: Báo lỗi vì biến x chưa khai báo  
Đoạn 2: Báo lỗi vì biến y chưa khai báo  
Đoạn 3: 15  
Đoạn 4: [1, 2, 3, 4]  
Đoạn 5:  
    Trong block: 2  
    Ngoài block: 1  

Đoạn code|Dự đoán của bạn|Kết quả thực tế|Đánh giá|
|---|---|---|---|
Đoạn 1|Báo lỗi vì chưa khai báo|undefined|Lệch (Do cơ chế Hoisting)|
Đoạn 2|Báo lỗi vì chưa khai báo|ReferenceError: Cannot access 'y' before initialization|Đúng kết quả nhưng chưa đúng lý do|
Đoạn 3|15|TypeError: Assignment to constant variable.|Lệch (Do cố tình gán lại giá trị cho const)|
Đoạn 4|"[1, 2, 3, 4]"|"[1, 2, 3, 4]"|Đúng |
Đoạn 5|Trong block: 2<br>Ngoài block: 1|Trong block: 2<br>Ngoài block: 1 |Đúng |

- Đoạn 1: JavaScript có một cơ chế tên là Hoisting (kéo ngược lên). Nó tự động lôi phần khai báo var x; lên đỉnh của file trước khi chạy, nhưng để lại phần gán = 5 ở phía dưới. Vì vậy, lúc console.log(x) chạy, biến x đã tồn tại rồi nhưng chưa có giá trị, dẫn đến kết quả là undefined chứ không báo lỗi.  
- Đoạn 2: Lý do báo lỗi không phải vì y chưa được khai báo (rõ ràng ở dòng dưới bạn có khai báo let y). Lỗi ở đây là do Temporal Dead Zone (Vùng chết tạm thời). let cũng được hoist, nhưng JS nghiêm khắc hơn: bạn hoàn toàn không được đụng vào biến let trước khi code chạy đến dòng khởi tạo nó.  
- Đoạn 3: Ngay khi JS đọc đến dòng z = 20, nó sẽ quăng ra một lỗi nghiêm trọng (TypeError) và dừng toàn bộ chương trình ngay lập tức. Dòng console.log(z) ở phía dưới sẽ không bao giờ được chạy đến. const (constant) là hằng số, một khi đã gán giá trị đầu tiên (15), bạn không được phép dùng dấu = để gán lại giá trị mới cho nó nữa.  

Câu A2 — Data Types & Coercion (tuan_4_javascript_basics/03_data_types_variables.md + mục 3)  
`console.log(typeof null);`       -> "object"  
`console.log(typeof undefined);`  -> "undefined"  
`console.log(typeof NaN);`        -> "number"  
`console.log("5" + 3);`           -> "53"  
`console.log("5" - 3);`           -> 2  
`console.log("5" * "3");`         -> 15  
`console.log(true + true);`       -> 2  
`console.log([] + []);`           -> ""  
`console.log([] + {});`           -> "[object Object]"  
`console.log({} + []);`           -> "[object Object]"  
- Kết quả chạy thực tế khớp với dự đoán  
- "5" + 3 và "5" - 3 cho kết quả khác nhau   
    + Vì "5" + 3 có chuỗi "5" nên JavaScript ép 3 → "3" => "5" + "3" kết quả là "53"  
    + Vì toán tử - không biết nối chuỗi nên JavaScript ép "5" → 5 => "5" - 3 kết quả là 2  

Câu A3 — So sánh == vs === (tuan_4_javascript_basics/02_getting_started.md + mục 3)  
```js
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true (quy tắc đặc biệt của JS)
console.log(null === undefined);      // false
console.log(NaN == NaN);              // false (NaN không bao giờ bằng chính nó)
console.log(0 == false);              // true (cả 2 ép về số 0)
console.log(0 === false);             // false
console.log("" == false);             // true (cả 2 ép về số 0)
```
- Quy tắc rút ra từ giờ trở đi, nên dùng `===` vì `==` sẽ âm thầm thực hiện ép kiểu (type coercion) trước khi so sánh, dẫn đến những kết quả rất khó đoán (như "" `==` false ra true). Việc dùng `===` buộc JavaScript phải kiểm tra cả Giá trị lẫn Kiểu dữ liệu, giúp code chặt chẽ, an toàn và dễ debug hơn rất nhiều.  

Câu A4 — Truthy & Falsy (tuan_4_javascript_basics/03_data_types_variables.md + mục 3)   
- 8 giá trị Falsy trong JavaScript:  
    + false  
    + 0  
    + -0  
    + 0n (BigInt 0)  
    + "", '', hoặc `` (Chuỗi rỗng)  
    + null  
    + undefined   
    + NaN  
```js
if ("0") console.log("A");           // Có in (Chuỗi khác rỗng là Truthy)
if ("") console.log("B");            // Không in (Chuỗi rỗng là Falsy)
if ([]) console.log("C");            // Có in (Mảng, kể cả rỗng, là một object -> Truthy)
if ({}) console.log("D");            // Có in (Object, kể cả rỗng -> Truthy)
if (null) console.log("E");          // Không in (Falsy)
if (0) console.log("F");             // Không in (Falsy)
if (-1) console.log("G");            // Có in (Số khác 0 là Truthy)
if (" ") console.log("H");           // Có in (Chuỗi có chứa khoảng trắng không phải chuỗi rỗng -> Truthy)
```
Câu A5 — Template Literals (tuan_4_javascript_basics/02_getting_started.md + mục 3)  
```js
// Cách 1:
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";
// Template literal 
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;
// Template literal 
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
// Template literal 
const html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```

Phần C:  
Câu C1 — Debug JavaScript (tuan_4_javascript_basics/02_getting_started.md + mục 3)  
- Lỗi 1: `if (giaSauGiam = 0)`   
    + Nguyên nhân: Dấu = duy nhất là toán tử gán, biểu thức này gán biến về 0 (Falsy) nên khối code bên dưới không bao giờ chạy.  
    + Cách sửa: Thay bằng toán tử so sánh nghiêm ngặt `if (giaSauGiam === 0)`.  
- Lỗi 2: `for (var i = 0; i < 5; i++) { setTimeout(...) }`  
    + Nguyên nhân: Khai báo bằng var khiến phạm vi của i là Toàn cục (Global scope). Vòng lặp kết thúc trước khi hàm setTimeout đầu tiên kịp thực thi, khi đó i đã tăng lên giá trị 5. Kết quả in ra 5 lần chuỗi "Item 5".  
    + Cách sửa: Đổi sang khai báo khối bằng từ khóa `let`: `for (let i = 0; i < 5; i++)`. `let` sẽ khởi tạo một phạm vi biến độc lập cho từng chu kỳ lặp.  
- Lỗi 3: `tinhGiaGiamGia("100000", 20)`  
    + Nguyên nhân: Chuỗi `"100000"` dù tự động chuyển đổi thành công trong tính toán nhân chia, nhưng dễ gây ra lỗi sai cấu trúc nếu mở rộng phép tính (như toán tử cộng chuỗi).  
    + Cách sửa: Nên chủ động chuyển đổi sang số thực bằng Number() hoặc parseInt() bên trong hoặc trước khi truyền vào hàm.  
- Lỗi 4: `return "Phần trăm giảm không hợp lệ"`  
    + Nguyên nhân: Khi `phanTramGiam` lỗi, hàm trả về String. Đoạn code nhận kết quả lại nối tiếp tính toán hiển thị: `gia2 + "đ"` tạo thành chuỗi `"Phần trăm giảm không hợp lệđ"`.  
    + Cách sửa: Kiểm tra giá trị hợp lệ của kết quả hoặc quăng ra một Exception lỗi tường minh.  
- Lỗi 5: Logic điều kiện đầu hàm `if (phanTramGiam < 0 || phanTramGiam > 100)`  
    + Nguyên nhân: Thiếu trường hợp bảo vệ dữ liệu khi giaBan < 0.  
    + Cách sửa: Cập nhật thành: `if (giaBan < 0 || phanTramGiam < 0 || phanTramGiam > 100)`.  
- Lỗi 6: Các dòng gán và trả về dữ liệu thiếu dấu `;`.  
    + Nguyên nhân: Mặc dù cơ chế Automatic Semicolon Insertion (ASI) của JS giúp chạy được, nhưng thiếu `;` trong một số kịch bản gộp dòng phức tạp sẽ gây lỗi cú pháp nghiêm trọng.  
    + Cách sửa: Điền dấu `;` ở cuối mỗi câu lệnh độc lập.  
Code sau khi sửa:  
```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    const soGiaBan = Number(giaBan);
    if (Number.isNaN(soGiaBan) || soGiaBan < 0 || phanTramGiam < 0 || phanTramGiam > 100) {
        return null; // Trả về null báo hiệu dữ liệu lỗi
    }
    
    let giamGia = (soGiaBan * phanTramGiam) / 100;
    let giaSauGiam = soGiaBan - giamGia;
    
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// Test sửa đổi
const gia = tinhGiaGiamGia("100000", 20);
if (gia !== null) console.log(`Giá sau giảm: ${gia}đ`);

const gia2 = tinhGiaGiamGia(50000, 110);
if (gia2 === null) console.log("Giá: Dữ liệu không hợp lệ");

// Fix lỗi var đồng bộ bằng cách thay thế thành let
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```
