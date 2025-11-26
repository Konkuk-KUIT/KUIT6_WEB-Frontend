import { useEffect, useState } from "react";
import styled from "styled-components";
import StoreItem from "../../components/Stores/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import backarrow from "../../assets/stores/backarrow.svg";
import { useNavigate } from "react-router-dom";
import {
  fetchStores,
  createStore,
  updateStoreName,
  deleteStore,
} from "../../api/stores";
import type { Store } from "../../api/stores";


const Stores = () => {
  const navigate = useNavigate();

  const [stores, setStores] = useState<Store[]>([]);
  const [newStoreName, setNewStoreName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStores = async () => {
      try {
        const data = await fetchStores();
        setStores(data);
      } catch (e) {
        console.error(e);
        alert("가게 목록을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadStores();
  }, []);

  const handleAddStore = async () => {
    const name = newStoreName.trim();
    if (!name) return;

    try {
      const created = await createStore({
        name,
        rate: 4.5,
        reviewCnt: 0,
        minDeliveryTime: 10,
        maxDeliveryTime: 20,
        minDeliveryPrice: 10000,
        deliveryFee: 0,
      });

      setStores((prev) => [...prev, created]);
      setNewStoreName("");
    } catch (e) {
      console.error(e);
      alert("가게 추가에 실패했습니다.");
    }
  };

  const handleEditStore = async (store: Store) => {
    const result = window.prompt("새 가게 이름을 입력하세요.", store.name);
    const name = (result ?? "").trim();
    if (!name || !store.id) return;

    try {
      const updated = await updateStoreName(store.id, name);
      setStores((prev) =>
        prev.map((s) => (s.id === store.id ? updated : s))
      );
    } catch (e) {
      console.error(e);
      alert("가게 수정에 실패했습니다.");
    }
  };

  const handleDeleteStore = async (id?: number) => {
    if (!id) return;
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteStore(id);
      setStores((prev) => prev.filter((s) => s.id !== id));
    } catch (e) {
      console.error(e);
      alert("가게 삭제에 실패했습니다.");
    }
  };

  return (
    <>
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <BackIcon src={backarrow} alt="뒤로가기" />
          </BackButton>
          <Title>샐러드</Title>
        </Header>
        <AddStoreBox>
          <NewStoreInput
            placeholder="새 가게 이름을 입력하세요"
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}
          />
          <AddStoreButton onClick={handleAddStore}>가게 추가</AddStoreButton>
        </AddStoreBox>

        {loading ? (
          <LoadingText>가게 목록을 불러오는 중입니다...</LoadingText>
        ) : (
          <StoreList>
            {stores.map((store, index) => (
              <StoreRow key={store.id}>
                <StoreItem
                  rank={index + 1}
                  name={store.name}
                  rate={store.rate}
                  reviewCnt={store.reviewCnt}
                  minDeliveryTime={store.minDeliveryTime}
                  maxDeliveryTime={store.maxDeliveryTime}
                  deliveryFee={store.deliveryFee}
                  onClick={() => navigate(`/store/${store.id}`)}
                />
                <StoreActions>
                  <ActionButton onClick={() => handleEditStore(store)}>
                    수정
                  </ActionButton>
                  <ActionButton
                    className="delete"
                    onClick={() => handleDeleteStore(store.id)}
                  >
                    삭제
                  </ActionButton>
                </StoreActions>
              </StoreRow>
            ))}
          </StoreList>
        )}
      </Container>

      <OrderBar />
    </>
  );
};

export default Stores;

// style
const Container = styled.div`
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 111px;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47px;
  width: 390px;
`;

const BackButton = styled.button`
  height: 41px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: 9.95px;
  height: 17.475px;
  flex-shrink: 0;
  padding: 7px 356px 10px 10px;
`;

const Title = styled.h1`
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 26px 298px 2px 24px;
  margin: 0;
`;

const AddStoreBox = styled.div`
  width: 100%;
  padding: 16px 24px 0 24px;
  display: flex;
  gap: 8px;
  box-sizing: border-box;
`;

const NewStoreInput = styled.input`
  flex: 1;
  border-radius: 8px;
  border: 1px solid #e5e8eb;
  padding: 8px 12px;
  font-size: 14px;
  color: #fff;
`;

const AddStoreButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  background: #3182f6;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
`;

const StoreRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const StoreActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 8px;
`;

const ActionButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  background: #e5e8eb;

  &.delete {
    background: #ff6b6b;
    color: #fff;
  }
`;

const LoadingText = styled.p`
  margin-top: 24px;
  font-size: 14px;
  color: #6b7684;
`;
