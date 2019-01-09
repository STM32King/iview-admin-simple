<template>
  <div>
    <Button @click="modal2 = true">Custom header and footer</Button>
    <Modal v-model="modal2" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>Delete confirmation</span>
      </p>
      <div style="text-align:center">
        <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
        <p>Will you delete it?</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
      </div>
    </Modal>
    <Button @click="modal3 = true">No title bar</Button>
    <Modal v-model="modal3">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
    <Button @click="modal4 = true">Internationalization</Button>
    <Modal v-model="modal4" title="Modal Title" ok-text="OK" cancel-text="Cancel">
      <p>Something...</p>
      <p>Something...</p>
      <p>Something...</p>
    </Modal>
    <Button @click="modal5 = true">Set the width</Button>
    <Modal v-model="modal5" title="Custom width" width="300">
      <p>Customize width, unit px, default 520px.</p>
      <p>The width of the dialog box is responsive, and the width becomes
        <code>auto</code> when the screen size is less than 768px.
      </p>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modal2: false,
      modal_loading: false,
      modal3: false,
      modal4: false,
      modal5: false
    }
  },
  methods: {
    del () {
      this.modal_loading = true;
      setTimeout(() => {
        this.modal_loading = false;
        this.modal2 = false;
        this.$Message.success('Successfully delete');
      }, 2000);
    }
  }
}
</script>
