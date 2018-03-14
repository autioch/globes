const STORAGE_KEY = 'globes';

export default function showRecords() {
  return {
    records: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
    recordProps: ['Points', 'Hits', 'Remaining', 'Time']
  };
}
