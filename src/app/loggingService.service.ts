export class LoggingService {
	logAString(logItem: string) { // Console.logs a string
		console.log('LoggingService is logging.... ', logItem)
	}

	getSum(a: number, b: number) { // Adds two numbers
		return a + b
	}
}