document.getElementById('calc-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Leggi i valori inseriti
  const width = parseFloat(document.getElementById('width').value);
  const length = parseFloat(document.getElementById('length').value);
  const thickness_cm = parseFloat(document.getElementById('thickness').value);

  // Converti lo spessore in metri
  const thickness_m = thickness_cm / 100;

  // Calcolo del volume in metri cubi (volume base)
  const volume_m3 = width * length * thickness_m;

  // Aggiungi 10% di scarto
  const volume_m3_finale = volume_m3 * 1.1;

  // Calcolo in litri (1 m³ = 1000 L)
  const volume_liters = volume_m3_finale * 1000;

  // Mostra il risultato a schermo
  const outputEl = document.getElementById('result-output');
  outputEl.textContent =
    'Volume stimato: ' +
    volume_m3_finale.toFixed(2) +
    ' m³  (' +
    volume_liters.toFixed(0) +
    ' L)';
});
