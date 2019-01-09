<template>
  <div>
    <div>
      <RadioGroup v-model="phone">
        <Radio label="apple">
          <Icon type="logo-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="logo-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="logo-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup>
    </div>
    <div>
      <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
      </RadioGroup>
    </div>
    <div>
      <RadioGroup v-model="button2" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
    </div>
    <div>
      <RadioGroup v-model="button1" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
    </div>
    <div>
      <RadioGroup v-model="button3" type="button">
        <Radio label="北京" disabled></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳" disabled></Radio>
        <Radio label="杭州" disabled></Radio>
      </RadioGroup>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone: 'apple',
      animal: '爪哇犀牛',
      button1: '北京',
      button2: '北京',
      button3: '北京'
    }
  }
}
</script>
