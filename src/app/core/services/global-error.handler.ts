import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}

  public handleError(error: Error): void {
    console.log(error)
    const chunkFailedMessage = /Loading chunk \w+ failed/;
    if (chunkFailedMessage.test(error.message)) {
      window.location.reload();
    }
  }
}
