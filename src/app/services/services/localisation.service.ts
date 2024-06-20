/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addLocation } from '../fn/localisation/add-location';
import { AddLocation$Params } from '../fn/localisation/add-location';
import { deleteLocation } from '../fn/localisation/delete-location';
import { DeleteLocation$Params } from '../fn/localisation/delete-location';
import { Equipement } from '../models/equipement';
import { getAllLocations } from '../fn/localisation/get-all-locations';
import { GetAllLocations$Params } from '../fn/localisation/get-all-locations';
import { getLocation } from '../fn/localisation/get-location';
import { GetLocation$Params } from '../fn/localisation/get-location';
import { updateLocation } from '../fn/localisation/update-location';
import { UpdateLocation$Params } from '../fn/localisation/update-location';

@Injectable({ providedIn: 'root' })
export class LocalisationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateLocation()` */
  static readonly UpdateLocationPath = '/api/v1/localisation/updateLocation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLocation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLocation$Response(params: UpdateLocation$Params, context?: HttpContext): Observable<StrictHttpResponse<Equipement>> {
    return updateLocation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLocation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLocation(params: UpdateLocation$Params, context?: HttpContext): Observable<Equipement> {
    return this.updateLocation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Equipement>): Equipement => r.body)
    );
  }

  /** Path part for operation `addLocation()` */
  static readonly AddLocationPath = '/api/v1/localisation/addLocalisation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addLocation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addLocation$Response(params: AddLocation$Params, context?: HttpContext): Observable<StrictHttpResponse<Equipement>> {
    return addLocation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addLocation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addLocation(params: AddLocation$Params, context?: HttpContext): Observable<Equipement> {
    return this.addLocation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Equipement>): Equipement => r.body)
    );
  }

  /** Path part for operation `getLocation()` */
  static readonly GetLocationPath = '/api/v1/localisation/getlocation/{idLocal}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLocation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLocation$Response(params: GetLocation$Params, context?: HttpContext): Observable<StrictHttpResponse<Equipement>> {
    return getLocation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLocation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLocation(params: GetLocation$Params, context?: HttpContext): Observable<Equipement> {
    return this.getLocation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Equipement>): Equipement => r.body)
    );
  }

  /** Path part for operation `getAllLocations()` */
  static readonly GetAllLocationsPath = '/api/v1/localisation/getAllLocations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLocations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLocations$Response(params?: GetAllLocations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Equipement>>> {
    return getAllLocations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLocations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLocations(params?: GetAllLocations$Params, context?: HttpContext): Observable<Array<Equipement>> {
    return this.getAllLocations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Equipement>>): Array<Equipement> => r.body)
    );
  }

  /** Path part for operation `deleteLocation()` */
  static readonly DeleteLocationPath = '/api/v1/localisation/deleteLocation/{idLocal}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLocation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLocation$Response(params: DeleteLocation$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteLocation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLocation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLocation(params: DeleteLocation$Params, context?: HttpContext): Observable<void> {
    return this.deleteLocation$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
