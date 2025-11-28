import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar.tsx";
import { useStores } from "../../hooks/useStores";
import type { Store } from "../../models/types";

const Stores = () => {
  // 그냥 이렇게 쓰면 끝! (이미 내부에서 필요한 것만 리턴하고 있음)
  const { stores, loading, addStore, updateStore, deleteStore } = useStores();
  const navigate = useNavigate();

  const [newStoreName, setNewStoreName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  // function
  const handleAdd = () => {
    if (!newStoreName.trim()) return;
    addStore(newStoreName);
    setNewStoreName("");
  }

  const startEdit = (store: Store) => { 
    setEditingId(store.id);
    setEditName(store.name);
  }

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
  }

  const saveEdit = (id: number) => {
    if (!editName.trim()) return;
    updateStore(id, editName);
    setEditingId(null);
    setEditName("");
  }

  if (loading) return <div className="flex justify-center items-center h-screen">로딩중...</div>;

  return (
    <div className="w-[390px] h-[844px] mx-auto flex flex-col bg-white">
      
      <div className="px-5 pt-10 pb-4">
        <button className="text-[24px] cursor-pointer hover:bg-gray-100" onClick={() => navigate('/')}>‹</button>
        <h2 className="text-[32px] font-bold mt-4">샐러드</h2>
      </div>

      <section className="flex-1 overflow-y-auto px-5 pb-5">
        {stores.map((store, index) => (
          <div key={store.id} className="border-b border-gray-100 py-4">
            {editingId === store.id ? (
              <div className="flex gap-2 items-center">
                <input
                  className="border p-2 flex-1 rounded"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  autoFocus
                />
                <button onClick={() => saveEdit(store.id)} className="bg-blue-500 text-white px-3 py-1 rounded text-sm cursor-pointer">저장</button>
                <button onClick={cancelEdit} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm cursor-pointer">취소</button>
              </div>
            ) : (
              <div className="flex justify-between items-start group">
                <Link to={`/store/${store.id}`} className="flex-1 flex gap-4 cursor-pointer">
                  <div className="size-16 bg-gray-200 rounded-md shrink-0"></div>
                  <div>
                    <div className="flex flex-col">
                      <span className="text-[15px] text-[#6B7684]">{index + 1}위</span>
                      <span className="text-[18px] font-semibold text-[#333D4B]">
                        {store.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 mt-1 text-[#6B7684] text-[14px]">
                      <img src="star.svg" alt="star"></img>
                      {store.rate}
                      <span>
                        ({store.reviewCnt.toLocaleString()})
                      </span>
                    </div>

                    <div className="text-[14px] text-[#6B7684] mt-1">
                      {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
                      {store.deliveryFee.toLocaleString()}원
                    </div>
                  </div>
                </Link>
                
                <div className="flex flex-col gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                      onClick={(e) => {
                        e.preventDefault();
                        startEdit(store);
                      }} 
                    className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer"
                  >
                    수정
                  </button>
                  <button 
                      onClick={(e) => {
                        e.preventDefault();
                        deleteStore(store.id);
                      }} 
                    className="text-xs bg-red-50 text-red-500 px-2 py-1 rounded hover:bg-red-100 cursor-pointer"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="mt-8 p-4 bg-gray-50 rounded-xl">
          <h3 className="font-bold mb-3 text-gray-700">새로운 가게 추가</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="가게 이름 입력"
              className="border border-gray-300 p-2 flex-1 rounded-lg focus:outline-none focus:border-blue-500"
              value={newStoreName}
              onChange={(e) => setNewStoreName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button 
              onClick={handleAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium whitespace-nowrap cursor-pointer"
            >
              추가
            </button>
          </div>
        </div>
      </section>
      <OrderBar />
    </div>
  );
};

export default Stores;
