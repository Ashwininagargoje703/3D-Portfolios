import * as THREE from 'three';

export function loadSkillsPage(scene, camera, controls) {
  // Set Camera Position
  camera.position.set(0, 1, 3);
  controls.update();

  // Add Skills Text
  const textGeometry = new THREE.TextGeometry('Skills', {
    font: new THREE.FontLoader().parse(require('../fonts/helvatica.json')),
    size: 0.5,
    height: 0.1,
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-2, 1, 0);
  scene.add(textMesh);

  // Add Skill Spheres
  const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x2196f3 });
  for (let i = 0; i < 5; i++) {
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.position.set(Math.random() * 4 - 2, Math.random() * 2, Math.random() * -2);
    scene.add(sphereMesh);

    // Add Bouncing Animation
    function animateSphere() {
      sphereMesh.position.y += Math.sin(Date.now() * 0.001) * 0.005;
      requestAnimationFrame(animateSphere);
    }
    animateSphere();
  }
}
