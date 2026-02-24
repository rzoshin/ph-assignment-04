
---

# 📘 JavaScript DOM & Events — Short Notes

---

##  1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

`getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`

These are DOM selection methods. We use them to find HTML elements using JavaScript.

---

### `getElementById()`

 i. Finds element using id.
 ii. Id is always unique
 iii. Returns one single element.

**Use when:** You know the exact id and only one element is needed.

---

### `getElementsByClassName()`

 i. Finds elements using class name
 ii.Many elements can have same class
 iii. Returns HTMLCollection (array-like list)

---

### `querySelector()`

i. Uses **CSS selector**
ii. Returns **first matching element only**

You can select by:

* id → `#id`
* class → `.class`
* tag → `div`

---

### `querySelectorAll()`

i. Uses **CSS selector**
ii. Returns **all matching elements**
iii. Returns **NodeList**

---

## 2. How do you create and insert a new element into the DOM? 

To add new HTML using JavaScript, we follow 3 steps.

---

### Step 1 — Create element

```
const newDiv = document.createElement("div");
```

### Step 2 — Add content / attributes

```
newDiv.innerText = "Hello I am new here 👋";
newDiv.className = "box";
```

You can also use:

```
newDiv.innerHTML = "<b>Hello</b>";
```

---

### Step 3 — Insert into DOM

```
document.body.appendChild(newDiv);
```

Now the element appears on the webpage.

---


---

## 3. What is Event Bubbling? And how does it work?

Event Bubbling means:

> When an event happens on a child element, it also moves upward to its parent elements.

Like a bubble rising in water

---

### Example Structure

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

---

### JavaScript

```js
document.getElementById("parent")
  .addEventListener("click", () => {
    console.log("Parent clicked");
  });

document.getElementById("child")
  .addEventListener("click", () => {
    console.log("Button clicked");
  });
```

---

### When button is clicked

Output:

```
Button clicked
Parent clicked
```

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means:

> Adding event listener to a parent element to handle events for its children.

Instead of adding listeners to every child.


### Why Event Delegation is Useful

* Less code
* Better performance
* Handles dynamic elements
* Cleaner structure

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

`preventDefault()` vs `stopPropagation()`

Both control event behavior but in different ways.

---

### `preventDefault()`

Stops browser’s default action.

Example:

```html
<a href="https://google.com" id="link">Go</a>
```

```js
document.getElementById("link")
  .addEventListener("click", (e) => {
    e.preventDefault();
  });
```

Now link will not open.

---

### Common uses

* Stop form submit
* Stop page reload
* Stop link redirect

---

### `stopPropagation()`

Stops event bubbling.

Example:

```js
document.getElementById("child")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Button clicked only");
  });
```

Now parent event will not run.

---





