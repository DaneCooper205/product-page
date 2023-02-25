import React from 'react';
import classes from './App.module.css';
import ProductData from './ProductData'

function App() {
const currentHour = new Date().getHours()>9?new Date().getHours: '0'+ new Date().getHours();
const currentMinute = new Date().getMinutes()>9?new Date().getMinutes():'0' + new Date().getMinutes();

  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://www.amazon.com/ref=nav_logo" alt="Amazon Logo"/>
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview"/>
       { /* <div className={classes.TimeSection}>
            <p>{currentHour}:{currentMinute}</p>
  </div>*/}
          <div className={classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>
          <h3 className={ classes.SectionHeading}>Select Color</h3>
            <div>
            <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src={ProductData.colorOptions[0].imageUrl} alt={ProductData.colorOptions[0].styleName}/>
            <img className={classes.ProductImage} src={ProductData.colorOptions[1].imageUrl} alt={ProductData.colorOptions[1].styleName}/>
            <img className={classes.ProductImage}  src={ProductData.colorOptions[2].imageUrl} alt={ProductData.colorOptions[2].styleName}/>
            <img className={classes.ProductImage} src={ProductData.colorOptions[3].imageUrl} alt={ProductData.colorOptions[3].styleName}/>
            </div>
            <h3 className={ classes.SectionHeading}>Features</h3>
            <div>
              <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ') }>Time</button>
              <button className={classes.FeatureItem}>Heart Rate</button>
            </div>
            <div>
              <button className={classes.BuyNow}>Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
