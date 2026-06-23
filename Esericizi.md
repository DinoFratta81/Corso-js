# Come risolvere bene le arrow function

**Esempio:
function somma(a, b) {
  return a + b;
}**
*Passo 1 – Tolgo la parola function:*

*Diventa una costante a cui assegno una funzione:*

``` javascript
const somma = function(a, b) {
  return a + b;
};
```

*Passo 2 – Trasformo function in arrow:*

``` javascript

const somma = (a, b) => {
  return a + b;
};

```

*Passo 3 – Uso il return implicito (una sola espressione):*

``` javascript
const somma = (a, b) => a + b;

```
