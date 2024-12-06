import {usersSlice} from "../users.slice.ts";
import {api} from "../../../shared/api.ts";
import {AppDispatch, AppState} from "../../../store.ts";


export const fetchUsers = (dispatch: AppDispatch, getState: () => AppState) => {
   const isIdle = usersSlice.selectors.selectIsFetchUsersIdle(getState())

   if (!isIdle) {
      return;
   }

   dispatch(usersSlice.actions.fetchUsersPending())
   api.getUsers()
      .then((users) => {
         dispatch(usersSlice.actions.fetchUsersSuccess({users}))
      })
      .catch(() => {
         dispatch(usersSlice.actions.fetchUsersFailed())
      })
}