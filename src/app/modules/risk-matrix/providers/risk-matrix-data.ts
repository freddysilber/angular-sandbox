import { from, Observable } from 'rxjs'

import { Ticket } from '../models'

export const DATA: Ticket[] = [
	{ name: 'OneOne', impact: 1, probability: 1 },
	{ name: 'TwoTwo', impact: 2, probability: 2 },
	{ name: 'Name', impact: 1, probability: 4 },
	{ name: 'First', impact: 1, probability: 4 },
	{ name: 'First', impact: 1, probability: 5 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'ThreeFour', impact: 3, probability: 4 },
	{ name: 'Second', impact: 2, probability: 5 },
	{ name: 'Third', impact: 5, probability: 3 },
	{ name: 'Fourth', impact: 4, probability: 1 },
	{ name: 'FourFout', impact: 4, probability: 4 },
	{ name: 'Center', impact: 3, probability: 3 },
	{ name: 'FiveFive', impact: 5, probability: 5 },
	{ name: 'FiveFive', impact: 5, probability: 5 },
]

// const REQUEST_TIME: number = 3000

export function fetchData(): Observable<Ticket> {
	return from(DATA)
}

// export function fetchData() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(DATA)
// 		}, REQUEST_TIME)
// 	})
// }