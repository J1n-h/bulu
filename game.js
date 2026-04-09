// ===== BOARD DATA =====
const BOARD = [
  { id:0, name:'출발', en:'START', type:'start', icon:'🚀' },
  { id:1, name:'타이베이', en:'Taipei', type:'city', group:'A', price:50000, rent:5000, bc:30000, icon:'🏙️' },
  { id:2, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:3, name:'베이징', en:'Beijing', type:'city', group:'A', price:60000, rent:6000, bc:30000, icon:'🏙️' },
  { id:4, name:'마닐라', en:'Manila', type:'city', group:'B', price:70000, rent:7000, bc:40000, icon:'🏙️' },
  { id:5, name:'제주도', en:'Jeju', type:'tourist', group:'T1', price:100000, rent:15000, bc:50000, icon:'🏖️' },
  { id:6, name:'싱가포르', en:'Singapore', type:'city', group:'B', price:80000, rent:8000, bc:40000, icon:'🏙️' },
  { id:7, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:8, name:'카이로', en:'Cairo', type:'city', group:'C', price:90000, rent:9000, bc:50000, icon:'🏙️' },
  { id:9, name:'이스탄불', en:'Istanbul', type:'city', group:'C', price:100000, rent:10000, bc:50000, icon:'🏙️' },
  { id:10, name:'무인도', en:'Desert Island', type:'island', icon:'🏝️' },
  { id:11, name:'아테네', en:'Athens', type:'city', group:'D', price:110000, rent:11000, bc:60000, icon:'🏛️' },
  { id:12, name:'코펜하겐', en:'Copenhagen', type:'city', group:'D', price:120000, rent:12000, bc:60000, icon:'🏛️' },
  { id:13, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:14, name:'스톡홀름', en:'Stockholm', type:'city', group:'E', price:130000, rent:13000, bc:70000, icon:'🏙️' },
  { id:15, name:'베른', en:'Bern', type:'city', group:'E', price:130000, rent:13000, bc:70000, icon:'🏙️' },
  { id:16, name:'베를린', en:'Berlin', type:'city', group:'E', price:140000, rent:14000, bc:70000, icon:'🏙️' },
  { id:17, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:18, name:'오타와', en:'Ottawa', type:'city', group:'F', price:150000, rent:15000, bc:80000, icon:'🏙️' },
  { id:19, name:'부에노스아이레스', en:'B.Aires', type:'city', group:'F', price:160000, rent:16000, bc:80000, icon:'🏙️' },
  { id:20, name:'사회복지기금', en:'Welfare', type:'welfare', icon:'💰' },
  { id:21, name:'상파울루', en:'São Paulo', type:'city', group:'G', price:170000, rent:17000, bc:90000, icon:'🏙️' },
  { id:22, name:'시드니', en:'Sydney', type:'city', group:'G', price:180000, rent:18000, bc:90000, icon:'🏙️' },
  { id:23, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:24, name:'부산', en:'Busan', type:'tourist', group:'T2', price:150000, rent:20000, bc:70000, icon:'🏖️' },
  { id:25, name:'하와이', en:'Hawaii', type:'tourist', group:'T3', price:180000, rent:25000, bc:80000, icon:'🌴' },
  { id:26, name:'로마', en:'Rome', type:'city', group:'H', price:200000, rent:20000, bc:100000, icon:'🏛️' },
  { id:27, name:'파리', en:'Paris', type:'city', group:'H', price:220000, rent:22000, bc:100000, icon:'🗼' },
  { id:28, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:29, name:'런던', en:'London', type:'city', group:'I', price:250000, rent:25000, bc:120000, icon:'🏙️' },
  { id:30, name:'세계여행', en:'World Travel', type:'travel', icon:'✈️' },
  { id:31, name:'뉴욕', en:'New York', type:'city', group:'I', price:280000, rent:28000, bc:120000, icon:'🗽' },
  { id:32, name:'서울', en:'Seoul', type:'city', group:'I', price:300000, rent:30000, bc:130000, icon:'🇰🇷' },
  { id:33, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:34, name:'도쿄', en:'Tokyo', type:'city', group:'J', price:320000, rent:32000, bc:140000, icon:'🗼' },
  { id:35, name:'콜롬비아호', en:'Columbia', type:'columbia', group:'T4', price:200000, rent:30000, bc:100000, icon:'🚀' },
  { id:36, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
  { id:37, name:'베니스', en:'Venice', type:'tourist', group:'T5', price:250000, rent:35000, bc:110000, icon:'🛶' },
  { id:38, name:'황금열쇠', en:'Golden Key', type:'key', icon:'🔑' },
];
const TOTAL_CELLS = BOARD.length; // 39

const GROUP_COLORS = {
  A:'#4fc3f7', B:'#e91e63', C:'#ff9800', D:'#f44336',
  E:'#ffeb3b', F:'#4caf50', G:'#2196f3', H:'#9c27b0',
  I:'#3f51b5', J:'#ff5722',
  T1:'#00bcd4', T2:'#00bcd4', T3:'#00bcd4', T4:'#00bcd4', T5:'#00bcd4'
};

const PLAYER_COLORS = ['#ff4081','#448aff','#69f0ae','#ffd740'];
const PLAYER_NAMES = ['나','봇 1','봇 2','봇 3'];

const GOLDEN_KEYS = [
  { id:1, text:'🎰 복권 당첨! 30만원을 획득합니다.', type:'instant', effect:'gain', amount:300000 },
  { id:2, text:'💸 세금 환급! 20만원을 수령합니다.', type:'instant', effect:'gain', amount:200000 },
  { id:3, text:'🚗 교통사고! 입원비 15만원 & 2턴 이동 금지', type:'instant', effect:'accident', amount:150000, skip:2 },
  { id:4, text:'🎁 기부금! 10만원을 지불합니다.', type:'instant', effect:'pay', amount:100000 },
  { id:5, text:'🔧 건물 수리! 보유 건물당 5만원 지불', type:'instant', effect:'repair', perBuilding:50000 },
  { id:6, text:'🎂 생일 축하! 다른 플레이어에게 각 5만원 수령', type:'instant', effect:'birthday', amount:50000 },
  { id:7, text:'🛡️ 통행료 면제권 획득! (보관 가능)', type:'keepable', effect:'toll_free', label:'면제권' },
  { id:8, text:'🚁 자유이동권 획득! (보관 가능)', type:'keepable', effect:'free_move', label:'이동권' },
  { id:9, text:'🏦 은행 이자! 15만원을 수령합니다.', type:'instant', effect:'gain', amount:150000 },
  { id:10, text:'⚖️ 벌금! 20만원을 지불합니다.', type:'instant', effect:'pay', amount:200000 },
  { id:11, text:'🏝️ 무인도 탈출권 획득! (보관 가능)', type:'keepable', effect:'island_escape', label:'탈출권' },
  { id:12, text:'⬅️ 뒤로 3칸 이동!', type:'instant', effect:'move_back', amount:3 },
];

// ===== GAME STATE =====
let G = {
  phase:'lobby', players:[], turnOrder:[], currentIdx:0,
  properties:{}, doublesCount:0, diceValues:[1,1], rolling:false,
  animating:false, turnActive:false
};

// ===== UTILITY =====
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const rand = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
const fmt = n => {
  if(n>=10000) return (n/10000).toFixed(n%10000?1:0)+'만';
  return n.toLocaleString();
};
const wait = ms => new Promise(r => setTimeout(r, ms));

// ===== BOARD RENDERING =====
function getCellPosition(id) {
  // Returns {row, col} in 11x11 grid (0-indexed)
  if(id===0) return {r:10,c:10};   // bottom-right: START
  if(id<=9) return {r:10,c:10-id}; // bottom row right-to-left
  if(id===10) return {r:10,c:0};   // bottom-left: ISLAND
  if(id<=19) return {r:10-(id-10),c:0}; // left col bottom-to-top
  if(id===20) return {r:0,c:0};    // top-left: WELFARE
  if(id<=29) return {r:0,c:id-20}; // top row left-to-right
  if(id===30) return {r:0,c:10};   // top-right: TRAVEL
  if(id<=38) return {r:id-30,c:10};// right col top-to-bottom
  return {r:10,c:10};
}

function getCellSide(id) {
  if(id>=1&&id<=9) return 'bottom';
  if(id>=11&&id<=19) return 'left';
  if(id>=21&&id<=29) return 'top';
  if(id>=31&&id<=38) return 'right';
  return 'corner';
}

function renderBoard() {
  const board = $('#board');
  board.innerHTML = '';
  // Create 11x11 grid cells
  const cells = Array.from({length:11}, ()=>Array(11).fill(null));

  BOARD.forEach(sq => {
    const {r,c} = getCellPosition(sq.id);
    cells[r][c] = sq;
  });

  for(let r=0;r<11;r++){
    for(let c=0;c<11;c++){
      const div = document.createElement('div');
      const sq = cells[r][c];
      if(r>0&&r<10&&c>0&&c<10){
        div.className='cell cell-center';
        div.style.gridRow=r+1; div.style.gridColumn=c+1;
        board.appendChild(div);
        continue;
      }
      if(!sq){
        div.className='cell cell-center';
        div.style.gridRow=r+1; div.style.gridColumn=c+1;
        board.appendChild(div);
        continue;
      }
      const side = getCellSide(sq.id);
      const isCorner = side==='corner';
      div.className = `cell cell-${side}${isCorner?' cell-corner':''}`;
      div.id = `cell-${sq.id}`;
      div.style.gridRow = r+1;
      div.style.gridColumn = c+1;

      let html = '';
      if(sq.group && GROUP_COLORS[sq.group]){
        html += `<div class="cell-color-bar" style="background:${GROUP_COLORS[sq.group]}"></div>`;
      }
      html += `<div class="cell-icon">${sq.icon}</div>`;
      html += `<div class="cell-name">${sq.name}</div>`;
      html += `<div class="cell-name-en">${sq.en}</div>`;
      if(sq.price) html += `<div class="cell-price">${fmt(sq.price)}</div>`;
      html += `<div class="tokens-container" id="tokens-${sq.id}"></div>`;
      html += `<div class="cell-owner" id="owner-${sq.id}" style="display:none"></div>`;
      html += `<div class="cell-building" id="building-${sq.id}"></div>`;
      div.innerHTML = html;
      board.appendChild(div);
    }
  }
  // Board center content
  const center = document.createElement('div');
  center.id='board-center';
  center.style.cssText='grid-row:2/11;grid-column:2/11;display:flex;align-items:center;justify-content:center;pointer-events:none;';
  center.innerHTML='<div style="text-align:center;opacity:0.15;pointer-events:none;"><div style="font-size:3rem;font-weight:900;letter-spacing:4px;">부루마불</div><div style="font-size:0.8rem;letter-spacing:6px;margin-top:8px;">BLUE MARBLE</div></div>';
  board.appendChild(center);
}

function updateTokens() {
  // Clear all tokens
  for(let i=0;i<TOTAL_CELLS;i++){
    const tc = $(`#tokens-${i}`);
    if(tc) tc.innerHTML='';
  }
  // Place player tokens
  G.players.forEach((p,idx)=>{
    if(p.bankrupt) return;
    const tc = $(`#tokens-${p.pos}`);
    if(!tc) return;
    const tok = document.createElement('div');
    tok.className='player-token';
    tok.style.background=PLAYER_COLORS[idx];
    tok.textContent = idx===0?'나':(idx);
    tc.appendChild(tok);
  });
}

function updateOwners() {
  BOARD.forEach(sq=>{
    const ow = $(`#owner-${sq.id}`);
    const bl = $(`#building-${sq.id}`);
    if(!ow) return;
    const prop = G.properties[sq.id];
    if(prop!=null){
      ow.style.display='block';
      ow.style.background=PLAYER_COLORS[prop.owner];
      const lvl = prop.level||0;
      if(bl) bl.textContent = lvl>0?('🏠'.repeat(Math.min(lvl,3))):'';
    } else {
      ow.style.display='none';
      if(bl) bl.textContent='';
    }
  });
}

// ===== SIDE PANEL =====
function renderSidePanel() {
  const panel = $('#side-panel');
  panel.innerHTML = `
    <div id="turn-display"><h3>현재 턴</h3><div id="current-player-name">-</div><div id="double-indicator"></div></div>
    <div id="dice-area">
      <div class="dice-container"><div class="die" id="die0"></div><div class="die" id="die1"></div></div>
      <button class="btn btn-primary" id="roll-btn" onclick="onRollDice()">🎲 주사위 굴리기</button>
    </div>
    <div id="players-list"></div>
    <div id="prop-panel" class="prop-panel"><h4>🏠 소유 부동산</h4><div id="prop-panel-content"></div></div>
    <div id="game-log"><div style="color:var(--text-dim);text-align:center;padding:8px;">게임 로그</div></div>
  `;
  renderDice(1,1);
  renderPlayerCards();
  renderPropPanel();
}

function renderPlayerCards() {
  const list = $('#players-list');
  if(!list) return;
  list.innerHTML='';
  G.turnOrder.forEach(idx=>{
    const p = G.players[idx];
    const isActive = G.turnOrder[G.currentIdx]===idx;
    const div = document.createElement('div');
    div.className=`player-card${isActive?' active-turn':''}${p.bankrupt?' bankrupt':''}`;
    div.id=`pcard-${idx}`;
    let cardsHtml = '';
    p.cards.forEach((c,ci)=>{
      cardsHtml+=`<span class="saved-card-badge" onclick="onUseCard(${idx},${ci})" title="${c.text}">${c.label}</span>`;
    });
    div.innerHTML=`
      <div class="player-card-header">
        <div class="player-color-dot" style="background:${PLAYER_COLORS[idx]}"></div>
        <div class="player-card-name">${p.name}${p.isBot?' 🤖':''}</div>
        <div class="player-card-money">₩${fmt(p.money)}</div>
      </div>
      <div class="player-card-props">부동산: ${countProps(idx)}개 | 위치: ${BOARD[p.pos].name}${p.skipTurns>0?' | ⛔'+p.skipTurns+'턴 정지':''}</div>
      <div class="player-card-cards">${cardsHtml}</div>
    `;
    list.appendChild(div);
  });
}

function countProps(idx) {
  return Object.values(G.properties).filter(p=>p.owner===idx).length;
}

function renderDice(v1,v2) {
  [v1,v2].forEach((v,i)=>{
    const die=$(`#die${i}`);
    if(!die) return;
    // Dot positions for dice face
    const patterns = {
      1:[0,0,0,0,1,0,0,0,0],
      2:[0,0,1,0,0,0,1,0,0],
      3:[0,0,1,0,1,0,1,0,0],
      4:[1,0,1,0,0,0,1,0,1],
      5:[1,0,1,0,1,0,1,0,1],
      6:[1,0,1,1,0,1,1,0,1]
    };
    const p=patterns[v]||patterns[1];
    die.innerHTML=p.map(d=>`<div class="dot${d?' visible':''}"></div>`).join('');
  });
}

function log(msg) {
  const el=$('#game-log');
  if(!el) return;
  const d=document.createElement('div');
  d.className='log-entry';
  d.innerHTML=msg;
  el.appendChild(d);
  // Auto-scroll only if user isn't manually scrolling up
  const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
  if(isNearBottom) el.scrollTop = el.scrollHeight;
}

function renderPropPanel() {
  const el=$('#prop-panel-content');
  if(!el) return;
  el.innerHTML='';
  const bldgIcons = ['','🏡','🏢','🏨'];
  G.players.forEach((p,idx)=>{
    const props = Object.entries(G.properties).filter(([k,v])=>v.owner===idx);
    if(props.length===0) return;
    const div = document.createElement('div');
    div.className='prop-panel-player';
    let tags = props.map(([k,v])=>{
      const sq=BOARD[parseInt(k)];
      const gc=sq.group?GROUP_COLORS[sq.group]:'#666';
      return `<span class="prop-tag" style="background:${gc}33;border-color:${gc}66">${sq.name}${v.level>0?'<span class="bldg">'+bldgIcons[v.level]+'</span>':''}</span>`;
    }).join('');
    div.innerHTML=`<div class="prop-panel-player-name"><span class="pdot" style="background:${PLAYER_COLORS[idx]}"></span>${p.name}</div><div class="prop-list">${tags}</div>`;
    el.appendChild(div);
  });
}

function updateTurnDisplay() {
  const idx = G.turnOrder[G.currentIdx];
  const p = G.players[idx];
  const nameEl=$('#current-player-name');
  if(nameEl){
    nameEl.textContent=p.name;
    nameEl.style.color=PLAYER_COLORS[idx];
  }
  $('#double-indicator').innerHTML='';
  const rb=$('#roll-btn');
  if(rb){
    const isHuman = idx===0;
    rb.style.display = (isHuman&&G.turnActive&&!G.rolling)?'block':'none';
  }
}

// ===== MODAL & TOAST =====
function showModal(title,body,actions) {
  let overlay=$('#modal-overlay');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='modal-overlay';
    overlay.className='modal-overlay';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML=`<div class="modal-box"><h3>${title}</h3><div>${body}</div><div class="modal-actions">${actions}</div></div>`;
  overlay.classList.add('active');
}
function hideModal() {
  const o=$('#modal-overlay');
  if(o) o.classList.remove('active');
}

function showToast(type, amount, msg) {
  const toast = document.createElement('div');
  toast.className = `rent-toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${type === 'pay' ? '💸' : '💰'}</div>
    <div class="toast-amount">₩${fmt(amount)}</div>
    <div class="toast-msg">${msg}</div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ===== SCREENS =====
function showScreen(id) {
  $$('.screen').forEach(s=>s.classList.add('hidden'));
  $(`#${id}`).classList.remove('hidden');
}

// ===== LOBBY =====
function initLobby() {
  G.phase='lobby';
  showScreen('lobby-screen');
}

// ===== GAME INIT =====
function startGame(numBots) {
  G = {
    phase:'playing', players:[], turnOrder:[], currentIdx:0,
    properties:{}, doublesCount:0, diceValues:[1,1], rolling:false,
    animating:false, turnActive:false
  };
  // Create players
  G.players.push({name:'나',isBot:false,money:500000,pos:0,cards:[],skipTurns:0,bankrupt:false,jailTurns:0});
  for(let i=0;i<numBots;i++){
    G.players.push({name:`봇 ${i+1}`,isBot:true,money:500000,pos:0,cards:[],skipTurns:0,bankrupt:false,jailTurns:0});
  }
  // Random turn order
  G.turnOrder = G.players.map((_,i)=>i);
  for(let i=G.turnOrder.length-1;i>0;i--){
    const j=rand(0,i);
    [G.turnOrder[i],G.turnOrder[j]]=[G.turnOrder[j],G.turnOrder[i]];
  }
  showScreen('game-screen');
  renderBoard();
  renderSidePanel();
  updateTokens();
  updateOwners();
  log('🎮 게임이 시작되었습니다!');
  log(`📋 턴 순서: ${G.turnOrder.map(i=>G.players[i].name).join(' → ')}`);
  startTurn();
}

// ===== TURN SYSTEM =====
async function startTurn() {
  if(G.phase!=='playing') return;
  const idx = G.turnOrder[G.currentIdx];
  const p = G.players[idx];
  if(p.bankrupt){ nextTurn(); return; }

  G.turnActive=true; G.doublesCount=0;
  renderPlayerCards();
  updateTurnDisplay();
  log(`<b style="color:${PLAYER_COLORS[idx]}">${p.name}</b>의 차례입니다.`);

  if(p.skipTurns>0){
    log(`⛔ ${p.name}은(는) ${p.skipTurns}턴 정지 상태입니다.`);
    p.skipTurns--;
    await wait(1500);
    G.turnActive=false;
    nextTurn();
    return;
  }
  if(p.jailTurns>0){
    await handleJailTurn(p,idx);
    return;
  }
  if(p.isBot){
    await wait(1500);
    await doBotRoll(idx);
  }
  // Human waits for button click
}

async function handleJailTurn(p,idx) {
  if(p.isBot){
    // Bot tries to pay to escape
    if(p.money>=50000){
      p.money-=50000; p.jailTurns=0;
      log(`${p.name}이(가) 5만원을 내고 무인도를 탈출했습니다.`);
      await wait(500);
      await doBotRoll(idx);
    } else {
      p.jailTurns--;
      if(p.jailTurns<=0){ log(`${p.name}이(가) 무인도에서 풀려났습니다.`); p.jailTurns=0; await wait(500); await doBotRoll(idx); }
      else { log(`${p.name}은(는) 무인도에 갇혀있습니다. (${p.jailTurns}턴 남음)`); await wait(800); G.turnActive=false; nextTurn(); }
    }
    return;
  }
  // Human
  const escCard = p.cards.findIndex(c=>c.effect==='island_escape');
  let btns = `<button class="btn" onclick="jailPay()">💰 5만원 내고 탈출</button>`;
  if(escCard>=0) btns+=`<button class="btn btn-primary" onclick="jailCard(${escCard})">🏝️ 탈출권 사용</button>`;
  btns+=`<button class="btn" onclick="jailWait()">⏳ 대기 (${p.jailTurns}턴 남음)</button>`;
  showModal('🏝️ 무인도',`<p>무인도에 갇혀있습니다!</p>`,btns);
}
window.jailPay=async function(){
  hideModal();
  const idx=G.turnOrder[G.currentIdx]; const p=G.players[idx];
  if(p.money<50000){log('돈이 부족합니다!'); return;}
  p.money-=50000; p.jailTurns=0;
  log('5만원을 내고 무인도를 탈출했습니다!');
  renderPlayerCards(); updateTurnDisplay();
};
window.jailCard=async function(ci){
  hideModal();
  const idx=G.turnOrder[G.currentIdx]; const p=G.players[idx];
  p.cards.splice(ci,1); p.jailTurns=0;
  log('탈출권을 사용하여 무인도를 탈출했습니다!');
  renderPlayerCards(); updateTurnDisplay();
};
window.jailWait=async function(){
  hideModal();
  const idx=G.turnOrder[G.currentIdx]; const p=G.players[idx];
  p.jailTurns--;
  if(p.jailTurns<=0){log('무인도에서 풀려났습니다!'); p.jailTurns=0;}
  else { log(`무인도에서 대기합니다. (${p.jailTurns}턴 남음)`); }
  G.turnActive=false; renderPlayerCards(); nextTurn();
};

// ===== DICE =====
async function rollDiceAnim() {
  G.rolling=true;
  const d0=$('#die0'), d1=$('#die1');
  if(d0){ d0.classList.remove('landed'); d0.classList.add('rolling'); }
  if(d1){ d1.classList.remove('landed'); d1.classList.add('rolling'); }
  for(let i=0;i<15;i++){
    renderDice(rand(1,6),rand(1,6));
    await wait(60 + i*8);
  }
  const v1=rand(1,6), v2=rand(1,6);
  G.diceValues=[v1,v2];
  renderDice(v1,v2);
  if(d0){ d0.classList.remove('rolling'); d0.classList.add('landed'); }
  if(d1){ d1.classList.remove('rolling'); d1.classList.add('landed'); }
  await wait(400);
  G.rolling=false;
  return [v1,v2];
}

async function onRollDice() {
  if(G.rolling||G.animating||!G.turnActive) return;
  const idx=G.turnOrder[G.currentIdx];
  if(idx!==0) return; // only human
  $('#roll-btn').style.display='none';
  await doRoll(idx);
}

async function doBotRoll(idx) {
  await doRoll(idx);
}

async function doRoll(idx) {
  const p=G.players[idx];
  const [v1,v2]=await rollDiceAnim();
  const total=v1+v2;
  const isDouble=v1===v2;
  log(`🎲 ${p.name}: [${v1}] + [${v2}] = ${total}${isDouble?' <b style="color:#ffd740">더블!</b>':''}`);
  if(isDouble){
    G.doublesCount++;
    if(G.doublesCount>=3){
      log(`⚠️ 3연속 더블! ${p.name}이(가) 무인도로 이동합니다!`);
      p.pos=10; p.jailTurns=3;
      updateTokens(); renderPlayerCards();
      await wait(1000);
      G.turnActive=false; nextTurn(); return;
    }
    $('#double-indicator').innerHTML='<div class="double-text">🎯 더블!</div>';
  }
  // Move
  await movePlayer(p, idx, total);
  // Handle landing
  await handleLanding(p, idx);
  // Check double for extra turn
  if(isDouble && !p.bankrupt && p.jailTurns===0 && G.phase==='playing'){
    log(`🔄 더블! ${p.name}이(가) 한 번 더 굴립니다.`);
    if(p.isBot){ await wait(1500); await doBotRoll(idx); }
    else { G.turnActive=true; updateTurnDisplay(); }
    return;
  }
  G.turnActive=false;
  if(G.phase==='playing') nextTurn();
}

async function movePlayer(p, idx, steps) {
  G.animating=true;
  for(let i=0;i<steps;i++){
    const oldPos=p.pos;
    p.pos=(p.pos+1)%TOTAL_CELLS;
    if(p.pos===0 && oldPos!==0){
      p.money+=200000;
      log(`💵 ${p.name}이(가) 출발을 지나 20만원을 받았습니다.`);
    }
    updateTokens();
    await wait(250);
  }
  G.animating=false;
  renderPlayerCards(); renderPropPanel();
  log(`📍 ${p.name}이(가) <b>${BOARD[p.pos].name}</b>에 도착했습니다.`);
}

// ===== LANDING HANDLER =====
async function handleLanding(p, idx) {
  const sq = BOARD[p.pos];
  switch(sq.type){
    case 'city': case 'tourist': case 'columbia':
      await handleProperty(p,idx,sq); break;
    case 'key':
      await handleGoldenKey(p,idx); break;
    case 'island':
      log(`🏝️ ${p.name}이(가) 무인도에 도착! 3턴간 갇힙니다.`);
      p.jailTurns=3; break;
    case 'welfare':
      log(`💰 ${p.name}이(가) 사회복지기금에 15만원을 기부합니다.`);
      p.money-=150000; checkBankruptcy(p,idx); break;
    case 'travel':
      log(`✈️ ${p.name}이(가) 세계여행 칸에 도착. 쉬어갑니다.`);
      break;
    case 'start': break;
    default: break;
  }
  renderPlayerCards(); updateOwners(); updateTokens(); renderPropPanel();
}

// ===== PROPERTY =====
async function handleProperty(p, idx, sq) {
  const prop = G.properties[sq.id];
  if(!prop){
    // Unowned - offer to buy
    if(p.isBot){ botBuyDecision(p,idx,sq); return; }
    if(p.money<sq.price){log(`💸 돈이 부족하여 ${sq.name}을(를) 구매할 수 없습니다.`);return;}
    await new Promise(resolve=>{
      showModal(`🏠 ${sq.name}`,
        `<p>${sq.en} - 구매 가격: ₩${fmt(sq.price)}</p><p>통행료: ₩${fmt(sq.rent)}</p>`,
        `<button class="btn btn-primary" onclick="buyProp(${sq.id});this.resolve()">구매</button><button class="btn" onclick="skipBuy();this.resolve()">패스</button>`
      );
      window.buyProp=function(id){hideModal();doBuy(p,idx,id);resolve();};
      window.skipBuy=function(){hideModal();log('구매를 패스했습니다.');resolve();};
    });
  } else if(prop.owner===idx){
    // Own property - option to build
    if(prop.level>=3){return;}
    if(p.isBot){ botBuildDecision(p,idx,sq,prop); return; }
    if(p.money<sq.bc){return;}
    const lvlNames=['별장','빌딩','호텔'];
    await new Promise(resolve=>{
      showModal(`🏗️ 건설`,
        `<p>${sq.name}에 ${lvlNames[prop.level]}을(를) 건설하시겠습니까?</p><p>비용: ₩${fmt(sq.bc)}</p>`,
        `<button class="btn btn-primary" onclick="doBuildAction(${sq.id});this.r()">건설</button><button class="btn" onclick="skipBuildAction();this.r()">패스</button>`
      );
      window.doBuildAction=function(id){hideModal();doBuild(p,idx,id);resolve();};
      window.skipBuildAction=function(){hideModal();resolve();};
    });
  } else {
    // Other's property - pay rent
    const owner=G.players[prop.owner];
    if(owner.bankrupt) return;
    let rentAmt = sq.rent * Math.pow(2, prop.level);
    // Check toll free card
    const freeCard = p.cards.findIndex(c=>c.effect==='toll_free');
    if(freeCard>=0 && !p.isBot){
      await new Promise(resolve=>{
        showModal('🛡️ 통행료 면제권',
          `<p>통행료 ₩${fmt(rentAmt)}! 면제권을 사용하시겠습니까?</p>`,
          `<button class="btn btn-primary" onclick="useTollFree(${freeCard});this.r()">사용</button><button class="btn" onclick="payToll(${rentAmt});this.r()">지불</button>`
        );
        window.useTollFree=function(ci){hideModal();p.cards.splice(ci,1);log('통행료 면제권을 사용했습니다!');resolve();};
        window.payToll=function(amt){hideModal();payRent(p,idx,prop,amt);resolve();};
      });
    } else if(freeCard>=0 && p.isBot){
      if(rentAmt>100000){p.cards.splice(freeCard,1);log(`${p.name}이(가) 통행료 면제권을 사용했습니다!`);}
      else payRent(p,idx,prop,rentAmt);
    } else {
      payRent(p,idx,prop,rentAmt, sq.name);
    }
    // Columbia teleport
    if(sq.type==='columbia'||sq.id===35){
      await handleColumbiaTeleport(p,idx,prop);
    }
  }
}

function doBuy(p,idx,id){
  const sq=BOARD[id];
  p.money-=sq.price;
  G.properties[id]={owner:idx,level:0};
  log(`🏠 ${p.name}이(가) ${sq.name}을(를) ₩${fmt(sq.price)}에 구매했습니다!`);
  updateOwners(); renderPlayerCards(); renderPropPanel();
}

function doBuild(p,idx,id){
  const sq=BOARD[id]; const prop=G.properties[id];
  p.money-=sq.bc; prop.level++;
  const lvlNames=['별장','빌딩','호텔'];
  log(`🏗️ ${p.name}이(가) ${sq.name}에 ${lvlNames[prop.level-1]}을(를) 건설했습니다!`);
  updateOwners(); renderPlayerCards(); renderPropPanel();
}

function payRent(p,idx,prop,amt, propName=''){
  const owner=G.players[prop.owner];
  p.money-=amt; owner.money+=amt;
  log(`💸 ${p.name}이(가) ${owner.name}에게 통행료 ₩${fmt(amt)}을(를) 지불했습니다.`);
  
  if (!p.isBot) {
     showToast('pay', amt, `${owner.name}의 ${propName} 통행료 지불`);
  } else if (!owner.isBot) {
     showToast('receive', amt, `${p.name}가 내 ${propName}에 방문함`);
  }

  checkBankruptcy(p,idx);
  renderPlayerCards();
}

function botBuyDecision(p,idx,sq){
  if(p.money>sq.price*1.3){ doBuy(p,idx,sq.id); }
  else { log(`${p.name}이(가) 구매를 패스했습니다.`); }
}
function botBuildDecision(p,idx,sq,prop){
  if(prop.level<3 && p.money>sq.bc*2){ doBuild(p,idx,sq.id); }
}

async function handleColumbiaTeleport(p,idx,prop){
  if(prop && prop.owner!==idx){
    // Already paid rent above
    log(`🚀 ${p.name}이(가) 콜롬비아호에서 원하는 곳으로 이동할 수 있습니다.`);
  } else {
    log(`🚀 ${p.name}이(가) 콜롬비아호에서 무료로 이동할 수 있습니다.`);
  }
  if(p.isBot){
    // Bot picks a random owned property or expensive unowned
    const targets = BOARD.filter(s=>(s.type==='city'||s.type==='tourist')&&!G.properties[s.id]);
    if(targets.length>0){
      const t=targets[rand(0,targets.length-1)];
      p.pos=t.id; log(`${p.name}이(가) ${t.name}(으)로 이동했습니다.`);
      updateTokens(); await handleLanding(p,idx);
    }
  } else {
    await new Promise(resolve=>{
      let grid='<div class="free-move-grid">';
      BOARD.forEach(s=>{
        if(s.type==='start'||s.type==='key') return;
        grid+=`<button class="free-move-option" onclick="columbiaMove(${s.id})">${s.name}</button>`;
      });
      grid+='</div>';
      showModal('🚀 콜롬비아호',`<p>이동할 위치를 선택하세요:</p>${grid}`,'');
      window.columbiaMove=async function(id){
        hideModal(); p.pos=id;
        log(`${BOARD[id].name}(으)로 이동했습니다!`);
        updateTokens(); await handleLanding(p,idx); resolve();
      };
    });
  }
}

// ===== GOLDEN KEY =====
async function handleGoldenKey(p, idx) {
  const card = GOLDEN_KEYS[rand(0,GOLDEN_KEYS.length-1)];
  const cardHtml = `<div class="golden-key-card"><div class="card-icon">🔑</div><div class="card-text">${card.text}</div></div>`;

  if(p.isBot){
    log(`🔑 ${p.name}: ${card.text}`);
    applyGoldenKey(p,idx,card);
    await wait(1200);
    return;
  }
  await new Promise(resolve=>{
    showModal('🔑 황금열쇠',cardHtml,`<button class="btn btn-primary" onclick="hideModal();this.r()">확인</button>`);
    const btn = document.querySelector('.modal-actions .btn');
    btn.r = resolve;
  });
  await applyGoldenKey(p,idx,card);
}

async function applyGoldenKey(p,idx,card){
  switch(card.effect){
    case 'gain': p.money+=card.amount; break;
    case 'pay': p.money-=card.amount; checkBankruptcy(p,idx); break;
    case 'accident': p.money-=card.amount; p.skipTurns=card.skip; checkBankruptcy(p,idx); break;
    case 'repair':
      const bCount=Object.values(G.properties).filter(pr=>pr.owner===idx).reduce((s,pr)=>s+pr.level,0);
      p.money-=bCount*card.perBuilding;
      log(`건물 ${bCount}개 x ₩${fmt(card.perBuilding)} = ₩${fmt(bCount*card.perBuilding)} 지불`);
      checkBankruptcy(p,idx); break;
    case 'birthday':
      G.players.forEach((op,oi)=>{
        if(oi!==idx&&!op.bankrupt){ op.money-=card.amount; p.money+=card.amount; }
      }); break;
    case 'move_back':
      p.pos=(p.pos-card.amount+TOTAL_CELLS)%TOTAL_CELLS;
      log(`${p.name}이(가) ${BOARD[p.pos].name}(으)로 이동했습니다.`);
      updateTokens(); await handleLanding(p,idx); break;
    case 'toll_free': case 'free_move': case 'island_escape':
      p.cards.push({effect:card.effect,label:card.label,text:card.text});
      log(`${p.name}이(가) ${card.label}을(를) 보관합니다.`);
      break;
  }
  renderPlayerCards();
}

// ===== USE SAVED CARD =====
window.onUseCard = async function(pIdx, cardIdx){
  if(G.turnOrder[G.currentIdx]!==pIdx||pIdx!==0) return;
  const p=G.players[pIdx];
  const card=p.cards[cardIdx];
  if(card.effect==='free_move'){
    await new Promise(resolve=>{
      let grid='<div class="free-move-grid">';
      BOARD.forEach(s=>{
        if(s.type==='key') return;
        grid+=`<button class="free-move-option" onclick="freeMoveTo(${s.id})">${s.name}</button>`;
      });
      grid+='</div>';
      showModal('🚁 자유이동권',`<p>이동할 위치를 선택하세요:</p>${grid}`,'');
      window.freeMoveTo=async function(id){
        hideModal(); p.cards.splice(cardIdx,1);
        p.pos=id; log(`자유이동권으로 ${BOARD[id].name}(으)로 이동!`);
        updateTokens(); renderPlayerCards();
        await handleLanding(p,pIdx); resolve();
      };
    });
  }
};

// ===== BANKRUPTCY & WIN =====
function checkBankruptcy(p,idx){
  if(p.money<0){
    p.bankrupt=true; p.money=0;
    log(`💀 <b>${p.name}</b>이(가) 파산했습니다!`);
    // Release properties
    Object.keys(G.properties).forEach(k=>{
      if(G.properties[k].owner===idx) delete G.properties[k];
    });
    updateOwners();
    checkWin();
  }
}

function checkWin(){
  const alive=G.players.filter(p=>!p.bankrupt);
  if(alive.length<=1){
    const winner=alive[0]||G.players[0];
    const wIdx=G.players.indexOf(winner);
    G.phase='gameover';
    setTimeout(()=>{
      showScreen('gameover-screen');
      $('#winner-name').textContent=winner.name;
      $('#winner-name').style.color=PLAYER_COLORS[wIdx];
      $('#winner-money').textContent=`최종 자산: ₩${fmt(winner.money)}`;
      spawnConfetti();
    },1000);
  }
}

function nextTurn(){
  G.currentIdx=(G.currentIdx+1)%G.turnOrder.length;
  // Skip bankrupt
  let safety=0;
  while(G.players[G.turnOrder[G.currentIdx]].bankrupt && safety<10){
    G.currentIdx=(G.currentIdx+1)%G.turnOrder.length; safety++;
  }
  renderPlayerCards(); updateTurnDisplay(); renderPropPanel();
  setTimeout(()=>startTurn(),800);
}

// ===== CONFETTI =====
function spawnConfetti(){
  const colors=['#ff4081','#448aff','#69f0ae','#ffd740','#b388ff','#ff6e40'];
  for(let i=0;i<60;i++){
    const c=document.createElement('div');
    c.className='confetti-piece';
    c.style.left=rand(0,100)+'%';
    c.style.background=colors[rand(0,colors.length-1)];
    c.style.animationDuration=rand(2,5)+'s';
    c.style.animationDelay=(rand(0,30)/10)+'s';
    c.style.borderRadius=rand(0,1)?'50%':'0';
    c.style.width=rand(6,14)+'px'; c.style.height=rand(6,14)+'px';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),6000);
  }
}

// ===== EXIT =====
window.exitGame=function(){
  showModal('나가기','<p>정말 나가시겠습니까?</p>',
    `<button class="btn btn-danger" onclick="hideModal();initLobby()">나가기</button><button class="btn" onclick="hideModal()">취소</button>`
  );
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', ()=>{
  initLobby();
  // Lobby buttons
  $('#play-btn').onclick=()=>{$('#play-options').style.display='flex';$('#play-btn').style.display='none';};
  $('#bot-play-btn').onclick=()=>showScreen('setup-screen');
  $$('.bot-option').forEach(b=>{
    b.onclick=()=>{$$('.bot-option').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');};
  });
  $('#start-game-btn').onclick=()=>{
    const sel=$('.bot-option.selected');
    const n=sel?parseInt(sel.dataset.count):1;
    startGame(n);
  };
  $('#replay-btn').onclick=()=>{document.querySelectorAll('.confetti-piece').forEach(c=>c.remove());startGame(3);};
  $('#end-btn').onclick=()=>{document.querySelectorAll('.confetti-piece').forEach(c=>c.remove());initLobby();};
});
