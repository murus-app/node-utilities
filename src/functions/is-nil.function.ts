import { Nullable } from '../types/nullable.type';

export function isNil<T>(entity: Nullable<T>): entity is null | undefined {
  return entity === undefined || entity === null;
}
