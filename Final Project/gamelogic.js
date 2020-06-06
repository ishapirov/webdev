var table = document.getElementById("grid");
var size = 15;
function begin(){
  var userInput = prompt("Please enter a grid size (minimum 15 for largest pattern to work)");
  size = parseInt(userInput);
  if(isNaN(size)){
    alert("Please enter a number");
    begin();
  }
  if(size <= 0){
    alert("Please enter a positive number greater than 0");
    begin();
  }
}



begin();
var grid = new Array(size);

var population = 0;
var generation = 0;

for (var i = 0; i < grid.length; i++) {
      grid[i] = new Array(grid.length);
      for(var j =0; j < grid[0].length; j++){
        grid[i][j] = 0;
      }
}

for(var rowNum = 0;rowNum<grid.length;rowNum++){
  var tRow = table.insertRow();
    for(var i=0;i<grid[0].length;i++){
      var cell = tRow.insertCell();
      cell.id = rowNum+"-"+i;
      cell.addEventListener("click",function(){
        var idStr = this.id;
        var index = idStr.indexOf("-");
        var row = idStr.substring(0,index);
        var col = idStr.substring(index+1);
        var rowNumber = parseInt(row);
        var colNumber = parseInt(col);
        if(grid[rowNumber][colNumber] == 0){
          grid[rowNumber][colNumber]= 1;
          this.style.backgroundColor="black";
          population++;
          showGenPop();
        }
        else{
          grid[rowNumber][colNumber]= 0;
          this.style.backgroundColor="#f3f3f3";
          population--;
          showGenPop();
        }
      })
  }
}
var timeoutHolder;
function startInc(){
  update1();
  timeoutHolder = setTimeout(function(){startInc();},1000);
}

function stop(){
  clearTimeout(timeoutHolder);
}


function patternSelected(){
  var dropdown = document.getElementById("patterns");
  var value = dropdown.options[dropdown.selectedIndex].value;
  if(value == "blank"){
    reset();
  }
  else
  if(value == "beehive"){
    beehive();
  }
  else
  if(value == "beacon"){
    beacon();
  }
  else
  if(value == "pulsar"){
    pulsar();
  }
  else
  if(value == "glider"){
    glider();
  }

}

function beehive(){
  var newGrid = new Array(grid.length);
  for (var i = 0; i < newGrid.length; i++) {
        newGrid[i] = new Array(newGrid.length);
        for(var j =0; j < newGrid[0].length; j++){
          newGrid[i][j] = 0;
        }
  }

  newGrid[6][6] = 1;
  newGrid[5][7] = 1;
  newGrid[7][7] = 1;
  newGrid[5][8] = 1;
  newGrid[7][8] = 1;
  newGrid[6][9] = 1;

  generation = 0;

  grid = newGrid;
  tableUpdate();
}

function beacon(){
  var newGrid = new Array(grid.length);
  for (var i = 0; i < newGrid.length; i++) {
        newGrid[i] = new Array(newGrid.length);
        for(var j =0; j < newGrid[0].length; j++){
          newGrid[i][j] = 0;
        }
  }

  newGrid[5][5] = 1;
  newGrid[5][6] = 1;
  newGrid[6][5] = 1;
  newGrid[7][8] = 1;
  newGrid[8][8] = 1;
  newGrid[8][7] = 1;

  grid = newGrid;
  generation = 0;

  tableUpdate();
}

function pulsar(){
  var newGrid = new Array(grid.length);
  for (var i = 0; i < newGrid.length; i++) {
        newGrid[i] = new Array(newGrid.length);
        for(var j =0; j < newGrid[0].length; j++){
          newGrid[i][j] = 0;
        }
  }

  newGrid[0][4] = 1;
  newGrid[1][4] = 1;
  newGrid[2][4] = 1;
  newGrid[2][5] = 1;

  newGrid[0][10] = 1;
  newGrid[1][10] = 1;
  newGrid[2][10] = 1;
  newGrid[2][9] = 1;

  newGrid[4][0] = 1;
  newGrid[4][1] = 1;
  newGrid[4][2] = 1;
  newGrid[5][2] = 1;

  newGrid[4][5] = 1;
  newGrid[4][6] = 1;
  newGrid[5][4] = 1;
  newGrid[5][6] = 1;
  newGrid[6][4] = 1;
  newGrid[6][5] = 1;

  newGrid[4][8] = 1;
  newGrid[4][9] = 1;
  newGrid[5][8] = 1;
  newGrid[5][10] = 1;
  newGrid[6][9] = 1;
  newGrid[6][10] = 1;

  newGrid[4][12] = 1;
  newGrid[4][13] = 1;
  newGrid[4][14] = 1;
  newGrid[5][12] = 1;

  newGrid[9][2] = 1;
  newGrid[10][0] = 1;
  newGrid[10][1] = 1;
  newGrid[10][2] = 1;

  newGrid[9][4] = 1;
  newGrid[8][4] = 1;
  newGrid[8][5] = 1;
  newGrid[10][5] = 1;
  newGrid[10][6] = 1;
  newGrid[9][6] = 1;

  newGrid[9][8] = 1;
  newGrid[10][8] = 1;
  newGrid[8][9] = 1;
  newGrid[8][10] = 1;
  newGrid[9][10] = 1;
  newGrid[10][9] = 1;

  newGrid[9][12] = 1;
  newGrid[10][12] = 1;
  newGrid[10][13] = 1;
  newGrid[10][14] = 1;

  newGrid[12][4] = 1;
  newGrid[13][4] = 1;
  newGrid[14][4] = 1;
  newGrid[12][5] = 1;

  newGrid[12][9] = 1;
  newGrid[12][10] = 1;
  newGrid[13][10] = 1;
  newGrid[14][10] = 1;

  grid = newGrid;
  generation = 0;
  tableUpdate();
}

function glider(){
  var newGrid = new Array(grid.length);
  for (var i = 0; i < newGrid.length; i++) {
        newGrid[i] = new Array(newGrid.length);
        for(var j =0; j < newGrid[0].length; j++){
          newGrid[i][j] = 0;
        }
  }

  newGrid[1][1] = 1;
  newGrid[2][2] = 1;
  newGrid[3][2] = 1;
  newGrid[3][0] = 1;
  newGrid[3][1] = 1;


  generation = 0;
  grid = newGrid;

  tableUpdate();
}

function update1(){
  generation++;
  population = 0;
  var neighbours = 0;
  var newGrid = new Array(grid.length);
  for (var i = 0; i < newGrid.length; i++) {
        newGrid[i] = new Array(newGrid.length);
        for(var j =0; j < newGrid[0].length; j++){
          newGrid[i][j] = 0;
        }
  }

  for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[0].length; j++) {
        if(i == 0){
          if(j == 0){
            neighbours += grid[0][1] + grid[1][0] + grid[1][1];
          }else
          if(j == grid[0].length-1){
            neighbours += grid[0][(grid.length[0]-2)] + grid[1][(grid[0].length-1)] + grid[1][(grid[0].length-2)];
          }else{
            neighbours += grid[0][j-1] + grid[0][j+1] + grid[1][j-1] + grid[1][j] + grid[1][j+1];
          }

        }
        else
        if(i == grid.length-1){
          if(j == 0){
            neighbours += grid[grid.length-2][1] + grid[grid.length-1][1] + grid[grid.length-2][0];
          }
          else
          if(j == grid[0].length-1){
            neighbours += grid[grid.length-1][grid[0].length-2] + grid[grid.length-2][grid[0].length-2] + grid[grid.length-2][grid[0].length-1];
          }
          else {
            neighbours += grid[grid.length-1][j-1] + grid[grid.length-1][j+1] + grid[grid.length-2][j-1] + grid[grid.length-2][j] + grid[grid.length-2][j+1];
          }
        }
        else
        if(j == 0){
          neighbours += grid[i-1][0] + grid[i+1][0] + grid[i-1][1] + grid[i][1]+grid[i+1][1];
        }
        else if(j == grid[0].length-1){
          neighbours += grid[i-1][grid[0].length-1] + grid[i+1][grid[0].length-1] + grid[i-1][grid[0].length-2] + grid[i][grid[0].length-2]+grid[i+1][grid[0].length-2];
        }
        else{
          neighbours+= grid[i-1][j-1]+grid[i-1][j] +grid[i-1][j+1] + grid[i][j-1]+grid[i][j+1] + grid[i+1][j-1]+grid[i+1][j] +grid[i+1][j+1]
        }
        newGrid = change(neighbours,i,j,newGrid)

        neighbours = 0;
    }
  }
  grid = newGrid;
  tableUpdate();
}

function tableUpdate(){
  var table = document.getElementById("grid");
    for (var i = 0, row; row = table.rows[i]; i++) {
       for (var j = 0, col; col = row.cells[j]; j++) {
         if(grid[i][j] == 0){
           col.style.backgroundColor = "#f3f3f3";
         }
         else{
           col.style.backgroundColor = "black";
           population++;
         }
       }
    }
    showGenPop();
}

function change(neighbours,i,j,newGrid){
  if(grid[i][j] == 1){
    if(neighbours < 2 || neighbours > 3){
      newGrid[i][j] = 0;
    }
    else{
      newGrid[i][j] = 1;
    }
  }
  else{
    if(neighbours == 3){
      newGrid[i][j] = 1;
    }
    else{
      newGrid[i][j] = 0;
    }
  }

  return newGrid;
}

function update23(){
  for(var i=0;i<23;i++){
    update1();
  }
}

function reset(){
  grid = new Array(grid.length);
  for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(grid.length);
        for(var j =0; j < grid[0].length; j++){
          grid[i][j] = 0;
        }
  }
  tableUpdate();
  generation = 0;
  population = 0;
  showGenPop();
}

function showGenPop(){
  genH3 = document.getElementById("gen");
  popH3 = document.getElementById("pop");
  genH3.innerText = "Generation: " + generation;
  popH3.innerText = "Population: " + population;
}
