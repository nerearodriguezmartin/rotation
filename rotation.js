function inicio(){
    var elem = document.getElementById("rota");

    window.addEventListener("deviceorientation", function(e) {
      // remember to use vendor-prefixed transform property
      elem.style.transform =
        "rotateZ(" + ( e.alpha - 180 ) + "deg) " +
        "rotateX(" + e.beta + "deg) " +
        "rotateY(" + ( -e.gamma ) + "deg)";
    });
  }
  window.onload = inicio;

  /*function orientacion(e){
    document.getElementById("log").style.transform = "rotateZ(" + ( e.alpha - 180 ) + "deg) " +
    "rotateX(" + e.beta + "deg) " +
    "rotateY(" + ( -e.gamma ) + "deg)";
  }*/