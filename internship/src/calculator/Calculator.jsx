import React from 'react';




class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumber: '',
            secondNumber: '',
            sign: '',
            result: '',
        };
        this.changeFirstNumber = this.changeFirstNumber.bind(this);
        this.changeSecondNumber = this.changeSecondNumber.bind(this);
        this.changeSign = this.changeSign.bind(this);
        this.calculate = this.calculate.bind(this);
    };


    render() {
        return(
        <form>
            <input type="number" value={this.state.firstNumber} onChange={this.changeFirstNumber}/>
            <input value={this.state.sign} onChange={this.changeSign}/>
            <input type="number" value={this.state.secondNumber} onChange={this.changeSecondNumber}/>
            <button type="button" onClick={this.calculate}>=</button>
            <input type="text" value={this.state.result} disabled="disabled"/>
        </form>
        );
    };

    changeFirstNumber(e) {
        this.setState({firstNumber: e.target.value});
    }

    changeSecondNumber(e) {
        this.setState({secondNumber: e.target.value});
    }

    changeSign(e) {
        this.setState({sign: e.target.value});
    }

    calculate(e) {
        e.preventDefault();

        const result = Number.parseFloat(this.state.firstNumber) - Number.parseFloat(this.state.secondNumber);
        const printResult = result.toPrecision(10);

        this.setState({result: '' + printResult});
    }

}

export default Calculator;