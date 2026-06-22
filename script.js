function showPage(pageId){

    document.querySelectorAll('.page').forEach(page=>{
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    confetti({
        particleCount:120,
        spread:90,
        origin:{y:0.6}
    });

}

// Fireworks on first load

window.onload = () => {

    const duration = 4000;
    const end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:4,
            angle:60,
            spread:80,
            origin:{x:0}
        });

        confetti({
            particleCount:4,
            angle:120,
            spread:80,
            origin:{x:1}
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    }());

};
