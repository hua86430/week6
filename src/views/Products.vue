<template>
  <h1 class="mt-3 mb-3">產品總覽</h1>
  <div class="container">
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="height: 100px; background-size: cover; background-position: center"
              :style="{ background: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>{{ item.title }}</td>
          <td>
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <router-link :to="`/product/${item.id}`">
                <button type="button" class="btn btn-outline-secondary">查看更多</button>
              </router-link>

              <button type="button" class="btn btn-outline-danger" @click="addCart(item.id, qty)">
                <i class="fas fa-spinner fa-pulse"></i>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
    };
  },
  methods: {
    addCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const itemData = {
        product_id: id,
        qty,
      };
      this.$http
        .post(url, {
          data: itemData,
        })
        .then((res) => {
          this.$swal(res.data.message);
        })
        .catch((res) => {
          this.$swal(res.data.message);
        });
    },
  },
  created () {
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?`;
    this.$http.get(url).then((res) => {
      if (res.data.success) {
        this.products = res.data.products;
        console.log(this.products);
      }
    });
  },
};
</script>
