// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, textType: 'Even'}

  onIncrementCount = () => {
    // const count = this.state
    const min = 0
    const max = 100
    const count = Math.floor(min + Math.random() * (max - min))
    this.setState({count})

    if (count % 2 === 0) {
      this.setState({textType: 'Even'})
    } else {
      this.setState({textType: 'Odd'})
    }
  }

  render() {
    const {count, textType} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Count {count}</h1>
        <p className="paragraph">Count is {textType}</p>
        <button
          className="increment-button"
          type="button"
          onClick={this.onIncrementCount}
        >
          Increment
        </button>
        <p className="tag-line">*Increase By Random Number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
