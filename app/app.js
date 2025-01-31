import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNotes, listNotes, readNote, removeNotes } from "./notes.js";

yargs(hideBin(process.argv))
  .version("1.1.1")
  .command({
    command: "add",
    describe: "Add a new date",
    builder: {
      title: { describe: "Note title", demandOption: true, type: "string" },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      addNotes(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove existing note",
    builder: {
      title: { describe: "Note title", demandOption: true, type: "string" },
    },
    handler(argv) {
      removeNotes(argv.title);
    },
  })
  .command({
    command: "read",
    describe: "Read existing note",
    builder: {
      title: { describe: "Note title", demandOption: true, type: "string" },
    },
    handler(argv) {
      readNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "Listing all existing notes",
    handler() {
      listNotes();
    },
  }).argv;
