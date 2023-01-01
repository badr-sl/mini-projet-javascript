var content = [
    {
        path : 'téléchargé (2).png',
        title : "css",
        price : 55,
    },
    {
        path : 'OIP.jpg',
        title : "js",
        price : 50,
    },
    {
        path : 'html.JFIF',
        title : "html",
        price : 65,
    },
    {
        path : 'html.png',
        title : "html",
        price : 23,
    },
    {
        path : 'images.png',
        title : "css",
        price : 20,
    },
    {
        path : 'téléchargé.png',
        title : "js",
        price : 31,
    },
    {
        path : 'téléchargé.JFIF',
        title : "css",
        price : 99,
    },
    {
        path : 'téléchargé (1).png',
        title : "html",
        price : 67,
    },
    {
        path : 'js.JFIF',
        title : "js",
        price : 75,
    }
]
const courseLib = document.querySelector('#test')
function create(path , titre , price , c){
    let div  = document.createElement('div');
    let img  = document.createElement('img');
    let p  = document.createElement('p');
    let span  = document.createElement('span');
    img.src = path ;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu)
    span.appendChild(document.createTextNode(price +"$"));
    div.setAttribute('class','card col-3 me-2 mb-2 text-center fw-bold');
    div.appendChild(img);
    img.setAttribute("class", "h-75")
    div.appendChild(p);
    div.appendChild(span);
    c.append(div)
}


content.forEach((v)=>{
create(v.path , v.title , v.price, courseLib);

});

function filter(){
    let key=document.getElementById("search").value.toLowerCase();
    document.getElementById("test").innerHTML="";
    for(let i=0; i<content.length; i++){
        let pattern="/"+content[i].title.toLowerCase()+"/";
        if(pattern.match(key)!=null){
            let div  = document.createElement('div');
            let img  = document.createElement('img');
            let p  = document.createElement('p');
            let span  = document.createElement('span');
            img.src = content[i].path ;
            let contenu = document.createTextNode(content[i].title);
            p.appendChild(contenu)
            span.appendChild(document.createTextNode(content[i].price +"$"));
            div.setAttribute('class','card col-3 me-2 mb-2 text-center fw-bold');
            div.appendChild(img);
            img.setAttribute("class", "h-75")
            div.appendChild(p);
            div.appendChild(span);
            document.getElementById("test").append(div);
        }
    }

}

function category(btn){
    let cat=btn.toLowerCase();
    document.getElementById("test").innerHTML="";
    for(let i=0; i<content.length; i++){
        if(cat==content[i].title.toLowerCase()){
            let div  = document.createElement('div');
            let img  = document.createElement('img');
            let p  = document.createElement('p');
            let span  = document.createElement('span');
            img.src = content[i].path ;
            let contenu = document.createTextNode(content[i].title);
            p.appendChild(contenu);
            span.appendChild(document.createTextNode(content[i].price +"$"));
            div.setAttribute('class','card col-3 me-2 mb-2 text-center fw-bold');
            div.appendChild(img);
            img.setAttribute("class", "h-75")
            div.appendChild(p);
            div.appendChild(span);
            document.getElementById("test").append(div);//test étant l'id de l'élement ou on veut 
        }
    }

}
function prix(){
    let prix=document.getElementById("prix").value;
    document.getElementById("test").innerHTML="";
    for(let i=0; i<content.length; i++){
       
        if(prix>=content[i].price){
            
            let div  = document.createElement('div');
            let img  = document.createElement('img');
            let p  = document.createElement('p');
            let span  = document.createElement('span');
            img.src = content[i].path ;
            let contenu = document.createTextNode(content[i].title);
            p.appendChild(contenu);
            span.appendChild(document.createTextNode(content[i].price +"$"));
            div.setAttribute('class','card col-3 me-2 mb-2 text-center fw-bold');
            div.appendChild(img);
            img.setAttribute("class", "h-75")
            div.appendChild(p);
            div.appendChild(span);
            document.getElementById("test").append(div);//test étant l'id de l'élement ou on veut 
        }
    }}




   






