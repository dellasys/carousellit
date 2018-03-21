import { POST_TOPIC, UPVOTE, DOWNVOTE } from './actions';

const initialState = {
  topicsList: [],
};

export default function (state = initialState, action) {
  const { type, data, topicId } = action;

  switch (type) {
    case POST_TOPIC:
    /* Push topic data to state array */
      return {
        ...state,
        topicsList: [...state.topicsList, data],
      };
    case UPVOTE:
    /* Increase vote by 1 based on the topic ID */
      return {
        ...state,
        topicsList: state.topicsList.map(topic =>
          (topic._id === topicId ?
            { ...topic, vote: topic.vote + 1 } : topic)),
      };
    case DOWNVOTE:
    /* Decrease vote by 1 based on the topic ID */
      return {
        ...state,
        topicsList: state.topicsList.map(topic =>
          (topic._id === topicId ?
            { ...topic, vote: topic.vote - 1 } : topic)),
      };
    default:
      return state;
  }
}
