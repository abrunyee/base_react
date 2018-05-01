import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';

import MyComponent from './myComponent';

export default class App extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <MyComponent />
            </BrowserRouter>
        );
    }
}
