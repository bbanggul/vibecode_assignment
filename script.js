function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

document.addEventListener('click', e => {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});
