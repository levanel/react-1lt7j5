import React from 'react';
import './style.css'
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      totalPrice: props.price,
    };
  }

  handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    const totalPrice = this.props.price * quantity;

    this.setState({
      quantity,
      totalPrice,
    });
  };

  render() {
    const { name, description, price } = this.props;
    const { quantity, totalPrice } = this.state;

    return (
      <div
        style={{
          backgroundColor: '#2A363B',
          color: '#E84A5F',
          fontFamily: 'Fira Sans',
        }}
      >
        <h2>{name}</h2>
        <img
          src="https://i.ibb.co/Krjk27V/DALL-E-2023-05-13-06-12-18-Airpods-with-color-2-A363-B-and-E84-A5-F.png"
          alt="React Logo"
          style={{
            border: '3px solid #99B898',
            width: '250px', // Adjust the width as desired
            height: '250px', // Adjust the height as desired
          }}
        />

        <p>{description}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => this.setState({ quantity: quantity - 1 })}
            style={{
              backgroundColor: '#E84A5F',
              color: '#FFFFFF',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              marginRight: '5px',
            }}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={this.handleQuantityChange}
            style={{
              backgroundColor: '#E84A5F',
              color: '#FFFFFF',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              width: '100px',
            }}
          />
          <button
            onClick={() => this.setState({ quantity: quantity + 1 })}
            style={{
              backgroundColor: '#E84A5F',
              color: '#FFFFFF',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              marginLeft: '5px',
            }}
          >
            +
          </button>
        </div>
        <p>Total Price (per unit): Rs  {totalPrice}</p>
        <button
          style={{
            color: '#E84A5F',
            backgroundColor: 'transparent',
            border: '1px solid #E84A5F',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#FECEA8')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Buy Now
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const product = {
      name: '',
      description: 'Faunah is a part of FaunahTech',
      price: 2300,
    };

    return (
      <div
        style={{
          backgroundColor: '#2A363B',
          color: '#E84A5F',
          fontFamily: 'Fira Sans',
        }}
      >
        <h1>Faunah</h1>
        <Product {...product} />
      </div>
    );
  }
}

export default App;
