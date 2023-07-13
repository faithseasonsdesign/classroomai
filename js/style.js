function faqExpand(){
    var faqBtn = document.getElementsByClassName("faq-expand");
    var faqDescription = document.getElementsByClassName("faq-description");

    for(var a = 0 ; a < faqBtn.length; a++){
        faqBtn[a].addEventListener("click",function(e){
            if(faqDescription[this.id].style.display=="none"){
                faqDescription[this.id].style.display="block";
            }
            else if(faqDescription[this.id].style.display=="block"){
                faqDescription[this.id].style.display="none";
            }
        });
    }
}

function faq(){
    $(".faq-expand").click(function(event){
        id = "."+event.target.id;
        $(id).toggle();
        //$().toggle();
    });
}

function menuBtn(){
    var menuBtn = document.getElementById("menu-btn");
    var menu = document.getElementById("navigation-list-items-sm");

    menuBtn.onclick = function(){
        if(menu.style.display=="none"){
            menu.style.display = "flex";
        }
        else{
            menu.style.display = "none";
        }
    }
}




faqExpand();
menuBtn();
faq();