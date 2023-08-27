let cacheInvalidated = false;

export function invalidateCache() {
  cacheInvalidated = true;
}

export function isCacheInvalidated() {
  return cacheInvalidated;
}

export function resetCacheInvalidation() {
  cacheInvalidated = false;
}
