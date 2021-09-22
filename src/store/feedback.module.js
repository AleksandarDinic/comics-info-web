import ApiService from "@/common/api.service";
import {
  FEEDBACK_CREATE
} from "./actions.type";
import {
  SET_FEEDBACK, 
  SET_ERROR
} from "./mutations.type";

const initialState = {
  errors: null,
  feedback: {
    email: null,
    message: null,
    origin: "WEB"
  }
};

export const state = { ...initialState };

export const actions = {
  async [FEEDBACK_CREATE](context, feedback) {
      ApiService.setHeader();
      await ApiService.post("feedback", feedback)
        .then(({ data }) => {
          context.commit(SET_FEEDBACK, data.feedback);
        });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_FEEDBACK](state, feedback) {
    state.feedback = feedback;
  },
  [SET_ERROR](state, error) {
    state.errors = error;
  },
};

const getters = {
  feedback(state) {
    return state.feedback;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};