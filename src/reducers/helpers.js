export default {
  createNotification: (message = null, isSuccessful = false) => ({
    message,
    isSuccessful
  })
};
