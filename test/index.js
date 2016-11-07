import assert from 'assert';
import setRafTimeout, { clearRafTimeout, setRafInterval, clearRafInterval } from '../src/';

describe('it should clear rafTimeout', () => {
  it('it should clear rafTimeout', done => {
    let num = 0;
    let timeoutId = null;

    const autoAdd = () => {
      num++;

      timeoutId = setRafTimeout(autoAdd);
    }

    autoAdd();

    setTimeout(() => {
      const currNum = num;
      clearRafTimeout(timeoutId);

      setTimeout(() => {
        assert.strictEqual(num, currNum);
        done();
      }, 500);
    }, 500);
  });
});

describe('it should clear rafInterval', () => {
  it('it should clear rafInterval', done => {
    let num = 0;
    let timeoutId = null;

    const autoAdd = (addNum) => {
      num += addNum;
    }

    const timer = setRafInterval(autoAdd, 300, 1);

    setTimeout(() => {
      const currentNum = num;
      clearRafInterval(timer);

      setTimeout(() => {
        assert.strictEqual(num, currentNum);
        done();
      }, 600);
    }, 950);
  });
});
