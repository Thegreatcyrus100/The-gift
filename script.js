const revealBtn = document.getElementById('revealBtn');
const note = document.getElementById('note');
const floating = document.getElementById('floating-hearts');
const flowers3d = document.getElementById('flowers3d');

revealBtn.addEventListener('click', () => {
  note.classList.toggle('hidden');
  note.classList.toggle('visible');
  createHearts(12);
});

function createHearts(count){
  for(let i=0;i<count;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = (4 + Math.random()*4) + 's';
    h.style.width = (12 + Math.random()*28) + 'px';
    h.style.height = h.style.width;
    h.style.background = `radial-gradient(circle at 30% 30%, #fff 0%, transparent 30%), linear-gradient(135deg, #ff7aa2, #ff3d6b)`;
    h.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
    floating.appendChild(h);
    setTimeout(()=>{ h.remove(); }, 7000);
  }
}

// small animation on load
window.addEventListener('load', ()=>{
  setTimeout(()=>createHearts(8), 800);
});

if (flowers3d) {
  create3DFlowers(flowers3d, 5);
}

function create3DFlowers(container, count) {
  container.innerHTML = '';
  container.style.display = 'flex';
  container.style.gap = '18px';
  container.style.justifyContent = 'center';
  for (let i = 0; i < count; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower3d';
    flower.style.animationDelay = (i * 0.3) + 's';
    for (let p = 0; p < 6; p++) {
      const petal = document.createElement('div');
      petal.className = 'petal3d';
      petal.style.transform = `rotateY(${p * 60}deg) translateZ(18px)`;
      flower.appendChild(petal);
    }
    const center = document.createElement('div');
    center.className = 'center3d';
    flower.appendChild(center);
    container.appendChild(flower);
  }
}

// Add animated flowers and hearts to the sides
function addSideDecor() {
  const left = document.getElementById('sideLeft');
  const right = document.getElementById('sideRight');
  if (!left || !right) return;
  left.innerHTML = '';
  right.innerHTML = '';
  // Add 2 flowers and 2 hearts to each side
  for (let i = 0; i < 2; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower3d';
    flower.style.animationDelay = (i * 0.7) + 's';
    for (let p = 0; p < 6; p++) {
      const petal = document.createElement('div');
      petal.className = 'petal3d';
      petal.style.transform = `rotateY(${p * 60}deg) translateZ(18px)`;
      flower.appendChild(petal);
    }
    const center = document.createElement('div');
    center.className = 'center3d';
    flower.appendChild(center);
    left.appendChild(flower.cloneNode(true));
    right.appendChild(flower);
    // Add a heart
    const heart = document.createElement('div');
    heart.className = 'side-heart';
    heart.style.animationDelay = (i * 1.2 + 0.5) + 's';
    left.appendChild(heart.cloneNode(true));
    right.appendChild(heart);
  }
}
addSideDecor();
