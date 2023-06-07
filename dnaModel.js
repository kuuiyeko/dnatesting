import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create DNA helix geometry
const helixGeometry = new THREE.CylinderGeometry(0.5, 0.5, 4, 32, 32);
const helixMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const helixMesh = new THREE.Mesh(helixGeometry, helixMaterial);
scene.add(helixMesh);

// Create DNA base pair geometry
const baseGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const baseMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const basePairMesh = new THREE.Mesh(baseGeometry, baseMaterial);
basePairMesh.position.y = -2;
scene.add(basePairMesh);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the helix
    helixMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
