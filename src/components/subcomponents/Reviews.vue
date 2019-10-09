<template>
  <div class="home-reviews">
    <b-container>
      <h1 class="home-reviews-title">О нас говорят</h1>
      <carousel :autoplay="true" :nav="false">
        <div class="review-item" v-for="(review, i) in reviews" :key="i">
          <div class="review-item-inner">
            <div class="review-item-text">{{review.text}}</div>
          </div>
          <div class="review-author">
            <div class="review-item-avatar">
              <img :src="review.img" alt />
            </div>
            <p class="review-author-name">{{review.author}}</p>
          </div>
        </div>
      </carousel>
    </b-container>
  </div>
</template>

<style>
.home-reviews {
  padding: 64px 0;
}

.home-reviews-title {
  font-size: 28px;
  line-height: 33px;
  color: #0098da;
  text-align: center;
  margin-bottom: 32px;
}

.review-item {
  margin-bottom: 100px;
  position: relative;
  margin-right: 20px;
}

.review-item-inner {
  padding: 20px;
  background: linear-gradient(241.56deg, #8db8f0 0%, #0098da 96.83%);
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.03em;
  /* overflow: hidden; */
  /* white-space: nowrap;    */
  /* text-overflow: ellipsis; */
  max-height: 256px;
  border-radius: 4px;
  position: relative;
  z-index: 1;
}

.review-item-inner:after {
  content: " ";
  width: 20px;
  height: 20px;
  background-color: #0098da;
  position: absolute;
  z-index: -1;
  left: 15px;
  bottom: -5px;
  transform: rotate(45deg);
  /* transform: perspective(0); */
}

.review-author {
  position: absolute;
  bottom: -80px;
  left: 0px;
  display: flex;
  align-items: center;
}

.review-author-name {
  margin-bottom: 0;
  margin-left: 21px;
  font-size: 22px;
  line-height: 26px;
  color: #282e48;
}

.review-item-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.review-item-avatar img {
  width: 400px;
}
</style>

<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      reviews: [
        {
          text:
            "Tempor  irure reprehenderit in ipsum. Mollit amet anim quis anim. Culpa amet labore dolore elit non amet aliquip nulla aute officia. Dolore ex minim sunt veniam. Minim Lorem ullamco officia aliquip veniam ullamco voluptate est voluptate occaecat exercitation reprehenderit eu. Ullamco ipsum esse velit aliquip.",
          author: "Regina Watson",
          img:
            "https://www.midlandsderm.com/wp-content/uploads/2019/04/Rachel-R.-Person-760x760.jpg"
        },
        {
          text:
            "Culpa amet labore dolore elit non amet aliquip nulla aute officia. Dolore ex minim sunt veniam. Minim Lorem ullamco officia aliquip veniam ullamco voluptate est voluptate occaecat exercitation reprehenderit eu. Ullamco ipsum esse velit aliquip.",
          author: "Regina Watson",
          img:
            "https://timedotcom.files.wordpress.com/2018/12/square-meghan-markle-person-of-the-year-2018.jpg?quality=85"
        },

        {
          text:
            "Tempor irure irure reprehenderit in ipsum. Mollit amet anim quis anim. Culpa amet labore dolore elit non amet aliquip nulla aute officia. Dolore ex minim sunt veniam. Minim Lorem ullamco officia aliquip veniam ullamco voluptate est voluptate occaecat exercitation reprehenderit eu. Ullamco ipsum esse velit aliquip.",
          author: "Regina Watson",
          img:
            "https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg"
        },

        {
          text:
            "Tempor irure irure reprehenderit in ipsum. Mollit amet anim quis anim. Culpa amet labore dolore elit non amet aliquip nulla aute officia. Dolore ex minim sunt veniam. Minim Lorem ullamco officia aliquip veniam ullamco voluptate est voluptate occaecat exercitation reprehenderit eu. Ullamco ipsum esse velit aliquip.",
          author: "Regina Watson",
          img: "https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg"
        }
      ]
    };
  },
  components: {
    carousel
  }
};
</script>