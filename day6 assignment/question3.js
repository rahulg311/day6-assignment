<html>
  <title>Question no 2</title>
  <style>
    body {
      padding: 25px;
      background-color: white;
      color: black;
      font-size: 25px;
    }

    .dark-mode {
      background-color: black;
      color: white;
    }

  </style>

  <body>
    <p>
      Welcome
    </p>
    <p id='user'>

    </p>
    <p>
      Clock
    </p>
    <p id='clock'>
      <label id="minutes">00</label>:<label id="seconds">00</label>
    </p>
    <button onclick="myFunction()">Toggle dark mode</button>
  </body>
  <script>
    var userName = prompt('Enter Your Name Please');

    document.getElementById("user").innerHTML = userName;

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }

    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
    }

  </script>

</html>