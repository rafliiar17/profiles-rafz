import React, { Component } from 'react';
import Menu from './menu'; // Make sure to import Menu component
import App from './App';
import './styles/main.css';

class Container extends Component {
    constructor() {
        super();
        this.state = { Index: 1 };
        const value = localStorage.getItem('index');
        this.state.Index = (value == null) ? 1 : parseInt(value, 10);
    }

    goPage = (index) => {
        this.setState({ Index: index });
        localStorage.setItem('index', index);
    }

    render() {
        return (
            <div className="container">
                <Menu />
                <div className="nav">
                    <button className={this.state.Index === 1 ? 'active' : ''} onClick={() => this.goPage(1)}>
                        <span>~/Home</span>
                        <span className="left-command">&#8984;1</span>
                    </button>
                    <button className={this.state.Index === 2 ? 'active' : ''} onClick={() => this.goPage(2)}>
                        <span>~/Experience</span>
                        <span className="left-command">&#8984;2</span>
                    </button>
                    <button className={this.state.Index === 3 ? 'active' : ''} onClick={() => this.goPage(3)}>
                        <span>~/Skills</span>
                        <span className="left-command">&#8984;3</span>
                    </button>
                    <button className={this.state.Index === 4 ? 'active' : ''} onClick={() => this.goPage(4)}>
                        <span>~/Project</span>
                        <span className="left-command">&#8984;4</span>
                    </button>
                    <button className={this.state.Index === 5 ? 'active' : ''} onClick={() => this.goPage(5)}>
                        <span>~/Certificate</span>
                        <span className="left-command">&#8984;5</span>
                    </button>
                </div>
                <App index={this.state.Index} />
            </div>
        );
    }
}

export default Container;
