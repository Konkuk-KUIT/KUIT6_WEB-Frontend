import { useState, useEffect } from "react";
import styled from "styled-components";
import { getStores, createStore, patchStore, deleteStore } from "../../api/storeApi";
import type { Store as StoreType } from '../../models/stores';
import StoreList from "../../components/Store/StoreList";
import OrderBar from "../../components/OrderBar/OrderBar";
import Header from "../../components/Store/Header";
import Button from "../../components/Button";

const Store = () => {
  const [stores, setStores] = useState<StoreType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newStoreName, setNewStoreName] = useState("");
  const [deletedStore, setDeletedStore] = useState<StoreType | null>(null);
  const [undoTimer, setUndoTimer] = useState<NodeJS.Timeout | null>(null);

  // 가게 목록 불러오기
  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      setLoading(true);
      const data = await getStores();
      setStores(data);
    } catch (err) {
      setError("가게 목록을 불러오는데 실패했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 가게 추가
  const handleAddStore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStoreName.trim()) {
      alert("가게 이름을 입력해주세요.");
      return;
    }

    try {
      const newStore = await createStore(newStoreName);
      setStores((prev) => [...prev, newStore]);
      setNewStoreName("");
      alert("가게가 추가되었습니다!");
    } catch (err) {
      alert("가게 추가에 실패했습니다.");
    }
  };

  // 가게 수정
  const handleEdit = async (id: number, currentName: string) => {
    const newName = prompt("새 가게 이름을 입력하세요:", currentName);
    
    if (!newName || !newName.trim()) {
      return;
    }

    try {
      const updatedStore = await patchStore(id, newName);
      setStores((prev) =>
        prev.map((store) => (store.id === id ? updatedStore : store))
      );
      alert("가게 정보가 수정되었습니다!");
    } catch (err) {
      alert("가게 수정에 실패했습니다.");
    }
  };

  // 가게 삭제
  const handleDelete = async (id: number, name: string) => {
    if (!window.confirm(`"${name}" 가게를 삭제하시겠습니까?`)) {
      return;
    }

    try {
      await deleteStore(id);
      setStores((prev) => prev.filter((store) => store.id !== id));
      alert("가게가 삭제되었습니다.");
    } catch (err) {
      alert("가게 삭제에 실패했습니다.");
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingText>로딩중...</LoadingText>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorText>{error}</ErrorText>
      </Container>
    );
  }

  return (
    <Container>
      <Header />

      <Title>샐러드</Title>

      {/* 기존 StoreList에 수정/삭제 기능 추가 */}
      <StoreList 
        stores={stores} 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* 가게 추가 폼 */}
      <AddStoreSection>
        <AddStoreForm onSubmit={handleAddStore}>
          <StoreInput
            type="text"
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}
            placeholder="새 가게 이름을 입력하세요"
          />
          <Button type="submit" size="lg">추가하기</Button>
        </AddStoreForm>
      </AddStoreSection>

      <OrderBar />
    </Container>
  );
};

export default Store;

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 100px; /* OrderBar 높이 여유 공간,. */
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  color: #191f28;
  margin: 20px 32px 20px;
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
`;

const ErrorText = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #d32f2f;
`;

const AddStoreSection = styled.div`
  padding: 20px 32px 40px;
`;

const AddStoreForm = styled.form`
  display: flex;
  gap: 10px;
`;

const StoreInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  font-family: Pretendard;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;