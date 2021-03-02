import React from "react"



class Socks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      socks: [],
      counter:0
    };
  }
 

  componentDidMount() {
    fetch("http://localhost:3000/socks")
      .then(res => res.json())
      
      .then(result => result.map(data => {return data.image}))
      .then(result => this.setState({
        socks: result
      }))
  }

  moveRight = () => {
    if(this.state.counter < 2){
      this.setState(state => ({
          counter: this.state.counter + 1
        }
      ))
    } else { 
      this.setState(state => ({
        counter: 0
      }
    ))
    }
  }


  moveLeft = () => {
    if(this.state.counter > 0){
      this.setState(state => ({
          counter: this.state.counter - 1
        }
      ))
    } else { 
      this.setState(state => ({
        counter: 2
      }
    ))
    }
  }


  render(){
    return (
      <div>
        <button onClick={this.moveLeft}>⬅️</button>
        <img className="image-size" src={this.state.socks[this.state.counter]}/>
        <button onClick={this.moveRight}>➡️</button>
        <h1>{this.state.socks[this.statecounter]}</h1>
      </div>
    )
  }
}

export default Socks
