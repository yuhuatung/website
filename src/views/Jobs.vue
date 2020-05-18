<template>
  <div class="jobs">
    <div class="header" :style="{height:`${screenHight}px`}">
      <img class="big-img" src="@/assets/img/recruitment.jpg" alt="recruitment" />
      <div class="subject">Work together for success!</div>
      <div class="footer">Welcome! Let's create your profile</div>
      <a-dropdown>
        <a-menu slot="overlay" @click="handleMenuClick">
          <template v-for="(item, index) in searchJob">
            <a-menu-item :key="index">{{ item }}</a-menu-item>
          </template>
        </a-menu>
        <a-button class="search">
          搜尋職缺
          <a-icon type="search" />
        </a-button>
      </a-dropdown>
      <div class="to-bottom" @click="toBottom(stepBottom)"></div>
    </div>
    <div class="welfare">
      <div class="title">{{welfare.title}}</div>
      <div class="content">{{welfare.content}}</div>
    </div>
    <div class="welfare-card">
      <div v-show="screenwidth<810" class="left-btn">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="jobs-left-bnt" />
      </div>
      <div v-show="screenwidth<810" class="right-btn">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="jobs-right-bnt" />
      </div>
      <div class="cards">
        <div class="outer">
          <span>{{welfare.category[0]}}</span>
          <div class="card">
            <div class="inner">
              <div v-for="(item, index) in welfare.basic" :key="index" class="content">
                <div class="subject">{{item.name}}</div>
                <div v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="outer">
          <span>{{welfare.category[1]}}</span>
          <div class="card">
            <div class="inner">
              <div v-for="(item, index) in welfare.bonus.slice(0, 4)" :key="index" class="content">
                <div class="subject">{{item.name}}</div>
                <div v-html="item.content"></div>
              </div>
              <div class="border"></div>
              <div
                v-for="(item, index) in welfare.bonus.slice(4, 10)"
                :key="'welfare'+index"
                class="content"
              >
                <div class="subject">{{item.name}}</div>
                <div v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="outer">
          <span>{{welfare.category[2]}}</span>
          <div class="card">
            <div class="inner">
              <div v-for="(item, index) in welfare.vacation" :key="index" class="content">
                <div class="subject">{{item.name}}</div>
                <div v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vacancy">
      <div class="title">{{jobs.title}}</div>
      <div class="content">{{jobs.content}}</div>
      <div class="subscribe" @click="toBottom(stepBottom)">
        立即訂閱
        <img src="@/assets/img/icons8-expand_arrow-1_2x.png" alt="subscribe-btn" />
      </div>
    </div>
    <div class="vacancy-card">
      <div v-for="(item, index) in jobs.vacancy" :key="index">
        <JobCard v-bind="item" :selected="selectedJOb" ref="vacancy" />
      </div>
    </div>
    <div class="apply-form" v-show="true">
      <div class="picture">
        <div class="photo">
          <img class="icon-photo" src="@/assets/img/folder_filled_2x.png" />
        </div>
        <div class="hint">請選擇進3個月的求職照片。照片大小限3MB</div>
        <div class="choose-photo">選擇照片</div>
      </div>
      <div class="form">
        <div class="row1">
          <div>
            <div class="form-name">姓名</div>
            <input text="text" placeholder="請輸入真實姓名" />
          </div>
          <div>
            <div class="form-name">手機</div>
            <input text="text" placeholder="+886-000-000-000" />
          </div>
        </div>
        <div class="row2">
          <div>
            <div class="form-name">信箱</div>
            <input text="text" placeholder="@gmail.com" />
          </div>
          <div>
            <div class="form-name">職業</div>
            <input text="text" placeholder="輸入您目前的職業性質" />
          </div>
        </div>
        <div class="row3">
          <div>
            <div class="form-name">地址</div>
            <input text="text" placeholder="縣市-區-路" />
          </div>
        </div>
        <div class="row4">
          <div class="subscribe">立即訂閱</div>
          <div class="hint">沒看到適合您的職缺嗎！ 別擔心，訂閱即可收到最新職缺通知。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import json from "@/assets/json/jobs.json";
import JobCard from "@/components/JobCard.vue";

export default {
  name: "Jobs",
  components: {
    JobCard
  },
  props: ["screenHight", "screenwidth"],
  data() {
    return {
      welfare: json.recruitment.welfare,
      jobs: json.recruitment.jobs,
      stepBottom: 200, //此数据是控制动画快慢的
      stepJob: 50,
      selectedJOb: ""
    };
  },
  computed: {
    numOfJobs: function() {
      return this.jobs.vacancy.length;
    },
    searchJob: function() {
      let result = this.jobs.vacancy.map(jobs => jobs.name);
      // this.$set(this.config, 'options', result)
      // let result = this.jobs.vacancy.map(item => Object.values(item)[1]);
      return result;
    }
  },
  methods: {
    toBottom(i) {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      let height = scrollHeight - clientHeight - 10; //超出窗口上界的值就是底部的scrolTop的值
      document.documentElement.scrollTop += i;
      let c;
      if (document.documentElement.scrollTop < height) {
        c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    handleMenuClick(e) {
      let height = this.$refs.vacancy[e.key].$el.offsetTop - 30;
      this.selectedJOb = this.jobs.vacancy[e.key].name;
      this.toJobCard(this.stepJob, height);
    },
    toJobCard(i, height) {
      document.documentElement.scrollTop += i;
      let c;
      if (document.documentElement.scrollTop < height) {
        c = setTimeout(() => this.toJobCard(i, height), 16);
      } else {
        clearTimeout(c);
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .jobs {
    width: 100%;
    .subject {
    }
    .search {
      width: 560px;
      margin-top: 5%;
    }
    .footer {
      position: absolute;
      bottom: 35px;
    }
    .welfare .content,
    .vacancy .content {
      width: 540px;
    }
    .vacancy .subscribe {
      width: 216px;
    }
    .welfare-card .cards {
      justify-content: center;
      left: 0;
      right: 0;
      margin: auto;
      .outer {
        margin: 0 15px;
      }
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .jobs {
    width: 100%;
    .subject {
    }
    .search {
      width: 70%;
      margin-top: 5%;
    }
    .footer {
      position: absolute;
      bottom: 35px;
    }
    .welfare .content,
    .vacancy .content {
      width: 540px;
    }
    .vacancy .subscribe {
      width: 216px;
    }
    .welfare-card .cards {
      justify-content: flex-start;
      .outer {
        margin: 0 1%;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .jobs {
    width: 100%;
    .subject {
      text-align: left;
      padding-left: 10%;
      padding-right: 2%;
    }
    .search {
      width: 80%;
      margin-top: 10%;
    }
    .footer {
      width: 76%;
      text-align: left;
      margin-top: 2%;
    }
    .welfare .content,
    .vacancy .content {
      width: 100%;
      padding: 0 7%;
      box-sizing: border-box;
    }
    .vacancy .subscribe {
      width: 40%;
    }
    .welfare-card .cards {
      justify-content: flex-start;
      .outer {
        margin: 0 1%;
      }
    }
  }
}
.ant-dropdown-menu {
  max-height: 280px;
  overflow: scroll;
}
.jobs {
  margin: 0 auto;
  height: 800px;
  .header {
    width: 100%;
    // height: 800px;
    // background-image: url("~@/assets/img/recruitment.jpg");
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .big-img {
      width: 100%;
      height: 100%;
      filter: blur(3px);
      position: absolute;
      z-index: -1;
    }
    .subject {
      // margin-top: 270px;
      display: inline-block;
      font-size: 48px;
      color: #fff;
      line-height: 1.2;
    }
    .search {
      // width: 560px;
      height: 56px;
      background-color: white;
      font-size: 20px;
      border-radius: 8px;

      i {
        margin-left: 20px;
      }
    }
    .footer {
      // margin-top: 400px;

      font-size: 12px;
      color: #fff;
    }
    .to-bottom {
      width: 50px;
      height: 50px;
      position: absolute;
      background-color: rgb(95, 172, 240);
      background-image: url("~@/assets/img/icons8-expand_arrow_2x.png");
      background-repeat: no-repeat;
      background-size: 32px 32px;
      background-position: center;
      right: 15px;
      bottom: 50px;
      cursor: pointer;
    }
  }
  .welfare {
    width: 100%;
    .title {
      margin-top: 80px;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      margin: 30px auto;
      font-size: 16px;
    }
  }
  .welfare-card {
    position: relative;
    overflow: hidden;
    height: 596px;
    .left-btn,
    .right-btn {
      position: absolute;
      width: 43px;
      height: 43px;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 0.7;
      bottom: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .left-btn {
      left: 4%;
      img {
        transform: rotate(90deg);
      }
    }
    .right-btn {
      right: 4%;
      img {
        transform: rotate(-90deg);
      }
    }
    .cards {
      display: flex;
      width: 999px;
      position: absolute;
      left: 0;
      transition: all .3s;
      // margin: auto 85px;
      .outer {
        width: 333px;
        flex-shrink: 0;
        span {
          margin-top: 35px;
          margin-bottom: 25px;
          display: inline-block;
        }
        .card {
          ::-webkit-scrollbar {
            width: 2px;
          }
          height: 496px;
          border-radius: 8px;
          border-style: solid;
          background-color: rgb(235, 235, 235);
          border-width: 0px;
          border-color: rgb(214, 214, 214);
          box-shadow: rgb(0, 0, 0) 0px 0px 1px;
          padding: 10px;
          .inner {
            margin-right: 25px;
            margin-left: 25px;
            overflow: auto;
            height: 490px;
            .border {
              margin-top: 20px;
              border-bottom: 1px solid rgb(0, 0, 0);
            }
            .content {
              font-size: 14px;
              margin-top: 20px;
              text-align: left;
              line-height: 23px;
              .subject {
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
  .vacancy {
    width: 100%;
    height: 250px;
    .title {
      margin-top: 130px;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      margin: 30px auto;
      font-size: 16px;
    }
    .subscribe {
      position: relative;
      margin: 0 auto;
      height: 48px;
      background-color: rgba(0, 0, 0, 0.8);
      color: rgb(255, 255, 255);
      border-radius: 10px;
      margin-top: 40px;
      right: 20px;
      line-height: 46px;
      cursor: pointer;
      img {
        position: absolute;
        margin: auto;
        right: 10%;
        top: 0;
        bottom: 0;
        width: 22px;
        height: 22px;
        transform: rotate(-90deg);
      }
    }
  }
  .vacancy-card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto 95px;
  }
  .apply-form {
    width: 100%;
    height: 570px;
    background-color: rgb(235, 235, 235);
    margin-top: 60px;
    display: flex;
    justify-content: center;
    .picture {
      // margin-left: 170px;
      width: 200px;
      .photo {
        margin-left: 20px;
        margin-top: 70px;
        width: 151px;
        height: 166px;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        img {
          margin-top: 60px;
          width: 50px;
          height: 50px;
        }
      }
      .hint {
        margin-top: 25px;
        color: rgb(145, 145, 145);
        display: inline-block;
        font-size: 12px;
        width: 154px;
        text-align: left;
      }
      .choose-photo {
        margin-top: 25px;
        margin-left: 20px;
        width: 158px;
        height: 46px;
        border-style: solid;
        background-color: rgb(255, 255, 255);
        border-width: 1px;
        border-color: rgb(214, 214, 214);
        border-radius: 10px;
        line-height: 46px;
        cursor: pointer;
      }
    }
    .form {
      margin-left: 90px;
      padding-top: 50px;
      width: 560px;
      .form-name {
        padding-left: 10px;
      }
      ::placeholder {
        color: rgb(145, 145, 145);
        // padding: 10px;
        font-size: 12p;
      }
      input {
        border: 1px rgb(214, 214, 214) solid;
        width: 207px;
        height: 46px;
        border-radius: 10px;
        padding: 0px 15px;
      }
      .row1,
      .row2 {
        padding-top: 20px;
        text-align: left;
        display: flex;
        justify-content: space-around;
        input {
          margin-top: 15px;
        }
      }
      .row3 {
        padding-top: 20px;
        text-align: left;
        padding-left: 20px;
        input {
          margin-top: 15px;
          width: 487px;
        }
      }
      .row4 {
        padding-top: 20px;
        position: relative;
        .subscribe {
          position: absolute;
          width: 241px;
          height: 46px;
          background-color: rgba(0, 0, 0, 0.8);
          color: rgb(255, 255, 255);
          font-size: 18px;
          border-radius: 10px;
          margin-top: 30px;
          right: 20px;
          line-height: 46px;
          cursor: pointer;
        }
        .hint {
          width: 228px;
          height: 21px;
          position: absolute;
          display: inline-block;
          letter-spacing: 0px;
          font-size: 12px;
          line-height: 18px;
          overflow-wrap: break-word;
          text-align: center;
          color: rgb(121, 121, 121);
          margin-top: 86px;
          margin-left: 24px;
        }
      }
    }
  }
}
</style>
