const formElement = document.querySelector("#form");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirmPassword");

const accouts = [];

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = emailElement.value.trim();
  if (!emailValue) {
    alert("Email không được để trống");
    return;
  }
  // Kiểm tra sự tồn tại email
  const checkEmail = accouts.find((accout) => accout.email === emailValue);
  if (checkEmail) {
    alert("Email đã tồn tại!");
    return;
  }

  const passwordValue = passwordElement.value;
  if (!passwordValue) {
    alert("Mật khẩu không được để trống");
    return;
  }

  const confirmPasswordValue = confirmPasswordElement.value;
  if (!confirmPasswordValue) {
    alert("Xác nhận mật khẩu không được để trống");
    return;
  } else if (passwordValue !== confirmPasswordValue) {
    alert("Mật khẩu không trùng khớp!");
    return;
  }

  const newAccount = {
    id: Math.ceil(Math.random() * 1000000),
    email: emailValue,
    password: passwordValue,
  };

  accouts.push(newAccount);
  localStorage.setItem("account", JSON.stringify(accouts));
});

// localStorage.clear();
