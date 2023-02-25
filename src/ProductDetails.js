import React from "react";
import ProductData from './ProductData'
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {

  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
      <p className={classes.ProductDescription}>{ProductData.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src={ProductData.colorOptions[0].imageUrl} alt={ProductData.colorOptions[0].styleName} />
        <img className={classes.ProductImage} src={ProductData.colorOptions[1].imageUrl} alt={ProductData.colorOptions[1].styleName} />
        <img className={classes.ProductImage} src={ProductData.colorOptions[2].imageUrl} alt={ProductData.colorOptions[2].styleName} />
        <img className={classes.ProductImage} src={ProductData.colorOptions[3].imageUrl} alt={ProductData.colorOptions[3].styleName} />
      </div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
        <button className={classes.FeatureItem}>Heart Rate</button>
      </div>
      <div>
        <button className={classes.BuyNow}>Buy Now</button>
      </div>
    </div>

  );

}
export default ProductDetails;