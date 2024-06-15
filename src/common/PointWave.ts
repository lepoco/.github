/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import * as THREE from 'three';

//https://threejs.org/examples/webgl_points_waves.html
export default class PointWave {
  public static mounted: boolean = false;

  private static speedFactor: number = 0.05;

  private static scaleFactor: number = 2;

  private static webglConfiguration: THREE.WebGLRendererParameters = {
    alpha: true,
    antialias: false,
    depth: true,
    //precision: "lowp",
    //powerPreference: "high-performance",
  };

  private static vertexShader: string =
    'attribute float scale; void main() {vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 300.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}';

  private static fragmentShader: string =
    'uniform vec3 color;void main() {if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;gl_FragColor = vec4( color, 1.0 );}';

  private clock: THREE.Clock = new THREE.Clock();
  private delta: number = 0;

  /**
   * FPS count.
   */
  private interval: number = 1 / 60;

  private container: HTMLElement;

  private camera: THREE.PerspectiveCamera;

  private scene: THREE.Scene;

  private renderer: THREE.Renderer;

  private count: number = 0;

  private particles: THREE.Points<
    THREE.BufferGeometry,
    THREE.ShaderMaterial
  > | null = null;

  private windowHalfX: number = window.innerWidth / 2;

  private windowHalfY: number = window.innerHeight / 2;

  private mouseX: number = 85;

  private mouseY: number = -342;

  private Separation: number = 100;

  private AmountX: number = 100;

  private AmountY: number = 30;

  constructor(polygonContainer: Element) {
    this.container = document.createElement('div');
    this.container.classList.add('polygon__presenter');

    //document.body.appendChild(container);
    polygonContainer.prepend(this.container);

    this.camera = new THREE.PerspectiveCamera(
      120,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );

    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.buildParticles();

    this.renderer = new THREE.WebGLRenderer(PointWave.webglConfiguration);
    //this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.container.style.touchAction = 'none';
    this.container.appendChild(this.renderer.domElement);

    PointWave.mounted = true;

    this.runAnimation();
  }

  private buildParticles(): void {
    const numParticles = this.AmountX * this.AmountY;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    let i = 0,
      j = 0;

    for (let ix = 0; ix < this.AmountX; ix++) {
      for (let iy = 0; iy < this.AmountY; iy++) {
        positions[i] =
          ix * this.Separation - (this.AmountX * this.Separation) / 2; // x
        positions[i + 1] = 0; // y
        positions[i + 2] =
          iy * this.Separation - (this.AmountY * this.Separation) / 2; // z

        scales[j] = 1;

        i += 3;
        j++;
      }
    }

    //https://stackoverflow.com/questions/28011525/three-js-transparancy-with-shadermaterial
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xe1e1e1) },
      },
      blending: THREE.NormalBlending,
      depthTest: false,
      transparent: true,
      vertexShader: PointWave.vertexShader,
      fragmentShader: PointWave.fragmentShader,
    });

    //

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  public onWindowResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    //this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public runAnimation(): void {
    const WAVE_INSTANCE = this;
    window.addEventListener('resize', WAVE_INSTANCE.onWindowResize, false);

    function animate() {
      requestAnimationFrame(animate);
      WAVE_INSTANCE.delta += WAVE_INSTANCE.clock.getDelta();

      if (WAVE_INSTANCE.delta > WAVE_INSTANCE.interval) {
        // The draw or time dependent code are here
        WAVE_INSTANCE.render();

        WAVE_INSTANCE.delta = WAVE_INSTANCE.delta % WAVE_INSTANCE.interval;
      }
    }

    animate();
  }

  public render() {
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    if (this.particles === null) return;

    const positions = this.particles.geometry.attributes.position
      .array as number[];
    const scales = this.particles.geometry.attributes.scale.array as number[];

    let i = 0,
      j = 0;

    for (let ix = 0; ix < this.AmountX; ix++) {
      for (let iy = 0; iy < this.AmountY; iy++) {
        positions[i + 1] =
          Math.sin((ix + this.count) * 0.3) * 50 +
          Math.sin((iy + this.count) * 0.5) * 50;

        scales[j] =
          (Math.sin((ix + this.count) * 0.3) + 1) * PointWave.scaleFactor +
          (Math.sin((iy + this.count) * 0.5) + 1) * PointWave.scaleFactor;

        i += 3;
        j++;
      }
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
    this.particles.geometry.attributes.scale.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);

    this.count += PointWave.speedFactor;
  }
}
