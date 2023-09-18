const repeatEvery = (func, ms, duration) => {
  const intervalId = setInterval(func, ms);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log(`Repetition stopped after ${duration / 1000} seconds`);
  }, 6000);
};

function play() {
  console.log("hello world");
}

repeatEvery(play, 2000, 6000);
