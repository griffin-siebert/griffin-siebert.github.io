function addImage(imgPath){

    let main = document.getElementById('main');

    let landingIm = document.createElement('img');
    //landingIm.setAttribute('src', 'assets/Griff_SKATER.gif');
    landingIm.setAttribute('src', `assets/${imgPath}`);
    
    main.appendChild(landingIm);
    
}

addImage('GRIF_EPOXY1.png');