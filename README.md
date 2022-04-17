# Vue Modal

This is a modal component for Vue.js.

## Usage

```
<template>
  <div>

    <h1>Modal</h1>

    <button
      type="button" @click="open = !open">
      Open modal
    </button>

    <Modal
      @close="open = false"
      :open="open">
      <h2>Modal</h2>
      <p>
        This is the modal content.
      </p>
    </Modal>

  </div>
</template>

<script>
import Modal from '@moreillon/vue_modal'

export default {
  name: 'app',
  components: {
    Modal
  },
  data(){
    return{
      open: false
    }
  }
}
</script>


```
