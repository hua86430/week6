<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand">前台頁面</span>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/products">產品總覽</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/cart">購物車</router-link>
          </li>
        </ul>
        <span class="navbar-text"
          ><router-link class="nav-link active" to="/login">後台管理系統</router-link></span
        >
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      status: false,
    };
  },
  methods: {
    getToken () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
    },
  },
  created () {},
};
</script>
