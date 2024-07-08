import { create } from "zustand";

interface GetUserType {
  email: string;
  id: number;
}



interface UseDataType {
  cotegory: CotegoryGetType[];
  user: GetUserType | null;
  setCotegory: (cotegory: CotegoryGetType[]) => void;
  setUser: (user: GetUserType) => void;
}

export const useData = create<UseDataType>((set) => ({
  cotegory: [],
  user: null,
  setCotegory: (cotegory) => set({ cotegory }),
  setUser: (user) => set({ user }),
}));
