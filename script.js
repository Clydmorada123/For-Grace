const message = `

Love,

Sorry sa lahat ng mga pagkakamali ko at sa mga pagkakataong nasaktan kita. Sorry rin sa mga effort na hindi ko nagawa para sa'yo, lalo na tuwing monthsary natin. Alam kong may mga bagay na dapat mas ginawa ko at may mga pagkakataong dapat mas ipinakita ko kung gaano kita kamahal.

Ito na lang ang paraan ko para maiparating sa'yo ang mga gusto kong sabihin. Hindi ko alam kung mababasa mo ito hanggang dulo, pero gusto kong malaman mo na nagsisisi ako sa mga pagkukulang ko.

Salamat sa lahat ng oras, pagmamahal, pag-intindi, at masasayang alaala na ibinigay mo sa akin. Marami akong natutunan dahil sa'yo at hindi ko makakalimutan ang mga panahong naging bahagi ka ng buhay ko.

Alam kong baka hanggang dito na lang tayo. Masakit man tanggapin, irerespeto ko kung ano man ang desisyon mo. Pero bago matapos ang lahat, gusto kong sabihin na naging totoo ang pagmamahal ko sa'yo.

Kung sakaling ito na ang huli kong mensahe, gusto kong iwan ang mga salitang palagi ko sinasabi sayo:

Mahal na Mahal kita.

At habang buhay kong ipagpapasalamat na minsan sa buhay ko, naging ikaw ang pinakamahalagang tao para sa akin.

Mag-iingat ka palagi, Love.

Paalam at salamat sa lahat. 💙


💙
`;

function openLetter(){

    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("letterPage").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    music.play().catch(()=>{});

    typeWriter();
}

let index = 0;

function typeWriter(){

    const target = document.getElementById("typedText");

    if(index < message.length){

        target.innerHTML += message.charAt(index);
        index++;

        setTimeout(typeWriter, 40);
    }
}

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💙";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

setInterval(createHeart,500);