<template
  ><div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mt-3 mb-3 font-weight-normal">
        登入
      </h1>
      <div class="col-8">
        <Form ref="form" id="form" class="form-signin" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="信箱"
              type="email"
              rules="email|required"
              class="form-control"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入 Email"
              v-model="user.username"
            ></Field>
            <error-message name="信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="password"
              name="密碼"
              type="password"
              rules="required"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              v-model="user.password"
              placeholder="請輸入 Email"
            ></Field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            id="loginBtn"
            type="button"
            @click="login"
          >
            登入
          </button>
        </Form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;

            document.cookie = `huaToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/admin/products');
          } else {
            this.$swal(`${res.data.message}`, '帳號或密碼錯誤，請重新輸入', 'error');
          }
        })
        .catch((res) => {
          this.$swal(res.data.message);
        });
    },
  },
  beforeCreate () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    if (!token) {
      this.$swal('請先登入');
    } else {
      this.$router.push('/admin/products');
    }
  },
};
</script>
