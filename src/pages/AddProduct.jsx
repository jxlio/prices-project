import React, { useContext, useState } from "react";
import "../Styles/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { DarkMode } from "../context/darkMode";
import {BiArrowBack} from "react-icons/bi"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const FormAddProd = ({ producto, setProducto }) => {
  const [form, setForm] = useState({
    name: "",
    img1: "",
    precio_ara: "",
    precio_d1: "",
    category: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const [dark, setDark, toggleDarkMode] = useContext(DarkMode);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("img1", form.img1);
    fd.append("precio_ara", form.precio_ara);
    fd.append("precio_d1", form.precio_d1);
    fd.append("category", form.category);

    fetch("http://localhost/products/index.php", {
      method: "POST",
      body: fd,
    })
      .then((response) => response.json())
      .then((newProduct) => {
        setProducto((prevState) => [...prevState, newProduct]);
        setForm({
          name: "",
          category: "",
          description: "",
          img1: "",
          precio_ara: "",
          precio_d1: "",
        });
        toast.success("Producto agregado con éxito", {
          position: "top-right",
          autoClose: 2000,
          closeOnClick: true,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="form-container"
      style={{ backgroundColor: dark && "#202124", color: dark && "white" }}
    >
      <div className="atras-cont" title="Volver">
        <Link to={"/products"} className="atras">
          {" "}
        <BiArrowBack/>
        </Link>
             
      {dark ? (
        <MdDarkMode className="darkMode" onClick={toggleDarkMode} style={{ color: dark && "white" }} />
      ) : (
        <MdOutlineDarkMode className="darkMode" onClick={toggleDarkMode} style={{ color: dark && "black" }}  />
      )}
      </div>

      <form className="formAdd" onSubmit={handleSubmit}>
        <ToastContainer />

        <p  style={{ color: dark && "white" }}>Agregar producto</p>

        <label htmlFor="name">
          {" "}
          Nombre{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ backgroundColor: dark && "#303134", color: dark && "white" }}            
          />
        </label>

        <label htmlFor="category">
          {" "}
          Categoría{" "}
          <select 
            name="category"
            id="category"
            value={form.category}
            onChange={handleChange}
            style={{ backgroundColor: dark && "#303134", color: dark && "white" }}   
          >
            <option value="">Selecciona una categoria</option>
            <option value="1">Bebidas</option>
            <option value="2">Alimentos Básicos</option>
            <option value="3">Mecatos</option>
            <option value="4">Lácteos y huevos</option>
            <option value="5">Productos de limpieza</option>
            <option value="6">Aseo personal</option>
            <option value="7">Frutas</option>
            <option value="8">Carnes</option>
          </select>
        </label>

        <label htmlFor="img1">
          Imagen{" "}
          <input
            type="text"
            name="img1"
            value={form.img1}
            onChange={handleChange}
            required
            style={{ backgroundColor: dark && "#303134", color: dark && "white" }}      
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
            style={{ backgroundColor: dark && "#303134", color: dark && "white" }}   
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
            style={{ backgroundColor: dark && "#303134", color: dark && "white" }}   
          />
        </label>

        <button type="submit">Agregar producto</button>
      </form>
    </div>
  );
};

export default FormAddProd;
