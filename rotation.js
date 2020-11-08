function inicio(){

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', orientacion);

      }
  }
  window.onload = inicio;

  function orientacion(e){
    document.getElementById("log").style.transform = "rotate("+ e.alpha +")";
  }