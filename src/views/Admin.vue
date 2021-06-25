<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <span class="navbar-brand">後台管理系統</span>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/admin/products">產品列表總管</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/admin/orderlist">客戶訂單</router-link>
          </li>
        </ul>
        <span class="navbar-text" @click="signOut"
          ><button type="button" class="btn btn-secondary nav-link active">
            登出並回到前台頁面
          </button></span
        >
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    signOut () {
      document.cookie = 'huaToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      this.$router.push('/products');
      this.$swal('登出成功');
    },
  },
  created () {},
};
</script>
