import  { Component } from 'react'
import loading from './loading.gif'


export class Spinner extends Component {
  render() {
    return (
      <div>

        <img src={loading} alt="loading" style={{width:"70px",height:"50px",textAlign:"center"}} />
      </div>
    )
  }
}

export default Spinner
