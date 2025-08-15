ONE-CHALLENGE-AMIGO SECRETO
Aqui dejare un pequeño resumen de lo que fue el proceso.


1. La lista de amigos
let listaDeAmigos = [];

¿Qué es?: Esta es una variable global, que es un array (una lista) que guarda todos los nombres que añadas al juego. Todas las funciones pueden acceder a ella para agregar, sortear o eliminar nombres.

2. agregarAmigo()
¿Qué hace?: Esta función se activa cuando haces clic en el botón "Añadir". Su trabajo es tomar el nombre del campo de texto y agregarlo a la lista de amigos.

- Validaciones: Antes de agregar un nombre, el código hace dos comprobaciones importantes:

 - Verifica si el nombre tiene menos de dos letras (nombre.length < 2).

 - Verifica si el nombre ya está en la lista (listaDeAmigos.includes(nombre)).

 - Si alguna de estas condiciones es verdadera, muestra una alerta y detiene la función (return).

 - Manipulación de la lista: Si el nombre es válido, lo agrega al array (listaDeAmigos.push(nombre)) y luego crea un nuevo elemento de lista (<li>) en el HTML para mostrarlo en la pantalla.

3. sortearAmigo()
¿Qué hace?: Esta función es el corazón del juego. Se activa al hacer clic en "Sortear amigo" y elige un ganador al azar.

 - Verificación: Primero, se asegura de que haya al menos 3 amigos en la lista (listaDeAmigos.length < 3).

 - Algoritmo de sorteo: Usa el método Math.random() para obtener un número aleatorio entre 0 y el número de amigos. Luego, Math.floor() se encarga de redondear ese número para obtener un índice válido y así seleccionar un amigo del array.

 - Muestra el resultado: Finalmente, toma el nombre del amigo ganador y lo muestra en el elemento HTML del resultado.

4. reiniciarJuego()
5. ¿Qué hace?: Esta función se encarga de restablecer el juego a su estado inicial.

Pasos:

 - Vacía el array listaDeAmigos para que no contenga ningún nombre.

 - Limpia el campo de texto.

 - Borra todos los elementos de la lista de amigos en el HTML.

 - Borra el resultado del sorteo en la pantalla.

5. quitarAmigo()
¿Qué hace?: Esta es una función extra muy útil que te permite eliminar a un amigo de la lista si te equivocaste.

Proceso:

 - Busca el nombre que quieres eliminar en el array (listaDeAmigos.indexOf(nombre)).

 - Si lo encuentra, lo elimina del array (listaDeAmigos.splice(indice, 1)).

 - Después de eliminarlo, vuelve a dibujar toda la lista en el HTML con los nombres restantes y la numeración actualizada.
