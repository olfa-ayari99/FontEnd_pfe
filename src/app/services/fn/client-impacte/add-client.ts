/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ClientImpacte } from '../../models/client-impacte';

export interface AddClient$Params {
      body: ClientImpacte
}

export function addClient(http: HttpClient, rootUrl: string, params: AddClient$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientImpacte>> {
  const rb = new RequestBuilder(rootUrl, addClient.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

addClient.PATH = '/api/v1/ClientImpacte/addClient';
