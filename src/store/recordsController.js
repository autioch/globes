const MAX_RECORDS = 5;

export default class RecordsController {
  constructor({ maxRecords = MAX_RECORDS, key = '', orderKey = 'points' }) {
    this.maxRecords = maxRecords;
    this.key = `qb-highscore__${key}`;
    this.orderKey = orderKey;
    this.records = [];
    this.load();
  }
  load() {
    const loadedRecords = localStorage.getItem(this.key);

    this.records = loadedRecords ? JSON.parse(loadedRecords) : [];
  }
  save() {
    localStorage.setItem(this.key, JSON.stringify(this.records));
  }
  add(record) {
    const { orderKey } = this;

    this.records.push(record);
    this.records.sort((a, b) => b[orderKey] - a[orderKey]); // eslint-disable-line id-length
    this.trim();
    this.save();
  }
  trim() {
    const { maxRecords } = this;

    if (this.records.length > maxRecords) {
      this.records = this.records.slice(0, maxRecords);
    }
  }
  reset() {
    this.records = [];
    this.save();
  }
}
