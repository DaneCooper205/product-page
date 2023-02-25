import React from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails'
import TopBar from './TopBar';

function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

  return (
    <div className="App">
      <TopBar />
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        <div className={classes.ProductData}>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
