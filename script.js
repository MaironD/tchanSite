    <script>
      function play(elementID) {
      var audio = document.getElementById(elementID);
        audio.play();
    }
  function change() {
      var elem = document.getElementById("myButton1");
      if (elem.value=="Click it...") {
          play("audio1");
          elem.value = "Click It Again...";
        }else if (elem.value=="Click It Again..."){
          play("audio2");
          elem.value = "Click It Again...AGAIN";
      }else if (elem.value=="Click It Again...AGAIN") {
          play("audio3");
          elem.value = "Click it...";
        }
      }
     </script> 