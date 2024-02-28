

const Product = () => {
  return (
    <div className='product-container'>
      <div className='product-text'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <button className='shop-btn'>Shop Now</button>
        <button className='category-btn'>Category</button>
        <p>Also available on</p>
        <img src='/images/bkash-logo-0C1572FBB4-seeklogo.com.png' alt='bkash' />
        <img src='/public/images/amazon.png' alt='amazon' />
      </div>
      <div className='product-img'>
        <img src='/images/shoe_image.png' alt='NIke Shoe' />
      </div>
    </div>
  );
};

export default Product;
