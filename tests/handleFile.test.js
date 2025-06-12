import { handleFile } from '../handleFile.js';
test('handleFile parses CSV into textarea', () => {
  document.body.innerHTML = '<textarea id="soilInput"></textarea>';

  global.Papa = {
    parse: (file, opts) => {
      opts.complete({ data: [['pH', '7.0'], ['Nitrogen', '5']] });
    }
  };

  const csvFile = new File(['pH,7.0\nNitrogen,5'], 'sample.csv', {
    type: 'text/csv'
  });

  handleFile(csvFile);

  const expected = 'pH, 7.0\nNitrogen, 5';
  expect(document.getElementById('soilInput').value).toBe(expected);
});
