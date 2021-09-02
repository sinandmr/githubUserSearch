const btn = document.querySelector('.mode');
btn.addEventListener('click', () => {
  if (document.getElementById('coloricon').alt == 'Dark mode') {
    document.body.classList.toggle('dark-theme');
    document.getElementById('coloricon').alt = 'Light mode';
    document.getElementById('color').innerHTML = 'Light';
    console.log(document.getElementById('color').innerHTML);

    document.getElementById('coloricon').src = 'assets/images/icon-sun.svg';
  } else if (document.getElementById('coloricon').alt == 'Light mode') {
    document.body.classList.toggle('dark-theme');
    document.getElementById('coloricon').alt = 'Dark mode';
    document.getElementById('color').innerHTML = 'Dark';
    console.log(document.getElementById('color').innerHTML);

    document.getElementById('coloricon').src = 'assets/images/icon-moon.svg';
  }
});
