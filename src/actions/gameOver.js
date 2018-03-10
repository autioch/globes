const MAX_RECORDS = 5;
const STOREAGE_KEY = 'globes';
const ORDER_KEY = 'points';

export default function gameOver() {
  const records = JSON.parse(localStorage.getItem(STOREAGE_KEY) || [])
    .concat({
      points: 10
    })
    .sort((recordA, recordB) => recordB[ORDER_KEY] - recordA[ORDER_KEY])
    .slice(0, MAX_RECORDS);

  localStorage.setItem(STOREAGE_KEY, JSON.stringify(records));

  return {
    isPaused: false,
    isOver: true,
    records,
    recordProps: ['points']
  };
}
