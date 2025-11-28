const API_URL = "http://localhost:3001"

export const getStores = async () => {
    const res = await fetch(API_URL + '/stores');
    if (!res.ok) throw new Error("가게 불러오기 실패");
    return await res.json();
};

export const getCategories = async () => {
    const res = await fetch(API_URL + '/categories');
    if (!res.ok) throw new Error("가게 불러오기 실패");
    return await res.json();
};