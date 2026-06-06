Phần A:  
Câu A2 — Data Types & Coercion (tuan_4_javascript_basics/02_getting_started.md + mục 3)  
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