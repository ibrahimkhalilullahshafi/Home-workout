import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <section className='ques-ans'>
            <h2>
                Some frequntly asked questions
            </h2>
            <div>
                <strong>Q: 1: How does react work?</strong>
                <br />
                <strong>Ans:</strong><p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
                <strong>Q: 2: Difference between props and state?</strong>
                <br />
                <strong>Ans:</strong><p>React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM. <br />
                    How can we access data from the previous component if the data is just being flowed from components to components? The answer is props. React uses data transmission props that we need to transfer to various components.<br />
                    The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.<br />
                    A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.</p>
                <strong>Q: 3: Uses of useEffect in react?</strong>
                <br />
                <strong>Ans:</strong><p>Running once on mount: fetch API data <br />
                    Running on state change: validating input field<br />
                    Running on state change: live filtering<br />
                    Running on state change: trigger animation on new array value<br />
                    Running on props change: update paragraph list on fetched API data update<br />
                    Running on props change: updating fetched API data to get BTC updated price</p>
            </div>
        </section>
    );
};

export default Answer;