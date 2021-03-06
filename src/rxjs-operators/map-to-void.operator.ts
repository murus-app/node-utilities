import { Observable, OperatorFunction } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { VOID } from './../constants/void.const';

export const mapToVoid = <T>(): OperatorFunction<T, void> => (source: Observable<T>): Observable<void> => {
  return source.pipe(mapTo(VOID));
};
