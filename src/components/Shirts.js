import React from "react"



class Shirts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      shirts: [],
      counter:0
    };
  }
 

  componentDidMount() {
    fetch("http://localhost:3000/tops")
      .then(res => res.json())
      
      .then(result => result.map(data => {return data.image}))
      .then(result => this.setState({
        shirts: result
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
        <img className="image-size" src={this.state.shirts[this.state.counter]}/>
        <button onClick={this.moveRight}>➡️</button>
        <h1>{this.state.shirts[this.counter]}</h1>
      </div>
    )
  }
}

export default Shirts
