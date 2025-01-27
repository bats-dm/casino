import { Inject, Injectable } from '@nestjs/common'
import { SlotMachineGame } from "./entities/slot-machine-game.entity"
import { REQUEST } from "@nestjs/core"

@Injectable()
export class SlotMachineGameRepository {
  constructor(@Inject(REQUEST) private readonly request) {

  }

  save(game: SlotMachineGame) {
    this.request.session.game = game

    return game
  }

  get() {
    return this.request.session.game
  }

  remove() {
    delete this.request.session.game
  }
}
