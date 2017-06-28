"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = {
    OK(data) {
        return { ok: true, data };
    },
    Error(error) {
        return { ok: false, error };
    }
};
