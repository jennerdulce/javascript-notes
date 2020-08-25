# javascript-notes

- different ways to display messages:
    - `.innerHTML`: writing into an HTML element
    - `document.write()`: HTML output
    - `window.alert()`: alert box
    - `console.log()`: into the terminal

- `document.getElementById("id")` accesses an HTML element

- Using `innerHTML`
    - defines the HTML content
    - changing the innerHTML property of an HTML element is a common way to display data

- `document.write()`
    - for testing purposes only, it is conveninet to use `document.write()`
    - will output where ever the script tag is

- `console.log()`
    - used for debugging
    - do not forget to write a label
    - `console.log('label', x)

- `window.print()`
    - opens up print for the current page


- Literals: `console.log('this is a literal')`
- Variable: `var x = 'this is a variable`
    - `console.log(x)`

- variables can start with:
    - $, _, or A a Z z


- arrays
    - `var cars = ['bmw', 'honda', 'toyota']`
    - `console.log(cars[0])`

- objects
    - ```var person = {
        firstName: 'jenner',
        lastName: 'dulce',
        age: 27;```
    }
    - `console.log(person.firstName)`

- var vs let vs const
- var is global
- let and const are block
    - see youtube video in Javascript [Guide](https://www.youtube.com/watch?v=dzEieWaOJE0&t=14s)
    - [Hoisting](https://www.youtube.com/watch?v=j-9_15QBW2s)

- ``` typeof undefined   // undefined
    typeof null        // object

    null === undefined // false
    nule == underfined // true ```


### functions:
- block of code deigned to perform a particular task
- function is executed when is invoked/called
    - clicks a button
    - called from javascript code
    - automatically

