

let sidebar = document.getElementById('button-wrap');

makeLinks(linksData, sidebar);

function makeLinks(links, div){
    for(let i in links){
        let innerdiv = document.createElement('div');
        let b = document.createElement('button');
        b.setAttribute('class', 'btn draw-border');
        b.innerHTML = links[i].key;
       
        div.appendChild(innerdiv);
        innerdiv.appendChild(b);

        
        b.onclick =  ()=> {
            if(links[i].link === 'work'){
                let innerInner = document.createElement('div')
                innerdiv.append(innerInner);
                for(let j in links[i].sub){
                    //links[i].sub[j]
                    let subB = document.createElement('button');
                    subB.innerHTML = links[i].sub[j].key;
                    subB.setAttribute('class', 'btn draw-border');
                    innerInner.appendChild(subB); 
                }
                location.href = `${links[i].link}.html`;
            }else{
                location.href = `${links[i].link}.html`;
            }
        };


    }
}

function buttonClicked(){



}