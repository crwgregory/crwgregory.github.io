<template>
  <div class="geometry">
    <div id="cube-container" style="width: 640px; height: 480px"></div>
  </div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  EdgesGeometry,
  MeshStandardMaterial,
  LineSegments,
  TetrahedronGeometry,
  LineBasicMaterial,
} from "three";
export default {
  name: "RotatingGeometryComponent",
  props: {
    msg: String,
  },
  mounted() {
    this.renderGeometry();
  },
  methods: {
    renderGeometry() {
      const container = document.getElementById("cube-container");
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const scene = new Scene();
      const camera = new PerspectiveCamera(
        25,
        containerWidth / containerHeight,
        0.1,
        1000
      );

      const renderer = new WebGLRenderer();
      renderer.setSize(containerWidth, containerHeight);
      renderer.setClearColor(0xffffff);
      container.appendChild(renderer.domElement);

      // Create a wireframe cube
      const cubeGeometry = new BoxGeometry(1, 1, 1);
      const cubeEdges = new EdgesGeometry(cubeGeometry);
      const cubeMaterial = new MeshStandardMaterial({ color: 0x12076355 });
      const cube = new LineSegments(cubeEdges, cubeMaterial);

      // Off-axis rotation
      cube.rotation.x = Math.PI / 4;
      cube.rotation.y = Math.PI / 4;

      // Create a wireframe tetrahedron
      const tetrahedronGeometry = new TetrahedronGeometry(0.86);
      const tetrahedronEdges = new EdgesGeometry(tetrahedronGeometry);
      const tetrahedronMaterial = new LineBasicMaterial({
        color: 0xff0000,
      });
      const tetrahedron = new LineSegments(
        tetrahedronEdges,
        tetrahedronMaterial
      );

      tetrahedron.rotation.x = Math.PI / 4;
      tetrahedron.rotation.y = Math.PI / 4;

      // Add the cube and tetrahedron to the scene
      scene.add(cube);
      scene.add(tetrahedron);
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
