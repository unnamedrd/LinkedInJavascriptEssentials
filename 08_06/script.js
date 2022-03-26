/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

 //function expressions, declarations, arrow

 //basic function declaration function () => do something in DOM 
 //call the function and check the results
 //function expression => variable assign to function 
 //create an arrow function 

function createContent() {
     
    let content = `
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    
    `;

    let contentDiv = document.createElement('div')
    let main = document.querySelector('main')
    contentDiv.innerHTML = content
    main.appendChild(contentDiv)
    console.log(content)
};

createContent();