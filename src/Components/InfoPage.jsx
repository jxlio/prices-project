import React from "react";
const InfoPage = ({ selectedProduct, formatPrice }) => {
  if (!selectedProduct) {
    return null;
  }

  const priceD1 = parseFloat(selectedProduct.precio_d1);
  const priceAra = parseFloat(selectedProduct.precio_ara);
  const formattedPriceD1 = formatPrice(priceD1);
  const formattedPriceAra = formatPrice(priceAra);

  return (
    <div className="info">
      <h2>{selectedProduct.name}</h2>
      <section className="sec-images">
        <img src={selectedProduct.img1} alt="" />
      </section>

      <span>{` Precio D1:  ${formattedPriceD1}`} </span>
      <span>{` Precio Ara:  ${formattedPriceAra}`} </span>

    </div>
  );
};

export default InfoPage;
