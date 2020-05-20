<template>
  <div class="contacts">
    <div class="animation">
      <div class="video-outer">
        <video class="sleep-video" autoplay muted loop v-show="screenwidth>810">
          <source src="https://www.308262.com/vue/files/contacts.mov" type="video/mp4" />
        </video>
        <img v-show="screenwidth<810" class="sleep-video" :src="bigImage" alt="contactsImg" />
        <div class="address">
          <div class="subject">Address</div>
          <div class="content">
            台北市信義區信義路四段
            <br />世紀金融大樓
          </div>
          <div class="copy">
            <img src="@/assets/img/icons8-copy_2x.png" />copy
          </div>
          <div class="bottom">Google Map</div>
        </div>
        <div class="email">
          <div class="subject">E-mail</div>
          <div class="content">hr@Wanlian-tech.com</div>
          <div class="copy">
            <img src="@/assets/img/icons8-copy_2x.png" />copy
          </div>
          <div class="bottom">Outlook</div>
        </div>
        <div class="social-media">
          <div class="subject">Social media</div>
          <div class="content">Wanlian-tech</div>
          <div class="copy">
            <img src="@/assets/img/icons8-copy_2x.png" />copy
          </div>
          <div class="bottom">Facebook</div>
        </div>
      </div>
    </div>
    <div class="contact-us">
      <div class="title">
        <div class="subject">CONTACT US</div>
        <div class="content">
          We will receive your valuable
          <br />suggestions
        </div>
      </div>
      <div class="form">
        <div class="row1">
          <div class="col1">
            <div class="first">
              <div class="form-name">姓名</div>
              <input text="text" placeholder="請輸入真實姓名" />
            </div>
            <div class="first">
              <div class="form-name">信箱</div>
              <input text="text" placeholder="@gmail.com" />
            </div>
          </div>
          <div class="col2">
            <div class="first">
              <div class="form-name">手機</div>
              <input text="text" placeholder="+886-000-000-000" />
            </div>
            <div class="first">
              <div class="form-name">職業</div>
              <input text="text" placeholder="輸入您目前的職業性質" />
            </div>
          </div>
          <div class="col3">
            <div class="form-name">留言</div>
            <input text="text" placeholder="輸入信息標題" class="message" />
            <textarea placeholder="輸入訊息內容（300字）" maxlength="300" class="info" />
          </div>
        </div>
        <div class="row2">
          <div class="subscribe">SEND</div>
          <div class="hint">我們將收入您寶貴的建議</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  props: ["screenwidth"],
  data() {
    return {};
  },
  computed: {
    bigImage() {
      let img = { src: require("@/assets/img/contact_ipad.jpg") };
      if (this.screenwidth < 576) {
        img = { src: require("@/assets/img/contact_iphone.jpg") };
      }
      return img.src;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .contacts {
    min-width: 1243px;
    .video-outer {
      max-height: 80vh;
      min-height: 80vh;
      .sleep-video {
        min-height: 80vh;
        min-width: 100vw;
        position: absolute;
        height: auto;
        width: auto;
      }
      .address {
        width: 33%;
      }
      .email {
        width: 34%;
      }
      .social-media {
        width: 33%;
        background: rgba(94, 94, 94, 0.7);
      }
      .copy {
        margin-bottom: 45px;
      }
    }
    .contact-us {
      .title {
        width: 1045px;
        .subject {
          font-size: 64px;
        }
      }
      .form {
        width: 1045px;
        margin: 50px auto 0;
        .row1 {
          justify-content: flex-start;
          input {
            margin-top: 15px;
          }
          .col1 {
            margin-right: 35px;
          }
          .col2 {
            margin-right: 35px;
          }
          .col3 {
            flex-direction: column;
            .message {
              width: 460px;
            }
            .info {
              width: 460px;
              margin-top: auto;
              height: 75px;
            }
          }
        }
        .row2 {
          align-items: flex-end;
        }
      }
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .video-outer {
    max-height: 60vh;
    min-height: 60vh;
    flex-wrap: wrap;
    .sleep-video {
      position: absolute;
      height: 100%;
      width: 100%;
    }
    .address {
      width: 50%;
    }
    .email {
      width: 50%;
    }
    .social-media {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
    .copy {
      margin-bottom: 20px;
    }
  }
  .contact-us {
    .title {
      width: 100%;
      justify-content: center;
      .subject {
        font-size: 64px;
      }
    }
    .form {
      width: 100%;
      margin: 50px auto 0;
      .row1 {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        input {
          margin-top: 15px;
        }
        .col1 {
          margin-right: 35px;
        }
        .col3 {
          width: 513px;
          justify-content: center;
          margin-top: 40px;
          flex-direction: column;
          .message {
            box-sizing: border-box;
            width: 100%;
          }
          .info {
            margin-top: 15px;
            box-sizing: border-box;
            width: 100%;
            height: 75px;
          }
        }
      }
      .row2 {
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .video-outer {
    max-height: 120vh;
    min-height: 120vh;
    flex-wrap: wrap;
    .sleep-video {
      position: fixed;
      height: 100%;
      width: 100%;
    }
    .address {
      width: 100%;
    }
    .email {
      width: 100%;
    }
    .social-media {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
    .copy {
      margin-bottom: 20px;
    }
  }
  .contact-us {
    background-color: #fff;
    .title {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      .subject {
        font-size: 36px;
      }
      .content {
        justify-content: center;
      }
    }
    .form {
      width: 100%;
      margin-top: 20px;
      .row1 {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        .col1,
        .col2 {
          .first {
            display: flex;
            align-items: center;
            .form-name {
              margin-right: 20px;
            }
          }
        }
        .col2 {
          margin-top: 35px;
        }
        .col3 {
          width: 513px;
          justify-content: center;
          margin-top: 35px;
          flex-wrap: wrap;
          .form-name {
            line-height: 48px;
            margin-right: 20px;
          }
          .info {
            margin-top: 15px;
            box-sizing: border-box;
            width: 80%;
            height: 175px;
            max-width: 296px;
          }
        }
      }
      .row2 {
        align-items: center;
      }
    }
  }
}

.contacts {
  width: 100vw;
  .animation {
    position: relative;
    .video-outer {
      color: rgb(255, 255, 255);
      display: flex;
      position: relative;
      overflow: hidden;
      width: 100%;
      .sleep-video {
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        z-index: -1;
      }
      .address,
      .email,
      .social-media {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .address {
        background: rgba(94, 94, 94, 0.7);
        .content {
          text-align: left;
        }
      }
      .email {
        background: rgba(0, 150, 255, 0.7);
      }
      .subject {
        font-size: 36px;
        margin-bottom: 15px;
      }
      .content {
        font-size: 16px;
        margin-bottom: 5px;
      }
      .copy {
        font-size: 12px;
        cursor: pointer;
        font-style: italic;
        img {
          width: 16px;
          margin-right: 5px;
        }
      }
      .bottom {
        width: 98px;
        height: 16px;
        border-radius: 13px;
        border-color: rgb(255, 255, 255);
        font-size: 13px;
        color: rgb(255, 255, 255);
        border-style: solid;
        padding: 6px;
        border-width: 1px;
        cursor: pointer;
      }
    }
  }
  .contact-us {
    padding: 60px 0 100px;
    .title {
      display: flex;
      margin: 0 auto;
      .content {
        margin: 10px 26px;
        display: flex;
        text-align: left;
        align-items: center;
        line-height: 20px;
      }
    }
    .form {
      ::placeholder {
        color: rgb(145, 145, 145);
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
      .row1 {
        font-size: 16px;
        text-align: left;
        display: flex;
        .form-name {
          margin-left: 5px;
        }
        .first + .first {
          margin-top: 30px;
        }

        .col3 {
          display: flex;

          .info {
            border-radius: 10px;
            font-size: 12px;
            padding: 10px 15px;
            border: 1px rgb(214, 214, 214) solid;
          }
        }
      }
      .row2 {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        .subscribe {
          width: 241px;
          height: 46px;
          background-color: rgba(0, 0, 0, 0.8);
          color: rgb(255, 255, 255);
          font-size: 18px;
          border-radius: 10px;
          line-height: 46px;
          text-align: center;
          cursor: pointer;
        }
        .hint {
          width: 228px;
          height: 21px;
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