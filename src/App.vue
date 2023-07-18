<script setup>
import {banSec} from './data/data.js'
import {banerbtnLink} from './data/data.js'
import {heading} from './data/data.js'
import {anim} from './data/data.js'
import {companyInfo} from './data/data.js'
import { prefooter } from "./data/data.js";
import { prefooterContent } from "./data/data";
import { firstWidget } from "./data/data.js";
import {owlSlider} from './data/data.js'
import {serviceBox} from './data/data.js'
const footerBg = "background: rgb(0 43 55);";
const footerBorder = "border-bottom: 1px solid #373636";
const untree_co_hero = 'padding: 4rem 0'; 
import {pricing} from './data/data.js';
// Make a const named anim for aos animation handling 
import {testimonial} from './data/data.js'
import {aboutUs} from './data/data.js'
import{contactus} from './data/data.js'
import {menu} from './data/data.js'
import {footer} from './data/data.js'
import {blogsection} from './data/data.js'

const btnLeft = 'margin-right: 13px'
const ctaPrimary = 'cta-primary'

const fontIconecolor = 'color: red';
// const iconsColor = {
//     color : 'red',
// }
</script>

<template>
  <!---Menu Part Start--->
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <nav class="site-nav dark js-site-navbar mb-5 site-navbar-target">
      <div class="container">
        <div class="site-navigation">
          <a :href="menu[1].logolink" class="logo m-0 float-left">Launch<span class="text-primary">.</span></a
          >
          <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-left">
            <li class="active"><a :href="menu[0].menulinks[0]" class="nav-link">{{ menu[0].menuName[0] }}</a></li>
            <li><a :href="menu[0].menulinks[1]" class="">{{ menu[0].menuName[1] }}</a></li>
            <li><a href="menu[0].menulinks[2]" class="nav-link">{{ menu[0].menuName[2]  }}</a></li>
            <li><a href="menu[0].menulinks[3]" class="nav-link">{{ menu[0].menuName[3]  }}</a></li>
            <li><a href="menu[0].menulinks[4]" class="nav-link">{{ menu[0].menuName[4]  }}</a></li>
          </ul>
          <ul class="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
            <li class="cta-button-outline" :style = "btnLeft"><a href="#">Sign in</a></li>
            <li :class="ctaPrimary"><a href="#">Register</a></li>
          </ul>
          <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none" data-toggle="collapse"  data-target="#main-navbar">
            <span></span>
          </a>
        </div>
      </div>
    </nav>
  <!---Menu Part End---->
  <!---Banner Part Start---->
  <div class="untree_co-hero" :style="untree_co_hero" id="home-section">
    <div class="container">
      <div class="row align-items-center" :style="untree_co_hero">
        <div class="col-12">
          <div class="dots"></div>
          <div class="row align-items-center">
            <div  class="col-lg-7 ml-auto order-lg-2" :data-aos="anim.fadeRight" :data-aos-delay="anim.delay">
              <img  :src="banSec.Image" :alt="banSec.alterTxt" :class="banSec.imageFluid"/>
            </div>
            <div class="col-lg-5">
              <h1 :style="heading" :data-aos="anim.fadeUp" :data-aos-delay="anim.headingDelay"> {{ banSec.bantitle }} </h1>
              <div class="excerpt" :data-aos="anim.fadeUp" :data-aos-delay="anim.paraDelay">
                <p>
                  Another cool free html css template by
                  <a href="#" target="_blank" :class="textheightlight">Colorlib</a> Far
                  far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated
                  they live in Bookmarksgrove right at the coast
                </p>
              </div>
              <p :data-aos="anim.fadeUp" :data-aos-delay="anim.btnDelay">
                <a :href="banerbtnLink.leftBtn" :style="btnLeft" class="btn btn-primary smoothscroll" >{{ banerbtnLink.leftBtnTxt }}</a>
                <a :href="banerbtnLink.rightBtn" class="btn btn-outline-primary smoothscroll">{{ banerbtnLink.rightBtnTxt }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!----Banner Part End --->

  <!---Company Info Part Start--->
  <div class="untree_co-section" id="features-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4">
            <span class="caption" :data-aos="anim.fadeUp" :data-aos-delay="anim.headingDelay">{{companyInfo[0].subtitle }}</span>
            <h3 class="heading mb-4" :data-aos="anim.fadeUp" :data-aos-delay="anim.delay">{{companyInfo[0].title }}</h3>
            <div class="mb-4" :data-aos="anim.fadeUp" :data-aos-delay="anim.paraDelay"><p>{{ companyInfo[0].profileInfo }}</p>
              <ul class="list-unstyled ul-check primary">
                <li>{{ companyInfo[0].checkList[0] }}</li>
                <li>{{ companyInfo[0].checkList[1] }}</li>
              </ul>
            </div>
            <div class="mb-4" :data-aos="anim.fadeUp" :data-aos-delay="anim.delay3">
              <div class="untree_co-testimonial d-flex">
                <div class="text">
                  <blockquote>
                    &ldquo;Separated they
                    <span class="highlight"
                      >live in Bookmarksgrove right at the coast of the
                      Semantics</span
                    >, a large language ocean. A small river named Duden flows
                    by their place and supplies it with the necessary
                    regelialia. &rdquo;
                  </blockquote>
                  <div class="author d-flex">
                    <div class="pic mr-3">
                      <img :src="companyInfo[1].personImage" alt="Image" class="img-fluid"
                      />
                    </div>
                    <div>
                      <strong class="d-block"> {{ companyInfo[1].personName }} </strong>
                      <span class="d-block"> {{ companyInfo[1].personDesig }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="400">
            <a :href="companyInfo[0].videoLink" class="btn-video" data-fancybox>
              <span class="wrap-icon-play">
                <svg
                  class="bi bi-play-fill"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  />
                </svg>
              </span>
              <img :src="companyInfo[0].intialvideoImage" alt="Image"  class="img-fluid img-shadow"/>
            </a>
          </div>
        </div>
      </div>
  </div><!---Company Info Part End--->

  <!---Service Part Start---->
  <div class="untree_co-section bg-light">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5 order-lg-2 js-custom-dots">
            <a  href="#" class="service link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
              <div class="service-icon color-1 mb-4">
                <svg class="bi bi-app-indicator"  width="1em"  height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                  <path fill-rule="evenodd"
                    d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                  />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ owlSlider[1].title }}</h3>
                <p>{{ owlSlider[1].infoText }} </p>
              </div>
            </a>
            <a href="#" class="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="100">
              <div class="service-icon color-2 mb-4">
                <svg  class="bi bi-arrow-repeat"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ owlSlider[2].title }}</h3>
                <p>{{ owlSlider[2].infoText }} </p>
              </div>
            </a>
            <a href="#" class="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="200">
              <div class="service-icon color-3 mb-4">
                <svg
                  class="bi bi-briefcase"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ owlSlider[3].title }}</h3>
                <p>{{ owlSlider[3].infoText }} </p>
              </div>
            </a>
            <a href="#" class="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="300">
              <div class="service-icon color-4 mb-4">
                <svg
                  class="bi bi-collection"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ owlSlider[4].title }}</h3>
                <p>{{ owlSlider[4].infoText }} </p>
              </div>
            </a>
          </div>
          <div class="col-lg-7">
            <div class="img-shadow">
              <div class="owl-single no-dots owl-carousel">
                <div class="item">
                  <span class="number">1/4</span>
                  <img :src="owlSlider[0].image" alt="Image" class="img-fluid"/>
                </div>
                <div class="item">
                  <span class="number">2/4</span>
                  <img :src="owlSlider[0].image" alt="Image" class="img-fluid"/>
                </div>
                <div class="item">
                  <span class="number">3/4</span>
                  <img :src="owlSlider[0].image" alt="Image" class="img-fluid"/>
                </div>
                <div class="item">
                  <span class="number">4/4</span>
                  <img :src="owlSlider[0].image" alt="Image" class="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div><!---Service Part End---->

<!---Info Box Part Start--->
  <div class="untree_co-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="0">
            <div class="service">
              <div class="service-icon color-1 mb-4">
                <svg class="bi bi-app-indicator" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                  />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[0].title }}</h3>
                <p>{{ serviceBox[0].infoText }} </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div class="service">
              <div class="service-icon color-2 mb-4">
                <svg class="bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                  <path
                    fill-rule="evenodd"
                    d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[1].title }}</h3>
                <p>{{ serviceBox[1].infoText }} </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4 mb-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div class="service">
              <div class="service-icon color-3 mb-4">
                <svg class="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[2].title }}</h3>
                <p>{{ serviceBox[2].infoText }} </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 mb-4 mb-lg-0 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="service">
              <div class="service-icon color-4 mb-4">
                <svg class="bi bi-collection" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                  <path
                    fill-rule="evenodd"
                    d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[3].title }}</h3>
                <p>{{ serviceBox[3].infoText }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div><!-----Info Box Part End--->

<!----Price Section Part Start--->
  <div class="untree_co-section bg-light" id="pricing-section">
      <div class="container">
        <div class="row pricing-title">
          <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">Pricing</h2>
            <p>Pricing for everyone. Choose your plan now!</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div class="pricing">
                  <div class="body">
                    <div class="price">
                      <span class="d-block plan">{{pricing[0].package}}</span>
                      <span class="price"><sup>$</sup><span>{{pricing[0].rate}}</span></span>
                    </div>
                    <ul class="list-unstyled ul-check primary mb-5">
                      <li>{{ pricing[0].features[0] }}</li>
                      <li>{{ pricing[0].features[1] }}</li>
                      <li>{{ pricing[0].features[2] }}</li>
                    </ul>
                    <p class="text-center mb-0">
                      <a href="#" class="btn btn-outline-primary">Get Started</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="pricing active">
                  <div class="body">
                    <div class="price">
                      <span class="d-block plan">{{pricing[1].package}}</span>
                      <span class="price"><sup>$</sup><span>{{pricing[1].rate}}</span></span>
                    </div>
                    <ul class="list-unstyled ul-check primary mb-5">
                      <li>{{ pricing[1].features[0] }}</li>
                      <li>{{ pricing[1].features[1] }}</li>
                      <li>{{ pricing[1].features[2] }}</li>
                    </ul>
                    <p class="text-center mb-0"> <a href="#" class="btn btn-primary">Get Started</a></p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div class="pricing">
                  <div class="body">
                    <div class="price">
                      <span class="d-block plan">{{pricing[2].package}}</span>
                      <span class="price"><sup>$</sup><span>{{pricing[2].rate}}</span></span>
                    </div>
                    <ul class="list-unstyled ul-check primary mb-5">
                      <li>{{ pricing[2].features[0] }}</li>
                      <li>{{ pricing[2].features[1] }}</li>
                      <li>{{ pricing[2].features[2] }}</li>
                    </ul>
                    <p class="text-center mb-0"><a href="#" class="btn btn-outline-primary">Get Started</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div><!-----Price Section Part End--->

<!----Category Section Start--->
  <div class="untree_co-section">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">Advantage of using our products</h2>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="service horizontal d-flex">
              <div class="service-icon color-1 mb-4">
                <svg
                  class="bi bi-app-indicator"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                  />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[0].title }}</h3>
                <p>{{ serviceBox[0].infoText }} </p>
                <p><a href="#" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="service horizontal d-flex">
              <div class="service-icon color-2 mb-4">
                <svg
                  class="bi bi-arrow-repeat"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[1].title }}</h3>
                <p>{{ serviceBox[1].infoText }} </p>
                <p><a href="#" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="service horizontal d-flex">
              <div class="service-icon color-3 mb-4">
                <svg
                  class="bi bi-briefcase"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[2].title }}</h3>
                <p>{{ serviceBox[2].infoText }} </p>
                <p><a href="#" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div class="service horizontal d-flex">
              <div class="service-icon color-4 mb-4">
                <svg
                  class="bi bi-collection"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                  />
                </svg>
              </div>
              <div class="service-contents">
                <h3>{{ serviceBox[3].title }}</h3>
                <p>{{ serviceBox[3].infoText }} </p>
                <p><a href="#" class="read-more">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div> <!----Category Section End--->

<!---Testimonial Start-->
<div class="untree_co-section" id="testimonials-section">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 mb-5 text-center text-lg-left mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div class="mb-4">
              <span class="caption">Testimonials</span>
              <h2 class="heading">Our Customers Feedbck</h2>
            </div>
            <div>
              <a
                href="#"
                class="js-custom-prev-v2 cusotm-slider-nav custom-prev"
                ><span
                  ><svg
                    class="bi bi-arrow-left"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    /></svg></span
              ></a>
              <a
                href="#"
                class="js-custom-next-v2 cusotm-slider-nav custom-next"
                ><span>
                  <svg
                    class="bi bi-arrow-right"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                    /></svg
                ></span>
              </a>
            </div>
          </div>
          <div class="col-lg-8" data-aos="fade" data-aos-delay="200">
            <div class="owl-2-slider owl-carousel">
              <div class="item">
                <div class="untree_co-testimonial d-flex">
                  <div class="text">
                    <blockquote>{{ testimonial[0].reviewGiven }}</blockquote>
                    <div class="author d-flex">
                      <div class="pic mr-3">
                        <img :src="testimonial[0].personImage" alt="Image" class="img-fluid"/>
                      </div>
                      <div>
                        <strong class="d-block">{{testimonial[0].personName }}</strong>
                        <span class="d-block"> {{ testimonial[0].personDesig }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="untree_co-testimonial d-flex">
                  <div class="text">
                    <blockquote>{{ testimonial[1].reviewGiven }}</blockquote>
                    <div class="author d-flex">
                      <div class="pic mr-3">
                        <img :src="testimonial[1].personImage" alt="Image" class="img-fluid"/>
                      </div>
                      <div>
                        <strong class="d-block">{{testimonial[1].personName }}</strong>
                        <span class="d-block"> {{ testimonial[1].personDesig }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="untree_co-testimonial d-flex">
                  <div class="text">
                    <blockquote>{{ testimonial[2].reviewGiven }}</blockquote>
                    <div class="author d-flex">
                      <div class="pic mr-3">
                        <img :src="testimonial[2].personImage" alt="Image" class="img-fluid"/>
                      </div>
                      <div>
                        <strong class="d-block">{{testimonial[2].personName }}</strong>
                        <span class="d-block"> {{ testimonial[2].personDesig }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>  <!---Testimonial End-->
<!---About Us Section Start-->
<div class="untree_co-section" id="about-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <img :src="aboutUs.imagelink" alt="Image" class="img-fluid" />
          </div>
          <div class="col-lg-4">
            <div class="mb-4" data-aos="fade-up" data-aos-delay="0">
              <span class="caption">About</span>
              <h2 class="heading">About Us</h2>
            </div>
            <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
              <p>{{ aboutUs.aboutInfo }}</p>
              <p>{{ aboutUs.blogquote }}</p>
            </div>
            <ul class="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="200">
              <li>{{ aboutUs.keypoints[0] }}</li>
              <li>{{ aboutUs.keypoints[1] }}</li>
              <li>{{ aboutUs.keypoints[2] }}</li>
            </ul>
            <div class="row count-numbers">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                <span class="counter d-block"><span data-number="59">0</span><span>M</span></span>
                <span class="caption-2">Members</span>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <span class="counter d-block"><span data-number="14">0</span><span></span></span>
                <span class="caption-2">Team</span>
            </div>
            </div>
          </div>
        </div>
      </div>
</div><!---About Us Section End-->
<!---News Section Start-->
<div class="untree_co-section bg-light">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">Our News</h2>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="0">
            <div class="news-item">
              <div class="vcard d-flex align-items-center mb-4">
                <div class="img-wrap">
                  <img :src="blogsection[0].imagelink " alt="Image" class="img-fluid" />
                </div>
                <div class="post-meta">
                  <strong>{{ blogsection[0].author }}</strong>
                  <span>{{  blogsection[0].postedDate }}</span>
                </div>
              </div>
              <div class="news-contents mb-4">
                <span class="post-meta-2">{{ blogsection[0].subject }}</span>
                <h3><a href="#">{{ blogsection[0].comment }}</a></h3>
              </div>
              <p class="mb-0">
                <a href="#" class="read-more-arrow">
                  <svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                  </svg>
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="news-item">
              <div class="vcard d-flex align-items-center mb-4">
                <div class="img-wrap">
                  <img :src=" blogsection[1].imagelink" alt="Image" class="img-fluid"/>
                </div>
                <div class="post-meta">
                  <strong>{{ blogsection[1].author }}</strong>
                  <span>{{ blogsection[1].postedDate }}</span>
                </div>
              </div>
              <div class="news-contents mb-4">
                <span class="post-meta-2">{{ blogsection[1].subject }}</span>
                <h3> <a href="#">{{ blogsection[1].comment }}</a></h3>
              </div>
              <p class="mb-0">
                <a href="#" class="read-more-arrow">
                  <svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-12 col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="news-item">
              <div class="vcard d-flex align-items-center mb-4">
                <div class="img-wrap">
                  <img :src="blogsection[2].imagelink " alt="Image" class="img-fluid"/>
                </div>
                <div class="post-meta">
                  <strong>{{ blogsection[2].author }}</strong>
                  <span>{{ blogsection[2].postedDate }}</span>
                </div>
              </div>
              <div class="news-contents mb-4">
                <span class="post-meta-2">{{ blogsection[2].subject }}</span>
                <h3><a href="#">{{ blogsection[2].comment }}</a></h3>
              </div>
              <p class="mb-0">
                <a href="#" class="read-more-arrow">
                  <svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
</div>

<!------Form section-->
   <div class="untree_co-section" id="contact-section">
      <div class="container">
        <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
          <div class="col-12 text-center">
            <h2 class="heading">{{ contactus.sectionTittle }}</h2>
            <p>{{ contactus.sectionIntro }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <form class="contact-form" data-aos="fade-up" data-aos-delay="100">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label class="" for="fname">First name</label>
                    <input type="text" class="form-control" id="fname" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label class="" for="lname">Last name</label>
                    <input type="text" class="form-control" id="lname" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="" for="email">Email address</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label class="" for="message">Message</label>
                <textarea name="" class="form-control" id="message" cols="30"  rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-primary"> Send Message </button>
            </form>
          </div>
          <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
            <h3 class="h5 mb-4">Contact Info</h3>
            <address class="text-black d-flex"><span class="mt-1 icon-room mr-2"></span><span> {{ contactus.address }}</span>
            </address>
            <ul class="list-unstyled ul-links mb-4">
              <li>
                <a href="tel://11234567890" class="d-flex"
                  ><span class="mt-1 icon-phone mr-2"></span><span>{{ contactus.phone1 }}</span></a>
              </li>
              <li>
                <a href="tel://11234567890" class="d-flex">
                  <span class="mt-1 icon-phone mr-2"></span><span>{{ contactus.phone }} </span></a>
              </li>
              <li>
                <a :href="contactus.email" class="d-flex"><span class="mt-1 icon-envelope mr-2"></span>
                  <span><span class="__cf_email__"  data-cfemail="3f565159507f52465b50525e5651115c5052">[email&#160;protected]</span></span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="d-flex"><span class="mt-1 icon-globe mr-2"></span><span>{{ contactus.websiteLink }}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
   </div>
<!----Footer -->
    <!-----Footer section ----->
    <div class="site-footer">
      <div class="footer-dots"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>{{ footer[0].widgetTittle }}<span class="text-primary">.</span></h3>
              <p> {{ footer[0].widgetInfo }} </p>
            </div>
            <div class="widget">
              <h3>Connect</h3>
              <ul class="list-unstyled social">
                <li>
                  <a href="#"><span class="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-pinterest"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-dribbble"></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 ml-auto">
            <div class="widget">
              <h3>Projects</h3>
              <ul class="list-unstyled float-left links">
                <li><a :href="footer[1].widgetInfo[0].link">{{ footer[1].widgetInfo[0].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[1].link">{{ footer[1].widgetInfo[1].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[2].link">{{ footer[1].widgetInfo[2].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[3].link">{{ footer[1].widgetInfo[3].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[4].link">{{ footer[1].widgetInfo[4].projectName}}</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="widget">
              <h3>Services</h3>
              <ul class="list-unstyled float-left links">
                <li><a :href="footer[1].widgetInfo[0].link">{{ footer[1].widgetInfo[0].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[1].link">{{ footer[1].widgetInfo[1].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[2].link">{{ footer[1].widgetInfo[2].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[3].link">{{ footer[1].widgetInfo[3].projectName}}</a></li>
                <li><a :href="footer[1].widgetInfo[4].link">{{ footer[1].widgetInfo[4].projectName}}</a></li>     
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul class="list-unstyled links mb-4">
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li>
                  <a
                    href="https://preview.colorlib.com/cdn-cgi/l/email-protection#0e676068614e63776a61636f6760206d6163"
                    ><span
                      class="__cf_email__"
                      data-cfemail="e28b8c848da28f9b868d8f838b8ccc818d8f"
                      >[email&#160;protected]</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <p>
              Copyright &copy;
              <!-- <script
                data-cfasync="false"
                src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
              ></script>
              <script>
                document.write(new Date().getFullYear());
              </script> -->
              All rights reserved | This template is made with
              <i class="icon-heart text-danger" aria-hidden="true"></i> by
              <a href="https://colorlib.com/" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </div>

 
</template>

<style scoped></style>
