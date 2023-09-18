function runAfterTime(ms, message) {
  if (typeof ms !== "number") {
    ms = 1000;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} after ${ms / 1000} second(s)`);
    }, ms);
  });
}

runAfterTime(2000, "Your function is running")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
