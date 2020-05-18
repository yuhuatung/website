<template>
  <div class="main" :class="selected === name?'selected':''">
    <div class="avatar"></div>
    <div class="title">{{name}}</div>
    <div class="salary">
      NT
      <span class="num">{{salary}}</span>
      <i>↑</i>/ month
    </div>
    <div class="requirement">
      工作需求
      <span class="total">({{numOfRequirement}}項)</span>
    </div>
    <div class="list">
      <div v-for="(item, index) in requirement" :key="index" class="content">
        <div class="check">
          <input type="checkbox" />
        </div>
        <div class="item-list">{{item}}</div>
      </div>
    </div>
    <div class="buttom" @click="openLink(link)">
      <span class="apply">立即應徵</span>
    </div>
    <div class="bottom">請勾選工作需求後前往應徵。</div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: ["name", "salary", "requirement", "priority", "selected", "link"],
  data() {
    return {};
  },
  computed: {
    numOfRequirement: function() {
      return this.requirement.length;
    }
  },
  methods: {
    openLink: function(url) {
      window.open(url, "_blank");
    }
  }
};
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
  border: 6px solid rgb(235, 235, 235);
  margin-top: 30px;
  margin-right: 30px;
  .avatar {
    transform: translateX(35px) translateY(38px) rotateY(0deg);
    width: 64px;
    height: 64px;
    position: absolute;
    border-radius: 10px;
    box-shadow: rgb(192, 192, 192) 0px 0px 8px inset;
  }
  .title {
    transform: translateX(113px) translateY(29px) rotateY(0deg);
    font-size: 18px;
    padding: 8px;
    width: 161px;
    height: 26px;
    position: absolute;
    text-align: left;
    font-weight: 700;
    color: rgb(0, 0, 0);
  }
  .salary {
    transform: translateX(111px) translateY(65px) rotateY(0deg);
    width: 143px;
    height: 26px;
    position: absolute;
    padding: 8px;
    text-align: left;
    color: rgb(145, 145, 145);
    .num {
      font-size: 26px;
      color: rgb(0, 0, 0);
    }
    i {
      vertical-align: top;
    }
  }
  .requirement {
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
    .total {
      font-weight: normal;
    }
  }
  .list {
    transform: translateX(32px) translateY(157px) rotateY(0deg);
    width: 268px;
    height: 315px;
    position: absolute;
    border-bottom: 1px solid rgb(145, 145, 145);
    overflow: auto;
    .content {
      width: 250px;
      text-align: left;
      padding: 15px 15px 15px 0;
      font-size: 14px;
      display: flex;
      .check {
        width: 50px;
        input[type="checkbox"] {
          position: relative;
          cursor: pointer;
          margin: 5px;
        }
        input[type="checkbox"]:before {
          content: "";
          display: block;
          position: absolute;
          background-color: white;
          width: 24px;
          height: 24px;
          top: -2px;
          left: -2px;
          border-radius: 3px;
          box-shadow: rgb(146, 146, 146) 0px 0px 4px inset;
        }
        input[type="checkbox"]:checked:after {
          content: "";
          display: block;
          width: 4px;
          height: 11px;
          border: solid #00bfff;
          border-width: 0 1.5px 1.5px 0;
          transform: rotate(45deg);
          position: absolute;
          top: 3px;
          left: 8px;
        }
      }
      .item-list {
        width: 250px;
      }
    }
  }
  .buttom {
    transform: translateX(34px) translateY(495px) rotateY(0deg);
    width: 260px;
    height: 48px;
    position: absolute;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    box-shadow: rgb(145, 145, 145) 0px 0px 3px;
    background-image: -webkit-linear-gradient(
      225deg,
      rgb(99, 179, 242),
      rgb(81, 117, 224)
    );
    border-color: rgb(0, 111, 216);
    cursor: pointer;
    .apply {
      transform: translateX(126px) translateY(502px) rotateY(0deg);
      font-size: 16px;
      color: rgb(255, 255, 255);
      position: relative;
      top: 14px;
    }
  }
  .bottom {
    transform: translateX(85px) translateY(554px) rotateY(0deg);
    position: absolute;
    padding: 8px;
    color: rgb(0, 0, 0);
    font-family: "Noto Sans HK";
    font-size: 12px;
  }
}
.selected {
  background-color: unset;
  background-image: -webkit-linear-gradient(
    225deg,
    rgb(100, 182, 243),
    rgb(80, 116, 224)
  );
  border-radius: 10px;
  border: 1px solid rgb(0, 150, 255);
  .avatar {
    box-shadow: unset;
    background-color: white;
  }
  .title,
  .requirement,
  .list,
  .salary,
  .salary .num,
  .bottom {
    color: white;
  }
  .requirement,
  .list {
    border-bottom: 1px solid white;
  }
  .list .content .check input[type="checkbox"]:before {
    box-shadow: unset;
  }
  .buttom {
    background-image: unset;
    background-color: white;
    box-shadow: rgb(0, 0, 0) 0px 0px 3px;
    .apply {
      color: rgb(0, 150, 255);
    }
  }
}
</style>