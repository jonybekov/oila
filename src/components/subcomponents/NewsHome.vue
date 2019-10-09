<template>
  <div class="home-news">
    <h1 class="home-reviews-title">Наш блог</h1>
    <b-container>
      <b-row>
        <div class="news-item" v-for="(newsItem, i) in news" :key="i">
          <div v-if="i < 6">
            <div class="news-item-img">
              <img :src="newsItem.img" alt />
            </div>
            <div class="news-item-text">
              <h1 class="news-title">{{newsItem.title}}</h1>
              <div class="news-date">{{newsItem.published}}</div>
              <div class="news-desc">{{newsItem.desc}}</div>
            </div>
          </div>
        </div>
      </b-row>
      <div class="more-btn">
        <b-button variant="primary">Все посты</b-button>
      </div>
    </b-container>
  </div>
</template>

<style >
.home-news{
  margin-bottom: 64px;
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

<script>
export default {
  data() {
    return {
      news: [
        {
          title: "What Can You Do to Promote Good Dental Health",
          img:
            "https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
          desc:
            "Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco",
          published: "09.07.2019"
        },
        {
          title: "What Can You Do to Promote Good Dental Health",
          img:
            "https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
          desc:
            "Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco",
          published: "09.07.2019"
        },
        {
          title: "What Can You Do to Promote Good Dental Health",
          img:
            "https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
          desc:
            "Id in laborum magna adipisicing velit reprehenderit. Magna amet id non laboris sunt ullamco",
          published: "09.07.2019"
        },
        {
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