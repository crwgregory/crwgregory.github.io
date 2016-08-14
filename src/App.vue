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
      <div id="cube" class="uk-width-1-1"></div>
      <!--<div class="uk-flex uk-flex-bottom uk-flex-space-around">-->
        <!--<div class="cr-padding uk-panel uk-text-center">-->
          <!--<div id="cube"></div>-->
        <!--</div>-->
      <!--</div>-->
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
      this.drawCube()
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
      },
      drawCube () {
        /* eslint-disable */
        var width = 800
        var height = 500
        var colorSpeed = .08 / 1000
        var velocity = [.020, .001]
        var t0 = Date.now()
        var projection = d3.geoOrthographic().scale(height / 2 - 120)
        var svg = d3.select("#cube").append("svg")
            .attr("width", width)
            .attr("height", height);

        var face = svg.selectAll("path")
            .data(getFaces)
            .enter().append("path")
            .each(function(d) {
              d.polygon = d.map(projection);
            });


        function getFaces() {

          var a = 55;
          var b = 125;

          return [
            [[0,  -a], [-a,  0], [0,  a], [a, 0]],

            [[0,  -b], [-b,  0], [0,  b], [b, 0]],

            [[0,  -b], [-b,  0], [-a,  0], [0, -a]],

            [[-b, 0], [0,  b], [0, a], [-a,  0]],

            [[0, b], [b,  0], [a, 0], [0,  a]],

            [[b, 0], [0,  -b], [0, -a], [a,  0]]
          ];
        }

        var color = d3.custom_cubehelix()
            .domain([0, .5, 1])
            .range([
              d3.hsl(-100, 0.75, 0.35),
              d3.hsl(  80, 1.50, 0.80),
              d3.hsl( 260, 0.75, 0.35)
            ]);

        d3.timer(function(elapsed) {
          var time = Date.now() - t0;
          projection.rotate([time * velocity[0], time * velocity[1]]);

          svg.selectAll('path').style("stroke", function(t) {
            var x = (elapsed * colorSpeed) % 1;
            return color(x);
          });

          face.each(function(d) { d.forEach(function(p, i) { d.polygon[i] = projection(p); }); })
              .attr("d", function(d) { return "M" + d.polygon.join("L") + "Z"; });
        });
        /* eslint-enable */
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
