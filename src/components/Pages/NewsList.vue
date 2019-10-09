<template>
  <div class="news-list">
    <div class="top-container">
      <div class="container-bg"></div>
      <div class="container-img">
        <h1 class="top-headline">Все новости</h1>
      </div>
    </div>
    <div class="news-list-container">
      <b-container>
        <b-row>
          <div class="news-item" v-for="(newsItem, i) in news" :key="i">
            <div v-if="i < 6">
              <div class="news-item-img">
                <img :src="newsItem.img" alt />
              </div>
              <div class="news-item-text">
                <router-link :to="'/news/' + newsItem.id">
                  <h1 class="news-title">{{newsItem.title}}</h1>
                </router-link>
                <div class="news-date">{{newsItem.published}}</div>
                <div class="news-desc">{{newsItem.desc}}</div>
              </div>
            </div>
          </div>
        </b-row>
        <div class="more-btn">
          <div>
            <b-pagination-nav
              :link-gen="linkGen"
              :number-of-pages="10"
              next-text="Следующий"
              prev-text="Предыдущий"
              use-router
            ></b-pagination-nav>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>


<script>
import NewsHome from "../subcomponents/NewsHome";

export default {
  components: {
    NewsHome
  },

  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    }
  },

  data() {
    return {
      news: [
        {
          id: 1,
          title: "What Can You Do to Promote Good Dental Health",
          img:
            "https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
          desc:
            "Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco",
          published: "09.07.2019"
        },
        {
          id: 2,
          title: "What Can You Do to Promote Good Dental Health",
          img:
            "https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
          desc:
            "Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco",
          published: "09.07.2019"
        },
        {
          id: 3,
          title: "What Can You Do to Promote Good Dental Health",
          img:
            "https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
          desc:
            "Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco",
          published: "09.07.2019"
        },
        {
          id: 4,
          title: "What Can You Do to Promote Good Dental Health",
          img:
            "https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
          desc:
            "Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco",
          published: "09.07.2019"
        }
      ]
    };
  }
};
</script>

<style>
.top-container {
  width: 100%;
  height: 350px;
  position: relative;
}

.container-bg {
  background: linear-gradient(
    360deg,
    #0098da -9.75%,
    rgba(0, 152, 218, 0) 100%
  );
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
}

.container-img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/top-bg.png");
  background-size: cover;
  height: 100%;
  background-position: center;
  z-index: -1;
}

.top-headline {
  font-size: 58px;
  line-height: 69px;
  text-align: center;
  color: #ffffff;
  z-index: 100;
}

.news-list-container {
  padding: 64px 0;
}

.news-item-img {
  border-radius: 4px;
  width: 400px;
  margin-right: 16px;
  margin-bottom: 24px;
}

.news-item {
  width: 50%;
  padding-right: 20px;
  padding-bottom: 32px;
}

.news-item > div {
  display: flex;
}

.news-item-img img {
  width: 204px;
  border-radius: 4px;
}

.news-title {
  font-size: 22px;
  line-height: 26px;
  color: #282e48;
}

.news-date {
  font-size: 10px;
  line-height: 12px;
  color: #c4c4c4;
  margin-bottom: 8px;
}

.news-desc {
  font-size: 16px;
  line-height: 19px;
  color: #282e48;
}

.more-btn {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 990px) {
  .news-item > div {
    justify-content: center;
  }

  .news-item {
    width: 100%;
    /* text-align: center; */
  }

  .news-item-img img {
    width: 100%;
  }
}
</style>
