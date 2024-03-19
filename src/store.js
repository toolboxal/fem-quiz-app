import { create } from 'zustand'

export const useMode = create((set) => ({
  mode: 'dark',
  changeMode: () =>
    set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
}))

export const useStore = create((set) => ({
  qns: {},
  setQns: (data) => set(() => ({ qns: data })),
  gameStart: 'inactive',
  setGameStart: (gameStatus) => set(() => ({ gameStart: gameStatus })),
  category: {},
  setCategory: (topic) => set(() => ({ category: topic })),
  curQnIndex: 0,
  setCurQnIndex: () =>
    set((state) => ({
      curQnIndex: state.curQnIndex + 1,
    })),
  selection: '',
  setSelection: (selection) => set(() => ({ selection: selection })),
  answer: 'unsubmitted',
  setAnswer: (type) => set(() => ({ answer: type })),
  score: 0,
  setScore: () => set((state) => ({ score: state.score + 1 })),
  reset: () =>
    set({
      gameStart: 'inactive',
      category: {},
      curQnIndex: 0,
      selection: '',
      answer: 'unsubmitted',
      score: 0,
    }),
}))
