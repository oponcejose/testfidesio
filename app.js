// 1. Accordeon

const accordItems = document.querySelector('.accordeon');
const items     = accordItems.querySelectorAll('.accordeon-item');
const accordItemsTriggers = accordItems.querySelectorAll('.accordeon-trigger');


const firstChild = accordItems.firstElementChild;
firstChild.classList.add('is-open');

accordItemsTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}






