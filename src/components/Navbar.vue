<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-brand :to="{ path: '/' }">
      <img src="../assets/images/aws-app-icon.jpeg" width="25" />
      Vue_Skeleton
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ path: '/' }" data-cy="nav-bar-home">Home</b-nav-item>
<!--        <b-nav-item :to="{ path: '/products' }" data-cy="nav-bar-products">Products</b-nav-item>-->
        <b-nav-item-dropdown data-cy="nav-bar-sample-page" text="Sample Page" right>
          <b-dropdown-item :to="{ path: '/sample-page/1' }" data-cy="nav-bar-sample-page-1">Page 1</b-dropdown-item>
          <b-dropdown-item :to="{ path: '/sample-page/2' }" data-cy="nav-bar-sample-page-2">Page 2</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
