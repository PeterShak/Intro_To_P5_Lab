function setup() {
  createCanvas(600, 600);
}

function draw() {
  stroke (0)
  background(48, 194, 63);
  fill (3, 232, 252)
  square (17, 20, 60)
  square (37, 80, 20)
  rect (0, 100, 100, 120)
  rect (15, 220, 23, 80)
  rect (55, 220, 23, 80)
  quad (0, 120, 20, 100, 100, 200, 80, 220)
  quad (80, 100, 80, 220, 100, 220, 100, 100)
  fill (0)
  quad (95, 205, 88, 213, 131, 266, 137, 260)
  ellipse (150, 265, 40, 20)
  stroke (215)
  line (173, 260, 213, 260)
  line (173, 265, 213, 265)
  line (173, 270, 213, 270)
  stroke (0)
  fill (235)
  circle (225, 265, 18)
  fill (255)
  circle (300, 265, 70)
  fill (255, 0, 0)
  triangle (300, 125, 380, 165, 300, 265)
}