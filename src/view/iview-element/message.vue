<template>
  <div>
    <Button @click="success">Display success prompt</Button>
    <Button @click="warning">Display warning prompt</Button>
    <Button @click="error">Display error prompt</Button>
  </div>
</template>
<script>
export default {
  methods: {
    success () {
      this.$Message.success('这是一条成功提示!!!');
    },
    warning () {
      this.$Message.warning('这是一条警告提示!!!');
    },
    error () {
      this.$Message.error('这是一条错误提示!!!');
    }
  }
}
</script>
