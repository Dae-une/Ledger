import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserStore {
  userName: string | null;
  image: string | null;
  setUser: (data: { userName: string | null; image: string | null }) => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userName: null,
      image: null,

      setUser: (data: { userName: string | null; image: string | null }) =>
        set((state) => ({
          ...state,
          userName: data.userName,
          image: data.image,
        })),
    }),
    {
      name: 'user-storage',
    },
  ),
);

export default useUserStore;
