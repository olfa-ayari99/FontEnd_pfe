/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Equipement } from '../../models/equipement';

export interface UpdateLocation$Params {
      body: Equipement
}

export function updateLocation(http: HttpClient, rootUrl: string, params: UpdateLocation$Params, context?: HttpContext): Observable<StrictHttpResponse<Equipement>> {
  const rb = new RequestBuilder(rootUrl, updateLocation.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Equipement>;
    })
  );
}

updateLocation.PATH = '/api/v1/localisation/updateLocation';
