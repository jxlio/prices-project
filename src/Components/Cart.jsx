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
                <strong>Precio ARA: </strong>
                {formatPrice(item.precio_ara * item.quantity)}
              </p>
              <p className="cart-item-price">
                <strong>Precio D1: </strong>
                {formatPrice(item.precio_d1 * item.quantity)}
              </p>
              <div className="cart-item-quantity">
                <strong className="cart-item-quantity-label">Cantidad:</strong>
                {item.quantity}
              </div>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => plus(item)}>+</button>
              <button onClick={() => minus(item)}>-</button>
              <button onClick={() => handleRemoveItem(index)}>Borrar</button>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <div className="totals">
            <p>Monto Total ARA: {montoTotalAra} </p>
            <p>Monto Total D1: {montoTotalD1} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
