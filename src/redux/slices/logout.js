
const token = useSelector((state) => state.token)
console.log("🚀 ~ token:", token)


const initialState = {
    loading: false,
    userInfo: {},
    error: null,
    status: STATUSES.IDLE,
    token: null,
  };



 const logoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {
      // Add your other reducers here if needed
      // For example, you can add a logout action like this:
      logoutUser(state) {
        state.userInfo = {};
        state.token = null;
        state.status = STATUSES.IDLE;
        state.error = null;
      },
    },
  
    extraReducers: (builder) => {
      // Handle the logout action
      builder.addCase(PURGE, (state) => {
        state.userInfo = {};
        state.token = null;
        state.status = STATUSES.IDLE;
        state.error = null;
      });
  
      // Add other extra reducers as needed
    },
  });
  

  export const { logoutUser } = logoutSlice.actions;

// Export the reducer
export default logoutSlice.reducer;