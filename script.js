const killerData = {
  trapper: {
    name: '트래퍼',
    en: 'The Trapper',
    icon: '⚙',
    bgClass: 'trapper-bg',
    power: '곰 덫 (Bear Trap)',
    desc: '맥밀란 부동산의 아들, 에반 맥밀란. 어린 시절부터 잔인한 아버지 아래 학대받으며 성장했다. '
        + '광산 노동자들을 처리하는 데 익숙해진 그는 결국 폐허가 된 맥밀란 농장에서 개체에게 선택받았다. '
        + '땅 곳곳에 철제 곰 덫을 설치해 생존자의 발을 옭아매는 것이 특기. '
        + '가장 오래된 살인마 중 하나로, Dead by Daylight의 상징적인 존재다.',
  },
  wraith: {
    name: '레이스',
    en: 'The Wraith',
    icon: '🔔',
    bgClass: 'wraith-bg',
    power: '와일링 벨 (Wailing Bell)',
    desc: '필립 오조모, 불법 폐차 업자의 하수인으로 일하다 자신이 처리한 차 안에 사람들이 살아있었다는 것을 알게 됐다. '
        + '절망한 그는 개체에 이끌려 안개 속으로 사라졌다. '
        + '와일링 벨을 울려 완전히 투명해지는 능력을 가지고 있어, 생존자 몰래 접근해 기습하는 데 특화되어 있다.',
  },
  huntress: {
    name: '헌트리스',
    en: 'The Huntress',
    icon: '🪓',
    bgClass: 'huntress-bg',
    power: '손도끼 던지기 (Hunting Hatchets)',
    desc: '안나, 러시아 오지의 숲에서 홀로 자란 여인. 어린 시절 어머니가 곰에게 잡혀간 뒤 야생에서 생존하며 사냥 본능을 키웠다. '
        + '토끼 마스크를 쓰고 아이들의 자장가를 흥얼거리며 먹잇감을 추적한다. '
        + '손도끼를 원거리에서 정확하게 던져 생존자를 맞히는 유일한 살인마로, 중거리 공격이 가능하다.',
  },
  nurse: {
    name: '너스',
    en: 'The Nurse',
    icon: '✂',
    bgClass: 'nurse-bg',
    power: '스펜서의 마지막 숨 (Spencer\'s Last Breath)',
    desc: '샐리 스펜서, 외딴 정신병원에서 수십 년을 일한 간호사. 극심한 과로와 환자들의 폭력 속에서 정신이 무너져내렸다. '
        + '그녀는 결국 그 병원에서 생을 마감했고, 개체에 의해 안개로 소환되었다. '
        + '블링크로 벽과 장애물을 순간이동하듯 통과하는 능력을 가져, 숨을 공간이 없다. '
        + '가장 높은 기술 난이도와 함께 최강 살인마로 손꼽힌다.',
  },
};

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalPortrait = document.getElementById('modalPortrait');
const portraitIcon = document.getElementById('portraitIcon');
const modalEn = document.getElementById('modalEn');
const modalName = document.getElementById('modalName');
const modalPower = document.getElementById('modalPower');
const modalDesc = document.getElementById('modalDesc');

document.querySelectorAll('.killer-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.killer;
    const data = killerData[key];

    // 초기화
    modalPortrait.className = 'modal-portrait ' + data.bgClass;
    portraitIcon.textContent = data.icon;
    modalEn.textContent = data.en;
    modalName.textContent = data.name;
    modalPower.textContent = data.power;
    modalDesc.textContent = data.desc;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
