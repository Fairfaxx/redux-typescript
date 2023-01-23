import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types/index";
import { Action } from "../actions/index"; 

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })

    try {
      const {data} = await axios.get('https://api.npms.io/v2/search?q=react', {
        params: {
          text: term,
        }
      })

      console.log(data.results);
      
      const names = data.results.map((result: any) => {
        return result.package.name
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      })
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  }
}