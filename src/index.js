import raf, { cancel as caf } from 'raf';

let globalRaftTimeoutId = 0;
const rafMap = {};

export default function setRafTimeout(callback, timeout = 0, ...params) {
  let currTime = -1;
  globalRaftTimeoutId++;

  let rafTimeoutId = globalRaftTimeoutId;

  const shouldUpdate = now => {
    if (currTime < 0) {
      currTime = now;
    }

    if (now - currTime > timeout) {
      callback(...params, now);
      currTime = -1;
    } else {
      rafMap[rafTimeoutId] = raf(shouldUpdate);
    }
  };

  rafMap[rafTimeoutId] = raf(shouldUpdate);

  return rafTimeoutId;
}

export function clearRafTimeout(timeId) {
  caf(rafMap[timeId]);
}

export function setRafInterval(callback, timeout = 10, ...params) {
  let finalTimeout = timeout;
  let timer = null;

  // If this parameter is less than 10, a value of 10 is used
  if (timeout < 10) {
    finalTimeout = 10;
  }

  function finalCallback () {
    callback(...params);

    timer = setRafTimeout(finalCallback, timeout);
  };

  timer = setRafTimeout(finalCallback, timeout);

  return () => timer;
}

export function clearRafInterval(timer) {
  clearRafTimeout(timer());
}
