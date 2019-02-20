import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Button from '../utils/MyButton';

class Discount extends Component {

  state = {

    discountStart: 0,
    discountEnd: 30
  }

  discrease=()=>  {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate (){
    setTimeout(()=>{
      this.discrease()
    }, 20)
  }


  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={()=>this.discrease()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before the 20th of June</h3>
              <p>Be a part of the event as an early bird to enjoy our discounted rates. We hope to you make that decision.</p>
              <Button
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="https://google.com" />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;