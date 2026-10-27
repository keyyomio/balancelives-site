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

// Add the documented PNG files to publish screenshots; keep a readable fallback.
document.querySelectorAll('.game-screenshot').forEach(image => {
  const caption = image.parentElement.querySelector('figcaption');
  const showImage = () => {
    image.hidden = false;
    caption.hidden = true;
  };
  const showPlaceholder = () => {
    image.hidden = true;
    caption.hidden = false;
  };
  image.addEventListener('load', showImage);
  image.addEventListener('error', showPlaceholder);
  // A display:none lazy image may never load; reveal it after registering handlers.
  image.hidden = false;
  if (image.complete) {
    image.naturalWidth > 0 ? showImage() : showPlaceholder();
  }
});
