"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = {
    OK(data) {
        return { ok: true, data };
    },
    Error(error) {
        return { ok: false, error };
    },
    of(fn) {
        try {
            return exports.Result.OK(fn());
        }
        catch (e) {
            return exports.Result.Error(e.message);
        }
    }
};
