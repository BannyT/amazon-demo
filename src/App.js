import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner  from './Banner';
import Product from './Product'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="product-row">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
      </div>
         
    </div>
  );
}

export default App;
