import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, ExternalLink, Zap, Layers, Server, Code, Database, Shield } from 'lucide-react';

interface TechNodeData {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'Core CS' | 'Tools';
  proficiency: number;
  colorHex: number;
  colorStr: string;
  icon: string;
  relatedIds: string[];
}

const techNodesList: TechNodeData[] = [
  // Center Node
  { id: 'core', name: 'DEV CORE', category: 'Core CS', proficiency: 100, colorHex: 0x00f0ff, colorStr: '#00f0ff', icon: 'CPU', relatedIds: ['react', 'next', 'node', 'mongo', 'java', 'python'] },
  
  // Frontend
  { id: 'react', name: 'React', category: 'Frontend', proficiency: 88, colorHex: 0x00f0ff, colorStr: '#00f0ff', icon: 'Re', relatedIds: ['next', 'js', 'html'] },
  { id: 'next', name: 'Next.js', category: 'Frontend', proficiency: 75, colorHex: 0x38bdf8, colorStr: '#38bdf8', icon: 'Nx', relatedIds: ['react', 'node', 'js'] },
  { id: 'js', name: 'JavaScript', category: 'Frontend', proficiency: 85, colorHex: 0xf59e0b, colorStr: '#f59e0b', icon: 'Js', relatedIds: ['react', 'next', 'node'] },
  { id: 'html', name: 'HTML & CSS', category: 'Frontend', proficiency: 90, colorHex: 0xf97316, colorStr: '#f97316', icon: 'Hc', relatedIds: ['react'] },
  
  // Backend
  { id: 'node', name: 'Node.js', category: 'Backend', proficiency: 78, colorHex: 0x22c55e, colorStr: '#22c55e', icon: 'No', relatedIds: ['express', 'mongo', 'next'] },
  { id: 'express', name: 'Express.js', category: 'Backend', proficiency: 75, colorHex: 0x4ade80, colorStr: '#4ade80', icon: 'Ex', relatedIds: ['node', 'mongo'] },
  { id: 'mongo', name: 'MongoDB', category: 'Backend', proficiency: 72, colorHex: 0x10b981, colorStr: '#10b981', icon: 'Mg', relatedIds: ['node', 'express', 'mysql'] },
  { id: 'mysql', name: 'MySQL', category: 'Backend', proficiency: 70, colorHex: 0x06b6d4, colorStr: '#06b6d4', icon: 'My', relatedIds: ['mongo', 'dbms'] },
  
  // Languages
  { id: 'java', name: 'Java', category: 'Languages', proficiency: 85, colorHex: 0xef4444, colorStr: '#ef4444', icon: 'Jv', relatedIds: ['dsa', 'cpp'] },
  { id: 'python', name: 'Python', category: 'Languages', proficiency: 80, colorHex: 0xeab308, colorStr: '#eab308', icon: 'Py', relatedIds: ['dsa', 'java'] },
  { id: 'cpp', name: 'C++', category: 'Languages', proficiency: 68, colorHex: 0xa855f7, colorStr: '#a855f7', icon: 'C+', relatedIds: ['java', 'dsa'] },
  
  // Core CS
  { id: 'dsa', name: 'Data Structures', category: 'Core CS', proficiency: 82, colorHex: 0x8b5cf6, colorStr: '#8b5cf6', icon: 'DS', relatedIds: ['java', 'python', 'cpp', 'system'] },
  { id: 'dbms', name: 'DBMS', category: 'Core CS', proficiency: 75, colorHex: 0xc084fc, colorStr: '#c084fc', icon: 'Db', relatedIds: ['mysql', 'mongo'] },
  { id: 'system', name: 'System Design', category: 'Core CS', proficiency: 65, colorHex: 0xd8b4fe, colorStr: '#d8b4fe', icon: 'SD', relatedIds: ['dsa', 'node'] },
  
  // Tools
  { id: 'git', name: 'Git & GitHub', category: 'Tools', proficiency: 88, colorHex: 0xf43f5e, colorStr: '#f43f5e', icon: 'Gt', relatedIds: ['vscode', 'cursor'] },
  { id: 'vscode', name: 'VS Code', category: 'Tools', proficiency: 92, colorHex: 0xec4899, colorStr: '#ec4899', icon: 'Vs', relatedIds: ['git', 'cursor'] },
  { id: 'cursor', name: 'Cursor IDE', category: 'Tools', proficiency: 75, colorHex: 0xf472b6, colorStr: '#f472b6', icon: 'Cu', relatedIds: ['vscode', 'git'] },
];

export const TechUniverseCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedTech, setSelectedTech] = useState<TechNodeData | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const pLight = new THREE.PointLight(0x00f0ff, 3, 20);
    pLight.position.set(0, 0, 5);
    scene.add(pLight);

    // 3. Central Node & Satellite Orbits
    const universeGroup = new THREE.Group();
    scene.add(universeGroup);

    const nodesMeshMap = new Map<string, THREE.Mesh>();
    const nodePositionMap = new Map<string, THREE.Vector3>();

    // Position setup in 3D sphere
    techNodesList.forEach((tech, index) => {
      const vec = new THREE.Vector3();
      if (tech.id === 'core') {
        vec.set(0, 0, 0);
      } else {
        const phi = Math.acos(-1 + (2 * index) / techNodesList.length);
        const theta = Math.sqrt(techNodesList.length * Math.PI) * phi;
        const radius = 3.5 + (index % 3) * 0.4;
        vec.setFromSphericalCoords(radius, phi, theta);
      }
      nodePositionMap.set(tech.id, vec);

      // Geometry & Material
      const size = tech.id === 'core' ? 0.6 : 0.32;
      const geo = tech.id === 'core' ? new THREE.IcosahedronGeometry(size, 2) : new THREE.SphereGeometry(size, 24, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: tech.colorHex,
        emissive: tech.colorHex,
        emissiveIntensity: tech.id === 'core' ? 0.6 : 0.3,
        roughness: 0.2,
        metalness: 0.8,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(vec);
      mesh.userData = { techData: tech, baseScale: 1, baseVec: vec.clone() };

      // Outer Glow Ring for mesh
      const ringGeo = new THREE.RingGeometry(size * 1.3, size * 1.5, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: tech.colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      mesh.add(ring);

      nodesMeshMap.set(tech.id, mesh);
      universeGroup.add(mesh);
    });

    // 4. Dynamic Connecting Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
    });
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    // Connect core to all, and related to each other
    techNodesList.forEach((tech) => {
      const posA = nodePositionMap.get(tech.id);
      if (!posA) return;

      tech.relatedIds.forEach((relId) => {
        const posB = nodePositionMap.get(relId);
        if (posB) {
          linePositions.push(posA.x, posA.y, posA.z);
          linePositions.push(posB.x, posB.y, posB.z);
        }
      });
    });

    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    universeGroup.add(linesMesh);

    // Raycasting & Mouse Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouse.x = (x / rect.width) * 2 - 1;
      mouse.y = -(y / rect.height) * 2 + 1;

      targetRotY = mouse.x * 0.5;
      targetRotX = -mouse.y * 0.5;

      // Raycast to find hovered tech node
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(Array.from(nodesMeshMap.values()));

      if (intersects.length > 0) {
        const hoveredMesh = intersects[0].object as THREE.Mesh;
        const techData = hoveredMesh.userData.techData as TechNodeData;
        setSelectedTech(techData);

        // Scale up hovered mesh
        nodesMeshMap.forEach((m) => {
          if (m === hoveredMesh) {
            m.scale.set(1.5, 1.5, 1.5);
          } else {
            m.scale.set(0.9, 0.9, 0.9);
          }
        });
      } else {
        nodesMeshMap.forEach((m) => m.scale.set(1, 1, 1));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      universeGroup.rotation.y += 0.003;
      universeGroup.rotation.y += (targetRotY - universeGroup.rotation.y) * 0.03;
      universeGroup.rotation.x += (targetRotX - universeGroup.rotation.x) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full absolute inset-0 cursor-crosshair" />

      {/* Hover Information Inspector HUD (Solid Dimensional Card) */}
      <div className="absolute bottom-6 right-6 z-20 w-80 pointer-events-none">
        <AnimatePresence mode="wait">
          {selectedTech ? (
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="solid-card p-5 border border-primary/40 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                  {selectedTech.category}
                </span>
                <span className="text-xs font-mono text-muted-foreground">NODE // {selectedTech.id.toUpperCase()}</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg font-mono border"
                  style={{ borderColor: selectedTech.colorStr, color: selectedTech.colorStr, backgroundColor: `${selectedTech.colorStr}15` }}
                >
                  {selectedTech.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{selectedTech.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">Proficiency Score: {selectedTech.proficiency}%</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/10 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedTech.proficiency}%` }}
                  transition={{ duration: 0.4 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: selectedTech.colorStr }}
                />
              </div>

              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>SYSTEM STATUS: ACTIVE</span>
                <span style={{ color: selectedTech.colorStr }}>● CONNECTED</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default-hud"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="solid-card p-4 text-center border border-white/10 opacity-70"
            >
              <p className="text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
                <Zap size={14} className="text-primary animate-pulse" />
                HOVER ANY 3D NODE TO INSPECT PROPERTIES
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
