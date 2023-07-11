// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, num: 'Even'}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
    if (randomNumber % 2 === 0) {
      this.setState({num: 'Even'})
    } else {
      this.setState({num: 'Odd'})
    }
  }

  render() {
    const {count, num} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="count">Count {count}</h1>
          <p className="count-description">Count is {num}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="span-description">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
