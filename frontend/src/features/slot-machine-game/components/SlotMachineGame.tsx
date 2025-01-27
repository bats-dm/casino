import { Button, Grid, Paper, Typography, Box, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import useSlotMachine from "../hooks/useSlotMachine.ts";

const SlotMachineGame = () => {
  const { game, startGame, slots, roll, credit, isSpinning } = useSlotMachine()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Slot Machine
      </Typography>
      {(game && credit && credit > 0) ? (
        <>
          <Grid container spacing={2} justifyContent="center">
            {slots.map((slot, index) => (
              <Grid item key={index}>
                <Paper elevation={3} sx={{width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  {slot === 'X' ? (
                    <motion.div animate={{rotate: 360}} transition={{duration: 0.5, repeat: Infinity }}>
                      <Typography variant="h3">{slot}</Typography>
                    </motion.div>
                  ) : (
                    <Typography variant="h3">{slot}</Typography>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box mt={3}>
            <Button disabled={isSpinning} variant="contained" color="primary" onClick={() => roll()}>
              Spin
            </Button>
          </Box>
          <Box mt={3}>
            <Typography variant="h5">Score: {credit}</Typography>
          </Box>
        </>
      ) : (
        <>
          {credit !== undefined && credit === 0 &&
            <Alert variant="outlined" severity="warning">
              Game Over!
            </Alert>
          }
          <Box mt={3}>
            <Button variant="contained" color="primary" onClick={() => startGame()}>
              Start Game
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SlotMachineGame;
