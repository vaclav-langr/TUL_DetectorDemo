"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function eventsToText(evs) {
    let res = "";
    if (!evs.lookahead) {
        for (const ce of evs.events) {
            if (ce.label) {
                if (ce.label.item) {
                    res += ce.label.item;
                }
                else if (ce.label.plus) {
                    res += ce.label.plus;
                }
            }
        }
    }
    return res;
}
exports.eventsToText = eventsToText;
//# sourceMappingURL=rx.js.map