import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Toast} from 'toastify-react-native';
import {LogOut} from '../../assets/theme/svgimages';
import {tokens} from 'react-native-paper/lib/typescript/styles/themes/v3/tokens';
import {PURGE} from 'redux-persist';

const STATUSES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

// Replace with your actual login endpoint URL
// const backendURL = 'http://your-backend-url';

// Asynchronous thunk for logging in a user
export const loginUser = createAsyncThunk(
  'users/login',
  async ({email, password, navigation}, {rejectWithValue}) => {
    // console.log('email, password ReduexFile============================>',email, password);
    // const token = await AsyncStorage.getItem("token");
    // console.log("tokenLoginReduxFile=====================>", token);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
      },
    };

    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/users/login ',
      {
        method: 'POST',
        body: JSON.stringify({email, password}),
        ...config,
        // token,
      },
    );

    const data = await response.json();

    // const token = await data?.token;
    // console.log("🚀 ~ token:", token)
    // const token = state?.auth?.token
    // console.log("state?.auth?.token", token);
    if (!response.ok) {
      Toast.error(data?.message);
      // console.log("date========================>");
    } else {
      navigation.navigate('MyTabs');

      return data;
    }
  },
);

// http://192.168.10.12:3030

export const loginUserChild = createAsyncThunk(
  'users/children-login',
  async ({email, password, navigation}, {rejectWithValue}) => {
    // console.log('email, password ReduexFile============================>',email, password);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/users/children-login ',
      {
        method: 'POST',
        body: JSON.stringify({email, password}),
        ...config,
        // token,
      },
    );
    // console.log("responseLogin", response)

    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    // console.log("data=========>", data);

    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      navigation.navigate('MyTabs');

      return data;
    }
  },
);

// Asynchronous thunk for registering a user

export const signupUser = createAsyncThunk(
  'users/signup',
  async (
    {firstName, lastName, email, dob, password, role, scoringLevel, navigation},
    {rejectWithValue},
  ) => {
    //  console.log("SignupApi", firstName, lastName, email, dob, password, role, scoringLevel);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/users/signup',
      {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          dob,
          password,
          role,
          scoringLevel,
        }),
        ...config,
      },
    );

    const data = await response.json();

    if (!response.ok) {
      // Check if the user already exists
      if (response.status === 409) {
        // Assuming the API returns a specific message for this case
        Toast.error(data?.message || 'A user with this email already exists.');
        // Call toggleModalSec() here to close the modal or show an error message
        return rejectWithValue({
          ...data,
          message: 'A user with this email already exists.',
        });
      } else {
        Toast.error(
          data?.message || 'An unexpected error occurred during registration.',
        );
        return rejectWithValue(data);
      }
    } else {
      //  console.log('Registration successful');
      // navigation.navigate('Login');
      navigation.navigate('Onboarding');
      Toast.success(data?.message);
      return data;
    }
  },
);

export const sendOTP = createAsyncThunk(
  'users/forgotPassword',
  async (email, {rejectWithValue}) => {
    // console.log("forgotPasswordEmailReduxFile=======================>", email);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(
        'https://4-pillar-backend.vercel.app/api/v1/users/forgotPassword',
        {
          method: 'POST',
          body: JSON.stringify({email}),
          ...config,
        },
      );
      // console.log("forgotPassword", response)
      const data = await response.json();
      // console.log("forgotPassword", data);
      return data;
    } catch (error) {
      // console.log("errorSingupData",error?.message?.data?.message);
      // console.log("forgotPassword======================================>", error.message);
      return rejectWithValue(
        error.message || 'An unexpected error occurred during registration.',
      );
    }
  },
);

// ===============verifyOtp=============================
export const verifyOtp = createAsyncThunk(
  'users/verify-forgot-password-otp',
  async ({userEmail, otp}, {rejectWithValue}) => {
    // console.log("forgotPasswordotp, emailReduxFile=======================>",userEmail, otp);``
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(
        'https://4-pillar-backend.vercel.app/api/v1/users/verify-forgot-password-otp',
        {
          method: 'POST',
          body: JSON.stringify({email: userEmail, otpCode: otp}),
          ...config,
        },
      );
      // console.log("verify-forgot-password-otp-response==================================>", response)
      const data = await response.json();
      // console.log("verify-forgot-password-otp-data===================================>", data);
      return data;
    } catch (error) {
      // console.log("errorSingupData",error?.message?.data?.message);
      // console.log("verify-forgot-password-otp-error===============================================>", error.message);
      return rejectWithValue(
        error.message || 'An unexpected error occurred during registration.',
      );
    }
  },
);

// ====================================confirmPassword========================

export const confirmPassword = createAsyncThunk(
  'users/resetPasswordDone',
  async ({password, passwordConfirm, email}, {rejectWithValue}) => {
    // console.log("password, emailReduxFile=======================>",password, passwordConfirm, email);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(
        'https://4-pillar-backend.vercel.app/api/v1/users/resetPasswordDone',
        {
          method: 'POST',
          body: JSON.stringify({password, passwordConfirm, email}),
          ...config,
        },
      );
      // console.log("password-response==================================>", response)
      const data = await response.json();
      // console.log("password-data===================================>", data);
      return data;
    } catch (error) {
      // console.log("errorSingupData",error?.message?.data?.message);
      // console.log("password-error===============================================>", error.message);
      return rejectWithValue(
        error.message || 'An unexpected error occurred during registration.',
      );
    }
  },
);

// ===================writeGrtitude==========================

export const writeGrtitude = createAsyncThunk(
  'gratitude/write-gratitude',
  async (
    {gratitudeInput1, gratitudeInput2, gratitudeInput3, userId, navigation},
    {rejectWithValue},
  ) => {
    // console.log('email, password ReduexFile============================>',gratitudeInput1, gratitudeInput2,gratitudeInput3, userId);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/gratitude/write-gratitude',
      {
        method: 'POST',
        body: JSON.stringify({
          gratitudeInput1,
          gratitudeInput2,
          gratitudeInput3,
          userId,
        }),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    if (!response.ok) {
      Toast.error(data?.message);
      // console.log("date========================>");
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      navigation.navigate('MyTabs');
      Toast.success(data.message);
      return data;
    }
  },
);

// ======================writeJournals====================
export const writeJournals = createAsyncThunk(
  'journal/write-journal',
  async ({userId, journalType, freeFlow}, {rejectWithValue}) => {
    // console.log('email, password ReduexFile============================>', userId, journalType, freeFlow );

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/journal/write-journal',
      {
        method: 'POST',
        body: JSON.stringify({userId, journalType, freeFlow}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      return data;
    }
  },
);

export const writeJournalsReframe = createAsyncThunk(
  'journal/write-journal',
  async ({userId, journalType, reFrame}, {rejectWithValue}) => {
    // console.log('email, password ReduexFile============================>', userId, journalType, reFrame );

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // const { input1, input2, input3, input4, input5 } = reFrame;
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/journal/write-journal',
      {
        method: 'POST',
        body: JSON.stringify({userId, journalType, reFrame}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      return data;
    }
  },
);

export const writeJournalsDevotional = createAsyncThunk(
  'journal/write-journal',
  async ({userId, journalType, devotional}, {rejectWithValue}) => {
    // console.log('email, password ReduexFile============================>', userId, journalType, devotional );

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // const { input1, input2, input3, input4, input5 } = devotional;
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/journal/write-journal',
      {
        method: 'POST',
        body: JSON.stringify({userId, journalType, devotional}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      return data;
    }
  },
);

// =================inviteTeamMember==========================

export const inviteteamMember = createAsyncThunk(
  'users/children-invitaion',
  async ({userId, email, navigation}, {rejectWithValue}) => {
    // console.log('email,ReduexFile============================>', userId,  email);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/users/children-invitaion',
      {
        method: 'POST',
        body: JSON.stringify({userId, email}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    // console.log("==========================>",  data.token);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      navigation.goBack();
      return data;
    }
  },
);

export const emailsupportDrawer = createAsyncThunk(
  'support/supportMessage',
  async (
    {email, message, firstName, lastName, role, navigation},
    {rejectWithValue},
  ) => {
    // console.log('email,ReduexFile============================>',  email, message, firstName, lastName, role );

    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/help-and-support/supportMessage',
      {
        method: 'POST',
        body: JSON.stringify({email, message, firstName, lastName, role}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    // console.log("==========================>",  data.token);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      navigation.navigate('MyTabs');
      return data;
    }
  },
);

export const resetPassword = createAsyncThunk(
  'users/updateMyPassword',
  async (
    {passwordCurrent, password, passwordConfirm, token, navigation},
    {rejectWithValue},
  ) => {
    // console.log('email,ReduexFile============================>',token  );
    // const token = localStorage.getItem("token");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/users/updateMyPassword',
      {
        method: 'PATCH',
        body: JSON.stringify({passwordCurrent, password, passwordConfirm}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    // console.log("==========================>",  data.token);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      navigation.navigate('Login');
      return data;
    }
  },
);

export const helpMessage = createAsyncThunk(
  'support/helpmessage',
  async (
    {email, message, firstName, lastName, role, navigation},
    {rejectWithValue},
  ) => {
    // console.log('email,ReduexFile============================>',  email, message, firstName, lastName, role );
    // const token = localStorage.getItem("token");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
      },
    };
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/help-and-support/helpMessage',
      {
        method: 'POST',
        body: JSON.stringify({email, message, firstName, lastName, role}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    // console.log("apiDataLogin", data?.message);
    // console.log("==========================>",  data.token);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      navigation.navigate('MyTabs');
      return data;
    }
  },
);

export const updateProfile = createAsyncThunk(
  'users/updateMe',
  async ({firstName, lastName, dob, token}, {rejectWithValue}) => {
    // console.log('email,ReduexFile============================>',firstName, lastName, dob);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/users/updateMe',
      {
        method: 'PATCH',
        body: JSON.stringify({firstName, lastName, dob}),
        ...config,
      },
    );

    // console.log("responseLogin", response)
    const data = await response.json();
    console.log('🚀 ~ data:', data);
    console.log('apiDataLogin', data?.message);
    // console.log("==========================>",  data.token);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      // navigation.navigate('MyTabs');

      return data;
    }
  },
);

export const rowBtns = createAsyncThunk(
  'points/add-points',
  async (
    {
      userId,
      token,
      faith1,
      faith2,
      family1,
      family2,
      fitness1,
      fitness2,
      education,
      goals,
    },
    {rejectWithValue},
  ) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/points/add-points',
      {
        method: 'POST',
        body: JSON.stringify({
          userId,
          faith1,
          faith2,
          family1,
          family2,
          fitness1,
          fitness2,
          education,
          goals,
        }),
        ...config,
      },
    );

    console.log('responseLogin', response);
    const data = await response.json();
    console.log('apiDataLogin', data?.message);
    // console.log("==========================>",  data.token);
    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      // console.log('eeeeeeeeeeeeeeeeeeeeeeee');
      Toast.success(data.message);
      // navigation.navigate('MyTabs');

      return data;
    }
  },
);

//  ht
//  https://four-pillar-8ab34604fe05.herokuapp.com
// http://192.168.100.33:3030/api/v1/users/signup ,
// http://192.168.100.33:3030/api/v1/users/login
// https://four-pillar-8ab34604fe05.herokuapp.com/api/v1/users/signup
// "https://four-pillar-8ab34604fe05.herokuapp.com/api/v1/users/login"
// 192.168.100.33

// new
// https://192.168.100.33/api/v1/users/signup
// http://192.168.100.33:3030/api/v1/users/login

const initialState = {
  loading: false,
  userInfo: {},
  // userInfoChild: {},
  sendOTP: {},
  verifyOtp: {},
  confirmPassword: {},
  writeGrtitude: {},
  writeJournals: {},
  inviteteamMember: {},
  emailsupportDrawer: {},
  resetPassword: {},
  helpMessage: {},
  updateProfile: {},
  rowBtns: {},
  error: null,
  status: STATUSES.IDLE,
  token: null,
};

// Slice for managing authentication state
const authSlice = createSlice({
  name: 'auth',
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

    setUser(state, action) {
      state.loading = false;
      state.userInfo = action?.payload?.data?.user;
    },
  },
  extraReducers: builder => {
    // Handle the logout action
    builder.addCase(PURGE, state => {
      state.userInfo = {};
      state.token = null;
      state.status = STATUSES.IDLE;
      state.error = null;
    });

    // Add other extra reducers as needed
  },
  extraReducers: builder => {
    builder
      // ======================parentSectionStart=======================
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, {payload}) => {
        console.log('🚀 ~ .addCase ~ payload:', payload);
        state.loading = false;
        state.userInfo = payload.data.user;
        state.token = payload.data.token; // Save the token here
        state.status = STATUSES.SUCCESS;
      })
      .addCase(loginUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(signupUser.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(signupUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.userInfo = payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(signupUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      // Add sendOTP cases
      .addCase(sendOTP.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(sendOTP.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.sendOTP = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("payload=====================>", payload);
      })
      .addCase(sendOTP.rejected, state => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(verifyOtp.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(verifyOtp.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.verifyOtp = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("payloadverifyOtp=====================>", payload);
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(confirmPassword.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(confirmPassword.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.confirmPassword = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("payloadverifyOtp=====================>", payload);
      })
      .addCase(confirmPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(writeGrtitude.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(writeGrtitude.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.writeGrtitude = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("writeGrtitude=====================>", payload);
      })
      .addCase(writeGrtitude.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(writeJournals.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(writeJournals.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.writeJournals = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("writeJournals=====================>", payload);
      })
      .addCase(writeJournals.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(inviteteamMember.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(inviteteamMember.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.inviteteamMember = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("inviteteamMember=====================>", payload);
      })
      .addCase(inviteteamMember.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(emailsupportDrawer.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(emailsupportDrawer.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.emailsupportDrawer = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("emailsupportDrawer=====================>", payload);
      })
      .addCase(emailsupportDrawer.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(resetPassword.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(resetPassword.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.resetPassword = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("resetPassword=====================>", payload);
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(helpMessage.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(helpMessage.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.helpMessage = payload;
        state.status = STATUSES.SUCCESS;
        // console.log("helpMessage=====================>", payload);
      })
      .addCase(helpMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(updateProfile.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(updateProfile.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.updateProfile = payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })

      .addCase(rowBtns.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(rowBtns.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.rowBtns = payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(rowBtns.rejected, (state, action) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      })
      // ======================parentSectionEnd=======================

      // ======================childSectionStart=======================
      .addCase(loginUserChild.pending, state => {
        state.loading = true;
        state.status = STATUSES.LOADING;
      })
      .addCase(loginUserChild.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.userInfo = payload.data.child;
        state.token = payload.data.token; // Save the token here
        state.status = STATUSES.SUCCESS;
        // console.log("payload===============",payload.data?.child);
        // console.log("userInfoChildToken===========================================>",payload?.data?.token );
      })
      .addCase(loginUserChild.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
        state.status = STATUSES.ERROR;
      });
  },
});

// Export the logout action from your slice
export const {logoutUser, setUser} = authSlice.actions;

export default authSlice.reducer;
