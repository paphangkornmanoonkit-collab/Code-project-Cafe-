function updateStatus() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Convert current time to total minutes for easy comparison
  const currentMinutes = hour * 60 + minute;

  // Opening hours: 9:00 AM - 6:00 PM (18:00), every day
  const openTime = 9 * 60;   // 9:00 AM
  const closeTime = 18 * 60; // 6:00 PM

  const statusEl = document.getElementById("status");
  const clockEl = document.getElementById("clock");

  // Update open/closed status
  if (currentMinutes >= openTime && currentMinutes < closeTime) {
    statusEl.textContent = "Open Now";
    statusEl.style.color = "green";
  } else {
    statusEl.textContent = "Closed";
    statusEl.style.color = "red";
  }

  // Update clock (formatted as HH:MM:SS with leading zeros)
  const formattedTime =
    String(hour).padStart(2, "0") + ":" +
    String(minute).padStart(2, "0") + ":" +
    String(second).padStart(2, "0");

  clockEl.textContent = formattedTime;
}

// Run once immediately, then update every second
updateStatus();
setInterval(updateStatus, 1000);

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // stop the default instant jump

    const targetId = this.getAttribute('href'); // e.g. "#menu"
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});