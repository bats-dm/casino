import { SLOT_MACHINE_PRIZES, SLOT_MACHINE_SYMBOLS } from "./constants/slot-machine-constants"

export class SlotMachineRollerService {
  static generateSlots() {
    const size = SLOT_MACHINE_SYMBOLS.length;

    const slots: string[] = []
    for (let i = 0; i < 3; i++) {
      slots.push(SLOT_MACHINE_SYMBOLS[Math.floor(Math.random() * size)]);
    }

    return slots
  }

  static isRerollNeeded(chanceInPercent: number): boolean {
    return Math.random() * 100 < chanceInPercent;
  }
}
