import { Component } from "react";

export default class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleMinus = () => {
        this.setState({ count: this.state.count - 1})
    }

    handleReset = () => {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <h1>Class Components</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleMinus}>Minus</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}