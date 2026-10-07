import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3DGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 6, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 1. Perspective 3D Grid Floor
    const gridHelper = new THREE.GridHelper(60, 60, 0x00f0ff, 0x1e293b);
    gridHelper.position.y = -3;
    scene.add(gridHelper);

    // 2. Secondary Top Grid
    const topGrid = new THREE.GridHelper(60, 40, 0x8b5cf6, 0x0f172a);
    topGrid.position.y = 12;
    scene.add(topGrid);

    // 3. Floating Geometric Wireframe Structures in Deep Space
    const cubesGroup = new THREE.Group();
    scene.add(cubesGroup);

    const cubeGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    for (let i = 0; i < 15; i++) {
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 30
      );
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      cubesGroup.add(cube);
    }

    // 4. Subtle Particles
    const count = 300;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pPos[i] = (Math.random() - 0.5) * 40;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.35,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Mouse Parallax & Scroll Reaction
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      gridHelper.position.z = (scrollY * 0.005) % 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (6 - targetY - camera.position.y) * 0.02;

      gridHelper.position.z += 0.015;
      if (gridHelper.position.z > 1) gridHelper.position.z = 0;

      topGrid.position.z += 0.01;
      if (topGrid.position.z > 1.5) topGrid.position.z = 0;

      cubesGroup.children.forEach((c) => {
        c.rotation.x += 0.002;
        c.rotation.y += 0.003;
      });

      points.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-30 contain-strict overflow-hidden"
    />
  );
};
