import { useSlotMachineRollMutation, useSlotMachineStartGameMutation } from "../../../app/services/slotMachineApi";
import { ANIMATION_DELAY } from "../constants/slotMachineConstants";
import { useState, useEffect } from 'react';

const useSlotMachine = () => {
  const [startGame, { data: game }] = useSlotMachineStartGameMutation()
  const [roll, { data: attempt, isLoading: isRollLoading }] = useSlotMachineRollMutation()
  const [credit, setCredit] = useState<number>();
  const [slots, setSlots] = useState(["", "", ""]);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (game) {
      setCredit(game.credit);
    }
  }, [game])

  useEffect(() => {
    if (isRollLoading) {
      setSlots(["X", "X", "X"]);
      setIsSpinning(true);
    }
  }, [isRollLoading])

  useEffect(() => {
    if (attempt) {
      setTimeout(() => setSlots([attempt.slots[0], "X", "X"]), ANIMATION_DELAY);
      setTimeout(() => setSlots([attempt.slots[0], attempt.slots[1], "X"]), ANIMATION_DELAY * 2);
      setTimeout(() => {
        setSlots([attempt.slots[0], attempt.slots[1], attempt.slots[2]])
        setIsSpinning(false)
        setCredit(attempt.game.credit)
      }, ANIMATION_DELAY * 3);
    }
  }, [attempt])

  return {
    startGame,
    game,
    roll,
    credit,
    slots,
    isSpinning,
  }
}

export default useSlotMachine;