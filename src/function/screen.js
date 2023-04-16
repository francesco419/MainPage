import { changeSide } from '../redux/SideSlide';

export const checkScreen = (num, screen, dispatch) => {
  if (screen === true) {
    dispatch(changeSide(num));
  }
};
