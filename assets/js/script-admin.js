const body = document.querySelector("body"),
  nav = body.querySelector("nav"),
  modeToggle = body.querySelector(".dark-light"),
  searchToggle = body.querySelector(".searchToggle"),
  sidebarOpen = body.querySelector(".sidebarOpen"),
  siderbarClose = body.querySelector(".siderbarClose");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}
// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});
// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

// Bảng tài khoản
function filterByCriteria() {
  var roleSelect,
    statusSelect,
    roleFilter,
    statusFilter,
    table,
    tr,
    roleTd,
    statusTd,
    i,
    roleValue,
    statusValue;

  roleSelect = document.getElementById("roleFilter");
  statusSelect = document.getElementById("statusFilter");
  roleFilter = roleSelect.value;
  statusFilter = statusSelect.value;

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    roleTd = tr[i].getElementsByTagName("td")[3]; 
    statusTd = tr[i].getElementsByTagName("td")[4]; 

    if (roleTd && statusTd) {
      roleValue = roleTd.textContent || roleTd.innerText;
      statusValue = statusTd.textContent || statusTd.innerText;

      
      if (
        (roleFilter === "Tất cả" || roleValue === roleFilter) &&
        (statusFilter === "Tất cả" || statusValue === statusFilter)
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



// xuất excel
// Hàm xuất bảng ra Excel
function exportTableToExcel(tableID, filename = '') {
  var table = document.getElementById(tableID);
  var wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
  XLSX.writeFile(wb, filename + '.xlsx');
}

// Hàm xác nhận trước khi xuất
function confirmExport(tableID, filename) {
  if (confirm("Bạn muốn xuất tệp Excel?")) {
      exportTableToExcel(tableID, filename);
  }
}

// Bảng Dịch vụ
function filterTable2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];  // Lọc theo cột tên (cột 2)
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }       
  }
}
//Bảng Hóa ĐƠn
function filterTableHD() {
  const customerFilter = document.getElementById('customerFilter').value.toLowerCase();
  const productFilter = document.getElementById('productFilter').value.toLowerCase();
  const paymentMethodFilter = document.getElementById('paymentMethodFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  const dateFilter = document.getElementById('dateFilter').value;
  const promotionFilter = document.getElementById('promotionFilter').checked;
  const rows = document.querySelectorAll('#orderTable tbody tr');

  rows.forEach(row => {
      const customerName = row.cells[1].textContent.toLowerCase();
      const productName = row.cells[2].textContent.toLowerCase();
      const paymentMethod = row.cells[7].textContent;
      const status = row.cells[8].textContent;

      const matchesCustomer = customerName.includes(customerFilter);
      const matchesProduct = productName.includes(productFilter);
      const matchesPaymentMethod = !paymentMethodFilter || paymentMethod === paymentMethodFilter;
      const matchesStatus = !statusFilter || status === statusFilter;
      const matchesDate = !dateFilter || row.cells[9].textContent === dateFilter; // Kiểm tra ngày
      const matchesPromotion = !promotionFilter || (row.classList.contains('promo') && promotionFilter);

      if (matchesCustomer && matchesProduct && matchesPaymentMethod && matchesStatus && matchesDate && matchesPromotion) {
          row.style.display = ''; // Hiện hàng
      } else {
          row.style.display = 'none'; // Ẩn hàng
      }
  });
}
// ============Bảng sản phẩm==========
function filterByCriteriaSP() {
  var roleSelect,
    statusSelect,
    roleFilter,
    statusFilter,
    table,
    tr,
    roleTd,
    statusTd,
    i,
    roleValue,
    statusValue;

  roleSelect = document.getElementById("roleFilter");
  statusSelect = document.getElementById("statusFilter");
  roleFilter = roleSelect.value;
  statusFilter = statusSelect.value;

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    roleTd = tr[i].getElementsByTagName("td")[5]; 
    statusTd = tr[i].getElementsByTagName("td")[6]; 

    if (roleTd && statusTd) {
      roleValue = roleTd.textContent || roleTd.innerText;
      statusValue = statusTd.textContent || statusTd.innerText;

      
      if (
        (roleFilter === "Tất cả" || roleValue === roleFilter) &&
        (statusFilter === "Tất cả" || statusValue === statusFilter)
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}