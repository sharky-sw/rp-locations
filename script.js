document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-item img");

  images.forEach((img) => {
    img.loading = "lazy";
    img.decoding = "async";
  });
});