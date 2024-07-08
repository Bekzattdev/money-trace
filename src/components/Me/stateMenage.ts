import { create } from "zustand";

interface GetUserType {
  email: string;
  id: number;
}

interface UseDataType {
  balance: string;
  incomes: ExpensesType[];
  expenses: ExpensesType[];
  cotegory: CotegoryGetType[];
  user: GetUserType | null;
  setBalance: (balance: string) => void;
  setIncomes: (incomes: ExpensesType[]) => void;
  setExpenses: (expenses: ExpensesType[]) => void;
  setCotegory: (cotegory: CotegoryGetType[]) => void;
  setUser: (user: GetUserType) => void;
}

export const useData = create<UseDataType>((set) => ({
  balance: "",
  incomes: [],
  expenses: [],
  cotegory: [],
  user: null,
  setBalance: (balance) => set({ balance }),
  setIncomes: (incomes) => set({ incomes }),
  setExpenses: (expenses) => set({ expenses }),
  setCotegory: (cotegory) => set({ cotegory }),
  setUser: (user) => set({ user }),
}));
