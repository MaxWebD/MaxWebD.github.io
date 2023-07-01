

document.addEventListener("DOMContentLoaded", () => {

  
function gradientStart() {
  let gradient = document.querySelector('.mouse-cursor-gradient-tracking');
  if (gradient) {
    gradient.addEventListener('mousemove', e => {

      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      gradient.style.setProperty('--backgroundx', x / 45 + '%');
      gradient.style.setProperty('--backgroundy', y / 45 + '%');

    })
  };


};






  function init() {
    const navLinks = document.querySelectorAll('.nav-link');

    function handleClick(event) {

      navLinks.forEach(link => {
        link.parentNode.classList.remove('active');
      });

      event.target.parentNode.classList.add('active');

      if (document.querySelector('#landing')) {
        const about = document.querySelector('#about')
        const aboutmobile = document.querySelector('#aboutmobile')
        about.parentNode.classList.add('active')
        aboutmobile.parentNode.classList.add('active')

        enterbtn = document.getElementById('enter'); 

        enterbtn.addEventListener('click', e => {
          navLinks.forEach(link => {
            link.parentNode.classList.remove('active');
          });
          about.parentNode.classList.add('active')
          aboutmobile.parentNode.classList.add('active')
          
        } )
      }

    }

    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });


    if (document.querySelector('.gradient')) {
      gradientStart();
    }

    if (!document.querySelector('.gradient')) {

      var dropdownButton = document.getElementById('dropdown-toggle');
      var navbar = document.getElementById('dropdownnav');

      var toggle = false;

      dropdownButton.addEventListener('click', function () {

        dropdownButton.disabled = true;

        if (toggle == false) {
          navbar.style.paddingBottom = '250px';
          navbar.style.marginBottom = '250px';
          toggle = true;
        }

        else {
          navbar.style.marginBottom = '0px';
          navbar.style.paddingBottom = '0px';
          toggle = false;
        }


        dropdownButton.disabled = false;




      });
    }


    

  }

  const swup = new Swup({
    plugins: [new SwupSlideTheme({ exclude: ['.sidebar'] })],
    containers: ['#swup'],
  });


  swup.on('animationInDone', () => {
    console.log('New page loaded');
  
    var targetDiv = document.getElementById('sidebar');
  
    var maincheck = document.getElementById('landing');
  
    if (maincheck) {
  
      targetDiv.classList.remove('opacity-100');
      targetDiv.classList.add('opacity-0');
      targetDiv.classList.add('d-none');
    }
  
    else {
      targetDiv.classList.remove('opacity-0');
      targetDiv.classList.add('opacity-100');
    }
  
    init();
  
  });
  
  



});


