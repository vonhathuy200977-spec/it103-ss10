const circulationLogs = [
    {
        logId: "L01",
        studentCode: "SV01",
        bookIsbn: "978001",
        status: "BORROWING",
        fineAmount: 0
    },
    {
        logId: "L02",
        studentCode: "SV02",
        bookIsbn: "978002",
        status: "BORROWING",
        fineAmount: 0
    }
];

// CREATE: Mượn sách mới
const studentCode = "SV03";

if (studentCode) {
    circulationLogs.push({
        logId: "L03",
        studentCode: studentCode,
        bookIsbn: "978003",
        status: "BORROWING",
        fineAmount: 0
    });
}

// UPDATE: Trả sách và tính phạt
for (let log of circulationLogs) {
    if (log.logId === "L01") {
        const lateDays = 3;

        log.status = "RETURNED";
        log.fineAmount = lateDays * 5000;
    }

    if (log.logId === "L02") {
        log.status = "LOST";
        log.fineAmount = 200000;
    }
}

// DELETE: Xóa nhật ký đã quyết toán quá 30 ngày
for (let i = circulationLogs.length - 1; i >= 0; i--) {
    if (
        circulationLogs[i].status === "RETURNED" &&
        circulationLogs[i].fineAmount >= 0
    ) {
        circulationLogs.splice(i, 1);
    }
}

// READ: Báo cáo
let borrowingCount = 0;
let totalFine = 0;

for (let log of circulationLogs) {
    if (log.status === "BORROWING") {
        borrowingCount++;
    }

    totalFine += log.fineAmount;
}

// In báo cáo
console.log("==========================================");
console.log("    BÁO CÁO LƯU CHUYỂN CUỐI NGÀY          ");
console.log("=========================================");

for (let log of circulationLogs) {
    console.log(
        `${log.logId} | ${log.studentCode} | ${log.bookIsbn} | ${log.status} | ${log.fineAmount.toLocaleString()} VNĐ`
    );
}

console.log("============================================");
console.log(`║ Đang mượn: ${borrowingCount} sách`);
console.log(`║ Tiền phạt: ${totalFine.toLocaleString()} VNĐ`);
console.log("============================================");