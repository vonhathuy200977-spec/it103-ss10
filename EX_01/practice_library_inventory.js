const books = [
    {
        bookCode: "B01",
        title: "Lập trình JavaScript",
        category: "CNTT",
        price: 150000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "A1"
    },
    {
        bookCode: "B02",
        title: "Cơ sở dữ liệu",
        category: "CNTT",
        price: 120000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A2"
    }
];

// CREATE: Nhập sách mới
books.push({
    bookCode: "B03",
    title: "Lập trình Python",
    category: "CNTT",
    price: 180000,
    totalCopies: 6,
    availableCopies: 6,
    shelfLocation: "A3"
});

// UPDATE: Sinh viên mượn B01
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B01") {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;
        }
        if (books[i].availableCopies === 0) {
            books[i].status = "HẾT SÁCH TRÊN KỆ";
        }
    }
}

// DELETE: Thanh lý B02
let deleteIndex = -1;
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B02") {
        deleteIndex = i;
        break;
    }
}

if (deleteIndex !== -1) {
    books.splice(deleteIndex, 1);
}

// READ: Kiểm kê kho
let totalBooks = 0;
let totalValue = 0;

for (let i = 0; i < books.length; i++) {
    totalBooks += books[i].totalCopies;
    totalValue += books[i].totalCopies * books[i].price;
}

// In bảng
console.log("======================================");
console.log("║          KIỂM KÊ KHO THƯ VIỆN             ║");
console.log("======================================");
console.log("║ Mã     │ Tên sách             │ SL còn     ║");
console.log("======================================");

for (let i = 0; i < books.length; i++) {
    console.log(
        `║ ${books[i].bookCode.padEnd(6)} │ ${books[i].title.padEnd(20)} │ ${String(books[i].availableCopies).padEnd(10)} ║`
    );
}

console.log("==================================================");
console.log(`║ Tổng số sách: ${totalBooks} cuốn`);
console.log(`║ Tổng giá trị: ${totalValue.toLocaleString()} VNĐ`);
console.log("==================================================");