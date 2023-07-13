function faqExpand(){
    let faqBtn = document.getElementsByClassName("faq-expand");
    let faqDescription = document.getElementsByClassName("faq-description");

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
function menuBtn(){
    var menuBtn = document.getElementById("menu-btn");
    var menuList = document.getElementById("navigation-list-items-sm");

    menuBtn.addEventListener("click",function(){
        if(menuList.style.display == "none"){
            menuList.style.display= "flex";
        }
        else{
            menuList.style.display= "none";
        }
    });

}



faqExpand();
menuBtn();