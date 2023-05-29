import "../Styles/Cart.css";

const Cart = ({
  cartItems,
  setCartItems,
  toggleCart,
  plus,
  minus,
  formatPrice,

  /* Esta funcion elimina un producto del carrito a traves de su id, se le pasa el id del producto a la funcion y filtra dejando todos los items 
  con un id diferente al que se paso, es decir dejando todos los productos menos ese xd*/
}) => {
  const handleRemoveItem = (index) => {
    setCartItems(cartItems.filter((item, i) => i !== index));
  };

  /* Ëstas funciones basicamente suman los valores totales para cada distribuidora en el carrito, se utiliza el metodo educe de js.
  Basicamente tiene una funcion de argumento que toma dos argumentos mas, donde el primero es el acumulador y el segundo el actual
  */

  const montoTotalD1 = formatPrice(
    cartItems.reduce((total, item) => total + item.precio_d1 * item.quantity, 0)
  );

  const montoTotalOlim = formatPrice(
    cartItems.reduce(
      (total, item) => total + item.precio_olim * item.quantity,
      0
    )
  );

  const montoTotalExito = formatPrice(
    cartItems.reduce(
      (total, item) => total + item.precio_exito * item.quantity,
      0
    )
  );

  /* Estilos, y renderizacion condicional, poco mas*/

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
                <strong>Precio D1: </strong>
                {formatPrice(item.precio_d1 * item.quantity)}
              </p>

              <p className="cart-item-price">
                <strong>Precio Olimpica: </strong>
                {formatPrice(item.precio_olim * item.quantity)}
              </p>

              <p className="cart-item-price">
                <strong>Precio Exito: </strong>
                {formatPrice(item.precio_exito * item.quantity)}
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
            <p>Monto Total D1: {montoTotalD1} </p>
            <p>Monto Total ARA: {montoTotalOlim} </p>
            <p>Monto Total ARA: {montoTotalExito} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
