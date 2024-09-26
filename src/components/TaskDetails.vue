<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="deleteTask(task.id)">delete</i>
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFavorite(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore'
export default {
  props: {
    task: {
      isRequired: true,
      type: Object
    }
  },
  setup() {
    const taskStore = useTaskStore()
    const deleteTask = (taskId) => {
      const isConfirmed = confirm('Are you sure you want to delete this task?')
      if (isConfirmed) {
        taskStore.deleteTask(taskId)
      }
    }
    return { taskStore, deleteTask }
  }
}
</script>
