
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element= element;
    
    // Get the custom data attribute on the Link
    this.data = document.querySelector(`.tabs-link[data-tab='${this.element.dataset.tab}']`);
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.element.dataset.tab}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem =new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tabItem.addEventListener('click', this.select.bind(this));
    
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tab-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
     Array.from(links).forEach(function(link){
       link.removeClass('tabs-link-selected')
     });
    
    // Add a class named "tabs-link-selected" to this link
    links.addClass('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    console.log("I was clicked") //select(items)
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
   this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
 
    item.removeClass('tabs-link-selected');
    
    // Add a class named "tabs-item-selected" to this element
    items.addClass('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tab-link');

links.forEach(function(link){
  return new link(link);
});