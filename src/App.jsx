import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    disabled: false,
    intervals: "",
    saveIntervals: []
  }

  start = () => {
    this.setState({
      disabled: true
    })
    let interval = setInterval(() => {
      const { second, minute, hour } = this.state
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1
          })
        } else {
          this.setState({
            second: 0,
            minute: minute + 1
          })
        }
      } else {
        this.setState({
          second: second + 1
        })
      }
    }, 100)
    this.setState({
      intervals: interval
    })
  }
  stop = () => {
    const {intervals, disabled} = this.state
    clearInterval(this.state.intervals)
    this.setState({
      disabled: false
    })
  }
  interval = () => {
    const { hour, minute, second, disabled, saveIntervals } = this.state
    let result = saveIntervals
    result.push(hour + ":" + minute + ":" + second)
    this.setState({
      saveIntervals: result
    })
  }
  clear = () => {
    clearInterval(this.state.intervals)
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      disabled: []
    })
  }
  render() {

    // destrcuting assigment

    const { hour, minute, second, disabled, saveIntervals } = this.state

    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className='text-center'>Stopwatch</h1>
              </div>
              <div className="card-body">
                <h1 className='text-center'>{hour} : {minute} : {second}</h1>
              </div>
              <div className='d-flex justify-content-around mb-3'>
                <button className='btn btn-info' onClick={this.start} disabled={disabled}>start</button>
                <button className='btn btn-primary' onClick={this.stop}>stop</button>
                <button className='btn btn-warning' onClick={this.interval}>interval</button>
                <button className='btn btn-danger' onClick={this.clear}>clear</button>
              </div>
              {
                saveIntervals.map((item) => <h4 className='mr-3 bg-warning text-white p-lg-2'>{item}</h4>)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}




