export const POST_TOPIC = 'POST_TOPIC';


export function postTopic(data) {
  return {
    type: 'POST_TOPIC',
    data,
  };
}
