const menuButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuButton.hidden = false;
function closeMenu(){navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','메뉴 열기');menuButton.textContent='☰';}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';navLinks.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');menuButton.textContent=open?'×':'☰';});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.nav'))closeMenu();});
const copyButton=document.getElementById('copy-email');
if(navigator.clipboard&&window.isSecureContext){copyButton.hidden=false;let toastTimer;copyButton.addEventListener('click',async()=>{const toast=document.getElementById('toast');try{await navigator.clipboard.writeText('contact@balancelives.site');toast.textContent='이메일 주소를 복사했습니다.';}catch{toast.textContent='이메일 주소를 직접 복사해 주세요.';}clearTimeout(toastTimer);toast.classList.add('show');toastTimer=setTimeout(()=>toast.classList.remove('show'),2800);});}
