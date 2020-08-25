# objects:
- a car has properties like weight and color
- a cary also has methods like start and stop
- all cars can hae the same properties, but different values for each car
- all cars have the same methods but are performed at different tiems
- Objects are variables too. But objects can contain many values.
- This code assigns many values (Fiat, 500, white) to a variable named car:
    - `var car = {type:"Fiat", model:"500", color:"white"};` 
    - name:values // called properties
    - `car.type car.model car.color`
    - `car['type'] car['model'] car['color']`
- JavaScript objects are containers for named values called properties or methods.
- ```var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  id: 0684504
};```

- Methods are actions that can be performed on objects.
- Methods are stored in properties as function definitions.
- Do Not Declare Strings, Numbers, and Booleans as Objects!


## this keyword
- in a function definition. `this` refers to the 'owner' of the function `person`
- `this.firstName means the firstName property of this object.`

### accessing object methods
- `objectName.methodName()`
- `name = person.fullName`();

