import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #0000FF white;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: white;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #0000FF;
    border-radius: 20px;
  }

  .my-6{
    margin-top: 80px;
    margin-bottom: 80px;
  }

  *::selection{
    background: #0000FF;
    color: white;
  }

  h1,h2,h3,h4,h5,h6,p,a,li,input,textarea,button,label{
    font-family: "Mulish";
  }

  header.header{
    background: #F8F8FF;
    padding: 30px 0 80px;
    .fixed{
      transition: all ease .3s;
      position: fixed;
      top: 0;
      width: 100%;
      margin: 0;
      left: 0;
      padding: 10px 0;
      background: white;
      z-index: 9999;
      box-shadow: 0 0 10px 0px rgba(0,0,0,.1);
      .header-logo{
        width: 150px;
        height: 26px;
      }
      ul{
        li{
          font-size: 14px;
        }
      }
      .header-info p{
        font-size: 12px;
      }
    }
    .align-it{
      max-width: 1140px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-inline: auto;
      align-items: center;
    }
    .header-logo{
      transition: all ease .3s;
      max-width: 225px;
      width: 225px;
      height: 39px;
      @media (max-width: 991px){
        width: 190px;
        height: 33px;
      }
    }
    .header-mobile-logo{
      @media (max-width: 600px){
        width: 50px;
      }
    }
    nav{
      width: fit-content;
      width: -moz-fit-content;
      @media (max-width: 575px){
        display: none;
      }
      menu{
        margin: 0;
        padding: 0;
        ul{
          margin: 0;
          padding: 0;
          li{
            list-style: none;
            display: inline-block;
            font-weight: 600;
            margin: 0 10px;
            @media (max-width: 991px){
              font-size: 12px;
              margin: 0 5px;
            }
            a{
              color: #A1A5C7;
              text-decoration: none;
            }
            &:hover a{
              color: black;
              transition: ease 0.3s all;
            }
          }
        }
      }
    }
    .mobile-menu{
      position: relative;
      .mobile-menu-button{
        color: white;
        background: black;
        font-size: 11px;
        padding: 5px 10px;
        border-radius: 40px;
      }
      .mobile-menu-navigation{
        position: absolute;
        top: 30px;
        left: 0;
        background: black;
        padding: 10px 20px;
        z-index: 9999;
        border-radius: 10px;
        display: none;
        @media (max-width: 400px){
          left: unset;
          right: 0;
        }
        ul{
          margin: 0;
          li{
            list-style: none;
            color: white;
            font-size: 14px;
            margin-left: -30px;
            width: max-content;
            margin-top: 5px;
            margin-bottom: 5px;
            width: -moz-max-content;
            a{
              color: inherit!important;
              text-decoration: none;
            }
          }
        }
      }
    }
    .header-info{
      width: fit-content;
      width: -moz-fit-content;
      @media (max-width: 400px){
        display: none;
      }
      p{
        margin: 0;
        padding: 0;
        color: #A1A5C7;
        font-weight: 600;
        font-size: 14px;
        text-align: right;
        @media (max-width: 991px){
          font-size: 12px;
        }
      }
    }
  }

  .intro{
    &.padding-plus{
      padding-top: 26px;
    }
    .intro-title{
      font-size: 30px;
      font-weight: 400;
      max-width: 460px;
      span{
        font-weight: 600;
      }
      @media (max-width: 991px){
        font-size: 24px;
      }
    }
    .intro-paragraph{
      color: #3A3A3A;
      max-width: 460px;
      @media (max-width: 991px){
        font-size: 14px;
      }
    }
    .intro-link{
      font-size: 14px;
      padding: 10px 25px;
      color: white;
      background: #0000FF;
      text-decoration: none;
      font-weight: 800;
      text-transform: uppercase;
      margin-top: 35px;
      display: block;
      width: fit-content;
      width: -moz-fit-content;
      border-radius: 100px;
      @media (max-width: 991px){
        font-size: 12px;
        padding: 7px 19px;
        margin-top: 25px;
      }
      &:hover{
        background: #0000CC;
        transition: all ease .3s;
      }
    }
  }

  .tooltip-vitorchaves{
    position: absolute;
    top: 110%;
    bottom: 0;
    background: black;
    max-width: 300px;
    width: 300px;
    padding: 15px;
    color: white;
    height: fit-content;
    font-size: 14px;
    border-radius: 15px;
    display: none;
  }

  .clickable{
    font-weight: 800;
    position: relative;
    z-index: 99;
    cursor: pointer;
    display: inline-block;
    width: fit-content;
    width: -moz-fit-content;
    &:hover{
      .tooltip-vitorchaves{
        display: block;
      }
      &::before{
        width: 100%;
        max-width: 100%;
      }
    }
    &::before{
      content: "";
      width: 40%;
      max-width: 20px;
      height: 3px;
      background: #00FF8B;
      position: absolute;
      bottom: 0px;
      transition: all ease .3s;
    }
  }

  .operation{
    .operation-title{
      font-size: 28px;
      font-weight: 800;
      @media (max-width: 991px){
        font-size: 22px;
      }
      .decoration{
        position: relative;
        &::after{
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 9px;
          background-color: #00FF8B;
          @media (max-width: 991px){
            height: 5px;
          }
        }
      }
    }
    .operation-paragraph{
      @media (max-width: 991px){
        font-size: 13px;
      }
    }
  }

  .list{
    margin-top: 30px;
    @media (max-width: 768px){
      text-align: center;
    }
    .list-title{
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 15px;
      @media (max-width: 991px){
        font-size: 13px;
      }
    }
    .list-list{
      margin-left: 30px;
      @media (max-width: 768px){
        margin-left: 0;
      }
      div{
        display: flex;
        justify-content: space-between;
        max-width: 200px;
        margin-bottom: 10px;
        @media (max-width: 991px){
          flex-wrap: wrap;
          flex-direction: column;
          margin-top: 0;
          margin-bottom: 0;
        }
        @media (max-width: 768px){
          margin-inline: auto;
        }
        p{
          position: relative;
          margin: 0;
          &::before{
            content: url("check.svg");
            position: absolute;
            left: -30px;
            bottom: -5px;
            @media (max-width: 991px){
              transform: scale(.7);
              top: 4px;
              bottom: unset;
            }
            @media (max-width: 768px){
              display: none;
            }
          }
        }
      }
    }
  }

  .fit-content{
    width: fit-content;
    width: -moz-fit-content;
  }

  .waves-top{
    width: 100%;
    position: relative;
    z-index: -1;
    margin-bottom: -1px;
  }
  .waves{
    padding: 60px 0 300px;
    background-image: linear-gradient(180deg, #023344, #03031D);
    position: relative;
    overflow: hidden;
    @media (max-width: 991px){
      padding: 20px 0 200px;
    }
    &::before{
      content: url("tesouro.svg");
      position: absolute;
      bottom: -20px;
      right: 160px;
    }
  }

  .submarine{
    *{
      user-select: none;
    }
    position: relative;
    img.absolute{
      position: absolute;
      @media (max-width: 550px){
        display: none;
      }
    }

    #fishes{
      left: 12%;
      top: 150px;
    }

    #balls{
      right: 20%;
      top: 0px;      
    }

    #whale{
      right: 30%;
      top: 600px;      
    }

    #smallballs{
      left: 6%;
      top: 1100px;      
    }

    .text-end{
      .submarine-title{
        margin-left: auto;
      }
    }
    .submarine-title{
      font-size: 28px;
      font-weight: 700;
      color: white;
      max-width: 450px;
      @media (max-width: 991px){
        font-size: 22px;
      }
      @media (max-width: 500px){
        font-size: 18px;
      }
      span{
        color: #00FF8B;
      }
    }

    .submarine-paragraph{
      color: white;
      margin-top: 20px;
      font-size: 17px;
      @media (max-width: 991px){
        font-size: 14px;
      }
      @media (max-width: 500px){
        font-size: 12px;
      }
    }
  }

  .contact{
    .contact-title{
      font-size: 28px;
      font-weight: 800;
      @media (max-width: 991px){
        font-size: 22px;
      }
      span{
        color: #00FF8B;
      }
    }
    .contact-paragraph{
      @media (max-width: 991px){
        font-size: 14px;
      }
    }
  }

  form{
    margin-top: 20px;
    .form-group{
      position: relative;
      margin: 10px 0;
      label{
        color: #A7A7A7;
        font-size: 15px;
        position: absolute;
        top: 5px;
        left: 23px;
        transition: all ease .3s;
        span{
          color: red;
          transition: all ease .3s;
        }
        &.active{
          font-size: 13px;
          top: -10px;
          color: #444;
          span{
            opacity: 0;
          }
        }
      }
      input, textarea{
        color: #0031CC!important;
        font-size: 15px!important;
        outline: none!important;
        border: none!important;
        border-bottom: solid 1px black!important;
        border-radius: 0!important;
        box-shadow: none!important;
      }
      button{
        border: solid 1px black;
        background: white;
        padding: 11px 30px 10px;
        width: fit-content;
        width: -moz-fit-content;
        border-radius: 100px;
        text-transform: lowercase;
        font-size: 13px;
        margin-inline: auto;
        font-weight: 600;
        img{
          margin-left: 5px;
          vertical-align: middle;
        }
      }
    }
  }

  footer{
    background: #0B0B0B;
    padding: 40px 0 0px;
    .copyright{
      margin: 0;
      text-align: center;
      padding: 10px 0;
      background: black;
      font-size: 12px;
      color: white;
      margin-top: 20px;
      span{
        color: #aaa;
        margin-left: 10px;        
        font-size: 10px;
        &::before{
          content: "/";
          margin-right: 10px;
          color: red;
        }
        a{
          color: #00FF8B;
          text-decoration: none;
          &:hover{
            background-image: linear-gradient(90deg, yellow, #00FF00);
            color: black;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
    .mobile-correction{
      @media (max-width: 991px){
        flex-wrap: wrap!important;
        justify-content: space-around!important;
      }
      @media (max-width: 500px){
        flex-direction: column;
        text-align: center;
      }
    }
    .footer-tree, .footer-info{
      width: max-content;
      width: -moz-max-content;
      @media (max-width: 500px){
        margin-top: 15px;
        margin-bottom: 10px;
      }
      ul{
        @media (max-width: 500px){
          margin-left: -30px;
        }
        li{
          color: white;
          font-size: 13px;
          list-style: none;
          margin: 7px 0;
          a{
            color: inherit!important;
            text-decoration: none;
            &:hover{
              color: #00FF8B!important;
            }
          }
        }
      }
    }
    #ease4cast{
      width: 226px;
      height: 39px;
    }
    #linkedin{
      width: fit-content;
      height: fit-content;
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }
`;

export default GlobalStyle;
