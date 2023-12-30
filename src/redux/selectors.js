import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items || [];
export const selectFilter = state => state.filter || '';
export const selectError = state => state.contacts.error || null;
export const selectIsLoading = state => state.contacts.isLoading || false;

export const selectVisible = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // Ensure contacts and filter are defined
    if (!contacts || !filter) {
      return [];
    }

    // Filter contacts based on the provided filter
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
