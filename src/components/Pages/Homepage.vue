<template>
  <div>
    <div class="home-banner">
      <!-- banner -->
      <div class="home-banner-image">
        <b-container>
          <div class="banner-content">
            <div>
              <p>Добро пожаловать в Центр “Oila”</p>
              <h3>The head of Center “Oila” had met the head of the branch of DVV</h3>
              <p>Our ever growing patient base rates our dental studio very high.</p>
              <b-button variant="light" href="#">Читать далее</b-button>
            </div>
          </div>
        </b-container>
      </div>
      <div class="info-block">
        <div class="info-block-inner">
          <div class="info-block-icon">
            <img src="../../assets/phone.svg" alt />
          </div>
        </div>
        <div class="info-block-inner">
          <div class="phone-details">
            <span>Телефон горячей линии</span>
            <p>+998 71 239 - 41 - 57</p>
          </div>
        </div>
      </div>
    </div>

    <!-- about -->
    <div class="home-about">
      <b-row>
        <b-col class="about-bg">
          <div class="about-block-text">
            <h3 class="about-text-title">
              Добро пожаловать
              в Центр “Оила”
            </h3>
            <p
              class="about-text-desc"
            >Id exercitation exercitation do adipisicing minim. Irure enim culpa laboris qui in anim occaecat cupidatat incididunt do. Ullamco sint qui do laboris aliqua tempor</p>
            <b-button variant="primary">О центре</b-button>
          </div>
        </b-col>
        <b-col class="about-items">
          <b-row>
            <b-col class="about-item">
              <div>
                <div class="about-item-icon">
                  <img src="../../assets/about.png" alt />
                </div>
                <h1 class="about-item-title">Планирование семьи</h1>
                <p class="about-item-desc">
                  Консультация по планированию
                  семьи.
                </p>
              </div>
            </b-col>
            <b-col class="about-item">
              <div>
                <div class="about-item-icon">
                  <img src="../../assets/about.png" alt />
                </div>
                <h1 class="about-item-title">Планирование семьи</h1>
                <p class="about-item-desc">
                  Консультация по планированию
                  семьи.
                </p>
              </div>
            </b-col>
            <b-col class="about-item">
              <div>
                <div class="about-item-icon">
                  <img src="../../assets/about.png" alt />
                </div>
                <h1 class="about-item-title">Планирование семьи</h1>
                <p class="about-item-desc">
                  Консультация по планированию
                  семьи.
                </p>
              </div>
            </b-col>
            <b-col class="about-item">
              <div>
                <div class="about-item-icon">
                  <img src="../../assets/about.png" alt />
                </div>
                <h1 class="about-item-title">Планирование семьи</h1>
                <p class="about-item-desc">
                  Консультация по планированию
                  семьи.
                </p>
              </div>
            </b-col>
            <b-col class="about-item">
              <div>
                <div class="about-item-icon">
                  <img src="../../assets/about.png" alt />
                </div>
                <h1 class="about-item-title">Планирование семьи</h1>
                <p class="about-item-desc">
                  Консультация по планированию
                  семьи.
                </p>
              </div>
            </b-col>
            <b-col class="about-item">
              <div>
                <div class="about-item-icon">
                  <img src="../../assets/about.png" alt />
                </div>
                <h1 class="about-item-title">Планирование семьи</h1>
                <p class="about-item-desc">
                  Консультация по планированию
                  семьи.
                </p>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <!-- video -->
    <div class="home-video">
      <b-container>
        <b-row>
          <b-col>
            <div class="home-video-info">
              <div>
                <h1 class="home-video-title">
                  Залог семейного счастья
                  в доброте, откровенности,
                  отзывчивости...
                </h1>
                <p class="home-video-desc">
                  Id exercitation exercitation do adipisicing minim. Irure enim culpa laboris qui in anim occaecat cupidatat incididunt do. Ullamco sint qui do laboris aliqua tempor non. Nostrud deserunt qui eu dolor.
                  Velit do esse reprehenderit veniam quis anim ea duis eiusmod enim.
                </p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="video">
              <div class="video-container">
                <div class="video-icon">
                  <img src="../../assets/play-btn.svg" alt />
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <Reviews></Reviews>
    <NewsHome></NewsHome>
  </div>
</template>

<style >
.home-banner {
  position: relative;
}

.home-banner-image {
  text-align: left;
  color: #fff;
  width: 100%;
  height: 600px;
  background-image: url("../../assets/bg.png");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: start;
}

.banner-content {
  width: 500px;
}

.info-block {
  padding: 30px 48px;
  background-color: #8db8f0;
  color: #fff;
  width: 460px;
  display: flex;
  position: absolute;
  z-index: 1;
  bottom: -50px;
  left: 0;
}

.info-block-icon {
  background-color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}

.info-block-inner {
  display: flex;
  align-items: center;
}

.phone-details p {
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
}

.phone-details span {
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}

/* about */
.home-about > .row {
  margin-right: 0;
  margin-left: 0;
}

.home-about .col {
  /* padding-right: 0; */
  /* padding-left: 0; */
}
.about-block-text {
  padding-top: 140px;
  padding-bottom: 83px;
  padding-right: 134px;
  text-align: right;
}

.about-bg {
  background-image: url("../../assets/about-bg.png");
  background-size: cover;
}

.about-item {
  text-align: center;
  padding: 38px 42px;
  width: calc(10 / 3);
  justify-content: center;
}

.about-item:nth-child(2n + 1) {
  background-color: #f2f7fc;
}

.about-item:nth-child(2n) {
  background-color: #e6f2fc;
}

.about-item-icon {
  padding: 24px;
  background-color: #fff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 16px;
}

.about-item-title {
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  text-align: center;
  color: #282e48;
}

.about-item-desc {
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #282e48;
}

.home-video {
  background-color: #f9f9f9;
}

/* video-container */
.home-video {
  padding: 32px;
}

.home-video-info {
  flex-direction: column;
  display: flex;
  align-items: center;
}

.home-video-title {
  font-size: 28px;
  line-height: 33px;
  color: #0098da;
}

.home-video-desc {
  font-size: 16px;
  line-height: 19px;
  color: #656565;
}

.video {
  background-image: url("../../assets/video-bg.png");
}

.video-container {
  height: 326px;
  width: 579px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-icon img {
  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
}

.video-icon img:hover {
  transform: scale(1.1);
  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

@media screen and (max-width: 980px) {
  .home-about > .row {
    flex-direction: column;
    flex-basis: 0;
  }
}

@media screen and (max-width: 620px) {
  .about-items .row {
    flex-direction: column !important;
  }
}
</style>

<script>
import Reviews from "../subcomponents/Reviews";
import NewsHome from "../subcomponents/NewsHome";
import Footer from "../Footer";

export default {
  components: {
    Reviews,
    NewsHome,
    Footer
  }
};
</script>