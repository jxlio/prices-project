import React, { useContext, useState } from "react";
import "../Styles/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { DarkMode } from "../context/darkMode";
import { BiArrowBack } from "react-icons/bi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";


/* El formulario de esta pagina lo controlo usando un estado el cual tiene el valor de cada uno de esos inputs como strings vacios,
utilizo el nombre exacto q tiene cada input para luego asignar el valor escrito por el usuario mas facil */

const FormAddProd = ({ producto, setProducto }) => {
  const [form, setForm] = useState({
    name: "",
    img1: "",
    category: "",
    precio_olim: "",
    precio_exito: "",
    precio_d1: "",
  });

  /* en este handleChange tomo el valor escrito en cada input y se lo asigno a la key correspondiente del estado usando el nombre [name]: value */

  function handleChange(event) {
    const { value, name } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log(form);
  }

  /*Esto es una variable global para controlar el modo oscuro */

  const [dark, setDark, toggleDarkMode] = useContext(DarkMode);

  /* Este handleSubmit es la funcion que se ejecuta cuando se envia el formulario, basicamente todo cada valor de los inputs y
  se los agrego a un formData, luego ese formData lo paso en el POST como body, para asi agregar los productos*/

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("img1", form.img1);
    fd.append("category", form.category);
    fd.append("precio_olim", form.precio_olim);
    fd.append("precio_exito", form.precio_exito);
    fd.append("precio_d1", form.precio_d1);

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
          precio_olim: "",
          precio_exito: "",
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
          <BiArrowBack />
        </Link>

        {dark ? (
          <MdDarkMode
            className="darkMode"
            onClick={toggleDarkMode}
            style={{ color: dark && "white" }}
          />
        ) : (
          <MdOutlineDarkMode
            className="darkMode"
            onClick={toggleDarkMode}
            style={{ color: dark && "black" }}
          />
        )}
      </div>

      <form className="formAdd" onSubmit={handleSubmit}>
        <ToastContainer />

        <p style={{ color: dark && "white" }}>Agregar producto</p>

        <label htmlFor="name">
          {" "}
          Nombre{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              backgroundColor: dark && "#303134",
              color: dark && "white",
            }}
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
            style={{
              backgroundColor: dark && "#303134",
              color: dark && "white",
            }}
          >

            {/* En estos option utilizo de value esos numero ya que son los que le corresponden a cada categoria en la BD */}
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
            style={{
              backgroundColor: dark && "#303134",
              color: dark && "white",
            }}
          />
        </label>

        <label htmlFor="precio_olim">
          {" "}
          Precio Olimpica
          <input
            type="number"
            name="precio_olim"
            value={form.precio_olim}
            onChange={handleChange}
            style={{
              backgroundColor: dark && "#303134",
              color: dark && "white",
            }}
          />
        </label>

        <label htmlFor="precio_exito">
          {" "}
          Precio Exito
          <input
            type="number"
            name="precio_exito"
            value={form.precio_exito}
            onChange={handleChange}
            style={{
              backgroundColor: dark && "#303134",
              color: dark && "white",
            }}
          />
        </label>

        <label htmlFor="precio_d1">
          Precio D1
          <input
            type="number"
            name="precio_d1"
            value={form.precio_d1}
            onChange={handleChange}
            style={{
              backgroundColor: dark && "#303134",
              color: dark && "white",
            }}
          />
        </label>

        <button type="submit">Agregar producto</button>
      </form>
    </div>
  );
};

export default FormAddProd;
