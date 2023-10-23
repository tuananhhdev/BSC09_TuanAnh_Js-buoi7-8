// Tổng số dương
const num = [];
var btnThemSo = (document.getElementById("btnThemSo").onclick = function () {
  var tongSoDuong = document.getElementById("tongSoDuong").value * 1;
  num.push(tongSoDuong);
  document.querySelector(".themSo").innerHTML = num;
});

var btnTinhTongSoDuong = document
  .getElementById("btnTinhSoDuong")
  .addEventListener("click", function () {
    let sum = 0;
    for (let i = 0; i <= num.length; i++) {
      if (num[i] > 0) {
        sum += num[i];
      }
    }
    document.querySelector(".ketQua1").innerHTML = sum;
  });

// Đếm số dương

const arrSoDuong = [];
var btnThemSoDuong = (document.getElementById("btnThemSoDuong").onclick =
  function () {
    var demSoDuong = document.getElementById("demSoDuong").value * 1;
    arrSoDuong.push(demSoDuong);
    document.querySelector(".themSoDuong").innerHTML = arrSoDuong;
  });

var btnDemSoDuong = (document.getElementById("btnDemSoDuong").onclick =
  function () {
    let pos_count = 0;

    for (let i = 0; i < arrSoDuong.length; i++) {
      if (arrSoDuong[i] > 0) {
        pos_count++;
      }
    }
    document.querySelector(".ketQua2").innerHTML = pos_count;
  });

//   Tìm số nhỏ nhất
const arrSoNhoNhat = [];
var btnThemSoNhoNhat = document
  .getElementById("btnThemSoNhoNhat")
  .addEventListener("click", function () {
    var timSoNhoNhat = document.getElementById("soNhoNhat").value * 1;
    arrSoNhoNhat.push(timSoNhoNhat);
    document.querySelector(".themSoNhoNhat").innerHTML = arrSoNhoNhat;
  });

var btnTimSoNhoNhat = document
  .getElementById("btnSoNhoNhat")
  .addEventListener("click", function () {
    var min = Math.min.apply(Math, arrSoNhoNhat);
    document.querySelector(".ketQua3").innerHTML = min;
  });

// Tìm số dương nhỏ nhất
const arrSoDuongNhoNhat = [];

var btnThemSoDuongNhoNhat = document
  .getElementById("btnThemSoDuongNhoNhat")
  .addEventListener("click", function () {
    var soDuongNhoNhat = document.getElementById("soDuongNhoNhat").value * 1;
    arrSoDuongNhoNhat.push(soDuongNhoNhat);
    document.querySelector(".themSoDuongNhoNhat").innerHTML = arrSoDuongNhoNhat;
  });

var btnTimSoDuongNhoNhat = document
  .getElementById("btnTimSoDuongNhoNhat")
  .addEventListener("click", function () {
    for (let i = 0; i <= arrSoDuongNhoNhat.length; i++) {
      if (arrSoDuongNhoNhat[i] < 0) {
        arrSoDuongNhoNhat.splice(i, 1);
      }
    }
    arrSoDuongNhoNhat.sort(function (a, b) {
      return a - b;
    });
    document.querySelector(".ketQua4").innerHTML = arrSoDuongNhoNhat[0];
  });

//   Tìm số chẵn cuối cùng
const arrSoChanCuoiCung = [];
var btnThemSoChanCuoiCung = document
  .getElementById("btnThemSoChanCuoiCung")
  .addEventListener("click", function () {
    var soChanCuoiCung = document.getElementById("soChanCuoiCung").value * 1;
    arrSoChanCuoiCung.push(soChanCuoiCung);
    document.querySelector(".themSoChanCuoiCung").innerHTML = arrSoChanCuoiCung;
  });

var btnTimSoChanCuoiCung = document
  .getElementById("btnTimSoChanCuoiCung")
  .addEventListener("click", function () {
    const even = [];
    for (let i = 0; i < arrSoChanCuoiCung.length; i++) {
      if (arrSoChanCuoiCung[i] % 2 == 0) {
        even.push(arrSoChanCuoiCung[i]);
      }
    }
    if (even.length == 0) {
      document.querySelector(".ketQua5").innerHTML = -1;
    } else {
      document.querySelector(".ketQua5").innerHTML = even[even.length - 1];
    }
  });

// Đổi chỗ
const arrDoiCho = [];
var themSoDoiCho = document
  .getElementById("btnThemDoiCho")
  .addEventListener("click", function () {
    var doiCho = document.getElementById("doiCho").value * 1;
    arrDoiCho.push(doiCho);
    document.querySelector(".themSoDoiCho").innerHTML = arrDoiCho;
  });

var btnDoiCho = document
  .getElementById("btnDoiCho")
  .addEventListener("click", function () {
    var index1 = document.getElementById("themDoiSo1").value * 1;
    var index2 = document.getElementById("themDoiSo2").value * 1;

    for (let i = 0; i < 1; i++) {
      value_index1 = arrDoiCho[index1];
      arrDoiCho[index1] = arrDoiCho[index2];
      arrDoiCho[index2] = value_index1;
    }

    document.querySelector(".ketQua6").innerHTML = arrDoiCho;
  });

// Sắp xếp tăng dần
const arrTangDan = [];
var btnThemSoTangDan = document
  .getElementById("btnThemSoTangDan")
  .addEventListener("click", function () {
    var tangDan = document.getElementById("tangDan").value * 1;
    arrTangDan.push(tangDan);
    document.querySelector(".themSoTangDan").innerHTML = arrTangDan;
  });

var btnSapXepTangDan = document
  .getElementById("btnSapXepTangDan")
  .addEventListener("click", function () {
    arrTangDan.sort(function (a, b) {
      return a - b;
    });
    document.querySelector(".ketQua7").innerHTML = arrTangDan;
  });

// Tìm số nguyên tố đầu tiên
var arrNguyenTo = [];
var btnThemSoNguyenTo = document
  .getElementById("btnThemSoNguyenTo")
  .addEventListener("click", function () {
    var soNguyenTo = document.getElementById("soNguyenToDauTien").value * 1;
    arrNguyenTo.push(soNguyenTo);
    document.querySelector(".themSoNguyenTo").innerHTML = arrNguyenTo;
  });

function btnTimSoNguyenTo() {
  arrNguyenTo = arrNguyenTo.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  if (arrNguyenTo.length < 1) {
    document.querySelector(".ketQua8").innerHTML = -1;
  } else {
    document.querySelector(".ketQua8").innerHTML = arrNguyenTo[0];
  }
}
// var btnTimSoNguyenTo = document
//   .getElementById("btnTimSoNguyenTo")
//   .addEventListener("click", function () {
//     arrNguyenTo = arrNguyenTo.filter((btnTimSoNguyenTo[i]) => {
//       for (var i = 0; i <= Math.sqrt(btnTimSoNguyenTo[i]); i++) {
//         if (btnTimSoNguyenTo % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     });

//     if (arrNguyenTo.length < 1) {
//       document.querySelector(".ketQua8").innerHTML = -1;
//     } else {
//       document.querySelector(".ketQua8").innerHTML =
//         arrNguyenTo.filter(btnTimSoNguyenTo);
//     }
//   });
// Đếm số nguyên
const arrSoNguyen = [];
var btnThemSoNguyen = document
  .getElementById("btnThemSoNguyen")
  .addEventListener("click", function () {
    var soNguyen = document.getElementById("SoNguyen").value * 1;
    arrSoNguyen.push(soNguyen);
    document.querySelector(".themSoNguyen").innerHTML = arrSoNguyen;
  });

var btnDemSoNguyen = document
  .getElementById("btnDemSoNguyen")
  .addEventListener("click", function () {
    document.querySelector(".ketQua9").innerHTML = arrSoNguyen.length;
  });

// So sánh số lượng số âm và dương
const arrSoSanh = [];
var btnThemSoAmVaDuong = document
  .getElementById("btnThemSoAmVaDuong")
  .addEventListener("click", function () {
    var soSanhAmVaDuong = document.getElementById("soSanhAmVaDuong").value * 1;
    arrSoSanh.push(soSanhAmVaDuong);
    document.querySelector(".themSoAmVaDuong").innerHTML = arrSoSanh;
  });

var btnSoSanhAmVaDuong = document
  .getElementById("btnSoSanhAmVaDuong")
  .addEventListener("click", function () {
    var arrSoAm = [];
    var arrSoDuong = [];
    for (let i = 0; i < arrSoSanh.length; i++) {
      if (arrSoSanh[i] > 0) {
        arrSoDuong.push(arrSoSanh[i]);
      } else {
        arrSoAm.push(arrSoSanh[i]);
      }
    }
    if (arrSoDuong.length > arrSoAm.length) {
      document.querySelector(".ketQua10").innerHTML = "Số dương > số âm";
    } else if (arrSoAm.length > arrSoDuong.length) {
      document.querySelector(".ketQua10").innerHTML = "Số âm > số dương";
    } else {
      document.querySelector(".ketQua10").innerHTML = "Số âm = số dương";
    }
  });
