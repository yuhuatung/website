<template>
  <div class="jobs">
    <div class="header">
      <div class="subject">Work together for success!</div>
      <div class="footer">Welcome! Let's create your profile</div>
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
    </div>
    <div class="vacancy-card">
      <div v-for="(item, index) in jobs.vacancy" :key="index">
        <JobCard v-bind="item"/>
      </div>
    </div>
    <div class="apply-form">
      <div class="picture"></div>
      <div class="form">
        <div class="row1">
          <div>
            <div>姓名</div>
            <input text="text" placeholder="請輸入真實姓名">
          </div>
          <div>
            <div>手機</div>
            <input text="text" placeholder="+886-000-000-000">
          </div>
        </div>
        <div class="row2">
          <div>
            <div>信箱</div>
            <input text="text" placeholder="@gmail.com">
          </div>
          <div>
            <div>職業</div>
            <input text="text" placeholder="輸入您目前的職業性質">
          </div>
        </div>
        <div class="row3">
          <div>
            <div>地址</div>
            <input text="text" placeholder="縣市-區-路">
          </div>
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
      jobs: json.recruitment.jobs
    }
  },
  computed: {
    numOfJobs: function(){
      return this.jobs.vacancy.length;
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
    height: 300px;
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
  }
  .vacancy-card{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto 95px;
  }
  .apply-form{
    width: 1243px;
    height: 608px;
    background-color: rgb(235, 235, 235);
    margin-top: 60px;
    display: flex;
    justify-content: center;
    .picture{
      width: 200px;
    }
    .form{
      padding-top: 65px;
      width: 560px;
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
    }
  }
}
</style>
