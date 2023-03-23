const d= document
  w= window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent)
  let breakpoint= w.matchMedia(mq);

  const responsive= (e) => {
    if (e.matches) {
        d.getElementById(id).innerHTML= desktopContent;
    }   else {
        d.getElementById(id).innerHTML= mobileContent
    }
    

    breakpoint.addListener(responsive)
    responsive(breakpoint);
  }
  

  var elemento = document.getElementsByClassName("nav-li");

  elemento.addEventListener("mouseover", function() {
    elemento.style.backgroundColor = "#f5f5f5";
    elemento.style.color = "#111017";
    elemento.style.borderRadius = "30px";
  });
  
