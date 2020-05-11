<template>
  <div class="jobs">
    <div class="header">
      <span class="subject">Work together for success!</span>
    </div>
    <div class="welfare">
      <div>
        {{welfare.title}}
      </div>
      <div>
        {{welfare.content}}
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
    <div>
      {{jobs.title}}
    </div>
    <div>
      {{jobs.content}}
    </div>
    <div class="vacancy">
      <div v-for="(item, index) in jobs.vacancy" :key="index">
        <JobCard v-bind="item"/>
      </div>
    </div>
    <div class="apply-form">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/json/jobs.json'
// import Logo from '@/assets/svg/logo.svg';
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
  margin: -56px auto;
  width: 1243px;
  height: 800px;
  .header{
    width: 1243px;
    height: 800px;
    background-image: url("~@/assets/img/recruitment.jpg");;
    background-repeat: no-repeat;
    // filter: blur(3px);
    .subject{
      margin-top: 200px;
      display: inline-block;
      font-size: 48px;
      color: #fff;
    }
  }
  .welfare{
    width: 1243px;
    height: 700px;
    .cards{
      display: flex;
      justify-content: space-between;
      margin: auto 85px;
      .outer{
        margin: 0 15px;
        width: 333px;
        span{
          margin-top: 20px;
          margin-bottom: 20px;
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
  }
}
</style>
