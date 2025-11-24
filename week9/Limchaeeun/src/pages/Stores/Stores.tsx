import styled from "styled-components";
import StoreItem from "../../components/Stores/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import backarrow from "../../assets/stores/backarrow.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: any[];
}

const Stores = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState<Store[]>([]);
  const [newName, setNewName] = useState("");

  const fetchStores = async () => {
    const res = await fetch("http://localhost:3001/stores");
    const data: Store[] = await res.json();
    setStores(data);
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const handleAddStore = async () => {
    if (!newName.trim()) return;

    await fetch("http://localhost:3001/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName,
        rate: 0,
        reviewCnt: 0,
        minDeliveryTime: 10,
        maxDeliveryTime: 20,
        minDeliveryPrice: 10000,
        deliveryFee: 2000,
        menus: [],
      }),
    });

    setNewName(""); // input 비우기
    fetchStores(); // 목록 새로고침
  };

  const handleEdit = async (id: number) => {
    const newName = prompt("새 가게 이름을 입력하세요");

    if (!newName || !newName.trim()) return;

    await fetch(`http://localhost:3001/stores/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });

    fetchStores(); // 수정 후 목록 업데이트
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:3001/stores/${id}`, {
      method: "DELETE",
    });

    fetchStores(); // 삭제 후 목록 갱신
  };

  return (
    <>
      <Container>
        <Header>
          <BackButton onClick={() => navigate("/")}>
            <BackIcon src={backarrow} alt="뒤로가기" />
          </BackButton>
          <Title>샐러드</Title>
        </Header>
        <ScrollArea>
          <StoreList>
            {stores.map((store, index) => (
              <StoreRow
                key={store.id}
                onClick={() => navigate(`/store/${store.id}`)}
              >
                <StoreItem
                  rank={index + 1}
                  name={store.name}
                  rate={store.rate}
                  reviewCnt={store.reviewCnt}
                  minDeliveryTime={store.minDeliveryTime}
                  maxDeliveryTime={store.maxDeliveryTime}
                  deliveryFee={store.deliveryFee}
                />

                <ButtonColumn>
                  <EditButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(store.id);
                    }}
                  >
                    Eidt
                  </EditButton>

                  <DeleteButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(store.id);
                    }}
                  >
                    Delete
                  </DeleteButton>
                </ButtonColumn>
              </StoreRow>
            ))}
          </StoreList>
          <AddContainer>
            <AddInput
              placeholder="가게 이름 입력"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <AddButton onClick={handleAddStore}>ADD</AddButton>
          </AddContainer>
        </ScrollArea>
      </Container>

      <OrderBar />
    </>
  );
};

export default Stores;

// style
const Container = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 111px;
  background: #fff;
  overflow: hidden;
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
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

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
`;

const StoreRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
`;

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

const AddContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 24px;
  margin-top: 16px;
  border-top: 1px solid #a09f9fff;
`;

const AddInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  background-color: #e9e9e9ff;
  border-radius: 6px;
  width: 200px;
  color: #000;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background: #4a72d0ff;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = styled.button`
  margin-left: 24px;
  padding: 6px 12px;
  background: #69bee5ff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  margin-left: 8px;
  padding: 6px 12px;
  background: #eb6669ff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
