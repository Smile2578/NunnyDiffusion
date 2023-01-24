import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';
import axios from 'axios';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export async function deleteCard(_id) {
  try {
    const response = await fetch(`/api/posts/${_id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      console.log("Card deleted successfully");
    } else {
      console.error("Failed to delete card");
    }
  } catch (error) {
    console.error('Error:', error);
  }
}