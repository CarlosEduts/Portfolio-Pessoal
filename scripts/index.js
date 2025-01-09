const toggleButton = document.getElementById("theme-toggle");
const toggleSvg = document.querySelector(".theme-toggle-svg");
let svgRotate = 0;

// Verificar preferencia de cor do usuário guardada no localStorage
let localIsLightMode = window.localStorage.getItem("dark-mode");
if (localIsLightMode === "true") {
  localIsLightMode = true;
} else {
  localIsLightMode = false;
}
document.documentElement.classList.toggle("dark-mode", !localIsLightMode);
document.documentElement.classList.toggle("light-mode", localIsLightMode);

// Alterna o tema manualmente
toggleButton.addEventListener("click", () => {
  const isLightMode = document.documentElement.classList.contains("dark-mode");
  document.documentElement.classList.toggle("dark-mode", !isLightMode);
  document.documentElement.classList.toggle("light-mode", isLightMode);

  window.localStorage.setItem("dark-mode", isLightMode);

  // Rotacionar botão (Animação)
  svgRotate += 180;
  toggleSvg.style.transform = `rotate(${svgRotate}deg)`;
});
