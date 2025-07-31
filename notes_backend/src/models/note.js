const { v4: uuidv4 } = require('uuid');

// In-memory data store for notes
let notes = [
  {
    id: uuidv4(),
    title: 'First Note',
    content: 'This is the first sample note.',
    tags: ['sample', 'getting-started'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Second Note',
    content: 'This is another sample note, with different tags.',
    tags: ['sample', 'ideas'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

module.exports = { notes };
