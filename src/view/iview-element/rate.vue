<template>
  <div>
    <Row>
      <Col span="12">
        <Rate show-text v-model="valueText"/>
      </Col>
      <Col span="12">
        <Rate show-text allow-half v-model="valueCustomText">
          <span style="color: #f5a623">{{ valueCustomText }}</span>
        </Rate>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      valueText: 3,
      valueCustomText: 3.8
    }
  }
}
</script>
