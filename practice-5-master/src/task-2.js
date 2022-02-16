import React from "react";

let a,b;
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: "",
            b: "",
            result: "",
        };
    }
    // якщо це буква тоді ігноруєм її
    onChangeHandler1(e) {
        const temp = e.target.value.match(/\d+/g);
        if (!temp) {
            e.target.value="";
            this.setState({a:''});
        } else {
            e.target.value = temp[0];
            this.setState({a: temp[0]});
        }

    }
    onChangeHandler2(e) {
        const temp = e.target.value.match(/\d+/g);
        if (!temp) {
            e.target.value = "";
            this.setState({ b: ''});
        } else {
            e.target.value=temp[0];
            this.setState({b: temp[0]});
        }
    }

    add() {
        this.setState({
            result: +this.state.a + +this.state.b
        });
    }
    sub() {
        this.setState({
            result: this.state.a - this.state.b
        });
    }
    mul() {
        this.setState({
            result: this.state.a * this.state.b
        });
    }
    div() {
        this.setState({
            result: this.state.a / this.state.b
        });
    }
    clear() {
        this.setState({
            result: 0,
            a:0,
            b:0
        });
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-3"><input type="text" class="form-control" placeholder="Operand 1" onChange={this.onChangeHandler1.bind(this)} /></div>
                    <div class="col-3"><input type="text" class="form-control" placeholder="Operand 2" onChange={this.onChangeHandler2.bind(this)} /></div>
                    <div class="col-2"><button class="btn btn-block btn-danger" onClick={this.clear.bind(this)}>Clear</button></div>
                </div>
                <div class="row my-3">
                    <div class="col-2"><button class="btn btn-block btn-secondary" onClick={this.add.bind(this)}>Add</button></div>
                    <div class="col-2"><button class="btn btn-block btn-secondary" onClick={this.sub.bind(this)}>Subtract</button></div>
                    <div class="col-2"><button class="btn btn-block btn-secondary" onClick={this.mul.bind(this)}>Multiply</button></div>
                    <div class="col-2"><button class="btn btn-block btn-secondary" onClick={this.div.bind(this)}>Divide</button></div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Result" value = {this.state.result}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;