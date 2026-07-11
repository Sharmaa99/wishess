/* ==========================================================
   HAPPY BIRTHDAY CHINNIII
   SCRIPT.JS
   PART 1
==========================================================*/

const startBtn = document.getElementById("startBtn");
const hero = document.querySelector(".hero");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter-card");
const seal = document.querySelector(".seal");

const sections = document.querySelectorAll("section");


let musicStarted = false;

startBtn.addEventListener("click", () => {

    // Envelope animation
    flap.style.transform = "rotateX(180deg)";
    seal.style.opacity = "0";
    letter.style.transform = "translateY(-70px)";

    startBtn.disabled = true;

    setTimeout(() => {

        hero.style.opacity = "0";
        hero.style.transform = "scale(.95)";

    }, 1000);

    setTimeout(() => {

        hero.style.display = "none";

        main.classList.remove("hidden");
        main.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Show the letter paper
        setTimeout(() => {
            document.querySelector(".paper").classList.add("show");
        }, 500);

        startMusic();

    }, 1700);

});

/* ======================================
MUSIC
====================================== */

function startMusic(){

    if(musicStarted) return;

    musicStarted=true;

    music.volume=0;

    music.play().catch(()=>{});

    let volume=0;

    const fade=setInterval(()=>{

        volume+=0.05;

        music.volume=volume;

        if(volume>=0.5){

            clearInterval(fade);

        }

    },250);

}

/* ======================================
TYPEWRITER
====================================== */


/* ======================================
SECTION REVEAL
====================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

})

},{
threshold:.2
});

sections.forEach(section=>{

observer.observe(section);

});

/* ======================================
PETALS
====================================== */

const petals=document.querySelector(".petals");

for(let i=0;i<25;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=
10+Math.random()*12+"s";

petal.style.animationDelay=
Math.random()*8+"s";

petals.appendChild(petal);

}

/* ======================================
HEARTS
====================================== */

const hearts=document.querySelector(".hearts");

for(let i=0;i<5;i++){

const heart=document.createElement("span");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=
14+Math.random()*8+"s";

hearts.appendChild(heart);

}
/* ==========================================================
   SCRIPT.JS
   PART 2
==========================================================*/

/* ======================================
REAL CANDLE SYSTEM
====================================== */

const candles = document.querySelectorAll(".candle");
const wishMessage = document.querySelector(".wish-message");
const confetti = document.getElementById("confetti");

let blown = 0;

candles.forEach(candle=>{

    candle.addEventListener("click",()=>{

        const flame = candle.querySelector(".flame");

        if(!flame) return;

        /* remove flame */

        flame.remove();

        /* smoke */

        const smoke=document.createElement("div");

        smoke.className="smoke active";

        candle.appendChild(smoke);

        blown++;

        updateWish();

        if(blown===3){

            launchConfetti();

            setTimeout(()=>{

                wishMessage.innerHTML=`

                <h2 style="font-family:'Great Vibes';font-size:58px;color:#ff5d95;">

                Wish Complete ✨

                </h2>

                <p style="font-size:20px;line-height:2;">

                I hope every wish you made today

                comes true. 🤍

                <br><br>

                May happiness always find you,

                wherever life takes you.

                ❤️

                </p>

                `;

            },1200);

        }

    });

});

/* ======================================
WISH TEXT
====================================== */

function updateWish(){

    switch(blown){

        case 1:

        wishMessage.innerHTML=`

        <h3>✨</h3>

        <p>

        One candle down...

        One beautiful wish has started its journey.

        </p>

        `;

        break;

        case 2:

        wishMessage.innerHTML=`

        <h3>🤍</h3>

        <p>

        Almost there...

        Save your biggest wish for the last candle.

        </p>

        `;

        break;

    }

}

/* ======================================
CONFETTI
====================================== */

function launchConfetti(){

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-30px";

        piece.style.animationDelay=Math.random()+"s";

        piece.style.transform=

        `rotate(${Math.random()*360}deg)`;

        confetti.appendChild(piece);

    }

}

/* ======================================
BUTTERFLY FLOAT
====================================== */

document.querySelectorAll(".butterfly").forEach((butterfly,index)=>{

    setInterval(()=>{

        butterfly.style.left=

        Math.random()*85+"%";

        butterfly.style.top=

        Math.random()*85+"%";

    },7000+(index*1000));

});

/* ======================================
PHOTO TILT
====================================== */

document.querySelectorAll(".photo").forEach(photo=>{

photo.addEventListener("mousemove",(e)=>{

const rect=photo.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

photo.style.transform=

`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.05)`;

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="rotate(0deg)";

});

});

/* ======================================
CURSOR SPARKLES
====================================== */

document.addEventListener("mousemove",(e)=>{

const sparkle=document.createElement("div");

sparkle.style.position="fixed";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

sparkle.style.width="8px";

sparkle.style.height="8px";

sparkle.style.borderRadius="50%";

sparkle.style.background="#ffffff";

sparkle.style.boxShadow="0 0 15px #ff8fc2";

sparkle.style.pointerEvents="none";

sparkle.style.zIndex="99999";

sparkle.style.opacity=".9";

document.body.appendChild(sparkle);

sparkle.animate([

{

transform:"scale(1)",

opacity:1

},

{

transform:"translateY(-25px) scale(0)",

opacity:0

}

],{

duration:700,

easing:"ease-out"

});

setTimeout(()=>{

sparkle.remove();

},700);

});

/* ======================================
AUTO GLOW
====================================== */

setInterval(()=>{

document.querySelectorAll(".reason-card").forEach(card=>{

card.style.transform="translateY(-5px)";

setTimeout(()=>{

card.style.transform="";

},600);

});

},5000);

/* ======================================
ENDING MESSAGE
====================================== */

window.addEventListener("scroll",()=>{

const ending=document.querySelector(".ending");

const rect=ending.getBoundingClientRect();

if(rect.top<window.innerHeight-200){

ending.style.background=

"linear-gradient(180deg,#fff8fc,#ffe7f2,#fff7fb)";

}

});

/* ======================================
THE END
====================================== */