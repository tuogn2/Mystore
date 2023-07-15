let btn = document.getElementById("btn");
let spans = document.getElementsByTagName("span");

btn.onclick = function(){
    for(span of spans){
        span.classList.add("anim");
    }
    setTimeout(function(){
        for(span of  spans){
            span.classList.remove("anim");
        } 
    },500)
}