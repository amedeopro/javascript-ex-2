// mi creo i dadi che generano numeri random da 1 a 6
var dado1 = Math.floor(Math.random() * 6) + 1;
var dado2 = Math.floor(Math.random() * 6) + 1;

document.writeln("Giocatore 1 esce il numero  " + dado1 + "<br>" + "<br>");
document.writeln("Giocatore 2 esce il numero  " + dado2 + "<br>" + "<br>");

//creo le condizioni per tirar fuori un vincitore
if (dado1 < dado2){
  document.writeln("Vince il Giocatore 2");
} else if (dado1 > dado2){
  document.writeln("Vince il Giocatore 1");
} else {
  document.writeln("Pari! Nessuno vince");
}
