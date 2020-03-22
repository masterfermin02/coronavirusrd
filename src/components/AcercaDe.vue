<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p class="mb-2">Esta aplicacion busca llevar a sus usuarios informacion resumida y actualizada por el ministerio de Salud Publica sobre la propagacion del virus COVID-19.</p> 
    <p class="mb-2"> Estaremos actualizando cada dia luego del boletin informativo del ministerio.</p>
    <p class="mb-2">Esta herramienta no es oficial del Ministerio De Salud Publica, ni de ningun organismo institucional, mas se alimenta de la informacion publicada por esos medios</p>
     <p>
       Finalmente puede acceder a toda la informacion del ministerio a traves de sus redes sociales: <a href="https://www.instagram.com/saludpublicard/" target="_blank">Instagram</a>, <a href="https://twitter.com/SaludPublicaRD"  target="_blank">Twitter</a> & <a href="https://www.facebook.com/SaludPublicaRD" target="_blank" >Facebook</a>
     </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Acerca de CoVID19-RD'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>
