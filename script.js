function showPage(pageId){

document.querySelectorAll('.page').forEach(page=>{
page.classList.remove('active');
});

document.getElementById(pageId).classList.add('active');
}

window.onload=()=>{

confetti({
particleCount:300,
spread:180
});

}
