<template lang="pug">
.sample-threejs
  div(ref="stage")
</template>

<script>
import * as Three from 'three';

export default {
  data: () => ({
    scene: scene,
    renderer: renderer,
    camera: camera,
    light: light,
    cube: cube,
  }),
  created() {
    this.scene = new Three.Scene();

    this.renderer = new Three.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.light = new Three.DirectionalLight(0xffffff);
    this.light.position.set(0, 0, 10);

    const geometry = new Three.BoxGeometry(1, 1, 1);
    const material = new Three.MeshStandardMaterial({ color: 0x00ff00 });
    this.cube = new Three.Mesh(geometry, material);

    this.scene.add(this.camera);
    this.scene.add(this.light);
    this.scene.add(this.cube);
  },
  mounted() {
    this.$refs.stage.appendChild(this.renderer.domElement);
    this.animate();
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += 0.05;
      this.cube.rotation.y += 0.05;

      this.renderer.render(this.scene, this.camera);
    },
  },
}
</script>

<style lang="stylus">
</style>
