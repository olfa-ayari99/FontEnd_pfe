/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientImpacte } from '../../models/client-impacte';

export interface GetClient$Params {
  idClient: number;
}

export function getClient(http: HttpClient, rootUrl: string, params: GetClient$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientImpacte>> {
  const rb = new RequestBuilder(rootUrl, getClient.PATH, 'get');
  if (params) {
    rb.path('idClient', params.idClient, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ClientImpacte>;
    })
  );
}

getClient.PATH = '/api/v1/ClientImpacte/getClient/{idClient}';
