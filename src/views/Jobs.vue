<template>
  <div class="jobs">
    <div class="header">
      <img class="big-img" :src="bigImage" alt="recruitment" />
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
      <div v-show="screenwidth<810 && showLeftBtn === true" class="left-btn" @click="turnLeft">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="jobs-left-bnt" />
      </div>
      <div v-show="screenwidth<810 && showRightBtn === true" class="right-btn" @click="turnRight">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="jobs-right-bnt" />
      </div>
      <div v-if="Object.keys(welfare).length>0" class="cards" :style="{left:`${left}px`}">
        <div class="outer">
          <span>{{welfareTitleToIndexMap[0]}}</span>
          <div class="card">
            <div class="inner">
              <div
                v-for="(item, index) in welfare[welfareTitleToIndexMap[0]]"
                :key="index"
                class="content"
              >
                <div class="subject">{{item.name}}</div>
                <div v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="outer">
          <span>{{welfareTitleToIndexMap[1]}}</span>
          <div class="card">
            <div class="inner">
              <div
                v-for="(item, index) in welfare[welfareTitleToIndexMap[1]].slice(0, 4)"
                :key="index"
                class="content"
              >
                <div class="subject">{{item.name}}</div>
                <div v-html="item.content"></div>
              </div>
              <div class="border"></div>
              <div
                v-for="(item, index) in welfare[welfareTitleToIndexMap[1]].slice(4, 10)"
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
          <span>{{welfareTitleToIndexMap[2]}}</span>
          <div class="card">
            <div class="inner">
              <div
                v-for="(item, index) in welfare[welfareTitleToIndexMap[2]]"
                :key="index"
                class="content"
              >
                <div class="subject">{{item.name}}</div>
                <div v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vacancy">
      <div class="title">最新職缺</div>
      <div class="content">技最新職缺，我們將不定期更新最新職缺，若有適合您的職缺可以進行訂閱，系統將自動通知您的信箱。</div>
      <div class="subscribe" @click="toBottom(stepBottom)">
        立即訂閱
        <img src="@/assets/img/icons8-expand_arrow-1_2x.png" alt="subscribe-btn" />
      </div>
    </div>
    <div class="vacancy-card">
      <div v-for="(item, index) in jobs" :key="index">
        <JobCard v-bind="item" :selected="selectedJOb" :screenwidth="screenwidth" ref="vacancy" />
      </div>
    </div>
    <transition name="background-opacity">
      <div
        class="background-opacity"
        v-show="showApplyForm && screenwidth<810"
        @click="showApplyForm = false"
      ></div>
    </transition>
    <transition name="slide-out">
      <div class="apply-form" v-show="showApplyForm || screenwidth>810">
        <div class="close-btn" v-show="screenwidth<810" @click="showApplyForm = false">
          <img src="@/assets/img/icons8-expand_arrow-1_2x.png" alt="applyFormCloseBtn" />
        </div>
        <div class="containar">
          <div class="picture">
            <div class="photo">
              <img class="icon-photo" v-if="avatarPreviewUrl" :src="avatarPreviewUrl" />
            </div>
            <div class="content-btn">
              <p class="hint">
                請選擇進3個月的求職照片。
                <br />照片大小限3MB
              </p>
              <p class="choose-photo" @click="$refs['avatar-file'].click()"><span>* </span>選擇照片</p>
              <input type="file" ref="avatar-file" @change="avatarChange" v-show="false" />
            </div>
          </div>
          <div class="form">
            <div class="row1">
              <div>
                <div class="form-name"><span>* </span>姓名</div>
                <input text="text" placeholder="請輸入真實姓名" v-model="jobSubscriberData.name" />
              </div>
              <div>
                <div class="form-name"><span>* </span>手機</div>
                <input
                  text="text"
                  placeholder="+886-000-000-000"
                  v-model="jobSubscriberData.mobile"
                />
              </div>
            </div>
            <div class="row2">
              <div>
                <div class="form-name"><span>* </span>信箱</div>
                <input text="text" placeholder="@gmail.com" v-model="jobSubscriberData.email" />
              </div>
              <div>
                <div class="form-name"><span>* </span>職業</div>
                <input text="text" placeholder="輸入您目前的職業性質" v-model="jobSubscriberData.job_title" />
              </div>
            </div>
            <div class="row3">
              <div>
                <div class="form-name"><span>* </span>地址</div>
                <input text="text" placeholder="縣市-區-路" v-model="jobSubscriberData.address" />
              </div>
            </div>
            <div class="row4">
              <div class="subscribe" @click="sendJobSubscriberData()">立即訂閱</div>
              <div class="hint" v-if="screenwidth>810">沒看到適合您的職缺嗎！ 別擔心，訂閱即可收到最新職缺通知。</div>
              <div class="hint" v-else>建立您的人履歷，將由專員親自與您聯繫。</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="small-apply-form" v-show="screenwidth<810">
      <div class="subscribe" @click="showApplyForm = true">
        立即訂閱
        <img src="@/assets/img/icons8-expand_arrow-1_2x.png" alt="subscribe-btn" />
      </div>
      <div class="hint">
        沒看到適合您的職缺嗎！
        <br />別擔心，訂閱即可收到最新職缺通知。
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JobCard from "@/components/JobCard.vue";
import { fetchRecruiting } from "@/api/recruiting";
import { addJobSubscriber } from "@/api/job";
import { groupBy } from "@/utils";

export default {
  name: "Jobs",
  components: {
    JobCard
  },
  created() {
    fetchRecruiting([]).then(response => {
      if (response.success) {
        this.jobs = response.rows.jobs;
        const tempWelfare = response.rows.welfare;

        this.welfare = groupBy(tempWelfare, "title");
      }
    });
  },
  props: ["screenwidth"],
  data() {
    return {
      baseDomain: process.env.VUE_APP_BASE_DOMAIN,
      welfare: {},
      jobs: [],
      welfareTitleToIndexMap: {
        0: "基本權益",
        1: "獎金發放",
        2: "休假申請"
      },
      stepBottom: 200, //此数据是控制动画快慢的
      stepJob: 50,
      selectedJOb: "",
      showLeftBtn: false,
      showRightBtn: true,
      left: 0,
      showApplyForm: false,
      avatarTemp: "",
      avatarPreviewUrl: "",
      jobSubscriberData: {
        name: "",
        mobile: "",
        email: "",
        job_title: "",
        address: "",
        avatar: ""
      }
    };
  },
  computed: {
    bigImage() {
      let img = { src: require("@/assets/img/team_computer.jpg") };
      if (this.screenwidth < 810 && this.screenwidth > 576) {
        img = { src: require("@/assets/img/team_ipad.jpg") };
      }
      if (this.screenwidth < 576) {
        img = { src: require("@/assets/img/team_ipone.jpg") };
      }
      return img.src;
    },
    numOfJobs: function() {
      return this.jobs.length;
    },
    searchJob: function() {
      let result = this.jobs.map(jobs => jobs.name);
      // this.$set(this.config, 'options', result)
      // let result = this.jobs.vacancy.map(item => Object.values(item)[1]);
      return result;
    }
  },
  methods: {
    avatarChange(e) {
      this.jobSubscriberData.avatar = e.target.files[0];

      this.avatarPreviewUrl = URL.createObjectURL(
        this.jobSubscriberData.avatar
      );
    },
    sendJobSubscriberData() {
      const bodyFormData = new FormData();

      bodyFormData.set("name", this.jobSubscriberData.name);
      bodyFormData.append("avatar", this.jobSubscriberData.avatar);
      bodyFormData.set("address", this.jobSubscriberData.address);
      bodyFormData.set("job_title", this.jobSubscriberData.job_title);
      bodyFormData.set("email", this.jobSubscriberData.email);
      bodyFormData.set("mobile", this.jobSubscriberData.mobile);

      addJobSubscriber(bodyFormData)
        .then(response => {
          if (response.success) {
            alert("訂閱成功");
          } else {
            alert("訂閱失敗");
          }
        })
        .catch(e => {
          console.log(e);
          alert("訂閱失敗");
        });
    },
    turnLeft() {
      if (this.screenwidth > 576) {
        this.showLeftBtn = false;
        this.showRightBtn = true;
        this.left = 0;
      } else {
        this.left += 343;
        this.showRightBtn = this.left !== -686 ? true : false;
        this.showLeftBtn = this.left !== 0 ? true : false;
      }
    },
    turnRight() {
      if (this.screenwidth > 576) {
        this.showLeftBtn = true;
        this.showRightBtn = false;
        this.left = -(1029 - this.screenwidth + 40);
      } else {
        this.left -= 343;
        this.showRightBtn = this.left !== -686 ? true : false;
        this.showLeftBtn = this.left !== 0 ? true : false;
      }
    },
    toBottom(i) {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      let height = scrollHeight - clientHeight - 10; //超出窗口上界的值就是底部的scrolTop的值
      document.scrollingElement.scrollTop += i;
      let c;
      if (document.scrollingElement.scrollTop < height) {
        c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    handleMenuClick(e) {
      let height = this.$refs.vacancy[e.key].$el.offsetTop - 150;
      if ((this.screenwidth < 576) && (e.key > (this.numOfJobs - 4))) {
        height = this.$refs.vacancy[e.key].$el.offsetTop - 200;
        if (e.key == (this.numOfJobs - 2)) {
          height = height - 100;
        }
        if (e.key == (this.numOfJobs - 1)) {
          height = height - 300;
        }
      }else if(this.screenwidth < 810 && (e.key > (this.numOfJobs - 4))){
        height = this.$refs.vacancy[e.key].$el.offsetTop - 300;
      }
      this.selectedJOb = this.jobs[e.key].name;
      this.toJobCard(this.stepJob, height);
    },
    toJobCard(i, height) {
      document.scrollingElement.scrollTop += i;
      let c;
      if (document.scrollingElement.scrollTop < height) {
        c = setTimeout(() => this.toJobCard(i, height), 16);
      } else {
        clearTimeout(c);
      }
    }
  },
  beforeDestroy() {
    document.scrollingElement.scrollTop = 0;
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .jobs {
    width: 100%;
    min-width: 77.6875rem;
    .header {
      height: 100vh;
    }
    .subject {
    }
    .search {
      width: 35rem;
      margin-top: 5%;
    }
    .footer {
      position: absolute;
      bottom: 2.1875rem;
    }
    .welfare .content,
    .vacancy .content {
      width: 33.75rem;
    }
    .vacancy {
      flex-direction: column;
      .subscribe {
        width: 13.5rem;
      }
    }
    .welfare-card .cards {
      width: 68.25rem;
      justify-content: center;
      left: 0;
      right: 0;
      margin: auto;
      .outer {
        margin: 0 0.625rem;
        span {
          margin-bottom: 1.5625rem;
        }
      }
    }
    .vacancy-card {
      width: 68.25rem;
    }
    .apply-form {
      margin-top: 3.75rem;
      .containar {
        padding-top: 5rem;
        height: 35.625rem;
        justify-content: center;
        .picture {
          width: 12.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          .photo {
            width: 9.4375rem;
            height: 10.375rem;
          }
          .hint {
            margin-top: 1.875rem;
          }
          .choose-photo {
            width: 9.875rem;
            height: 2.875rem;
            margin-top: 0.625rem;
          }
        }
        .form {
          margin-left: 5.625rem;
          width: 35rem;
          input {
            width: 12.9375rem;
          }
          .row1,
          .row2 {
            justify-content: space-around;
          }
          .row2 {
            margin: 1.875rem 0;
          }
          .row3 {
            display: flex;
            justify-content: center;
            input {
              width: 30.4375rem;
            }
          }
          .row4 {
            align-items: flex-end;
            margin: 0.9375rem 2.1875rem 6.25rem;
          }
        }
      }
    }
    .small-apply-form {
      flex-direction: row;
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .jobs {
    width: 100%;
    .header {
      height: 60vh;
    }
    .subject {
    }
    .search {
      width: 70%;
      margin-top: 5%;
    }
    .footer {
      position: absolute;
      bottom: 2.1875rem;
    }
    .welfare .content,
    .vacancy .content {
      width: 33.75rem;
    }
    .vacancy {
      flex-direction: column;
      .subscribe {
        width: 13.5rem;
      }
    }
    .welfare-card .cards {
      justify-content: flex-start;
      .outer {
        margin: 0 0.3125rem;
        span {
          margin-bottom: 0.9375rem;
          text-align: left;
          padding-left: 0.625rem;
        }
      }
    }
    .vacancy-card {
      width: 45.5rem;
    }
    .apply-form {
      position: fixed;
      bottom: 0;
      z-index: 3;
      height: 80%;
      .containar {
        box-sizing: border-box;
        flex-direction: column;
        overflow: auto;
        padding: 0 0.9375rem;
        height: 100%;
        .picture {
          margin-top: 5%;
          display: flex;
          .photo {
            width: 7.3125rem;
            height: 8.125rem;
            margin-right: 5%;
          }
          .content-btn {
            margin-top: auto;
            .hint {
              height: 1.875rem;
            }
            .choose-photo {
              margin-top: 0.625rem;
              width: 100%;
            }
          }
        }
        .form {
          width: 100%;
          margin-top: 1.875rem;
          input {
            width: 100%;
          }
          .row1,
          .row2,
          .row3,
          .row4 {
            div {
              width: 46%;
            }
          }
          .row1,
          .row2 {
            justify-content: space-between;
          }
          .row2 {
            margin: 1.875rem 0;
          }
          .row4 {
            align-items: center;
            margin: 1.875rem 1.25rem 3.75rem;
          }
        }
      }
    }
    .small-apply-form {
      flex-direction: row;
      .subscribe {
        margin-right: 7%;
      }
      .hint {
        text-align: left;
        line-height: 1.125rem;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .jobs {
    width: 100%;
    padding-bottom: 3.75rem;
    .header {
      height: calc(100vh - 3.75rem);
    }
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
    .vacancy {
      flex-direction: column;
      .subscribe {
        width: 40%;
      }
    }
    .welfare-card .cards {
      justify-content: flex-start;
      .outer {
        margin: 0 0.3125rem;
        span {
          margin-bottom: 0.9375rem;
          text-align: left;
          padding-left: 0.625rem;
        }
      }
    }
    .vacancy-card {
      width: 22.75rem;
    }

    .apply-form {
      position: fixed;
      bottom: 0;
      z-index: 3;
      height: 80%;
      .containar {
        flex-wrap: wrap;
        box-sizing: border-box;
        overflow: auto;
        padding: 0 0.9375rem;
        height: 100%;
        justify-content: center;
        .picture {
          margin-top: 10%;
          display: flex;
          width: 90%;
          .photo {
            width: 7.3125rem;
            height: 8.125rem;
            margin-right: auto;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .content-btn {
            margin-top: auto;
            .hint {
              p {
                margin: 0;
              }
            }
            .choose-photo {
              margin-top: 0;
              width: 100%;
            }
          }
        }
        .form {
          width: 100%;
          margin-top: 1.875rem;
          input {
            width: 100%;
          }
          .row1,
          .row2,
          .row3,
          .row4 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            div {
              & + div {
                margin-top: 1.75rem;
              }
              width: 90%;
            }
          }
          .row2 {
            margin: 1.75rem 0;
          }
          .row4 {
            align-items: center;
            margin: 10% 0 20%;
          }
        }
      }
    }
    .small-apply-form {
      flex-direction: column;
      .subscribe {
        margin-right: 0%;
      }
      .hint {
        margin-top: 0.625rem;
        text-align: center;
        line-height: unset;
      }
    }
  }
}
.ant-dropdown-menu {
  max-height: 17.5rem;
  overflow: scroll;
}
.jobs {
  margin: 0 auto;
  .header {
    width: 100%;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .big-img {
      width: 100%;
      height: 100%;
      filter: blur(0.1875rem);
      position: absolute;
      z-index: -1;
    }
    .subject {
      display: inline-block;
      font-size: 3rem;
      color: #fff;
      line-height: 1.2;
    }
    .search {
      height: 3.5rem;
      background-color: white;
      font-size: 1.25rem;
      border-radius: 0.5rem;

      i {
        margin-left: 1.25rem;
      }
    }
    .footer {
      font-size: 0.75rem;
      color: #fff;
    }
    .to-bottom {
      width: 3.125rem;
      height: 3.125rem;
      position: absolute;
      background-color: rgb(95, 172, 240);
      background-image: url("~@/assets/img/icons8-expand_arrow_2x.png");
      background-repeat: no-repeat;
      background-size: 2rem 2rem;
      background-position: center;
      right: 0.9375rem;
      bottom: 3.125rem;
      cursor: pointer;
    }
  }
  .welfare {
    width: 100%;
    .title {
      margin-top: 5rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .content {
      margin: 1.875rem auto;
      font-size: 1rem;
    }
  }
  .welfare-card {
    position: relative;
    overflow: hidden;
    height: 37.25rem;
    .left-btn,
    .right-btn {
      position: absolute;
      width: 2.6875rem;
      height: 2.6875rem;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 0.7;
      bottom: 15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      img {
        width: 1.375rem;
        height: 1.375rem;
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
      position: absolute;
      left: 0;
      transition: all 0.3s;
      padding: 0 1.25rem;
      .outer {
        width: 20.8125rem;
        flex-shrink: 0;
        span {
          margin-top: 2.1875rem;
          display: block;
        }
        .card {
          ::-webkit-scrollbar {
            width: 0.125rem;
          }
          height: 31rem;
          border-radius: 0.5rem;
          border-style: solid;
          background-color: rgb(235, 235, 235);
          border-width: 0rem;
          border-color: rgb(214, 214, 214);
          box-shadow: rgb(0, 0, 0) 0rem 0rem 0.0625rem;
          padding: 0.625rem;
          .inner {
            margin-right: 1.5625rem;
            margin-left: 1.5625rem;
            overflow: auto;
            height: 30.625rem;
            .border {
              margin-top: 1.25rem;
              border-bottom: 0.0625rem solid rgb(0, 0, 0);
            }
            .content {
              font-size: 0.875rem;
              margin-top: 1.25rem;
              text-align: left;
              line-height: 1.4375rem;
              .subject {
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
  .vacancy,
  .small-apply-form {
    width: 100%;
    height: 15.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .content {
      margin-top: 1.875rem;
      font-size: 1rem;
    }
    .subscribe {
      position: relative;
      height: 3rem;
      background-color: rgba(0, 0, 0, 0.8);
      color: rgb(255, 255, 255);
      border-radius: 0.625rem;
      margin-top: 2.5rem;
      line-height: 2.875rem;
      cursor: pointer;
      img {
        position: absolute;
        margin: auto;
        right: 10%;
        top: 0;
        bottom: 0;
        width: 1.375rem;
        height: 1.375rem;
        transform: rotate(-90deg);
      }
    }
  }
  .vacancy-card {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: auto;
  }

  .background-opacity-enter,
  .background-opacity-leave-to {
    opacity: 0;
  }
  .background-opacity-enter-active,
  .background-opacity-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .background-opacity {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
  }
  .slide-out-enter,
  .slide-out-leave-to {
    bottom: -50rem;
  }
  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .apply-form {
    width: 100%;
    .close-btn {
      width: 100%;
      height: 2.1875rem;
      line-height: 2.1875rem;
      border-top-left-radius: 0.625rem;
      background-image: -webkit-linear-gradient(
        270deg,
        rgb(255, 255, 255),
        rgb(235, 235, 235)
      );
      border-top-right-radius: 0.625rem;
      border-bottom: 0.0625rem solid rgb(207, 206, 206);
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .containar {
      width: 100%;
      background-color: rgb(235, 235, 235);
      display: flex;
      .picture {
        .photo {
          background-color: rgb(255, 255, 255);
          border-radius: 0.5rem;
          border: 0.0625rem solid rgb(214, 214, 214);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .content-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          .hint {
            color: rgb(145, 145, 145);
            font-size: 0.75rem;
            text-align: left;
          }
          .choose-photo {
            margin-bottom: 0;
            border-style: solid;
            background-color: rgb(255, 255, 255);
            border-width: 0.0625rem;
            border-color: rgb(214, 214, 214);
            border-radius: 0.625rem;
            line-height: 2.875rem;
            cursor: pointer;
            span{
              color: red;
            }
          }
        }
      }
      .form {
        .form-name {
          padding-left: 0.625rem;
          span{
            color: red;
          }
        }
        ::placeholder {
          color: rgb(145, 145, 145);
          // padding: 0.625rem;
          font-size: 12p;
        }
        input {
          border: 0.0625rem rgb(214, 214, 214) solid;
          height: 2.875rem;
          border-radius: 0.625rem;
          margin-top: 0.9375rem;
          padding: 0rem 0.9375rem;
          box-sizing: border-box;
        }
        input:focus{
          border: 0.0625rem #5facf0 solid;
          outline: none;
        }
        .row1,
        .row2 {
          text-align: left;
          display: flex;
        }
        .row3 {
          text-align: left;
        }
        .row4 {
          display: flex;
          flex-direction: column;
          .subscribe {
            width: 15.0625rem;
            height: 2.875rem;
            background-color: rgba(0, 0, 0, 0.8);
            color: rgb(255, 255, 255);
            font-size: 1.125rem;
            border-radius: 0.625rem;
            margin-top: 1.875rem;
            line-height: 2.875rem;
            cursor: pointer;
          }
          .hint {
            width: 14.25rem;
            height: 1.3125rem;
            letter-spacing: 0rem;
            font-size: 0.75rem;
            line-height: 1.125rem;
            overflow-wrap: break-word;
            color: rgb(121, 121, 121);
            margin-top: 0.625rem;
          }
        }
      }
    }
  }
  .small-apply-form {
    height: 8.6875rem;
    background-color: rgb(235, 235, 235);
    margin-top: 3.75rem;
    // height: ;
    .subscribe {
      width: 15.0625rem;
      height: 2.875rem;
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      font-size: 1.125rem;
      border-radius: 0.625rem;
      cursor: pointer;
      margin-top: 0;
    }
    .hint {
      width: 14.25rem;
      display: inline-block;
      letter-spacing: 0rem;
      font-size: 0.75rem;
      overflow-wrap: break-word;
      color: rgb(121, 121, 121);
    }
  }
}
</style>
