<template>
  <h1 class="mt-3 mb-3">後台產品列表</h1>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productData" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="">{{ item.origin_price }}</td>
          <td class="">{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="(item.is_enabled = 1)">啟用</span>
            <span v-if="(item.is_enabled = 0)">未啟用</span>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <pagination :page="pagination" @page-change="getData"></pagination>
  </div>
  <!-- Modal -->
</template>

<script>
import Pagination from '../../components/Pagination.vue';

export default {
  data () {
    return {
      productData: [],
      pagination: {},
    };
  },
  methods: {
    getData (page) {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.productData = res.data.products;
            this.pagination = res.data.pagination;
            console.log(this.productData);
          }
        })
        .catch((res) => {
          this.$this.$swal(res.data.message);
        });
    },
  },
  components: {
    Pagination,
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.getData();
  },
};
</script>
