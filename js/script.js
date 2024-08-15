let icons = document.querySelectorAll('.icons');
let phone = document.getElementById('phone');
let app = document.getElementById('app');
let appContent = app.getElementsByClassName('screen__app-content')[0];  // Get the first element with this class
let closeButton = document.getElementById('close');

let contentMap = {
  "1": '<iframe src="https://elhazin.vercel.app/" width="100%" height="100%" frameborder="0"></iframe>',
  "2": '<div id="content-container"><h1>I am<br> Anas Bouzanbil</h1><p>A software engineering student at 1337 Coding School.</p><p>I will do anything for fun or money.</p></div>',
  "4": '<iframe src="https://en.wikipedia.org/wiki/Rickrolling" width="100%" height="100%" frameborder="0"></iframe>',
  "6": '<h1 class="gmail">Feel Free to reach me anytime</h1><p>abouzanb@student.1337.ma</p><p>anassbouzanbil@gmail.com</p>',
};


Array.from(icons).forEach(icon => {
  icon.addEventListener("click", () => {
    const iconId = icon.dataset.iconId;
    const firstRect = icon.getBoundingClientRect();
    let firstRectLeft = firstRect.left - 10;
    let firstRectTop = firstRect.top - 8;
    let firstRectHeight = firstRect.height + 5;
    let firstRectWidth = firstRect.width + 5;
    phone.dataset.iconLeft = firstRectLeft;
    phone.dataset.iconTop = firstRectTop;
    phone.dataset.iconHeight = firstRectHeight;
    phone.dataset.iconWidth = firstRectWidth;

    requestAnimationFrame(() => {
      appContent.innerHTML = contentMap[iconId] || '<h1></h1>';
      const lastRect = phone.getBoundingClientRect();
      let delta = {};
      fetch('https://leetcode.com/contest/')
      .then(response => response.text())
      .then(data => {
        document.getElementById('content-container').innerHTML = data;
      });
      app.style.transition = "none";
      app.style.display = "flex";
      app.style.transform = `translate(${delta.x}px,  ${delta.y}px) scale(${delta.width}, ${delta.height})`;
      requestAnimationFrame(() => {
        app.style.transition = "transform .3s cubic-bezier(.5,0,.5,1)";
        app.style.transform = "none";
      });    
      phone.dataset.open = 'app';
    });
  });
});

closeButton.addEventListener('click', () => {
  const firstRect = phone.getBoundingClientRect();
  let delta = {};
  delta.x = phone.dataset.iconLeft - firstRect.left;
  delta.y = phone.dataset.iconTop - firstRect.top;
  delta.width = phone.dataset.iconWidth / firstRect.width;
  delta.height = phone.dataset.iconHeight / firstRect.height;

  requestAnimationFrame(() => {
    app.style.transition = "all .3s cubic-bezier(.5,0,.5,1)";
    app.style.transform = `translate(${delta.x}px,  ${delta.y}px) scale(${delta.width}, ${delta.height})`;

    phone.dataset.open = 'home';
    setTimeout(() => {
      app.style.display = 'none';
    }, 200);
  });
});







function showTime() {
    const clockElement = document.querySelector('.status-bar__clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    clockElement.textContent = timeString; 
    setTimeout(showTime, 1000);
}
window.onload = showTime;


showTime();








document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
});

document.addEventListener('cut', function(e) {
  e.preventDefault();
});

document.addEventListener('paste', function(e) {
  e.preventDefault();
});