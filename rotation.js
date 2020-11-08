function inicio(){

    if (window.DeviceMotionEvent) {
        window.addEventListener("deviceorientation", orientacion);

      }
  }
  window.onload = inicio;

  function orientacion(e){
    document.getElementById("log").style.transform = "rotateZ(" + ( e.alpha - 180 ) + "deg) " +
    "rotateX(" + e.beta + "deg) " +
    "rotateY(" + ( -e.gamma ) + "deg)";
  }