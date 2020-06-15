// export default minInMs = 60000;
// export default secInMs = 1000;

const timeToMs = (m, s) => {
  const time = m * 60000 + s * 1000;
  return time;
};

export default timeToMs;
