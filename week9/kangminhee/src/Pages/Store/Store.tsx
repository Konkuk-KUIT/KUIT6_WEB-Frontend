import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API_URL from "../../api";
import HeaderBar from "../../components/HeaderBar";
import OrderBar from "../../components/OrderBar/OrderBar";

const Store = () => {
  const [stores, setStores] = useState<any[]>([]);
  const [newStoreName, setNewStoreName] = useState("");
  const [editNames, setEditNames] = useState<{ [id: number]: string }>({}); 

  const fetchStores = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setStores(data));
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const handleAddStore = () => {
    if (!newStoreName.trim()) return;
    if (!confirm("새 가게를 추가하시겠습니까?")) return;

    const newStore = {
      name: newStoreName,
      rate: 0,
      reviewCnt: 0,
      minDeliveryTime: 10,
      maxDeliveryTime: 20,
      minDeliveryPrice: 10000,
      deliveryFee: 1000,
      menus: [],
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStore),
    }).then(() => {
      fetchStores();
      setNewStoreName("");
    });
  };

  const handleUpdateStore = (id: number) => {
    const name = editNames[id];
    if (!name || !name.trim()) return;
    if (!confirm("정말 이 가게 이름을 수정할까요?")) return;

    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    }).then(() => fetchStores());
  };

  const handleDeleteStore = (id: number) => {
    if (!confirm("정말 이 가게를 삭제하시겠습니까?")) return;

    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => fetchStores());
  };

  return (
    <Container>
      <HeaderBar />

      <PageTitle>샐러드</PageTitle>

      <StoreList>
        {stores.map((store, index) => (
          <StoreRow key={store.id}>
            <StyledLink to={`/store/${store.id}`}>
              <StoreCard>
                <ImagePlaceholder />
                <InfoSection>
                  <Rank>{index + 1}위</Rank>
                  <StoreName>{store.name}</StoreName>
                  <SubInfo>
                    ★ {store.rate} ({store.reviewCnt.toLocaleString()})
                  </SubInfo>
                  <SubInfo>
                    {store.minDeliveryTime}~{store.maxDeliveryTime}분 · 배달비{" "}
                    {store.deliveryFee.toLocaleString()}원
                  </SubInfo>
                </InfoSection>
              </StoreCard>
            </StyledLink>

            <ButtonGroup>
              <EditInput
                placeholder="새 이름"
                value={editNames[store.id] || ""}
                onChange={(e) =>
                  setEditNames({ ...editNames, [store.id]: e.target.value })
                }
              />

              <ActionBtn variant="edit" onClick={() => handleUpdateStore(store.id)}>
                수정
              </ActionBtn>

              <ActionBtn variant="delete" onClick={() => handleDeleteStore(store.id)}>
                삭제
              </ActionBtn>
            </ButtonGroup>
          </StoreRow>
        ))}
      </StoreList>

      <AddWrapper>
        <AddInput
          type="text"
          placeholder="새 가게 이름 입력"
          value={newStoreName}
          onChange={(e) => setNewStoreName(e.target.value)}
        />
        <AddBtn onClick={handleAddStore}>추가</AddBtn>
      </AddWrapper>

      <OrderBarWrapper>
        <OrderBar />
      </OrderBarWrapper>
    </Container>
  );
};

export default Store;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 120px;
  background: white;
`;

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  padding: 0 16px;
  margin-top: 6px;
`;

const StoreList = styled.div`
  padding: 0 16px;
`;

const StoreRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

const StoreCard = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
`;

const ImagePlaceholder = styled.div`
  width: 54px;
  height: 54px;
  background-color: #f5f5f5;
  border-radius: 6px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rank = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

const StoreName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const SubInfo = styled.div`
  font-size: 13px;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 10px;
`;

const EditInput = styled.input`
  width: 100px;
  padding: 10px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const ActionBtn = styled.button<{ variant?: "edit" | "delete" }>`
  padding: 10px 14px;
  height: 40px;
  min-width: 55px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.variant === "edit"
      ? "#2F80ED" 
      : props.variant === "delete"
      ? "#EB5757" 
      : "#ccc"};

  &:hover {
    opacity: 0.9;
  }
`;

const AddWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 16px;
`;

const AddInput = styled.input`
  flex: 1;
  padding: 10px;
`;

const AddBtn = styled.button`
  padding: 10px 14px;
  background-color: #4caf50;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const OrderBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
`;
