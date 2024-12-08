const usernameInput = document.querySelector('input[placeholder="Username"]');
const passwordInput = document.querySelector('input[placeholder="Password"]');
const submitButton = document.querySelector('.fotter');

// تعطيل الزر عند تحميل الصفحة
// submitButton.disabled = true;

function checkInputs() {
    if (usernameInput.value.trim() === "joo123" && passwordInput.value.trim() === "123") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

submitButton.addEventListener('click', function () {
    if (usernameInput.value.trim() === "joo123" && passwordInput.value.trim() === "123") {
        window.location.href = "home.html";
    } else {
        alert("invalid username or password");
    }
});
