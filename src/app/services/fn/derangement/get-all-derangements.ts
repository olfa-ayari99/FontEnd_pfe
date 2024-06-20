/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Derangement } from '../../models/derangement';

export interface GetAllDerangements$Params {
}

export function getAllDerangements(http: HttpClient, rootUrl: string, params?: GetAllDerangements$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
  const rb = new RequestBuilder(rootUrl, getAllDerangements.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Derangement>>;
    })
  );
}

getAllDerangements.PATH = '/api/v1/derangement/getAllDerangements';
