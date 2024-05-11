const navToggleBtn = document.getElementById('nav-toggle-btn');
const navList = document.getElementById('nav-list');
const navListItem = document.querySelectorAll('#nav-list > li > a');



navToggleBtn.addEventListener('click', () => {
  navList.classList.toggle('hidden');  
  navList.classList.toggle('block');  
});

navList.addEventListener('click', () => {
  navList.classList.toggle('hidden');  
  navList.classList.toggle('block');  
});

const navObj = {
    hero: 0,
    about: 1,
    skills: 2,
    projects: 3,
    contact: 4
};

const navObserver = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    navListItem[navObj[entry.target.id]].classList.toggle('md:after:bg-green-500', entry.isIntersecting);
    navListItem[navObj[entry.target.id]].classList.toggle('bg-green-500', entry.isIntersecting);
  })
}, {
  threshold: .5,
  rootMargin: '10px'

});

const intersectingItems = document.querySelectorAll('.intersecting-class');
intersectingItems.forEach(el => navObserver.observe(el))