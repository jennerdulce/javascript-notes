- can create arrays in 2 different ways:
    - `var list1 = ['a', 'b', 'c']`
    - `var list2 = new Array(1, 2, 3)`
- arrays are special type of objects
    - `typeof` returns 'object' for arrays
- you can have all data types in an array
    - ```
    myArray[0] = Date.now;
    myArray[1] = myFunction;
    myArray[2] = myCars;```

# array property and methods
- `array.length`: returns number of elements in array
    - `var last = array.length[array.length - 1]`: access the last array element

- `array.sort()`: sorts arrays in abc order


# adding array elements
- `array.push('elementname')`
    - adds to the end of the list.
- `array[array.length] = 'element name'`
- you can start out with an empty list `var arraylist = []`
    - and then add after `arraylist.push()` or `arraylist[0] = element`
- `typeof` returns an array as an object
    - use `Array.isArray(arraylist)` returns true
    - `fruits instanceof Array` returns true

## object vs array
- array use number index   
    - use objects when you want element names to be numbers
- object use name index
    - use objects when you want element names to be strings

# array methods

- `.toString()`
    - converts array to string
    - using `.toString()` only separates words with comma and no spaces.
    - you have more control by using `join()`
- `.join(' separation here')`
    - you are able to control separation better using `.join()`

## adding or removing

- `.unshift('')`: adds an element to the beginning of an array
    - also returns NEW ARRAY length if writing or console logging
- `.shift()`: removes the first element of an array
    - can set a variable to removed element

- `.push('')`: adds element to the end of the list
    - also returns NEW ARRAY length if writing or console logging
- `.pop()`: removes the end element of an array
    - can set a variable to removed element

- `.splice(#, #, 'string', 'string')`
    - first parameter defines the position where new elements should be added in
    - second parameter defines how many elements should be REMOVED 
        - elemets removed are started after where the first index was added
    - rest of the parameters defines new elements that will be added to the list
    - splicing adds new elements to an array while returning the deleted elements (if any)
        - able to remove elements in the middle of an array
        - `var colors = ['red', 'blue', 'green', 'yellow']`
        -  `colors.splice(2, 1)` removes 1 element starting at the [2] index. in this case, the element being removed is green

## merging concatenating arrays
- `concat()` combinds 2 arrays
    - `array1.concat(array2)
    - `array1.concat('elementname')`
        - can also add individual elements like push or shift

## slice
- `slice()` slices out a piece of an array into a NEW ARRAY
    - does not remove any elements from the source array.
    - slice can take 2 arguments
    - `slice(1, 3)` selects elements for the start of the argument and up to (not including) the end argument
    - `slice(2)` if second argument omitted, will slice the rest of the array


# Sorting arrays

## sorting strings
- `sort()`
- `reverse()`
    - its good to `sort()` first and then `reverse()` to get elements in proper order

## sorting numbers
-  use compare function
```
array.sort(function(a, b) {
    return a - b
})

array.sort(function(a, b) {
    return b - a
})
```

- using `.sort() for an array of numbers will see errors`


## arrange in a NUMBERS random order
- ```array.sort(function(a, b) {
    return 0.5 - Math.random()
})```