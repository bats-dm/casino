import { SLOT_MACHINE_PRIZES, SLOT_MACHINE_SYMBOLS } from "./constants/slot-machine-constants"

export class SlotMachinePrizeCalculatorService {
  static calculatePrize(slots: string[]) {
    let prize = 0;
    let winningSymbol: string | null = slots[0];

    for (let i = 0; i < slots.length; i++) {
      if (winningSymbol !== slots[i]) {
        winningSymbol = null;
      }
    }

    if (winningSymbol) {
      prize = SLOT_MACHINE_PRIZES[SLOT_MACHINE_SYMBOLS.indexOf(winningSymbol)];
    }

    return prize;
  }
}
