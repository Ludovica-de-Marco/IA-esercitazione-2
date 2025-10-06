let sunHeight;
let horizon = 200;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0, 46, 80);
  
  //mostrare un testo bianco che dice le coordinate del mouse sul foglio da disegno
  fill(255);//bianco
  text("mouseX: " + mouseX + "mouseY: " + mouseY, 20,20);
  strokeWeight(0)


  //creare contesto di disegno per evitare casini, ci si disegna dentro
  push();
  
  //sun follows y-coordinate of mouse
  sunHeight = mouseY;
  if (sunHeight < horizon) {
 background("lightblue"); // blue sky if above horizon
  } else {
  background(0, 46, 80); // night sky otherwise
  }
  fill(241, 233, 213);
  circle(200,sunHeight,150);
  
  pop();
  //finito contesto di disegno



  push();
  //montagna a destra
  fill (213, 148, 58);
  triangle( 181,600, 332,445, 302,600 );
  fill (152, 31, 66);
  triangle( 302,600, 332,445, 444,612 );

  //montagna centrale
  fill (213, 148, 58);
  triangle( 26,600, 196,310, 142,600 );
  fill (195, 41, 59);
  triangle( 142,600, 196,310, 371,600 );
  
  //montagna a sinistra
  fill (213, 148, 58);
  triangle( 0,523, 80,402, 0,629 );
  fill (113, 30, 52);
  triangle( 0,600, 80,402, 200,600 );

  //montagna piccola al centro
  fill (213, 148, 58);
  triangle( 135,600, 216,502, 184,600 );
  fill (157, 33, 69);
  triangle( 184,600, 216,502, 305,600 );

  pop();

}
