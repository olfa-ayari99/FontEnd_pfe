/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Derangement } from '../../models/derangement';

export interface UpdateDerangement$Params {
  idDerangement: number;
      body: Derangement
}

export function updateDerangement(http: HttpClient, rootUrl: string, params: UpdateDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<Derangement>> {
  const rb = new RequestBuilder(rootUrl, updateDerangement.PATH, 'put');
  if (params) {
    rb.path('idDerangement', params.idDerangement, {});
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

updateDerangement.PATH = '/api/v1/derangement/updateDerangement/{idDerangement}';
