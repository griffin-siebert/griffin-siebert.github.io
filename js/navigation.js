

let sidebar = document.getElementById('button-wrap');

console.log(sidebar);

let linksData = [
    {'key': 'Work', 'link': 'work'}, 
    {'key': 'Film', 'link': 'film'},
    {'key': 'Art', 'link': 'art'}
];

makeLinks(linksData, sidebar)

function makeLinks(links, div){
    for(let i in links){
        let b = document.createElement('button');
        // b.setAttribute('content', 'test content');
        b.setAttribute('class', 'btn draw-border');
        b.innerHTML = links[i].key;
        // b.onclick(()=> links[i].link);

        div.appendChild(b);
    }
}