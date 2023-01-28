<template>
    <div>
      <input type="checkbox" :checked="todo.done" v-on:change="toggleToDo" v-on:keyup.enter="editToDo"/>
      <input v-if="editMode" type="text" :value="todo.title" v-on:change="editHandler"/>
      <span v-else>{{todo.done === false ? todo.title : "완료되었습니다" }}</span>
      <button v-on:click="editToDo">{{editMode === false ? "수정" : "완료"}}</button>
      <button v-on:click="deleteToDo">삭제</button>
    </div>
  </template>
    
  <script>
  export default {
      name: 'TodoCard',
      
      props: {
        todo: Object
      },
  
      data() {
        return {
          editMode: false,
          changedTitle: "",
        }
      },
  
      methods: {
        editHandler(e){
          this.changedTitle = e.target.value;
        },
        editToDo(){
          if(this.editMode === true){
            this.$emit("editToDo", { id: this.todo.id, title: this.changedTitle});
          }
          this.editMode = !this.editMode;
        },
        deleteToDo(){
          this.$emit("deleteToDo", this.todo.id);
        },
        toggleToDo(e){
          this.$emit("toggleToDo", { id: this.todo.id, done: e.target.checked});
        }
    }
  }
  </script>
    