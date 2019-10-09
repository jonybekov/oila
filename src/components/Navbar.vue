<template>
  <div>
    <div class="top-nav-info">
      <b-container>
        <b-row class="top-nav-info-list" align-h="start">
          <span>Toshkent sh. Sh. Rashidov 16</span>
          <span>qabulxona@oilamarkazi.uz</span>
        </b-row>
      </b-container>
    </div>
    <b-navbar class="navbar" toggleable="lg" type="light" variant="light" fixed>
      <b-container>
        <b-navbar-brand href="#">
          <router-link to="/">
            <img src="../assets/logo.svg" alt />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="nav-list">
            <b-nav-item href="#">
              <router-link to="/news">Центр</router-link>
            </b-nav-item>

            <b-nav-item href="#">Нормативные документы</b-nav-item>
            <b-nav-item href="#">Деятельность</b-nav-item>
            <b-nav-item href="#">Пресс-служба</b-nav-item>
            <b-nav-item href="#">Библиотека</b-nav-item>
            <b-nav-item href="#">
              <router-link to="/contacts">Контакты</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.top-nav-info {
  padding: 9px;
  font-size: 10px;
  line-height: 12px;
  color: #868686;
  border-bottom: 1px solid #d9d9d9;
  text-align: left;
}

.top-nav-info-list span {
  margin-right: 24px;
}

.nav-item {
  font-size: 14px !important;
  line-height: 19px;
  text-align: center !important;
  color: #444444 !important;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
  }
}
</style>