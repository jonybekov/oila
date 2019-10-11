<template>
  <div class="news">
    <div class="top-container">
      <div class="container-bg"></div>
      <div class="container-img">
        <div class="top-article-header">
          <b-container>
            <h1
              class="article-title"
            >Почему традиционная модель семьи больше не делает людей счастливыми</h1>
            <div class="article-date">
              <span class="published-icon">
                <img src="../../assets/date.svg" alt />
              </span>
              <span class="published-date">June 8, 2018 9:28 AM</span>
            </div>
          </b-container>
        </div>
      </div>
    </div>
    <div class="post">
      <b-container>
        <b-row>
          <b-col cols="12" lg="8">
            <article>
              <div class="article-content">
                <div class="article-img">
                  <img src="../../assets/post-3.png" alt />
                </div>
                <p>
                  Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.
                  Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam bibendum lacus quis nulla dignissim faucibus. Sed mauris enim, bibendum at purus aliquet, maximus molestie tortor. Sed faucibus et tellus eu sollicitudin. Sed fringilla malesuada luctus.
                </p>
              </div>
              <div class="article-footer">
                <p class="article-tags">
                  Теги:
                  <a href="#" target="_blank" rel="noopener noreferrer">семья</a>,
                  <a href="#" target="_blank" rel="noopener noreferrer">советы</a>
                </p>
                <div class="article-share">
                  <p>Поделиться:</p>
                  <div class="share-buttons">
                    <a href="#">
                      <div class="share-btn">
                        <img src="../../assets/fb-grey.svg" alt />
                      </div>
                    </a>
                    <a href="#">
                      <div class="share-btn">
                        <img src="../../assets/tg-grey.svg" alt />
                      </div>
                    </a>
                    <a href="#">
                      <div class="share-btn">
                        <img src="../../assets/insta-grey.svg" alt />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </b-col>
          <b-col cols="12" lg="4">
            <aside>
              <div class="sidebar-content">
                <div class="sidebar-title">
                  <h1>Новости по теме</h1>
                </div>
                <div class="sidebar-news-list">
                  <div class="sidebar-news-item">
                    <div class="news-item-text">
                      <router-link to>
                        <h1 class="news-title">What Can You Do to Promote Good Dental Health</h1>
                      </router-link>
                      <div class="news-date">09.07.2019</div>
                      <div
                        class="news-desc"
                      >Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco</div>
                    </div>
                  </div>
                  <div class="sidebar-news-item">
                    <div class="news-item-text">
                      <router-link to>
                        <h1 class="news-title">What Can You Do to Promote Good Dental Health</h1>
                      </router-link>
                      <div class="news-date">09.07.2019</div>
                      <div
                        class="news-desc"
                      >Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco</div>
                    </div>
                  </div>
                  <div class="sidebar-news-item">
                    <div class="news-item-text">
                      <router-link to>
                        <h1 class="news-title">What Can You Do to Promote Good Dental Health</h1>
                      </router-link>
                      <div class="news-date">09.07.2019</div>
                      <div
                        class="news-desc"
                      >Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style>
.news .container-img {
  align-items: flex-end;
}

.post {
  padding-top: 32px;
  padding-bottom: 64px;
}

.top-article-header {
  color: #fff;
  z-index: 100;
  padding-bottom: 32px;
}

.article-title {
  font-size: 36px;
  line-height: 43px;
}

.article-date {
  color: #dadada;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.published-icon {
  margin-right: 14px;
}

aside {
  width: 100%;
  background-color: #f5f5f5;
}

.article-img {
  margin-bottom: 24px;
}

.article-img img {
  width: 100%;
}

.sidebar-news-list {
  padding: 32px;
}

.sidebar-news-item:not(:first-child) {
  padding-top: 24px;
}

.sidebar-news-item:not(:last-child) {
  padding-bottom: 24px;
  border-bottom: 1px solid #ccc;
}

.sidebar-title {
  background-color: #0098da;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-title h1 {
  color: #fff;
  font-size: 22px;
  color: #ffffff;
}

.article-footer {
  padding-top: 32px;
  border-top: 1px solid #c4c4c4;
}
</style>

<script>
export default {};
</script>