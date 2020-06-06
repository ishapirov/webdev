function beginGame(){
  var h = document.getElementById("gameDone");
  h.innerHTML = ""
  var numPicsRadio8 = document.getElementById("pics8");
  var numPicsRadio10 = document.getElementById("pics10");
  var numPicsRadio12 = document.getElementById("pics12");
  var numPics = 0;
  if(numPicsRadio8.checked == true){
    numPics = 8;
  }
  else if (numPicsRadio10.checked == true) {
    numPics = 10;
  }
  else if (numPicsRadio12.checked == true) {
    numPics = 12;
  }
  else {
    alert("You must select the number of pictures");
    return;
  }
  var diffRadioE = document.getElementById("easy");
  var diffRadioM = document.getElementById("medium");
  var diffRadioH = document.getElementById("hard");
  var difficulty = 0;
  if(diffRadioE.checked == true){
    difficulty = 1;
  }
  else if (diffRadioM.checked == true) {
    difficulty = 2;
  }
  else if (diffRadioH.checked == true) {
    difficulty = 3;
  }
  else {
    alert("You must select a difficulty");
    return;
  }
  createGame(numPics,difficulty);
}
function shuffle(array){
  var i;
  for (i = 0; i < array.length; i++) {
      var j = Math.floor(Math.random() * array.length);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  return array;
}

function createGame(numPics,difficulty){
  var i;
  var rowNum;
  var imgArray = [];
  var img;
  var img2;
    for(rowNum = 0;rowNum<2;rowNum++){
          for(i=1;i<=(numPics/2);i++){
            img = document.createElement("img");
            img2 = document.createElement("img");
            var imgSrc = "pic" + (i+(rowNum*(numPics/2))) + ".jpg";
            img.src = imgSrc;
            img2.src = imgSrc;
            img.id = (i-1)+rowNum*4 +"-1";
            img.width = 200;
            img.height = 200;
            img2.id = (i-1)+rowNum*4 + "-2";

            img2.width = 200;
            img2.height = 200;
            imgArray.push(img);
            imgArray.push(img2);
          }
        }
      imgArray = shuffle(imgArray);
      showImg(imgArray,numPics);
      if(difficulty == 1){
        setTimeout(function(){coverImg(numPics,imgArray);},8000);
      }
      else if(difficulty == 2){
        setTimeout(function(){coverImg(numPics,imgArray);},5000);
      }
      else if(difficulty == 3){
        setTimeout(function(){coverImg(numPics,imgArray);},3000);
      }



}

function showImg(imgArray,numPics) {
    var i;
    var rowNum;
    var table = document.getElementById("imgTable");
    for(rowNum = 0;rowNum<4;rowNum++){
      var tRow = table.insertRow(-1);
      for(i=0;i<numPics/2;i++){
        var cell = tRow.insertCell(i);
        cell.appendChild(imgArray[i+(numPics/2)*rowNum]);
    }
  }
}

function coverImg(numPics,imgArray){
  var loseTimeout;
  if(numPics == 8){
    loseTimeout = setTimeout(function(){endGameLost(numPics,imgArray);},120000);
  }
  else if(numPics == 10){
    loseTimeout = setTimeout(function(){endGameLost(numPics,imgArray);},150000);
  }
  else if(numPics == 12){
    loseTimeout = setTimeout(function(){endGameLost(numPics,imgArray);},180000);
  }
  var i;
  var rowNum;
  var img;
  var opened = false;
  var prevCell;
  var prevCover;
  var prevAnimalID;
  var cell;
  var counter = numPics;
  var table = document.getElementById("imgTable");
  for(rowNum = 0;rowNum<4;rowNum++){
    var tRow = table.rows[rowNum].cells;
        for(i=0;i<numPics/2;i++){
          img = document.createElement("img");
          var cell = tRow[i];
          var imgSrc = "cover.jpg";
          img.src = imgSrc;
          img.width = 203;
          img.height = 203;
          img.id = imgArray [i+rowNum*(numPics/2)].id +"-cover";
          img.classList.add("imgClass");
          cell.style.position = 'relative';
          img.style.position = 'absolute';
          img.style.top = 0;
          img.style.left = 0;
          cell.appendChild(img);
          cell.addEventListener('click', function(e){
            var coverImage = e.target;
            var thisCell = this;
            if(!opened){
              coverImage.style.display = 'none';
              prevCell = this;
              prevAnimalID = getRelevantPart(coverImage.id);
              prevCover = coverImage;
              opened = true;
            }
            else{
              if(prevAnimalID == getRelevantPart(coverImage.id)){
                coverImage.style.display = 'none';
                setTimeout(function(){thisCell.innerHTML = ""},200);
                setTimeout(function(){prevCell.innerHTML = ""},200);
                opened = false;
                counter = counter-1;
                if(counter == 0){
                  clearTimeout(loseTimeout);
                  endGameWin();
                }
              }
              else{
                console.log("Darn");
                console.log(prevAnimalID);
                console.log(getRelevantPart(coverImage.id));
                coverImage.style.display = 'none';
                setTimeout(function(){coverImage.style.display ='inline'},200);
                setTimeout(function(){prevCover.style.display = 'inline'},200);
                opened = false;
              }
            }
          });


        }
      }


}
function getRelevantPart(someIDString){
  var index = someIDString.indexOf("-");
  return someIDString.substring(0,index);
}

function endGameWin(){
  var h = document.getElementById("gameDone");
  var t = document.createTextNode("Congratulations! You Win. Click Begin to play again!");
  var table = document.getElementById("imgTable");
  table.innerHTML = "";
  h.appendChild(t);
  document.body.appendChild(h);
}

function endGameLost(){
  var h = document.getElementById("gameDone");
  var t = document.createTextNode("Time's Up! You Lose. Click Begin to try again!");
  h.appendChild(t);
  var table = document.getElementById("imgTable");
  table.innerHTML = "";
  document.body.appendChild(h);
}
