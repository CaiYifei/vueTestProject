<template>
  <div id="app">
      <div id="nav">
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/app/helloworld">Hello World</router-link> |
          <router-link to="/app/markdown">Mark Down</router-link> |
          <router-link to="/app/github-log">Github Log</router-link> |
          <router-link to="/app/grid">Grid</router-link> |
          <router-link to="/app/tree-structure">Tree Structure</router-link> |
          <router-link to="/app/svg">SVG</router-link> |
          <router-link to="/app/modal">Modal</router-link> |
          <router-link to="/app/draggable-header">Draggable Header</router-link> |
          <router-link to="/app/embeded-component">Embeded Component</router-link>
      </div>
      <hr>
    <router-view/>
  </div>
</template>

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
