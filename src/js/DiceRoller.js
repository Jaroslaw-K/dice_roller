import React, { Component } from "react";
import '../scss/diceRoller.scss';

class DiceRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dices: [],
            number: undefined,
            windowAction: false,
        };
    };

    roll = () => {
        let allDices = this.state.dices.map(dice => {return {type: dice.type, result: Math.floor(Math.random() * (dice.type)) + 1}});   
        this.setState({
            dices: allDices,
            windowAction: false
        },()=> console.log(this.state.dices));
    }

    show = () => {
        var sum = 0;
        this.state.dices.forEach(dice => sum += dice.result);
        var element = (<React.Fragment>
            <p className="rollContainer">{this.state.dices.map((dice, index) => dice.result?<div className="singleRoll" key={index}>{`D${dice.type}`}:{dice.result}&nbsp;</div>:"")}</p>
            <p className="sum">{sum > 0?`SUM:${sum}`:""}</p>
        </React.Fragment>);
            
        return element; 
    }

    clear = () => {
        this.setState({
            dices: [],
            windowAction: false,
        });
    };

    addDice = (dice) => {
        let diceTab = this.state.dices.map(dice => {return {type: dice.type, result: dice.result}});
        console.log(diceTab)
        diceTab.push({type: dice, result: null});

        this.setState({
            dices: diceTab,
            number: ""
        }, ()=> console.log(this.state.dices));  
        
    };

    choosedDices = () => {
        let countDices = {};
        this.state.dices.forEach(dice => { 
            if(countDices[`D${dice.type}`] === undefined){
                countDices[`D${dice.type}`] = 0;
            }
            countDices[`D${dice.type}`] +=1;
        });
        let elements = [];
        for (const [key, value] of Object.entries(countDices)) {
            if (value === 0) continue;  
            elements.push(<div className="choosedDice" key={key}>{`${key}:${value}`}</div>)  
          }
          console.log('work')
          return elements;
    };

    handleNumberChange = (e) => {
            this.setState({number: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.number <= 1) {
            this.setState({
                windowAction: true,
                number: undefined
            })
            alert("PLEASE CHOOSE VALUE GREATER THAN 1");
            return;
        };
        this.addDice(parseFloat(this.state.number));
        this.setState({windowAction: false});
    };

    openChooseWindow = () => {
        this.setState({windowAction: true});
    }

    createForm = () => {
        let form;
        form = <form className="form">
                <label>PLEASE CHOOSE VALUE GREATER THAN 1</label>
                <input className="number" type="number" name="number" value={this.state.number} onChange={this.handleNumberChange}/>
                <input onClick={this.handleSubmit} type="submit" value="Accept"/> 
            </form>;
            return form;
    }

    render () {
        return ( 
            <main className="container">
                <section className="section sectionTop">
                    <div className="resultContainer">
                    {this.show()}
                    {this.state.windowAction?this.createForm():""}
                    </div>
                    <div className="displayContainer">
                        {this.choosedDices()}
                    </div>
                </section>
                <section className="section sectionBottom">
                    <div className="dices"> 
                        <button className="btn btnD4" onClick={() => this.addDice(4)}>D4</button>
                        <button className="btn btnD6" onClick={() => this.addDice(6)}>D6</button>
                        <button className="btn btnD8" onClick={() => this.addDice(8)}>D8</button>
                        <button className="btn btnD10" onClick={() => this.addDice(10)}>D10</button>
                        <button className="btn btnD12" onClick={() => this.addDice(12)}>D12</button>
                        <button className="btn btnD20" onClick={() => this.addDice(20)}>D20</button>
                        <button className="btn btnChoose" onClick={()=>this.openChooseWindow()}>CHOOSE DICE</button>
                    </div>
                    <div className="buttons">
                        <button type="submit" className="btn" onClick={() => this.roll()}>ROLL</button>
                        <button type="submit" className="btn" onClick={() => this.clear()}>CLEAR</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default DiceRoller;