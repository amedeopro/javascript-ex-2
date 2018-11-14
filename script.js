// creo la lista delle email
var email = ['info@pluto.com', 'info@pippo.com', 'info@caio.com'];
// chiedo all'utente di inserire la sua email
var emailUtente = prompt('Inserisci il tuo indirizzo email');
// di base il mio login sarà errato
var loginOK = false;
// verifico che l'email dell'utente sia presente nella lista
for (i = 0; i < email.length; i++){
// ciclate le e-mail se almeno una delle condizioni si verifica allora trasformo il login in true
  if (emailUtente == email[i]){

    loginOK = true;

  }
}

//effettuato ciclo e verifiche se loginok è true OK PUOI ENTRARE altrimenti NON SEI AUTORIZZATO
 if (loginOK){
   console.log("OK puoi entrare");
 } else {
   console.log("Non sei autorizzato all'accesso");
 }
