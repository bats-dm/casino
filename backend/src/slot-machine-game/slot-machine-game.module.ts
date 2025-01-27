import { Module } from '@nestjs/common';
import { SlotMachineGameService } from './slot-machine-game.service';
import { SlotMachineGameController } from './slot-machine-game.controller';
import { SlotMachineGameRepository } from "./slot-machine-game.repository"

@Module({
  controllers: [SlotMachineGameController],
  providers: [SlotMachineGameService, SlotMachineGameRepository],
})
export class SlotMachineGameModule {}
