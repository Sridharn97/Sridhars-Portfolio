import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroCoreSceneProps {
  onHoverStateChange?: (hovered: boolean) => void;
}

export const HeroCoreScene: React.FC<HeroCoreSceneProps> = ({ onHoverStateChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // -------------------------------------------------------------
    // LIGHTING SYSTEM
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x00f0ff, 3.5);
    mainLight.position.set(5, 5, 7);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const secondaryLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    secondaryLight.position.set(-5, -4, 4);
    scene.add(secondaryLight);

    const corePointLight = new THREE.PointLight(0x00f0ff, 4, 10);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // -------------------------------------------------------------
    // CENTRAL 3D DEVELOPER CORE OBJECTS
    // -------------------------------------------------------------
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Solid Energy Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.0, 3);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0a101d,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x00e5ff,
      emissiveIntensity: 0.35,
      flatShading: true,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // 2. Outer Faceted Wireframe Lattice Frame
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.2,
    });
    const outerLattice = new THREE.Mesh(outerGeo, wireMat);
    coreGroup.add(outerLattice);

    // 3. Concentric Orbital Rings
    const ringGroup = new THREE.Group();
    coreGroup.add(ringGroup);

    const createRing = (radius: number, tube: number, colorHex: number, rx: number, ry: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.2,
        metalness: 0.85,
        emissive: colorHex,
        emissiveIntensity: 0.25,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rx;
      ring.rotation.y = ry;
      return ring;
    };

    const ring1 = createRing(2.3, 0.02, 0x00f0ff, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(2.8, 0.015, 0x8b5cf6, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(3.3, 0.01, 0x3b82f6, Math.PI / 2, 0);
    ringGroup.add(ring1, ring2, ring3);

    // 4. Orbiting Nodes & Tech Satellites
    const nodesGroup = new THREE.Group();
    coreGroup.add(nodesGroup);

    const nodeGeometries = [
      new THREE.OctahedronGeometry(0.2, 0),
      new THREE.BoxGeometry(0.28, 0.28, 0.28),
      new THREE.TetrahedronGeometry(0.22, 0),
      new THREE.DodecahedronGeometry(0.22, 0),
    ];

    const nodesData: { mesh: THREE.Mesh; angle: number; radius: number; speed: number; yOffset: number }[] = [];

    for (let i = 0; i < 8; i++) {
      const geo = nodeGeometries[i % nodeGeometries.length];
      const colorHex = i % 2 === 0 ? 0x00f0ff : 0x8b5cf6;
      const mat = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.2,
        metalness: 0.8,
        emissive: colorHex,
        emissiveIntensity: 0.4,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const radius = 2.4 + (i % 3) * 0.5;
      const angle = (i / 8) * Math.PI * 2;
      const yOffset = (Math.sin(i) * 0.8);

      mesh.position.set(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius);
      nodesGroup.add(mesh);

      nodesData.push({
        mesh,
        angle,
        radius,
        speed: 0.008 + (i % 3) * 0.004,
        yOffset,
      });
    }

    // 5. Inter-node Connecting Vector Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
    });
    const linesGeometry = new THREE.BufferGeometry();
    const linesPositions = new Float32Array(8 * 2 * 3); // 8 nodes connected to center
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linesPositions, 3));
    const connectingLines = new THREE.LineSegments(linesGeometry, linesMaterial);
    coreGroup.add(connectingLines);

    // 6. 3D Particles Cloud
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 16;
      particlePos[i + 1] = (Math.random() - 0.5) * 16;
      particlePos[i + 2] = (Math.random() - 0.5) * 16;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // -------------------------------------------------------------
    // INTERACTION & ANIMATION LOOP
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;

      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth Mouse Rotation Interpolation
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;

      // Self-rotation animations
      innerCore.rotation.y += 0.005;
      innerCore.rotation.x += 0.003;

      outerLattice.rotation.y -= 0.003;
      outerLattice.rotation.z += 0.002;

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.008;
      ring3.rotation.y += 0.005;

      particles.rotation.y += 0.0005;

      // Update Node positions & vector line positions
      const positions = linesGeometry.attributes.position.array as Float32Array;

      nodesData.forEach((node, idx) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = node.yOffset + Math.sin(node.angle * 2) * 0.3;

        node.mesh.rotation.x += 0.02;
        node.mesh.rotation.y += 0.02;

        // Line from core center (0,0,0) to node position
        const pIdx = idx * 6;
        positions[pIdx] = 0;
        positions[pIdx + 1] = 0;
        positions[pIdx + 2] = 0;

        positions[pIdx + 3] = node.mesh.position.x;
        positions[pIdx + 4] = node.mesh.position.y;
        positions[pIdx + 5] = node.mesh.position.z;
      });

      linesGeometry.attributes.position.needsUpdate = true;

      // Pulse Core Intensity
      const time = Date.now() * 0.002;
      corePointLight.intensity = 3.5 + Math.sin(time) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
    />
  );
};
