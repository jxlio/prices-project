import "../Styles/Cart.css"


const Cart = ({ cartItems, setCartItems, toggleCart }) => {
    const handleRemoveItem = (index) => {
      setCartItems(cartItems.filter((item, i) => i !== index));
    };
  
    return (
    <div className="back-modal">
      <div className="cart-container">
        <button onClick={toggleCart}> X </button>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <img src={item.img} alt="" height={100} width={100} />
            <p>Price: {item.precio}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
      </div>
      </div>
    );
  };

  export default Cart