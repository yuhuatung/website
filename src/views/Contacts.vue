<template>
  <div class="contacts">
    <div class="animation">
      <div class="video-outer">
        <video class="sleep-video" autoplay muted loop>
          <source src="https://www.308262.com/frontend/files/contacts.mov" type="video/mp4">
        </video>
        <div class="address">
        </div>
        <div class="email">
        </div>
        <div class="social-media">
        </div>
      </div>
    </div>
    <div class="contact-us">
      <div class="title">
        <div class="subject">CONTACT US</div>
        <div class="content">We will receive your valuable suggestions</div>
      </div>
      <div class="form">
        <div class="row1">
          <div class="first">
            <div class="form-name">姓名</div>
            <input text="text" placeholder="請輸入真實姓名" />
          </div>
          <div class="first">
            <div class="form-name">手機</div>
            <input text="text" placeholder="+886-000-000-000" />
          </div>
          <div>
            <div class="form-name">留言</div>
            <input text="text" placeholder="輸入信息標題" class="message"/>
          </div>
        </div>
        <div class="row2">
          <div class="first">
            <div class="form-name">信箱</div>
            <input text="text" placeholder="@gmail.com" />
          </div>
          <div class="first">
            <div class="form-name">職業</div>
            <input text="text" placeholder="輸入您目前的職業性質" />
          </div>
          <div>
            <textarea placeholder="輸入訊息內容（300字）" maxlength="300" class="info"/>
          </div>
        </div>
        <div class="row3">
          <div>
            <div class="subscribe">SEND</div>
            <div class="hint">我們將收入您寶貴的建議</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
}
@media screen and (max-width: $smallWidth) {
}

.contacts{
  width: 100vw;
  .animation{
    height: 698px;
    // width: 100%;
    // display: flex;
    position: relative;
    .video-outer{
      display: flex;
      max-height: 80vh;
      min-height: 80vh;
      // max-width: 100vw;
      // min-width: 100vw;
      position: relative;
      overflow: hidden;
      width: 100%;
      .sleep-video {
        height: auto;
        left: 50%;
        min-height: 80vh;
        min-width: 100vw;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        width: auto;
        z-index: -1;
      }
      .address{
        height: auto;
        background:rgba(94,94,94,.7);
        width: 33%;
      }
      .email{
        background:rgba(0,150,255,.7);
        width: 34%;
      }
      .social-media{
        background:rgba(94,94,94,.7);
        width: 33%;
      }
    }
  }
  .contact-us{
    height: 525px;
    .title{
      display: flex;
      height: 80px;
      justify-content: center;
      margin-left: -340px;
      margin-top: 80px;
      .subject{
        font-size: 64px;
      }
      .content{
        margin: 10px 26px;
        width: 237px;
        text-align: left;
        line-height: 20px;
      }
    }
    .form{
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
        font-size: 12px;
      }
      .row1, .row2, .row3{
        margin-top: 20px;
        font-size: 16px;
        text-align: left;
        display: flex;
        justify-content: center;
        .form-name{
          margin-left: 5px;
        }
        input {
          margin-top: 15px;
        }
        .message{
          width: 460px;
        }
        .info{
          margin-top: 0px;
          height: 60px;
          width: 460px;
          border-radius: 10px;
          font-size: 12px;
          padding: 10px 15px;
          border: 1px rgb(214, 214, 214) solid;
        }
        .first{
          margin-right: 35px;
        }
      }
      .row2{
        height: 100px;
      }
      .row3{
        // padding-top: 20px;
        // position: relative;
        .subscribe {
          // position: absolute;
          width: 241px;
          height: 46px;
          background-color: rgba(0, 0, 0, 0.8);
          color: rgb(255, 255, 255);
          font-size: 18px;
          border-radius: 10px;
          margin-top: 60px;
          margin-left: 800px;
          line-height: 46px;
          text-align: center;
          cursor: pointer;
        }
        .hint {
          width: 228px;
          height: 21px;
          position: absolute;
          display: inline-block;
          margin-left: 800px;
          letter-spacing: 0px;
          font-size: 12px;
          line-height: 18px;
          overflow-wrap: break-word;
          text-align: center;
          color: rgb(121, 121, 121);
          margin-top: 20px;
        }
      }
    }
  }
}
</style>