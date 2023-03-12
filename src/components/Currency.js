import React from 'react';

class Currency extends React.Component {
    constructor() {
      super(Currency);
    }
    render() {
      const colorStyle = {
      color:this.props.color,
      fontSize:this.props.size+"px"
      }

    return (
        <div className='alert alert-secondary'  style={colorStyle}>
            <span>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    
                  <select className="custom-select" id="inputGroupSelect01" >
                        <option defaultValue>Currency (£ Pound)</option>
                        <option value="Dollar" name="Dollar"> $ Dollar</option>
                <option value="Pound" name="Pound">£ Pound</option>
                <option value="Euro" name="Euro">€ Euro</option>
                <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
                
                  </select>

                </div>
                </div>
            </span>
        </div>
    )};
};

export default Currency;
