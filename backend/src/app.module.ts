import { Module } from '@nestjs/common';
import { SlotMachineGameModule } from './slot-machine-game/slot-machine-game.module';

@Module({
  imports: [SlotMachineGameModule],
})
export class AppModule {}
