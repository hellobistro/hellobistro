import React from 'react';
import ApiService from '../../services/ApiService';
const moment = require("moment");

class OrderTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    }
  }

  calculateTime(order){
    var now = moment.utc().format("YYYY-MM-DD HH:mm:ss")
    var then = order.createdAt;
    var ms = moment(now,"YYYY-MM-DD HH:mm:ss").diff(moment(then,"YYYY-MM-DD HH:mm:ss"));
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    s = s.substring(0,2) + ' Hours ' + s.substring(3,5) + ' Minutes ' + s.substring(6,8) + ' Seconds  ago'
    this.setState({time: s})
    setInterval(() => {
      this.calculateTime(order)
    }, 30000)
  }

  componentDidMount(){
    this.calculateTime(this.props.order)
  } 

  render(){
    return (<div>
      <div>Order placed: <strong>{this.state.time}</strong></div>
    </div>)
  }
};

export default OrderTimer;