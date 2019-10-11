const errorHandler = store => next => action => {
  // TODO: init error handling here
  // add other status errors here
  next(action);
};

export default errorHandler;
