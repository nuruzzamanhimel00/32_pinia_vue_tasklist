<template>
  <div>
      <main>

        <!-- .header -->
        <header>
          <img src="../public/pinia.svg" alt="pinia image">
          <h2>{{ taskStore.name }}</h2>
        </header>
        <nav class="text-center my-4">
          <button class="btn btn-success mr-2" @click.prevent="filter = 'all' ">All tasks</button>
          <button class="btn btn-danger" @click.prevent="filter = 'favs' ">Favs tasks</button>
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
  import { ref } from 'vue';

  export default {
    setup(){
      let taskStore = useTaskStore();

      const filter = ref('all');

      return {taskStore, filter};
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