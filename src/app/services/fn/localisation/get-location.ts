/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Equipement } from '../../models/equipement';

export interface GetLocation$Params {
  idLocal: number;
}

export function getLocation(http: HttpClient, rootUrl: string, params: GetLocation$Params, context?: HttpContext): Observable<StrictHttpResponse<Equipement>> {
  const rb = new RequestBuilder(rootUrl, getLocation.PATH, 'get');
  if (params) {
    rb.path('idLocal', params.idLocal, {});
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

getLocation.PATH = '/api/v1/localisation/getlocation/{idLocal}';
