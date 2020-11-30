
import { Service } from 'typedi';
import { assert } from 'chai';

const DEFAULT_CHAR_SET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

@Service()
class StringGenerator {
  /**
   * Generates a random string of the specified length
   * @param {number} length
   * @param {string} [charSet]
   * @return {string}
   */
  public getRandomString(length: number, charSet = DEFAULT_CHAR_SET): string {
    assert.isNumber(length);

    let random = '';
    for (let i = 0; i < length; i++) {
      random += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return random;
  }

  /**
   * Generate random string with prefix 'TEST_'
   * @param {number} length
   * @returns {string}
   */
  public generateRandomString(length: number = 20): string {
    return 'TEST_' + this.getRandomString(length).toUpperCase();
  }
}

export default StringGenerator;
