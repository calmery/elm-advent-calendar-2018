<template>
  <div id='app'>
    <img src='./assets/logo.png' />
    <HelloWorld />
    <elm-qiita-profile ref='elm' v-bind:data-user-id='userId' />
    <div>
      <input v-model='value' v-bind:disabled='disabled' />
      <button @click='onClick' v-bind:disabled='disabled'>Get</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      userId: 'calmery',
      value: '',
      disabled: false
    };
  },
  mounted: function() {
    const elm = this.$refs.elm;

    elm.addEventListener('load', this._onLoad.bind(this));
    elm.addEventListener('error', this._onError.bind(this));
  },
  methods: {
    onClick: function() {
      if (this.value === '') {
        return;
      }

      this.userId = this.value;
      this.value = '';
      this.disabled = true;
    },
    _onLoad: function() {
      this.disabled = false;
    },
    _onError: function() {
      this.disabled = false;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
