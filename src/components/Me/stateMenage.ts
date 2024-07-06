import { create } from "zustand";

interface GetUserType {
  email: string;
  id: number;
}

interface UseDataType {
  user: GetUserType | null;
  setUser: (user: GetUserType) => void;
}

export const useData = create<UseDataType>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
