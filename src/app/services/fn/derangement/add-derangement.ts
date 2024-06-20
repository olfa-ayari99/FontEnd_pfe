/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Derangement } from '../../models/derangement';

export interface AddDerangement$Params {
  userId: number;
  idEquip: number;
      body: Derangement
}

export function addDerangement(http: HttpClient, rootUrl: string, params: AddDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<Derangement>> {
  const rb = new RequestBuilder(rootUrl, addDerangement.PATH, 'post');
  if (params) {
    rb.path('userId', params.userId, {});
    rb.path('idEquip', params.idEquip, {});
    rb.body(params.body, 'application/json');
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

addDerangement.PATH = '/api/v1/derangement/add/{userId}/{idEquip}';
