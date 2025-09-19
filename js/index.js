window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("close-popup");
  const form = document.getElementById("subscribe-form");

  const hasSeenPopup = localStorage.getItem("popupClosed");

  if (!hasSeenPopup) {
    setTimeout(() => {
      popup.style.display = "block";
      overlay.style.display = "block";
    }, 2000);
  }

  function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
    localStorage.setItem("popupClosed", "true"); // mark as closed
  }

  closeBtn.addEventListener("click", closePopup);

  overlay.addEventListener("click", closePopup);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for subscribing! 🚀");
    closePopup();
  });
});
