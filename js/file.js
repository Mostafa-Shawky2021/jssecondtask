var container, links, str, target;

container = document.getElementById("container");

links     = document.getElementsByClassName("links");

str = container.innerHTML;
 
container.innerHTML = str.replaceAll("p","a")

for( var i = 0; i < links.length; i++ ) {
    
    target = links[i].innerText;
    links[i].setAttribute("href",`https://www.${target}.com`);
    links[i].setAttribute("target","_blank");   
}



 


