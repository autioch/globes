const MAX_RECORDS = 5;
const STOREAGE_KEY = 'globes';
const ORDER_INDEX = 0;

const SIXTY = 60;
const THOUSAND = 1000;

function format(milliseconds) {
  let seconds = parseInt((milliseconds / THOUSAND) % SIXTY, 10);
  let minutes = parseInt(milliseconds / (THOUSAND * SIXTY), 10);

  seconds = minutes > 0 && seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes > 0 ? `${minutes}m ` : '';

  return `${minutes}${seconds}s`;
}

export default function addRecord({ stats, duration }) {
  const loadedRecords = JSON.parse(localStorage.getItem(STOREAGE_KEY) || '[]');
  const newRecord = [stats.points.value, stats.hit.value, stats.active.value, format(duration)];
  const records = loadedRecords.concat([newRecord]);

  records.sort((recordA, recordB) => recordB[ORDER_INDEX] - recordA[ORDER_INDEX]);
  const trimmedRecords = records.slice(0, MAX_RECORDS);

  localStorage.setItem(STOREAGE_KEY, JSON.stringify(trimmedRecords));

  return {};
}
