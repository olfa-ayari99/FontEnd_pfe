  /* tslint:disable */
  /* eslint-disable */
  import { HttpClient, HttpContext } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';

  import { BaseService } from '../base-service';
  import { ApiConfiguration } from '../api-configuration';
  import { StrictHttpResponse } from '../strict-http-response';

  import { addOffre } from '../fn/offre/add-offre';
  import { AddOffre$Params } from '../fn/offre/add-offre';
  import { deleteOffre } from '../fn/offre/delete-offre';
  import { DeleteOffre$Params } from '../fn/offre/delete-offre';
  import { getAllOffres } from '../fn/offre/get-all-offres';
  import { GetAllOffres$Params } from '../fn/offre/get-all-offres';
  import { getOffre } from '../fn/offre/get-offre';
  import { GetOffre$Params } from '../fn/offre/get-offre';
  import { Offre } from '../models/offre';
  import { updateOffre } from '../fn/offre/update-offre';
  import { UpdateOffre$Params } from '../fn/offre/update-offre';

  @Injectable({ providedIn: 'root' })
  export class OffreService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
      super(config, http);
    }

    /** Path part for operation `updateOffre()` */
    static readonly UpdateOffrePath = '/api/v1/offre/updateOffre';

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `updateOffre()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updateOffre$Response(params: UpdateOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<Offre>> {
      return updateOffre(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `updateOffre$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    updateOffre(params: UpdateOffre$Params, context?: HttpContext): Observable<Offre> {
      return this.updateOffre$Response(params, context).pipe(
        map((r: StrictHttpResponse<Offre>): Offre => r.body)
      );
    }

    /** Path part for operation `addOffre()` */
    static readonly AddOffrePath = '/api/v1/offre/addOffre';

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `addOffre()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    addOffre$Response(params: AddOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<Offre>> {
      return addOffre(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `addOffre$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    addOffre(params: AddOffre$Params, context?: HttpContext): Observable<Offre> {
      return this.addOffre$Response(params, context).pipe(
        map((r: StrictHttpResponse<Offre>): Offre => r.body)
      );
    }

    /** Path part for operation `getOffre()` */
    static readonly GetOffrePath = '/api/v1/offre/getOffre/{idOffre}';

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getOffre()` instead.
     *
     * This method doesn't expect any request body.
     */
    getOffre$Response(params: GetOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<Offre>> {
      return getOffre(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `getOffre$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getOffre(params: GetOffre$Params, context?: HttpContext): Observable<Offre> {
      return this.getOffre$Response(params, context).pipe(
        map((r: StrictHttpResponse<Offre>): Offre => r.body)
      );
    }

    /** Path part for operation `getAllOffres()` */
    static readonly GetAllOffresPath = '/api/v1/offre/getAllOffres';

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `getAllOffres()` instead.
     *
     * This method doesn't expect any request body.
     */
    getAllOffres$Response(params?: GetAllOffres$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Offre>>> {
      return getAllOffres(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `getAllOffres$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    getAllOffres(params?: GetAllOffres$Params, context?: HttpContext): Observable<Array<Offre>> {
      return this.getAllOffres$Response(params, context).pipe(
        map((r: StrictHttpResponse<Array<Offre>>): Array<Offre> => r.body)
      );
    }

    /** Path part for operation `deleteOffre()` */
    static readonly DeleteOffrePath = '/api/v1/offre/deleteOffre/{idOffre}';

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `deleteOffre()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteOffre$Response(params: DeleteOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
      return deleteOffre(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `deleteOffre$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    deleteOffre(params: DeleteOffre$Params, context?: HttpContext): Observable<void> {
      return this.deleteOffre$Response(params, context).pipe(
        map((r: StrictHttpResponse<void>): void => r.body)
      );
    }

  }
