import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Organize your workspace for maximum productivity', isFav: true },
      { id: 2, title: 'Learn a new recipe and cook it for dinner', isFav: false },
      { id: 3, title: 'Read a book outside your usual genre', isFav: true },
      { id: 4, title: 'Complete a challenging puzzle', isFav: false },
      { id: 5, title: 'Plan a weekend getaway to a new place', isFav: true }
    ]
  }),
  getters: {
    getFaveTasks() {
      return this.tasks.filter((t) => t.isFav)
    },
    getFaveCount() {
      return this.tasks.filter((t) => t.isFav).length
    },
    // Arrow functions with this
    getAllCount: (state) => {
      return state.tasks.length
    }
  }
})
