import React from 'react';

const ProductList = ({ products }) => {

  const availableProducts = products.filter(product => !product.isSold || product.isSold);

  return (
    <div className="product-list">
      {availableProducts.map((product) => {
        // 각 상품에 대해 비구조화 할당 사용
        const { id, title, location, time, price, image, comments, likes } = product;
        
        return (
        <div key={id} className="product-item">
          <img src={image} alt={title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{title}</h3>
            <p className="product-location">{location} · {time}</p>
            <p className="product-price">
              <span className="price-number">{price}</span>
            </p>
            {(comments || likes) && (
              <div className="product-interactions">
                {comments && (
                  <span className="comment-count">
                    <img src="/bx_chat.png" alt="댓글" className="interaction-icon" />
                    {comments}
                  </span>
                )}
                {likes && (
                  <span className="like-count">
                    <img src="/ant-design_heart-outlined.png" alt="좋아요" className="interaction-icon" />
                    {likes}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default ProductList;
