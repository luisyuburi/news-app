import React from "react";
import PropTypes from "prop-types";

import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "breaking-news", label: "Ultimas Noticias" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencias" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  // Utilizar custom hook
  const [categoria, SelectNoticias] = useSelect("breaking-news", OPCIONES);

  // Submit al form, pasar categoria a App.js
  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

          <SelectNoticias />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;
