window.addEventListener('load',() => {
    const sounds = document.querySelectorAll(".sound");
    const pads= document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "linear-gradient(135deg, #FF0099 0%, #00dbde 100%)",
        "linear-gradient(135deg, #88dba3 0%, #f9fea5 100%)",
        "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)",
        "linear-gradient(135deg, #01FFF4 0%, #4fac4e 100%)",
        "linear-gradient(135deg, #6e0dd0 0%, #c471f5 100%)",
        "linear-gradient(135deg, #ff6600 0%, #ffb199 100%)"
    ];
    const animationName = [
        "jump1 2s ease",
        "jump2 2s ease",
        "jump3 2s ease",
        "jump4 2s ease",
        "jump5 2s ease",
        "jump6 2s ease"
    ];

    //Lets get going with the sound here
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    // Creat a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = animationName[index];
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    };
});

