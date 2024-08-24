// src/services/notes.js
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/notes'; // Matches the custom server setup

// Get all notes
const getAll = () => {
  return axios.get(baseUrl)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching notes:', error);
      throw error;
    });
};

// Create a new note
const create = (newObject) => {
  return axios.post(baseUrl, newObject)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating note:', error);
      throw error;
    });
};

// Update an existing note
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating note:', error);
      throw error;
    });
};

export default { getAll, create, update };
