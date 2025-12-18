import { create } from "zustand";

type Store = {
  count: number;
  actions: { increase: () => void; decrease: () => void };
};

export const useCountStore = create<Store>((set) => ({
  count: 0,
  actions: {
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
  },
}));

// 이름 바뀌는것 대비해서 커스텀 훅 만들기
// 커스텀 훅을 사용하면 더 안정적인 코드 작성 가능
export const useCount = () => {
  return useCountStore((state) => state.count);
};

export const useIncrease = () => {
  return useCountStore((state) => state.actions.increase);
};

export const useDecrease = () => {
  return useCountStore((state) => state.actions.decrease);
};
