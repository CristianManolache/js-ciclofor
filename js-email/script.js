//INTRO + MAIL UTENTE
alert ("Ciao , sono Cristian uno studente di Boolean, ti vorrei fare delle domande");
var mail_utente=prompt('Inserisci la tua mail');
//ARRAY
var lista_accesso=['mlcristian@tiscali.it', 'limonegiallo@sicilia.it', 'ramajebali@gmail.com'];
//CHECK-IN
var trovato=false;
//AVVIARE IL CICLO E CONTROLLARE CHE LA MAIL INSERITA SIA CONTENUTA NELLA LISTA DI ACCESSO
for (var i= 0; i < lista_accesso.length; i++){
  if (mail_utente==lista_accesso[i]){
    trovato=true;
    console.log(lista_accesso.length);
    console.log(lista_accesso[i]);
  }
}
//STAMPARE UN MESSAGGIO APPROPRIATO
if(trovato==true){
  alert('L\'email inserita è stata confermata');
}else{
  alert('L\'email inserita non è valida');
}
