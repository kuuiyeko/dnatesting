const THREE = require("three");

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

// Create DNA model
const geometry = new THREE.TubeGeometry(
    new THREE.Curves.TrefoilKnot(),
    100,
    0.04,
    20,
    true
);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const dnaModel = new THREE.Mesh(geometry, material);
scene.add(dnaModel);

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    dnaModel.rotation.x += 0.01;
    dnaModel.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
