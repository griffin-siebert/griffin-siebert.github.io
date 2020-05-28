let sidebar = document.getElementById('button-wrap');
let main = document.getElementById('main');

let subs = linksData.filter(f=> f.link === 'work')[0];

for(let i in workLinks){
    let div = document.createElement('div');
    div.setAttribute('class', 'work-sub');
    main.appendChild(div);

    div.setAttribute('id', workLinks[i].id);

    for(let j in workLinks[i].links){
        addWorkImage(workLinks[i].links[j], div);
    }
}

makeLinks(linksData, sidebar);

function addWorkImage(imgPath, div){

    let landingIm = document.createElement('img');
    //landingIm.setAttribute('src', 'assets/Griff_SKATER.gif');
    landingIm.setAttribute('src', `assets/${imgPath}`);
    
    div.appendChild(landingIm);
}

function makeLinks(links, div){

    for(let i in links){
        let innerdiv = document.createElement('div');
        let b = document.createElement('button');
        b.setAttribute('class', 'btn draw-border');
        b.innerHTML = links[i].key;
       
        div.appendChild(innerdiv);
        innerdiv.appendChild(b);

        let innerInner = document.createElement('div');
        innerdiv.append(innerInner);
        
        for(let j in links[i].sub){

            let subB = document.createElement('button');
            subB.innerHTML = links[i].sub[j].key;
            subB.setAttribute('class', 'btn draw-border btn-sm');
            innerInner.appendChild(subB); 
            subB.onclick =  ()=> location.href = `#${links[i].sub[j].id}`;
        }
        
        b.onclick =  ()=> location.href = `${links[i].link}.html`;


    }
}

