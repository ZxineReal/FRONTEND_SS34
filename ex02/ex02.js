const contentElement = document.querySelector("#content-text");
const dateElement = document.querySelector("#content-date");
const statusElement = document.querySelector("#content-status");
const usernameElement = document.querySelector("#username");
const btnSubmitElement = document.querySelector("#btn-submit");
const tbodyElement = document.querySelector("#tbody");

let accountLocal = JSON.parse(localStorage.getItem("contents")) || [];

const contents = [];
let id = 1;
function renderData() {
  accountLocal = JSON.parse(localStorage.getItem("contents")) || [];

  const contentHtmls = accountLocal.map((account, index) => {
    return `
        <tr>
              <td id="id">${account.id}</td>
              <td id="content">${account.content}</td>
              <td id="date">${account.dueDate}</td>
              <td id="status">${account.status}</td>
              <td id="user">${account.username}</td>
              <td id="action">
                <button id="edit-btn" onclick = "handleEdit(${index})">Sửa</button
                ><button onclick = "handleDelete(${index})" id="del-btn">Xóa</button>
              </td>
            </tr>
        `;
  });
  const convertArrayToString = contentHtmls.join("");
  tbodyElement.innerHTML = convertArrayToString;
}
// Lưu dữ liệu vào localStorage
btnSubmitElement.addEventListener("click", function (event) {
  event.preventDefault();

  const contentValue = contentElement.value;
  if (!contentValue) {
    alert("Content không được để trống!");
    return;
  }
  // Kiểm tra content trùng lặp

  const checkContent = contents.find((item) => item.content === contentValue);
  if (checkContent) {
    alert("Content đã tồn tại");
    return;
  }

  const dateValue = dateElement.value;
  if (!dateValue) {
    alert("Ngày tháng không được để trống!");
    return;
  }

  const statusValue = statusElement.value;
  if (!statusValue) {
    alert("Trạng thái không được để trống!");
    return;
  }

  const usernameValue = usernameElement.value;
  if (!usernameValue) {
    alert("Username không được để trống!");
    return;
  }

  const newContent = {
    id: id,
    content: contentValue,
    dueDate: dateValue,
    status: statusValue,
    username: usernameValue,
  };
  id++;
  contents.push(newContent);
  localStorage.setItem("contents", JSON.stringify(contents));
  renderData();
});
// localStorage.clear();

// Lấy dữ liệu từ localStorage

// Xóa
function handleDelete(index) {
  accountLocal.splice(index, 1);
  contents.splice(index,1);
  localStorage.setItem("contents", JSON.stringify(accountLocal));
  renderData();
}
renderData();
