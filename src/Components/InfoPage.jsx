import React from "react";
import Tooltip from "@mui/material/tooltip";
import { TbShoppingCartPlus } from "react-icons/tb";

const InfoPage = ({ selectedProduct, formatPrice, productos, addTo, cart }) => {
  if (!selectedProduct) {
    return null;
  }

  const priceD1 = parseFloat(selectedProduct.precio_d1);
  const priceOlim = parseFloat(selectedProduct.precio_olim);
  const priceExito = parseFloat(selectedProduct.precio_exito);
  const formattedPriceD1 = formatPrice(priceD1);
  const formattedPriceOlim = formatPrice(priceOlim);
  const formattedPriceExito = formatPrice(priceExito);

  const selectedProductName = selectedProduct.name;
  const selectedProductFirstWord = selectedProductName.split(" ")[0];
  const keyword = selectedProductFirstWord.toLowerCase();

  const similarProducts = productos.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()) &&
      product.id !== selectedProduct.id
  );

  return (
    <div className="info-page">
      <div className="selected-product">
        <h3>{selectedProduct.name}</h3>
        <section className="product-image">
          <img loading="lazy" src={selectedProduct.img1} alt="" />
        </section>

        <div className="product-prices">
          {selectedProduct.precio_d1 > 0 && (
            <span>{`Precio D1: ${formatPrice(
              parseFloat(selectedProduct.precio_d1)
            )}`}</span>
          )}

          {selectedProduct.precio_olim > 0 && (
            <span>{`Precio Olimpica: ${formatPrice(
              parseFloat(selectedProduct.precio_olim)
            )}`}</span>
          )}
          {selectedProduct.precio_exito > 0 && (
            <span>{`Precio Exito: ${formatPrice(
              parseFloat(selectedProduct.precio_exito)
            )}`}</span>
          )}
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h4>Productos similares:</h4>
          <div className="product-list">
            {similarProducts.map((product) => (
              <div key={product.id} className="product">
                <Tooltip title="Agregar producto al carrito" arrow>
                  <button
                    className="similar-cart"
                    onClick={() => addTo(product)}
                  >
                    <TbShoppingCartPlus />
                  </button>
                </Tooltip>
                <h3>{product.name}</h3>
                <section className="product-image">
                  <img loading="lazy" src={product.img1} alt="" />
                </section>

                <div className="product-prices">
                  {product.precio_d1 > 0 && (
                    <span>{`Precio D1: ${formatPrice(
                      parseFloat(product.precio_d1)
                    )}`}</span>
                  )}

                  {product.precio_olim > 0 && (
                    <span>{`Precio Olimpica: ${formatPrice(
                      parseFloat(product.precio_olim)
                    )}`}</span>
                  )}

                  {product.precio_exito > 0 && (
                    <span>{`Precio Exito: ${formatPrice(
                      parseFloat(product.precio_exito)
                    )}`}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
