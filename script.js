// ===============================
// Happy Birthday Dad
// script.js
// ===============================

const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");

const giftBox = document.getElementById("giftBox");
const showWish = document.getElementById("showWish");

const wish = document.getElementById("wish");
const wishText = document.querySelector("#wish p");

const music = document.getElementById("bgMusic");

// -----------------------------
// ข้อความอวยพร
// -----------------------------

const message = ` สุขสันต์วันเกิดครับคุณพ่อ ขอให้คุณพ่อมีสุขภาพแข็งแรง 
มีความสุขในทุก ๆ วัน สมหวังในทุกสิ่งที่ตั้งใจ
ขอให้ปีนี้เต็มไปด้วยรอยยิ้มเสียงหัวเราะและความสุขตลอดไป
 ❤️ รักพ่อมากที่สุด ❤️`;

// -----------------------------
// เปิดเว็บไซต์
// -----------------------------

giftBox.addEventListener("click", () => {

    music.play().catch(()=>{});

    giftBox.style.transform = "scale(1.3) rotate(12deg)";

    setTimeout(()=>{
        giftBox.innerHTML="🎉";
    },250);

    setTimeout(()=>{

        welcome.style.opacity="0";

    },700);

    setTimeout(()=>{

        welcome.style.display="none";

        mainPage.style.display="flex";

        document.body.style.overflow="auto";

    },1200);

});

// -----------------------------
// เปิดคำอวยพร
// -----------------------------

showWish.addEventListener("click",()=>{

    wish.style.display="block";

    typeWriter();

    floatingHearts();

},{once:true});

// -----------------------------
// พิมพ์ข้อความทีละตัว
// -----------------------------

function typeWriter(){

    wishText.innerHTML="";

    let i=0;

    function typing(){

        if(i<message.length){

            if(message.charAt(i)=="\n"){

                wishText.innerHTML+="<br>";

            }else{

                wishText.innerHTML+=message.charAt(i);

            }

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}

// -----------------------------
// ดาวระยิบระยับ
// -----------------------------

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(8+Math.random()*12)+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}


setInterval(createStar,300);

// ----------------------
// กลีบซากุระ
// ----------------------

function sakura(){

    const flower=document.createElement("div");

    flower.className="sakura";

    const flowers=["🎂","🎂","🎉","🎉"];

    flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(6+Math.random()*6)+"s";

    flower.style.fontSize=(18+Math.random()*18)+"px";

    document.body.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },12000);

}

setInterval(sakura,350);

// -----------------------------
// หัวใจลอยเบา ๆ
// -----------------------------

function floatingHearts(){

    for(let i=0;i<20;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML="💙","🎂","🎉";

            heart.style.position="fixed";

            heart.style.left=Math.random()*100+"vw";

            heart.style.bottom="-30px";

            heart.style.fontSize=(16+Math.random()*14)+"px";

            heart.style.pointerEvents="none";

            heart.style.transition="4s linear";

            heart.style.opacity="1";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.style.transform=
                `translateY(-110vh)
                translateX(${Math.random()*120-60}px)
                rotate(${Math.random()*360}deg)`;

                heart.style.opacity="0";

            },50);

            setTimeout(()=>{

                heart.remove();

            },4200);

        },i*120);

    }

}

// -----------------------------
// รูปค่อย ๆ ซูม
// -----------------------------

const photo=document.querySelector(".photo img");

let scale=1;

setInterval(()=>{

    scale = scale===1 ? 1.05 : 1;

    photo.style.transform=`scale(${scale})`;

},3500);

// -----------------------------
// ปุ่ม Enter ก็เปิดคำอวยพรได้
// -----------------------------

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        if(wish.style.display==="none"){

            showWish.click();

        }

    }

});