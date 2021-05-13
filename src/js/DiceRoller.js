import React, { Component } from "react";

import '../scss/diceRoller.scss';
// import D6 from './dices/d6';
// import D4 from './dices/d4';

class DiceRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dices: [],
        };
    };

    roll = () => {
        let allDices = this.state.dices.map(dice => {return {type: dice.type, result: Math.floor(Math.random() * (dice.type)) + 1}});   
        this.setState({
            dices: allDices
        },()=> console.log(this.state.dices));
    }

    show = () => {
        var sum = 0;
        this.state.dices.forEach(dice => sum += dice.result);
        var element = (<React.Fragment>
            <p>{this.state.dices.map((dice, index) => dice.result?<span key={index}>{`D${dice.type}`}:{dice.result}&nbsp;</span>:"")}</p>
            <p>{sum > 0?`SUM:${sum}`:""}</p>
        </React.Fragment>);
            
        return element; 
    }

    clear = () => {
        this.setState({
            dices: []
        })
    };

    addDice = (dice) => {
        let diceTab = this.state.dices.map(dice => {return {type: dice.type, result: dice.result}});
        console.log(diceTab)
        diceTab.push({type: dice, result: null});

        this.setState({
            dices: diceTab
        }, ()=> console.log(this.state.dices));      
    };

    choosedDices = () => {
        let countDices = {};
        this.state.dices.forEach(dice => {  
            if(countDices[`d${dice.type}`] === undefined ){
                countDices[`d${dice.type}`] = 0;
            }
            countDices[`d${dice.type}`] +=1;
        });
        let elements = [];
        for (const [key, value] of Object.entries(countDices)) {
            if (value == 0) continue;  
            elements.push(<span key={key}>{`${key}:${value}`}&nbsp;</span>)  
          }
          return elements;
    };

    render () {
        return ( 
            <main className="container">
                <section className="section sectionTop">
                    <div className="resultContainer">
                    {this.show()}
                    </div>
                    <div className="displayContainer">
                            {this.choosedDices()}
                    </div>
                </section>
                <section className="section sectionBottom">
                    <div className="dices"> 
                        <div className="diceBox" onClick={() => this.addDice(4)}>D4</div>
                        <div className="diceBox" onClick={() => this.addDice(6)}>D6</div>
                        <div className="diceBox" onClick={() => this.addDice(8)}>D8</div>
                        <div className="diceBox" onClick={() => this.addDice(10)}>D10</div>
                        <div className="diceBox" onClick={() => this.addDice(12)}>D12</div>
                        <div className="diceBox" onClick={() => this.addDice(20)}>D20</div>
                        <div className="diceBox" onClick={() => this.addDice(parseInt(window.prompt("Choose any dice number")))}>Choose Dice</div>
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