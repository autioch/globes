const STOREAGE_KEY = 'globes';

export default function showRecords() {
  return {
    records: JSON.parse(localStorage.getItem(STOREAGE_KEY) || '[]'),
    recordProps: ['Points', 'Hits', 'Remaining', 'Time']
  };
}
