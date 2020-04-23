# Castella

## Introduction
Parsing JSX into JS is only half of the fun of the dev experience for those who use JSX. The other half is about being able to modularize with it. 

[Gasket][1] Brings you the 1st part. `Castella` enables the 2nd. 

With Castella you get render functions, as well as the ability to render your DOM thing to a string. 

## Usage

Castella wraps around [SnabbDOM][2] so you can use it like this: 

```js
const Castella = require("castella");

function Container({children, ...props} = {}) {
  // this corresponds to h(tagName, {props: {/*...*/}}, children)
  return Castella.Render("div", {
        "className":'page ' + (props.className || "page--default")
      }, 
      [children]
  );
}
```

But, unlike [SnabbDOM][2] does, you can also do this: 

```js
  return Castella.Render(
    Container, 
    {"className":"page--wrapper"}, 
    ["This is some text"]
  );
```

Which is equivalent of calling 
```js
Container({
    "className":"page--wrapper", 
    children: ["This is some text"]
})
```
and then wrapping it on a `Castella` instance. 

This instance is important in that it serves to encapsulate the VDOM and also provides a .toString() method to give you the actual generated HTML.  

## Support us

Since we have literally no idea wether this will work on older nodejs versions, at the very least you are required to have `13.12.0`.

We could totally use some tests! It would be fairly cool to have tests in place. You know, so we can be sure this is usable with any degree of certainty. 

Any suggestions are welcome!
