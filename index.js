const tabItems = document.querySelectorAll('.tab-item')//Tab item (click)
const tabContentItems = document.querySelectorAll('.tab-content-item')//content to display and hide

function selectItem(e) {
  removeBorder()
  removeShow();
  //Add border to current tab content
  this.classList.add('tab-border')
  //Grab content item DOM element
  console.log(this.id);
 
  //add show class
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}
// Remove show class from all content items
function removeShow(){
 tabContentItems.forEach(item => item.classList.remove('show'))
}
function removeBorder() {
tabItems.forEach(item => item.classList.remove('tab-border'))
}
//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))


