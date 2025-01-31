import chalk from "chalk";
import fs from "fs";

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((e) => e.title === title);

  debugger;

  if (duplicateNote) {
    console.log("title taken!");
  } else {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("note added!");
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((e) => e.title === title);

  if (foundNote) {
    console.log(chalk.bgBlue(foundNote.title));
    console.log(foundNote.body);
  } else {
    console.log(chalk.bgRed("Note not found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((element) => {
    console.log(chalk.bgBlue(element.title));
  });
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const filteredNotes = notes.filter((e) => {
    return e.title !== title;
  });

  if (filteredNotes.length == notes.length) {
    console.log(chalk.bgRed("Title doesn't exist"));
  } else {
    saveNotes(filteredNotes);
    console.log(chalk.bgGreen("Note removed!"));
  }
};

const updateNotes = (title, body) => {};

export { addNotes, updateNotes, removeNotes, listNotes, readNote };
