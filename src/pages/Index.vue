<template>
  <Layout>
    <Logo />
    <section class="description">
      <p>
        Hi all!, we here to automate something maybe on your daily life.
        We are OpenSource Company that aim to make easy all your daily life activity
      </p>
    </section>
    <section>
      <g-link to="/about">read more...</g-link>
    </section>
  </Layout>
</template>

<script>
import Logo from '../components/Logo'

export default {
  metaInfo: {
    title: 'Welcome'
  },
  components: {
    Logo
  }
}
</script>

<style>
.description {
  text-align: center;
  padding: 0 10px;
}
</style>
