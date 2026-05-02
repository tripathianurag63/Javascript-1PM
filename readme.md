# JavaScript Fundamentals: Detailed Notes

## 1. Printing Statements

JavaScript provides several ways to output data. The most common and recommended method is `console.log()`.

### `console.log()`

- **Usage**: Prints messages to the browser's console (Developer Tools → Console).
- **Most used** for debugging and logging information during development.

```javascript
console.log("Hello, World!");     // Output: Hello, World!
console.log(42);                  // Output: 42
console.log(true);                // Output: true
console.log([1, 2, 3]);           // Output: [1, 2, 3]
console.log({ name: "Alice" });   // Output: { name: "Alice" }
```

### `document.write()` and `document.writeln()` (Deprecated)

- **`document.write()`**: Writes a string of text to the document stream.
- **`document.writeln()`**: Same as `write()` but adds a newline character (`\n`).
- ⚠️ **Deprecated**: These methods are considered outdated and should be avoided.
  - They can overwrite the entire page if used after the page has loaded.
  - Not recommended for modern web development.

```javascript
// Avoid using these (deprecated)
document.write("Hello");
document.writeln("Byee");
```

> **Best Practice**: Always use `console.log()` for debugging. For rendering content to the webpage, manipulate the DOM instead of using `document.write`.

---

## 2. Tokens

**Token** = Smallest individual unit in a programming language.  
JavaScript has four main types of tokens:

| Token Type     | Description                                                                 | Example                          |
|----------------|-----------------------------------------------------------------------------|----------------------------------|
| **Keywords**   | Reserved words with a predefined meaning. Cannot be used as identifiers.    | `let`, `var`, `const`, `for`, `if`, `else`, `function`, `return` |
| **Identifiers**| Names given to variables, functions, classes, etc. Must follow naming rules.| `myVariable`, `calculateSum`, `Person`, `_private` |
| **Literals**   | Fixed values that appear directly in the code.                              | `42`, `"Hello"`, `true`, `null`, `[1,2,3]`, `{x:5}` |
| **Operators**  | Symbols that perform operations on operands.                                | `+`, `-`, `*`, `/`, `=`, `==`, `===`, `&&`, `!` |

### Keywords Example
```javascript
let age = 25;          // "let" is a keyword
if (age > 18) {        // "if" and "else" are keywords
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Identifiers Example
```javascript
let userName = "John";       // "userName" is an identifier
function calculateTotal() {} // "calculateTotal" is an identifier
class Car {}                 // "Car" is an identifier
```

### Literals Example
```javascript
let num = 100;         // 100 is a numeric literal
let str = "Hello";     // "Hello" is a string literal
let isActive = true;   // true is a boolean literal
let data = null;       // null is a literal
let arr = [1, 2, 3];   // [1,2,3] is an array literal
let obj = { a: 1 };    // { a: 1 } is an object literal
```

### Operators Example
```javascript
let x = 10;            // = assignment operator
let sum = x + 5;       // + arithmetic operator
let isEqual = (x === 10); // === strict equality operator
let isTrue = (x > 5 && x < 20); // && logical operator
```

---

## 3. Data Types

JavaScript data types are categorised into **Primitive** and **Non-Primitive** (also called Reference types).

### 3.1 Primitive Data Types

- **Immutable** – Cannot be changed after creation.
- **Call by Value** – When assigned to another variable or passed to a function, a copy of the actual value is created.

| Type        | Description                                                  | Example                              |
|-------------|--------------------------------------------------------------|--------------------------------------|
| **Number**  | Integers and floating-point numbers. Also includes `Infinity`, `-Infinity`, `NaN`. | `42`, `3.14`, `-5`, `NaN` |
| **String**  | Sequence of characters (text). Can use `'`, `"`, or backticks. | `"Hello"`, `'World'`, `` `Template` `` |
| **Boolean** | Logical values – `true` or `false`.                          | `true`, `false`                      |
| **Undefined**| Variable declared but not assigned a value.                 | `let x;  // x is undefined`          |
| **Null**    | Represents the intentional absence of any object value.     | `let y = null;`                      |
| **BigInt**  | For integers larger than `2^53 - 1`. Appended with `n`.      | `9007199254740991n`                  |
| **Symbol**  | Unique and immutable primitive, often used as object keys.   | `let sym = Symbol("id");`            |

#### Examples
```javascript
let age = 30;               // number
let name = "Alice";         // string
let isLogged = false;       // boolean
let address;                // undefined
let phone = null;           // null
let bigNumber = 12345678901234567890n; // bigint
let uniqueKey = Symbol("key"); // symbol

console.log(typeof age);    // "number"
console.log(typeof name);   // "string"
console.log(typeof isLogged); // "boolean"
console.log(typeof address); // "undefined"
console.log(typeof phone);   // "object"  (historical bug in JS)
console.log(typeof bigNumber); // "bigint"
console.log(typeof uniqueKey); // "symbol"
```

> **Note**: `typeof null` returns `"object"` – this is a well-known quirk in JavaScript that has never been fixed for backward compatibility.

### 3.2 Non-Primitive Data Types

- **Mutable** – Their values can be changed after creation.
- **Call by Reference** – When assigned or passed, the reference (memory address) is copied, so changes affect the original data.

| Type       | Description                                            | Example                                |
|------------|--------------------------------------------------------|----------------------------------------|
| **Object** | Collection of key-value pairs.                         | `{ name: "John", age: 25 }`            |
| **Array**  | Ordered list of values (indexed collection). Actually a special type of object. | `[1, 2, 3]`, `["a", "b"]` |
| **Function**| Reusable block of code. Also a special object type.   | `function greet() { console.log("Hi"); }` |

#### Examples
```javascript
// Object
let person = {
    firstName: "Jane",
    lastName: "Doe"
};

// Array
let colors = ["red", "green", "blue"];

// Function
function sayHello() {
    return "Hello!";
}

console.log(typeof person);   // "object"
console.log(typeof colors);   // "object"
console.log(typeof sayHello); // "function"
```

---

## 4. Mutable vs Immutable (with examples)

### Immutable (Primitive Types)

Primitive values cannot be changed. Any operation that appears to modify a primitive actually creates a new value.

#### Example: String (immutable)
```javascript
let str = "Hello";
str[0] = "A";     // Attempt to change first character
console.log(str); // Output: "Hello"  (unchanged)

// But we can reassign the variable to a new string:
str = "World";
console.log(str); // Output: "World"
```

### Mutable (Non-Primitive Types)

Objects, arrays, and functions can be modified directly. Changes made through one reference affect all references.

#### Example: Array (mutable)
```javascript
let arr = [10, 20, 30];
arr[0] = 100;     // Modifies the first element
console.log(arr); // Output: [100, 20, 30]  (changed)
```

#### Example: Object (mutable)
```javascript
let user = { name: "Alice", age: 25 };
user.age = 26;               // Modifies the property
console.log(user.age);       // Output: 26

let anotherUser = user;      // anotherUser references the same object
anotherUser.name = "Bob";
console.log(user.name);      // Output: "Bob" (original also changed)
```

### Call by Value vs Call by Reference

| Type          | Behaviour                                                                 |
|---------------|---------------------------------------------------------------------------|
| Primitive     | When assigned to a new variable, the **value** is copied. Changes to the new variable do not affect the original. |
| Non-primitive | When assigned to a new variable, the **reference** is copied. Changes via the new variable affect the original object. |

#### Call by Value (Primitive)
```javascript
let a = 10;
let b = a;      // b gets a copy of the value 10
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20
```

#### Call by Reference (Non-primitive)
```javascript
let obj1 = { value: 10 };
let obj2 = obj1;   // obj2 gets a reference to obj1
obj2.value = 20;
console.log(obj1.value); // 20 (original changed)
console.log(obj2.value); // 20
```

---

## Summary Table

| Feature           | Primitive                        | Non-Primitive                     |
|-------------------|----------------------------------|-----------------------------------|
| Mutability        | Immutable                        | Mutable                           |
| Assignment        | Call by value (copy)             | Call by reference (address copy)  |
| Stored in         | Stack (actual value)             | Heap (reference on stack)         |
| Examples          | number, string, boolean, etc.    | object, array, function           |
| `typeof` result   | `"number"`, `"string"`, etc.     | `"object"` (except function)      |

> **Remember**:  
> - Use `console.log()` for printing/debugging.  
> - Tokens are the building blocks of code.  
> - Primitive = immutable, copy by value.  
> - Non-primitive = mutable, copy by reference.



# JavaScript Data Types 

This document expands on the concepts illustrated in the provided code snippet, covering primitive and non‑primitive data types, common interview questions, and important nuances like `typeof` quirks and equality comparison.

---

## 1. Primitive Data Types

Primitive types are **immutable** and stored **by value**. JavaScript has seven primitive types:

| Type       | Description                                                       | Example                 |
|------------|-------------------------------------------------------------------|-------------------------|
| `number`   | Integers and floating‑point numbers, also `Infinity`, `-Infinity`, `NaN` | `10`, `3.14`, `-5`      |
| `string`   | Textual data, enclosed in quotes or backticks                     | `"Hello"`, `'World'`    |
| `boolean`  | Logical values: `true` or `false`                                 | `true`, `false`         |
| `undefined`| Variable declared but not assigned a value – default by JS engine | `let x;`                |
| `null`     | Intentional absence of any object value                           | `let y = null;`         |
| `bigint`   | Integers larger than `2⁵³–1` (appended with `n`)                  | `9007199254740991n`     |
| `symbol`   | Unique, immutable identifiers, often used as object keys          | `Symbol("id")`          |

### 1.1 Number
```javascript
let n1 = 10.9;
console.log(n1);        // 10.9
console.log(typeof n1); // "number"
```

- All numbers (integer, float, negative) are of type `number`.
- Special numeric values: `NaN` (Not‑a‑Number), `Infinity`, `-Infinity`.

### 1.2 String
```javascript
let n2 = "Hello world";
console.log(n2);        // Hello world
console.log(typeof n2); // "string"
```

- Can use double quotes `" "`, single quotes `' '`, or backticks `` ` ` `` (template literals).

### 1.3 Boolean
```javascript
let n3 = true;
console.log(n3);        // true
console.log(typeof n3); // "boolean"
```

- Only two values: `true` and `false`.

### 1.4 Undefined
```javascript
let n4;
console.log(n4);        // undefined (default value assigned by JS engine)
console.log(typeof n4); // "undefined"
```

- A variable that has been declared but **not initialised** gets the value `undefined`.
- Its type is also `"undefined"`.

#### 🔹 Interview Question: Difference between `undefined` and `not defined`

| Term          | Meaning                                                                                     | Example                          |
|---------------|---------------------------------------------------------------------------------------------|----------------------------------|
| `undefined`   | A variable exists (was declared) but has **not been assigned a value**. The JS engine gives it the literal `undefined`. | `let x; console.log(x); // undefined` |
| `not defined` | A **ReferenceError** that occurs when you try to access a variable that was **never declared**. | `console.log(y); // ReferenceError: y is not defined` |

**Key point:**  
- `undefined` is a **value** (and a type) that the engine automatically assigns.  
- `not defined` is an **error** message, not a value.

### 1.5 Null
```javascript
let n5 = null;
console.log(n5);        // null
console.log(typeof n5); // "object"   (historical bug in JS)
```

- `null` represents “empty”, “nothing”, or “value unknown” – used intentionally by the developer.
- ⚠️ **Quirk**: `typeof null` returns `"object"` (this is a famous bug that has never been fixed for backward compatibility).

#### 🔹 Interview Question: Difference between `null` and `undefined`

| Feature        | `null`                                   | `undefined`                              |
|----------------|------------------------------------------|------------------------------------------|
| **Meaning**    | Intentional absence of any object value. | Variable declared but not yet assigned.  |
| **Who sets it**| Developer explicitly assigns it.         | JavaScript engine automatically assigns it. |
| **Type**       | `"object"` (bug)                         | `"undefined"`                            |
| **Equality**   | `null == undefined` → `true`<br>`null === undefined` → `false` | – |

**Example:**
```javascript
let a = null;      // developer says: "this is empty"
let b;             // engine says: "b has no value yet"
console.log(a == b);  // true (loose equality)
console.log(a === b); // false (strict equality)
```

### 1.6 BigInt
```javascript
let n6 = 9n;
console.log(n6);        // 9n
console.log(typeof n6); // "bigint"
```

- Used for integers beyond `Number.MAX_SAFE_INTEGER` (`2⁵³ – 1`).
- Created by appending `n` to an integer literal or calling `BigInt()`.

### 1.7 Symbol
```javascript
let n7 = Symbol("Hello");
let n8 = Symbol("Hello");
console.log(n7);        // Symbol(Hello)
console.log(n8);        // Symbol(Hello)
console.log(typeof n7); // "symbol"

console.log(n7 == n8);  // false  (loose comparison)
console.log(n7 === n8); // false  (strict comparison)
```

- Every symbol is **guaranteed to be unique**, even if they have the same description.
- Useful for object property keys that must not collide.

---

## 2. Typeof Nuances

- `typeof typeof n1` → `"string"` because `typeof n1` returns `"number"` (a string), and `typeof` of a string is `"string"`.

```javascript
console.log(typeof typeof n1); // "string"
```

- Special case: `typeof null === "object"` (as shown above).

---

## 3. Equality Comparisons: `==` vs `===`

| Operator | Name               | Behaviour                                                                 |
|----------|--------------------|---------------------------------------------------------------------------|
| `==`     | Loose equality     | Compares values **after type coercion** (converts operands to same type). |
| `===`    | Strict equality    | Compares both **value and type** – no coercion.                           |

**Examples:**
```javascript
console.log(10 == "10");   // true  (string "10" is coerced to number 10)
console.log(10 === "10");  // false (number vs string)
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

> **Best practice:** Always prefer `===` unless you explicitly need type coercion.

---

## 4. Non‑Primitive Data Types (Reference Types)

Non‑primitive types are **mutable** and **stored by reference**. They include:

- **Array**
- **Object**
- **Function**

### 4.1 Array
```javascript
let arr = [10, 20, 30];
console.log(arr);        // [10, 20, 30]
console.log(typeof arr); // "object"  (arrays are a subtype of object)
```

- Ordered, indexed collection of values.
- Can hold mixed types: `[1, "hello", true, null]`.

### 4.2 Object
```javascript
let obj = { name: "John", age: 20 };
console.log(obj);        // { name: "John", age: 20 }
console.log(typeof obj); // "object"
```

- Collection of key‑value pairs (properties).
- Keys are strings (or Symbols), values can be any type.

### 4.3 Function
```javascript
function demo() {
  console.log("I am demo");
}
demo();                  // "I am demo"
console.log(typeof demo); // "function"
```

- Functions are “callable” objects.
- They can be assigned to variables, passed as arguments, etc.

---

## 5. Quick Recap – Comparison Table

| Type         | Example               | `typeof` result | Mutable? | Passed by |
|--------------|-----------------------|----------------|----------|-----------|
| `number`     | `10`                  | `"number"`     | No       | Value     |
| `string`     | `"hi"`                | `"string"`     | No       | Value     |
| `boolean`    | `true`                | `"boolean"`    | No       | Value     |
| `undefined`  | `let x;`              | `"undefined"`  | No       | Value     |
| `null`       | `null`                | `"object"`     | No       | Value     |
| `bigint`     | `100n`                | `"bigint"`     | No       | Value     |
| `symbol`     | `Symbol("id")`        | `"symbol"`     | No       | Value     |
| `object`     | `{ a: 1 }`            | `"object"`     | Yes      | Reference |
| `array`      | `[1, 2]`              | `"object"`     | Yes      | Reference |
| `function`   | `function() {}`       | `"function"`   | Yes      | Reference |

---

## 6. Important Takeaways for Interviews

1. **`undefined` vs `not defined`**  
   - `undefined`: variable exists but has no value.  
   - `not defined`: variable was never declared → ReferenceError.

2. **`null` vs `undefined`**  
   - `null` is an assignment value (intentional empty).  
   - `undefined` is the default for uninitialised variables.  
   - `typeof null` returns `"object"` (bug).  
   - Loose equality: `null == undefined` → `true`.  
   - Strict equality: `null === undefined` → `false`.

3. **`==` vs `===`**  
   - `==` allows type coercion (often leads to unexpected results).  
   - `===` checks both value and type – use this by default.

4. **`typeof` quirks**  
   - `typeof null` → `"object"`  
   - `typeof function(){}` → `"function"` (even though functions are objects)

5. **Symbol uniqueness**  
   - `Symbol("Hello") !== Symbol("Hello")` even with the same description.

6. **BigInt**  
   - Use for very large integers; cannot mix with `Number` without explicit conversion.

---

## 7. Complete Code Example (from your snippet)

```javascript
// PRIMITIVE DATA TYPES
var n1 = 10.9;
console.log(n1); // 10.9
console.log(typeof n1); // number
console.log(typeof typeof n1); // string

var n2 = "Hello world";
console.log(n2); // Hello world
console.log(typeof n2); // string

var n3 = true;
console.log(n3); // true
console.log(typeof n3); // boolean

var n4;
console.log(n4); // undefined
console.log(typeof n4); // undefined

// undefined vs not defined
var x;
console.log(x); // undefined
// console.log(y); // ReferenceError: y is not defined

// null vs undefined
var n5 = null;
console.log(n5); // null
console.log(typeof n5); // object

// BigInt
var n6 = 9n;
console.log(n6); // 9n
console.log(typeof n6); // bigint

// Symbol
var n7 = Symbol("Hello");
var n8 = Symbol("Hello");
console.log(n7); // Symbol(Hello)
console.log(n8); // Symbol(Hello)
console.log(typeof n7); // symbol
console.log(n7 == n8); // false
console.log(n7 === n8); // false

// Equality comparisons
console.log(10 == "10"); // true
console.log(10 === "10"); // false

// NON-PRIMITIVE DATA TYPES
var arr = [10, 20, 30];
console.log(arr); // [10,20,30]

var obj = { name: "John", age: 20 };
console.log(obj);

function demo() {
  console.log("I am demo");
}
demo();
```



# JavaScript Variables: Declaration, Hoisting, Scopes, and TDZ

This document covers the three ways to create variables in JavaScript (`var`, `let`, `const`), explains hoisting and the Temporal Dead Zone (TDZ), and dives into the different types of scopes (global, local, block, function, script).

---

## 1. Three Ways to Declare a Variable

| Keyword | Re‑declare? | Re‑assign? | Scope             | Hoisting Behaviour                     |
|---------|-------------|------------|-------------------|-----------------------------------------|
| `var`   | ✅ Yes       | ✅ Yes      | Function / Global | Hoisted and initialised with `undefined` |
| `let`   | ❌ No        | ✅ Yes      | Block             | Hoisted but **not initialised** (TDZ)   |
| `const` | ❌ No        | ❌ No       | Block             | Hoisted but **not initialised** (TDZ); must be assigned at declaration |

### 1.1 `var` – The Old Way

```javascript
var a1;
console.log(a1);   // undefined (hoisted, initialised with undefined)

a1 = 10;
console.log(a1);   // 10

var b1 = 20;
console.log(b1);   // 20

var b1 = 40;       // ✅ allowed: re‑declaration
console.log(b1);   // 40
```

- Can be **re‑declared** any number of times in the same scope.
- Can be used **before** declaration (due to hoisting + `undefined` initialisation).

### 1.2 `let` – Modern, Mutable

```javascript
let x1;
console.log(x1);   // undefined (hoisted, but TDZ applies before this line? Wait – no TDZ because declaration is right above)

x1 = 100;
console.log(x1);   // 100

let x2 = 200;
console.log(x2);   // 200

// let x2 = 100;   // ❌ SyntaxError: Identifier 'x2' has already been declared

x2 = 900;          // ✅ allowed: re‑assignment
console.log(x2);   // 900
```

- **Cannot be re‑declared** in the same scope.
- Can be **re‑assigned**.
- Block‑scoped.

### 1.3 `const` – Constant (Immutable Binding)

```javascript
const data = "John doe";
// const data = "Jane";   // ❌ re‑declaration not allowed
// data = "Jane";         // ❌ re‑assignment not allowed
```

- **Must be initialised** at the time of declaration.
- Neither re‑declaration nor re‑assignment is allowed.
- The value itself may still be mutable if it’s an object/array (the **binding** is constant, not the content).

---

## 2. Hoisting

**Hoisting** is JavaScript's default behaviour of moving **declarations** to the top of their containing scope during the compilation phase. Only the declaration is hoisted, not the initialisation (except for `var` which gets a `undefined` initialisation).

### Example with `var`

```javascript
console.log(a);   // undefined (not an error!)
var a = 10;
console.log(a);   // 10
```

**What really happens (hoisting):**
```javascript
var a;            // declaration hoisted + initialised with undefined
console.log(a);   // undefined
a = 10;           // assignment stays in place
console.log(a);   // 10
```

### Example with `let` / `const`

```javascript
// console.log(b);   // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);     // 20
```

- `let` and `const` are **hoisted**, but they are **not initialised**.
- Accessing them before the declaration line results in a `ReferenceError`.
- The period from entering scope to the actual declaration is called the **Temporal Dead Zone (TDZ)**.

---

## 3. Temporal Dead Zone (TDZ)

The TDZ is the time between entering a scope and the point where `let` or `const` is declared. During this period, the variable exists but cannot be accessed.

```javascript
// Start of TDZ for `b`
// console.log(b); // ReferenceError
let b = 20;       // End of TDZ for `b`
console.log(b);   // 20
```

- Only applies to `let` and `const`.
- `var` has **no TDZ** because it is initialised with `undefined` immediately.

> **Interview tip:** TDZ prevents you from using a variable before its declaration, which helps avoid many bugs common with `var`.

---

## 4. Scopes in JavaScript (5 Types)

A **scope** defines where variables are accessible. JavaScript has the following scopes:

| Scope Type       | Description                                                                 | Example                                     |
|------------------|-----------------------------------------------------------------------------|---------------------------------------------|
| **Global Scope** | Variables declared outside any function or block. Accessible everywhere.    | `var a = 10;` (attached to `window` if in browser) |
| **Script Scope** | Variables declared with `let`/`const` at the top level (not attached to `window`). Also global but module‑aware. | `let b = 20;` in a script |
| **Function Scope**| Variables declared inside a function using `var`, `let`, or `const`. Accessible only inside that function. | `function demo() { var x = 100; }` |
| **Block Scope**  | Variables declared inside `{ ... }` with `let` or `const`. Not accessible outside the block. | `if (true) { let y = 200; }` |
| **Module Scope** | Variables inside ES6 modules (each file is a module). Not shown in snippet but important. | `export const z = 5;` |

> Note: The snippet distinguishes between **global variable** (using `var` at top-level) and **script scope** (top-level `let`/`const`). Both are “global” in the sense of being accessible anywhere, but `var` attaches to the global object (`window` in browsers), while `let`/`const` do not.

### 4.1 Global Variables (with `var`)

```javascript
var a = 10;    // global variable → attached to global object (e.g., window)
console.log(a); // 10
```

- Accessible anywhere, even inside blocks and functions.
- In browsers, becomes a property of `window`.

### 4.2 Script Scope (Top‑level `let`/`const`)

```javascript
let b = 20;     // global but in script scope (not on window)
const c = 30;   // same
```

- Still accessible everywhere but **not** attached to the global object.
- Prevents accidental overwriting of global properties.

### 4.3 Block Scope (with `let`/`const`)

```javascript
if (100 > 2) {
  var a = 10;    // function/global scope – NOT block scoped
  let b = 20;    // block scoped – only inside this if block
  const c = 30;  // block scoped
}
console.log(a);  // 10  (accessible because var ignores block)
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined
```

- `var` **ignores** block scope (it’s function‑scoped or global).
- `let` and `const` respect block scope (`{ ... }`).

### 4.4 Function / Local Scope

```javascript
function demo() {
  var x = 100;      // local (function scope)
  let y = 200;      // also local (function scope)
  const z = 3000;   // local (function scope)
  console.log(x, y, z); // works inside function
}
demo();
// console.log(x); // ReferenceError: x is not defined (outside function)
```

- **Any variable declared inside a function** (with `var`, `let`, or `const`) is local to that function.
- Cannot be accessed outside the function.

---

## 5. Comparison Table: `var` vs `let` vs `const`

| Feature                     | `var`                     | `let`                     | `const`                   |
|-----------------------------|---------------------------|---------------------------|---------------------------|
| Scope                       | Function / Global         | Block                     | Block                     |
| Hoisting                    | Yes (initialised as `undefined`) | Yes (uninitialised – TDZ) | Yes (uninitialised – TDZ) |
| Re‑declaration in same scope| ✅ Allowed                | ❌ Not allowed            | ❌ Not allowed            |
| Re‑assignment               | ✅ Allowed                | ✅ Allowed                | ❌ Not allowed            |
| Must be initialised at declaration | No                  | No                        | **Yes**                   |
| Attached to global object (browser) | Yes (on `window`) | No                       | No                        |

---

## 6. Code Snippets from Your Example Explained

### Snippet 1: `var` behaviour
```javascript
var a1;
console.log(a1); // undefined
a1 = 10;
console.log(a1); // 10
var b1 = 20;
console.log(b1); // 20
var b1 = 40;     // re‑declaration allowed
console.log(b1); // 40
```

### Snippet 2: `let` behaviour
```javascript
let x1;
console.log(x1); // undefined (no TDZ because declaration is on previous line? Actually TDZ only applies before the line where the variable is declared – here it's fine)

x1 = 100;
console.log(x1); // 100

let x2 = 200;
console.log(x2); // 200

// let x2 = 100; // error
x2 = 900;
console.log(x2); // 900
```

### Snippet 3: Hoisting and TDZ
```javascript
// var a = undefined (hoisted)
console.log(a); // undefined (no error)
var a = 10;
console.log(a); // 10

// Temporal Dead Zone for `b`
// console.log(b); // ReferenceError
const b = 20;
console.log(b); // 20
```

### Snippet 4: Global vs Local (Block scope)
```javascript
var a = 10; // global (attached to window)
let b = 20; // script scope (global but not on window)
const c = 30; // script scope

if (100 > 2) {
  var a = 10;   // same global variable (no new block scope for var)
  let b = 20;   // new block-scoped variable, shadows global b
  const c = 30; // new block-scoped constant
}
console.log(a); // 10 (modified inside if, because var is not block-scoped)
```

### Snippet 5: Function scope
```javascript
function demo() {
  var x = 100;   // local to demo()
  let y = 200;   // local to demo()
  const z = 3000; // local to demo()
}
demo();
// x, y, z are not accessible outside
```

---

## 7. Key Interview Questions (with Answers)

### Q1: What is the difference between `var`, `let`, and `const`?

**Answer:**  
- `var` is function‑scoped, can be re‑declared, hoisted with `undefined`.  
- `let` is block‑scoped, cannot be re‑declared in same scope, hoisted but not initialised (TDZ).  
- `const` is block‑scoped, cannot be re‑declared or re‑assigned, must be initialised at declaration.

### Q2: Explain hoisting and the Temporal Dead Zone.

**Answer:**  
Hoisting means declarations are moved to the top of their scope. For `var`, the variable is hoisted and initialised with `undefined`. For `let`/`const`, they are hoisted but remain uninitialised; accessing them before declaration causes a `ReferenceError`. The period from entering scope to the declaration line is called the **Temporal Dead Zone**.

### Q3: What are the different types of scopes in JavaScript?

**Answer:**  
Global (global object), Script (top‑level `let`/`const`), Function (inside functions), Block (`{ }` with `let`/`const`), and Module (ES6 modules).

### Q4: Why does `var` ignore block scope?

**Answer:**  
`var` was designed to be function‑scoped (or global). It does not recognise blocks like `if` or `for`. That’s why `let` and `const` were introduced – to provide true block scoping.

### Q5: Can you redeclare a `let` variable in the same scope?

**Answer:**  
No. `let` does not allow re‑declaration. Doing so throws a `SyntaxError`.

---

## 8. Summary

- Use **`const`** by default if the variable should not be reassigned.
- Use **`let`** when you need to reassign (e.g., counters, accumulators).
- Avoid **`var`** in modern code unless you have legacy reasons.
- Understand hoisting and TDZ to avoid `ReferenceError`s.
- Remember the scoping rules: `var` = function scope, `let`/`const` = block scope.

```javascript
// Best practices
const PI = 3.14;
let count = 0;
count++;

// Avoid var in new code
// var old = "legacy";
```


# JavaScript Execution Context & Functions 

This document covers the **Global Execution Context (GEC)**, its two phases, and an in‑depth exploration of **functions** in JavaScript – including named functions, anonymous functions, function expressions, parameterised functions, rest parameters, nested functions, closures, and lexical scoping. All explanations are accompanied by the code snippets you provided.

---

## 1. Global Execution Context (GEC)

When a JavaScript program starts running, the engine creates the **Global Execution Context**. It consists of two phases:

| Phase                | Description                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------|
| **Declaration Phase** (also called Creation Phase) | Memory is allocated for variables and functions. <br> - `var` variables: hoisted and initialised with `undefined`.<br> - `let` / `const` variables: hoisted but **not initialised** (Temporal Dead Zone).<br> - Function declarations: stored entirely in memory (available before execution). |
| **Execution Phase**  | Code is executed line by line. Assignments, calculations, and function calls happen here.       |

### Example 1 (from your code)

```javascript
debugger;
console.log("Start");
console.log(a);      // undefined (var a is hoisted)
var b;
console.log(b);      // undefined
let x;               // hoisted, but TDZ ends here
console.log(x, b);   // undefined undefined
var a = 100;
x = 40;
console.log(a, x);   // 100 40
const z = 1000;
a = 20;
console.log(a, x, b); // 20 40 undefined
console.log("End");
```

**What happens behind the scenes (GEC):**

1. **Declaration phase:**
   - `var a` → hoisted, initialised with `undefined`.
   - `var b` → hoisted, initialised with `undefined`.
   - `let x` → hoisted, but **uninitialised** (TDZ from start of block until this line).
   - `const z` → hoisted, uninitialised (TDZ).
   - Function declarations (none here).
2. **Execution phase:**
   - `console.log("Start")` executes.
   - `console.log(a)` → `undefined`.
   - `var b;` (already declared, does nothing).
   - `console.log(b)` → `undefined`.
   - `let x;` → now `x` is initialised with `undefined` (end of TDZ for `x`).
   - `console.log(x, b)` → `undefined undefined`.
   - `var a = 100;` → assigns `100` to `a`.
   - `x = 40;` → assigns `40` to `x`.
   - `console.log(a, x)` → `100 40`.
   - `const z = 1000;` → now `z` is initialised (end of TDZ for `z`).
   - `a = 20;` → changes `a` to `20`.
   - `console.log(a, x, b)` → `20 40 undefined`.
   - `console.log("End")`.

> **Key takeaway:** The GEC controls the entire lifecycle of your script. Understanding the two phases helps explain hoisting and the TDZ.

---

## 2. Functions in JavaScript

You listed **10 types of functions**; here we cover the essential ones from your code.

### 2.1 Named Function

A function defined with a name using the `function` keyword.

```javascript
// Function declaration
function greet() {
  console.log("I am Named Function");
}

// Calling the function
greet();
```

**Important:** Named functions are **hoisted** – they can be called **before** their declaration in the code.

```javascript
greet();   // Works because of function hoisting

function greet() {
  console.log("I am Named Function");
}
```

### 2.2 Anonymous Function

A function without a name. It cannot stand alone; must be assigned to a variable or used as an argument.

```javascript
// Anonymous function (cannot be called directly)
// function() { console.log("Hi"); }   // SyntaxError if used alone
```

### 2.3 Function Expression

Assigning an anonymous function to a variable. The variable name becomes the function’s name.

```javascript
const a1 = function () {
  console.log("I am Function expression");
};

a1();   // Call via the variable
```

- **Not hoisted** (only the variable declaration is hoisted, but the assignment remains in place).

### 2.4 Parameterised Function

Functions that accept parameters (placeholders) and arguments (actual values).

```javascript
// n1 and n2 are parameters (with default values 0)
function sum(n1 = 0, n2 = 0) {
  console.log(n1 + n2);
}

sum(10, 20);   // 30  (arguments: 10, 20)
sum(100);      // 100 (n2 uses default 0)
```

- Default parameters prevent `undefined` when arguments are missing.

### 2.5 Rest Parameterised Function

Collects remaining arguments into a **real array**. The rest parameter must be the last parameter.

```javascript
function demo(a, b, ...c) {
  console.log(a, b);        // 10 20
  console.log("Rest", c);   // Rest [30, 40, 50, 60, 70]

  // `arguments` is an array-like object (not a pure array)
  console.log(arguments);   // [10, 20, 30, 40, 50, 60, 70]
  console.log(Array.isArray(c));       // true
  console.log(Array.isArray(arguments)); // false
}

demo(10, 20, 30, 40, 50, 60, 70);
```

- `...c` captures all extra arguments into a true array.
- `arguments` is a legacy array‑like object available inside every function (except arrow functions). It lacks array methods like `map`, `filter`.

### 2.6 Nested Function

A function defined inside another function. The inner function has access to the outer function’s variables (lexical scoping).

#### Example 1 (basic nesting)

```javascript
function Parent() {
  let money = 80000;
  console.log(money);

  function Child() {
    let savings = 2000;
    console.log(savings);
  }
  Child();
}

Parent();
```

- `Child()` can be called only inside `Parent()` (unless returned).

#### Example 2 (accessing outer variable – closure in action)

```javascript
function Parent() {
  let money = 80000;
  console.log(money);

  function Child() {
    let savings = 2000;
    console.log(savings + money);   // Child uses `money` from Parent
  }
  Child();
}

Parent();
```

### 2.7 Closure

A **closure** is created when an inner function retains access to variables of its outer function even after the outer function has finished executing. This allows data hiding and persistent state.

```javascript
function Parent() {
  let money = 80000;
  console.log(money);

  function Child() {
    let savings = 2000;
    console.log(savings + money);
  }

  return Child;   // Return the inner function
}

let fun = Parent();   // `Parent` executes, returns `Child`
fun();                // `Child` still has access to `money` (closure)
```

**Explanation:**  
- After `Parent()` returns, normally its local variables would be garbage collected.  
- However, because the returned `Child` function references `money`, JavaScript creates a **closure** – a persistent memory that keeps `money` alive.  
- Closures are commonly used for **data hiding** (private variables).

#### Data hiding example – counter

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count is", count);
  };
}

let f1 = counter();
f1();   // Count is 1
f1();   // Count is 2
// `count` is not accessible from outside – truly private.
```

- Only the returned inner function can modify `count`.  
- Each call to `counter()` creates a **new closure** with its own `count`.

### 2.8 Lexical Scoping

**Lexical scoping** (also called static scoping) means that the scope of a variable is determined by its location in the source code. When an inner function references a variable, JavaScript looks for it in the current scope, then in the outer (parent) scope, then further up until the global scope.

```javascript
let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    let innerVar = "I am inner";
    console.log(innerVar); // found in inner scope
    console.log(outerVar); // found in outer scope (lexical parent)
    console.log(globalVar); // found in global scope
  }

  inner();
}

outer();
```

- The **ability** to search outside the current scope is exactly lexical scoping.  
- Closures rely on lexical scoping to “remember” outer variables.

---

## 3. Complete GEC & Function Examples (from your code)

### Example 2 – GEC with Named Functions

```javascript
console.log("Start");
console.log(a);          // undefined (var a hoisted)
function Demo() {
  console.log("I am demo");
}
console.log(Demo);       // Prints the function body (hoisted)
var a;
Student();               // Works because named function is hoisted
a = 100;
function Student() {
  let fullname = "John Doe";
  console.log(fullname);
}
Demo();                  // "I am demo"
console.log(a);          // 100
console.log("End");
```

**Step‑by‑step GEC:**

1. **Declaration phase:**
   - `var a` → `undefined`.
   - `function Demo` → stored in memory.
   - `function Student` → stored in memory.
2. **Execution phase:**
   - `"Start"` logged.
   - `console.log(a)` → `undefined`.
   - `console.log(Demo)` → the function definition.
   - `Student()` call → executes `Student`, logs `"John Doe"`.
   - `a = 100` → assigns 100.
   - `Demo()` call → logs `"I am demo"`.
   - `console.log(a)` → `100`.
   - `"End"` logged.

### Example 3 – Mix of `let`, `var`, and Functions

```javascript
console.log("Start");
greet();               // Works? Yes, named function hoisted
let a = 20;            // Hoisted but TDZ until here
console.log(b);        // undefined (var b hoisted)
function greet() {
  var a = 100;
  console.log(a);      // 100 (local a, not global a)
}
var b = 30;
function demo() {
  const c = 30;
  console.log(c);
}
a = 90;                // Assigning to global `a` (now 90)
demo();                // logs 30
console.log("End");
```

**Important observations:**
- The `greet` function’s `var a` is local, does not affect the global `let a`.
- `let a` is not yet initialised when `greet()` runs, but that’s fine because `greet()` doesn’t access the outer `a`. The TDZ of `a` ends at `let a = 20;`.
- `a = 90` changes the global `a` from `20` to `90`.

---

## 4. Summary Table – Function Types & Characteristics

| Function Type           | Syntax Example                                   | Hoisted? | Has `arguments`? | Own `this`? | Use case                               |
|------------------------|--------------------------------------------------|----------|------------------|-------------|----------------------------------------|
| Named (declaration)    | `function name() {}`                             | ✅ Yes   | ✅ Yes            | ✅ Yes       | General reusable code                  |
| Anonymous              | `function() {}`                                  | ❌ (only as expression) | ✅ Yes | ✅ Yes | Callbacks, IIFEs                       |
| Function Expression    | `const f = function() {};`                       | ❌       | ✅ Yes            | ✅ Yes       | When you need conditional definition   |
| Parameterised          | `function sum(a,b) {}`                           | (depends) | ✅ Yes         | ✅ Yes       | Accept inputs                          |
| Rest Parameterised     | `function f(...rest) {}`                         | (depends) | ❌ (use `rest` array) | ✅ Yes | Variable number of arguments          |
| Nested                 | `function outer() { function inner() {} }`       | outer: yes, inner: no | ✅ Yes | ✅ Yes | Encapsulation, closures                |
| Closure (returned inner)| `function outer() { return function() {} }`      | ❌       | ✅ Yes            | ✅ Yes       | Data hiding, factories, private state  |

---

## 5. Key Interview Questions (with Answers)

### Q1: What is the Global Execution Context? Name its phases.
**Answer:** The GEC is the default execution context created when a JavaScript program runs. It has two phases: **Declaration Phase** (memory allocation, hoisting) and **Execution Phase** (code execution line by line).

### Q2: How does hoisting differ for `var`, `let`, `const`, and function declarations?
**Answer:**  
- `var`: hoisted and initialised with `undefined`.  
- `let` / `const`: hoisted but **not initialised** (TDZ).  
- Function declarations: hoisted with their entire definition (can be called before declaration).

### Q3: What is a closure? Give a real‑world use case.
**Answer:** A closure is when an inner function retains access to outer function’s variables even after the outer function has returned. Use case: creating private variables (e.g., a counter that cannot be modified from outside).

### Q4: What is lexical scoping?
**Answer:** Lexical scoping means that a variable’s scope is determined by its position in the source code. An inner function can access variables of its outer functions based on where the code is written (not where it’s called).

### Q5: What is the difference between `arguments` and a rest parameter?
**Answer:**  
- `arguments` is an array‑like object available inside every non‑arrow function. It does not have array methods.  
- Rest parameter (`...rest`) is a true array, and it only collects the extra arguments not assigned to named parameters.

### Q6: Why does `console.log(typeof arguments)` return `"object"`?
**Answer:** Because `arguments` is not a pure array; it’s an object with indexed properties and a `length` property.

---

## 6. Complete Code Dump (your original, with annotations)

```javascript
//! GEC -> Global Execution Context
// it has 2 phases
// 1) Declaration Phase
// 2) Execution Phase

// debugger;
// console.log("Start");
// console.log(a);
// var b;
// console.log(b);
// let x;
// console.log(x, b);
// var a = 100;
// x = 40;
// console.log(a, x);
// const z = 1000;
// a = 20;
// console.log(a, x, b);
// console.log("End");

//! FUNCTIONS :

//! 1) Named Function
// function greet() {
//   console.log("I am Named Function");
// }
// greet();

//! 2) Anonymous Function
// function(){}  // cannot be used alone

//! 3) Function Expression
// const a1 = function () {
//   console.log("I am Function expression");
// };
// a1();

//! 4) Parametrized Function
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20);
// sum(100);

//! 5) Rest Parameterized Function
// function demo(a, b, ...c) {
//   console.log(a, b);
//   console.log("Rest", c);
//   console.log(arguments);
//   console.log(Array.isArray(c));       // true
//   console.log(Array.isArray(arguments)); // false
// }
// demo(10, 20, 30, 40, 50, 60, 70);

//! 6) Nested Function & Closure
// function Parent() {
//   let money = 80000;
//   console.log(money);
//   function Child() {
//     let savings = 2000;
//     console.log(savings + money);
//   }
//   return Child;
// }
// let fun = Parent();
// fun();

//! Data hiding with closure
// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log("Count is", count);
//   };
// }
// let f1 = counter();
// f1();
// f1();
```

---


## 7. Higher-Order Function (HOF) & Callback Function

### Definitions

- **Higher-Order Function (HOF)**  
  A function that does at least one of the following:
  - Accepts another function as an argument, **or**
  - Returns a function, **or**
  - Both.

- **Callback Function (CB)**  
  A function that is passed as an argument to another function.

### Examples from your code

#### Example 1 – HOF returning a function
```javascript
function demo1() {
  // demo1 is HOF because it returns a function
  return function () {};
}
```

#### Example 2 – HOF accepting a function
```javascript
function demo2(fun) {
  // demo2 is HOF because it accepts a function as argument
}
demo2(function () {});
```

#### Example 3 – HOF both accepts and returns a function
```javascript
function demo3(fn) {
  // demo3 is HOF: accepts a function and returns a function
  return function () {};
}
demo3(function () {});
```

### Real-world usage

Built-in array methods like `map()`, `forEach()`, `filter()`, `find()` all use HOFs and callbacks.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(function(n) {
  return n * 2;
});
// `map` is HOF, the anonymous function is the callback
console.log(doubled); // [2, 4, 6]
```

---

## 8. Immediately Invoked Function Expression (IIFE)

An IIFE is a function that is defined and **executed immediately** after its creation. It can only be called once during script execution.

### Syntax

Wrap the function in parentheses and add `()` at the end.

```javascript
(function () {
  // code here runs immediately
})();
```

### Example from your code – IIFE returning a closure

```javascript
let val = (function () {
  let count = 0;

  return function () {
    count++;
    console.log("Count is", count);
  };
})();

val();  // Count is 1
val();  // Count is 2
val();  // Count is 3
```

**How it works:**  
- The outer function is defined and invoked right away (`(function(){...})()`).  
- It returns an inner function that closes over `count`.  
- `val` holds that inner function. Each call to `val()` increments the private `count` variable.

> **Key points:**  
> - IIFE creates a new scope, avoiding polluting the global scope.  
> - It is executed only once.  
> - Often used for initialisation code or to create private variables (as above).

---

## 9. Arrow Functions (ES6)

Arrow functions provide a shorter syntax and lexically bind `this`. They are anonymous by nature but can be assigned to variables.

### Syntax variations (7 ways from your code)

#### Way 1 – Basic arrow function
```javascript
let a1 = () => {
  console.log("I am Arrow function 1");
};
a1();
```

#### Way 2 – Using `_` when no parameters (alternative)
```javascript
let a2 = (_) => {
  console.log("I am Arrow function 2");
};
a2();
```
> Note: `_` is just a valid parameter name; it’s not a special syntax. Usually we use `()` for no parameters.

#### Way 3 – Single parameter, parentheses optional
```javascript
let a3 = (x) => {
  console.log("I am Arrow function 3", x);
};
// or simply: let a3 = x => { ... }
a3(10);
```

#### Way 4 – Single line of code, braces optional (implicit return of expression)
```javascript
let a4 = () => console.log("I am Arrow function 4");
a4();
```

#### Way 5 – Explicit return (requires `{}` and `return`)
```javascript
let a5 = () => {
  return "I am Arrow function 5";
};
console.log(a5());
```

#### Way 6 – Implicit return (no `{}`, no `return`)
```javascript
let a6 = () => "I am Arrow function 6";
console.log(a6());
```

#### Way 7 – Implicit return of an object literal (wrap in `()`)
```javascript
let a7 = () => ({ name: "John" });
console.log(a7()); // { name: 'John' }
```
> Without the parentheses `{}` would be interpreted as a block, not an object literal.

### Important characteristics of arrow functions

- **No own `this`** – they inherit `this` from the surrounding lexical scope.
- **No `arguments` object** – use rest parameters instead.
- **Cannot be used as constructors** (no `new` keyword).
- **No `prototype` property**.
- Cannot be used as methods if you need access to the object via `this` (unless you want the outer `this`).

---

## 10. Constructor Functions

Constructor functions are used to create multiple similar objects. They are invoked with the `new` keyword.

### Syntax and example

```javascript
function Student(studentName) {
  this.name = studentName;
}

let s1 = new Student("John");
let s2 = new Student("Jane");
console.log(s1); // Student { name: 'John' }
console.log(s2); // Student { name: 'Jane' }
```

### How `new` works

When you call a function with `new`, the following happens:
1. A new empty object is created.
2. The new object is linked to the function’s `prototype`.
3. The function’s `this` is bound to the new object.
4. If the function does not return an object, the new object is returned.

### Naming convention

Constructor functions are usually named with a capital first letter (e.g., `Student`, `Person`, `Car`).

### Adding methods

```javascript
function Student(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
}
// Or better, add to prototype to save memory:
Student.prototype.sayBye = function() {
  console.log(`${this.name} says bye`);
};

let s = new Student("Alice");
s.greet(); // Hello, I'm Alice
s.sayBye(); // Alice says bye
```

> **Note:** Arrow functions should not be used as constructors (they will throw an error if used with `new`).

---

## Summary Table – Function Types

| Type                    | Syntax Example                                      | Hoisted? | Own `this`? | `arguments`? | Can be `new`? | Use case                         |
|-------------------------|-----------------------------------------------------|----------|-------------|--------------|---------------|----------------------------------|
| Named function          | `function name() {}`                                | ✅ Yes   | ✅ Yes       | ✅ Yes        | ✅ Yes         | General reusable code            |
| Function expression     | `const f = function() {};`                          | ❌ No    | ✅ Yes       | ✅ Yes        | ✅ Yes         | Conditional definition           |
| Arrow function          | `() => {}`                                          | ❌ No    | ❌ (lexical) | ❌ No         | ❌ No          | Short functions, callbacks       |
| IIFE                    | `(function(){})()`                                  | ❌ No    | ✅ Yes       | ✅ Yes        | ❌ No          | One‑time execution, private scope |
| Constructor function    | `function C() {}` (called with `new`)               | ✅ Yes   | ✅ Yes       | ✅ Yes        | ✅ Yes         | Object factories                 |

---

## Key Interview Questions (with Answers)

### Q1: What is a higher-order function? Give an example.
**Answer:** A higher-order function is a function that either takes another function as an argument, returns a function, or both. Example: `Array.prototype.map(callback)` – `map` is HOF, the callback is the function argument.

### Q2: What is the difference between a regular function and an arrow function regarding `this`?
**Answer:** Arrow functions do not have their own `this`. They inherit `this` from the surrounding lexical scope. Regular functions have their own `this` determined by how they are called (dynamic binding).

### Q3: Why would you use an IIFE?
**Answer:** IIFE creates a new scope to avoid polluting the global namespace. It is also used to create private variables (via closures) that cannot be accessed from outside.

### Q4: Can an arrow function be used as a constructor? Why?
**Answer:** No, arrow functions cannot be used with `new` because they lack the internal `[[Construct]]` method and do not have a `prototype` property.

### Q5: What happens when you call a constructor function without `new`?
**Answer:** If called without `new`, the function will execute in the global context (or in strict mode `undefined`), and properties will be assigned to the global object (or cause an error). Always use `new` when calling constructor functions.

### Q6: How do you implicitly return an object literal from an arrow function?
**Answer:** Wrap the object literal in parentheses: `() => ({ key: value })`. Otherwise, the braces are interpreted as a function body.

---

## Complete Code Dump (from your snippet, annotated)

```javascript
//! 7) HIGHER ORDER FUNCTION & CALLBACK FUNCTION
// HOF : accepts a function OR returns a function OR both
// CB : function passed as argument

function demo1() { // HOF (returns function)
  return function () {};
}

function demo2(fun) { // HOF (accepts function)
}
demo2(function(){});

function demo3(fn) { // HOF (both)
  return function () {};
}
demo3(function(){});

// Real usage: map, forEach, filter, find

//! 8) IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
let val = (function () {
  let count = 0;
  return function () {
    count++;
    console.log("Count is", count);
  };
})(); // IIFE – called once
val(); // Count is 1
val(); // Count is 2
val(); // Count is 3

//! 9) ARROW FUNCTION
let a1 = () => { console.log("I am Arrow function 1"); };
a1();

let a2 = (_) => { console.log("I am Arrow function 2"); };
a2();

let a3 = (x) => { console.log("I am Arrow function 3", x); };
a3(10);

let a4 = () => console.log("I am Arrow function 4");
a4();

let a5 = () => { return "I am Arrow function 5"; };
console.log(a5());

let a6 = () => "I am Arrow function 6";
console.log(a6());

let a7 = () => ({ name: "John" });
console.log(a7());

//! 10) CONSTRUCTOR FUNCTION
function Student(studentName) {
  this.name = studentName;
}
let s1 = new Student("John");
let s2 = new Student("Jane");
console.log(s1); // Student { name: 'John' }
console.log(s2); // Student { name: 'Jane' }
```

---