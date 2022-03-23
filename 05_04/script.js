/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */


let listItems = document.querySelector(".backpack__features");

let pageHeader = document.querySelector(".page-header__heading");

let backpackName = document.querySelectorAll(".backpack__name")

//listItems.style.setProperty("list-style-type", "none")

pageHeader.style.color = "#F2B705";

backpackName.forEach(element => {
      element.style.backgroundColor = "blue"    
});