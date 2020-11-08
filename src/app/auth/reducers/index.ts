import {createReducer, on} from '@ngrx/store';
import {AuthActions} from '../action-types';
import {User} from '../model/user.model';


export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, {user}) => {
    return {
      user
    };
  }),

  on(AuthActions.logout, () => {
    return {
      user: undefined
    };
  })
);

