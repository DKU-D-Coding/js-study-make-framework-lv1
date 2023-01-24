<script>
const LS_TAG = "toDos";
let id = 0;
export default {
  data() {
    return {
      text: "",
      toDos: [],
      editing: false,
      editIndex: 0,
    };
  },
  mounted() {
    const stoargeToDos = localStorage.getItem(LS_TAG);
    if (stoargeToDos !== null) {
      this.toDos = JSON.parse(stoargeToDos);
    }
  },
  methods: {
    createToDo() {
      if (this.text !== "") {
        this.toDos.push({ id: id++, text: this.text });
        this.saveToDos();
        this.text = "";
      }
    },
    startEditToDo(toDo) {
      console.log(toDo);
      this.editIndex = toDo.id;
      this.editing = true;
      this.text = this.toDos[toDo.id].text;
    },
    finishEditToDo() {
      this.toDos[this.editIndex].text = this.text;
      this.saveToDos();
      this.editing = false;
      this.text = "";
    },
    deleteToDo(toDo) {
      this.toDos = this.toDos.filter((t) => t !== toDo);
      this.saveToDos();
    },
    saveToDos() {
      localStorage.setItem(LS_TAG, JSON.stringify(this.toDos));
    },
  },
};
</script>

<template>
  <header>
    <h1>To Do Vue!</h1>
  </header>
  <main>
    <form v-if="editing" @submit.prevent="finishEditToDo">
      <h3>Edit to do</h3>
      <input v-model="text" />
    </form>
    <form v-else @submit.prevent="createToDo">
      <h3>Add your to do</h3>
      <input v-model="text" />
    </form>
    <ul>
      <li v-for="toDo in toDos" :key="toDo.id">
        <span>{{ toDo.text }}</span>
        <span @click="startEditToDo(toDo)"> ✏️</span>
        <span @click="deleteToDo(toDo)"> ✅</span>
      </li>
    </ul>
  </main>
</template>

<style></style>
