import React, { Component } from "react";

import '../scss/diceRoller.scss';
// import D6 from './dices/d6';
// import D4 from './dices/d4';

class DiceRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterDice4: 0,
            existDice4: false,
            resultsTableD4: [],

            counterDice6: 0,
            existDice6: false,
            resultsTableD6: [],

            counterDice8: 0,
            existDice8: false,
            resultsTableD8: [],

            counterDice10: 0,
            existDice10: false,
            resultsTableD10: [],

            counterDice12: 0,
            existDice12: false,
            resultsTableD12: [],

            counterDice20: 0,
            existDice20: false,
            resultsTableD20: [],

            counterMoreDices: 0,
            diceType: 0,
            existMoreDices: false,
            resultsTableDX: [],

        };
    };
    roll = () => {
        if (this.state.existDice4) {
            let resultsTable4 = [];
            for (let i = 0; i < this.state.counterDice4; i++) {
                let resultD4 = Math.floor(Math.random() * (5 - 1)) + 1;
                resultsTable4.push(resultD4);
                console.log(resultD4);
            }
            this.setState({resultsTableD4: resultsTable4},()=>{
                console.log(this.state.resultsTableD4);
            });
        };
        if (this.state.existDice6) {
            let resultsTable6 = [];
            for (let i = 0; i < this.state.counterDice6; i++) {
                let resultD6 = Math.floor(Math.random() * (7 - 1)) + 1;
                resultsTable6.push(resultD6);
                console.log(resultD6);
            }
            this.setState({resultsTableD6: resultsTable6},()=>{
                console.log(this.state.resultsTableD6);
            });
        };
        if (this.state.existDice8) {
            let resultsTable8 = [];
            for (let i = 0; i < this.state.counterDice8; i++) {
                let resultD8 = Math.floor(Math.random() * (9 - 1)) + 1;
                resultsTable8.push(resultD8);
                console.log(resultD8);
            }
            this.setState({resultsTableD8: resultsTable8},()=>{
                console.log(this.state.resultsTableD8);
            });
        };
        if (this.state.existDice10) {
            let resultsTable10 = [];
            for (let i = 0; i < this.state.counterDice10; i++) {
                let resultD10 = Math.floor(Math.random() * (11 - 1)) + 1;
                resultsTable10.push(resultD10);
                console.log(resultD10);
            }
            this.setState({resultsTableD10: resultsTable10},()=>{
                console.log(this.state.resultsTableD10);
            });
        };
        if (this.state.existDice12) {
            let resultsTable12 = [];
            for (let i = 0; i < this.state.counterDice12; i++) {
                let resultD12 = Math.floor(Math.random() * (13 - 1)) + 1;
                resultsTable12.push(resultD12);
                console.log(resultD12);
            }
            this.setState({resultsTableD12: resultsTable12},()=>{
                console.log(this.state.resultsTableD12);
            });
        };
        if (this.state.existDice20) {
            let resultsTable20 = [];
            for (let i = 0; i < this.state.counterDice20; i++) {
                let resultD20 = Math.floor(Math.random() * (21 - 1)) + 1;
                resultsTable20.push(resultD20);
                console.log(resultD20);
            }
            this.setState({resultsTableD20: resultsTable20},()=>{
                console.log(this.state.resultsTableD20);
            });
        };
        
    };
    show = () => {
        var element = (<React.Fragment>
            <p>{this.state.resultsTableD4.map(result => <span>D4:{result}&nbsp;</span>)}</p>
            <p>{this.state.resultsTableD6.map(result => <span>D6:{result}&nbsp;</span>)}</p>
            <p>{this.state.resultsTableD8.map(result => <span>D8:{result}&nbsp;</span>)}</p>
            <p>{this.state.resultsTableD10.map(result => <span>D10:{result}&nbsp;</span>)}</p>
            <p>{this.state.resultsTableD12.map(result => <span>D12:{result}&nbsp;</span>)}</p>
            <p>{this.state.resultsTableD20.map(result => <span>D20:{result}&nbsp;</span>)}</p>
        </React.Fragment>);
        return element;
    }
    clear = () => {
        this.setState({
            counterDice4: 0,
            existDice4: false,
            resultsTableD4: [],

            counterDice6: 0,
            existDice6: false,
            resultsTableD6: [],

            counterDice8: 0,
            existDice8: false,
            resultsTableD8: [],

            counterDice10: 0,
            existDice10: false,
            resultsTableD10: [],

            counterDice12: 0,
            existDice12: false,
            resultsTableD12: [],

            counterDice20: 0,
            existDice20: false,
            resultsTableD20: [],
        });
    };

    addDice4 = () => {
        this.setState((prev)=>{ 
            return {counterDice4: prev.counterDice4 + 1, existDice4: true
        }});
    };
    addDice6 = () => {
        this.setState((prev)=> {
            return {counterDice6: prev.counterDice6 + 1, existDice6: true
        }});
    };
    addDice8 = () => {
        this.setState((prev)=> {
            return {counterDice8: prev.counterDice8 + 1, existDice8: true
        }});
    };
    addDice10 = () => {
        this.setState((prev)=> {
            return {counterDice10: prev.counterDice10 + 1, existDice10: true
        }});
    };
    addDice12 = () => {
        this.setState((prev)=> {
            return {counterDice12: prev.counterDice12 + 1, existDice12: true
        }});
    };
    addDice20 = () => {
        this.setState((prev)=> {
            return {counterDice20: prev.counterDice20 + 1, existDice20: true
        }});
    };
    addDiceX = () => {

    };
    render () {
        return ( 
            <main className="container">
                <section className="section sectionTop">
                    <div className="resultContainer">
                    {this.show()}
                    </div>
                    <div className="displayContainer">
                            {this.state.existDice4? this.state.counterDice4 + 'd4':""}&nbsp;
                            {this.state.existDice6? this.state.counterDice6 + 'd6':""}&nbsp;
                            {this.state.existDice8? this.state.counterDice8 + 'd8':""}&nbsp;
                            {this.state.existDice10? this.state.counterDice10 + 'd10':""}&nbsp;
                            {this.state.existDice12? this.state.counterDice12 + 'd12':""}&nbsp;
                            {this.state.existDice20? this.state.counterDice20 + 'd20':""}&nbsp;
                    </div>
                </section>
                <section className="section sectionBottom">
                    <div className="dices"> 
                        <div className="diceBox" onClick={() => this.addDice4()}>d4</div>
                        <div className="diceBox" onClick={() => this.addDice6()}>d6</div>
                        <div className="diceBox" onClick={() => this.addDice8()}>d8</div>
                        <div className="diceBox" onClick={() => this.addDice10()}>d10</div>
                        <div className="diceBox" onClick={() => this.addDice12()}>d12</div>
                        <div className="diceBox" onClick={() => this.addDice20()}>d20</div>
                        <div className="diceBox" onClick={() => this.addDiceX()}>Type</div>
                    </div>
                    <div className="buttons">
                        <button type="submit" className="btn btnRoll" onClick={() => this.roll()}>ROLL</button>
                        <button type="submit" className="btn btnClear" onClick={() => this.clear()}>CLEAR</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default DiceRoller;