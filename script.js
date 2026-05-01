function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

document.addEventListener('click', e => {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

/* ── 게임 추천 배너 ─────────────────────────────── */
const STEAM_TOP_100 = [
  "Counter-Strike 2", "Dota 2", "PUBG: Battlegrounds", "Apex Legends",
  "Destiny 2", "Path of Exile", "Rust", "Terraria", "Team Fortress 2",
  "Garry's Mod", "Cyberpunk 2077", "Elden Ring", "Red Dead Redemption 2",
  "Grand Theft Auto V", "Baldur's Gate 3", "Hogwarts Legacy", "Stardew Valley",
  "Hollow Knight", "Dead by Daylight", "Tom Clancy's Rainbow Six Siege",
  "Warframe", "Lost Ark", "Monster Hunter: World", "Rocket League",
  "Among Us", "Valheim", "The Forest", "Subnautica", "No Man's Sky",
  "Deep Rock Galactic", "It Takes Two", "Phasmophobia", "Satisfactory",
  "Factorio", "Arma 3", "DayZ", "Left 4 Dead 2", "Portal 2",
  "Half-Life: Alyx", "Sekiro: Shadows Die Twice", "Dark Souls III",
  "Monster Hunter Rise", "Sons of the Forest", "Sea of Thieves", "Paladins",
  "Diablo IV", "Overwatch 2", "V Rising", "Hades", "Cuphead", "Celeste",
  "Disco Elysium", "The Witcher 3: Wild Hunt", "Divinity: Original Sin 2",
  "RimWorld", "Dwarf Fortress", "Project Zomboid", "7 Days to Die",
  "Hunt: Showdown", "Squad", "Hell Let Loose", "War Thunder",
  "Dragon's Dogma II", "Lies of P", "Armored Core VI: Fires of Rubicon",
  "Starfield", "Palworld", "Helldivers 2", "Manor Lords", "Enshrouded",
  "Last Epoch", "Dave the Diver", "Vampire Survivors", "Brotato",
  "Slay the Spire", "Monster Train", "Into the Breach",
  "FTL: Faster Than Light", "Hades II", "Death Stranding", "God of War",
  "Marvel's Spider-Man Remastered", "Horizon Zero Dawn Remastered",
  "Ghost of Tsushima", "Resident Evil 4", "Resident Evil Village",
  "Devil May Cry 5", "Street Fighter 6", "Mortal Kombat 1", "Tekken 8",
  "EA Sports FC 24", "NBA 2K24", "F1 24", "Forza Horizon 5",
  "Microsoft Flight Simulator", "Age of Empires IV", "Civilization VI",
  "Total War: Warhammer III", "Hearts of Iron IV", "Stellaris",
  "Crusader Kings III", "Europa Universalis IV"
];

let shownGames = new Set();

function buildBanner() {
  const banner = document.createElement('div');
  banner.id = 'game-banner';
  banner.innerHTML = `
    <button id="banner-btn" aria-label="게임 추천">
      <span class="banner-icon">🎲</span>
      <span class="banner-label">다음엔?</span>
    </button>
    <div id="banner-popup" hidden>
      <div class="popup-header">
        <span class="popup-title">다음 게임 추천</span>
        <button class="popup-close" id="popup-close" aria-label="닫기">✕</button>
      </div>
      <div id="popup-result" class="popup-result">
        <span class="popup-hint">버튼을 눌러 게임을 추천받으세요!</span>
      </div>
      <button id="recommend-btn" class="recommend-btn">다음 게임 뭐하지?</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('banner-btn').addEventListener('click', () => {
    const popup = document.getElementById('banner-popup');
    popup.hidden = !popup.hidden;
  });

  document.getElementById('popup-close').addEventListener('click', () => {
    document.getElementById('banner-popup').hidden = true;
    shownGames.clear();
    document.getElementById('popup-result').innerHTML =
      '<span class="popup-hint">버튼을 눌러 게임을 추천받으세요!</span>';
  });

  document.getElementById('recommend-btn').addEventListener('click', () => {
    const remaining = STEAM_TOP_100.filter(g => !shownGames.has(g));
    const resultEl = document.getElementById('popup-result');
    if (remaining.length === 0) {
      resultEl.innerHTML = '<span class="popup-hint">추천 가능한 게임을 모두 소진했어요!</span>';
      return;
    }
    const pick = remaining[Math.floor(Math.random() * remaining.length)];
    shownGames.add(pick);
    resultEl.innerHTML = `<span class="popup-game">${pick}</span>
      <span class="popup-count">${shownGames.size} / ${STEAM_TOP_100.length}</span>`;
  });
}

buildBanner();
