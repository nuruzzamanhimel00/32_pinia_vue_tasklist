import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({ 
        tasks:[
            {id:1,title:"this is title number one",isFav:false},
            {id:2,title:"this is title number two",isFav:true},
        ],
        name: "Md Nuruzzaman himel",
    }),
    getters:{
        favs(){
            return this.tasks.filter( (task) => task.isFav );
        }
    }
})