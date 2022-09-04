export const pick = <T, K extends keyof T>(obj: T, keys: K[]) => {
  return keys.map(key => ({[key]: obj[key]}))
              .reduce((result, value) => ({...result, ...value}), {})
}