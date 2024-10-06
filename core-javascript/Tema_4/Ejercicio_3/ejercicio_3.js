// 1.3. Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla


for (let i = 1; i < 1000; i++) {
  const multiplos_de_20 = i % 20 === 0;
  if (multiplos_de_20) {
    document.write(i + '<br>');
  }
}
