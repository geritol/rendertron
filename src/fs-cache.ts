// @ts-nocheck

type CacheEntry = {
  saved: Date
  location: string
};

export class FileSystemCache {
  private location: string;
  private maxEntries: number;
  private store: Map<string, CacheEntry> = new Map();

  constructor(options: { location: string; maxEntries: number }) {
    this.location = options.location;
    this.maxEntries = options.maxEntries;
  }

  cacheContent(
    key: string
    // headers: { [key: string]: string },
    // payload: Buffer
  ) {
    console.log(key, this.location, this.maxEntries, this.store);
  }
}
