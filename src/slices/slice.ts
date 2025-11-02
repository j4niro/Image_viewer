// src/slices/viewerSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ViewerState = {
  currentImage: string | null;
  currentImageIndex: number;
  zoomLevel: Record<number, number>;
  isActive: boolean;
  imageList: string[];
  activeThumbnail: number | null;
};

const initialState: ViewerState = {
  currentImage: null,
  currentImageIndex: 0,
  zoomLevel: { 100: 100 },
  isActive: false,
  imageList: Array.from({ length: 20 }, (_, i) => `/img_${String(i + 1).padStart(3, "0")}.jpg`),
  activeThumbnail: null,
};

const viewerSlice = createSlice({
  name: "viewer",
  initialState,
  reducers: {
    setCurrentImage: (state, action: PayloadAction<string>) => {
      state.currentImage = action.payload;
    },
    setCurrentImageIndex: (state, action: PayloadAction<number>) => {
      state.currentImageIndex = action.payload;
      state.currentImage = state.imageList[action.payload];
    },
    setZoomLevel: (state, action: PayloadAction<{index: number, zoom: number}>) => {
      state.zoomLevel[action.payload.index] = action.payload.zoom;
    },
    toggleInfoPanel: (state) => {
      state.isActive = !state.isActive;
    },
    setActiveThumbnail: (state, action: PayloadAction<number>) => {
      state.activeThumbnail = action.payload;
      state.currentImageIndex = action.payload;
      state.currentImage = state.imageList[action.payload];
    },
    nextImage: (state) => {
      if (state.currentImageIndex < state.imageList.length - 1) {
        state.currentImageIndex += 1;
        state.currentImage = state.imageList[state.currentImageIndex];
      }
    },
    previousImage: (state) => {
      if (state.currentImageIndex > 0) {
        state.currentImageIndex -= 1;
        state.currentImage = state.imageList[state.currentImageIndex];
      }
    },
    firstImage: (state) => {
      state.currentImageIndex = 0;
      state.currentImage = state.imageList[0];
    },
    lastImage: (state) => {
      state.currentImageIndex = state.imageList.length - 1;
      state.currentImage = state.imageList[state.currentImageIndex];
    },
  },
});

export const {
  setCurrentImage,
  setCurrentImageIndex,
  setZoomLevel,
  toggleInfoPanel,
  setActiveThumbnail,
  nextImage,
  previousImage,
  firstImage,
  lastImage,
} = viewerSlice.actions;

export default viewerSlice.reducer;
