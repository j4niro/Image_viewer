// src/store/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../stores/store';

// Hook useDispatch typé
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Hook useSelector typé
export const useAppSelector = useSelector.withTypes<RootState>();