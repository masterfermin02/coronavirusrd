<template>
  <div class="flexible-content">
     <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand to="/"
        >COVID19-RD</mdb-navbar-brand
      >
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item to="/" waves-fixed @click.native="active = 1">
            Inicio
          </mdb-nav-item>
          <mdb-nav-item :to="{ name: 'Details'}" @click.native="activeItem = 2"
            waves-fixed
            >
            Ver Mapa
          </mdb-nav-item>
          <mdb-nav-item :to="{ name: 'About'}" @click.native="activeItem = 2"
                        waves-fixed
          >Acerca</mdb-nav-item>
          <mdb-nav-item :to="{ name: 'Feedbacks'}" @click.native="activeItem = 3"
            waves-fixed
            >Sugerencias</mdb-nav-item
          >
          <mdb-nav-item :to="{ name: 'Collaborators'}" @click.native="activeItem = 4"
            waves-fixed
            >Colaboradores</mdb-nav-item
          >
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item>Siguenos:</mdb-nav-item>
          <li  class="border border-light rounded mr-1 nav-item ripple-parent" >
            <a href="https://www.instagram.com/covidrd/" class="nav-link navbar-link" target="_blank" >
              <!----><i class="mr-2 fab fa-instagram text-" ></i>Instagram </a>
          </li>
          <li  class="border border-light rounded mr-1 nav-item ripple-parent" >
            <a href="https://twitter.com/coronavirusrd4" class="nav-link navbar-link" target="_blank" >
              <!----><i class="mr-2 fab fa-twitter text-" ></i>Twitter </a>
          </li>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper" href="/"
        ><img alt="" class="img-fluid" src="./assets/1logotipo3000x3000.png"
      /></a>
      <mdb-list-group class="list-group-flush">

        <router-link to="/" @click.native="activeItem = 1">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 1 && 'active'"
            >
            <mdb-icon
              icon="chart-pie"
              class="mr-3"
            />
            Dashboard
            </mdb-list-group-item>
        </router-link>

       <router-link :to="{ name: 'About'}" @click.native="activeItem = 2">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 2 && 'active'"
            ><mdb-icon icon="user" class="mr-3" />Acerca</mdb-list-group-item
          >
        </router-link>

        <router-link :to="{ name: 'Feedbacks'}" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            ><mdb-icon icon="fa fa-comments" class="mr-3" />Sugerencias</mdb-list-group-item
          >
        </router-link>

        <router-link :to="{ name: 'Collaborators'}" @click.native="activeItem = 4">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 4 && 'active'"
            ><mdb-icon icon="user-friends" class="mr-3" />Colaboradores</mdb-list-group-item
          >
        </router-link>

      </mdb-list-group>
    </div>
    <div class="mobile-sidebar-fixed position-fixed">
      <mdb-list-group class="list-group-flush">
          <li  class="list-group-item d-flex justify-content-between align-items-center list-group-item-action tw-ic">
            <a target="_blank" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcoronavirus-rd.com" >
              <mdb-icon fab icon="facebook"/>
            </a>
          </li>
        <li  class="list-group-item d-flex justify-content-between align-items-center list-group-item-action tw-ic">
          <a target="_blank" href="https://twitter.com/intent/tweet/?text=Esta aplicacion busca llevar a sus usuarios informacion resumida y actualizada por el ministerio de Salud Publica sobre la propagacion del virus COVID-19&amp;url=https%3A%2F%2Fcoronavirus-rd.com" >
            <mdb-icon fab icon="twitter"/>
          </a>
          </li>
         <li  class="list-group-item d-flex justify-content-between align-items-center list-group-item-action c">
           <a target="_blank" class="green-ic" href="https://wa.me/?text=Esta aplicacion busca llevar a sus usuarios informacion resumida y actualizada por el ministerio de Salud Publica sobre la propagacion del virus COVID-19 https%3A%2F%2Fcoronavirus-rd.com" >
            <mdb-icon fab icon="whatsapp "/>
           </a>
          </li>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>

      <div id="main-content" class="mt-5 p-5">
        <router-view></router-view>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">

        <div class="pt-4">
          <p>Este es un proyecto Open Source y sin fines de lucro, puedes colaborar aqui:</p>
          <mdb-btn
            outline="white"
            tag="a"
            href="https://github.com/masterfermin02/coronavirusrd"
            target="_blank"
            >Repositorio <mdb-icon fab icon="github" class="ml-2"
          /></mdb-btn>
          <mdb-btn
            outline="white"
            tag="a"
            href="https://trello.com/b/57BtTWlZ"
            target="_blank"
            >Pizarra <mdb-icon icon="chalkboard" class="ml-2"
          /></mdb-btn>
        </div>
        <hr>
        <p class="footer-copyright mb-0 py-3 text-center">

         Creadores:
          <a href="https://github.com/masterfermin02"> Fermin Perdomo </a> y
          <a href="https://github.com/aneudyx"> Aneudy Caceres </a>
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbBtn,
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  mdbFooter,
  waves
} from "mdbvue";

export default {
  name: "AdminTemplate",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    ftr: mdbFooter
  },
  data() {
    return {
      activeItem: 1
    };
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },
  mixins: [waves]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>

<style scoped>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 1.5rem;
}

.sidebar-fixed .list-group-item, .mobile-sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.mobile-sidebar-fixed .list-group-item {
  padding-left: 12px;
}

.sidebar-fixed .list-group .active, .mobile-sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

.mobile-sidebar-fixed {
  left: 0;
  width: 40px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  top: 96px;
  display: none;

}



@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
  .mobile-sidebar-fixed {
    display: block !important;
    transition: display 0.3s;
  }
  #main-content {
    padding-right: 0.75rem !important;
    padding-left: 3.25rem !important;
  }
}

</style>
