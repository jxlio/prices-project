import "../Styles/Cart.css";

const Cart = ({
  cartItems,
  setCartItems,
  toggleCart,
  plus,
  minus,
  formatPrice,
}) => {
  const handleRemoveItem = (index) => {
    setCartItems(cartItems.filter((item, i) => i !== index));
  };

  const montoTotalD1 = formatPrice(
    cartItems.reduce((total, item) => total + item.precio_d1 * item.quantity, 0)
  );

  const montoTotalAra = formatPrice(
    cartItems.reduce(
      (total, item) => total + item.precio_ara * item.quantity,
      0
    )
  );

  return (
    <div className="back-modal">
      <div className="cart-container">
        <button className="close-cart" onClick={toggleCart}>
          X
        </button>
        <h2>Carrito de compras</h2>
        {cartItems.length === 0 && <p>No hay nada en tu carrito o.O!</p>}
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.img} alt="" />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">
                Precio ARA: {formatPrice(item.precio_ara * item.quantity)}
              </p>
              <p className="cart-item-price">
                Precio D1: {formatPrice(item.precio_d1 * item.quantity)}
              </p>
              <div className="cart-item-quantity">
                <span className="cart-item-quantity-label">Cantidad:</span>
                {item.quantity}
              </div>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => plus(item)}>+</button>
              <button onClick={() => minus(item)}>-</button>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <div>
            <p>Monto Total D1: {montoTotalD1} </p>
            <p>Monto Total ARA: {montoTotalAra} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
