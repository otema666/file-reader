function updateSelectedFile() {
  const fileInput = document.getElementById('txt-file');
  const selectedFile = document.getElementById('selected-file');
  selectedFile.innerHTML = `El archivo seleccionado se llama: ${fileInput.files[0].name}`;
}

function processFile() {
  const fileInput = document.getElementById("txt-file");
  const file = fileInput.files[0];

  if (!file) {
    alert("⚠️ Debes seleccionar un archivo para poder procesarlo. ⚠️");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (event) {
    const resultElement = document.getElementById("result");
    const lines = event.target.result.split("\n");
    resultElement.innerHTML = lines.map((line, index) => `<span class="line-number">Línea ${index + 1}:</span> ${line}`).join("<br>");
  };

  reader.readAsText(file);
}

const fileInput = document.getElementById("txt-file");
const processBtn = document.getElementById("process-btn");

fileInput.addEventListener("change", function() {
  if (this.files.length > 0) {
    processBtn.classList.remove("disabled");
    processBtn.classList.add("enabled");
    processBtn.disabled = false;
    updateSelectedFile();
  } else {
    processBtn.classList.remove("enabled");
    processBtn.classList.add("disabled");
    processBtn.disabled = true;
  }
});

window.addEventListener("load", function() {
  fileInput.value = null;
});
