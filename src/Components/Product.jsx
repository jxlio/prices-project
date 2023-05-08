const Product = ({ img, name, isSelected, modalFn, del, precio }) => {
  return (
    <div className={`cont-pro ${isSelected ? "selected" : ""}`}>
      <button className="delete" onClick={del}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <div className="contenido" onClick={modalFn}>
        <img src={img} alt="" />
        <h4> {name} </h4> 
        <span className="mas-barato">{precio}</span>
      </div>
    
    </div>
  );
};

export default Product;
