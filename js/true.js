function comparacion() {
  //Datos del autor de esta práctica.
  document.write("<h1 style='color: #9966ff;''>Práctica de: Karina Bautista Bautista</h1>");
  document.write("<br>");
  document.write("<b style='color: #66ffcc; font-size:25px;'>Grupo: 605</b>");
  document.write("<br><br><br>");

  //empieza la recopilación de Datos
  var a = prompt("Introduce un número: ");
  var b = prompt("Introduce otro número: ");

  document.write("El número " + a + " es igual a " + b + ": ");
  if (a == b) {
    document.write(" Es verdadero <br><br>");
  }
  else {
    document.write(" Es falso <br><br>");
  }
  if (a%2) {
    document.write("El número " + a + " Es impar <br><br>");
  }
  else {
    document.write("El número " + a + " Es par <br><br>");
  }
  if (b%2) {
    document.write("El número " + b + " Es impar <br><br>");
  }
  else {
    document.write("El número " + b + " Es par <br><br>");
  }
}
