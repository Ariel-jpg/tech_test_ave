# Problema 1
"Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *."

## Solución
Se usó la identidad de la mutiliplicación que establece que una multiplicación es una suma repetida una cantidad determinada de veces. 
Formalmente: ```Sean x e y dos números. x * y = Σ(de x, y veces) = Σ(de y, x veces). (x * y = Sumatoria desde 1 hasta y de x = Sumatoria desde 1 hasta x de y)```

## Implementación
La implementación de la solución se hizo con un for que emula el operador de sumatoria. La misma contempla todos los casos de multiplicación en los número enteros y sus combinaciones posibles: { (x, y) ; (-x, y) ; (x, -y) ; (-x, -y) }. Además, se dejaron dos tests, uno controlado que prueba combinaciones específicas y otro no controlado que prueba con números positivos hasta el 10.000 generados de forma aleatoria.

## Ejecución y visualización
1 - Se debe tener instalado node.js
2 - Se debe ejecutar el siguiente comando estando dentro de la carpeta "item_one":
```sh
node .\itemOne.js
```