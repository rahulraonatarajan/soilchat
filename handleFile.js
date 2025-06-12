export function handleFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'txt') {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('soilInput').value = reader.result;
    };
    reader.readAsText(file);
  } else if (ext === 'csv') {
    Papa.parse(file, {
      complete: (result) => {
        const text = result.data.map(row => row.join(', ')).join('\n');
        document.getElementById('soilInput').value = text;
      }
    });
  } else if (ext === 'pdf') {
    const reader = new FileReader();
    reader.onload = async () => {
      const typedarray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
      let text = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(item => item.str).join(' ') + '\n';
      }
      document.getElementById('soilInput').value = text;
    };
    reader.readAsArrayBuffer(file);
  }
}
