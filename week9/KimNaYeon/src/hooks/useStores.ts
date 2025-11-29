import { useState, useEffect } from "react";

export interface Store {
    id: number;
    name: string;
    rate: number;
    reviewCnt: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    deliveryFee: number;
}

const API_URL = "http://localhost:3001/stores";

export const useStores = () => {
   const [stores, setStores] = useState<Store[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(API_URL);
                const data: Store[] = await res.json();
                setStores(data);
            } catch (error) {
                console.error("불러오기 실패: ", error);
            } finally {
                setLoading(false);
            }
        };
        void fetchData();
    }, []);

//POST
   const addStore = async (name: string) => {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, rate: 4.5, reviewCnt: 3000, minDeliveryTime: 20, maxDeliveryTime: 30, deliveryFee: 2000}),
        });

        const newStore: Store = await res.json();
        setStores((prevStores) => [...prevStores, newStore]);
    };

//DELETE
    const deleteStore = async (id: number) => {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        setStores((prevStores) => prevStores.filter((s) => s.id !== id));
    };

//PATCH
    const updateStore = async (id: number, name: string) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name}),
        });

        const update: Store = await res.json();
        setStores((prevStores) => prevStores.map((s) => (s.id === id ? {...s, name: update.name}:s)));
    };

   return {stores, loading, addStore, deleteStore, updateStore};
};