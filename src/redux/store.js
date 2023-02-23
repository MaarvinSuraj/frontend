import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";
import PlaylistSlice from "./playListSlice";
import audioPlayer from "./audioPlayer";
import userSlice from "./userSlice";


// import playerReducer from './features/playerSlice'
// import { ShazamApi } from "../services/ShazamCore";

const reducers = combineReducers({
	auth: authReducer,
	playlists: PlaylistSlice,
	audioPlayer: audioPlayer,
	user: userSlice,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "audioPlayer"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),

	// reducer: {
	// 	[ShazamApi.reducerPath]: ShazamApi.reducer,
	// 	player: playerReducer,
	// },
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamApi.middleware),	
});

export default store;
