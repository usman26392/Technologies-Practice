

// import logo from './logo.svg';
import './App.scss';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


function SearchBar() {
  return (
      <div className="filterable-product-table__search-bar">
          <input type="search" placeholder='search...' />
          <div className='filterable-product-table_search-bar__label'>
            <input type="checkbox" />
            <label htmlFor="">Only show products in stock!</label>
          </div>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="filterable-product-table">
        <SearchBar/>
        
        <div className="filterable-product-table__category-table">
          <table>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
            <tr className='filterable-product-table__category-table__row'>
              <td>Fruits</td>
            </tr>
            <tr className='filterable-product-table__category-table__product-row'>
              <td>Apple</td>
              <td>$1</td>
            </tr>
            <tr className='filterable-product-table__category-table__product-row'>
              <td>Apple</td>
              <td>$1</td>
            </tr>
            <tr className='filterable-product-table__category-table__product-row'>
              <td>Apple</td>
              <td>$1</td>
            </tr>
          </table>
        </div>
      </div> 
    </div>
  );
}

export default App;
