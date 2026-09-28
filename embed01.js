const scrollStep = 10;
let scrollTimer = null;

function startAutoScroll() {
  if (scrollTimer) return;

  scrollTimer = setInterval(() => {
    window.scrollBy({
      top: scrollStep,
      left: 0,
      behavior: 'auto'
    });

    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, 30);
}

function stopAutoScroll() {
  if (scrollTimer) {
    clearInterval(scrollTimer);
    scrollTimer = null;
  }
}
startAutoScroll();
// function createToggleButton() {
//   const button = document.createElement('button');
//   button.textContent = 'Toggle Auto Scroll';
//   button.style.position = 'fixed';
//   button.style.top = '20px';
//   button.style.right = '20px';
//   button.style.zIndex = '9999';
//   button.style.padding = '10px 16px';
//   button.style.cursor = 'pointer';
//   button.addEventListener('click', () => {
//     if (scrollTimer) {
//       stopAutoScroll();
//     } else {
//       startAutoScroll();
//     }
//   });
//   document.body.appendChild(button);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   createToggleButton();
//   startAutoScroll();
// });
