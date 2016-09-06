function timestampAction(action) {
  return {
    action,
    time: Date.now()
  };
}

export default function createStorageMiddleware() {
  // this will never change for a given browser tab instance, so we should memoize
  const isHostInstance = !window.location.search.match(/display/)
  console.log(window.location.search)
  return () => (next) => (action) => {
    const stampedAction = timestampAction(action);
    if (isHostInstance) localStorage.setItem('JEOPARDY-SYNC', JSON.stringify(stampedAction));
    next(action);
  };
}
