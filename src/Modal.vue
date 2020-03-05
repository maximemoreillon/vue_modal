<template>
  <div
  class="modal"
  v-bind:class="{open: open}"
  v-on:click.self="$emit('close')">

    <div class="modal_window_outer">
      <div class="modal_window_inner">

        <!-- CLose button -->
        <close-icon
          v-if="close_button"
          class="modal_close_button"
          v-on:click.self="$emit('close')"/>

        <!-- The content of the modal goes here -->
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close.vue';


export default {
  name: 'Modal',
  components: {
    CloseIcon
  },
  props: {
    open: Boolean,
    close_button: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal{
  /* poisitioning and sizing of background*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;

  /* positioning of content */
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #444444; /* fallback for ie */
  background-color: #444444aa;

  /* values which change when opening the modal */
  /* here are the defaults */
  visibility: hidden;
  opacity: 0;

  transition:
    visibility 0.5s,
    opacity 0.5s;
}

.modal.open{
  visibility: visible;
  opacity: 1;

  /* Delay when OPENING */
  transition-delay: 0s;
}

.modal{
  /* delay when CLOSING */
  transition-delay: 0.25s;
}

.modal_window_outer{
  /* for elements positioned absolutely inside */
  position: relative;

  opacity: 0;
  transform: scaleX(0);
  transition:
    opacity 0.25s,
    transform 0.25s;

  /* delay when CLOSING */
  transition-delay: 0.25s;

  /* ADDITIONAL VISUALS */
  background-color: white;
  margin: 50px;
}


.modal_window_inner{
  opacity: 0;
  transition: opacity 0.25s;
  /* Delay when CLOSING */
  transition-delay: 0s;

  /* ADDITIONAL VISUALS */
  padding: 25px;
}

.modal.open .modal_window_outer{
  opacity: 1;
  transform: scaleX(1);

  /* Delay when OPENING */
  transition-delay: 0s;
}


.modal.open .modal_window_inner{
  opacity: 1;
  /* Delay when OPENING */
  transition-delay: 0.25s;
}

/* close button */
.modal_close_button{
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  font-size: 150%;
  font-weight: bold;
  cursor: pointer;
  color: #00000066;
}

.modal_close_button:hover{
  color: #000000;
}
</style>
