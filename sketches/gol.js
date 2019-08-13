var grid;
var timer;
var speed;
function setup() {
  createCanvas(400, 400);
  grid = new Grid(20);
  grid.randomize();
timer = 0;
speed= 5;
print("not knowing where to place the function");
print("coding is pushing my off the edge with these mind boggling and technical loops");
print("i would be happy tp add it, but also i would be very nsure becasue since i recieved help with it i feel like i didn't accomplish it by myself");
}

function draw() {
  background(250);
  grid.draw();
if(timer%speed===0){
  grid.updateNeighborcounts();
  grid.updatePopulation();
  }
  timer++
  if(timer==400){
    grid = new Grid(20);
   grid.randomize();
   timer=0;
   gen=0;
     
   }
}

class Grid {
  constructor(cellSize) {
    this.cellSize = cellSize;
    this.numberOfColumns = width / cellSize;
    this.numberOfRows = height / cellSize;


    var x = this.numberOfColumns; // how big the first array should be
    var y = this.numberOfRows; // how big each array inside of the first array should be
    var cells = new Array(x);
    for (var i = 0; i < cells.length; i++) {
      cells[i] = new Array(y);
    }
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        cells[column][row] = new Cell(column, row, this.cellSize);
      }
      this.cells = cells


    }

  }
  high(){
    fill(0)
     textSize(10);
     text("high",13,20)
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(10,10, 30,20);
     fill(0)
     textSize(10);
     text("low",13,50);
     noFill();
    stroke(0);
    strokeWeight(2);
    rect(10,40, 30,20);
    

   
    
  }
  
  isValidPosition(column, row) {
    if (column > width || row > height || column < 0 || row < 0)
      return false
    else
      return true

  }
  getNeighbors(currentCell) {
    var neighbors = [];
    for (var xOffset = -1; xOffset <= 1; xOffset++) {
      for (var yOffset = -1; yOffset <= 1; yOffset++) {
        var neighborColumn = currentCell.column + xOffset;
        var neighborRow = currentCell.row + yOffset;
        if (grid.isValidPosition(neighborColumn, neighborRow) == true && !(xOffset == 0 && yOffset == 0) && this.cells[neighborColumn][neighborRow].isalive)
          neighbors.push(this.cells[neighborColumn][neighborRow]);
        else;

        // do something with neighborColumn and neighborRow
      }
    }

    // add logic to get neighbors and add them to the array

    return neighbors;
  }

  randomize() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].setisAlive(floor(random(2)));
      }
    }

  }
  draw() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].draw();



      }


    }
    grid.high()
}
  updatePopulation() {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].liveOrDie();
      }
    }


  }
  updateNeighborcounts() {
    for (var column = 0; column < this.numberOfColumns - 1; column++) {
      for (var row = 0; row < this.numberOfRows - 1; row++) {
        this.cells[column][row].liveNeighborcount = 0;
        this.cells[column][row].liveNeighborcount = grid.getNeighbors(this.cells[column][row]).length;

      }
    }
  }
}
class Cell {
  constructor(column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isalive = false;
    this.liveNeighborcount = 0


  }

  liveOrDie() {
    if (this.liveNeighborcount < 2 && this.isalive === true)
      this.isalive = false
    else if (this.liveNeighborcount <= 3 && this.isalive === true)
      this.isalivealive = true
    if (this.liveNeighborcount > 3 && this.isalive === true)
      this.isalive = false
    if (this.liveNeighborcount == 3 && this.isalive === false)
      this.isalive = true
  }




  setisAlive(box) {
    if (box == true)
      this.isalive = true;
    else
      this.isalive = false;


  }
  draw() {
    if (this.isalive) {
      fill(color(100, 0, 0))
    } else {
      fill(color(200, 0, 0))
    }
    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }



}

function mousePressed() {
  
  
checkHigh()
checkLow()
}
function checkHigh(){
  if((mouseX>=10 && mouseX<=40) && (mouseY>= 10 && mouseY<=30))
  speed --
  
}
function checkLow(){
  if((mouseX>=10 && mouseX<=40) && (mouseY>= 40 && mouseY<=60))
  speed ++
  
}
