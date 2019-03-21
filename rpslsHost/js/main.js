
const weapons= document.querySelectorAll('img');
let playerCount = 0,
 botCount = 0;
weapons.forEach((weapon) => {
 weapon.addEventListener("click", fight)
});
function fight(){
 uChoice = this.alt;
 botChoice();
 console.log(bChoice)
 compare();
}
function botChoice(){
 bChoice = Math.round(Math.random()*5)
 console.log(bChoice)
 if(bChoice===1){
   bChoice="Rock"
 }else if(bChoice===2){
   bChoice="Paper"
 }else if(bChoice===3){
   bChoice="Scissors"
 }else if(bChoice===4){
   bChoice="Lizard"
 }else{
   bChoice="Spock"
 }
 return bChoice
}
function compare(){
 if(uChoice==="Rock"&&(bChoice==="Scissors"||bChoice==="Lizard")){
   playerCount+=1
console.log('win')
}else if(uChoice==="Paper"&&(bChoice==="Spock"||bChoice==="Rock")){
 playerCount+=1
console.log('win')
}else if(uChoice==="Scissors"&&(bChoice==="Lizard"||bChoice==="Paper")){
 playerCount+=1
console.log('win')
}else if(uChoice==="Lizard"&& (bChoice==="Spock"||bChoice==="Paper")){
 playerCount+=1
console.log('win')
}else if(uChoice==="Spock"&& (bChoice==="Rock"||bChoice==="Scissors")){
 playerCount+=1
console.log('win')
 }else if(uChoice===bChoice){
console.log('draw')
}else {
botCount+=1
  console.log('loss')
}
document.getElementById('player').innerHTML = playerCount
document.getElementById('bot').innerHTML = botCount
console.log(playerCount)
}

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
