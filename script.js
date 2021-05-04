let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

// you can comment and uncomment to try the block 


// // drawing a filled rectangle
// context.fillRect(300, 300 , 200, 200);


// // for drawing a rectangle with strokes 
// context.fillStyle='red';
// context.rect(100, 200, 200, 200);
// context.fill();
// or  you can use;
// context.stroke();



// // for text writing 
//     context.fillStyle='blue';
//     context.fillText("Hello World", 300, 200);
//  // another way for writing text
//     context.strokeStyle='Green';
//     context.strokeText("Hi there", 300, 250);


// // for drawing paths
//     context.beginPath();
//     context.moveTo(50, 200);
//     context.lineTo(150, 200);
//     context.lineTo(100, 350);
//     context.fillStyle= 'red';
//     context.stroke()


// // putting a image into the canvas
//     let image = document.createElement("img");
//     image.src = "https://images.unsplash.com/photo-1562307534-a03738d2a81a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
//     context.drawImage(image, 300, 300, 200, 200);


// // for drawing circles
//     context.beginPath();
//     context.arc(300, 300, 100, 0, Math.PI *2);
//     context.stroke();


// // for drawing the circles in a random manner
    // thanks to faisal
    // function makeCircles() {
    // for (let index = 0; index < 200; index++) {
    //     context.beginPath()
    //     let radius = 30
    //     let min = 50 // 0 + radius
    //     let max = 550 // 600 - radius
    //     let x = Math.random()* (max - min) + min // (Math.random()* (max - min) + min) to generate num between min & max 
    //     let y = Math.random()* (max - min) + min
    //     context.arc(x, y, radius, 0, Math.PI *2)
    //     context.stroke() 
    //     }      
    // }     