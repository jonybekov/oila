<template>
  <div class="contacts">
    <div class="top-container">
      <div class="container-bg"></div>
      <div class="container-img">
        <h1 class="top-headline">Контакты</h1>
      </div>
    </div>
    <b-container class="contacts-container">
      <b-row>
        <b-col cols="12" sm="6">
          <div class="contacts-content">
            <h1 class="contacts-title">Контакты</h1>
            <p
              class="contacts-desc"
            >Lorem ipsum dolor sit amet, consectetuer adipisc ing elit, sed diam nonummy nibh.</p>
            <div class="contacts-info">
              <div class="info-item">
                <div class="info-icon">
                  <img src="../../assets/phone-blue.svg" alt />
                </div>
                <div class="info-item-txt">
                  <span>Телефон:</span>
                  <p class="phone-number">+998 71 239 41 57</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <img src="../../assets/location-blue.svg" alt />
                </div>
                <div class="info-item-txt">
                  <span>Адрес:</span>
                  <p class="phone-number">г. Ташкент, ул. Ш. Рашидова, 16</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <img src="../../assets/email-blue.svg" alt />
                </div>
                <div class="info-item-txt">
                  <span>Эл. почта:</span>
                  <p class="phone-number">qabulxona@oilamarkazi.uz</p>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="6">
          <img class="maps-img" src="../../assets/maps.png" alt />
        </b-col>
      </b-row>
    </b-container>
    <div class="feedback-form">
      <b-container class="form-inner">
        <b-row>
          <div class="form-content">
            <div class="feedback-header">
              <h1>Обратная связь</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipisc ing elit, sed diam nonummy nibh.</p>
            </div>
            <form action>
              <b-row>
                <b-col>
                  <b-form-input placeholder="Имя"></b-form-input>
                </b-col>
                <b-col>
                  <b-form-input placeholder="Электронная почта"></b-form-input>
                </b-col>
              </b-row>
              <b-form-textarea placeholder="Enter something..." rows="3"></b-form-textarea>
              <div class="approve">
                <b-form-checkbox name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                  Я даю согласие на обработку моих
                  <a href="#">персональных данных.</a>
                </b-form-checkbox>
              </div>
              <b-button variant="primary">Отправить</b-button>
            </form>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style>
.info-item {
  display: flex;
  margin-bottom: 24px;
}

.contacts-title {
  font-size: 36px;
  line-height: 43px;
  color: #0098da;
}

.contacts-container {
  padding: 32px 0;
}

.info-icon {
  margin-right: 24px;
}

.info-item-txt span {
  font-size: 16px;
  line-height: 19px;
  color: #ababab;
}

.info-item-txt .phone-number {
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  color: #282e48;
}

.maps-img {
  width: 100%;
}

.feedback-form {
  background-color: #e6f2fc;
  padding: 64px 0;
}

.feedback-header {
  text-align: center;
}

.feedback-header h1 {
  font-size: 36px;
  line-height: 43px;
  font-weight: bold;
  text-align: center;
  color: #282e48;
}

.feedback-form input,
textarea,
.approve {
  margin-bottom: 24px;
}

.form-inner .row {
  justify-content: center;
}
</style>

<script>
export default {};
</script>