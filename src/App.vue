<template>
  <div id="app">
    <!--header-->
    <div class="section">
      <div id="header">
        <div class="uk-cover-background uk-position-relative" style="height: inherit">
          <div id="particles-container"></div>
          <div class="uk-position-cover uk-flex uk-flex-bottom uk-flex-space-between">
            <div class="uk-margin-left">
              <h1 class="uk-h2 uk-margin-remove uk-hidden-small"><span style="color: #17B6F2">crwgregory</span>.github.io</h1>
              <h1 class="uk-h3 uk-margin-remove uk-visible-small">crwgregory.github.io</h1>
            </div>
            <div class="uk-margin-right">
              <ul class="uk-subnav uk-subnav-line uk-margin-remove uk-hidden-small">
                <li v-for="link in links"><a class="uk-h3" :href="'#' + link">{{ link }}</a></li>
              </ul>
              <ul class="uk-subnav uk-subnav-line uk-margin-remove uk-visible-small">
                <li v-for="link in links"><a class="" :href="'#' + link">{{ link }}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="fit uk-flex uk-flex-bottom">
        <div class="cr-padding uk-panel uk-text-center">
          <div id="about" class="uk-panel-title">
            <span class="uk-h1">
              About
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, pri in populo deleniti reprimique, mei cu natum velit, vix ea legimus assentior suscipiantur. Nam no justo partem signiferumque, integre legendos ei ius. Malorum diceret vim id, iudico euripidis ea mel. Ne mel causae pericula, dolorem consectetuer no usu. Te eam suas eripuit epicurei, ea prompta praesent vix, illud platonem et usu.
          </p>
        </div>
      </div>
    </div>
    <div class="section">

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
  html {
    height: 100%;
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
