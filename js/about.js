function addImage(imgPath){

    let main = document.getElementById('main');

    let landingIm = document.createElement('img');
    //landingIm.setAttribute('src', 'assets/Griff_SKATER.gif');
    landingIm.setAttribute('src', `assets/${imgPath}`);
    landingIm.setAttribute('class', `about-img`);
    
    main.appendChild(landingIm);

    let aboutDiv = documnt.createElement('div');
    aboutDiv.setAttribute('class', 'about-div');

    main.appendChild(aboutDiv);
    
    
}

addImage('GRIF_EPOXY1.png');