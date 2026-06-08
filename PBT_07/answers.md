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
Đoạn 5|Trong block: 2|Trong block: 2 |Đúng |
 |Ngoài block: 1|Ngoài block: 1|  |

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