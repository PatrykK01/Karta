var tlo = document.getElementById("tlo");
let zmianaA = 0;
function zmiana(){

    if(zmianaA==0){
        tlo.style.background = "cadetblue";
        zmianaA++;
    }
    else{
        tlo.style.background = "aqua";
        zmianaA--;
    }
};

function ob1(){
   document.getElementById("obrazek").innerHTML = "<img src='https://image.ceneostatic.pl/data/products/85220053/i-jablko-zielone.jpg'></img>"
}
function ob2(){
    document.getElementById("obrazek").innerHTML = "<img src='https://sphoryniec.pl/wp-content/uploads/2020/06/jab%C5%82ko.jpg'></img>"
 }
 function ob3(){
    document.getElementById("obrazek").innerHTML = "<img src='https://www.homesquare.pl/files/uploads/2016/10/Rze%C5%BAba-do-domu-i-ogrodu-jab%C5%82ko-red-Bull-and-Stein.jpg'></img>"
 }
 function ob4(){
    document.getElementById("obrazek").innerHTML = "<img src='https://www.sadsandomierski.pl/images/zielone-jab%C5%82ko.png'></img>"
 };

