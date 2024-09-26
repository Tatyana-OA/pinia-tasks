<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button
      ><button @click="filter = 'faves'">Fave Tasks</button>
    </nav>
    <div class="loading" v-if="taskStore.loading">Loading Tasks...</div>
    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks: {{ taskStore.getAllCount }}</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'faves'">
      <p>Fave Tasks: {{ taskStore.getFaveCount }}</p>
      <div v-for="task in taskStore.getFaveTasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="new-task-form"><TaskForm /></div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore()
    onMounted(async () => {
      await taskStore.getTasks()
    })

    const filter = ref('all')

    return {
      taskStore,
      filter
    }
  }
}
</script>
