import React from 'react';

export default class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hello World React Redux ! </h1>
    }

    componentDidMount() {
        this.props.onScreenload();
    }

}