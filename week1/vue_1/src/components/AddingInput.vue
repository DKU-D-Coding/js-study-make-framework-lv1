<template>
    <div class="inputArea">
        <input 
            type="text"
            v-model="title"
            v-on:keyup.enter="addTodoItem"
        />
        <button v-on:click="addTodoItem">추가</button>
    </div>
</template>

<script>
    export default {
        name: 'AddingInput',
        
        props: {
            
        },

        data() {
            return {
                title: "",
            };
        },

        methods: {
            addTodoItem(){
                this.$emit('addToDo', this.title);
                this.title = "";
            }
        }
    }
</script>