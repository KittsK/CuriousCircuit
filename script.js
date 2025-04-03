const showMenu = (toggleId, navId) => {
  const toogle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toogle.addEventListener('click', () => {
    nav.classList.toggle('show-menu');

    toogle.classList.toggle('show-icon');
  });
}

showMenu('nav-toggle', 'nav-menu');

const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button')

  dropdownButton.addEventListener('click', () => {
  const showDropdown = document.querySelector('.show-dropdown')

    toogleItem(item)

    if (showDropdown && showDropdown !== item) {
      toogleItem(showDropdown)
    }
  })


})

const toogleItem = (item) => {
  const dropdownContainer = item.querySelector('.dropdown__container')
  if (item.classList.contains('show-dropdown')) {
    dropdownContainer.removeAttribute('style')
    item.classList.remove('show-dropdown')
  } else {
 dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
  item.classList.add('show-dropdown')
}
}

const mediaQuery = matchMedia('(min-width: 1118px)')
  dropdownContainer = document.querySelectorAll('.dropdown__container')

const removeStyle = () => {
  if (mediaQuery.matches) {
    dropdownContainer.forEach((e) => {
      e.removeAttribute('style')
    })

    dropdownItems.forEach((e) => {
      e.classList.remove('show-dropdown')
    })

  }
}
addEventListener('resize', removeStyle)




document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the .animate-on-scroll class
  const scrollElements = document.querySelectorAll('.animate-on-scroll');

  // Create intersection observer options
  const options = {
    root: null,       // use the viewport
    rootMargin: '0px',
    threshold: 0.2    // element must be 20% in view
  };

  // Intersection Observer callback
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // add the .visible class
        observer.unobserve(entry.target);      // Stop observing once visible
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(observerCallback, options);

  // Observe each .animate-on-scroll element
  scrollElements.forEach((el) => {
    observer.observe(el);
  });
});
