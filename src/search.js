const criminals = new Map();

criminals.set("Paul White", "Roger Night, Peter Llong Jr.");
criminals.set("Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire");
criminals.set("Paul White Jr.", null);
criminals.set("Red Fortress", "Roger Rabbit, Ross Winter");
criminals.set("Redford Fort", "Red Strong, Red Fort");

function interviewCriminals(input, cb) {
    const changedInput = input.toLowerCase();
    if (changedInput) {
        for (const [key, value] of criminals.entries()) {
            if (key.toLowerCase().includes(changedInput)) {
                cb(false, {key, value});
                return;
            }
        }
        for (const [key, value] of criminals.entries()) {
            if (value) {
                if (value.toLowerCase().includes(changedInput)) {
                    cb(false, {key, value});
                    return;
                }
            }
        }
    }
    cb(true, `No Match`);
}

export default interviewCriminals;