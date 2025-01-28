import { Controller, Get, Post, Body, Patch } from '@nestjs/common'
import { SlotMachineGameService } from './slot-machine-game.service';

@Controller('slot-machine-game')
export class SlotMachineGameController {
  constructor(private readonly slotMachineGameService: SlotMachineGameService) {}

  @Post('start')
  start() {
    return this.slotMachineGameService.start();
  }

  @Get('info')
  info() {
    return this.slotMachineGameService.gameInfo();
  }

  @Patch('roll')
  roll() {
    return this.slotMachineGameService.roll();
  }

  @Patch('finish')
  finish() {
    this.slotMachineGameService.finish();
  }
}
