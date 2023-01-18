<template>
  <div>
      <main>

        <!-- .header -->
        <header>
          <img src="../public/pinia.svg" alt="pinia image">
          <h2>{{ taskStore.name }}</h2>
        </header>

        <!-- task list.. -->
        <div class="task-list">
          <div v-for="task in taskStore.tasks" :key="task.id">
            <!-- <p>{{ task.title }}</p> -->
            <task-details :task="task" />
          </div>
        </div>

      </main>
  </div>
</template>

<script>

  import {useTaskStore} from '@/stores/TaskStore.js'

  import TaskDetails from './components/TaskDetails.vue'

  export default {
    setup(){
      let taskStore = useTaskStore();

      return {taskStore};
    },
    name:'App',
    data(){
      return {

      }
    },
    components:{
      TaskDetails
    }
  }
</script>

<style  scoped>

</style>