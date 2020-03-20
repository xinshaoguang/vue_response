<template>
  <header class="menuMod">
    <div class="menuTop"></div>
    <div class="menuBot">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand hidden-sm hidden-xs" href="#">logo图片</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <router-link :to="{path:'/home'}">
                  <a href="#">
                    首页
                    <span class="sr-only">(current)</span>
                  </a>
                </router-link>
              </li>
              <li class>
                  <router-link :to="{path:'/list'}">
                <a href="#">
                  股权融资
                  <span class="sr-only">(current)</span>
                </a>
                </router-link>
              </li>
              <li class>
                <a href="#">
                 债权融资
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class>
                <a href="#">
                  增值服务
                  <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>


