let bubble1;
let bubble2;
var randFraction;
var randQuadrant;

// currently calibrated to ninths
var fraction = 9;
var arrayFraction = [];
var arrayQuadrantX = [];
var arrayQuadrantY = [];

var tinyBubbleArray = [];
var littleBubbleArray = [];
var mediumBubbleArray = [];

var amountOfBubbles = 5;
var memory;
var JPGmemory;

// ARDUINO VARIABLES //
var serial;       //variable to hold the serial port object
var sensor1;      //this variable will hold the value from "s1"
var sensor2;      //this variable will hold the value from "s2"
var sensor3;      //this variable will hold the value from "s3"
var serialPortName = "/dev/cu.usbmodem14311";



function setup() {
  createCanvas(windowWidth, windowHeight);

  //Setting up the serial port
  serial = new p5.SerialPort();     //create the serial port object
  serial.open(serialPortName); //open the serialport. determined
  serial.on('open',ardCon);         //open the socket connection and execute the ardCon callback
  serial.on('data',dataReceived);   //when data is received execute the dataReceived function

  // Division Lines //
  var arrayFraction = [width/fraction, ((width/fraction)*2), ((width/fraction)*3), ((width/fraction)*4), ((width/fraction)*5), ((width/fraction)*6), ((width/fraction)*7),  ((width/fraction)*8), /* ((width/fraction)*9) */];

  	for (var i = 0; i < amountOfBubbles * 4; i++) {
  		var randFraction = arrayFraction[Math.floor(Math.random() * arrayFraction.length)]
			littleBubbleArray.push(new littleBubble(randFraction, random(128, windowHeight - 128), random(0, 20)));
 	 }

    for (var i = 0; i < amountOfBubbles; i++) {
  		var randFraction = arrayFraction[Math.floor(Math.random() * arrayFraction.length)]
			mediumBubbleArray.push(new mediumBubble(randFraction, random(128, windowHeight - 128), random(20, 50)));
 	 }

    for (var i = 0; i < amountOfBubbles; i++) {
  		var randFraction = arrayFraction[Math.floor(Math.random() * arrayFraction.length)]
			tinyBubbleArray.push(new tinyBubble(randFraction, random(128, windowHeight - 128), random(1, 2)));
 	 }

  var arrayQuadrantX = [100, windowWidth - 100];
  var arrayQuadrantY = [100, windowHeight - 100];

	var randQuadrantX = arrayQuadrantX[Math.floor(Math.random() * arrayQuadrantX.length)]
  var randQuadrantY = arrayQuadrantY[Math.floor(Math.random() * arrayQuadrantY.length)]

  bubbleLarge = new largeBubble(randQuadrantX, randQuadrantY, 200);

  // var button = createButton("reset");
  // button.mousePressed(resetSketch);

  memory = 0;
  JPGmemory = 0;
}

// function resetSketch() {
//
// }

function draw() {
  background(255);

  if (sensor3 == 0 && memory == 0){
      window.open("/Users/josh/Documents/GitHub/CC-3/index.html");
      memory = 1;
  }

  if (sensor1 == 0 && JPGmemory == 0){

      genScreenshot()
     	// saveFrames("This & That Poster-", "jpg", 1, 1);
      frameRate(0);
      JPGmemory = 1;
    // }
  }

  if (sensor2 ==! 0){
    sensor2 = amountOfBubbles;
    console.log(sensor2);
  }

  push();
	stroke(230);
  fill(230);
	strokeWeight(1.5);
  ellipse(width/fraction, 128, 5, 5);
	line(width/fraction, 128, width/fraction, height - 128)
  ellipse((width/fraction)*2, 128, 5, 5);
  line((width/fraction)*2, 128, (width/fraction)*2, height - 128)
  ellipse((width/fraction)*3, 128, 5, 5);
  line((width/fraction)*3, 128, (width/fraction)*3, height - 128)
  ellipse((width/fraction)*4, 128, 5, 5);
  line((width/fraction)*4, 128, (width/fraction)*4, height - 128)
  ellipse((width/fraction)*5, 128, 5, 5);
  line((width/fraction)*5, 128, (width/fraction)*5, height - 128)
  ellipse((width/fraction)*6, 128, 5, 5);
  line((width/fraction)*6, 128, (width/fraction)*6, height - 128)
  ellipse((width/fraction)*7, 128, 5, 5);
  line((width/fraction)*7, 128, (width/fraction)*7, height - 128)
  ellipse((width/fraction)*8, 128, 5, 5);
  line((width/fraction)*8, 128, (width/fraction)*8, height - 128)
  /*
  ellipse((width/fraction)*9, 128, 5, 5);
  line((width/fraction)*9, 128, (width/fraction)*9, height - 128)
  */
	pop();

  for (var i = 0; i < amountOfBubbles * 4; i++) {
	littleBubbleArray[i].show();
  littleBubbleArray[i].grow();
  }

 	for (var i = 0; i < amountOfBubbles; i++) {
	mediumBubbleArray[i].show();
  mediumBubbleArray[i].grow();
  }

  for (var i = 0; i < amountOfBubbles; i++) {
	tinyBubbleArray[i].show();
  tinyBubbleArray[i].grow();
  }

  bubbleLarge.show();
  bubbleLarge.grow();
}

class tinyBubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;

    this.growing = true;

  	this.grow = function() {
    if (this.growing) {
    this.r += 0.002;
    }
  }
	}

	show () {
		stroke(255);
    stroke(0);
		strokeWeight(2);
		noFill();
		ellipse(this.x, this.y, this.r*2);
	}
}

class littleBubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;

    this.growing = true;

  	this.grow = function() {
    if (this.growing) {
    this.r += 0.0175;
    }
  }
	}

	show () {
		stroke(255);
    stroke(0);
		strokeWeight(2);
		noFill();
		ellipse(this.x, this.y, this.r*2);
	}
}

class mediumBubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;

    this.growing = true;

  	this.grow = function() {
    if (this.growing) {
    this.r += 0.17;
    }
  }
	}

	show () {
		stroke(255);
    stroke(0);
		strokeWeight(2);
		noFill();
		ellipse(this.x, this.y, this.r*2);
	}
}

class largeBubble {
  	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;

    this.growing = true;

  	this.grow = function() {
    if (this.growing) {
    this.r += 0.2;
    }
  }
	}

	show () {
		stroke(255);
    stroke(0);
		strokeWeight(2);
		noFill();
		ellipse(this.x, this.y, sensor2 * 2);
	}
}

function dataReceived()   //this function is called every time data is received
{

var rawData = serial.readStringUntil('\r\n'); //read the incoming string until it sees a newline
    console.log(rawData);                   //uncomment this line to see the incoming string in the console
    if(rawData.length>1)                      //check that there is something in the string
    {

      sensor1 = JSON.parse(rawData).s1;       //the parameter value .s1 must match the parameter name created within the arduino file
      sensor2 = JSON.parse(rawData).s2;
      sensor3 = JSON.parse(rawData).s3;
    }
}

function ardCon()
{
  console.log("connected to the arduino!! Listen UP");
}




function genScreenshot() {
    html2canvas(document.body, {
      onrendered: function(canvas) {

        $('#test').attr('href', canvas.toDataURL("image/jpg"));
        $('#test').attr('download','This + That - Poster.jpg');
        $('#test')[0].click();
      }


    });
    }
