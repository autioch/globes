const STOREAGE_KEY = 'globes';

export default function recordShow() {
  return {
    records: JSON.parse(localStorage.getItem(STOREAGE_KEY) || '[]'),
    recordProps: ['Points', 'Hits', 'Remaining', 'Time']
  };
}
