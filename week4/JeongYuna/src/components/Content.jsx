import { Fragment } from "react";
import Border from "./Border";

const Content = ({items}) => {
  return (
    <section className='content'>
      {items
      .filter(({isSold}) => !isSold)
      .map( ({id, title, location, date, price, img, chats, likes}) => (
          <Fragment key={id}>
            <article className='trade-listing'>
            <img src={`/imgs/${img}`} alt="상품 이미지" className='trade-listing__image'></img>
            <div className='item'>
              <button className='item-info'>
                <h1 className='item-info__name'>{title}</h1>
                <div className='item-info__upload'>
                  {location} · {(formatRelativeTime(date))}
                </div>
                <div className='item-info__price'>{price}</div>
              </button>
              <div className='trade-listing__demand'>
                {chats == 0? null : <button className='trade-listing__icon'><img src="/icons/chat.svg"/> {chats}</button>}
                {likes == 0? null : <button className='trade-listing__icon'><img src="/icons/heart.svg"/>{likes}</button>}
              </div>
            </div>
            </article>
          <Border color="#EEEEEE"/>
          </ Fragment>
      )
      )}
    </section>
  )
};

const formatRelativeTime = (date) => {
  const diff = Date.now() - date.getTime(); // 밀리초

  const seconds = Math.floor(diff / 1000);  // 초
  if (seconds < 60) return `${seconds}초 전`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}분 전`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}일 전`;

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}주 전`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}개월 전`;

  const years = Math.floor(days / 365);
  return `${years}년 전`;
}

export default Content;