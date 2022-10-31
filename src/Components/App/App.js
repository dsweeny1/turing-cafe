import React, { Component } from 'react';
import ResContainer from '../ResContainer/ResContainer';
import ResForm from '../ResForm/ResForm'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
    }
  }

  componentDidMount = async() => {
    const url = ('http://localhost:3001/api/v1/reservations')
    try {
      const response = await fetch(url)
      const allReservations = await response.json()
      if (!response.ok) {
        throw new Error(response.status)
      }
      this.setState({ reservations: allReservations})
    } catch(error) {
    }
  }

  addReservation = (newReservation) => {
    try {
      const response = fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify({
          id: newReservation.id,
          name: newReservation.name,
          date: newReservation.date,
          time: newReservation.time,
          number: newReservation.number
        }),
        headers: {
          'Content-Type': 'application/JSON'
        }});
      if (!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
      }
      const data = response.json();
      return data;
    }
    catch (error) {
      console.log(error.message)
    }
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }
  

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm addReservation={this.addReservation}/>
          {!this.state.reservations.length && <h2>Add A Reservation!</h2>}
        </div>
        <div className='resy-container'>
          <ResContainer key={this.state.reservations.id} reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
