<template>
  <div class="content">
    <div class="banner hidden-xs">banner</div>
    <div class="details">
      <div class="row">
        <div class="col-md-6">融资交易</div>
        <div class="col-md-6">在线路演</div>
      </div>
      <div class="row">
        <div class="col-md-6">融资交易</div>
        <div class="col-md-6">在线路演</div>
      </div>
      <div class="row">
        <div class="col-md-6">融资交易</div>
        <div class="col-md-6">在线路演</div>
      </div>
    </div>
  </div>
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
.content {
  width: 100%;
  .banner {
    width: 100%;
    height: 200px;
    background-color: skyblue;
    line-height: 200px;
    font-size: 100px;
    text-align: center;
  }
    .row{
        margin:0;
        padding:0;
        div{
            height:200px;
            background-color:aquamarine;
            padding: 10px;
            // box-sizing:border-box;
            border:1px solid #eee;
        }
    }
}
</style>