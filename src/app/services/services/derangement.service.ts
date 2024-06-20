/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addDerangement } from '../fn/derangement/add-derangement';
import { AddDerangement$Params } from '../fn/derangement/add-derangement';
import { deleteDerangement } from '../fn/derangement/delete-derangement';
import { DeleteDerangement$Params } from '../fn/derangement/delete-derangement';
import { Derangement } from '../models/derangement';
import { findDerangementByClient } from '../fn/derangement/find-derangement-by-client';
import { FindDerangementByClient$Params } from '../fn/derangement/find-derangement-by-client';
import { findDerangementByStatus } from '../fn/derangement/find-derangement-by-status';
import { FindDerangementByStatus$Params } from '../fn/derangement/find-derangement-by-status';
import { getAllDerangements } from '../fn/derangement/get-all-derangements';
import { GetAllDerangements$Params } from '../fn/derangement/get-all-derangements';
import { getDerangement } from '../fn/derangement/get-derangement';
import { GetDerangement$Params } from '../fn/derangement/get-derangement';
import { getDerangementByUser } from '../fn/derangement/get-derangement-by-user';
import { GetDerangementByUser$Params } from '../fn/derangement/get-derangement-by-user';
import { searchDerangements } from '../fn/derangement/search-derangements';
import { SearchDerangements$Params } from '../fn/derangement/search-derangements';
import { updateDerangement } from '../fn/derangement/update-derangement';
import { UpdateDerangement$Params } from '../fn/derangement/update-derangement';

@Injectable({ providedIn: 'root' })
export class DerangementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateDerangement()` */
  static readonly UpdateDerangementPath = '/api/v1/derangement/updateDerangement/{idDerangement}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDerangement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDerangement$Response(params: UpdateDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<Derangement>> {
    return updateDerangement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDerangement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDerangement(params: UpdateDerangement$Params, context?: HttpContext): Observable<Derangement> {
    return this.updateDerangement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Derangement>): Derangement => r.body)
    );
  }

  /** Path part for operation `searchDerangements()` */
  static readonly SearchDerangementsPath = '/api/v1/derangement/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchDerangements()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  searchDerangements$Response(params: SearchDerangements$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
    return searchDerangements(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchDerangements$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  searchDerangements(params: SearchDerangements$Params, context?: HttpContext): Observable<Array<Derangement>> {
    return this.searchDerangements$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Derangement>>): Array<Derangement> => r.body)
    );
  }

  /** Path part for operation `addDerangement()` */
  static readonly AddDerangementPath = '/api/v1/derangement/add/{userId}/{idEquip}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addDerangement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDerangement$Response(params: AddDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<Derangement>> {
    return addDerangement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addDerangement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDerangement(params: AddDerangement$Params, context?: HttpContext): Observable<Derangement> {
    return this.addDerangement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Derangement>): Derangement => r.body)
    );
  }

  /** Path part for operation `findDerangementByStatus()` */
  static readonly FindDerangementByStatusPath = '/api/v1/derangement/getDerangementByStatus/{statut}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findDerangementByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDerangementByStatus$Response(params: FindDerangementByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
    return findDerangementByStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findDerangementByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDerangementByStatus(params: FindDerangementByStatus$Params, context?: HttpContext): Observable<Array<Derangement>> {
    return this.findDerangementByStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Derangement>>): Array<Derangement> => r.body)
    );
  }

  /** Path part for operation `findDerangementByClient()` */
  static readonly FindDerangementByClientPath = '/api/v1/derangement/getDerangementByClientImpacte/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findDerangementByClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDerangementByClient$Response(params: FindDerangementByClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
    return findDerangementByClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findDerangementByClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findDerangementByClient(params: FindDerangementByClient$Params, context?: HttpContext): Observable<Array<Derangement>> {
    return this.findDerangementByClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Derangement>>): Array<Derangement> => r.body)
    );
  }

  /** Path part for operation `getDerangement()` */
  static readonly GetDerangementPath = '/api/v1/derangement/getDearngement/{idDerangement}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDerangement()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDerangement$Response(params: GetDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<Derangement>> {
    return getDerangement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDerangement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDerangement(params: GetDerangement$Params, context?: HttpContext): Observable<Derangement> {
    return this.getDerangement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Derangement>): Derangement => r.body)
    );
  }

  /** Path part for operation `getAllDerangements()` */
  static readonly GetAllDerangementsPath = '/api/v1/derangement/getAllDerangements';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDerangements()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDerangements$Response(params?: GetAllDerangements$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
    return getAllDerangements(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllDerangements$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDerangements(params?: GetAllDerangements$Params, context?: HttpContext): Observable<Array<Derangement>> {
    return this.getAllDerangements$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Derangement>>): Array<Derangement> => r.body)
    );
  }

  /** Path part for operation `getDerangementByUser()` */
  static readonly GetDerangementByUserPath = '/api/v1/derangement/getAllDerangementByUser/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDerangementByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDerangementByUser$Response(params: GetDerangementByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Derangement>>> {
    return getDerangementByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDerangementByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDerangementByUser(params: GetDerangementByUser$Params, context?: HttpContext): Observable<Array<Derangement>> {
    return this.getDerangementByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Derangement>>): Array<Derangement> => r.body)
    );
  }

  /** Path part for operation `deleteDerangement()` */
  static readonly DeleteDerangementPath = '/api/v1/derangement/deleteDerangement/{idDerangement}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDerangement()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDerangement$Response(params: DeleteDerangement$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteDerangement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDerangement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDerangement(params: DeleteDerangement$Params, context?: HttpContext): Observable<void> {
    return this.deleteDerangement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
