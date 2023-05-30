<!DOCTYPE html>
<html>
<head>
  <title>Encriptador</title>
  <style>
    label {
      display: block;
      margin-bottom: 5px;
    }

    input[type="text"] {
      width: 300px;
      margin-bottom: 10px;
    }

    button {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Encriptador</h1>

  <label>
    <input type="radio" name="operation" value="encrypt" checked>
    Encriptar
  </label>
  <label>
    <input type="radio" name="operation" value="decrypt">
    Desencriptar
  </label>

  <label>
    Texto:
    <input type="text" id="inputText">
  </label>

  <button onclick="processText()">Procesar</button>

  <h2>Resultado:</h2>
  <p id="result"></p>

  <script>
    function processText() {
      var operation = document.querySelector('input[name="operation"]:checked').value;
      var inputText = document.getElementById('inputText').value;
      var resultText = "";

      if (operation === "encrypt") {
        resultText = encryptText(inputText);
      } else {
        resultText = decryptText(inputText);
      }

      document.getElementById('result').textContent = resultText;
    }

    function encryptText(text) {
      text = text.toLowerCase();
      text = text.replace(/e/g, 'enter');
      text = text.replace(/i/g, 'imes');
      text = text.replace(/a/g, 'ai');
      text = text.replace(/o/g, 'ober');
      text = text.replace(/u/g, 'ufat');
      return text;
    }

    function decryptText(text) {
      text = text.toLowerCase();
      text = text.replace(/enter/g, 'e');
      text = text.replace(/imes/g, 'i');
      text = text.replace(/ai/g, 'a');
      text = text.replace(/ober/g, 'o');
      text = text.replace(/ufat/g, 'u');
      return text;
    }
  </script>
</body>
</html>
