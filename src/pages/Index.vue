<template>
  <Layout>
    <Logo />
    <section class="description">
      <p>
        Hi all!, we here to automate something maybe on your daily life.
        We are Open Source group that aim to make easy all your daily life activity
      </p>
      <a class="social-link" href="https://github.com/Research-in-Automation">Github</a>
    </section>
    <section>
      <g-link to="/about">About Us</g-link>
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

.social-link {
  margin: .5rem 0;
}
</style>
