import React from 'react';
import ReactDOM from 'react-dom';


//Create my first component -- it will gen some HTML
const App = () => {
    return <div>Hello World!</div>
}

// Make sure my component output goes into the DOM.
// or on the page. Render my component to the page.
ReactDOM.render(<App />, document.querySelector('.container'));