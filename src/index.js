import raf, { caf } from 'raf';

let rafTimeoutId = 0;
const rafMap = {};

export default function setRafTimeout(callback, timeout = 0) {
  let currTime = -1;
  rafTimeoutId++;

  const shouldUpdate = now => {
    if (currTime < 0) {
      currTime = now;
    }

    if (now - currTime > timeout) {
      callback(now);
      currTime = -1;
    } else {
      rafMap[rafTimeoutId] = raf(shouldUpdate);
    }
  };

  rafMap[rafTimeoutId] = raf(shouldUpdate);
}

export function clearRafTimeout(timeId) {
  caf(rafMap[timeId]);
}
