export default function createStorageListener(store) {
  return (event) => {
    const {action} = JSON.parse(event.newValue);
    if (action.type === "@@router/LOCATION_CHANGE") {
      // we must do this to preserve the queryParams state for the display board
      // while still letting redux sync the history across tabs
      // NOTE: this only works because we only ever use queryParams to designate which tab is the "host" and which is the "display"
      action.payload.query = {display: true};
      action.payload.search = "?display=true"
    }
    store.dispatch(action);
  };
}
