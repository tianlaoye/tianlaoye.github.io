/* 
* @Author: anchen
* @Date:   2017-04-28 13:21:35
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-30 12:50:56
*/

window.onload=function(){
    var screen1=document.getElementById("screen1");
    var screen1Word=document.getElementById("screen1Word");
    var screen1Shadow=document.getElementById("screen1Shadow");
    setTimeout(function(){
        screen1.classList.add("screen1-show");
        screen1Word.classList.add("screen1-word");
        screen1Shadow.classList.add("screen1-shadow");
    },500);


    // 第二页的添加class

    var gracefulWord=document.getElementById("gracefulWord");
    var designWord=document.getElementById("designWord");
    var screen2Phone=document.getElementById("screen2Phone");
    



    // 第三页的添加的class
    var screen3Word=document.getElementById("screen3Word");
    var screen3Design=document.getElementById("screen3Design");
    var iconLeft=document.getElementById("iconLeft");
    var screen3Phone=document.getElementById("screen3Phone");
    


    // 第四页添加class
    var screen4Model=document.getElementById("screen4Model");
    var screen4Find=document.getElementById("screen4Find");
    var screen4Phone1=document.getElementById("screen4Phone1");
    var screen4Phone2=document.getElementById("screen4Phone2");
    var screen4Phone3=document.getElementById("screen4Phone3");
    var screen4Phone4=document.getElementById("screen4Phone4");
    

    // 第五页添加class
    var screen5Function=document.getElementById("screen5Function");
    var screen5More=document.getElementById("screen5More");
    var screen5Display=document.getElementById("screen5Display");
    


    // 鼠标移动导航栏下标跟随移动
    var lis=document.querySelectorAll(".navBuy li");
    var navBar=document.querySelector("#navBar");
    console.log(lis);
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].addEventListener("mouseover",function(){
            if(this.index==0){
                navBar.style.left=20+"px";

            }else if(this.index==1){
                navBar.style.left=125+"px";
            }else if(this.index==2){
                navBar.style.left=230+"px";
            }else if(this.index==3){
                navBar.style.left=335+"px";
            }else if(this.index==4){
                navBar.style.left=450+"px";
            }

        });
        lis[i].addEventListener("mouseout",function(){
            var top=document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
            if(top<800){
                navBar.style.left="";
            }else if(top>=800&& top<1600-80){
                navBar.style.left="125px";
            }else if(top>=1600-80 && top<2400-80){
                navBar.style.left="230px";
            }else if(top>=2400-80&&top<3200){
                navBar.style.left="335px";
            }else{
                navBar.style.left="450px";
            }

        });
    };
    // 鼠标滚动固定导航栏变色
    var head=document.querySelector("header");
    var as=document.querySelectorAll("header a");
    console.log(as);
    window.addEventListener("scroll",function(e){
        var top=document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop;
        if(top>5){
            head.style.background="rgba(0,0,0,.5)";
            for(var j=0;j<as.length;j++){
                as[j].style.color="#fff";
            }
            
        }else{
            head.style.background="";
            for(var j=0;j<as.length;j++){
                as[j].style.color="#000";
            }
        }
        if(top<800){
            navBar.style.left=20+"px";

        }else if(top>=800 && top<1600-80){
            navBar.style.left=125+"px";
            gracefulWord.classList.add("screen2Graceful");
            designWord.classList.add("screen2Design");
            setTimeout(function(){screen2Phone.classList.add("screenone");},500);
        }else if(top>=1600-80 && top<2400-80){
            navBar.style.left=230+"px";
            screen3Word.classList.add("screen3Small");
            screen3Design.classList.add("screen3design");
            setTimeout(function(){iconLeft.classList.add("iconLeftShow");},500);
            setTimeout(function(){screen3Phone.classList.add("screen3PhoneShow");},1000);
        }else if(top>=2400-80 && top<3200-80){
            navBar.style.left=335+"px";
            screen4Model.classList.add("screen4ModelShow");
            screen4Find.classList.add("screen4FindShow");
            setTimeout(function(){screen4Phone1.classList.add("scrren4PhoneShow");},500);
            setTimeout(function(){screen4Phone2.classList.add("scrren4PhoneShow");},800);
            setTimeout(function(){screen4Phone3.classList.add("scrren4PhoneShow");},1100);
            setTimeout(function(){screen4Phone4.classList.add("scrren4PhoneShow");},1400);
        }else {
            navBar.style.left=450+"px";
            screen5Function.classList.add("scrren5WordShow");
            screen5More.classList.add("scrren5WordShow");
            setTimeout(function(){screen5Display.classList.add("screen5PhoneShow");},1000);
        }
    });

}