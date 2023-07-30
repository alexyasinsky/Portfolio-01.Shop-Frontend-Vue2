<template>
    <nav class="breadcrumb padding-site">
      <h1><slot name='title'></slot></h1>
      <p><slot></slot> / <slot name='parent'></slot> <span><slot name='title'></slot></span></p>
    </nav>
</template>

<script>
export default {
  name: 'breadcrumbs',
};
</script>


<style lang="scss">

@import '../layout/styles/_variables.scss';

.breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: #f8f3f4;

  h1 {
    font-size: 24px;
    font-weight: 900;
    color: #f16d7f;
    text-transform: uppercase;
  }

  p a {
    font-size: 14px;
    font-weight: 300;
    color: #636363;
    text-transform: uppercase;
    &:hover {
      color: $colorOfElements;
    }

  }
  span {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    color: #f16d7f;
  }
  
}
</style>
