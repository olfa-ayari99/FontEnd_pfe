/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Derangement } from '../../models/derangement';

export interface GetDerangement$Params {
  idDerangement: number;
}

export function getDerangement(http: HttpClient, rootUrl: string, params: GetDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<Derangement>> {
  const rb = new RequestBuilder(rootUrl, getDerangement.PATH, 'get');
  if (params) {
    rb.path('idDerangement', params.idDerangement, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Derangement>;
    })
  );
}

getDerangement.PATH = '/api/v1/derangement/getDearngement/{idDerangement}';
