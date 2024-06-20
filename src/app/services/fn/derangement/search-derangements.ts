/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Derangement } from '../../models/derangement';

export interface SearchDerangements$Params {
      body: {
[key: string]: {
};
}
}

export function searchDerangements(http: HttpClient, rootUrl: string, params: SearchDerangements$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
  const rb = new RequestBuilder(rootUrl, searchDerangements.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

searchDerangements.PATH = '/api/v1/derangement/search';
