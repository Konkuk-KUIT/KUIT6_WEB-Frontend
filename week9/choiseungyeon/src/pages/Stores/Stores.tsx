import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoreListItem from "../../components/StoreListItem/StoreListItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import { getStores, addStore, deleteStore, patchStore, type Store,} from "../../api/storesapi";

const Stores = () => {
  const navigate = useNavigate();

  const [stores, setStores] = useState<Store[]>([]);

  const [newStoreName, setNewStoreName] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [editingName, setEditingName] = useState("");

  // 가게 목록 조회 (GET)
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStores();
        setStores(data);
      } catch (error) {
        console.error("가게 목록 조회 실패:", error);
      }
    };

    fetchStores();
  }, []);

  // 가게 추가 (POST)
  const handleAddStore = async () => {
    if (!newStoreName.trim()) return;

    try {
      const newStore = await addStore(newStoreName);
      setStores([...stores, newStore]);
      setNewStoreName("");
    } catch (error) {
      console.error("가게 추가 실패:", error);
    }
  };

  // 가게 삭제 (DELETE)
  const handleDeleteStore = async (id: number) => {
    try {
      await deleteStore(id);
      setStores(stores.filter((store) => store.id !== id));
    } catch (error) {
      console.error("가게 삭제 실패:", error);
    }
  };

  // 가게 이름 수정 (PATCH)
  const handleUpdateStoreName = async (id: number) => {
    if (!editingName.trim()) return;

    try {
      await patchStore(id, { name: editingName });
      setStores(
        stores.map((store) =>
          store.id === id ? { ...store, name: editingName } : store
        )
      );
      setEditingId(null);
      setEditingName("");
    } catch (error) {
      console.error("가게 수정 실패:", error);
    }
  };

  return (
    <main className="w-[390px] h-[844px] bg-white mx-auto relative overflow-hidden flex flex-col">
      <div className="px-6 pt-6 pb-4 flex-1 overflow-y-auto pb-[120px]">
        <button onClick={() => window.history.back()}>
          <img
            src="/src/assets/chevron-left.svg"
            alt="뒤로가기 아이콘"
            className="w-6 h-6 mb-4"
          />
        </button>
        <h2 className="text-[26px] font-bold mb-3">샐러드</h2>

        <div className="space-y-3">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className="flex items-center justify-between p-3 border border-[#F2F4F6] rounded-lg hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                if (editingId === null) {
                  navigate(`/store/${store.id}`);
                }
              }}
            >
              {editingId === store.id ? (
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleUpdateStoreName(store.id);
                    if (e.key === "Escape") {
                      setEditingId(null);
                      setEditingName("");
                    }
                  }}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  placeholder="수정할 이름 입력"
                  className="flex-1 border-2 border-[#3182F6] rounded w-px px-3 py-2 text-sm font-semibold"
                />
              ) : (
                <div className="flex-1">
                  <StoreListItem ranking={index + 1} store={store} />
                </div>
              )}

              <div
                className="flex gap-2 ml-4"
                onClick={(e) => e.stopPropagation()}
              >
                {editingId === store.id ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateStoreName(store.id);
                      }}
                      className="px-3 py-1 bg-[#10B981] text-white text-sm rounded font-semibold hover:bg-green-600"
                    >
                      확인
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingId(null);
                        setEditingName("");
                      }}
                      className="px-3 py-1 bg-[#6B7684] text-white text-sm rounded font-semibold hover:bg-gray-600"
                    >
                      취소
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingId(store.id);
                        setEditingName(store.name);
                      }}
                      className="px-3 py-1 bg-[#3182F6] text-white text-sm rounded font-semibold hover:bg-blue-600"
                    >
                      수정
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteStore(store.id);
                      }}
                      className="px-3 py-1 bg-[#F04452] text-white text-sm rounded font-semibold hover:bg-red-600"
                    >
                      삭제
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[#F2F4F6]">
          <p className="text-sm text-[#6B7684] mb-2 font-semibold">
            새 가게 추가
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={newStoreName}
              onChange={(e) => setNewStoreName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddStore();
              }}
              placeholder="가게 이름 입력"
              className="flex-1 border border-[#D0DFFB] rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#3182F6]"
            />
            <button
              onClick={handleAddStore}
              className="px-4 py-2 bg-[#3182F6] text-white rounded-lg font-semibold text-sm hover:bg-blue-600"
            >
              추가
            </button>
          </div>
        </div>
      </div>

      <OrderBar />
    </main>
  );
};

export default Stores;
