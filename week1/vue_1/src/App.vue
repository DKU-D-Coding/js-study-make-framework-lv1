<template>
  <h3>1주차 Vue 실습 - 할 일</h3>
  <AddingInput @addToDo="addToDo"/>
  <TodoCard v-for="todo,i in todoList" :key="i" v-bind:todo="todo" @editToDo="editToDo" @toggleToDo="toggleToDo" @deleteToDo="deleteToDo"/>

</template>

<script>
import AddingInput from './components/AddingInput.vue';
import TodoCard from './components/TodoCard.vue';

export default {
  name: 'App',

  components: {
    AddingInput, TodoCard
  },

  data() {
    return {
      idCnt: 0,
      todoList: []
    };
  },
  
  methods: {
    addToDo(title) {
      this.todoList.push({
          id: this.idCnt,
          title: title,
          done: false
      });
      this.idCnt += 1;
    },
    editToDo({id, title}){
      const index = this.todoList.findIndex(todo => {
        return todo.id === id;
      });
      this.todoList[index].title = title;
    },
    deleteToDo(id) {
      const index = this.todoList.findIndex(todo => {
        return todo.id === id;
      });
      this.todoList.splice(index, 1);
    },
    toggleToDo({id, done}){
      const index = this.todoList.findIndex(todo => {
        return todo.id === id;
      });
      this.todoList[index].done = done;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
