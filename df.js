function df(q, it) {
    'use strict';
    var i, newArr = [], qu = document.querySelectorAll(q), selector = q.slice(1), iterable = false;
    if (it) {
        iterable = true;
    }
    console.log("selector: " + selector);

    if (qu[0] === "." && q.search(/\s/g) === -1) {
        console.log('class');
        qu = document.getElementsByClassName(selector);
        if (qu.length > 1) {
            console.log(qu);
            for (i = 0; i < qu.length; i += 1) {
                newArr[i] = qu[i];
            }
            return newArr;
        } else {
            if (iterable) {
                return qu;
            }
            return qu[0];
        }
    } else if (qu[0] === "#" && q.search(/\s/g) === -1) {
        console.log("id");
        return document.getElementById(selector);
    } else {
        if (q.search(/\s/g) === -1) {
            console.log("No white space, using tag name");
            qu = document.getElementsByTagName(q);
            if (qu.length > 1) {
                for (i = 0; i < qu.length; i += 1) {
                    newArr[i] = qu[i];
                }
                return newArr;
            }
            if (iterable) {
                return qu;
            }
            return qu[0];
        }
        console.log("Using querySelectorAll");
        qu = document.querySelectorAll(q);
        if (qu.length > 1) {
            for (i = 0; i < qu.length; i += 1) {
                newArr[i] = qu[i];
            }
            return newArr;
        }
        if (iterable) {
            return qu;
        }
        return qu[0];
    }
}
