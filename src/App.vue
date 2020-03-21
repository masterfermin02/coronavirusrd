<template>
  <main id="app" role="main">
    <Header />
    <Hero />
    <CoronaInformation />
    <Footer />
  </main>
</template>

<script>

  import Header from './components/Header'
  import Hero from './components/Hero'
  import CoronaInformation from './components/CoronaInformation'
  import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    CoronaInformation,
    Hero,
    Footer
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
  margin-top: 60px;
}
</style>
