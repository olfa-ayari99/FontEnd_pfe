/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Derangement } from '../../models/derangement';

export interface GetDerangementByUser$Params {
  idUser: number;
}

export function getDerangementByUser(http: HttpClient, rootUrl: string, params: GetDerangementByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
  const rb = new RequestBuilder(rootUrl, getDerangementByUser.PATH, 'get');
  if (params) {
    rb.path('idUser', params.idUser, {});
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

getDerangementByUser.PATH = '/api/v1/derangement/getAllDerangementByUser/{idUser}';
