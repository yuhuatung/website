<template>
  <div class="main">
        <div class="avatar"></div>
        <div class="title">{{name}}</div>
        <div class="salary">NT 
            <span class="num">{{salary}}</span> /month
        </div>
        <div class="requirement">工作需求 
            <span class="total">({{myJson}}項)</span>
        </div>
        <div class="list">
            <div v-for="(item, index) in requirement" :key="index" class="content">
                {{item}}
            </div>
        </div>
        <div class="buttom"></div>
        <div class="apply">立即應徵</div>
        <div class="bottom">請勾選工作需求後前往應徵。</div>
  </div>
</template>

<script>
export default {
  name: 'JobCard',
  data(){
    return{
      myJson: '5',
      name: '招募專員（HR）',
      salary: '40k+',
      requirement: [
                        "招募各部門所需人員、電話E-mail面試邀約安排與職務內容說明、福利制度解說。",
                        "拓展多元招募管道。",
                        "人員教育訓練課程規劃與執行。",
                        "人力資源盤點並製作員工職務工作說明書。",
                        "新進員工到職任用作業及離職員工手續辦理。",
                        "員工關懷面談及面談記錄填寫。",
                        "出缺勤紀錄統計與維護，報表整理。",
                        "薪資計算作業協助，二代健保申報作業。"
                    ]
    }
  },
//   props: {
//     msg: String
//   }
}
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
    width: 2px;
}
::-webkit-scrollbar-thumb {
    background: #d6d6d6; 
    border-radius: 1px;
}
.main {
    width: 322px;
    height: 603px;
    border-radius: 10px;
    border-color: rgb(235, 235, 235);
    border-style: solid;
    border-width: 6px;
    .avatar{
        transform: translateX(35px) translateY(38px) rotateY(0deg);
        width: 64px;
        height: 64px;
        position: absolute;
        border-radius: 10px;
        box-shadow: rgb(192, 192, 192) 0px 0px 8px inset;
    }
    .title{
        transform: translateX(113px) translateY(29px) rotateY(0deg);
        font-size: 18px;
        padding: 8px;
        width: 141px;
        height: 26px;
        position: absolute;
        font-family: "Noto Sans HK";
        font-weight: 700;
        color: rgb(0, 0, 0);
    }
    .salary{
        transform: translateX(111px) translateY(65px) rotateY(0deg);
        width: 143px;
        height: 26px;
        position: absolute;
        padding: 8px;
        color: rgb(145, 145, 145);
        .num{
            font-size: 26px;
            color: rgb(0, 0, 0);
        }
    }
    .requirement{
        transform: translateX(32px) translateY(116px) rotateY(0deg);
        width: 252px;
        height: 25px;
        position: absolute;
        padding: 8px;
        text-align: left;
        color: rgb(0, 0, 0);
        font-family: "Noto Sans HK";
        font-weight: bold;
        border-bottom: 1px solid rgb(145, 145, 145);
        .total{
            font-weight: normal;
        }
    }
    .list{
        transform: translateX(32px) translateY(169px) rotateY(0deg);
        width: 279px;
        height: 310px;
        position: absolute;
        border-bottom: 1px solid rgb(145, 145, 145);
        overflow: auto;
        .content{
            width: 220px;
            text-align: left;
            padding: 8px;
            font-size: 14px;
        }
    }
    .buttom{
        transform: translateX(34px) translateY(495px) rotateY(0deg);
        width: 260px;
        height: 48px;
        position: absolute;
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
        box-shadow: rgb(145, 145, 145) 0px 0px 3px;
        background-image: -webkit-linear-gradient(225deg, rgb(99, 179, 242), rgb(81, 117, 224));
        border-color: rgb(0, 111, 216);
    }
    .apply{
        transform: translateX(126px) translateY(502px) rotateY(0deg);
        position: absolute;
        padding: 8px;
        font-size: 16px;
        color: rgb(255, 255, 255);
    }
    .bottom{
        transform: translateX(85px) translateY(554px) rotateY(0deg);
        position: absolute;
        padding: 8px;
        color: rgb(0, 0, 0);
        font-family: "Noto Sans HK";
        font-size: 12px;
    }
}
</style>