import { Injectable } from '@angular/core'
/*
	Service notes:

	1. When a service is instanciated in a component via the providers in the .ts file, all components below that get the SAME instance of the service
	2. Service instances dont propagate up the chain only down to ALL childre, grandchildren, great grandchildrem etc of the component that is was instansiated on
	3. @Injectable is important beacuse it allows us to be able to inject another service into this service
*/
@Injectable()
export class LoggingService {
	logAString(logItem: string) { // Console.logs a string
		console.log('LoggingService is logging.... ', logItem)
	}

	getSum(a: number, b: number) { // Adds two numbers
		return a + b
	}
}