// Version 1: Classic FizzBuzz
console.log("--- CLASSIC FIZZBUZZ 1-100 ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Version 2: Custom FizzBuzz linh hoạt dữ liệu
console.log("\n--- CUSTOM FIZZBUZZ ---");
function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        // Duyệt qua từng quy tắc được truyền vào cấu trúc luật định
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                output += rules[j].word;
            }
        }
        
        // Nếu không thỏa mãn bất kì chia hết nào, xuất chính số đó
        console.log(output === "" ? i : output);
    }
}

// Chạy test case đề bài yêu cầu
customFizzBuzz(35, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);