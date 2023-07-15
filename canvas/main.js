var  c =document.getElementById('myCanvas');
var ctx = c.getContext("2d");
var scoreShow = document.getElementById('score');

var birdImg = new Image();
var  mainPicture = new Image();
var ongTren = new Image();
var ongDuoi = new Image();

birdImg.src ="./bird.png";
mainPicture.src = "./nenchinh.png";
ongTren.src = "./ongtren.png";
ongDuoi.src = "./ongduoi.png";

//buoc 1 tao cac hinh nen vao 
//buoc 2 tao 1 so bien can thiec

var score = 0;
var khoangCachHaiOng =140;
var khoangCachDenOngDuoi;
//tao ra 1 toa do x,y voi x =0.2 man hinhf ,y = 0.5 man hinh
var bird ={
    x: mainPicture.width/5,
    y: mainPicture.height/2
}

var ong =[]; //tao mang ong de chua cac ong di chuyen
ong[0]={
    x:mainPicture.width,
    y:0
}

//funtion chay tro choi
function run(){
    ctx.drawImage(mainPicture,0,0);
    ctx.drawImage(birdImg,bird.x,bird.y);
    for(var i =0;i<ong.length;i++){
        khoangCachDenOngDuoi = ongTren.height+khoangCachHaiOng;
        ctx.drawImage(ongTren,ong[i].x,ong[i].y);
        ctx.drawImage(ongDuoi,ong[i].x,ong[i].y+khoangCachDenOngDuoi);

        ong[i].x -=5;

       // tao them 1 ong
        if(ong[i].x == c.width/2){
            ong.push({
                x: c.width,
                y:Math.floor(Math.random()*ongTren.height)-ongTren.height
            })
        }
        if(ong[i].x == 0 )
            ong.splice(0,1);


        if(ong[i].x == bird.x)
             score++;
            
        scoreShow.innerHTML = "Score:"+ score;
        if(bird.x + birdImg.height == c.height ||
            bird.x +birdImg.width >= ong[i].x && bird.x <= ong[i].x+ongTren.width
            && (bird.y <= ong[i].y+ongTren.height||
                bird.y +birdImg.height >= ong[i].y +khoangCachDenOngDuoi)
             )
            return;
    }

    bird.y+=3;
    requestAnimationFrame(run);
};


//nhan nut thi bay len
document.addEventListener("keydown",function(){
    bird.y-= 60;
});

run();



























































// //  ctx.moveTo(0,0);
// //  ctx.lineTo(200,200);
// //  ctx.stroke();

// // ctx.beginPath();
// // ctx.arc(95,50,80,Math.PI,Math.PI*2);
// // ctx.strokeStyle = "red";
// // ctx.stroke();




// ctx.font="30px Georgia";



// //create line color

// var gradient = ctx.createLinearGradient(0,0 ,c.width,0);
// gradient.addColorStop("0","#e9f5f9");
// gradient.addColorStop("0.5","#7cc0d8");
// gradient.addColorStop("1","#2596be");

// ctx.fillStyle = gradient;
// // ctx.fillText("hello",10,50);
// ctx.strokeText("hello",10,50);
