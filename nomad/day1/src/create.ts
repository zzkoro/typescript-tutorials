const create_1 = <T extends { new(): T }>(type: T): T => new type()

const create2_1 = <T>(type: new () => T): T => new type()

const create3_1 = <T>(type: { new(): T }): T => new type()

export const create = <T>(type: {new(...args): T}, ...args): T => new type(...args)