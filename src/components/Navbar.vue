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
            <b-nav-item-dropdown text="Центр">
              <b-dropdown-item to="/article">О центре</b-dropdown-item>
              <b-dropdown-item>Устав</b-dropdown-item>
              <b-dropdown-item>Руководство</b-dropdown-item>
              <b-dropdown-item>Структура центра</b-dropdown-item>
              <b-dropdown-item>Центральный аппарат</b-dropdown-item>
              <b-dropdown-item>Территориальные управления</b-dropdown-item>
              <b-dropdown-item>Научно-методологический совет</b-dropdown-item>
              <b-dropdown-item>Координационный совет</b-dropdown-item>
              <b-dropdown-item>Вакансии</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Нормативные документы">
              <b-dropdown-item>Конституция</b-dropdown-item>
              <b-dropdown-item>Законы</b-dropdown-item>
              <b-dropdown-item>Указы и постановления Президента</b-dropdown-item>
              <b-dropdown-item>Постановления правительства</b-dropdown-item>
              <b-dropdown-item>Конвенция и резолюция</b-dropdown-item>
              <b-dropdown-item>Совместые решения и меморандумы</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Деятельность">
              <b-dropdown-item>Научные иследования</b-dropdown-item>
              <b-dropdown-item>Мониторинг</b-dropdown-item>
              <b-dropdown-item>Учебные курсы</b-dropdown-item>
              <b-dropdown-item>Инновационная школа</b-dropdown-item>
              <b-dropdown-item>Курсы ИКТ</b-dropdown-item>
              <b-dropdown-item>Ибратли оила</b-dropdown-item>
              <b-dropdown-item>Виртуальная приемная</b-dropdown-item>
              <b-dropdown-item>Обращения граждан</b-dropdown-item>
              <b-dropdown-item>Вопрос-Ответ</b-dropdown-item>
              <b-dropdown-item>Опросы</b-dropdown-item>
              <b-dropdown-item>Конкурсы</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Пресс-служба">
              <b-dropdown-item to="/news">Новости</b-dropdown-item>
              <b-dropdown-item>Интервью с ученым</b-dropdown-item>
              <b-dropdown-item>План и отчеты</b-dropdown-item>
              <b-dropdown-item>Доклады</b-dropdown-item>
              <b-dropdown-item>Пресс-релизы</b-dropdown-item>
              <b-dropdown-item>Фотогаллерея</b-dropdown-item>
              <b-dropdown-item>Видеогаллерея</b-dropdown-item>
              <b-dropdown-item>Инфографика</b-dropdown-item>
              <b-dropdown-item>СМИ о нас</b-dropdown-item>
              <b-dropdown-header id="dropdown-header-label">Объявления</b-dropdown-header>
              <b-dropdown-item>Научные исследования</b-dropdown-item>
              <b-dropdown-item>Пресс-анонсы</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="Библиотека" right>
              <b-dropdown-item to="/news">Научный журнал "Семья, гендер и общество в ЦА</b-dropdown-item>
              <b-dropdown-item>Наследие</b-dropdown-item>
              <b-dropdown-item>Издания Центра</b-dropdown-item>
              <b-dropdown-item>Сборники</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item to="/contacts">Контакты</b-nav-item>
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