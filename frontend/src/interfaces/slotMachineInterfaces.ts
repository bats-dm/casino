export interface SlotMachineGame {
  credit: number;
}

export interface SlotMachineRoll {
  game: SlotMachineGame;
  slots: string[];
  prize: number;
}