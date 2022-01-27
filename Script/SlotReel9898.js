cc.Class({
    extends: require('SlotReelv2'),
    stopSpinningWithDelay(delay, matrix = [], callback) {
        let newDelay = delay;
        if (delay >= 1 && delay <= 3) {
            newDelay = 2;
        }
        this._super(newDelay, matrix, callback);
    },
});