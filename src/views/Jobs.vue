<template>
  <div class="jobs">
    <div class="header">
      <div class="subject">Work together for success!</div>
      <div class="footer">Welcome! Let's create your profile</div>
      <div class="to-bottom" @click="toBottom(step)"></div>
    </div>
    <div class="welfare">
      <div class="title">
        {{welfare.title}}
      </div>
      <div class="content">
        {{welfare.content}}
      </div>
    </div>
    <div class="welfare-card">
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
              <div v-for="(item, index) in welfare.bonus.slice(4, 10)" :key="'welfare'+index" class="content">
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
      <div class="title">
        {{jobs.title}}
      </div>
      <div class="content">
        {{jobs.content}}
      </div>
      <div class="subscribe" @click="toBottom(step)">
        立即訂閱
      </div>
    </div>
    <div class="vacancy-card">
      <div v-for="(item, index) in jobs.vacancy" :key="index">
        <JobCard v-bind="item"/>
      </div>
    </div>
    <div class="apply-form">
      <div class="picture">
        <div class="photo">
          <img class="icon-photo" src="@/assets/img/folder_filled_2x.png">
        </div>
        <div class="hint">
          請選擇進3個月的求職照片。照片大小限3MB
        </div>
        <div class="choose-photo">
          選擇照片
        </div>
      </div>
      <div class="form">
        <div class="row1">
          <div>
            <div class="form-name">姓名</div>
            <input text="text" placeholder="請輸入真實姓名">
          </div>
          <div>
            <div class="form-name">手機</div>
            <input text="text" placeholder="+886-000-000-000">
          </div>
        </div>
        <div class="row2">
          <div>
            <div class="form-name">信箱</div>
            <input text="text" placeholder="@gmail.com">
          </div>
          <div>
            <div class="form-name">職業</div>
            <input text="text" placeholder="輸入您目前的職業性質">
          </div>
        </div>
        <div class="row3">
          <div>
            <div class="form-name">地址</div>
            <input text="text" placeholder="縣市-區-路">
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
import json from '@/assets/json/jobs.json'
import JobCard from '@/components/JobCard.vue'

export default {
  name: 'Jobs',
  components: {
    JobCard
  },
  data(){
    return{
      welfare: json.recruitment.welfare,
      jobs: json.recruitment.jobs,
      step: 200, //此数据是控制动画快慢的
    }
  },
  computed: {
    numOfJobs: function(){
      return this.jobs.vacancy.length;
    }
  },
  methods:{
    toBottom(i){
      var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight=document.documentElement.scrollHeight;
      var height=scrollHeight-clientHeight; //超出窗口上界的值就是底部的scrolTop的值
      document.documentElement.scrollTop += i;
      if (document.documentElement.scrollTop < height) {
        var c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    }
  },
  mounted(){
  }
}
</script>
<style lang="scss">
.jobs{
  margin: 0 auto;
  width: 1243px;
  height: 800px;
  .header{
    width: 1243px;
    height: 800px;
    background-image: url("~@/assets/img/recruitment.jpg");;
    background-repeat: no-repeat;
    position: relative;
    // filter: blur(3px);
    .subject{
      margin-top: 270px;
      display: inline-block;
      font-size: 48px;
      color: #fff;
    }
    .footer{
      margin-top: 400px;
      font-size: 12px;
      color: #fff;
    }
    .to-bottom{
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
  .welfare{
    width: 1243px;
    height: 120px;
    .title{
      margin-top: 80px;
      font-size: 24px;
      font-weight: bold;
    }
    .content{
      margin: 30px auto;
      width: 620px;
      font-size: 16px;
    }
  }
  .welfare-card{
    .cards{
      display: flex;
      justify-content: space-between;
      margin: auto 85px;
      .outer{
        margin: 0 15px;
        width: 333px;
        span{
          margin-top: 35px;
          margin-bottom: 25px;
          display: inline-block;
        }
        .card{
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
          .inner{
            margin-right: 25px;
            margin-left: 25px;
            overflow: auto;
            height: 490px;
            .border{
              margin-top: 20px;
              border-bottom: 1px solid rgb(0, 0, 0);
            }
            .content{
              font-size: 14px;
              margin-top: 20px;
              text-align: left;
              line-height: 23px;
              .subject{
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
  .vacancy{
    width: 1243px;
    height: 250px;
    .title{
      margin-top: 130px;
      font-size: 24px;
      font-weight: bold;
    }
    .content{
      margin: 30px auto;
      width: 620px;
      font-size: 16px;
    }
    .subscribe{
      position: relative;
      margin: 0 auto;
      width: 216px;
      height: 48px;
      background-color: rgba(0, 0, 0, 0.8);
      color: rgb(255, 255, 255);
      border-radius: 10px;
      margin-top: 40px;
      right: 20px;
      line-height:46px;
      cursor: pointer;
    }
    .subscribe:before{
      content:url('~@/assets/img/icons8-expand_arrow-1_2x.png');
      display: block;
      position: absolute;
      left: 168px;
      top: -9px;
      transform: rotate(-90deg) rotateY(0deg) scale(.5);
    }
  }
  .vacancy-card{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto 95px;
  }
  .apply-form{
    width: 1243px;
    height: 570px;
    background-color: rgb(235, 235, 235);
    margin-top: 60px;
    display: flex;
    justify-content: flex-start;
    .picture{
      margin-left: 170px;
      width: 200px;
      .photo{
        margin-left: 20px;
        margin-top: 70px;
        width: 151px;
        height: 166px;
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        img{
          margin-top: 60px;
          width: 50px;
          height: 50px;
        }
      }
      .hint{
        margin-top: 25px;
        color: rgb(145, 145, 145);
        display: inline-block;
        font-size: 12px;
        width: 154px;
        text-align: left;
      }
      .choose-photo{
        margin-top: 25px;
        margin-left: 20px;
        width: 158px;
        height: 46px;
        border-style: solid;
        background-color: rgb(255, 255, 255);
        border-width: 1px;
        border-color: rgb(214, 214, 214);
        border-radius: 10px;
        line-height:46px;
        cursor: pointer;
      }
    }
    .form{
      margin-left: 90px;
      padding-top: 50px;
      width: 560px;
      .form-name{
        padding-left: 10px;
      }
      ::placeholder {
        color: rgb(145, 145, 145);
        // padding: 10px;
        font-size: 12p;
      }
      input{
        border:1px rgb(214, 214, 214) solid;
        width: 207px;
        height: 46px;
        border-radius: 10px;
        padding: 0px 15px;
      }
      .row1, .row2{
        padding-top: 20px;
        text-align: left;
        display: flex;
        justify-content: space-around;
        input{
          margin-top: 15px;
        }
      }
      .row3{
        padding-top: 20px;
        text-align: left;
        padding-left: 20px;
        input{
          margin-top: 15px;
          width: 487px;
        }
      }
      .row4{
        padding-top: 20px;
        position: relative;
        .subscribe{
          position: absolute;
          width: 241px;
          height: 46px;
          background-color: rgba(0, 0, 0, 0.8);
          color: rgb(255, 255, 255);
          font-size: 18px;
          border-radius: 10px;
          margin-top: 30px;
          right: 20px;
          line-height:46px;
          cursor: pointer;
        }
        .hint{
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
