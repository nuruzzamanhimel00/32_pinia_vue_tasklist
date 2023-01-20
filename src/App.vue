<template>
  <div>
      <main>

        <!-- .header -->
        <header>
          <img src="../public/pinia.svg" alt="pinia image">
          <h2>{{ taskStore.name }}</h2>
        </header>

         <!-- loading -->
        <div class="loading" v-if="taskStore.loading">Loading tasks...</div>


         <!-- new task form -->
        <div class="new-task-form">
          <task-form />
        </div>
        <nav class="text-center my-4">
          <button class="btn btn-success mr-2" @click.prevent="filter = 'all' ">All tasks ({{ taskStore.totalCount }}) </button>
          <button class="btn btn-danger mr-2" @click.prevent="filter = 'favs' ">Favs tasks({{ taskStore.favCount }})</button>
          <button @click.prevent="taskStore.$reset()" class="btn btn-warning" >Reset</button>
        </nav>
        <!-- task list.. -->
        <div class="task-list" v-if="filter == 'all' ">
          <h1>All tasks({{ taskStore.totalCount }}):-</h1>
          <div v-for="task in taskStore.tasks" :key="task.id">
            <!-- <p>{{ task.title }}</p> -->
            <task-details :task="task" />
          </div>
        </div>
        <div class="task-list" v-if="filter == 'favs' ">
          <h1>Fav tasks ({{ taskStore.favCount }}):-</h1>
          <div v-for="task in taskStore.favs" :key="task.id">
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
  import TaskForm from './components/TaskForm.vue'
  import { ref } from 'vue';

  export default {
    setup(){
      let taskStore = useTaskStore();

        // fetch tasks
      taskStore.getTasks()

      const filter = ref('all');

      return {taskStore, filter};
    },
    name:'App',
    components:{
      TaskDetails,
      TaskForm,
    }
  }
</script>

<style  scoped>

</style>