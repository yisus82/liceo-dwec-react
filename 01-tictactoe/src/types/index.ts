export const Turn = {
  PLAYER_1: 'Player 1 (X)',
  PLAYER_2: 'Player 2 (O)',
} as const;

export type Turn = (typeof Turn)[keyof typeof Turn];

export const CellValue = {
  PLAYER_1: 'X',
  PLAYER_2: 'O',
  EMPTY: '',
} as const;

export type CellValue = (typeof CellValue)[keyof typeof CellValue];

export type BoardType = CellValue[][];
