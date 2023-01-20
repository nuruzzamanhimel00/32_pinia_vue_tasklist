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
        },
        favCount(){
            return this.tasks.reduce( (p, c) =>{
                return c.isFav ? p + 1 : p
            } , 0 );
        },
        totalCount(){
            return this.tasks.length;
        }
    },
    actions:{
        addTask(task){
            this.tasks.unshift(task);
        },
        deleteTask(id){
            this.tasks = this.tasks.filter( (task) => task.id != id );
        },
        toggleFavorite(id){
            let findTask = this.tasks.find( (task) => task.id === id );
            findTask.isFav =!findTask.isFav;
        }
    }
})