
const roomList = [
    { roomId: "P101", roomType: "Standard", pricePerNight: 1000000, status: "VACANT" },
    { roomId: "P102", roomType: "Deluxe", pricePerNight: 1800000, status: "VACANT" },
    { roomId: "P103", roomType: "Standard", pricePerNight: 1000000, status: "MAINTENANCE" }
];

/**
 * @param {string} title
 */
function printRoomList(title) {
    console.log(`\n=== ${title.toUpperCase()} ===`);
    console.table(roomList);
}

printRoomList("Danh sách phòng ban đầu");


const newRoom = {
    roomId: "P104",
    roomType: "VIP Suite",
    pricePerNight: 3500000,
    status: "VACANT"
};

roomList.push(newRoom);
printRoomList("Sau khi thêm phòng mới (P104)");


const targetUpdateId = "P101";

let foundUpdateIndex = -1;
for (let i = 0; i < roomList.length; i++) {
    if (roomList[i].roomId === targetUpdateId) {
        foundUpdateIndex = i;
        break;
    }
}

if (foundUpdateIndex !== -1) {
    roomList[foundUpdateIndex].status = "OCCUPIED";
    console.log(`\n[Thông báo] Cập nhật thành công phòng ${targetUpdateId} sang trạng thái OCCUPIED.`);
} else {
    console.log(`\n[Lỗi] Không tìm thấy phòng ${targetUpdateId} để cập nhật.`);
}

printRoomList("Sau khi cập nhật trạng thái phòng P101");


const targetDeleteId = "P103";

let foundDeleteIndex = -1;
for (let i = 0; i < roomList.length; i++) {
    if (roomList[i].roomId === targetDeleteId) {
        foundDeleteIndex = i;
        break;
    }
}

if (foundDeleteIndex !== -1) {
    roomList.splice(foundDeleteIndex, 1);
    console.log(`\n[Thông báo] Đã xóa thành công phòng ${targetDeleteId} khỏi hệ thống.`);
} else {
    console.log(`\n[Lỗi] Không tìm thấy phòng ${targetDeleteId} để xóa.`);
}

printRoomList("Danh sách phòng cuối cùng sau khi xóa P103");