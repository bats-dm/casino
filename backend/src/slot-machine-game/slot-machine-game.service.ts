import { Injectable, NotFoundException, Scope } from '@nestjs/common'
import { CreateSlotMachineGameDto } from './dto/create-slot-machine-game.dto';
import { SlotMachineGameRepository } from "./slot-machine-game.repository"
import { SlotMachineGame } from "./entities/slot-machine-game.entity"
import { SlotMachineRollerService } from "./slot-machine-roller.service"
import { SlotMachinePrizeCalculatorService } from "./slot-machine-prize-calculator.service"
import { INITIAL_CREDIT } from "./constants/slot-machine-constants"

@Injectable({ scope: Scope.REQUEST })
export class SlotMachineGameService {
  constructor(private readonly repo: SlotMachineGameRepository) {
  }

  start() {
    const game = new SlotMachineGame();
    game.credit = INITIAL_CREDIT;

    return this.repo.save(game);
  }

  roll() {
    const game = this.repo.get()

    if (!game) {
      throw new NotFoundException('Game is not started')
    }

    // Generate slots and prize
    let slots = SlotMachineRollerService.generateSlots(game.credit)
    let prize = SlotMachinePrizeCalculatorService.calculatePrize(slots)

    // If you win too much - add a chance for re-roll :)
    if (
      prize &&
      (
        (game.credit >= 60 && SlotMachineRollerService.isRerollNeeded(60)) ||
        (game.credit >= 40 && SlotMachineRollerService.isRerollNeeded(30))
      )
    ) {
      slots = SlotMachineRollerService.generateSlots(game.credit)
      prize = SlotMachinePrizeCalculatorService.calculatePrize(slots)
    }

    game.credit = prize ? game.credit + prize : game.credit - 1

    if (game.credit <= 0) {
      this.finish()
    }

    return { game, slots, prize };
  }

  gameInfo() {
    const game = this.repo.get()

    if (!game) {
      throw new NotFoundException('Game is not started')
    }

    return game;
  }

  finish() {
    this.repo.remove();
  }
}
