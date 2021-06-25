<template>
  <h1 class="mt-3 mb-3">產品介紹</h1>
  <div class="row">
    <div class="col-sm-6">
      <img class="img-fluid" :src="product.imageUrl" alt />
    </div>
    <div class="col-sm-6">
      <span class="badge bg-primary rounded-pill">{{}}</span>
      <p>商品描述：{{ product.description }}</p>
      <p>商品內容：{{ product.content }}</p>
      <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
      <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
      <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
      <div>
        <div class="input-group">
          <input type="number" class="form-control" v-model.number="qty" min="1" />
          <button type="button" class="btn btn-primary" @click="addCart(product.id, qty)">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      id: this.$route.params.id,
      qty: 1,
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
          this.$router.push('/');
        })
        .catch((res) => {
          this.$swal(res.data.message);
        });
    },
  },
  created () {
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
    this.$http.get(url).then((res) => {
      if (res.data.success) {
        this.product = res.data.product;
      }
    });
  },
};
</script>
