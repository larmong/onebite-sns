import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// combine => type을 자동 추론 해줌
// immer => update를 편리하게 해줌
// subscribeWithSelector => select 함수를 통해서 store의 특정 값을 구독함으로써, 해당 값이 변경 될 때 마다 어떠한 기능을 수행하게 해줌
// persist => localStorage, sessionStorage에 저장하게 해줌
//
// ======> devtools > persist > subscribeWithSelector > immer > combine 순서를 잘 지켜서 사용해야 함!!!

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set) => ({
            actions: {
              increase: () => {
                set((state) => {
                  state.count += 1;
                });

                // set((state) => ({
                //   count: state.count + 1
                // }))
              },
              decrease: () => {
                set((state) => {
                  if (state.count === 0) return;
                  state.count -= 1;
                });

                // set((state) => ({
                //   count: state.count - 1
                // }))
              },
            },
          }))
        )
      ),
      {
        name: "countStore",
        partialize: (store) => ({
          count: store.count, // persist로 저장 할 값을 지정해 줌
        }),
        storage: createJSONStorage(() => sessionStorage), // 기본은 localStorage에 저장 됨
      }
    ),
    {
      name: "countStore",
    }
  )
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // Listner
    console.log(`count changed! count: ${count}, prevCount: ${prevCount}`);
  }
);

// type Store = {
//   count: number;
//   actions: { increase: () => void; decrease: () => void };
// };

// export const useCountStore = create<Store>((set) => ({
//   count: 0,
//   actions: {
//     increase: () => set((store) => ({ count: store.count + 1 })),
//     decrease: () => set((store) => ({ count: store.count - 1 })),
//   },
// }));

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
