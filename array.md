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

### array property and methods
- `array.length`: returns number of elements in array
    - `var last = array.length[array.length - 1]`: access the last array element
    
- `array.sort()`: sorts arrays in abc order