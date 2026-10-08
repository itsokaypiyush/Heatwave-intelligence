const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    showToast(`${button.dataset.tab} view selected`);
  });
});

document.querySelector(".advisory-btn").addEventListener("click", () => {
  showToast("Advisory NDMA-4A opened");
});

document.querySelector(".sms").addEventListener("click", () => {
  showToast("SMS distribution panel opened");
});
