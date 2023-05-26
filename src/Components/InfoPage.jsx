import React from "react";
const InfoPage = ({ selectedProduct, formatPrice }) => {
  if (!selectedProduct) {
    return null;
  }

  const priceD1 = parseFloat(selectedProduct.precio_d1);
  const priceOlim = parseFloat(selectedProduct.precio_olim);
  const priceExito= parseFloat(selectedProduct.precio_exito);
  const formattedPriceD1 = formatPrice(priceD1);
  const formattedPriceOlim = formatPrice(priceOlim);
  const formattedPriceExito = formatPrice(priceExito);

  return (
    <div className="info">
      <h2>{selectedProduct.name}</h2>
      <section className="sec-images">
        <img src={selectedProduct.img1} alt="" />
      </section>

      <span>{` Precio D1:  ${formattedPriceD1}`} </span>
      <span>{` Precio Olimpica:  ${formattedPriceOlim}`} </span>
      <span>{` Precio Exito:  ${formattedPriceExito}`} </span>
    </div>
  );
};

export default InfoPage;
