import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const pointsSlice = createSlice({
  name: 'points',
  initialState: {
    data: {},
  },
  extraReducers: builder => {
    builder.addCase(fetchPoints.pending, (state, action) => {
      // console.log(action, state)
      // state.status = STATUSES.LOADING
    });
    builder.addCase(fetchPoints.fulfilled, (state, action) => {
      // console.log(action, state)
      // state.status = STATUSES.IDLE
      state.data = action.payload;
      // state.points = action.payload?.totalCompletedPoints;
      // state.streaks = action.payload?.streaks;
    });
    builder.addCase(fetchPoints.rejected, (state, action) => {
      // console.log(action, state)
      // state.status = STATUSES.ERROR
    });
  },
});

export const fetchPoints = createAsyncThunk('points/fetch', async id => {
  const pointsData = await fetch(
    `https://4-pillar-backend.vercel.app/api/v1/points/get-points/${id}`,
  );
  // console.log('pointsData ==> ', pointsData);
  const points = await pointsData.json();
  console.log('points ==> ', points?.data?.pointsData[0]);
  return points?.data?.pointsData[0];
});

const {reducer} = pointsSlice;
export default reducer;
