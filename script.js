function updateSelectedFile() {
  const fileInput = document.getElementById('txt-file');
  const selectedFile = document.getElementById('selected-file');
  const fileName = fileInput.files[0].name;
  const fileExtension = fileName.split('.').pop();

  const fileTypeNames = { // Objeto que asocia extensiones de archivo con nombres de tipo correspondientes
    js: 'javascript',
    txt: 'texto',
    md: 'markdown'
  };

  const fileType = fileTypeNames[fileExtension] || fileExtension; // Buscamos la extensión del archivo en el objeto y mostramos el nombre de tipo correspondiente, o la extensión si no se encuentra en el objeto

  selectedFile.innerHTML = `Archivo: <span style="color:#34abeb">'<strong>${fileName}</strong>'</span>; tipo: <span style="color: #61C398"><em>${fileType}</em></span>.`;
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
