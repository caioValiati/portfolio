import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Globe.css';

const ThreeScene = (theme) => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(theme.theme === 'light' ? 0xECF2FF : 0x000000);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    const currentCanvas = Array.prototype.slice.call(containerRef.current.children)
    currentCanvas.map((e) => containerRef.current.removeChild(e))

    containerRef.current.appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry(15, 20, 10);
    var material = new THREE.MeshBasicMaterial({
      color: theme.theme === 'light' ? 0x000000 : 0xffffff,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 25;

    function animate() {
      mesh.rotation.y += 0.0005;
      mesh.rotation.x += 0.000125;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();


    return () => {
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={containerRef} id='globe-container' />;
};

export default ThreeScene;
