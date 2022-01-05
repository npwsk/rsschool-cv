let lastScrollpos = window.pageYOffset;
let menuButtonCheck = document.querySelector('.header__nav-btn');

window.addEventListener('scroll', function () {
  let currentScrollPos = window.pageYOffset;
  if (lastScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = '0';
  } else {
    document.getElementById('header').style.top = '-75px';
  }
  lastScrollpos = currentScrollPos;
  menuButtonCheck.checked = false;
});

window.addEventListener('load', function () {
  var movingDot = new MovingDot('.header__nav-list');
});

function MovingDot(nav) {
  var $navMovingDotBar = document.querySelector(nav),
    $btnMenu13 = $navMovingDotBar.querySelectorAll('a'),
    bar2 = document.createElement('span'),
    width2,
    left2;

  bar2.classList.add('dot');
  $navMovingDotBar.appendChild(bar2);

  for (var i = 0, max = $btnMenu13.length; i < max; i++) {
    $btnMenu13[i].addEventListener('mouseenter', function () {
      (width2 = this.offsetWidth), (left2 = this.offsetLeft);
      barMovingCurrentMenu2(width2, left2);
    });
  }

  function barMovingCurrentMenu2(width, left) {
    bar2.style.left = left + width / 2 + 'px';
    bar2.style.opacity = 1;
  }
}
