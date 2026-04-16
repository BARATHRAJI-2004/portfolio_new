import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.position.z = 5;

        // === Particle System ===
        const particleCount = 1500;
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const cyan = new THREE.Color(0x00f0ff);
        const purple = new THREE.Color(0xa855f7);
        const pink = new THREE.Color(0xec4899);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 20;

            const colorChoice = Math.random();
            let color;
            if (colorChoice < 0.4) color = cyan;
            else if (colorChoice < 0.7) color = purple;
            else color = pink;

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = Math.random() * 3 + 0.5;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const particleMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.7,
            sizeAttenuation: true,
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // === Floating Wireframe Shapes ===
        const shapes = [];

        // Icosahedron
        const icoGeometry = new THREE.IcosahedronGeometry(1.2, 0);
        const icoMaterial = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            wireframe: true,
            transparent: true,
            opacity: 0.12,
        });
        const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
        icosahedron.position.set(3, 1, -3);
        scene.add(icosahedron);
        shapes.push({ mesh: icosahedron, speed: 0.003, axis: 'y' });

        // Torus
        const torusGeometry = new THREE.TorusGeometry(0.8, 0.25, 8, 24);
        const torusMaterial = new THREE.MeshBasicMaterial({
            color: 0xa855f7,
            wireframe: true,
            transparent: true,
            opacity: 0.1,
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.set(-3.5, -1.5, -2);
        scene.add(torus);
        shapes.push({ mesh: torus, speed: 0.005, axis: 'x' });

        // Octahedron
        const octGeometry = new THREE.OctahedronGeometry(0.7, 0);
        const octMaterial = new THREE.MeshBasicMaterial({
            color: 0xec4899,
            wireframe: true,
            transparent: true,
            opacity: 0.1,
        });
        const octahedron = new THREE.Mesh(octGeometry, octMaterial);
        octahedron.position.set(2, -2, -4);
        scene.add(octahedron);
        shapes.push({ mesh: octahedron, speed: 0.004, axis: 'z' });

        // Dodecahedron
        const dodGeometry = new THREE.DodecahedronGeometry(0.6, 0);
        const dodMaterial = new THREE.MeshBasicMaterial({
            color: 0x22c55e,
            wireframe: true,
            transparent: true,
            opacity: 0.08,
        });
        const dodecahedron = new THREE.Mesh(dodGeometry, dodMaterial);
        dodecahedron.position.set(-2, 2.5, -5);
        scene.add(dodecahedron);
        shapes.push({ mesh: dodecahedron, speed: 0.002, axis: 'y' });

        // === Mouse Interaction ===
        const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

        const handleMouseMove = (e) => {
            mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // === Scroll Effect ===
        let scrollY = window.scrollY;
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);

        // === Animation Loop ===
        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsed = clock.getElapsedTime();

            mouse.x += (mouse.targetX - mouse.x) * 0.02;
            mouse.y += (mouse.targetY - mouse.y) * 0.02;

            particles.rotation.y = elapsed * 0.05 + mouse.x * 0.3;
            particles.rotation.x = elapsed * 0.03 + mouse.y * 0.2;

            camera.position.y = -scrollY * 0.001;

            shapes.forEach((shape, i) => {
                shape.mesh.rotation.x += shape.speed;
                shape.mesh.rotation.y += shape.speed * 0.7;
                shape.mesh.rotation.z += shape.speed * 0.3;
                shape.mesh.position.y += Math.sin(elapsed * 0.5 + i) * 0.001;
            });

            const positionArray = particles.geometry.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positionArray[i3 + 1] += Math.sin(elapsed + positionArray[i3]) * 0.0003;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animate();

        // === Resize ===
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // === Cleanup ===
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            scene.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach((material) => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
        };
    }, []);

    return <canvas id="three-canvas" ref={canvasRef} />;
};

export default ThreeBackground;
