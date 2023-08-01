# Problema 1
Se desea crear un validador para la contraseña de un sitio web, pero esta debe ser muy segura, para ello el cliente solicita los siguientes requerimientos para el password:
● Debe tener al menos 16 caracteres.
● Debe tener letras minúsculas y mayúsculas.
● No puede tener 2 letras iguales consecutivas.
● Debe contener al menos 4 números.
● No puede tener 2 números iguales consecutivos.
● Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de
ellos puede repetirse en ninguna posición y además los caracteres no pueden
estar juntos.
● No se puede usar el número 0.
● No se puede colocar espacios.

Nota: No debe usar expresión regular.

## Solución
La forma de la solución va enfocada a la eficiencia computacional al realizar una sola iteración que comprueba las distintas condiciones. Teniendo en cuenta que la eficiencia del método ```includes``` es T(n) = O(n) = log(n), entonces la complejidad del algoritmo es T(n) = O(n) = n + 2log(n) + 10

## Ejecución y visualización
1 - Se debe tener instalado node.js
2 - Se debe ejecutar el siguiente comando estando dentro de la carpeta "item_three":
```sh
node .\itemThree.js
```