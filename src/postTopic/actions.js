export const POST_TOPIC = 'POST_TOPIC';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';

export function postTopic(data) {
  return {
    type: 'POST_TOPIC',
    data,
  };
}

export function upVote(topicId) {
  return {
    type: 'UPVOTE',
    topicId,
  };
}

export function downVote(topicId) {
  return {
    type: 'DOWNVOTE',
    topicId,
  };
}

