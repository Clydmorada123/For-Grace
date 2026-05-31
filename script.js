const message = `

Love,

Sorry sa lahat ng mga pagkakamali ko at sa mga pagkakataong nasaktan kita.

Sorry rin sa mga effort na hindi ko nagawa para sa'yo, lalo na tuwing monthsary natin.

Alam kong may mga pagkakataong nagkulang ako at may mga bagay na dapat mas ginawa ko para maramdaman mo kung gaano kita kamahal.

Ito na lang ang paraan ko para maiparating sa'yo ang mga gusto kong sabihin.

Salamat sa lahat.

Salamat sa oras mo.
Salamat sa pag-intindi.
Salamat sa pagmamahal.

Mahal na mahal kita.

At habang buhay kong ipagpapasalamat na minsan sa buhay ko, naging ikaw ang pinakamahalagang tao para sa akin.

Mag-iingat ka palagi.

Paalam at salamat sa lahat. 💙

`;

let index = 0;

function openLetter(){

    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("letterPage").classList.remove("hidden");

    document.getElementById("bgMusic").play();

    typeWriter();
}

function typeWriter(){

    const target = document.getElementById("typedText");

    if(index < message.length){

        target.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,25);
    }
}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";
    heart.innerHTML="💙";

    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(15+Math.random()*25)+"px";
    heart.style.animationDuration=(4+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";
    petal.innerHTML="🪷";

    petal.style.left=Math.random()*100+"vw";
    petal.style.fontSize=(20+Math.random()*25)+"px";
    petal.style.animationDuration=(8+Math.random()*6)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },14000);
}

setInterval(createHeart,500);
setInterval(createPetal,1200);