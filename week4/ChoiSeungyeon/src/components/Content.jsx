import ItemCard from './ItemCard.jsx';

const Content = ({ items }) => {
  const soldOnly = items.filter(({ isSold }) => isSold === true);
  return (
    <main className="content">
      <ul className="list">
        {soldOnly.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
};

export default Content;