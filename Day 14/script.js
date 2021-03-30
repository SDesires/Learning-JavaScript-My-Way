window.addEventListener("load", function(){
    let target = document.getElementById("typing");
    let text = "This is A Typing Text Effect Using JavaScript.";
    let pointer = 0;
    let timer = setInterval(function(){
        pointer++;
        if (pointer <= text.length) {
            target.innerHTML = text.substring(0, pointer);
        } else { pointer = 0; }
    }, 250);
});