/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */

export default function gamePrepare(state, { callback }) {
  return {
    records: undefined,
    message: {
      title: 'Globes!',
      content: 'Hit the globes, avoid the skulls!',
      follow: 'Click to continue...',
      onClick: callback
    }
  };
}
