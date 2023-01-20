<template>
  <div>
      <main>

        <!-- .header -->
        <header>
          <img src="../public/pinia.svg" alt="pinia image">
          <h2>{{ name }}</h2>
        </header>

         <!-- loading -->
        <div class="loading" v-if="loading">Loading tasks...</div>


         <!-- new task form -->
        <div class="new-task-form">
          <task-form />
        </div>
        <nav class="text-center my-4">
          <button class="btn btn-success mr-2" @click.prevent="filter = 'all' ">All tasks ({{ totalCount }}) </button>
          <button class="btn btn-danger mr-2" @click.prevent="filter = 'favs' ">Favs tasks({{ favCount }})</button>
          <button @click.prevent="taskStore.$reset()" class="btn btn-warning" >Reset</button>
        </nav>
        <!-- task list.. -->
        <div class="task-list" v-if="filter == 'all' ">
          <h1>All tasks({{ totalCount }}):-</h1>
          <div v-for="task in tasks" :key="task.id">
            <!-- <p>{{ task.title }}</p> -->
            <task-details :task="task" />
          </div>
        </div>
        <div class="task-list" v-if="filter == 'favs' ">
          <h1>Fav tasks ({{ favCount }}):-</h1>
          <div v-for="task in favs" :key="task.id">
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
import { storeToRefs } from 'pinia';

  export default {
    setup(){
      let taskStore = useTaskStore();

        // fetch tasks
      taskStore.getTasks()

      const {tasks, loading, name, favs, favCount, totalCount} = storeToRefs(taskStore);

      const filter = ref('all');

      return {taskStore, filter, tasks, loading, name, favs, favCount, totalCount};
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