<template>
  <div>
    <div>
      <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
          <Icon type="logo-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
          <Icon type="logo-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
          <Icon type="logo-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
          <Icon type="logo-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
      </CheckboxGroup>
    </div>
    <div>
      <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      social: ['facebook', 'github'],
      fruit: ['苹果']
    }
  }
}
</script>
