let gallery = document.getElementById("gallery");
let currentIndex = 0;
let isPaused = false;

gallery.addEventListener("mouseover", () => {
  stopScroll();
});

gallery.addEventListener("mouseout", () => {
  if (!isPaused) {
    startScroll();
  }
});

function startScroll() {
  gallery.style.animationPlayState = "running";
}

function stopScroll() {
  gallery.style.animationPlayState = "paused";
}

function openModal(element) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImage").src = element.children[0].src;
  stopScroll();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  if (!isPaused) {
    startScroll();
  }
}
