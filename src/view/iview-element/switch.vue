<template>
  <div>
    <i-switch>
      <span slot="open">开</span>
      <span slot="close">关</span>
    </i-switch>
    <i-switch>
      <Icon type="md-checkmark" slot="open"></Icon>
      <Icon type="md-close" slot="close"></Icon>
    </i-switch>
    <br>
    <br>
    <i-switch size="large">
      <span slot="open">开启</span>
      <span slot="close">关闭</span>
    </i-switch>
    <i-switch size="large">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </i-switch>
    <i-switch v-model="switch1" @on-change="change" />
  </div>
</template>
<script>
  export default {
        data () {
            return {
                switch1: false
            }
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
