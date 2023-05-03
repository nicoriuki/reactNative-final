import * as FileSystem from 'expo-file-system';
import { ADD_PHOTO } from '../types';

export const addPhoto = (title, image) => {
      return async (dispatch) => {
            const fileName = image.split('/').pop();
            const Path = FileSystem.documentDirectory + fileName;

            try {
                  await FileSystem.moveAsync({
                        from: image,
                        to: Path,
                  });
            } catch (error) {
                  console.log('error', error.message);
                  throw error;
            }

            dispatch({ type: ADD_PHOTO, payload: { title, image: Path } });
      };
};
