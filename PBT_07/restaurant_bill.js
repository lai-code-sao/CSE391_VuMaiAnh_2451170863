function inHoaDon(danhSachMon, options = {}) {
    let tongCong = 0;
    let ngayHienTai = options.ngay || new Date().getDay(); // 3 đại diện cho Wednesday

    // 1. Tính tổng hóa đơn ban đầu
    for (let i = 0; i < danhSachMon.length; i++) {
        tongCong += danhSachMon[i].gia * danhSachMon[i].soLuong;
    }

    // 2. Xác định các mức giảm giá hóa đơn tổng
    let phanTramGiam = 0;
    if (tongCong > 1000000) phanTramGiam = 15;
    else if (tongCong > 500000) phanTramGiam = 10;

    // Khuyến mãi cộng dồn đặc biệt vào ngày thứ 3
    if (ngayHienTai === 3) {
        phanTramGiam += 5;
    }

    let tienGiamGia = (tongCong * phanTramGiam) / 100;
    let tongSauGiam = tongCong - tienGiamGia;

    // 3. Tính toán thuế VAT và tiền Tip
    let thueVAT = (tongSauGiam * 8) / 100;
    let phanTramTip = options.tip || 0;
    let tienTip = (tongSauGiam * phanTramTip) / 100;

    let thanhToan = tongSauGiam + thueVAT + tienTip;

    // 4. Render định dạng khung hộp chữ cho Console bảng biểu
    console.log("╔══════════════════════════════════════╗");
    console.log("║         HÓA ĐƠN NHÀ HÀNG             ║");
    console.log("╠══════════════════════════════════════╣");
    
    for (let i = 0; i < danhSachMon.length; i++) {
        let m = danhSachMon[i];
        let subTotal = m.gia * m.soLuong;
        let line = `║ ${i + 1}. ${m.ten.padEnd(10, ' ')} x${m.soLuong}   @${(m.gia/1000)}k  = ${(subTotal/1000)}k`;
        console.log(line.padEnd(39, ' ') + "║");
    }
    
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:              ${tongCong.toLocaleString()}đ`.padEnd(39, ' ') + "║");
    console.log(`║ Giảm giá (${phanTramGiam}%):           ${tienGiamGia.toLocaleString()}đ`.padEnd(39, ' ') + "║");
    console.log(`║ VAT (8%):                ${thueVAT.toLocaleString()}đ`.padEnd(39, ' ') + "║");
    console.log(`║ Tip (${phanTramTip}%):                ${tienTip.toLocaleString()}đ`.padEnd(39, ' ') + "║");
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:              ${thanhToan.toLocaleString()}đ`.padEnd(39, ' ') + "║");
    console.log("╚══════════════════════════════════════╝");
}

