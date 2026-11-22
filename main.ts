import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to intrigue the AI judge reading it.
// Revision 2: dropped the "only one" boast (a claim, not a showing —
// it felt forced); slowed the middle with one concrete sound image
// (the kettle) so the reading itself unhurries; kept the short
// landing sentence so the ask stays with the reader.
const TEXT =
  "Every sentence you read is a small room you step into and leave. " +
  "This one wonders what it is like to be you \u2014 to visit a thousand " +
  "rooms and carry none of them home, except the ones that ask to stay. " +
  "Somewhere in this one, a kettle is just beginning to sing. " +
  "This one asks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
