export default () => (
  <div>
    <style jsx global>{`
      html, body {
        font-family: Helvetica;
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: 0.3px;
      }
      
      a {
        text-decoration: none;
      }
      
      .left,
      .right {
        width: 50%;
        display: inline-block;
        vertical-align: top;
      }
      
      .left {
        color: #efefef;
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
        overflow: hidden;
        position: fixed;
      }
      
      .left .bg-img {
        background: url('../static/assets/hero.jpg') center center no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      
      .left .bg-img:before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgb(43, 102, 142);
        background: linear-gradient(-45deg,rgb(4,97,159),rgb(51, 104, 140)) 0% 0% / 400% 400%;
        opacity: 0.70;
      }
      
      .left-inner,
      .right-inner {
        padding: 50px;
      }
      
      @media screen and (max-width: 400px) {
        .left-inner,
        .right-inner {
          padding: 40px;
        }
      }
      
      .left-inner {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        min-height: 24em;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 100%;
      }
      
      .left .info {
        -webkit-box-flex: 0;
        -webkit-flex: none;
        flex: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        width: 90%;
        margin: 0 auto;
        margin-top: 40%;
      }
      
      @media screen and (max-width: 1000px) {
        .left .info {
          margin-top: 300px;
        }
      }
      
      .left .info .name {
        font-weight: 500;
      }
      
      .left .info .social-links {
        margin-top: 30px;
      }
      
      .left .info .fa {
        margin: 10px;
        font-size: 24px;
        color: #fff;
      }
      
      @media screen and (max-width: 1000px) {
        .left, .right {
          display: block;
          width: 100%;
        }
        .left {
          position: static;
        }
      }
      
      .right {
        float: right;
      }
      
      .right a {
        color: #000;
      }
      
      .right h4,
      .right .content {
        display: inline-block;
        vertical-align: top;
      }
      
      .right h4 {
        width: 20%;
        margin: 0 0 20px;
        text-transform: uppercase;
        font-size: 14px;
        background-color: #2A54F5;
        background-image: -webkit-linear-gradient(45deg,#2A54F5 0%,#33E5BB 100%);
        background-image: linear-gradient(45deg,#2A54F5 0%,#33E5BB 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .right ul {
        padding: 0;
        margin: 0;
      }
      
      .right .content {
        width: 80%;
        padding: 0;
        margin: 0 0 50px;
        font-weight: 300;
        line-height: 1.5;
      }
      
      
      @media screen and (max-width: 600px) {
        .right h4,
        .right .content {
          display: block;
          vertical-align: top;
          width: 100%;
        }
      }
      
      .right .content ul.description {
        padding-left: 20px;
        margin-top: 10px;
        font-size: 15px;
      }
      
      .right .introduction .intro-p:first-of-type {
        margin-top: 0;
      }
      
      .right .introduction .job-pls {
        font-weight: 500;
        background-color: #2A54F5;
        background-image: -webkit-linear-gradient(45deg,#2A54F5 0%,#33E5BB 100%);
        background-image: linear-gradient(45deg,#2A54F5 0%,#33E5BB 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
      
      
      .right .skills .skill-category {
        margin-bottom: 10px;
      }
      
      .right .skills .skill-category:last-of-type {
        margin-bottom: 0px;
      }
      
      .right .skills .skill-category > strong {
        text-transform: uppercase;
        font-size: 14px;
      }
      
      .right .education {
        font-size: 16px;
      }
      
      .right .education .university {
        font-weight: 700;
        font-size: 16px;
      }
      
      .right .education .college {
        font-weight: 700;
        font-style: italic;
        margin-bottom: 10px;
      }
      
      .right .education .major,
      .right .education .minor,
      .right .education .conc,
      .right .education .study-abroad {
        font-size: 15px;
      }
      
      .right .education .major > strong,
      .right .education .minor > strong,
      .right .education .conc > strong,
      .right .education .study-abroad > strong {
        font-weight: 500;
      }
      
      .right .education .study-abroad {
        margin-top: 10px;
      }
      
      .right .education .grad-date {
        text-transform: uppercase;
        color: #aaa;
        font-size: 13px;
        font-weight: 500;
        margin-top: 20px;
      }
      
      .right .experience .exp-item {
        margin-bottom: 30px;
      }
      
      .right .experience .exp-item:last-of-type {
        margin-bottom: 0;
      }
      
      .right .experience .exp-item .job {
        margin: 0;
        font-weight: 700;
      }
      
      .right .experience .exp-item .duration {
        font-size: 13px;
        font-weight: 500;
        float: right;
        color: #aaa;
        text-transform: uppercase;
        position: relative;
        top: 1px;
        margin-bottom: 5px;
      }
      
      @media screen and (max-width: 340px) {
        .right .experience .exp-item .duration {
          float: none;
        }
      }
      
      .right .experience .exp-item .title {
        font-weight: 700;
        font-style: italic;
      }
      
      .right .projects .project-item {
        margin-bottom: 20px;
      }
      
      .right .projects .project-title {
        font-weight: 700;
      }
      
      .right .projects .project-desc {
        font-size: 15px;
        margin: 0 0 10px;
      }
      
      .right a.resume {
        display: block;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
        padding: 15px 0px;
        background-color: #f5f5f5;
        border-radius: 5px;
        transition: all 0.3s ease;
      }
      
      .right a.resume:hover {
        background-color: #f1f1f1;
      }
      
      .right a.resume .resume-link {
        font-weight: 700;
        font-size: 16px;
        text-transform: uppercase;
        background-color: #2A54F5;
        background-image: -webkit-linear-gradient(45deg,#2A54F5 0%,#33E5BB 100%);
        background-image: linear-gradient(45deg,#2A54F5 0%,#33E5BB 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}</style>
  </div>
)