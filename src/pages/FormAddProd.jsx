import React, { useRef, useState } from "react";
import "../pages/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const FormAddProd = ({ producto, setProducto }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    quantity: "",
    img1: "",
    precio_ara: "",
    precio_d1: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("description", form.description);
    fd.append("quantity", form.quantity);
    fd.append("img1", form.img1);
    fd.append("precio_ara", form.precio_ara);
    fd.append("precio_d1", form.precio_d1);

    fetch("http://localhost/products/index.php", {
      method: "POST",
      body: fd,
    }).then((response) => response.json());

    toast.success("Producto agregado con exito", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      theme: "light",
    });
    setForm({
      name: "",
      description: "",
      quantity: "",
      img1: "",
      precio_ara: "",
      precio_d1: "",
    })
      .then((newProduct) => {
        setProducto([...producto, newProduct]);
      })
      .catch((error) => console.error(error));
    toast.error("Error");
  };

  return (
    <>
    <div className="atras-cont" title="Volver" >
    <Link to={"/products"} className="atras">
        {" "}
        <i class="fa-solid fa-circle-left"></i>{" "}
      </Link>
    </div>
     
      <form className="formAdd" onSubmit={handleSubmit}>
        <ToastContainer />

        <p>Agregar producto</p>

        <label htmlFor="name">
          {" "}
          Nombre{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="description">
          {" "}
          Descripcion{" "}
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="quantity">
          Cantidad
          <input
            type="number"
            min={1}
            max={9999}
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="img1">
          Imagen{" "}
          <input
            type="text"
            name="img1"
            value={form.img1}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="precio_ara">
          {" "}
          Precio D1
          <input
            type="number"
            name="precio_ara"
            value={form.precio_ara}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="precio_d1">
          Precio ARA
          <input
            type="number"
            name="precio_d1"
            value={form.precio_d1}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Agregar producto</button>
      </form>
    </>
  );
};

export default FormAddProd;
