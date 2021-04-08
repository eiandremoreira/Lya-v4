import { Client } from "./src/struct/Client";
import { CommandStructure } from "./src/struct/commands/CommandStructure";
import { EventStructure } from "./src/struct/events/EventStructure";
export * from "./src/struct/commands/CommandStructure";
export * from "./src/struct/Client";
export * from "./src/struct/events/EventStructure";
declare const _default: {
    CommandStructure: typeof CommandStructure;
    EventStructure: typeof EventStructure;
    Client: typeof Client;
};
export default _default;
