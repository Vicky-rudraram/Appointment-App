// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentsList: [], titleInput: '', dateInput: ''}

  addAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state

    const newAppointment = {
      id: v4(),
      title: titleInput,
      appointmentDate: dateInput,
      isStarred: false,
    }

    this.setState(prev => ({
      appointmentsList: [...prev.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  changeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  changeDate = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  toggleIsStarred = id => {
    this.setState(prev => ({
      appointmentsList: prev.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  starredList = () => {
    const {appointmentsList} = this.state
    const filteredList = appointmentsList.filter(
      eachAppointment => eachAppointment.isStarred === true,
    )

    this.setState({appointmentsList: filteredList})
  }

  render() {
    const {appointmentsList, titleInput, dateInput} = this.state

    return (
      <div className="bg">
        <div className="card">
          <div className="card1">
            <div>
              <form onSubmit={this.addAppointment}>
                <h1>Add Appointment</h1>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  value={titleInput}
                  onChange={this.changeTitle}
                  id="title"
                />
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  value={dateInput}
                  onChange={this.changeDate}
                  id="date"
                />
                <br />
                <button type="submit">Add</button>
              </form>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>

          <hr />
          <div className="card3">
            <h1>Appointments</h1>
            <button type="button" onClick={this.starredList}>
              Starred
            </button>
          </div>

          <ul>
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
