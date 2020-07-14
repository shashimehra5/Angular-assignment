export interface Counter {
    status: string;
    ticks: Ticks
}

export interface Ticks {
    started: number,
    paused: number
}