let angle = 0;
let orbitAngle = 0;
let radius = 100;
let orbitRadius = 150;

let gifExport;

function setup() {
  createCanvas(400, 400, WEBGL);
  smooth();
}

function draw() {
  background(0);

  // Rotate the entire scene
  rotateY(angle);

  // Draw the blue sphere
  push();
  fill(0, 0, 255);
  noStroke();
  sphere(radius);
  pop();

  // Calculate the position of the red sphere
  let x = orbitRadius * cos(orbitAngle);
  let z = orbitRadius * sin(orbitAngle);

  // Calculate the blending factor based on the red sphere's position
  let blendFactor = map(z, -orbitRadius, orbitRadius, 0, 1);
  blendFactor = constrain(blendFactor, 0, 1);

  // Calculate the resulting color
  let r = int(lerp(255, 255, blendFactor));
  let g = int(lerp(0, 0, blendFactor));
  let b = int(lerp(0, 255, blendFactor));

  // Draw the red sphere with the blended color
  push();
  translate(x, 0, z);
  fill(r, g, b);
  noStroke();
  sphere(radius / 2);
  pop();

  // Update angles
  angle += 0.01;
  orbitAngle += 0.03;
}

