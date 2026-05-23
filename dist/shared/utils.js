export function extractConstructorName(obj) {
    if (obj?.__proto__.constructor.name)
        return obj?.__proto__.constructor.name;
    else if (obj?.__proto__)
        return extractConstructorName(obj?.__proto__);
    else
        return null;
}
;
//# sourceMappingURL=utils.js.map