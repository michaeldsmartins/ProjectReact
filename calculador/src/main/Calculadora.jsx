import React, { Component } from "react"
import './Calculadora.css'

import Button from '../componente/Button'
import Display from '../componente/Display'

const initialstate = {
    displayvalue: '0',
    clearvalue: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component {
   
    state = { ...initialstate }
     
    constructor(props) {
        super(props)
        this.clearmemory = this.clearmemory.bind(this)
        this.setoperation = this.setoperation.bind(this)
        this.adddigit = this.adddigit.bind(this)
    }

    clearmemory(){
        this.setState({ ...initialstate })
    }
    setoperation(operation) {
       if (this.state.current === 0) {
        this.setState({ operation, current: 1, cleardisplay: true})
       } else {
            const final = operation === '='
            const currentoperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentoperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0
            this.setState({
                displayvalue: values[0],
                operation: final ? null : operation,
                current: final ? 0 : 1,
                cleardisplay: !final,
                values
            })
       }   

    }
    adddigit(n) {
        if (n === '.' && this.state.displayvalue.includes('.')) {
            return
        }

        const cleardisplay = this.state.displayvalue === '0'
             || this.state.cleardisplay 
        const currentvalue = cleardisplay ? '' : this.state.displayvalue
        const displayvalue = currentvalue + n 
        this.setState({ displayvalue, cleardisplay: false }) 

        if (n != '.') {
            const i = this.state.current
            const newvalue = parseFloat(displayvalue)
            const values = [...this.state.values]
            values[i] = newvalue
            this.setState({ values })

        }
    }
    

    render() {
        return (
            <div className='calculadora'>
                <Display value={this.state.displayvalue} />
                <Button label="AC" click={this.clearmemory} triple />
                <Button label="/"  click={this.setoperation} operation/>
                <Button label="7"  click={this.adddigit}/>
                <Button label="8"  click={this.adddigit}/>
                <Button label="9"  click={this.adddigit}/>
                <Button label="*"  click={this.setoperation} operation/>
                <Button label="4"  click={this.adddigit}/>
                <Button label="5"  click={this.adddigit}/>
                <Button label="6"  click={this.adddigit}/>
                <Button label="-"  click={this.setoperation} operation/>
                <Button label="1"  click={this.adddigit}/>
                <Button label="2"  click={this.adddigit}/>
                <Button label="3"  click={this.adddigit}/>
                <Button label="+"  click={this.setoperation} operation/>
                <Button label="0"  click={this.adddigit} double />
                <Button label="."  click={this.adddigit}/>
                <Button label="="  click={this.setoperation} operation/>
            </div>
        )
    }
}