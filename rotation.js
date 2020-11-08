function inicio(){

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', orientacion);

      }
  }
  window.onload = inicio;

  function orientacion(e){
    document.getElementById("log").style.transform = "rotate("+ e.alpha +")";
  }