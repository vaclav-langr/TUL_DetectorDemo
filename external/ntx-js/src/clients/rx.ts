import {ntx} from "../generated/engine";
import IEvents = ntx.v2t.engine.IEvents;


export function eventsToText(evs: IEvents): string {
    let res = "";

    if (!evs.lookahead) {
        for (const ce of evs.events) {
            if (ce.label) {
                if (ce.label.item) {
                    res += ce.label.item;
                } else if (ce.label.plus) {
                    res += ce.label.plus;
                }
            }
        }
    }

    return res;
}