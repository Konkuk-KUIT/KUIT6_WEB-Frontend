import type {CategoryProp} from "../../components/Category/Category"

interface Store {
  
}

interface StoresProps {
  category: string,
  stores: Store[],
}

const Stores = ( {stores}: {stores: StoresProps} ) => {
  return <div>Stores</div>;
};

export default Stores;
