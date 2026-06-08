function playGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    const maxAttempts = 7;
    let attempts = 0;
    let guessedNumbers = [];

    alert("Chào mừng! Máy đã chọn ngẫu nhiên một số từ 1 đến 100. Bạn có tối đa 7 lượt đoán.");

    while (attempts < maxAttempts) {
        let input = prompt(`Lượt đoán thứ ${attempts + 1}/${maxAttempts}. Nhập số của bạn (1-100):`);

        let guess = parseInt(input, 10);

        // Validate đầu vào
        if (Number.isNaN(guess) || guess < 1 || guess > 100) {
            alert("Lỗi: Vui lòng chỉ nhập số nguyên hợp lệ trong khoảng từ 1 đến 100.");
            continue;
        }

        // Kiểm tra xem đã đoán số này trước đây chưa
        let isDuplicate = false;
        for (let i = 0; i < guessedNumbers.length; i++) {
            if (guessedNumbers[i] === guess) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate) {
            alert(`Bạn đã đoán số ${guess} này rồi! Hãy chọn số khác.`);
            continue;
        }

        guessedNumbers.push(guess);
        attempts++;

        // Logic check kết quả
        if (guess === targetNumber) {
            alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
            return;
        } else if (guess < targetNumber) {
            alert("Cao hơn!");
        } else {
            alert("Thấp hơn!");
        }
    }

    alert(`Hết lượt rồi! Bạn đã thua. Đáp án đúng của máy là: ${targetNumber}`);
}

playGame();