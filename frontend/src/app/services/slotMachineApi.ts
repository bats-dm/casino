import { api } from "./api.ts";
import { SlotMachineGame, SlotMachineRoll } from "../../interfaces/slotMachineInterfaces"

export const providerFormApi = api.injectEndpoints({
  endpoints: (build) => {
    return {
      slotMachineStartGame: build.mutation<SlotMachineGame, void>({
        query: () => ({
          url: `slot-machine-game/start`,
          method: "POST",
        }),
      }),
      slotMachineRoll: build.mutation<SlotMachineRoll, void>({
        query: () => ({
          url: `slot-machine-game/roll`,
          method: "PATCH",
        }),
      }),
      slotMachineFinishGame: build.mutation<void, void>({
        query: () => ({
          url: `slot-machine-game/finish`,
          method: "PATCH",
        }),
      }),
    }
  },
});

export const {
  useSlotMachineStartGameMutation,
  useSlotMachineRollMutation,
  useSlotMachineFinishGameMutation,
} = providerFormApi;
