import { Injectable, InjectionToken } from '@angular/core';

export interface Message {
	messageName: string;
	sendMessage(message: string): void;
}

export const MESSAGING_TOKEN = new InjectionToken<Message>('messaging');

@Injectable()
export class MessagingService implements Message {
	public messageName = 'MessagingService';

	public sendMessage(message: string): string {
		return `Message: ${message} \n From: MessagingService`;
	}
}