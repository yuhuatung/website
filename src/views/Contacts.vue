<template>
  <div class="contacts">
    <div class="animation">
      <div class="video-outer">
        <video class="sleep-video" autoplay muted loop v-if="screenwidth>810">
          <source src="https://www.308262.com/vue/files/contacts.mov" type="video/mp4" />
        </video>
        <img v-if="screenwidth<810" class="sleep-video" :src="bigImage" alt="contactsImg" />
        <div class="address">
          <div class="subject">Address</div>
          <div class="content" ref="addressToCopy">
            台北市信義區信義路四段
            <br />世紀金融大樓
          </div>
          <div class="copy" @click.stop.prevent="copyText('addressToCopy')">
            <img src="@/assets/img/icons8-copy_2x.png" />copy
          </div>
          <div class="bottom"><a href="https://goo.gl/maps/s3Jbny6iqBcy7qkf8" target="_blank">Google Map</a></div>
        </div>
        <div class="email">
          <div class="subject">E-mail</div>
          <div class="content" ref="emailToCopy">hr@Wanlian-tech.com</div>
          <div class="copy" @click.stop.prevent="copyText('emailToCopy')">
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
              <div class="form-name"><span>* </span>姓名</div>
              <input text="text" placeholder="請輸入真實姓名" v-model="contactData.name"/>
            </div>
            <div class="first">
              <div class="form-name"><span>* </span>信箱</div>
              <input text="text" placeholder="@gmail.com"  v-model="contactData.email"/>
            </div>
          </div>
          <div class="col2">
            <div class="first">
              <div class="form-name"><span>* </span>手機</div>
              <input text="text" placeholder="+886-000-000-000" v-model="contactData.mobile"/>
            </div>
            <div class="first">
              <div class="form-name"><span>* </span>職業</div>
              <input text="text" placeholder="輸入您目前的職業性質" v-model="contactData.job"/>
            </div>
          </div>
          <div class="col3">
            <div class="form-name"><span>* </span>留言</div>
            <input text="text" placeholder="輸入信息標題" class="message" v-model="contactData.message_title" />
            <textarea placeholder="輸入訊息內容（300字）" maxlength="300" class="info" v-model="contactData.message_content" />
          </div>
        </div>
        <div class="row2">
          <div class="subscribe" @click="sendContactData()">SEND</div>
          <div class="hint">我們將收入您寶貴的建議</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {sendContact} from "@/api/contact";

export default {
  name: "Contacts",
  props: ["screenwidth"],
  data() {
    return {
        contactData: {
          "name":"",
          "mobile":"",
          "message_title":"",
          "message_content":"",
          "email":"",
          "job":""
        }
    }
  },
  computed: {
    bigImage() {
      let img = { src: require("@/assets/img/contact_ipad.jpg") };
      if (this.screenwidth < 576) {
        img = { src: require("@/assets/img/contact_iphone.jpg") };
      }
      return img.src;
    }
  },
  methods: {
    beforeDestroy() {
      document.scrollingElement.scrollTop = 0;
    },
    sendContactData(){
      sendContact(this.contactData).then(response=>{
        if(response.success){
          alert('送出成功')
        }else{
          alert('送出失敗')
        }
      }).catch(e=>{
        console.log(e)
        alert('送出失敗')
      })
    },
    copyText (text) {
      this.selectText(this.$refs[text]); // e.g. <div ref="text">
      try {
        document.execCommand('copy');
        alert('Copied the text.');
      } catch (err) {
        alert('Oops, unable to copy');
      }
    },
    selectText(element) {
      var range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .contacts {
    min-width: 77.6875rem;
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
        margin-bottom: 2.8125rem;
      }
    }
    .contact-us {
      .title {
        width: 65.3125rem;
        .subject {
          font-size: 4rem;
        }
      }
      .form {
        width: 65.3125rem;
        margin: 3.125rem auto 0;
        .row1 {
          justify-content: flex-start;
          input {
            margin-top: 0.9375rem;
          }
          .col1 {
            margin-right: 2.1875rem;
          }
          .col2 {
            margin-right: 2.1875rem;
          }
          .col3 {
            flex-direction: column;
            .message {
              width: 28.75rem;
            }
            .info {
              width: 28.75rem;
              margin-top: auto;
              height: 4.6875rem;
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
      margin-bottom: 1.25rem;
    }
  }
  .contact-us {
    .title {
      width: 100%;
      justify-content: center;
      .subject {
        font-size: 4rem;
      }
    }
    .form {
      width: 100%;
      margin: 3.125rem auto 0;
      .row1 {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        input {
          margin-top: 0.9375rem;
        }
        .col1 {
          margin-right: 2.1875rem;
        }
        .col3 {
          width: 32.0625rem;
          justify-content: center;
          margin-top: 2.5rem;
          flex-direction: column;
          .message {
            box-sizing: border-box;
            width: 100%;
          }
          .info {
            margin-top: 0.9375rem;
            box-sizing: border-box;
            width: 100%;
            height: 4.6875rem;
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
      margin-bottom: 1.25rem;
    }
  }
  .contact-us {
    background-color: #fff;
    .title {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      .subject {
        font-size: 2.25rem;
      }
      .content {
        justify-content: center;
      }
    }
    .form {
      width: 100%;
      margin-top: 1.25rem;
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
              margin-right: 1.25rem;
            }
          }
        }
        .col2 {
          margin-top: 2.1875rem;
        }
        .col3 {
          width: 32.0625rem;
          justify-content: center;
          margin-top: 2.1875rem;
          flex-wrap: wrap;
          .form-name {
            line-height: 3rem;
            margin-right: 1.25rem;
          }
          .info {
            margin-top: 0.9375rem;
            box-sizing: border-box;
            width: 80%;
            height: 10.9375rem;
            max-width: 18.5rem;
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
  // width: 100vw;
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
          // text-align: left;
        }
      }
      .email {
        background: rgba(0, 150, 255, 0.7);
      }
      .subject {
        font-size: 2.25rem;
        margin-bottom: 0.9375rem;
      }
      .content {
        font-size: 1rem;
        margin-bottom: 0.3125rem;
      }
      .copy {
        font-size: 0.75rem;
        cursor: pointer;
        font-style: italic;
        img {
          width: 1rem;
          margin-right: 0.3125rem;
        }
      }
      .bottom {
        width: 6.125rem;
        height: 1rem;
        border-radius: 0.8125rem;
        border-color: rgb(255, 255, 255);
        font-size: 0.8125rem;
        color: rgb(255, 255, 255);
        border-style: solid;
        padding: 0.375rem;
        border-width: 0.0625rem;
        cursor: pointer;
        a{
          color: rgb(255, 255, 255);
        }
      }
    }
  }
  .contact-us {
    padding: 3.75rem 0 6.25rem;
    .title {
      display: flex;
      margin: 0 auto;
      .content {
        margin: 0.625rem 1.625rem;
        display: flex;
        text-align: left;
        align-items: center;
        line-height: 1.25rem;
      }
    }
    .form {
      ::placeholder {
        color: rgb(145, 145, 145);
        font-size: 12p;
      }
      input {
        border: 0.0625rem rgb(214, 214, 214) solid;
        width: 12.9375rem;
        height: 2.875rem;
        border-radius: 0.625rem;
        padding: 0rem 0.9375rem;
        font-size: 0.75rem;
      }
      input:focus{
        border: 0.0625rem #5facf0 solid;
        outline: none;
      }
      .row1 {
        font-size: 1rem;
        text-align: left;
        display: flex;
        .form-name {
          margin-left: 0.3125rem;
          span{
            color: red;
          }
        }
        .first + .first {
          margin-top: 1.875rem;
        }
        .col3 {
          display: flex;
          .info {
            border-radius: 0.625rem;
            font-size: 0.75rem;
            padding: 0.625rem 0.9375rem;
            border: 0.0625rem rgb(214, 214, 214) solid;
          }
          .info:focus{
            border: 0.0625rem #5facf0 solid;
            outline: none;
          }
        }
      }
      .row2 {
        display: flex;
        flex-direction: column;
        margin-top: 3.75rem;
        .subscribe {
          width: 15.0625rem;
          height: 2.875rem;
          background-color: rgba(0, 0, 0, 0.8);
          color: rgb(255, 255, 255);
          font-size: 1.125rem;
          border-radius: 0.625rem;
          line-height: 2.875rem;
          text-align: center;
          cursor: pointer;
        }
        .hint {
          width: 14.25rem;
          height: 1.3125rem;
          letter-spacing: 0rem;
          font-size: 0.75rem;
          line-height: 1.125rem;
          overflow-wrap: break-word;
          text-align: center;
          color: rgb(121, 121, 121);
          margin-top: 1.25rem;
        }
      }
    }
  }
}
</style>
