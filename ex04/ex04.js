const formElement = document.querySelector("#form");
const inputElement = document.querySelector("#input");
const btnAddElement = document.querySelector("#btn-add");
const jobTableElement = document.querySelector("table tbody");

let jobsLocal = JSON.parse(localStorage.getItem("jobs")) || [];

function renderData() {
  jobTableElement.innerHTML = ""; // Xóa nội dung cũ trước khi render

  jobsLocal.forEach((job, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${job.name} <button onclick="handleDelete(${index})">Xóa</button></td>
    `;
    jobTableElement.appendChild(row);
  });
}

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = inputElement.value.trim();
  if (!inputValue) {
    alert("Công việc không được để trống!");
    return;
  }

  const newJob = {
    id: Math.ceil(Math.random() * 100000),
    name: inputValue,
    status: false,
  };

  jobsLocal.push(newJob);
  localStorage.setItem("jobs", JSON.stringify(jobsLocal));

  inputElement.value = ""; // Xóa nội dung ô input sau khi thêm công việc
  renderData();
});

function handleDelete(index) {
  jobsLocal.splice(index, 1);
  localStorage.setItem("jobs", JSON.stringify(jobsLocal));
  renderData();
}

renderData();
