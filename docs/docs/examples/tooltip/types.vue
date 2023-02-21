<template>
  <j-tooltip content="Top center" placement="top">
    <j-button>Dark</j-button>
  </j-tooltip>
  <j-tooltip content="Bottom center" placement="bottom" effect="light">
    <j-button>Light</j-button>
  </j-tooltip>

  <j-tooltip content="Bottom center" effect="customized">
    <j-button>Customized theme</j-button>
  </j-tooltip>
</template>

<style scoped>
  .j-tooltip .is-customized {
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159 229 151), rgb(204 229 129));
  }

  .j-tooltip .is-customized .j-tooltip__arrow::before {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
  }
</style>
