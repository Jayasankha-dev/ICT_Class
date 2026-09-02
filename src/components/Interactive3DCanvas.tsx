import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Play } from 'lucide-react';

export const Interactive3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLetter, setActiveLetter] = useState<'A' | 'B' | 'C'>('A');
  const [isSpinningFast, setIsSpinningFast] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // transparent background to blend into container

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff4d6, 1.8);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x2196f3, 1.2);
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Materials
    const createBlockMaterial = (color: number, letter: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Block background
        ctx.fillStyle = '#' + color.toString(16).padStart(6, '0');
        ctx.fillRect(0, 0, 256, 256);
        // Bevel border
        ctx.lineWidth = 16;
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(8, 8, 240, 240);
        // Letter
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 140px Fredoka, Quicksand, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(letter, 128, 134);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.25,
        metalness: 0.1,
      });
    };

    const geometry = new THREE.BoxGeometry(1.35, 1.35, 1.35);

    // Block A (Sunny Yellow)
    const matA = createBlockMaterial(0xf9e534, 'A');
    const blockA = new THREE.Mesh(geometry, matA);
    blockA.position.set(-1.8, 0.4, 0);
    blockA.rotation.set(0.2, 0.4, 0);
    group.add(blockA);

    // Block B (Sky Blue)
    const matB = createBlockMaterial(0x0061a4, 'B');
    const blockB = new THREE.Mesh(geometry, matB);
    blockB.position.set(0, -0.2, 0.5);
    blockB.rotation.set(-0.3, -0.3, 0.1);
    group.add(blockB);

    // Block C (Coral Red)
    const matC = createBlockMaterial(0xff5748, 'C');
    const blockC = new THREE.Mesh(geometry, matC);
    blockC.position.set(1.8, 0.3, -0.2);
    blockC.rotation.set(0.15, -0.4, 0.2);
    group.add(blockC);

    // Add floating stars around the blocks
    const starShape = new THREE.Shape();
    const outerRadius = 0.3;
    const innerRadius = 0.14;
    const numPoints = 5;
    for (let i = 0; i < numPoints * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / numPoints;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) starShape.moveTo(x, y);
      else starShape.lineTo(x, y);
    }
    starShape.closePath();

    const starExtrudeSettings = { depth: 0.1, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.04, bevelThickness: 0.04 };
    const starGeometry = new THREE.ExtrudeGeometry(starShape, starExtrudeSettings);
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffd54f, roughness: 0.2, metalness: 0.5 });

    const stars: THREE.Mesh[] = [];
    const starPositions = [
      [-2.4, 1.8, -0.5],
      [2.2, 1.6, 0.2],
      [-0.4, 2.0, -1.0],
      [1.3, -1.6, 0.8],
      [-1.9, -1.4, 0.5]
    ];

    starPositions.forEach(([x, y, z]) => {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(x, y, z);
      star.scale.set(0.8, 0.8, 0.8);
      group.add(star);
      stars.push(star);
    });

    // Interactive pointer handling
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onPointerDown);
    domElement.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    domElement.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating bobbing
      blockA.position.y = 0.4 + Math.sin(elapsedTime * 1.8) * 0.12;
      blockB.position.y = -0.2 + Math.sin(elapsedTime * 1.8 + 1.2) * 0.14;
      blockC.position.y = 0.3 + Math.sin(elapsedTime * 1.8 + 2.4) * 0.12;

      // Gentle rotation
      blockA.rotation.y += 0.008;
      blockB.rotation.y -= 0.006;
      blockC.rotation.y += 0.007;

      // Animate stars
      stars.forEach((star, index) => {
        star.rotation.z += 0.015 * (index % 2 === 0 ? 1 : -1);
        star.position.y += Math.sin(elapsedTime * 2 + index) * 0.002;
      });

      // Smooth inertia rotation from dragging
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.08;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.08;

      // Auto gentle turntable when not dragging
      if (!isDragging) {
        targetRotationY += 0.003;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElement.removeEventListener('mousedown', onPointerDown);
      domElement.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElement.removeEventListener('touchstart', onPointerDown);
      domElement.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div id="interactive-3d-learning-canvas" className="relative w-full h-[320px] sm:h-[380px] bg-gradient-to-b from-[#f5f4e8] to-[#fbfaee] rounded-2xl border-2 border-[#0061a4]/20 overflow-hidden flex flex-col items-center justify-center shadow-inner group">
      {/* 3D Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Interactive Badge & Controls */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#0061a4]/20 flex items-center gap-1.5 shadow-sm text-xs font-semibold text-[#0061a4] pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-[#f9e534] fill-[#f9e534]" />
        <span>Interactive 3D Learning Blocks</span>
      </div>

      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 text-[11px] text-gray-500 font-medium flex items-center gap-1 shadow-sm pointer-events-none">
        <RotateCw className="w-3 h-3 text-[#0061a4]" />
        <span>Drag & Rotate 3D Blocks</span>
      </div>
    </div>
  );
};
