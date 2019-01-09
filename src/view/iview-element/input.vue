<template>
  <div>
    <Input v-model="value" placeholder="请输入" icon="ios-clock-outline" style="width: 300px"/>
    <Input v-model="value7" type="textarea" :autosize="true" placeholder="这个是能自适应高度的文本域"/>
    <Input search placeholder="Enter something..."/>
    <Input search enter-button placeholder="Enter something..."/>
    <Input search enter-button="Search" placeholder="Enter something..."/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      value7: ''
    }
  },
  watch: {
    value () {
      console.log(this.value);
    }
  },
}
</script>
