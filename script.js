const button = document.getElementById('fugirBtn');

button.addEventListener('mouseover', () => {
  const windowWidth = window.innerWidth - button.clientWidth;
  const windowHeight = window.innerHeight - button.clientHeight;

  const randomX = Math.floor(Math.random() * windowWidth);
  const randomY = Math.floor(Math.random() * windowHeight);

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});