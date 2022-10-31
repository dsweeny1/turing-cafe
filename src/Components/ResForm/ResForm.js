import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            number: '',
            time: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value})
    }

    submitReservation = (event) => {
        event.preventDefault()
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newReservation)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ name: '', date: '', number: '', time: ''})
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={ event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Date'
                    name='date'
                    value={this.state.date}
                    onChange={ event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Number of Guests'
                    name='number'
                    value={this.state.number}
                    onChange={ event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={ event => this.handleChange(event)}
                />
            <button onClick={ event => this.submitReservation(event)}>
            Sumbit Reservation
            </button>
            </form>
        )
    }
}

export default Form