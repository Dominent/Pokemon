import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

export interface RouterState {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
  RouterState,
  fromRouter.RouterReducerState<any>
>('router');

export const {
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} = fromRouter.getRouterSelectors(selectRouter);
