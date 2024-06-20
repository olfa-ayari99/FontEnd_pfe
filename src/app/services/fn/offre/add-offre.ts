/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Offre } from '../../models/offre';

export interface AddOffre$Params {
      body: Offre
}

export function addOffre(http: HttpClient, rootUrl: string, params: AddOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<Offre>> {
  const rb = new RequestBuilder(rootUrl, addOffre.PATH, 'post');
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

addOffre.PATH = '/api/v1/offre/addOffre';
