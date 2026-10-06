const borrowRecords = [
    {
        recordId: "PM01",
        studentId: "SV101",
        bookTitle: "JavaScript",
        borrowDays: 10,
        isReturned: false
    },
    {
        recordId: "PM02",
        studentId: "SV102",
        bookTitle: "Database",
        borrowDays: 16,
        isReturned: false
    },
    {
        recordId: "PM03",
        studentId: "SV103",
        bookTitle: "Clean Architecture",
        borrowDays: 20,
        isReturned: false
    }
];

// CREATE: Thêm PM04
borrowRecords.push({
    recordId: "PM04",
    studentId: "SV104",
    bookTitle: "Clean Code",
    borrowDays: 18,
    isReturned: false
});

console.log("=== CREATE ===");
console.log(borrowRecords);

// READ: Tính phí phạt
console.log("=== READ - PHÍ PHẠT ===");

for (let i = 0; i < borrowRecords.length; i++) {
    let fine = 0;

    if (borrowRecords[i].borrowDays > 14) {
        fine = (borrowRecords[i].borrowDays - 14) * 5000;
    }

    console.log(
        borrowRecords[i].recordId,
        "|",
        borrowRecords[i].bookTitle,
        "| Phạt:",
        fine.toLocaleString(),
        "VNĐ"
    );
}

// UPDATE: PM01 trả sách
for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM01") {
        borrowRecords[i].isReturned = true;
    }
}

console.log("=== UPDATE ===");
console.log("PM01 đã trả sách");

// DELETE: Xóa PM03
let deleteIndex = -1;

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === "PM03") {
        deleteIndex = i;
        break;
    }
}

if (deleteIndex !== -1) {
    borrowRecords.splice(deleteIndex, 1);
}

console.log("=== DELETE ===");
console.log("Đã xóa PM03");

// BẢNG TỔNG KẾT
console.log("===========================================================");
console.log("║           BẢNG QUẢN LÝ PHIẾU MƯỢN                 ║");
console.log("===========================================================");
console.log("║ Mã     │ SV     │ Sách             │ Ngày │ Trả     ║");
console.log("===========================================================");

for (let i = 0; i < borrowRecords.length; i++) {
    console.log(
        `║ ${borrowRecords[i].recordId.padEnd(6)} │ ` +
        `${borrowRecords[i].studentId.padEnd(6)} │ ` +
        `${borrowRecords[i].bookTitle.padEnd(16)} │ ` +
        `${String(borrowRecords[i].borrowDays).padEnd(4)} │ ` +
        `${borrowRecords[i].isReturned ? "Đã trả" : "Chưa trả"}   ║`
    );
}

console.log("===================================================");