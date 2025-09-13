  // Define a function that takes a name and returns a greeting
  function greet(name) {
    return "Hello, " + name + "!";
  }

  // Call the function and store the result
  let greeting = greet("Student");

  // Output the result to the console
  console.log(greeting);

  // Display the greeting in the HTML element with id "index"
  document.getElementById("index").innerHTML = greeting;



// function alertMessage(message) {
//     alert(message);
// }

// // Example usage:
// alertMessage('This is a pop alert!');


// const alerta = () => {
//     return "alerta message";
// }

// // console.log(alerta)

// alerta();

///////___________________________________________////

//  const mybotao = document.getElementById('myButton');

//     myButton.addEventListener('click', function(){
//         myButton.textContent = 'clicked!';
//     })


// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', function() {
//     myButton.textContent = 'Clicked!';
// });

const myButton = document.getElementById('myButton');
myButton.addEventListener("click", doSomething)

function doSomething() {
    alert('Hello')
}

///////___________________________________________////


// const butto = document.getElementById("myButton");
// let count =0;
// button.addEventListener("click", function (){

// })










//   const myButton = document.getElementById('myButton');

//     myButton.addEventListener('click', function() {
//         // Change the button's text
//         myButton.textContent = 'Clicked!';

        // Change the button's background color
        // myButton.style.backgroundColor = 'green';

        // Disable the button after one click
        // myButton.disabled = true;
    // });

    // ()