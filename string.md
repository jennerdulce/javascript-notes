- `.length`
- `indexOf('word that you want to find', #)`
    - finds first index occurance of the string
- `search()` is similar to `indexOf()` however, search cannot accept a second position argument
- `lastIndexOf('word that you want to find', #)`
    - '#' = what index to start the search

### extracting string parts
- 3 ways:
    - `slice(start, end)`
    - `substring(start, end)`
        - similar to `slice()` but cannot accept negatives
    - `substr(start, length)` 
        - similar to `slice()` but second number specifices how many additional characters you want

### replacing string content
- `replace()`: replaces a specific value with another value in a string
    - replaces only the first match
    - is case sensitive
    - `replace(/VARIABLE/i, 'newvariable')`
        - !case sensitive
    - `replace(/variable/g, 'newvariable')`
        - replaces ALL matches

### upper and lower
- `stringvar.toUpperCase()`
- `stringvar.toLowerCase()`

### extracting string characters
- `charAt(index)`
    - index = specific position you want
- `charCodeAt(index)` 
    - returns unicode
    - property access
    - str[index]

### extra methods
- `somestring.trim()`: removes white space

### convert string to an array
- `txt.split(',')` split on commas
- `txt.split(' ')` split on spaces
- `txt.split('|')` split on pipe
