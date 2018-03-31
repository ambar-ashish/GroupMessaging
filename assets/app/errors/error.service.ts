import { EventEmitter } from "@angular/core";

import { Error } from "./error.model";

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
    	console.log("inside ErrorService errorOccurred()");
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }
}