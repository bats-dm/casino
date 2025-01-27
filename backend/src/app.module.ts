import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlotMachineGameModule } from './slot-machine-game/slot-machine-game.module';

@Module({
  imports: [SlotMachineGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
