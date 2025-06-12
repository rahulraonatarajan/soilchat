import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@latest';
import { handleFile } from './handleFile.js';

let analyzer;

async function loadModel() {
  analyzer = await pipeline('text-generation', 'Xenova/tinyllama-fast');
  console.log('Model loaded!');
}

async function analyzeSoil() {
  const input = document.getElementById('soilInput').value;
  const output = await analyzer(input, { max_new_tokens: 100 });
  document.getElementById('output').textContent = output[0].generated_text;
}


document.getElementById('analyzeBtn').addEventListener('click', analyzeSoil);
document.getElementById('fileInput').addEventListener('change', (e) => {
  handleFile(e.target.files[0]);
});

loadModel();
