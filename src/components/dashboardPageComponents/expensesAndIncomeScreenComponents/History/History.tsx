export const History = () => {
  return (
    <div className='history'>
        <h1>History</h1>
        <select name="categories" required>
        <option value="" disabled selected>Categoría</option> 
        <option value={"hogar"}>Hogar</option>
        <option value={"mercado"}>Mercado</option>
        <option value={"ropa"}>Ropa</option>
        </select>
    </div>
  );
}