export class LoggingService {
	logAString(logItem: string) {
		console.log('LoggingService is logging.... ', logItem)
	}

	getSum(a: number, b: number) {
		return a + b
	}
}