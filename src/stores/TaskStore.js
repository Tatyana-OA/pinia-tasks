import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false
  }),
  getters: {
    async getTasks() {
      this.loading = true
      const response = await fetch('http://localhost:3000/tasks')
      const data = await response.json()
      this.tasks = data
      this.loading = false
    },
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
  },
  actions: {
    toggleFavorite(id) {
      const task = this.tasks.find((t) => t.id === id)
      task.isFav = !task.isFav
    },
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      return (this.tasks = this.tasks.filter((t) => t.id !== id))
    }
  }
})
