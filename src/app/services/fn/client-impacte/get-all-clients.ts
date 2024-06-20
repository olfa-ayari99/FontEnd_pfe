/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientImpacte } from '../../models/client-impacte';

export interface GetAllClients$Params {
}

export function getAllClients(http: HttpClient, rootUrl: string, params?: GetAllClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientImpacte>>> {
  const rb = new RequestBuilder(rootUrl, getAllClients.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ClientImpacte>>;
    })
  );
}

getAllClients.PATH = '/api/v1/ClientImpacte/getAllClients';
