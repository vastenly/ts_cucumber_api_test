

import { Service } from 'typedi';

@Service()
class JSONFormatter {
  /**
   * Make object as pretty JSON string
   */
  public getPrettyJSONString(obj: object): string {
    return JSON.stringify(obj, null, '  ');
  }
}

export default JSONFormatter;
