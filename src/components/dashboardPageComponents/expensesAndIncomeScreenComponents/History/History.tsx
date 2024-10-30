import { useState } from 'react';
import { gastos, Categoria } from './data'; 
import "./History.css"

export const History = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | "">(""); // Estado para categoría seleccionada

  // Función select
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoriaSeleccionada(e.target.value as Categoria);
  };

  // Filtro
  const gastosFiltrados = categoriaSeleccionada
    ? gastos.filter((gasto) => gasto.categoria === categoriaSeleccionada)
    : gastos;

  return (
    <div className="generalHistory">
      <div className='topHistory'>
      <h1>Historial</h1>
      
      <select name="categories" onChange={handleChange} value={categoriaSeleccionada} required>
        <option value="" disabled>Categoría</option> 
        <option value="hogar">Hogar</option>
        <option value="mercado">Mercado</option>
        <option value="ropa">Ropa</option>
      </select>
      </div>
    
      

      <div>
        {gastosFiltrados.map((gasto, index) => (
          <li key={index} style={{ marginBottom: '20px', listStyleType: 'none' }}>
            <h2>{gasto.lugar}</h2>
            <p>Categoría: {gasto.categoria}</p>
            <p>Fecha: {gasto.fecha}</p>
            <p>Monto: ${gasto.monto}</p>
            
            {gasto.img && <img src={gasto.img} alt={`Imagen de ${gasto.lugar}`} width={100} />}
          </li>
        ))}
      </div>
    </div>
  );
};
