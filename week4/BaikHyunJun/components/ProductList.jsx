import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "에어팟 프로",
      location: "군자동",
      time: "3일 전",
      price: "220,000원",
      image: "/Rectangle 2.png",
      comments: 3,
      likes: 11
    },
    {
      id: 2,
      title: "바이레도 블랑쉬 50ml",
      location: "광진구 구의제3동",
      time: "26초 전",
      price: "4,000원",
      image: "/Rectangle 2-2.png",
      likes: 2
    },
    {
      id: 3,
      title: "샌드위치",
      location: "동대문구 휘경동",
      time: "끌올 59초 전",
      price: "8,000원",
      image: "/Rectangle 2-3.png"
    },
    {
      id: 4,
      title: "아이폰 13프로맥스",
      location: "군자동",
      time: "1일 전",
      price: "1,000,000원",
      image: "/Rectangle 2-4.png"
    },
    {
      id: 5,
      title: "커피머신",
      location: "구리시 교문1동",
      time: "1초 전",
      price: "100,000원",
      image: "/image.png"
    }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-location">{product.location} · {product.time}</p>
            <p className="product-price">
              <span className="price-number">{product.price}</span>
            </p>
            {(product.comments || product.likes) && (
              <div className="product-interactions">
                {product.comments && (
                  <span className="comment-count">
                    <img src="/bx_chat.png" alt="댓글" className="interaction-icon" />
                    {product.comments}
                  </span>
                )}
                {product.likes && (
                  <span className="like-count">
                    <img src="/ant-design_heart-outlined.png" alt="좋아요" className="interaction-icon" />
                    {product.likes}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
