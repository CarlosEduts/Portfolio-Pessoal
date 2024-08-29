const userPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (userPrefersDark) {
  document.body.classList.remove("light-theme");
} else {
  document.body.classList.add("light-theme");
}
