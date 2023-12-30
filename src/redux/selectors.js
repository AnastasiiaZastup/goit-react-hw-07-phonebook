import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter;
export const selectError = state => state.contacts.contacts.error;
export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectVisible = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!contacts || !filter) {
      return [];
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
