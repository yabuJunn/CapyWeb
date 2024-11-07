import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MissionState {
  completedMissions: number;
  capyPoints: number;
  saverLevel: string;
  progress: number;
}

const initialState: MissionState = {
  completedMissions: 0,
  capyPoints: 0,
  saverLevel: "Rookie",
  progress: 0,
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    completeMission: (state, action: PayloadAction<number>) => {
      state.completedMissions += 1;
      state.capyPoints += action.payload;
      state.progress += 10; 

      
      if (state.capyPoints >= 1000) {
        state.saverLevel = "Expert";
      } else if (state.capyPoints >= 500) {
        state.saverLevel = "Intermediate";
      } else {
        state.saverLevel = "Rookie";
      }
    },
  },
});

export const { completeMission } = missionsSlice.actions;
export default missionsSlice.reducer;
