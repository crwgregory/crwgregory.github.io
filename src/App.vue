<template>
  <div id="app">
    <!--header-->
    <div class="section">
      <div id="header">
        <div
          class="uk-cover-background uk-position-relative"
          style="height: inherit"
        >
          <div id="particles-container"></div>
          <div
            class="uk-position-cover uk-flex uk-flex-bottom uk-flex-space-between"
          >
            <div class="uk-margin-left">
              <h1 class="uk-h2 uk-margin-remove uk-hidden-small">
                <span style="color: #b84543">crwgregory</span>.github.io
              </h1>
              <h1 class="uk-h3 uk-margin-remove uk-visible-small">
                crwgregory.github.io
              </h1>
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
      <div class="uk-flex uk-flex-space-around">
        <div id="cube-container" style="width: 640px; height: 480px"></div>
        <!-- <div id="cube-container" style="width: 1280px; height: 960px"></div> -->
      </div>
      <div class="fit uk-flex uk-flex-bottom uk-flex-space-around">
        <div class="cr-padding uk-panel uk-text-center uk-width-1-2">
          <div id="about" class="uk-panel-title">
            <span class="uk-h1"> Hi there! I'm Chris. </span>
          </div>
          <p class="uk-h2">I design Software & Web Applications.</p>
          <a
            href="https://github.com/crwgregory"
            class="uk-icon-button uk-icon-github"
            target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/in/crwgregory"
            class="uk-icon-button uk-icon-linkedin"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ["about", "work", "contact"],
    };
  },
  ready() {
    /* eslint-disable */
    particlesJS.load(
      "particles-container",
      "/static/particles.json",
      function () {
        console.log("particles loaded");
      }
    );
    /* eslint-enable */
    this.renderCube2();
    this.fitSections();
  },
  methods: {
    fitSections() {
      var sections = $(".section");
      $.each(sections, function (i, section) {
        var children = $(section).children();

        var sectionHeight = $(section).outerHeight();
        var usedSpace = 0;

        $.each(children, function (childIndex, child) {
          if (!$(child).hasClass("fit")) {
            usedSpace += $(child).outerHeight();
          }
        });
        $(children)
          .closest(".fit")
          .css("height", sectionHeight - usedSpace + "px");
      });
    },
    renderCube2() {
      const container = document.getElementById("cube-container");
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        25,
        containerWidth / containerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(containerWidth, containerHeight);
      renderer.setClearColor(0xffffff);
      renderer.shadowMap.enabled = true; // Enable shadow mapping in the renderer
      container.appendChild(renderer.domElement);

      // Create a wireframe cube
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
      const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
      const cube = new THREE.LineSegments(cubeEdges, cubeMaterial);

      // Off-axis rotation
      cube.rotation.x = Math.PI / 4;
      cube.rotation.y = Math.PI / 4;

      // Create a wireframe tetrahedron
      const tetrahedronGeometry = new THREE.TetrahedronGeometry(0.86);
      const tetrahedronEdges = new THREE.EdgesGeometry(tetrahedronGeometry);
      const tetrahedronMaterial = new THREE.LineBasicMaterial({
        color: 0xff0000,
      });
      const tetrahedron = new THREE.LineSegments(
        tetrahedronEdges,
        tetrahedronMaterial
      );

      tetrahedron.rotation.x = Math.PI / 4;
      tetrahedron.rotation.y = Math.PI / 4;

      // Add the cube and tetrahedron to the scene
      scene.add(cube);
      scene.add(tetrahedron);

      // Add a ground plane to receive shadows
      const groundGeometry = new THREE.PlaneGeometry(5, 5);
      const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true; // Configure the ground to receive shadows
      scene.add(ground);

      // Add a light source
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(2, 2, 2);
      light.castShadow = true; // Configure the light to cast shadows
      scene.add(light);

      // Configure the shadow properties
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      light.shadow.camera.near = 0.1;
      light.shadow.camera.far = 100;

      // Position the camera
      camera.position.z = 5;

      // Create the animation loop
      function animate() {
        requestAnimationFrame(animate);

        // Rotate the cube off-axis
        const [min, max] = [0.001, 0.01];
        const rotation = Math.random() * (max - min) + min;
        cube.rotation.x += rotation;
        cube.rotation.y += rotation;
        cube.rotation.z += rotation;
        tetrahedron.rotation.x += rotation;
        tetrahedron.rotation.y += rotation;
        tetrahedron.rotation.z += rotation;

        // Render the scene
        renderer.render(scene, camera);
      }

      // Start the animation loop
      animate();
    },
    getRandomDecimal(min, max) {
      return Math.random() * (max - min) + min;
    },
    renderCube() {
      const container = document.getElementById("cube-container");
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        25,
        containerWidth / containerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(containerWidth, containerHeight);
      renderer.setClearColor(0xffffff);
      container.appendChild(renderer.domElement);

      // Create a wireframe cube
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const edges = new THREE.EdgesGeometry(geometry);
      const material = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
      const cube = new THREE.LineSegments(edges, material);

      // Off-axis rotation
      cube.rotation.x = Math.PI / 4;
      cube.rotation.y = Math.PI / 4;

      // Add the cube to the scene
      scene.add(cube);

      // Position the camera
      camera.position.z = 5;

      // Create the animation loop
      function animate() {
        requestAnimationFrame(animate);

        // Rotate the cube off-axis
        // cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // cube.rotation.z += 0.01;

        // Render the scene
        renderer.render(scene, camera);
      }

      // Start the animation loop
      animate();
    },
  },
};
</script>

<style>
@import "../bower_components/uikit/css/uikit.css";
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
  height: 7vh;
}
#particles-container {
  height: 100%;
}
.section {
  height: 100vh;
}
.fit {
  padding-bottom: 10px;
}
.cr-padding {
  padding: 20px;
}
</style>
