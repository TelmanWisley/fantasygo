"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
function paginate(items, page, limit) {
    var startIndex = (page - 1) * limit;
    var endIndex = startIndex + limit;
    return items.slice(startIndex, endIndex);
}
exports.paginate = paginate;
