import styled from "styled-components";
import GrayStar from "../../public/graystar.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStores } from "../hooks/useStores";


const StoreItem = () => {
    const {stores, loading, addStore, deleteStore, updateStore} = useStores();
    const [name, setName] = useState<string>("");


    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingName, setEditingName] = useState<string>("");

    const handleAddStore = async () => {
        if (!name.trim()) return;
        await addStore(name.trim());
        setName("");
    }

    const handleEditButton = async (id: number, currentName: string) => {
        if (editingId !== id) {
            setEditingId(id);
            setEditingName(currentName);
            return;
        }

        if (!editingName.trim()) {
            alert("이름을 입력해주세요.");
            return;
        }

        await updateStore(id, editingName.trim());

        setEditingId(null);
        setEditingName("");
    }

    const handleDeleteButton = async(id: number) => {
        if (!window.confirm("해당 가게를 삭제하시겠습니까?")) return;
        await deleteStore(id);
    }

    const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    if (loading) {return <div>로딩중..</div>;}

  
    return (
    <StyledStoreItems>
        {stores.map(({id, name, rate, reviewCnt, minDeliveryTime, maxDeliveryTime, deliveryFee}) => (
            <StyledRow key={id}>
                <StyledLink to={`/store/${id}`}>
                    <StyledStoreItem>
                        <StyledStoreImage/>
                        <StyledStoreItemDesc>
                            <StyledStoreName>
                                {id < 4 && (
                                    <span>{id}위</span>
                                )}
                                {editingId === id ? (
                                    <input
                                    value={editingName}
                                    onChange={(e) => setEditingName(e.target.value)}
                                    onClick={handleInputClick}
                                    />
                                ) : (
                                    <span>{name}</span>
                                )}
                            </StyledStoreName>
                            <StyledStoreReview>
                                <img src={GrayStar} alt="ratestar"/>
                                <span>{rate} ({reviewCnt.toLocaleString()})</span>
                            </StyledStoreReview>
                            <StyledStoreDelivery>
                                <span>{minDeliveryTime}분~{maxDeliveryTime}분 ∙ 배달비 {deliveryFee.toLocaleString()}원</span>
                            </StyledStoreDelivery>
                        </StyledStoreItemDesc>
                    </StyledStoreItem>
                </StyledLink>
                <StyledButtonGroup>
                <button onClick={() => handleEditButton(id, name)}>
                    {editingId === id ? "수정 완료" : "수정"}
                </button>
                <button onClick={() => handleDeleteButton(id)}>삭제</button>
                </StyledButtonGroup>
            </StyledRow>
        ))}

        <StyledAddStoreBox>
            <input
                type="text"
                placeholder="새 가게 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={()=> void handleAddStore()}>가게 추가</button>
        </StyledAddStoreBox>
    </StyledStoreItems>
  );
};

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const StyledButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    button {
        width: 50px;
        padding: 4px 8px;
        background-color: #3182f6;
        color: #fff;
        border-radius: 4px;
        border: none;
    }
`;

const StyledAddStoreBox = styled.div`
    display: flex;
    gap: 10px;
    background-color: #ecececff;
    padding: 10px 0;
    margin: 10px;
    height: 40px;
    align-items: center;
    justify-content: center;
    
    button {
        background-color: #3182f6;
        color: #fff;
        border-radius: 4px;
        border: none;
    }
`;

const StyledStoreItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    margin-top: 100px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    flex: 1;
`;

const StyledStoreItem = styled.div`
    padding: 16px 0 17px 24px;
    box-sizing: border-box;
    display: flex;
    gap: 17px;
    flex: 1;
`;

const StyledStoreImage = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 8px;
    background: #ECECEC;
`;

const StyledStoreItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StyledStoreName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: #333D4B;
    font-size: 17px;
    font-weight: 600;
`;

const StyledStoreReview = styled.div`
    display: flex;
    gap: 1px;
    color: #6B7684;
    font-size: 13px;
    font-weight: 500;
`;

const StyledStoreDelivery = styled.div`
    color: #6B7684;
    font-size: 13px;
    font-weight: 500;
`;

export default StoreItem;