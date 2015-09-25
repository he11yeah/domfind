# domfind
an extremely light library for getting and manipulating DOM elements

### How it works
Domfind currently uses document.querySelectAll() to retrieve elements by selector. Call the function with css selectors:

```js

df("#container").style.backgroundColor = #F00;

df(".green").forEach(function(element) {
        element.style.backgroundColor: yellow;
    });

```

By default, Domfind moves the retrieved elements into an array and returns the array rather than a NodeList. I plan to add a direct passthrough as well. As it is, this only handles dead elements, so if you need to manipulate elements that you have *dynamically* created, then you'll have to still get them longhand for now if this is the only library you are using. The advantage as it stands is that the minified library is only 127 characters in length. 
