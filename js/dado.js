function jugar () {
    var numerouno=Math.floor(Math.random()*6)+1;
    var imagenuno="img/"+numerouno+".png";
    
    var numerodos=Math.floor(Math.random()*6)+1;
    var imagendos="img/"+numerodos+".png";

    var imagen1=document.querySelectorAll("img")[0];
    imagen1.setAttribute("src",imagenuno);

    var imagen2=document.querySelectorAll("img")[1];
    imagen2.setAttribute("src",imagendos);
    


    if (numerouno>numerodos){
        document.querySelector("h1").innerHTML="𝓙𝓾𝓰𝓪𝓭𝓸𝓻 𝓤𝓷𝓸 𝓔𝓼 𝓖𝓪𝓷𝓪𝓭𝓸𝓻"
    }
    else if (numerodos>numerouno){
        document.querySelector("h1").innerHTML="𝓙𝓾𝓰𝓪𝓭𝓸𝓻 𝓓𝓸𝓼 𝓔𝓼 𝓖𝓪𝓷𝓪𝓭𝓸𝓻"
    
    }
    else {
        document.querySelector("h1").innerHTML="𝓔𝓶𝓹𝓪𝓽𝓮"
    }
}

document.querySelector("#butn");
addEventListener("click", jugar);