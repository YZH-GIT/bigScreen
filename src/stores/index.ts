import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    title: '大屏演示'
  }),
  actions: {
    setTitle(t: string) { this.title = t }
  }
})
