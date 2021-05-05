import React from 'react';
import ReactDom from 'react-dom';

const Index = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

ReactDom.render(<Index />, document.getElementById("root"))