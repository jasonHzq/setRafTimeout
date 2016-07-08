import assert from 'assert';
import setRafTimeout, { clearRafTimeout } from '../src/';

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
