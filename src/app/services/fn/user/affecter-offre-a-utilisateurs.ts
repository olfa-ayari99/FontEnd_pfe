/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AffecterOffreAUtilisateurs$Params {
  idOffre: number;
      body: Array<number>
}

export function affecterOffreAUtilisateurs(http: HttpClient, rootUrl: string, params: AffecterOffreAUtilisateurs$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, affecterOffreAUtilisateurs.PATH, 'post');
  if (params) {
    rb.path('idOffre', params.idOffre, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

affecterOffreAUtilisateurs.PATH = '/api/v1/user/affecterOffre/{idOffre}';
