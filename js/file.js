var btnConvert,container, links, containerContent, targetTo;
btnConvert = document.getElementById("btn-convert");

function replaceElements()
{
    container  = document.getElementById("container");

    links      = document.getElementsByClassName("links");

   
    
    containerContent = container.innerHTML;
     
    container.innerHTML = containerContent.replace(/p/g,"a")
    
    for( var i = 0; i < links.length; i++ ) {
        
        target = links[i].innerText;
        links[i].setAttribute("href",`https://www.${targetTo}.com`);
        links[i].setAttribute("target","_blank");   
    }
    
}
console.log( btnConvert );
btnConvert.addEventListener('click', replaceElements);
 


