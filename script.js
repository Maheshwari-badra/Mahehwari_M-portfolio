const toggleBtn = document.getElementById('mode-toggle');
let isDark = true;

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  isDark = !isDark;
  toggleBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});
