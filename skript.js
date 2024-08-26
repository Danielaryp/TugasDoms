const button = document.getElementById("tombol");
const teks = document.getElementById("teks");
const body = document.getElementById("body");
    button.addEventListener("click",
 () => {
      button.textContent = "Clicked!";
      button.style.backgroundColor = "Blue";
      teks.style.color ="Blue";
});