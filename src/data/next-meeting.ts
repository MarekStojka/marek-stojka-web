/** Doplňovat pouze skutečně vypsanou akci. Čas vždy s UTC offsetem (např. +01:00/+02:00).
 * remainingSeats je ručně aktualizovaný údaj, nikoli napojení na rezervační systém. */
export interface MeetingEvent {
 title:string;
 startsAt:string;
 endsAt?:string;
 venue:string;
 address?:string;
 capacity:number|null;
 remainingSeats:number|null;
 seatsUpdatedAt?:string;
 registrationUrl?:string;
}
export const meetingConfig:{event:MeetingEvent|null}={event:null};
