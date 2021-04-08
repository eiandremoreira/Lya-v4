export declare class EventStructure {
    client: any;
    name: string;
    enabled: boolean;
    constructor(client: any, options: ListenerOptions);
    run(...args: any): void;
}
export interface ListenerOptions {
    name: string;
    enabled?: boolean;
}
