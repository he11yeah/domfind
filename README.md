# domfind
a very light library for getting and manipulating DOM elements

### How it works
Domfind uses native document methods to retrieve elements by selector. Call the function with css selectors:

```js

df("#container").style.backgroundColor = #F00;

df(".green").forEach(function(element) {
        element.style.backgroundColor: yellow;
    });

```

By default, Domfind moves the retrieved elements into an array and returns the array rather than a NodeList. If only one matching element is found, the element is directly returned. If you wish to receive it as an array of one, add true as a second parameter, ie.:
```js

df('#container', true)

```

