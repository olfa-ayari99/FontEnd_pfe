/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Offre } from '../../models/offre';

export interface UpdateOffre$Params {
      body: Offre
}

export function updateOffre(http: HttpClient, rootUrl: string, params: UpdateOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<Offre>> {
  const rb = new RequestBuilder(rootUrl, updateOffre.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Offre>;
    })
  );
}

updateOffre.PATH = '/api/v1/offre/updateOffre';
