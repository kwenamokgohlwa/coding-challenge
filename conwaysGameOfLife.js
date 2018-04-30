var grid = [];

function createGrid(){

  for(let i = 0; i <= 28; i++){
    var row = [];

    for(let j = 0; j <= 28; j++){
      row[j] = "-";
    }

    grid[i] = row;
  }

}

function print(arr, header){
console.log(header);

  for(let i = 0; i <= 28; i++){
    let line = arr[i].join("");
    console.log(line);
  }
}

function placePieces(chances){
  var input = "";
  var coordinate = [];

  for(let i = 0; i < chances; i++){
    input = prompt("White Player: Please enter in the coordinate of the cell you want to set alive - seperated by a comma (,)");
    coordinate = input.split(",");
    populateGrid(coordinate[0],coordinate[1],"w");

    input = prompt("Black Player: Please enter in the coordinate of the cell you want to set alive - seperated by a comma (,)");
    coordinate = input.split(",");
    populateGrid(coordinate[0],coordinate[1],"b");
  }


}

function populateGrid(x,y,player){
  //validation
  while(isNaN(x) || isNaN(y) || x > 28 || y > 28 || x < 0 || y < 0 || grid[x][y] == "w" || grid[x][y] == "b"){
    input = prompt("Wrong input!!! \nPlayer " + player + ": Please enter in the coordinate of the cell you want to set alive - seperated by a comma (,)");
    coordinate = input.split(",");
    x = coordinate[0];
    y = coordinate[1];
  }

  grid[x][y] = player;

  print(grid, player);
}

function runLifeCycle(turns){
  let countWhite = 0;
  let countBlack = 0;

  for(let k = 0; k < turns; k++){

    for(let i = 0; i <= 28; i++){
      for(let j = 0; j <= 28; j++){
      //Counter started

        if(indexExists(i-1, j-1)){
          if(grid[i-1][j-1] == "w"){
            countWhite++;
          } else if (grid[i-1][j-1] == "b") {
            countBlack++;
          }
        }

        if(indexExists(i-1, j)){
          if(grid[i-1][j] == "w"){
            countWhite++;
          } else if (grid[i-1][j] == "b") {
            countBlack++;
          }
        }

        if(indexExists(i-1, j+1)){
          if(grid[i-1][j+1] == "w"){
            countWhite++;
          } else if (grid[i-1][j+1] == "b") {
            countBlack++;
          }
        }

        if(indexExists(i, j-1)){
          if(grid[i][j-1] == "w"){
            countWhite++;
          } else if (grid[i][j-1] == "b") {
            countBlack++;
          }
        }

        if(indexExists(i, j+1)){
          if(grid[i][j+1] == "w"){
            countWhite++;
          } else if (grid[i][j+1] == "b") {
            countBlack++;
          }
        }

        if(indexExists(i+1, j-1)){
          if(grid[i+1][j-1] == "w"){
            countWhite++;
          } else if (grid[i+1][j-1] == "b") {
            countBlack++;
          }
        }

        if(indexExists(i+1, j)){
          if(grid[i+1][j] == "w"){
            countWhite++;
          } else if (grid[i+1][j] == "b") {
            countBlack++;
          }
        }

        if(indexExists(i+1, j+1)){
          if(grid[i+1][j+1] == "w"){
            countWhite++;
          } else if (grid[i+1][j+1] == "b") {
            countBlack++;
          }
        }

      //Counter finished

        if(grid[i][j] != "-"){ //if Alive

          if((countWhite + countBlack) > 3){
            grid[i][j] = "-";
          }

          if((countWhite + countBlack) < 2){
            grid[i][j] = "-";
          }

        } else { //if Dead

          if((countWhite + countBlack) == 3){
            if(countWhite > countBlack){
              grid[i][j] = "w";
            } else {
              grid[i][j] = "b";
            }
          }

        }

        countWhite = 0;
        countBlack = 0;

      }
    }

  }

  print(grid, turns + " life cycle");
}

function indexExists(x, y) {
    if (x < 0 || x > 28 || y < 0 || y > 28) {
        return false;
    }

    return true;
}


alert("Welcome to Conway's Game of Life");

createGrid();

placePieces(40);

runLifeCycle(500);
