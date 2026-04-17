// Gift Unlock
function unlockGift() {
  document.getElementById('gallery').classList.remove('hidden');
}

// Fireworks
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onclick = (e) => {
  for(let i=0;i<30;i++){
    ctx.beginPath();
    ctx.arc(e.clientX + Math.random()*50, e.clientY + Math.random()*50, 3, 0, Math.PI*2);
    ctx.fillStyle = 'gold';
    ctx.fill();
  }
  setTimeout(()=>ctx.clearRect(0,0,canvas.width,canvas.height),300);
};

// Countdown
const month = 4;
const day = 16;

function nextBirthday(){
  let now = new Date();
  let year = now.getFullYear();
  let d = new Date(year, month-1, day);
  if(now > d) d = new Date(year+1, month-1, day);
  return d;
}

function update(){
  let diff = nextBirthday() - new Date();
  let d = Math.floor(diff/86400000);
  let h = Math.floor(diff/3600000)%24;
  let m = Math.floor(diff/60000)%60;
  let s = Math.floor(diff/1000)%60;

  document.getElementById('countdown').innerText =
    `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(update,1000);

// Secret
function unlockLetter(){
  let code = document.getElementById('secretCode').value;
  if(code.toLowerCase() === "zeet"){
    document.getElementById('secretLetter').classList.remove('hidden');
  } else {
    alert("Wrong code");
  }
}
