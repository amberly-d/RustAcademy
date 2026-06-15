"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapValidationErrors = mapValidationErrors;
function mapValidationErrors(errors) {
    var fields = errors.map(function (error) {
        var constraints = error.constraints
            ? Object.values(error.constraints)
            : [];
        return {
            field: error.property,
            errors: constraints,
        };
    });
    return {
        message: "Validation failed",
        fields: fields,
    };
}
