
export class ConservationArea {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public timeSlots?: TimeSlot[],
    public price?: number 
  ) {}
}

export class TimeSlot {
  constructor(
    public id: number,
    public time: string,
  ) {}
}
