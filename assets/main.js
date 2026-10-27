const menuButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuButton.hidden = false;
function closeMenu(){navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','메뉴 열기');menuButton.textContent='☰';}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';navLinks.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');menuButton.textContent=open?'×':'☰';});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.nav'))closeMenu();});
const copyButton=document.getElementById('copy-email');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  const copyLabel = copyButton.querySelector('.copy-label');
  const toast = document.getElementById('toast');
  let toastTimer;
  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    clearTimeout(toastTimer);
    toast.textContent = '';
    try {
      await navigator.clipboard.writeText('contact@balancelives.site');
      copyLabel.textContent = '복사됨';
      toast.textContent = '복사됨: 이메일 주소를 복사했습니다.';
    } catch {
      copyLabel.textContent = '이메일 주소 복사';
      toast.textContent = '이메일 주소를 직접 복사해 주세요.';
    } finally {
      copyButton.disabled = false;
    }
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      copyLabel.textContent = '이메일 주소 복사';
    }, 2800);
  });
}

// Templates stay inert until a screenshot file has been added and explicitly enabled.
document.querySelectorAll('[data-screenshot-ready="true"]').forEach(frame => {
  const image = frame.querySelector('template').content.firstElementChild.cloneNode(true);
  const caption = frame.querySelector('figcaption');
  image.addEventListener('load', () => {
    caption.hidden = true;
  });
  image.addEventListener('error', () => {
    image.remove();
    frame.classList.remove('has-screenshot');
    caption.hidden = false;
  });
  frame.classList.add('has-screenshot');
  frame.prepend(image);
});
