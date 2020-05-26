
loadArt();

function loadArt(){
    let main = document.getElementById('main');
  
    for(let i in artLinks){

        let div = document.createElement('div');
        div.setAttribute('class', 'art-sub');
        main.appendChild(div);
    
        addArtImage(artLinks[i].links, div);
    
    }

}



function addArtImage(imgPath, div){

    let landingIm = document.createElement('img');
    //landingIm.setAttribute('src', 'assets/Griff_SKATER.gif');
    landingIm.setAttribute('src', `assets/${imgPath}`);
    
    div.appendChild(landingIm);
}