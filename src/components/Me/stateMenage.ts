import { create } from "zustand";

interface GetUserType {
  email: string;
  id: number;
}

interface UseDataType {
  incomes: CotegoryGetType[];
  expenses: ExpensesType[];
  cotegory: CotegoryGetType[];
  user: GetUserType | null;
  setIncomes: (incomes: CotegoryGetType[]) => void;
  setExpenses: (expenses: ExpensesType[]) => void;
  setCotegory: (cotegory: CotegoryGetType[]) => void;
  setUser: (user: GetUserType) => void;
}

export const useData = create<UseDataType>((set) => ({
  incomes: [],
  expenses: [],
  cotegory: [],
  user: null,
  setIncomes: (incomes) => set({ incomes }),
  setExpenses: (expenses) => set({ expenses }),
  setCotegory: (cotegory) => set({ cotegory }),
  setUser: (user) => set({ user }),
}));
