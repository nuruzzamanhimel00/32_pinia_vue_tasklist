import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({ 
        tasks:[
            // {id:1,title:"this is title number one",isFav:false},
            // {id:2,title:"this is title number two",isFav:true},
        ],
        loading:false,
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
        async getTasks(){
            this.loading = true;
            let res = await fetch("http://localhost:3000/tasks");
            const data = await res.json();
            this.tasks  = data;
            this.loading = false;
            // console.log(data);
        }
        ,
        async addTask(task){
            this.loading = true;

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            });

            if (res.error) {
                console.log(res.error)
              }else{
                this.tasks.unshift(task);
                this.loading = false;
              }
          
            
        },
        async deleteTask(id){
            this.loading = true;

            const res = await fetch('http://localhost:3000/tasks/'+id, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            });

            if (res.error) {
                console.log(res.error)
              }else{
                this.tasks = this.tasks.filter( (task) => task.id != id );
                this.loading = false;
              }

        
           
        },
        async toggleFavorite(id){

            
            let findTask = this.tasks.find( (task) => task.id === id );
         
            const res = await fetch('http://localhost:3000/tasks/'+id, {
                method: 'PATCH',
                body: JSON.stringify({isFav:!findTask.isFav}),
                headers: {'Content-Type': 'application/json'}
            });

            if (res.error) {
                console.log(res.error)
              }else{
                findTask.isFav =!findTask.isFav;
              }

           
        }
    }
})