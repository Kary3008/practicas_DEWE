function operadorOr() {
  var a1 = true;
  var a2 = false;
  //operador Or
  var resultado1 = a1||a2;
  alert("Resultador OR es: " + resultado1);

  //PRUEBA DE ESCRITORIO.
    //si por lo menos alguno de ellos debe ser true.
    /* a1       a2          a1||a2
       true     true        true
       true     false       true
       false    true        true
       false    false       false*/
}
