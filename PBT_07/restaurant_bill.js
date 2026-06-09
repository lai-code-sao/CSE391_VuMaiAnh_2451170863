function inHoaDon(danhSachMon, options = {}) {
    let tongCong = 0;
    let ngayHienTai = options.ngay || new Date().getDay(); // 3 đại diện cho Wednesday

    // 1. Tính tổng hóa đơn ban đầu
    for (let i = 0; i < danhSachMon.length; i++) {
        tongCong += danhSachMon[i].gia * danhSachMon[i].soLuong;
    }
}

