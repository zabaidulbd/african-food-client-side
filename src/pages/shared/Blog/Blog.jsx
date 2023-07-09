import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <>
            <Header></Header>
            <div className='container'>
                <div className='mb-4'>
                    <h3>Question: Difference between controlled and uncontrolled components</h3>
                    <h5>Answer: In React, components can be classified as either controlled or uncontrolled components based on how they handle and manage data. <br />  1. Controlled Components: A controlled component is a React component that derives its value from props and only updates its parent component state when the user interacts with it. In other words, a controlled component depends on the parent component for its value and its behavior. The parent component is responsible for passing the value to the controlled component as a prop, and any change to the value is communicated back to the parent component via a callback function. <br />
                        2. Uncontrolled Components:
                        An uncontrolled component is a component that manages its own internal state. In other words, it does not rely on the parent component for its value and behavior. Instead, it directly modifies the DOM element to handle user interactions.
                    </h5>
                </div>
                <div>
                    <h3>Question: How to validate react props using propTypes?</h3>
                    <h5>Answer: In React, PropTypes is a library used to validate the type and shape of props passed to a component. First, we need to import PropTypes library from the 'prop-types' package. Next, we need to define propTypes for the component. PropTypes are defined as static properties of the component class. Then we can specify the prop types using PropTypes. There are several built-in types available in PropTypes, including string, number, boolean, object, array, and function. Finally, we can validate the props passed to the component using PropTypes. If a prop doesn't match its specified type, a warning will be logged to the console. </h5>
                </div>
                <div>
                    <h3>Question: Difference between node js and express js?</h3>
                    <h5>Answer: Node.js and Express.js are both popular JavaScript frameworks that are used for server-side development, but they serve different purposes.Node.js is a runtime environment, while Express.js is a web application framework that runs on top of Node.js. Node.js can be used for building various types of applications, including command-line tools, desktop applications, and web applications, while Express.js is mainly used for building web applications and APIs.Node.js does not provide any built-in functionality for routing or middleware. Developers need to implement these functionalities themselves or use third-party libraries. Express.js provides a built-in routing mechanism and middleware that simplify the process of building web applications and APIs.n summary, Node.js is a runtime environment that enables developers to run JavaScript code on the server-side, while Express.js is a web application framework that runs on top of Node.js and simplifies the process of building web applications and APIs.</h5>
                </div>
                <div>
                    <h3>Question: What is a Custom Hook and why we use this hook?</h3>
                    <h5>Answer: In React, a custom hook is a JavaScript function that uses one or more built-in hooks and allows you to extract component logic into reusable functions.Custom hooks allow us to reuse common logic across multiple components in our application. By abstracting component logic into custom hooks, we can write more modular and maintainable code.Custom hooks are created by prefixing the function name with "use" (e.g. useCustomHook) and can return any value that a built-in hook can return (e.g. state, refs, or functions).</h5>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Blog;