import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails'
import TopBar from './TopBar/TopBar';
import ProductData from './data/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
    showHeartBeatSection: false
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage}
              showHeartBeatSection={this.showHeartBeatSection} />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
