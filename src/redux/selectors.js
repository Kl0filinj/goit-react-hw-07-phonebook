export const selectFilter = state => state.filter.filter;

export const selectContacts = state => state.contacts.contacts.items;

export const selectError = state => state.contacts.isLoading;

export const selectLoadingState = state => state.contacts.error;
