import { Component } from "react";

import '../scss/diceRoller.scss';
// import D6 from './dices/d6';
// import D4 from './dices/d4';


class DiceRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterDice4: 0,
            existDice4: false,

            counterDice6: 0,
            existDice6: false,

            counterDice8: 0,
            existDice8: false,

            counterDice10: 0,
            existDice10: false,

            counterDice12: 0,
            existDice12: false,

            counterDice20: 0,
            existDice20: false,

            counterMoreDices: 0,
            diceType: 0,
            existMoreDices: false
        };
    };
    roll = () => {
        console.log('roll work');
    };
    clear = () => {
        this.setState({
            counterDice4: 0,
            counterDice6: 0,
            counterDice8: 0,
            counterDice10: 0,
            counterDice12: 0,
            counterDice20: 0,
        });

        let displayContainer = document.querySelector('.displayContainer');
        displayContainer.innerText = '';
    };

    addDice4 = () => {
        this.setState({
            counterDice4: this.state.counterDice4 + 1,
            existDice4: true
        });
    };
    addDice6 = () => {
        this.setState({
            counterDice6: this.state.counterDice6 + 1,
            existDice6: true
        });
    };
    addDice8 = () => {
        this.setState({
            counterDice8: this.state.counterDice8 + 1,
            existDice8: true
        });
    };
    addDice10 = () => {
        this.setState({
            counterDice10: this.state.counterDice10 + 1,
            existDice10: true
        });
    };
    addDice12 = () => {
        this.setState({
            counterDice12: this.state.counterDice12 + 1,
            existDice12: true
        });
    };
    addDice20 = () => {
        this.setState({
            counterDice20: this.state.counterDice20 + 1,
            existDice20: true
        });
    };
    
    render () {
        return (
            <main className="container">
                <section className="section sectionTop">
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