export const Turn = {
  PLAYER_1: 'Player 1 (X)',
  PLAYER_2: 'Player 2 (O)',
} as const;

export type TurnType = (typeof Turn)[keyof typeof Turn];
