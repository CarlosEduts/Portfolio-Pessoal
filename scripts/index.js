const toggleButton = document.getElementById('theme-toggle');
const toggleSvg = document.querySelector(".theme-toggle-svg")
let svgRotate = 0

// Alterna o tema manualmente
toggleButton.addEventListener('click', () => {
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  document.documentElement.classList.toggle('light-mode', isDarkMode);
  svgRotate += 180
  console.log(svgRotate)
  toggleSvg.style.transform = `rotate(${svgRotate}deg)`
});
