// document.addEventListener("DOMContentLoaded", function () {
//   var openThemQuanModalBtn = document.getElementById("openThemQuanModalBtn");
//   var openChinhSuaQuanModalBtn = document.getElementById(
//     "openChinhSuaQuanModalBtn"
//   );
//   var closeBtnThemQuan = document.getElementById("closeBtnThemQuan");
//   var closeBtnChinhSuaQuan = document.getElementById("closeBtnChinhSuaQuan");

//   var modalThemQuan = document.getElementById("themQuan");
//   var modalChinhSuaQuan = document.getElementById("chinhSuaQuan");

//   var formThemQuan = document.getElementById("addDistrictForm");
//   var formChinhSuaQuan = document.getElementById("adjustDistrictForm");
//   openThemQuanModalBtn.addEventListener("click", function () {
//     modalThemQuan.style.display = "block";
//   });
//   formThemQuan.addEventListener("submit", function (event) {
//     event.preventDefault();
//     modalThemQuan.style.display = "none";
//     console.log("Form submitted");
//   });
//   closeBtnThemQuan.addEventListener("click", function () {
//     modalThemQuan.style.display = "none";
//   });

//   openChinhSuaQuanModalBtn.addEventListener("click", function () {
//     modalChinhSuaQuan.style.display = "block";
//   });
//   formChinhSuaQuan.addEventListener("submit", function (event) {
//     event.preventDefault();
//     modalChinhSuaQuan.style.display = "none";
//     console.log("Adjust Form submitted");
//   });
//   closeBtnChinhSuaQuan.addEventListener("click", function () {
//     modalChinhSuaQuan.style.display = "none";
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var openModalBtn = document.getElementById("openModalBtn");
//   var modal = document.getElementById("themQuan");
//   var addDistrictForm = document.getElementById("addDistrictForm");
//   if (openModalBtn && modal && addDistrictForm) {
//     openModalBtn.addEventListener("click", function () {
//       modal.style.display = "block";
//     });
//     window.addEventListener("click", function (event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     });
//     addDistrictForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       modal.style.display = "none";
//       console.log("Form submitted");
//     });
//   }
// });

window.onload = function () {
  // Get the button by its ID
  var addButton = document.getElementById("openThemQuanModalBtn");
  var editButton = document.getElementById("openChinhSuaQuanModalBtn");

  // Trigger a click on the button
  if (addButton) {
    addButton.click();
  }
  if (editButton) {
    editButton.click();
  }
};

// document
//   .querySelector("#addDistrictForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     var districtName = document.getElementById("districtName").value;
//     try {
//       const response = await fetch("/api/sovhtt/danh-sach-quan", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ districtName: districtName }),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const newDistrict = await response.json();
//       //updateDistrictList(newDistrict);
//     } catch (error) {
//       console.error(error);
//       // Depending on how you want to handle errors, you might want to rethrow the error
//       // or return a default value like `null` or `{}`.
//       return null;
//     }
//   });

// function updateDistrictList(newDistrict) {
//   // Thêm quận mới vào danh sách quận hiện tại trên trang
//   const itemList = document.querySelector("tbody");
//   const listItem = document.createElement("tr");
//   listItem.innerHTML = `
//     <td>${districts.length + 1}</td>
//     <td>${newDistrict.name}</td>
//     <td>${newDistrict.wards}</td>
//     <td>25</td>
//     <td>
//       <a href="/api/sovhtt/danh-sach-phuong/${newDistrict._id}">Chi tiết
//         <i class="bi bi-info-circle"></i>
//       </a>
//     </td>
//     <td>
//       <a href="#" class="pe-auto">
//         <i class="bi bi-trash-fill float-end text-danger pe-auto"></i>
//       </a>
//     </td>
//     <td>
//       <a
//         href="#"
//         class="text-secondary float-end pe-auto"
//         data-toggle="modal"
//         data-target="#chinhSuaQuan"
//       >
//         <i class="bi bi-pencil-square"></i>
//       </a>
//     </td>`;

//   itemList.appendChild(listItem);
// }
