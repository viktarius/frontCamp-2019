import EventEmitter from '../_helpers/EventEmitter';

export default class SourcesModel extends EventEmitter {
  constructor(sources) {
    super();
    this._sources = sources || [];
  }

  get sources() {
    return this._sources;
  }

  set sources(sources) {
    const sourcesSet = new Set();
    for (const source of sources) {
      sourcesSet.add(source.id);
    }
    this._sources = sourcesSet;
    this.emit('sourcesChange', sources);
  }
}
