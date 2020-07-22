<html>
  <title>Question no 2</title>

  <body>

    <table>
      <tr>
        <th>Number</th>
        <th>x</th>
        <th>Loop</th>
        <th>=</th>
        <th>Total</th>
      </tr>
      <tr>
        <td id='num'></td>
        <td id='x'></td>
        <td id='loop'></td>
        <td id='='></td>
        <td id='total'></td>
      </tr>
    </table>
  </body>
  <script>
    var num = parseInt(prompt('Enter a number'));
    for (var i = 1; i < 11; i++) {
      document.getElementById("num").innerHTML += num + '<br>';
      document.getElementById("x").innerHTML += 'x' + '<br>';
      document.getElementById("loop").innerHTML += i + '<br>';
      document.getElementById("=").innerHTML += '=' + '<br>';
      document.getElementById("total").innerHTML += (num * i) + '<br>';
    }

  </script>

</html>