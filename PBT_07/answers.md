Phần A: 
Câu A1  — var / let / const (tuan_4_javascript_basics/02_getting_started.md + mục 3)  



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