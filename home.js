function clickmenu(){
    homelinks = document.getElementById('homelinks')
        if (homelinks.style.display == 'block'){
            homelinks.style.display = 'none'
        } else{
            homelinks.style.display = 'block'
        }
}

function tela(){
    if(window.innerWidth > 768){
        homelinks.style.display = 'block'
    } else{
        homelinks.style.display = 'none'
    }
}