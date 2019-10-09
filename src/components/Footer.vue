<template>
  <div class="footer">
    <b-container>
      <div class="footer-top">
        <div class="footer-logo">
          <img src="../assets/footer-logo.svg" alt />
        </div>
        <div class="footer-social">
          <div class="social-list">
            <div class="social-item">
              <img src="../assets/fb.svg" alt />
            </div>
            <div class="social-item">
              <img src="../assets/tg.svg" alt />
            </div>
            <div class="social-item">
              <img src="../assets/insta.svg" alt />
            </div>
          </div>
        </div>
      </div>
      <b-row class="footer-main">
        <b-col class="footer-links">
          <h1 class="footer-col-title">О Центре Oila</h1>
          <b-row>
            <b-row class="links">
              <b-col>
                <ul class="links-list">
                  <li>О центре</li>
                  <li>Устав</li>
                  <li>Руководство</li>
                  <li>Структура центра</li>
                  <li>Центральный аппарат</li>
                  <li>Совет экспертов</li>
                </ul>
              </b-col>
              <b-col class="b-col">
                <ul class="links-list">
                  <li>Научно-методический совет</li>
                  <li>Кординационный совет</li>
                  <li>Территориальные управления</li>
                  <li>Вакансии</li>
                </ul>
              </b-col>
            </b-row>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
        </b-col>
        <b-col class="footer-links">
          <h1 class="footer-col-title">Полезные ссылки</h1>
          <b-row>
            <b-row class="links">
              <b-col>
                <ul class="links-list">
                  <li>О центре</li>
                  <li>Устав</li>
                  <li>Руководство</li>
                  <li>Структура центра</li>
                  <li>Центральный аппарат</li>
                  <li>Совет экспертов</li>
                </ul>
              </b-col>
              <b-col class="b-col">
                <ul class="links-list">
                  <li>Научно-методический совет</li>
                  <li>Кординационный совет</li>
                  <li>Территориальные управления</li>
                  <li>Вакансии</li>
                </ul>
              </b-col>
            </b-row>
          </b-row>
        </b-col>
        <b-col>
          <h1 class="footer-col-title">Последние публикации</h1>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer-bottom">
      <b-container>
        <p>
          Oila Center
          <span>© 2019. All rights reserved.</span>
        </p>
      </b-container>
    </div>
  </div>
</template>

<style >
.footer {
  background-color: #252a41;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  border-bottom: 1px solid #32374c;
}

.footer-col-title {
  font-size: 28px;
  /* line-height: 33px; */
  color: #ffffff;
  margin-bottom: 32px;
}

.footer-links {
  color: #b0b3c3;
  font-size: 14px;
}

.links-list {
  padding: 0;
  list-style: none;
}

.footer-links > .row {
  margin: 0;
}

.footer-main {
  padding-top: 64px;
  padding-bottom: 32px;
}

.links-list li {
  margin-bottom: 16px;
}

.footer-bottom {
  background-color: #1a1e2f;
  padding: 28px 0;
}

.footer-bottom p {
  margin: 0;
  color: #fff;
  font-size: 12px;
}

.footer-bottom span {
  color: #b0b3c3;
}

.social-list {
  display: flex;
}

.social-item {
  background-color: #3a3f54;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
}

.social-item:not(:last-child) {
  margin-right: 32px;
}
</style>

<script>
export default {};
</script>