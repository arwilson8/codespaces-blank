let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let oneMessage = document.querySelector(".one");
let twoMessage = document.querySelector(".two");
let other = document.querySelector(".other");
let message = document.querySelector(".message");
let image = document.querySelector(".image");

button.onclick = function(){
 console.log("button check");
  let answer1 = input1.value;
console.log(answer1);
let answer2 = input2.value;
console.log(answer2);
      
  if (answer1 === "George" && answer2 === "Pie") {
    message.innerHTML = "Success!";
    image.src = "https://image.pbs.org/video-assets/VDSZ1JU-asset-kids-mezzanine1-16x9-VSPaRI2.jpg.crop.379x212.jpg";

        } else if (answer1 === "Dad" && answer2 === "Bananas") {
    message.innerHTML = "Works for #2.";
    image.src = "https://ih1.redbubble.net/image.2194030206.4884/st,small,845x845-pad,1000x1000,f8f8f8.jpg";
          
} else if (answer1 !== "George" && answer2 !== "Pie"
        && answer1 !== "Dad" && answer2 !== "Bananas") {
    message.innerHTML = "Incorrect!";
    image.src = "https://m.media-amazon.com/images/M/MV5BNDUyODcwNDcxOV5BMl5BanBnXkFtZTgwNTA2Mzg0MjE@._V1_FMjpg_UX1000_.jpg"; 
  
} else {
    message.innerHTML = "Try again.";
    image.src = "https://i.ytimg.com/vi/AXFjzdLla2A/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBIgZShEMA8=&rs=AOn4CLA6AnlRcEBlF1eBgcYqt-xSp5u3Ig"; 
}};

