### 6. Answer the following questions clearly:

1.  What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    Answer:
    Those are all used to select HTML elements from the DOM. Among them, getElementById's purpose is to choose a single element by its ID attribute. It returns a single-element object. Its performance is fast.

    getElementsByClassName's purpose is to select elements by class attribute. It returns HTML collections. Its performance is slower than getElementById.

    querySelector and querySelectorAll's purpose is to select elements by using CSS selectors. It returns the first matching Element object, NodeList, which is a static, array-like object. Its performance is slow.

2.  How do you **create and insert a new element into the DOM**?
    Answer:
    const newElement = document.createElement('div');
    newElement.innerText = 'This is new element';
    newElement.classList.add('new-class');
    const mainElement = document.getElementById('container');
    mainElement.appendChild(newElement);

3.  What is **Event Bubbling** and how does it work?
    Answer:
    Event bubbling is a mechanism where an event, such as a click or keypress, travels upward from the innermost element where it was triggered to its outer parent elements in the DOM hierarchy.
    it's work like DOM tree from up to root. for example:
    <html>
        <head>
            <title>Event Bubbling Example</title>
        </head>
        <body>
            <div id="grandparent">
                <div id="parent">
                    <button id="child">Click Me</button>
                </div>
            </div>
        </body>
    </html>
    When the <button id="child"> is clicked, the click event propagates in this sequence: #child, #parent, #grandparent, <body>, and <html>.

4.  What is **Event Delegation** in JavaScript? Why is it useful?
    Answer:
    Event delegation in JavaScript involves attaching a single event listener to a parent element, leveraging event bubbling to detect and handle events from specific child elements.
    When you adding click listeners to each of 100 list items, you place one listener on the parent <ul> to manage events for all items.

5.  What is the difference between **preventDefault() and stopPropagation()** methods?
    Answer: The methods preventDefault() and stopPropagation() are used to manage event behavior in a browser. preventDefault() stops the action, while stopPropagation() stops the flow.
