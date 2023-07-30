const circles = 5;
const points = 3550;
let x, y;

function setup() {
  createCanvas(400, 400);
  x = (t, i, j) => {
    let noiseMin = j <= 1 ? 2 : j;
    let noiseScale = noiseMin / 50;
    let noiseVal = noise(t * noiseScale) * 100;
    let angle = map(j, 0, points, 0, TWO_PI);
    let r = map(i, 0, circles, 0, width / 3);
    return r * cos(angle) * cos(2*(j*i+t/3)) + cos(j*noiseVal*floor(cos(t)));
  }
  y = (t, i, j) => {
    let noiseMin = i <= 1 ? 2 : i;
    let noiseScale = noiseMin / 50;
    let r = map(i, 0, circles, 0, width / 3);
    let angle = map(j, 0, points, 0, TWO_PI);
    let noiseVal = noise(t * noiseScale) * 100;
    return r * sin(angle) + sin(t);
  }

}

function draw() {
  background(0);
  noFill();
  stroke(255);
  strokeWeight(0.3);
  translate(width / 2, height / 2);
  let t = frameCount / 100;

  for(let i = 1 ; i < circles ; i++) {
    for (let j = 0 ; j < points; j++) {
      let x1 = x(t, i, j)
      let y1 = y(t, i, j)
      point(x1, y1);
    }
  }
}
