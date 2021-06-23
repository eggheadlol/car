canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=90;
car1_x=10;
car1_y=10;

car2_width=100;
car2_height=90;
car2_x=10;
car2_y=100;

background_image="racing.jpg";

car1_image="car1.png";
car2_image="car2.png"; 
function add(){
    bg_img=new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=background_image;
  
    car1_img=new Image();
    car1_img.onload=uploadCar1;
    car1_img.src=car1_image;

    car2_img=new Image();
    car2_img.onload=uploadCar2;
    car2_img.src=car2_image;
}

function uploadBackground(){

    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);

}

function uploadCar1(){

    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
    
}

function uploadCar2(){

    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
    
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    keypressed=e.keyCode;

    console.log(keypressed);
    if(keypressed=='37'){
        Left();
        console.log("left");          
    }

    if(keypressed=='38'){
        Up();
        console.log("up");          
    } 
     if(keypressed=='39'){
        Right();
        console.log("right");          
    }
    
    if(keypressed=='40'){
        Down();
        console.log("down");          
    }

    if(keypressed=='65'){
        Left1();
        console.log("a");          
    }

    if(keypressed=='87'){
        Up1();
        console.log("w");          
    } 
     if(keypressed=='68'){
        Right1();
        console.log("d");          
    }
    
    if(keypressed=='83'){
        Down1();
        console.log("s");          
    }

    if(car1_x>700){

        document.getElementById("status").innerHTML="car1 has won the game"
    }
    else if(car2_x>700){

        document.getElementById("status").innerHTML="car2 has won the game"
    }
}

function Up(){

    if(car1_y>=0){

        car1_y=car1_y-10;
        uploadBackground();
        uploadcar1();
    }
}

function Down(){

    if(car1_y<=500){

        car1_y=car1_y+10;
        uploadBackground();
        uploadCar1();
    }
}

function Left(){

    if(car1_x>=0){

        car1_x=car1_x-10;
        uploadBackground();
        uploadCar1();
    }
}

function Right(){

    if(car1_x<=700){

        car1_x=car1_x+10;
        uploadBackground();
        uploadCar1();
    }
}

function Up1(){

    if(car2_y>=0){

        car2_y=car2_y-10;
        uploadBackground();
        uploadCar2();
    }
}

function Down1(){

    if(car2_y<=500){

        car2_y=car2_y+10;
        uploadBackground();
        uploadCar2();
    }
}

function Left1(){

    if(car2_x>=0){

        car2_x=car2_x-10;
        uploadBackground();
        uploadCar2();
    }
}

function Right1(){

    if(car2_x<=700){

        car2_x=car2_x+10;
        uploadBackground();
        uploadCar2();
    }
}