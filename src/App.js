import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner  from './Banner';
import Product from './Product'
import Footer from "./Footer"

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
      <div className="product-row">
            <Product/>
            <Product/>
            <Product/>
      </div>
      <div className="product-row">
            <Product/>
            <Product/>
      </div>
      <div className="product-row">
            <Product/>
      </div>
      <Footer/>  
    </div>
  );
}

export default App;
