/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AffectClientsToDerangement$Params {
  idDerangement: number;
      body: Array<number>
}

export function affectClientsToDerangement(http: HttpClient, rootUrl: string, params: AffectClientsToDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, affectClientsToDerangement.PATH, 'put');
  if (params) {
    rb.path('idDerangement', params.idDerangement, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

affectClientsToDerangement.PATH = '/api/v1/ClientImpacte/affectClientsToDerangement/{idDerangement}';
