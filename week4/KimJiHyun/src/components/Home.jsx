import './Home.css';

// 상품 목록 데이터
const items = [
    {
        id: 1,
        title: '에어팟 프로',
        location: '군자동',
        timeText: '3일 전',
        price: '220,000원',
        img: '/imgs/airpods-pro.png',
        chats: 3,
        likes: 11,
        isSold: false,
    },
    {
        id: 2,
        title: '바이레도 블랑쉬 50ml',
        location: '광진구 구의제3동',
        timeText: '26초 전',
        price: '4,000원',
        img: '/imgs/byredo-blanche.png',
        chats: 0,
        likes: 2,
        isSold: false,
    },
    {
        id: 3,
        title: '샌드위치',
        location: '동대문구 휘경동',
        timeText: '끌올 59초 전',
        price: '8,000원',
        img: '/imgs/sandwich.png',
        chats: 0,
        likes: 0,
        isSold: false,
    },
    {
        id: 4,
        title: '아이폰 13프로맥스',
        location: '군자동',
        timeText: '1일 전',
        price: '1,000,000원',
        img: '/imgs/iphone-13-pro-max.png',
        chats: 0,
        likes: 0,
        isSold: false,
    },
    {
        id: 5,
        title: '커피머신',
        location: '구리시 교문1동',
        timeText: '1초 전',
        price: '100,000원',
        img: '/imgs/coffee-machine.png',
        chats: 0,
        likes: 0,
        isSold: false,
    },
];

// 하단 탭 데이터
const tabs = [
    { name: '홈', img: '/icons/home.svg' },
    { name: '동네생활', img: '/icons/news.svg' },
    { name: '내 근처', img: '/icons/map.svg' },
    { name: '채팅', img: '/icons/chatting.svg' },
    { name: '나의 당근', img: '/icons/me.svg' },
];

// --- Home 컴포넌트 ---
const Home = () => {
    const location = '군자동';
    const icons = ['search', 'menu', 'notification'];

    return (
        <>
            {/* 1. Header: 상단 바 */}
            <header>
                <button className="location">
                    <h1 className="my-location">{location}</h1>
                    <img src="/icons/expand_arrow.svg" alt="더보기" />
                </button>
                <div className="icons">
                    {icons.map((icon) => (
                        <button key={icon}>
                            <img src={`/icons/${icon}.svg`} alt={icon} />
                        </button>
                    ))}
                </div>
            </header>
            <div className="border"></div>

            {/* 2. Content: 상품 목록 */}
            <section className="content">
                {items
                    .filter(({ isSold }) => !isSold) // isSold가 false인 상품만 필터링
                    .map(({ id, title, location, timeText, price, img, chats, likes }) => (
                        <div key={id}>
                            <article className="trade-listing">
                                <img src={img} alt="상품 이미지" className="trade-listing__image" />
                                <div className="item">
                                    <button className="item-info">
                                        <h1 className="item-info__name">{title}</h1>
                                        <div className="item-info__upload">
                                            {location} · {timeText}
                                        </div>
                                        <div className="item-info__price">{price}</div>
                                    </button>
                                    <div className="trade-listing__demand">
                                        {chats > 0 && (
                                            <button className="trade-listing__icon">
                                                <img src="/icons/chat.svg" alt="채팅" /> {chats}
                                            </button>
                                        )}
                                        {likes > 0 && (
                                            <button className="trade-listing__icon">
                                                <img src="/icons/heart.svg" alt="좋아요" />
                                                {likes}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </article>
                            <div className="border"></div>
                        </div>
                    ))}
            </section>

            {/* 3. Floating Button: 글쓰기 버튼 */}
            <button className="floating">
                <img src="/icons/plus.svg" alt="글쓰기" />
            </button>

            {/* 4. BottomNav: 하단 탭 바 */}
            <nav>
                {tabs.map(({ name, img }) => (
                    <a key={name} className="tab">
                        <img src={img} alt={name} />
                        {name}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default Home;
