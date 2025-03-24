const formElement = document.querySelector("#form");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = emailElement.value.trim();
  const passwordValue = passwordElement.value;

  if (!emailValue || !passwordValue) {
    alert("Email và mật khẩu không được để trống");
    return;
  }

  const storedAccounts = JSON.parse(localStorage.getItem("account")) || [];
  const user = storedAccounts.find(
    (account) =>
      account.email === emailValue && account.password === passwordValue
  );

  if (user) {
    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
  } else {
    alert("Email hoặc mật khẩu không đúng!");
  }
});
