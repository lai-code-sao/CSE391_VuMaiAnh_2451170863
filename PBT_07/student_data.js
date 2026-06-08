const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// 1 & 2. Tính ĐTB và Xếp loại bằng vòng lặp thuần
for (let i = 0; i < students.length; i++) {
    let sv = students[i];
    let dtb = (sv.math * 0.4) + (sv.physics * 0.3) + (sv.cs * 0.3);
    sv.avg = Math.round(dtb * 10) / 10; // Làm tròn 1 chữ số thập phân

    if (sv.avg >= 8.0) sv.rank = "Giỏi";
    else if (sv.avg >= 6.5) sv.rank = "Khá";
    else if (sv.avg >= 5.0) sv.rank = "Trung bình";
    else sv.rank = "Yếu";
}

// 3. In bảng kết quả
console.log("| STT | Tên     | TB   | Xếp loại    |");
console.log("|-----|---------|------|-------------|");
for (let i = 0; i < students.length; i++) {
    let sv = students[i];
    let namePad = sv.name.padEnd(7, ' ');
    let avgPad = sv.avg.toFixed(1).padEnd(4, ' ');
    let rankPad = sv.rank.padEnd(11, ' ');
    console.log(`| ${(i + 1).toString().padEnd(3, ' ')} | ${namePad} | ${avgPad} | ${rankPad} |`);
}

