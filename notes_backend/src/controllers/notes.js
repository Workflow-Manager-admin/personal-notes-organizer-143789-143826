const { v4: uuidv4 } = require('uuid');
let { notes } = require('../models/note');

class NotesController {
  // Get all notes
  getAllNotes(req, res) {
    return res.status(200).json(notes);
  }

  // Get a single note by ID
  getNoteById(req, res) {
    const note = notes.find((n) => n.id === req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    return res.status(200).json(note);
  }

  // Create a new note
  createNote(req, res) {
    const { title, content, tags } = req.body;
    const newNote = {
      id: uuidv4(),
      title,
      content,
      tags: tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    notes.push(newNote);
    return res.status(201).json(newNote);
  }

  // Update an existing note
  updateNote(req, res) {
    const { id } = req.params;
    const { title, content, tags } = req.body;

    const noteIndex = notes.findIndex((n) => n.id === id);
    if (noteIndex === -1) {
      return res.status(404).json({ message: 'Note not found' });
    }

    const updatedNote = {
      ...notes[noteIndex],
      title,
      content,
      tags,
      updatedAt: new Date().toISOString(),
    };
    notes[noteIndex] = updatedNote;
    return res.status(200).json(updatedNote);
  }

  // Delete a note
  deleteNote(req, res) {
    const { id } = req.params;
    const initialLength = notes.length;
    notes = notes.filter((n) => n.id !== id);

    if (notes.length === initialLength) {
      return res.status(404).json({ message: 'Note not found' });
    }
    return res.status(204).send(); // No content
  }
}

module.exports = new NotesController();
