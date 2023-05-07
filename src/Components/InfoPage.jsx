import React from "react";
const InfoPage = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return null;
  }

  return (
    <div className="info">
      <h2>{selectedProduct.name}</h2>
      <div className="price-info">{`Mas barato: $ ${
        selectedProduct.precio_d1 > selectedProduct.precio_ara
          ? selectedProduct.precio_ara
          : selectedProduct.precio_d1
      }`}</div>
      <section className="sec-images">
        <img src={selectedProduct.img1} alt="" />
      </section>

      <span>{` Precio D1:  ${selectedProduct.precio_d1}`} </span>
      <span>{` Precio Ara:  ${selectedProduct.precio_ara}`} </span>
      <span>{` Cantidad:  ${selectedProduct.quantity}`} </span>
    </div>
  );
};

export default InfoPage;
