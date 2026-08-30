function errorHandler(err, req, res, next) {
  //   res.status(404).json({
  //     msg: err.message,
  //   });
  // OR
  if (err.status) {
    // console.log("first")
    res.status(err.status).json({
      msg: err.message,
    });
  } else {
    // console.log("second")
    res.status(500).json({
      msg: err.message,
    });
  }
}

export default errorHandler;
