<template>
  <div id="app">
    <!--header-->
    <div class="section">
      <div id="header">
        <div class="uk-cover-background uk-position-relative" style="height: inherit">
          <div id="particles-container"></div>
          <div class="uk-position-cover uk-flex uk-flex-bottom uk-flex-space-between">
            <div class="uk-margin-left">
              <h1 class="uk-h2 uk-margin-remove uk-hidden-small"><span style="color: #B84543">crwgregory</span>.github.io</h1>
              <h1 class="uk-h3 uk-margin-remove uk-visible-small">crwgregory.github.io</h1>
            </div>
            <!--<div class="uk-margin-right">-->
              <!--<ul class="uk-subnav uk-subnav-line uk-margin-remove uk-hidden-small">-->
                <!--<li v-for="link in links"><a class="uk-h3" :href="'#' + link">{{ link }}</a></li>-->
              <!--</ul>-->
              <!--<ul class="uk-subnav uk-subnav-line uk-margin-remove uk-visible-small">-->
                <!--<li v-for="link in links"><a class="" :href="'#' + link">{{ link }}</a></li>-->
              <!--</ul>-->
            <!--</div>-->
          </div>
        </div>
      </div>
      <div class="fit uk-flex uk-flex-bottom uk-flex-space-around">
        <div class="cr-padding uk-panel uk-text-center uk-width-1-2">
          <div id="about" class="uk-panel-title">
            <span class="uk-h1">
              Hi there! I'm Chris.
            </span>
          </div>
          <p class="uk-h2">I design Software & Web Applications.</p>
          <a href="https://github.com/crwgregory" class="uk-icon-button uk-icon-github" target="_blank"></a>
          <a href="https://www.linkedin.com/in/crwgregory" class="uk-icon-button uk-icon-linkedin" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          'about',
          'work',
          'contact'
        ]
      }
    },
    ready () {
      /* eslint-disable */
      particlesJS.load('particles-container', '/static/particles.json', function () {
        console.log('particles loaded')
      })
      /* eslint-enable */
      this.fitSections()
    },
    methods: {
      fitSections () {
        var sections = $('.section')
        $.each(sections, function (i, section) {
          var children = $(section).children()

          var sectionHeight = $(section).outerHeight()
          var usedSpace = 0

          $.each(children, function (childIndex, child) {
            if (!$(child).hasClass('fit')) {
              usedSpace += $(child).outerHeight()
            }
          })
          $(children).closest('.fit').css('height', (sectionHeight - usedSpace) + 'px')
        })
      }
    }
  }
</script>

<style>
  @import '../bower_components/uikit/css/uikit.css';
  html {
    height: 100%;
  }
  path {
    fill: transparent;
    stroke: #000;
    stroke-width: 2px;
  }
  #app {
    /*margin: 0 25px*/
  }
  #header {
    border-bottom: black 1px solid;
    height: 7vh

  }
  #particles-container{
    height: 100%;
  }
  .section{
    height: 100vh
  }
  .fit{
    padding-bottom: 10px
  }
  .cr-padding{
    padding: 20px
  }
</style>
