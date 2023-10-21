$( document ).ready(function() {
    console.log( "ready!" );
});

// Delegate associe un évènement aux éléments correspondant qui existe ou existeront
$("body").delegate(".bt-delete","click", deleteRow);