import {
  FeedbackService
} from "@/common/api.service";
import {
  FEEDBACK_CREATE
} from "./actions.type";
import {
  SET_FEEDBACK
} from "./mutations.type";

const initialState = {
  feedback: {
    email: null,
    message: "",
    origin: "WEB"
  }
};

export const state = { ...initialState };

export const actions = {
  [FEEDBACK_CREATE]({ state }) {
    return FeedbackService.post(state.feedback);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_FEEDBACK](state, feedback) {
    state.feedback = feedback;
  }
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