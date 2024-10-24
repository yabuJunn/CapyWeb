// History.tsx
import { useState } from 'react';
import { gastos, Gasto, Categoria } from './data'; // Importamos la data y los tipos

export const History = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | "">(""); // Estado para la categoría seleccionada

  // Función select
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoriaSeleccionada(e.target.value as Categoria);
  };

  // Filtrar los datos 
  const gastosFiltrados = categoriaSeleccionada
    ? gastos.filter((gasto) => gasto.categoria === categoriaSeleccionada)
    : gastos; // Si no hay categoría seleccionada, mostramos todos los gastos.

  return (
    <div className='history'>
      <h1>History</h1>

      <select name="categories" onChange={handleChange} value={categoriaSeleccionada} required>
        <option value="" disabled>Categoría</option> 
        <option value="hogar">Hogar</option>
        <option value="mercado">Mercado</option>
        <option value="ropa">Ropa</option>
      </select>

      <ul>
        {gastosFiltrados.map((gasto, index) => (
          <li key={index}>
            <strong>{gasto.categoria.toUpperCase()}</strong> - {gasto.lugar}: {gasto.fecha} - ${gasto.monto.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};
