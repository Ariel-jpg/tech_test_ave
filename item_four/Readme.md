# Problema 1
"Dado un arreglo de números (cualquiera) sacar la siguiente información:"
Suma total de pokemones por tipo, debe recibir el tipo en string.  
● Debe tener al menos 16 caracteres.  
● Debe tener letras minúsculas y mayúsculas.  
● No puede tener 2 letras iguales consecutivas.  
● Debe contener al menos 4 números.  
● No puede tener 2 números iguales consecutivos.  
● Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.  
● No se puede usar el número 0.  
● No se puede colocar espacios.  

## Solución
Se optó por la solución más eficiente, corriendo en O(n) = n (tiempo lineal).  
Se usó la fórmula para calcular porcentajes:  
```Sea N el valor que representa el 100% y X el valor que representa un porcentaje particular y P el porcentaje particular en sí mismo entonces: 1 = (X * 100) / (N * P) ```

## Implementación
La solución utiliza el forEach de los arrays y dentro de él realiza 5 operaciones por cada número junto otras operaciones de declaración, asiganción y formateo, dejando un tiempo T(n) = 5n + 8.

## Ejecución y visualización
1 - Se debe tener instalado node.js  
2 - Se debe ejecutar el siguiente comando estando dentro de la carpeta "item_four":
```sh
node .\itemFour.js
```
