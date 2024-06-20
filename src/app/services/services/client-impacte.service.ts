/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addClient } from '../fn/client-impacte/add-client';
import { AddClient$Params } from '../fn/client-impacte/add-client';
import { affectClientsToDerangement } from '../fn/client-impacte/affect-clients-to-derangement';
import { AffectClientsToDerangement$Params } from '../fn/client-impacte/affect-clients-to-derangement';
import { ClientImpacte } from '../models/client-impacte';
import { getAllClients } from '../fn/client-impacte/get-all-clients';
import { GetAllClients$Params } from '../fn/client-impacte/get-all-clients';
import { getClient } from '../fn/client-impacte/get-client';
import { GetClient$Params } from '../fn/client-impacte/get-client';

@Injectable({ providedIn: 'root' })
export class ClientImpacteService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `affectClientsToDerangement()` */
  static readonly AffectClientsToDerangementPath = '/api/v1/ClientImpacte/affectClientsToDerangement/{idDerangement}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `affectClientsToDerangement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  affectClientsToDerangement$Response(params: AffectClientsToDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return affectClientsToDerangement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `affectClientsToDerangement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  affectClientsToDerangement(params: AffectClientsToDerangement$Params, context?: HttpContext): Observable<void> {
    return this.affectClientsToDerangement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `addClient()` */
  static readonly AddClientPath = '/api/v1/ClientImpacte/addClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addClient$Response(params: AddClient$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientImpacte>> {
    return addClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addClient(params: AddClient$Params, context?: HttpContext): Observable<ClientImpacte> {
    return this.addClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientImpacte>): ClientImpacte => r.body)
    );
  }

  /** Path part for operation `getClient()` */
  static readonly GetClientPath = '/api/v1/ClientImpacte/getClient/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClient$Response(params: GetClient$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientImpacte>> {
    return getClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClient(params: GetClient$Params, context?: HttpContext): Observable<ClientImpacte> {
    return this.getClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientImpacte>): ClientImpacte => r.body)
    );
  }

  /** Path part for operation `getAllClients()` */
  static readonly GetAllClientsPath = '/api/v1/ClientImpacte/getAllClients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllClients$Response(params?: GetAllClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientImpacte>>> {
    return getAllClients(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllClients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllClients(params?: GetAllClients$Params, context?: HttpContext): Observable<Array<ClientImpacte>> {
    return this.getAllClients$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClientImpacte>>): Array<ClientImpacte> => r.body)
    );
  }

}
