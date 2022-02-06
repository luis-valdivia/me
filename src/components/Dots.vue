<template>
  <div class="container" id="dotsDiv">
    <div class="dots-grid">
      <div
        class="cell"
        v-for="n in dotsQuantity"
        :style="{ background: BG(n) }"
        :key="n"
        @mouseover="hover(n)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dotsQuantity: 90 * 90,
      row: 1,
      col: 4,
    };
  },
  methods: {
    // change the color of the given dot
    BG(n) {
      if (n == this.dotNumber) {
        return (
          "rgba(" +
          Math.ceil(Math.random() * 156 + 100) + // 207
          ", " +
          Math.ceil(Math.random() * 156 + 100) + // 35
          ", " +
          Math.ceil(Math.random() * 156 + 100) + // 58
          ", .4)"
        );
      }
      return null;
    },

    // change hovered dot color
    hover(n) {
      this.row = Math.floor((n - 1) / 90 + 1);
      this.col = ((n - 1) % 90) + 1;
    },
  },
  computed: {
    // get the dot number from 1 to 576
    dotNumber() {
      return 90 * Number(this.row) + Number(this.col) - 90;
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: calc(100% - 71px - 109px);
}
.cell {
  /* background: var(--primary); */
  width: 16px;
  height: 16px;
  margin: 0 auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
.dots-grid {
  display: grid;
  grid-template-columns: repeat(90, 1fr);
}
</style>