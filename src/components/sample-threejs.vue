<template lang="pug">
.sample-threejs
  div(ref="stage")
</template>

<script>
import * as Three from 'three';

export default {
  data: () => ({
    scene: null,
    renderer: null,
    camera: null,
    light: null,
    geometry: null,
    material: null,
    cube: null,
    requestedAnimationFrame: null,
  }),
  created() {
    console.log('created sample-threejs');
    this.scene = new Three.Scene();

    this.renderer = new Three.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.light = new Three.DirectionalLight(0xffffff);
    this.light.position.set(0, 0, 10);

    this.geometry = new Three.BoxGeometry(1, 1, 1);
    this.material = new Three.MeshStandardMaterial({ color: 0x00ff00 });
    this.cube = new Three.Mesh(this.geometry, this.material);

    this.scene.add(this.camera);
    this.scene.add(this.light);
    this.scene.add(this.cube);
  },
  mounted() {
    console.log('mounted sample-threejs');
    this.$refs.stage.appendChild(this.renderer.domElement);
    this.animate();
  },
  destroyed() {
    console.log('destroyed sample-threejs');
    if (!!this.requestedAnimationFrame) {
      cancelAnimationFrame(this.requestedAnimationFrame);
      this.requestedAnimationFrame = null;
    }
    this.scene.remove(this.cube);
    this.geometry.dispose();
    this.material.dispose();
  },
  methods: {
    animate () {
      this.cube.rotation.x += 0.05;
      this.cube.rotation.y += 0.05;
      this.renderer.render(this.scene, this.camera);
      this.requestedAnimationFrame = window.requestAnimationFrame(this.animate);
    },
  },
}
</script>

<style lang="stylus">
</style>
