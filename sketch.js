

function setup() {
  
  createCanvas(400, 400);
  
  checkBox = createCheckbox();
  checkBox.position(50,50);
  
  slider=createSlider(0, 400);
  slider.position(100, 50);
  slider.size(200);
  
  
  let r;
  let g;
  let b;
  let button = createButton("RGB Control")
  button.position(width/2,height*7/8);
  button.mousePressed(()=> {
                      r = random(255);
                      g = random(255);
                      b = random(255);
                      background(r,g,b);
                      button.position(width*random(100)/100, height*random(100)/100)
                      });
  
  
}



function draw() {
    let x = random(400);
    let y = random(400);
  
    let colourR = random(255);
    let colourG = random(255);
    let colourB = random(255);
  
    if (checkBox.checked()){
      fill(colourR);
  
    }
    else {
      fill (colourR,colourG,colourB);
    }
    noStroke();
    let rectangleSize = slider.value();
  
    rect (x,y, rectangleSize,rectangleSize);
}


