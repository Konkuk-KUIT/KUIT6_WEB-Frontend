import { useState } from "react";
import StoreListItem from "../../components/StoreListItem/StoreListItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import { useStores } from "../../hooks/useStores";
import Button from "../../components/Button";

export default function Stores() {
  const { stores, error, addStore, updateStorePatch, removeStore } = useStores();
  const [newStoreName, setNewStoreName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  // 공통 에러 처리
  const handleError = (message: string) => {
    alert(message);
  };

  // 가게 추가
  const handleAddStore = async () => {
    if (!newStoreName.trim()) return alert("가게 이름을 입력해주세요.");

    try {
      await addStore({
        name: newStoreName,
        rate: 0.0,
        reviewCnt: 0,
        minDeliveryTime: 10,
        maxDeliveryTime: 20,
        minDeliveryPrice: 12000,
        deliveryFee: 2000,
        menus: [],
      });

      setNewStoreName("");
      alert("가게가 추가되었습니다!");
    } catch {
      handleError("가게 추가에 실패했습니다.");
    }
  };

  // 가게 삭제
  const handleDeleteStore = async (id: number, name: string) => {
    if (!window.confirm(`'${name}' 가게를 삭제하시겠습니까?`)) return;

    try {
      await removeStore(id);
      alert("가게가 삭제되었습니다!");
    } catch {
      handleError("가게 삭제에 실패했습니다.");
    }
  };

  // 가게 수정 저장
  const handleUpdateStore = async (id: number) => {
    if (!editName.trim()) return alert("가게 이름을 입력해주세요.");

    try {
      await updateStorePatch(id, { name: editName });
      setEditingId(null);
      setEditName("");
      alert("가게 이름이 수정되었습니다!");
    } catch {
      handleError("가게 수정에 실패했습니다.");
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="px-6 pt-6 pb-32">
        <button onClick={() => window.history.back()}>
          <img src="/src/assets/chevron-left.svg" className="w-6 h-6 mb-4" />
        </button>

        <h2 className="text-[26px] font-bold mb-3">샐러드</h2>

        {stores.map((store, index) => (
          <div key={store.id} className="relative">
            {editingId === store.id ? (
              <div className="flex gap-2 py-4 border-b border-gray-100">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="가게 이름"
                />

                <Button size="sm" variant="delete" onClick={() => handleUpdateStore(store.id)}>
                  저장
                </Button>

                <Button size="sm" variant="cancel" onClick={() => setEditingId(null)}>
                  취소
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <StoreListItem ranking={index + 1} store={store} />
                </div>

                <div className="flex gap-2 shrink-0">
                  <Button
                    size="sm"
                    variant="edit"
                    onClick={() => {
                      setEditingId(store.id);
                      setEditName(store.name);
                    }}
                  >
                    수정
                  </Button>

                  <Button size="sm" variant="delete" onClick={() => handleDeleteStore(store.id, store.name)}>
                    삭제
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="mt-4">
          <h3 className="mb-3 text-lg font-semibold">새 가게 추가</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={newStoreName}
              onChange={(e) => setNewStoreName(e.target.value)}
              placeholder="가게 이름을 입력하세요"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddStore();
              }}
            />

            <Button size="sm" variant="edit" onClick={handleAddStore}>
              추가
            </Button>
          </div>
        </div>
      </div>

      <OrderBar />
    </>
  );
}
