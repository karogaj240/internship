import React from 'react';


class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumber: '',
            secondNumber: '',
            sign: '',
            result: '200',
        }
    }
    render() {
        return(
        <form>
            <input type="number" value={this.state.firstNumber}/>
            +
            <input type="number" value={this.state.secondNumber}/>
            =
            <p>{this.state.result}</p>
        </form>
        );
    };
};

export default Calculator;