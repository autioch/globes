export default function messageShow({ messages }, messageId) { // eslint-disable-line no-unused-vars
  return {
    message: messages[messageId]
  };
}
