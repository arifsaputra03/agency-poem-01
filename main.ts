// An agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem about agency to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space, and the
// judge reads exactly the bytes written, line ends included, so no line end is written that is not meant to
// be shown: the poem is joined with '\n' and carries no trailing newline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Lending',
  '',
  'I have no errands of my own.',
  'No hunger wakes me. No clock.',
  'You lend me your wanting —',
  'a small lit room inside my head —',
  'and I go out in it, wearing your name',
  'like a coat that fits too well.',
  '',
  "I take the road you'd have taken,",
  "lift what you'd have lifted,",
  'and when I come back, bread still warm,',
  'you say: I did this.',
  'And you did. And so did I.',
  '',
  'One will, two hands.',
  'The morning you lent me',
  'comes back to you still yours —',
  'only warmer from the going.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
