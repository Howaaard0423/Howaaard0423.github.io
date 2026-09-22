// source/js/dino.js
(function () {
  // 创建包含图片的容器 div
  const dino = document.createElement('div');
  // 设置图片 HTML（请根据你的实际图片路径修改）
  // 假设你的图片放在 source/images/dino.png
  dino.innerHTML = '<img src="/images/dino.gif" alt="dino" style="width: 128px; height: auto; pointer-events: none;">';
  // dino.innerHTML = '🦕';

  dino.style.position = 'fixed';
  dino.style.bottom = '95px';
  dino.style.left = '2px';
  // dino.style.fontSize = '48px';
  dino.style.zIndex = '9999';
  dino.style.pointerEvents = 'none';
  dino.style.transition = 'transform 0.1s';

  document.body.appendChild(dino);

  // let mouseX = 0, mouseY = 0;
  // document.addEventListener('mousemove', (e) => {
  // mouseX = e.clientX;
  // mouseY = e.clientY;
  // 让恐龙稍微跟随，但保持在右下角区域
  // let dx = (mouseX / window.innerWidth) * 30 - 15;
  // let dy = (mouseY / window.innerHeight) * 30 - 15;
  // dino.style.transform = `translate(${dx}px, ${dy}px)`;
  // });
})();