
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model JoinRequest
 * 
 */
export type JoinRequest = $Result.DefaultSelection<Prisma.$JoinRequestPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model TravelPlan
 * 
 */
export type TravelPlan = $Result.DefaultSelection<Prisma.$TravelPlanPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PlanStatus: {
  OPEN: 'OPEN',
  FULL: 'FULL',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELED: 'CANCELED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more JoinRequests
 * const joinRequests = await prisma.joinRequest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more JoinRequests
   * const joinRequests = await prisma.joinRequest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.joinRequest`: Exposes CRUD operations for the **JoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinRequests
    * const joinRequests = await prisma.joinRequest.findMany()
    * ```
    */
  get joinRequest(): Prisma.JoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelPlan`: Exposes CRUD operations for the **TravelPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelPlans
    * const travelPlans = await prisma.travelPlan.findMany()
    * ```
    */
  get travelPlan(): Prisma.TravelPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    JoinRequest: 'JoinRequest',
    Payment: 'Payment',
    Review: 'Review',
    TravelPlan: 'TravelPlan',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "joinRequest" | "payment" | "review" | "travelPlan" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      JoinRequest: {
        payload: Prisma.$JoinRequestPayload<ExtArgs>
        fields: Prisma.JoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findFirst: {
            args: Prisma.JoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findMany: {
            args: Prisma.JoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          create: {
            args: Prisma.JoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          createMany: {
            args: Prisma.JoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          delete: {
            args: Prisma.JoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          update: {
            args: Prisma.JoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.JoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.JoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          aggregate: {
            args: Prisma.JoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinRequest>
          }
          groupBy: {
            args: Prisma.JoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      TravelPlan: {
        payload: Prisma.$TravelPlanPayload<ExtArgs>
        fields: Prisma.TravelPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          findFirst: {
            args: Prisma.TravelPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          findMany: {
            args: Prisma.TravelPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>[]
          }
          create: {
            args: Prisma.TravelPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          createMany: {
            args: Prisma.TravelPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>[]
          }
          delete: {
            args: Prisma.TravelPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          update: {
            args: Prisma.TravelPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          deleteMany: {
            args: Prisma.TravelPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>[]
          }
          upsert: {
            args: Prisma.TravelPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPlanPayload>
          }
          aggregate: {
            args: Prisma.TravelPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelPlan>
          }
          groupBy: {
            args: Prisma.TravelPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TravelPlanCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    joinRequest?: JoinRequestOmit
    payment?: PaymentOmit
    review?: ReviewOmit
    travelPlan?: TravelPlanOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TravelPlanCountOutputType
   */

  export type TravelPlanCountOutputType = {
    participants: number
    joinRequests: number
    reviews: number
  }

  export type TravelPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | TravelPlanCountOutputTypeCountParticipantsArgs
    joinRequests?: boolean | TravelPlanCountOutputTypeCountJoinRequestsArgs
    reviews?: boolean | TravelPlanCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlanCountOutputType
     */
    select?: TravelPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }

  /**
   * TravelPlanCountOutputType without action
   */
  export type TravelPlanCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    payments: number
    hostedPlans: number
    joinedPlans: number
    reviews: number
    joinRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    hostedPlans?: boolean | UserCountOutputTypeCountHostedPlansArgs
    joinedPlans?: boolean | UserCountOutputTypeCountJoinedPlansArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    joinRequests?: boolean | UserCountOutputTypeCountJoinRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHostedPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinedPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model JoinRequest
   */

  export type AggregateJoinRequest = {
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  export type JoinRequestMinAggregateOutputType = {
    id: string | null
    planId: string | null
    applicantId: string | null
    status: $Enums.RequestStatus | null
    message: string | null
    createdAt: Date | null
  }

  export type JoinRequestMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    applicantId: string | null
    status: $Enums.RequestStatus | null
    message: string | null
    createdAt: Date | null
  }

  export type JoinRequestCountAggregateOutputType = {
    id: number
    planId: number
    applicantId: number
    status: number
    message: number
    createdAt: number
    _all: number
  }


  export type JoinRequestMinAggregateInputType = {
    id?: true
    planId?: true
    applicantId?: true
    status?: true
    message?: true
    createdAt?: true
  }

  export type JoinRequestMaxAggregateInputType = {
    id?: true
    planId?: true
    applicantId?: true
    status?: true
    message?: true
    createdAt?: true
  }

  export type JoinRequestCountAggregateInputType = {
    id?: true
    planId?: true
    applicantId?: true
    status?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type JoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequest to aggregate.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinRequests
    **/
    _count?: true | JoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinRequestMaxAggregateInputType
  }

  export type GetJoinRequestAggregateType<T extends JoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinRequest[P]>
      : GetScalarType<T[P], AggregateJoinRequest[P]>
  }




  export type JoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithAggregationInput | JoinRequestOrderByWithAggregationInput[]
    by: JoinRequestScalarFieldEnum[] | JoinRequestScalarFieldEnum
    having?: JoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinRequestCountAggregateInputType | true
    _min?: JoinRequestMinAggregateInputType
    _max?: JoinRequestMaxAggregateInputType
  }

  export type JoinRequestGroupByOutputType = {
    id: string
    planId: string
    applicantId: string
    status: $Enums.RequestStatus
    message: string | null
    createdAt: Date
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  type GetJoinRequestGroupByPayload<T extends JoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type JoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectScalar = {
    id?: boolean
    planId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type JoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planId" | "applicantId" | "status" | "message" | "createdAt", ExtArgs["result"]["joinRequest"]>
  export type JoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TravelPlanDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinRequest"
    objects: {
      plan: Prisma.$TravelPlanPayload<ExtArgs>
      applicant: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      applicantId: string
      status: $Enums.RequestStatus
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["joinRequest"]>
    composites: {}
  }

  type JoinRequestGetPayload<S extends boolean | null | undefined | JoinRequestDefaultArgs> = $Result.GetResult<Prisma.$JoinRequestPayload, S>

  type JoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinRequestCountAggregateInputType | true
    }

  export interface JoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinRequest'], meta: { name: 'JoinRequest' } }
    /**
     * Find zero or one JoinRequest that matches the filter.
     * @param {JoinRequestFindUniqueArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinRequestFindUniqueArgs>(args: SelectSubset<T, JoinRequestFindUniqueArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinRequestFindUniqueOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinRequestFindFirstArgs>(args?: SelectSubset<T, JoinRequestFindFirstArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany()
     * 
     * // Get first 10 JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinRequestFindManyArgs>(args?: SelectSubset<T, JoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinRequest.
     * @param {JoinRequestCreateArgs} args - Arguments to create a JoinRequest.
     * @example
     * // Create one JoinRequest
     * const JoinRequest = await prisma.joinRequest.create({
     *   data: {
     *     // ... data to create a JoinRequest
     *   }
     * })
     * 
     */
    create<T extends JoinRequestCreateArgs>(args: SelectSubset<T, JoinRequestCreateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinRequests.
     * @param {JoinRequestCreateManyArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinRequestCreateManyArgs>(args?: SelectSubset<T, JoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JoinRequests and returns the data saved in the database.
     * @param {JoinRequestCreateManyAndReturnArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, JoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JoinRequest.
     * @param {JoinRequestDeleteArgs} args - Arguments to delete one JoinRequest.
     * @example
     * // Delete one JoinRequest
     * const JoinRequest = await prisma.joinRequest.delete({
     *   where: {
     *     // ... filter to delete one JoinRequest
     *   }
     * })
     * 
     */
    delete<T extends JoinRequestDeleteArgs>(args: SelectSubset<T, JoinRequestDeleteArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinRequest.
     * @param {JoinRequestUpdateArgs} args - Arguments to update one JoinRequest.
     * @example
     * // Update one JoinRequest
     * const joinRequest = await prisma.joinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinRequestUpdateArgs>(args: SelectSubset<T, JoinRequestUpdateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinRequests.
     * @param {JoinRequestDeleteManyArgs} args - Arguments to filter JoinRequests to delete.
     * @example
     * // Delete a few JoinRequests
     * const { count } = await prisma.joinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinRequestDeleteManyArgs>(args?: SelectSubset<T, JoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinRequestUpdateManyArgs>(args: SelectSubset<T, JoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests and returns the data updated in the database.
     * @param {JoinRequestUpdateManyAndReturnArgs} args - Arguments to update many JoinRequests.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, JoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JoinRequest.
     * @param {JoinRequestUpsertArgs} args - Arguments to update or create a JoinRequest.
     * @example
     * // Update or create a JoinRequest
     * const joinRequest = await prisma.joinRequest.upsert({
     *   create: {
     *     // ... data to create a JoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends JoinRequestUpsertArgs>(args: SelectSubset<T, JoinRequestUpsertArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestCountArgs} args - Arguments to filter JoinRequests to count.
     * @example
     * // Count the number of JoinRequests
     * const count = await prisma.joinRequest.count({
     *   where: {
     *     // ... the filter for the JoinRequests we want to count
     *   }
     * })
    **/
    count<T extends JoinRequestCountArgs>(
      args?: Subset<T, JoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoinRequestAggregateArgs>(args: Subset<T, JoinRequestAggregateArgs>): Prisma.PrismaPromise<GetJoinRequestAggregateType<T>>

    /**
     * Group by JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: JoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinRequest model
   */
  readonly fields: JoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends TravelPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlanDefaultArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JoinRequest model
   */
  interface JoinRequestFieldRefs {
    readonly id: FieldRef<"JoinRequest", 'String'>
    readonly planId: FieldRef<"JoinRequest", 'String'>
    readonly applicantId: FieldRef<"JoinRequest", 'String'>
    readonly status: FieldRef<"JoinRequest", 'RequestStatus'>
    readonly message: FieldRef<"JoinRequest", 'String'>
    readonly createdAt: FieldRef<"JoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JoinRequest findUnique
   */
  export type JoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findUniqueOrThrow
   */
  export type JoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findFirst
   */
  export type JoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findFirstOrThrow
   */
  export type JoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findMany
   */
  export type JoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequests to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest create
   */
  export type JoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinRequest.
     */
    data: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
  }

  /**
   * JoinRequest createMany
   */
  export type JoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinRequest createManyAndReturn
   */
  export type JoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinRequest update
   */
  export type JoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinRequest.
     */
    data: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
    /**
     * Choose, which JoinRequest to update.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest updateMany
   */
  export type JoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
  }

  /**
   * JoinRequest updateManyAndReturn
   */
  export type JoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinRequest upsert
   */
  export type JoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinRequest to update in case it exists.
     */
    where: JoinRequestWhereUniqueInput
    /**
     * In case the JoinRequest found by the `where` argument doesn't exist, create a new JoinRequest with this data.
     */
    create: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
    /**
     * In case the JoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
  }

  /**
   * JoinRequest delete
   */
  export type JoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter which JoinRequest to delete.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest deleteMany
   */
  export type JoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequests to delete
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to delete.
     */
    limit?: number
  }

  /**
   * JoinRequest without action
   */
  export type JoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    paymentGateway: string | null
    transactionId: string | null
    paymentType: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    paymentGateway: string | null
    transactionId: string | null
    paymentType: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    paymentGateway: number
    transactionId: number
    paymentType: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentGateway?: true
    transactionId?: true
    paymentType?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentGateway?: true
    transactionId?: true
    paymentType?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentGateway?: true
    transactionId?: true
    paymentType?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    amount: number
    paymentGateway: string
    transactionId: string | null
    paymentType: string
    status: string
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentGateway?: boolean
    transactionId?: boolean
    paymentType?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentGateway?: boolean
    transactionId?: boolean
    paymentType?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentGateway?: boolean
    transactionId?: boolean
    paymentType?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentGateway?: boolean
    transactionId?: boolean
    paymentType?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "paymentGateway" | "transactionId" | "paymentType" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      paymentGateway: string
      transactionId: string | null
      paymentType: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentGateway: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly paymentType: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    reviewerId: string | null
    travelPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    reviewerId: string | null
    travelPlanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    reviewerId: number
    travelPlanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    reviewerId?: true
    travelPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    reviewerId?: true
    travelPlanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    reviewerId?: true
    travelPlanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string
    reviewerId: string
    travelPlanId: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    reviewerId?: boolean
    travelPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    travelPlan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    reviewerId?: boolean
    travelPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    travelPlan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    reviewerId?: boolean
    travelPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    travelPlan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    reviewerId?: boolean
    travelPlanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "reviewerId" | "travelPlanId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    travelPlan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    travelPlan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    travelPlan?: boolean | TravelPlanDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      reviewer: Prisma.$UserPayload<ExtArgs>
      travelPlan: Prisma.$TravelPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string
      reviewerId: string
      travelPlanId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    travelPlan<T extends TravelPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlanDefaultArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly travelPlanId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model TravelPlan
   */

  export type AggregateTravelPlan = {
    _count: TravelPlanCountAggregateOutputType | null
    _avg: TravelPlanAvgAggregateOutputType | null
    _sum: TravelPlanSumAggregateOutputType | null
    _min: TravelPlanMinAggregateOutputType | null
    _max: TravelPlanMaxAggregateOutputType | null
  }

  export type TravelPlanAvgAggregateOutputType = {
    budget: number | null
    ageLimit: number | null
    members: number | null
  }

  export type TravelPlanSumAggregateOutputType = {
    budget: number | null
    ageLimit: number | null
    members: number | null
  }

  export type TravelPlanMinAggregateOutputType = {
    id: string | null
    title: string | null
    photoUrl: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    budget: number | null
    travelType: string | null
    description: string | null
    ageLimit: number | null
    members: number | null
    stay: string | null
    accommodationType: string | null
    transportType: string | null
    mealPlan: string | null
    requiredDocuments: string | null
    included: string | null
    excluded: string | null
    meetingPoint: string | null
    emergencyContact: string | null
    planStatus: $Enums.PlanStatus | null
    hostId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelPlanMaxAggregateOutputType = {
    id: string | null
    title: string | null
    photoUrl: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    budget: number | null
    travelType: string | null
    description: string | null
    ageLimit: number | null
    members: number | null
    stay: string | null
    accommodationType: string | null
    transportType: string | null
    mealPlan: string | null
    requiredDocuments: string | null
    included: string | null
    excluded: string | null
    meetingPoint: string | null
    emergencyContact: string | null
    planStatus: $Enums.PlanStatus | null
    hostId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelPlanCountAggregateOutputType = {
    id: number
    title: number
    photoUrl: number
    destination: number
    startDate: number
    endDate: number
    budget: number
    travelType: number
    description: number
    ageLimit: number
    members: number
    stay: number
    accommodationType: number
    transportType: number
    mealPlan: number
    requiredDocuments: number
    included: number
    excluded: number
    meetingPoint: number
    emergencyContact: number
    planStatus: number
    hostId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelPlanAvgAggregateInputType = {
    budget?: true
    ageLimit?: true
    members?: true
  }

  export type TravelPlanSumAggregateInputType = {
    budget?: true
    ageLimit?: true
    members?: true
  }

  export type TravelPlanMinAggregateInputType = {
    id?: true
    title?: true
    photoUrl?: true
    destination?: true
    startDate?: true
    endDate?: true
    budget?: true
    travelType?: true
    description?: true
    ageLimit?: true
    members?: true
    stay?: true
    accommodationType?: true
    transportType?: true
    mealPlan?: true
    requiredDocuments?: true
    included?: true
    excluded?: true
    meetingPoint?: true
    emergencyContact?: true
    planStatus?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelPlanMaxAggregateInputType = {
    id?: true
    title?: true
    photoUrl?: true
    destination?: true
    startDate?: true
    endDate?: true
    budget?: true
    travelType?: true
    description?: true
    ageLimit?: true
    members?: true
    stay?: true
    accommodationType?: true
    transportType?: true
    mealPlan?: true
    requiredDocuments?: true
    included?: true
    excluded?: true
    meetingPoint?: true
    emergencyContact?: true
    planStatus?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelPlanCountAggregateInputType = {
    id?: true
    title?: true
    photoUrl?: true
    destination?: true
    startDate?: true
    endDate?: true
    budget?: true
    travelType?: true
    description?: true
    ageLimit?: true
    members?: true
    stay?: true
    accommodationType?: true
    transportType?: true
    mealPlan?: true
    requiredDocuments?: true
    included?: true
    excluded?: true
    meetingPoint?: true
    emergencyContact?: true
    planStatus?: true
    hostId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlan to aggregate.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelPlans
    **/
    _count?: true | TravelPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelPlanMaxAggregateInputType
  }

  export type GetTravelPlanAggregateType<T extends TravelPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelPlan[P]>
      : GetScalarType<T[P], AggregateTravelPlan[P]>
  }




  export type TravelPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelPlanWhereInput
    orderBy?: TravelPlanOrderByWithAggregationInput | TravelPlanOrderByWithAggregationInput[]
    by: TravelPlanScalarFieldEnum[] | TravelPlanScalarFieldEnum
    having?: TravelPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelPlanCountAggregateInputType | true
    _avg?: TravelPlanAvgAggregateInputType
    _sum?: TravelPlanSumAggregateInputType
    _min?: TravelPlanMinAggregateInputType
    _max?: TravelPlanMaxAggregateInputType
  }

  export type TravelPlanGroupByOutputType = {
    id: string
    title: string
    photoUrl: string | null
    destination: string
    startDate: Date
    endDate: Date
    budget: number
    travelType: string | null
    description: string
    ageLimit: number | null
    members: number | null
    stay: string | null
    accommodationType: string | null
    transportType: string | null
    mealPlan: string | null
    requiredDocuments: string | null
    included: string | null
    excluded: string | null
    meetingPoint: string | null
    emergencyContact: string | null
    planStatus: $Enums.PlanStatus
    hostId: string
    createdAt: Date
    updatedAt: Date
    _count: TravelPlanCountAggregateOutputType | null
    _avg: TravelPlanAvgAggregateOutputType | null
    _sum: TravelPlanSumAggregateOutputType | null
    _min: TravelPlanMinAggregateOutputType | null
    _max: TravelPlanMaxAggregateOutputType | null
  }

  type GetTravelPlanGroupByPayload<T extends TravelPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TravelPlanGroupByOutputType[P]>
        }
      >
    >


  export type TravelPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    photoUrl?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    travelType?: boolean
    description?: boolean
    ageLimit?: boolean
    members?: boolean
    stay?: boolean
    accommodationType?: boolean
    transportType?: boolean
    mealPlan?: boolean
    requiredDocuments?: boolean
    included?: boolean
    excluded?: boolean
    meetingPoint?: boolean
    emergencyContact?: boolean
    planStatus?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | TravelPlan$participantsArgs<ExtArgs>
    joinRequests?: boolean | TravelPlan$joinRequestsArgs<ExtArgs>
    reviews?: boolean | TravelPlan$reviewsArgs<ExtArgs>
    _count?: boolean | TravelPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlan"]>

  export type TravelPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    photoUrl?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    travelType?: boolean
    description?: boolean
    ageLimit?: boolean
    members?: boolean
    stay?: boolean
    accommodationType?: boolean
    transportType?: boolean
    mealPlan?: boolean
    requiredDocuments?: boolean
    included?: boolean
    excluded?: boolean
    meetingPoint?: boolean
    emergencyContact?: boolean
    planStatus?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlan"]>

  export type TravelPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    photoUrl?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    travelType?: boolean
    description?: boolean
    ageLimit?: boolean
    members?: boolean
    stay?: boolean
    accommodationType?: boolean
    transportType?: boolean
    mealPlan?: boolean
    requiredDocuments?: boolean
    included?: boolean
    excluded?: boolean
    meetingPoint?: boolean
    emergencyContact?: boolean
    planStatus?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelPlan"]>

  export type TravelPlanSelectScalar = {
    id?: boolean
    title?: boolean
    photoUrl?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    budget?: boolean
    travelType?: boolean
    description?: boolean
    ageLimit?: boolean
    members?: boolean
    stay?: boolean
    accommodationType?: boolean
    transportType?: boolean
    mealPlan?: boolean
    requiredDocuments?: boolean
    included?: boolean
    excluded?: boolean
    meetingPoint?: boolean
    emergencyContact?: boolean
    planStatus?: boolean
    hostId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "photoUrl" | "destination" | "startDate" | "endDate" | "budget" | "travelType" | "description" | "ageLimit" | "members" | "stay" | "accommodationType" | "transportType" | "mealPlan" | "requiredDocuments" | "included" | "excluded" | "meetingPoint" | "emergencyContact" | "planStatus" | "hostId" | "createdAt" | "updatedAt", ExtArgs["result"]["travelPlan"]>
  export type TravelPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | TravelPlan$participantsArgs<ExtArgs>
    joinRequests?: boolean | TravelPlan$joinRequestsArgs<ExtArgs>
    reviews?: boolean | TravelPlan$reviewsArgs<ExtArgs>
    _count?: boolean | TravelPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TravelPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TravelPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TravelPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelPlan"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$UserPayload<ExtArgs>[]
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      photoUrl: string | null
      destination: string
      startDate: Date
      endDate: Date
      budget: number
      travelType: string | null
      description: string
      ageLimit: number | null
      members: number | null
      stay: string | null
      accommodationType: string | null
      transportType: string | null
      mealPlan: string | null
      requiredDocuments: string | null
      included: string | null
      excluded: string | null
      meetingPoint: string | null
      emergencyContact: string | null
      planStatus: $Enums.PlanStatus
      hostId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travelPlan"]>
    composites: {}
  }

  type TravelPlanGetPayload<S extends boolean | null | undefined | TravelPlanDefaultArgs> = $Result.GetResult<Prisma.$TravelPlanPayload, S>

  type TravelPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelPlanCountAggregateInputType | true
    }

  export interface TravelPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelPlan'], meta: { name: 'TravelPlan' } }
    /**
     * Find zero or one TravelPlan that matches the filter.
     * @param {TravelPlanFindUniqueArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelPlanFindUniqueArgs>(args: SelectSubset<T, TravelPlanFindUniqueArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelPlanFindUniqueOrThrowArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanFindFirstArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelPlanFindFirstArgs>(args?: SelectSubset<T, TravelPlanFindFirstArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanFindFirstOrThrowArgs} args - Arguments to find a TravelPlan
     * @example
     * // Get one TravelPlan
     * const travelPlan = await prisma.travelPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelPlans
     * const travelPlans = await prisma.travelPlan.findMany()
     * 
     * // Get first 10 TravelPlans
     * const travelPlans = await prisma.travelPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelPlanWithIdOnly = await prisma.travelPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelPlanFindManyArgs>(args?: SelectSubset<T, TravelPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelPlan.
     * @param {TravelPlanCreateArgs} args - Arguments to create a TravelPlan.
     * @example
     * // Create one TravelPlan
     * const TravelPlan = await prisma.travelPlan.create({
     *   data: {
     *     // ... data to create a TravelPlan
     *   }
     * })
     * 
     */
    create<T extends TravelPlanCreateArgs>(args: SelectSubset<T, TravelPlanCreateArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelPlans.
     * @param {TravelPlanCreateManyArgs} args - Arguments to create many TravelPlans.
     * @example
     * // Create many TravelPlans
     * const travelPlan = await prisma.travelPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelPlanCreateManyArgs>(args?: SelectSubset<T, TravelPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelPlans and returns the data saved in the database.
     * @param {TravelPlanCreateManyAndReturnArgs} args - Arguments to create many TravelPlans.
     * @example
     * // Create many TravelPlans
     * const travelPlan = await prisma.travelPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelPlans and only return the `id`
     * const travelPlanWithIdOnly = await prisma.travelPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelPlan.
     * @param {TravelPlanDeleteArgs} args - Arguments to delete one TravelPlan.
     * @example
     * // Delete one TravelPlan
     * const TravelPlan = await prisma.travelPlan.delete({
     *   where: {
     *     // ... filter to delete one TravelPlan
     *   }
     * })
     * 
     */
    delete<T extends TravelPlanDeleteArgs>(args: SelectSubset<T, TravelPlanDeleteArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelPlan.
     * @param {TravelPlanUpdateArgs} args - Arguments to update one TravelPlan.
     * @example
     * // Update one TravelPlan
     * const travelPlan = await prisma.travelPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelPlanUpdateArgs>(args: SelectSubset<T, TravelPlanUpdateArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelPlans.
     * @param {TravelPlanDeleteManyArgs} args - Arguments to filter TravelPlans to delete.
     * @example
     * // Delete a few TravelPlans
     * const { count } = await prisma.travelPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelPlanDeleteManyArgs>(args?: SelectSubset<T, TravelPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelPlans
     * const travelPlan = await prisma.travelPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelPlanUpdateManyArgs>(args: SelectSubset<T, TravelPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelPlans and returns the data updated in the database.
     * @param {TravelPlanUpdateManyAndReturnArgs} args - Arguments to update many TravelPlans.
     * @example
     * // Update many TravelPlans
     * const travelPlan = await prisma.travelPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelPlans and only return the `id`
     * const travelPlanWithIdOnly = await prisma.travelPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelPlan.
     * @param {TravelPlanUpsertArgs} args - Arguments to update or create a TravelPlan.
     * @example
     * // Update or create a TravelPlan
     * const travelPlan = await prisma.travelPlan.upsert({
     *   create: {
     *     // ... data to create a TravelPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelPlan we want to update
     *   }
     * })
     */
    upsert<T extends TravelPlanUpsertArgs>(args: SelectSubset<T, TravelPlanUpsertArgs<ExtArgs>>): Prisma__TravelPlanClient<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanCountArgs} args - Arguments to filter TravelPlans to count.
     * @example
     * // Count the number of TravelPlans
     * const count = await prisma.travelPlan.count({
     *   where: {
     *     // ... the filter for the TravelPlans we want to count
     *   }
     * })
    **/
    count<T extends TravelPlanCountArgs>(
      args?: Subset<T, TravelPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelPlanAggregateArgs>(args: Subset<T, TravelPlanAggregateArgs>): Prisma.PrismaPromise<GetTravelPlanAggregateType<T>>

    /**
     * Group by TravelPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelPlanGroupByArgs['orderBy'] }
        : { orderBy?: TravelPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelPlan model
   */
  readonly fields: TravelPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends TravelPlan$participantsArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlan$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends TravelPlan$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlan$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends TravelPlan$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, TravelPlan$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TravelPlan model
   */
  interface TravelPlanFieldRefs {
    readonly id: FieldRef<"TravelPlan", 'String'>
    readonly title: FieldRef<"TravelPlan", 'String'>
    readonly photoUrl: FieldRef<"TravelPlan", 'String'>
    readonly destination: FieldRef<"TravelPlan", 'String'>
    readonly startDate: FieldRef<"TravelPlan", 'DateTime'>
    readonly endDate: FieldRef<"TravelPlan", 'DateTime'>
    readonly budget: FieldRef<"TravelPlan", 'Int'>
    readonly travelType: FieldRef<"TravelPlan", 'String'>
    readonly description: FieldRef<"TravelPlan", 'String'>
    readonly ageLimit: FieldRef<"TravelPlan", 'Int'>
    readonly members: FieldRef<"TravelPlan", 'Int'>
    readonly stay: FieldRef<"TravelPlan", 'String'>
    readonly accommodationType: FieldRef<"TravelPlan", 'String'>
    readonly transportType: FieldRef<"TravelPlan", 'String'>
    readonly mealPlan: FieldRef<"TravelPlan", 'String'>
    readonly requiredDocuments: FieldRef<"TravelPlan", 'String'>
    readonly included: FieldRef<"TravelPlan", 'String'>
    readonly excluded: FieldRef<"TravelPlan", 'String'>
    readonly meetingPoint: FieldRef<"TravelPlan", 'String'>
    readonly emergencyContact: FieldRef<"TravelPlan", 'String'>
    readonly planStatus: FieldRef<"TravelPlan", 'PlanStatus'>
    readonly hostId: FieldRef<"TravelPlan", 'String'>
    readonly createdAt: FieldRef<"TravelPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"TravelPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelPlan findUnique
   */
  export type TravelPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan findUniqueOrThrow
   */
  export type TravelPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan findFirst
   */
  export type TravelPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlans.
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlans.
     */
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * TravelPlan findFirstOrThrow
   */
  export type TravelPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlan to fetch.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelPlans.
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelPlans.
     */
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * TravelPlan findMany
   */
  export type TravelPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter, which TravelPlans to fetch.
     */
    where?: TravelPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelPlans to fetch.
     */
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelPlans.
     */
    cursor?: TravelPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelPlans.
     */
    skip?: number
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * TravelPlan create
   */
  export type TravelPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelPlan.
     */
    data: XOR<TravelPlanCreateInput, TravelPlanUncheckedCreateInput>
  }

  /**
   * TravelPlan createMany
   */
  export type TravelPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelPlans.
     */
    data: TravelPlanCreateManyInput | TravelPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelPlan createManyAndReturn
   */
  export type TravelPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TravelPlans.
     */
    data: TravelPlanCreateManyInput | TravelPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlan update
   */
  export type TravelPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelPlan.
     */
    data: XOR<TravelPlanUpdateInput, TravelPlanUncheckedUpdateInput>
    /**
     * Choose, which TravelPlan to update.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan updateMany
   */
  export type TravelPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelPlans.
     */
    data: XOR<TravelPlanUpdateManyMutationInput, TravelPlanUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlans to update
     */
    where?: TravelPlanWhereInput
    /**
     * Limit how many TravelPlans to update.
     */
    limit?: number
  }

  /**
   * TravelPlan updateManyAndReturn
   */
  export type TravelPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * The data used to update TravelPlans.
     */
    data: XOR<TravelPlanUpdateManyMutationInput, TravelPlanUncheckedUpdateManyInput>
    /**
     * Filter which TravelPlans to update
     */
    where?: TravelPlanWhereInput
    /**
     * Limit how many TravelPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelPlan upsert
   */
  export type TravelPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelPlan to update in case it exists.
     */
    where: TravelPlanWhereUniqueInput
    /**
     * In case the TravelPlan found by the `where` argument doesn't exist, create a new TravelPlan with this data.
     */
    create: XOR<TravelPlanCreateInput, TravelPlanUncheckedCreateInput>
    /**
     * In case the TravelPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelPlanUpdateInput, TravelPlanUncheckedUpdateInput>
  }

  /**
   * TravelPlan delete
   */
  export type TravelPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    /**
     * Filter which TravelPlan to delete.
     */
    where: TravelPlanWhereUniqueInput
  }

  /**
   * TravelPlan deleteMany
   */
  export type TravelPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelPlans to delete
     */
    where?: TravelPlanWhereInput
    /**
     * Limit how many TravelPlans to delete.
     */
    limit?: number
  }

  /**
   * TravelPlan.participants
   */
  export type TravelPlan$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * TravelPlan.joinRequests
   */
  export type TravelPlan$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * TravelPlan.reviews
   */
  export type TravelPlan$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * TravelPlan without action
   */
  export type TravelPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    rating: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    rating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    fullName: string | null
    profileImage: string | null
    bio: string | null
    age: number | null
    gender: $Enums.Gender | null
    currentLocation: string | null
    userStatus: $Enums.Status | null
    role: $Enums.Role | null
    verified: boolean | null
    contactNumber: string | null
    rating: number | null
    subscriptionActive: boolean | null
    subscriptionExpiresAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    fullName: string | null
    profileImage: string | null
    bio: string | null
    age: number | null
    gender: $Enums.Gender | null
    currentLocation: string | null
    userStatus: $Enums.Status | null
    role: $Enums.Role | null
    verified: boolean | null
    contactNumber: string | null
    rating: number | null
    subscriptionActive: boolean | null
    subscriptionExpiresAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    fullName: number
    profileImage: number
    bio: number
    age: number
    gender: number
    currentLocation: number
    travelInterests: number
    visitedCountries: number
    userStatus: number
    role: number
    verified: number
    contactNumber: number
    rating: number
    subscriptionActive: number
    subscriptionExpiresAt: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    rating?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    rating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    fullName?: true
    profileImage?: true
    bio?: true
    age?: true
    gender?: true
    currentLocation?: true
    userStatus?: true
    role?: true
    verified?: true
    contactNumber?: true
    rating?: true
    subscriptionActive?: true
    subscriptionExpiresAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    fullName?: true
    profileImage?: true
    bio?: true
    age?: true
    gender?: true
    currentLocation?: true
    userStatus?: true
    role?: true
    verified?: true
    contactNumber?: true
    rating?: true
    subscriptionActive?: true
    subscriptionExpiresAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    fullName?: true
    profileImage?: true
    bio?: true
    age?: true
    gender?: true
    currentLocation?: true
    travelInterests?: true
    visitedCountries?: true
    userStatus?: true
    role?: true
    verified?: true
    contactNumber?: true
    rating?: true
    subscriptionActive?: true
    subscriptionExpiresAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string | null
    email: string
    password: string
    fullName: string
    profileImage: string | null
    bio: string | null
    age: number | null
    gender: $Enums.Gender | null
    currentLocation: string | null
    travelInterests: string[]
    visitedCountries: string[]
    userStatus: $Enums.Status
    role: $Enums.Role
    verified: boolean
    contactNumber: string | null
    rating: number
    subscriptionActive: boolean
    subscriptionExpiresAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    profileImage?: boolean
    bio?: boolean
    age?: boolean
    gender?: boolean
    currentLocation?: boolean
    travelInterests?: boolean
    visitedCountries?: boolean
    userStatus?: boolean
    role?: boolean
    verified?: boolean
    contactNumber?: boolean
    rating?: boolean
    subscriptionActive?: boolean
    subscriptionExpiresAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payments?: boolean | User$paymentsArgs<ExtArgs>
    hostedPlans?: boolean | User$hostedPlansArgs<ExtArgs>
    joinedPlans?: boolean | User$joinedPlansArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    profileImage?: boolean
    bio?: boolean
    age?: boolean
    gender?: boolean
    currentLocation?: boolean
    travelInterests?: boolean
    visitedCountries?: boolean
    userStatus?: boolean
    role?: boolean
    verified?: boolean
    contactNumber?: boolean
    rating?: boolean
    subscriptionActive?: boolean
    subscriptionExpiresAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    profileImage?: boolean
    bio?: boolean
    age?: boolean
    gender?: boolean
    currentLocation?: boolean
    travelInterests?: boolean
    visitedCountries?: boolean
    userStatus?: boolean
    role?: boolean
    verified?: boolean
    contactNumber?: boolean
    rating?: boolean
    subscriptionActive?: boolean
    subscriptionExpiresAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    profileImage?: boolean
    bio?: boolean
    age?: boolean
    gender?: boolean
    currentLocation?: boolean
    travelInterests?: boolean
    visitedCountries?: boolean
    userStatus?: boolean
    role?: boolean
    verified?: boolean
    contactNumber?: boolean
    rating?: boolean
    subscriptionActive?: boolean
    subscriptionExpiresAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "fullName" | "profileImage" | "bio" | "age" | "gender" | "currentLocation" | "travelInterests" | "visitedCountries" | "userStatus" | "role" | "verified" | "contactNumber" | "rating" | "subscriptionActive" | "subscriptionExpiresAt" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | User$paymentsArgs<ExtArgs>
    hostedPlans?: boolean | User$hostedPlansArgs<ExtArgs>
    joinedPlans?: boolean | User$joinedPlansArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      hostedPlans: Prisma.$TravelPlanPayload<ExtArgs>[]
      joinedPlans: Prisma.$TravelPlanPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      email: string
      password: string
      fullName: string
      profileImage: string | null
      bio: string | null
      age: number | null
      gender: $Enums.Gender | null
      currentLocation: string | null
      travelInterests: string[]
      visitedCountries: string[]
      userStatus: $Enums.Status
      role: $Enums.Role
      verified: boolean
      contactNumber: string | null
      rating: number
      subscriptionActive: boolean
      subscriptionExpiresAt: Date | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hostedPlans<T extends User$hostedPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$hostedPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinedPlans<T extends User$joinedPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$joinedPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends User$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly currentLocation: FieldRef<"User", 'String'>
    readonly travelInterests: FieldRef<"User", 'String[]'>
    readonly visitedCountries: FieldRef<"User", 'String[]'>
    readonly userStatus: FieldRef<"User", 'Status'>
    readonly role: FieldRef<"User", 'Role'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly contactNumber: FieldRef<"User", 'String'>
    readonly rating: FieldRef<"User", 'Int'>
    readonly subscriptionActive: FieldRef<"User", 'Boolean'>
    readonly subscriptionExpiresAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.hostedPlans
   */
  export type User$hostedPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    where?: TravelPlanWhereInput
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    cursor?: TravelPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * User.joinedPlans
   */
  export type User$joinedPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelPlan
     */
    select?: TravelPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelPlan
     */
    omit?: TravelPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelPlanInclude<ExtArgs> | null
    where?: TravelPlanWhereInput
    orderBy?: TravelPlanOrderByWithRelationInput | TravelPlanOrderByWithRelationInput[]
    cursor?: TravelPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelPlanScalarFieldEnum | TravelPlanScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.joinRequests
   */
  export type User$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JoinRequestScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    applicantId: 'applicantId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type JoinRequestScalarFieldEnum = (typeof JoinRequestScalarFieldEnum)[keyof typeof JoinRequestScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    paymentGateway: 'paymentGateway',
    transactionId: 'transactionId',
    paymentType: 'paymentType',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    reviewerId: 'reviewerId',
    travelPlanId: 'travelPlanId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TravelPlanScalarFieldEnum: {
    id: 'id',
    title: 'title',
    photoUrl: 'photoUrl',
    destination: 'destination',
    startDate: 'startDate',
    endDate: 'endDate',
    budget: 'budget',
    travelType: 'travelType',
    description: 'description',
    ageLimit: 'ageLimit',
    members: 'members',
    stay: 'stay',
    accommodationType: 'accommodationType',
    transportType: 'transportType',
    mealPlan: 'mealPlan',
    requiredDocuments: 'requiredDocuments',
    included: 'included',
    excluded: 'excluded',
    meetingPoint: 'meetingPoint',
    emergencyContact: 'emergencyContact',
    planStatus: 'planStatus',
    hostId: 'hostId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelPlanScalarFieldEnum = (typeof TravelPlanScalarFieldEnum)[keyof typeof TravelPlanScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    profileImage: 'profileImage',
    bio: 'bio',
    age: 'age',
    gender: 'gender',
    currentLocation: 'currentLocation',
    travelInterests: 'travelInterests',
    visitedCountries: 'visitedCountries',
    userStatus: 'userStatus',
    role: 'role',
    verified: 'verified',
    contactNumber: 'contactNumber',
    rating: 'rating',
    subscriptionActive: 'subscriptionActive',
    subscriptionExpiresAt: 'subscriptionExpiresAt',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type JoinRequestWhereInput = {
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    id?: StringFilter<"JoinRequest"> | string
    planId?: StringFilter<"JoinRequest"> | string
    applicantId?: StringFilter<"JoinRequest"> | string
    status?: EnumRequestStatusFilter<"JoinRequest"> | $Enums.RequestStatus
    message?: StringNullableFilter<"JoinRequest"> | string | null
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    plan?: TravelPlanOrderByWithRelationInput
    applicant?: UserOrderByWithRelationInput
  }

  export type JoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId_applicantId?: JoinRequestPlanIdApplicantIdCompoundUniqueInput
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    planId?: StringFilter<"JoinRequest"> | string
    applicantId?: StringFilter<"JoinRequest"> | string
    status?: EnumRequestStatusFilter<"JoinRequest"> | $Enums.RequestStatus
    message?: StringNullableFilter<"JoinRequest"> | string | null
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    plan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "planId_applicantId">

  export type JoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JoinRequestCountOrderByAggregateInput
    _max?: JoinRequestMaxOrderByAggregateInput
    _min?: JoinRequestMinOrderByAggregateInput
  }

  export type JoinRequestScalarWhereWithAggregatesInput = {
    AND?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    OR?: JoinRequestScalarWhereWithAggregatesInput[]
    NOT?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JoinRequest"> | string
    planId?: StringWithAggregatesFilter<"JoinRequest"> | string
    applicantId?: StringWithAggregatesFilter<"JoinRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"JoinRequest"> | $Enums.RequestStatus
    message?: StringNullableWithAggregatesFilter<"JoinRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentGateway?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    paymentType?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentGateway?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentGateway?: StringFilter<"Payment"> | string
    paymentType?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentGateway?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentGateway?: StringWithAggregatesFilter<"Payment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paymentType?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    travelPlanId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    travelPlan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reviewerId?: SortOrder
    travelPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewer?: UserOrderByWithRelationInput
    travelPlan?: TravelPlanOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    travelPlanId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    travelPlan?: XOR<TravelPlanScalarRelationFilter, TravelPlanWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reviewerId?: SortOrder
    travelPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    travelPlanId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TravelPlanWhereInput = {
    AND?: TravelPlanWhereInput | TravelPlanWhereInput[]
    OR?: TravelPlanWhereInput[]
    NOT?: TravelPlanWhereInput | TravelPlanWhereInput[]
    id?: StringFilter<"TravelPlan"> | string
    title?: StringFilter<"TravelPlan"> | string
    photoUrl?: StringNullableFilter<"TravelPlan"> | string | null
    destination?: StringFilter<"TravelPlan"> | string
    startDate?: DateTimeFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeFilter<"TravelPlan"> | Date | string
    budget?: IntFilter<"TravelPlan"> | number
    travelType?: StringNullableFilter<"TravelPlan"> | string | null
    description?: StringFilter<"TravelPlan"> | string
    ageLimit?: IntNullableFilter<"TravelPlan"> | number | null
    members?: IntNullableFilter<"TravelPlan"> | number | null
    stay?: StringNullableFilter<"TravelPlan"> | string | null
    accommodationType?: StringNullableFilter<"TravelPlan"> | string | null
    transportType?: StringNullableFilter<"TravelPlan"> | string | null
    mealPlan?: StringNullableFilter<"TravelPlan"> | string | null
    requiredDocuments?: StringNullableFilter<"TravelPlan"> | string | null
    included?: StringNullableFilter<"TravelPlan"> | string | null
    excluded?: StringNullableFilter<"TravelPlan"> | string | null
    meetingPoint?: StringNullableFilter<"TravelPlan"> | string | null
    emergencyContact?: StringNullableFilter<"TravelPlan"> | string | null
    planStatus?: EnumPlanStatusFilter<"TravelPlan"> | $Enums.PlanStatus
    hostId?: StringFilter<"TravelPlan"> | string
    createdAt?: DateTimeFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TravelPlan"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: UserListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type TravelPlanOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    travelType?: SortOrderInput | SortOrder
    description?: SortOrder
    ageLimit?: SortOrderInput | SortOrder
    members?: SortOrderInput | SortOrder
    stay?: SortOrderInput | SortOrder
    accommodationType?: SortOrderInput | SortOrder
    transportType?: SortOrderInput | SortOrder
    mealPlan?: SortOrderInput | SortOrder
    requiredDocuments?: SortOrderInput | SortOrder
    included?: SortOrderInput | SortOrder
    excluded?: SortOrderInput | SortOrder
    meetingPoint?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    planStatus?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    host?: UserOrderByWithRelationInput
    participants?: UserOrderByRelationAggregateInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TravelPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelPlanWhereInput | TravelPlanWhereInput[]
    OR?: TravelPlanWhereInput[]
    NOT?: TravelPlanWhereInput | TravelPlanWhereInput[]
    title?: StringFilter<"TravelPlan"> | string
    photoUrl?: StringNullableFilter<"TravelPlan"> | string | null
    destination?: StringFilter<"TravelPlan"> | string
    startDate?: DateTimeFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeFilter<"TravelPlan"> | Date | string
    budget?: IntFilter<"TravelPlan"> | number
    travelType?: StringNullableFilter<"TravelPlan"> | string | null
    description?: StringFilter<"TravelPlan"> | string
    ageLimit?: IntNullableFilter<"TravelPlan"> | number | null
    members?: IntNullableFilter<"TravelPlan"> | number | null
    stay?: StringNullableFilter<"TravelPlan"> | string | null
    accommodationType?: StringNullableFilter<"TravelPlan"> | string | null
    transportType?: StringNullableFilter<"TravelPlan"> | string | null
    mealPlan?: StringNullableFilter<"TravelPlan"> | string | null
    requiredDocuments?: StringNullableFilter<"TravelPlan"> | string | null
    included?: StringNullableFilter<"TravelPlan"> | string | null
    excluded?: StringNullableFilter<"TravelPlan"> | string | null
    meetingPoint?: StringNullableFilter<"TravelPlan"> | string | null
    emergencyContact?: StringNullableFilter<"TravelPlan"> | string | null
    planStatus?: EnumPlanStatusFilter<"TravelPlan"> | $Enums.PlanStatus
    hostId?: StringFilter<"TravelPlan"> | string
    createdAt?: DateTimeFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TravelPlan"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: UserListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type TravelPlanOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    travelType?: SortOrderInput | SortOrder
    description?: SortOrder
    ageLimit?: SortOrderInput | SortOrder
    members?: SortOrderInput | SortOrder
    stay?: SortOrderInput | SortOrder
    accommodationType?: SortOrderInput | SortOrder
    transportType?: SortOrderInput | SortOrder
    mealPlan?: SortOrderInput | SortOrder
    requiredDocuments?: SortOrderInput | SortOrder
    included?: SortOrderInput | SortOrder
    excluded?: SortOrderInput | SortOrder
    meetingPoint?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    planStatus?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelPlanCountOrderByAggregateInput
    _avg?: TravelPlanAvgOrderByAggregateInput
    _max?: TravelPlanMaxOrderByAggregateInput
    _min?: TravelPlanMinOrderByAggregateInput
    _sum?: TravelPlanSumOrderByAggregateInput
  }

  export type TravelPlanScalarWhereWithAggregatesInput = {
    AND?: TravelPlanScalarWhereWithAggregatesInput | TravelPlanScalarWhereWithAggregatesInput[]
    OR?: TravelPlanScalarWhereWithAggregatesInput[]
    NOT?: TravelPlanScalarWhereWithAggregatesInput | TravelPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelPlan"> | string
    title?: StringWithAggregatesFilter<"TravelPlan"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    destination?: StringWithAggregatesFilter<"TravelPlan"> | string
    startDate?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
    budget?: IntWithAggregatesFilter<"TravelPlan"> | number
    travelType?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    description?: StringWithAggregatesFilter<"TravelPlan"> | string
    ageLimit?: IntNullableWithAggregatesFilter<"TravelPlan"> | number | null
    members?: IntNullableWithAggregatesFilter<"TravelPlan"> | number | null
    stay?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    accommodationType?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    transportType?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    mealPlan?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    requiredDocuments?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    included?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    excluded?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    meetingPoint?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"TravelPlan"> | string | null
    planStatus?: EnumPlanStatusWithAggregatesFilter<"TravelPlan"> | $Enums.PlanStatus
    hostId?: StringWithAggregatesFilter<"TravelPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TravelPlan"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    currentLocation?: StringNullableFilter<"User"> | string | null
    travelInterests?: StringNullableListFilter<"User">
    visitedCountries?: StringNullableListFilter<"User">
    userStatus?: EnumStatusFilter<"User"> | $Enums.Status
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verified?: BoolFilter<"User"> | boolean
    contactNumber?: StringNullableFilter<"User"> | string | null
    rating?: IntFilter<"User"> | number
    subscriptionActive?: BoolFilter<"User"> | boolean
    subscriptionExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    payments?: PaymentListRelationFilter
    hostedPlans?: TravelPlanListRelationFilter
    joinedPlans?: TravelPlanListRelationFilter
    reviews?: ReviewListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    currentLocation?: SortOrderInput | SortOrder
    travelInterests?: SortOrder
    visitedCountries?: SortOrder
    userStatus?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    rating?: SortOrder
    subscriptionActive?: SortOrder
    subscriptionExpiresAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    hostedPlans?: TravelPlanOrderByRelationAggregateInput
    joinedPlans?: TravelPlanOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    currentLocation?: StringNullableFilter<"User"> | string | null
    travelInterests?: StringNullableListFilter<"User">
    visitedCountries?: StringNullableListFilter<"User">
    userStatus?: EnumStatusFilter<"User"> | $Enums.Status
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verified?: BoolFilter<"User"> | boolean
    contactNumber?: StringNullableFilter<"User"> | string | null
    rating?: IntFilter<"User"> | number
    subscriptionActive?: BoolFilter<"User"> | boolean
    subscriptionExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    payments?: PaymentListRelationFilter
    hostedPlans?: TravelPlanListRelationFilter
    joinedPlans?: TravelPlanListRelationFilter
    reviews?: ReviewListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    currentLocation?: SortOrderInput | SortOrder
    travelInterests?: SortOrder
    visitedCountries?: SortOrder
    userStatus?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    rating?: SortOrder
    subscriptionActive?: SortOrder
    subscriptionExpiresAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    currentLocation?: StringNullableWithAggregatesFilter<"User"> | string | null
    travelInterests?: StringNullableListFilter<"User">
    visitedCountries?: StringNullableListFilter<"User">
    userStatus?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    contactNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    rating?: IntWithAggregatesFilter<"User"> | number
    subscriptionActive?: BoolWithAggregatesFilter<"User"> | boolean
    subscriptionExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JoinRequestCreateInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    plan: TravelPlanCreateNestedOneWithoutJoinRequestsInput
    applicant: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateInput = {
    id?: string
    planId: string
    applicantId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type JoinRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: TravelPlanUpdateOneRequiredWithoutJoinRequestsNestedInput
    applicant?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestCreateManyInput = {
    id?: string
    planId: string
    applicantId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type JoinRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    paymentGateway: string
    transactionId?: string | null
    paymentType: string
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    paymentGateway: string
    transactionId?: string | null
    paymentType: string
    status: string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentGateway?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentGateway?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    amount: number
    paymentGateway: string
    transactionId?: string | null
    paymentType: string
    status: string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentGateway?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentGateway?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsInput
    travelPlan: TravelPlanCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating?: number
    comment: string
    reviewerId: string
    travelPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    travelPlan?: TravelPlanUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    travelPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating?: number
    comment: string
    reviewerId: string
    travelPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    travelPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanCreateInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostedPlansInput
    participants?: UserCreateNestedManyWithoutJoinedPlansInput
    joinRequests?: JoinRequestCreateNestedManyWithoutPlanInput
    reviews?: ReviewCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanUncheckedCreateInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutJoinedPlansInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutPlanInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedPlansNestedInput
    participants?: UserUpdateManyWithoutJoinedPlansNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUpdateManyWithoutTravelPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutJoinedPlansNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTravelPlanNestedInput
  }

  export type TravelPlanCreateManyInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanUncheckedCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanUncheckedCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUncheckedUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUncheckedUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TravelPlanScalarRelationFilter = {
    is?: TravelPlanWhereInput
    isNot?: TravelPlanWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JoinRequestPlanIdApplicantIdCompoundUniqueInput = {
    planId: string
    applicantId: string
  }

  export type JoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentGateway?: SortOrder
    transactionId?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentGateway?: SortOrder
    transactionId?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentGateway?: SortOrder
    transactionId?: SortOrder
    paymentType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reviewerId?: SortOrder
    travelPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reviewerId?: SortOrder
    travelPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reviewerId?: SortOrder
    travelPlanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type JoinRequestListRelationFilter = {
    every?: JoinRequestWhereInput
    some?: JoinRequestWhereInput
    none?: JoinRequestWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelPlanCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    travelType?: SortOrder
    description?: SortOrder
    ageLimit?: SortOrder
    members?: SortOrder
    stay?: SortOrder
    accommodationType?: SortOrder
    transportType?: SortOrder
    mealPlan?: SortOrder
    requiredDocuments?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    meetingPoint?: SortOrder
    emergencyContact?: SortOrder
    planStatus?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelPlanAvgOrderByAggregateInput = {
    budget?: SortOrder
    ageLimit?: SortOrder
    members?: SortOrder
  }

  export type TravelPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    travelType?: SortOrder
    description?: SortOrder
    ageLimit?: SortOrder
    members?: SortOrder
    stay?: SortOrder
    accommodationType?: SortOrder
    transportType?: SortOrder
    mealPlan?: SortOrder
    requiredDocuments?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    meetingPoint?: SortOrder
    emergencyContact?: SortOrder
    planStatus?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelPlanMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    photoUrl?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    budget?: SortOrder
    travelType?: SortOrder
    description?: SortOrder
    ageLimit?: SortOrder
    members?: SortOrder
    stay?: SortOrder
    accommodationType?: SortOrder
    transportType?: SortOrder
    mealPlan?: SortOrder
    requiredDocuments?: SortOrder
    included?: SortOrder
    excluded?: SortOrder
    meetingPoint?: SortOrder
    emergencyContact?: SortOrder
    planStatus?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelPlanSumOrderByAggregateInput = {
    budget?: SortOrder
    ageLimit?: SortOrder
    members?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type TravelPlanListRelationFilter = {
    every?: TravelPlanWhereInput
    some?: TravelPlanWhereInput
    none?: TravelPlanWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    currentLocation?: SortOrder
    travelInterests?: SortOrder
    visitedCountries?: SortOrder
    userStatus?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    contactNumber?: SortOrder
    rating?: SortOrder
    subscriptionActive?: SortOrder
    subscriptionExpiresAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    rating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    currentLocation?: SortOrder
    userStatus?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    contactNumber?: SortOrder
    rating?: SortOrder
    subscriptionActive?: SortOrder
    subscriptionExpiresAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    currentLocation?: SortOrder
    userStatus?: SortOrder
    role?: SortOrder
    verified?: SortOrder
    contactNumber?: SortOrder
    rating?: SortOrder
    subscriptionActive?: SortOrder
    subscriptionExpiresAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    rating?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TravelPlanCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutJoinRequestsInput
    connect?: TravelPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TravelPlanUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutJoinRequestsInput
    upsert?: TravelPlanUpsertWithoutJoinRequestsInput
    connect?: TravelPlanWhereUniqueInput
    update?: XOR<XOR<TravelPlanUpdateToOneWithWhereWithoutJoinRequestsInput, TravelPlanUpdateWithoutJoinRequestsInput>, TravelPlanUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    upsert?: UserUpsertWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinRequestsInput, UserUpdateWithoutJoinRequestsInput>, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TravelPlanCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutReviewsInput
    connect?: TravelPlanWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TravelPlanUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TravelPlanCreateOrConnectWithoutReviewsInput
    upsert?: TravelPlanUpsertWithoutReviewsInput
    connect?: TravelPlanWhereUniqueInput
    update?: XOR<XOR<TravelPlanUpdateToOneWithWhereWithoutReviewsInput, TravelPlanUpdateWithoutReviewsInput>, TravelPlanUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutHostedPlansInput = {
    create?: XOR<UserCreateWithoutHostedPlansInput, UserUncheckedCreateWithoutHostedPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedPlansInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutJoinedPlansInput = {
    create?: XOR<UserCreateWithoutJoinedPlansInput, UserUncheckedCreateWithoutJoinedPlansInput> | UserCreateWithoutJoinedPlansInput[] | UserUncheckedCreateWithoutJoinedPlansInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedPlansInput | UserCreateOrConnectWithoutJoinedPlansInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutPlanInput = {
    create?: XOR<JoinRequestCreateWithoutPlanInput, JoinRequestUncheckedCreateWithoutPlanInput> | JoinRequestCreateWithoutPlanInput[] | JoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutPlanInput | JoinRequestCreateOrConnectWithoutPlanInput[]
    createMany?: JoinRequestCreateManyPlanInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTravelPlanInput = {
    create?: XOR<ReviewCreateWithoutTravelPlanInput, ReviewUncheckedCreateWithoutTravelPlanInput> | ReviewCreateWithoutTravelPlanInput[] | ReviewUncheckedCreateWithoutTravelPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTravelPlanInput | ReviewCreateOrConnectWithoutTravelPlanInput[]
    createMany?: ReviewCreateManyTravelPlanInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutJoinedPlansInput = {
    create?: XOR<UserCreateWithoutJoinedPlansInput, UserUncheckedCreateWithoutJoinedPlansInput> | UserCreateWithoutJoinedPlansInput[] | UserUncheckedCreateWithoutJoinedPlansInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedPlansInput | UserCreateOrConnectWithoutJoinedPlansInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<JoinRequestCreateWithoutPlanInput, JoinRequestUncheckedCreateWithoutPlanInput> | JoinRequestCreateWithoutPlanInput[] | JoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutPlanInput | JoinRequestCreateOrConnectWithoutPlanInput[]
    createMany?: JoinRequestCreateManyPlanInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTravelPlanInput = {
    create?: XOR<ReviewCreateWithoutTravelPlanInput, ReviewUncheckedCreateWithoutTravelPlanInput> | ReviewCreateWithoutTravelPlanInput[] | ReviewUncheckedCreateWithoutTravelPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTravelPlanInput | ReviewCreateOrConnectWithoutTravelPlanInput[]
    createMany?: ReviewCreateManyTravelPlanInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type UserUpdateOneRequiredWithoutHostedPlansNestedInput = {
    create?: XOR<UserCreateWithoutHostedPlansInput, UserUncheckedCreateWithoutHostedPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedPlansInput
    upsert?: UserUpsertWithoutHostedPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostedPlansInput, UserUpdateWithoutHostedPlansInput>, UserUncheckedUpdateWithoutHostedPlansInput>
  }

  export type UserUpdateManyWithoutJoinedPlansNestedInput = {
    create?: XOR<UserCreateWithoutJoinedPlansInput, UserUncheckedCreateWithoutJoinedPlansInput> | UserCreateWithoutJoinedPlansInput[] | UserUncheckedCreateWithoutJoinedPlansInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedPlansInput | UserCreateOrConnectWithoutJoinedPlansInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJoinedPlansInput | UserUpsertWithWhereUniqueWithoutJoinedPlansInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJoinedPlansInput | UserUpdateWithWhereUniqueWithoutJoinedPlansInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJoinedPlansInput | UserUpdateManyWithWhereWithoutJoinedPlansInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutPlanNestedInput = {
    create?: XOR<JoinRequestCreateWithoutPlanInput, JoinRequestUncheckedCreateWithoutPlanInput> | JoinRequestCreateWithoutPlanInput[] | JoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutPlanInput | JoinRequestCreateOrConnectWithoutPlanInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutPlanInput | JoinRequestUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: JoinRequestCreateManyPlanInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutPlanInput | JoinRequestUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutPlanInput | JoinRequestUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTravelPlanNestedInput = {
    create?: XOR<ReviewCreateWithoutTravelPlanInput, ReviewUncheckedCreateWithoutTravelPlanInput> | ReviewCreateWithoutTravelPlanInput[] | ReviewUncheckedCreateWithoutTravelPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTravelPlanInput | ReviewCreateOrConnectWithoutTravelPlanInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTravelPlanInput | ReviewUpsertWithWhereUniqueWithoutTravelPlanInput[]
    createMany?: ReviewCreateManyTravelPlanInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTravelPlanInput | ReviewUpdateWithWhereUniqueWithoutTravelPlanInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTravelPlanInput | ReviewUpdateManyWithWhereWithoutTravelPlanInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutJoinedPlansNestedInput = {
    create?: XOR<UserCreateWithoutJoinedPlansInput, UserUncheckedCreateWithoutJoinedPlansInput> | UserCreateWithoutJoinedPlansInput[] | UserUncheckedCreateWithoutJoinedPlansInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinedPlansInput | UserCreateOrConnectWithoutJoinedPlansInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJoinedPlansInput | UserUpsertWithWhereUniqueWithoutJoinedPlansInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJoinedPlansInput | UserUpdateWithWhereUniqueWithoutJoinedPlansInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJoinedPlansInput | UserUpdateManyWithWhereWithoutJoinedPlansInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<JoinRequestCreateWithoutPlanInput, JoinRequestUncheckedCreateWithoutPlanInput> | JoinRequestCreateWithoutPlanInput[] | JoinRequestUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutPlanInput | JoinRequestCreateOrConnectWithoutPlanInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutPlanInput | JoinRequestUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: JoinRequestCreateManyPlanInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutPlanInput | JoinRequestUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutPlanInput | JoinRequestUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTravelPlanNestedInput = {
    create?: XOR<ReviewCreateWithoutTravelPlanInput, ReviewUncheckedCreateWithoutTravelPlanInput> | ReviewCreateWithoutTravelPlanInput[] | ReviewUncheckedCreateWithoutTravelPlanInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTravelPlanInput | ReviewCreateOrConnectWithoutTravelPlanInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTravelPlanInput | ReviewUpsertWithWhereUniqueWithoutTravelPlanInput[]
    createMany?: ReviewCreateManyTravelPlanInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTravelPlanInput | ReviewUpdateWithWhereUniqueWithoutTravelPlanInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTravelPlanInput | ReviewUpdateManyWithWhereWithoutTravelPlanInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreatetravelInterestsInput = {
    set: string[]
  }

  export type UserCreatevisitedCountriesInput = {
    set: string[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TravelPlanCreateNestedManyWithoutHostInput = {
    create?: XOR<TravelPlanCreateWithoutHostInput, TravelPlanUncheckedCreateWithoutHostInput> | TravelPlanCreateWithoutHostInput[] | TravelPlanUncheckedCreateWithoutHostInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutHostInput | TravelPlanCreateOrConnectWithoutHostInput[]
    createMany?: TravelPlanCreateManyHostInputEnvelope
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
  }

  export type TravelPlanCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput> | TravelPlanCreateWithoutParticipantsInput[] | TravelPlanUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutParticipantsInput | TravelPlanCreateOrConnectWithoutParticipantsInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutApplicantInput = {
    create?: XOR<JoinRequestCreateWithoutApplicantInput, JoinRequestUncheckedCreateWithoutApplicantInput> | JoinRequestCreateWithoutApplicantInput[] | JoinRequestUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutApplicantInput | JoinRequestCreateOrConnectWithoutApplicantInput[]
    createMany?: JoinRequestCreateManyApplicantInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TravelPlanUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<TravelPlanCreateWithoutHostInput, TravelPlanUncheckedCreateWithoutHostInput> | TravelPlanCreateWithoutHostInput[] | TravelPlanUncheckedCreateWithoutHostInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutHostInput | TravelPlanCreateOrConnectWithoutHostInput[]
    createMany?: TravelPlanCreateManyHostInputEnvelope
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
  }

  export type TravelPlanUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput> | TravelPlanCreateWithoutParticipantsInput[] | TravelPlanUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutParticipantsInput | TravelPlanCreateOrConnectWithoutParticipantsInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<JoinRequestCreateWithoutApplicantInput, JoinRequestUncheckedCreateWithoutApplicantInput> | JoinRequestCreateWithoutApplicantInput[] | JoinRequestUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutApplicantInput | JoinRequestCreateOrConnectWithoutApplicantInput[]
    createMany?: JoinRequestCreateManyApplicantInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type UserUpdatetravelInterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatevisitedCountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TravelPlanUpdateManyWithoutHostNestedInput = {
    create?: XOR<TravelPlanCreateWithoutHostInput, TravelPlanUncheckedCreateWithoutHostInput> | TravelPlanCreateWithoutHostInput[] | TravelPlanUncheckedCreateWithoutHostInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutHostInput | TravelPlanCreateOrConnectWithoutHostInput[]
    upsert?: TravelPlanUpsertWithWhereUniqueWithoutHostInput | TravelPlanUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: TravelPlanCreateManyHostInputEnvelope
    set?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    disconnect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    delete?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    update?: TravelPlanUpdateWithWhereUniqueWithoutHostInput | TravelPlanUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: TravelPlanUpdateManyWithWhereWithoutHostInput | TravelPlanUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
  }

  export type TravelPlanUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput> | TravelPlanCreateWithoutParticipantsInput[] | TravelPlanUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutParticipantsInput | TravelPlanCreateOrConnectWithoutParticipantsInput[]
    upsert?: TravelPlanUpsertWithWhereUniqueWithoutParticipantsInput | TravelPlanUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    disconnect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    delete?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    update?: TravelPlanUpdateWithWhereUniqueWithoutParticipantsInput | TravelPlanUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: TravelPlanUpdateManyWithWhereWithoutParticipantsInput | TravelPlanUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<JoinRequestCreateWithoutApplicantInput, JoinRequestUncheckedCreateWithoutApplicantInput> | JoinRequestCreateWithoutApplicantInput[] | JoinRequestUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutApplicantInput | JoinRequestCreateOrConnectWithoutApplicantInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutApplicantInput | JoinRequestUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: JoinRequestCreateManyApplicantInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutApplicantInput | JoinRequestUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutApplicantInput | JoinRequestUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TravelPlanUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<TravelPlanCreateWithoutHostInput, TravelPlanUncheckedCreateWithoutHostInput> | TravelPlanCreateWithoutHostInput[] | TravelPlanUncheckedCreateWithoutHostInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutHostInput | TravelPlanCreateOrConnectWithoutHostInput[]
    upsert?: TravelPlanUpsertWithWhereUniqueWithoutHostInput | TravelPlanUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: TravelPlanCreateManyHostInputEnvelope
    set?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    disconnect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    delete?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    update?: TravelPlanUpdateWithWhereUniqueWithoutHostInput | TravelPlanUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: TravelPlanUpdateManyWithWhereWithoutHostInput | TravelPlanUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
  }

  export type TravelPlanUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput> | TravelPlanCreateWithoutParticipantsInput[] | TravelPlanUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: TravelPlanCreateOrConnectWithoutParticipantsInput | TravelPlanCreateOrConnectWithoutParticipantsInput[]
    upsert?: TravelPlanUpsertWithWhereUniqueWithoutParticipantsInput | TravelPlanUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    disconnect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    delete?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    connect?: TravelPlanWhereUniqueInput | TravelPlanWhereUniqueInput[]
    update?: TravelPlanUpdateWithWhereUniqueWithoutParticipantsInput | TravelPlanUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: TravelPlanUpdateManyWithWhereWithoutParticipantsInput | TravelPlanUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<JoinRequestCreateWithoutApplicantInput, JoinRequestUncheckedCreateWithoutApplicantInput> | JoinRequestCreateWithoutApplicantInput[] | JoinRequestUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutApplicantInput | JoinRequestCreateOrConnectWithoutApplicantInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutApplicantInput | JoinRequestUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: JoinRequestCreateManyApplicantInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutApplicantInput | JoinRequestUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutApplicantInput | JoinRequestUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TravelPlanCreateWithoutJoinRequestsInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostedPlansInput
    participants?: UserCreateNestedManyWithoutJoinedPlansInput
    reviews?: ReviewCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutJoinedPlansInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutJoinRequestsInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
  }

  export type UserCreateWithoutJoinRequestsInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanUncheckedCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanUncheckedCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
  }

  export type TravelPlanUpsertWithoutJoinRequestsInput = {
    update: XOR<TravelPlanUpdateWithoutJoinRequestsInput, TravelPlanUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<TravelPlanCreateWithoutJoinRequestsInput, TravelPlanUncheckedCreateWithoutJoinRequestsInput>
    where?: TravelPlanWhereInput
  }

  export type TravelPlanUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: TravelPlanWhereInput
    data: XOR<TravelPlanUpdateWithoutJoinRequestsInput, TravelPlanUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type TravelPlanUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedPlansNestedInput
    participants?: UserUpdateManyWithoutJoinedPlansNestedInput
    reviews?: ReviewUpdateManyWithoutTravelPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutJoinedPlansNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTravelPlanNestedInput
  }

  export type UserUpsertWithoutJoinRequestsInput = {
    update: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUncheckedUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUncheckedUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedPlans?: TravelPlanCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostedPlans?: TravelPlanUncheckedCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanUncheckedCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedPlans?: TravelPlanUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedPlans?: TravelPlanUncheckedUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUncheckedUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanCreateNestedManyWithoutParticipantsInput
    joinRequests?: JoinRequestCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanUncheckedCreateNestedManyWithoutHostInput
    joinedPlans?: TravelPlanUncheckedCreateNestedManyWithoutParticipantsInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TravelPlanCreateWithoutReviewsInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostedPlansInput
    participants?: UserCreateNestedManyWithoutJoinedPlansInput
    joinRequests?: JoinRequestCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutJoinedPlansInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutReviewsInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUpdateManyWithoutParticipantsNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUncheckedUpdateManyWithoutHostNestedInput
    joinedPlans?: TravelPlanUncheckedUpdateManyWithoutParticipantsNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type TravelPlanUpsertWithoutReviewsInput = {
    update: XOR<TravelPlanUpdateWithoutReviewsInput, TravelPlanUncheckedUpdateWithoutReviewsInput>
    create: XOR<TravelPlanCreateWithoutReviewsInput, TravelPlanUncheckedCreateWithoutReviewsInput>
    where?: TravelPlanWhereInput
  }

  export type TravelPlanUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TravelPlanWhereInput
    data: XOR<TravelPlanUpdateWithoutReviewsInput, TravelPlanUncheckedUpdateWithoutReviewsInput>
  }

  export type TravelPlanUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedPlansNestedInput
    participants?: UserUpdateManyWithoutJoinedPlansNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutJoinedPlansNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutHostedPlansInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    joinedPlans?: TravelPlanCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateWithoutHostedPlansInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    joinedPlans?: TravelPlanUncheckedCreateNestedManyWithoutParticipantsInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserCreateOrConnectWithoutHostedPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostedPlansInput, UserUncheckedCreateWithoutHostedPlansInput>
  }

  export type UserCreateWithoutJoinedPlansInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanCreateNestedManyWithoutHostInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateWithoutJoinedPlansInput = {
    id?: string
    username?: string | null
    email: string
    password: string
    fullName: string
    profileImage?: string | null
    bio?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    currentLocation?: string | null
    travelInterests?: UserCreatetravelInterestsInput | string[]
    visitedCountries?: UserCreatevisitedCountriesInput | string[]
    userStatus?: $Enums.Status
    role?: $Enums.Role
    verified?: boolean
    contactNumber?: string | null
    rating?: number
    subscriptionActive?: boolean
    subscriptionExpiresAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    hostedPlans?: TravelPlanUncheckedCreateNestedManyWithoutHostInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserCreateOrConnectWithoutJoinedPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinedPlansInput, UserUncheckedCreateWithoutJoinedPlansInput>
  }

  export type JoinRequestCreateWithoutPlanInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    applicant: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutPlanInput = {
    id?: string
    applicantId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type JoinRequestCreateOrConnectWithoutPlanInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutPlanInput, JoinRequestUncheckedCreateWithoutPlanInput>
  }

  export type JoinRequestCreateManyPlanInputEnvelope = {
    data: JoinRequestCreateManyPlanInput | JoinRequestCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTravelPlanInput = {
    id?: string
    rating?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTravelPlanInput = {
    id?: string
    rating?: number
    comment: string
    reviewerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTravelPlanInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTravelPlanInput, ReviewUncheckedCreateWithoutTravelPlanInput>
  }

  export type ReviewCreateManyTravelPlanInputEnvelope = {
    data: ReviewCreateManyTravelPlanInput | ReviewCreateManyTravelPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHostedPlansInput = {
    update: XOR<UserUpdateWithoutHostedPlansInput, UserUncheckedUpdateWithoutHostedPlansInput>
    create: XOR<UserCreateWithoutHostedPlansInput, UserUncheckedCreateWithoutHostedPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostedPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostedPlansInput, UserUncheckedUpdateWithoutHostedPlansInput>
  }

  export type UserUpdateWithoutHostedPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    joinedPlans?: TravelPlanUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateWithoutHostedPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    joinedPlans?: TravelPlanUncheckedUpdateManyWithoutParticipantsNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutJoinedPlansInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutJoinedPlansInput, UserUncheckedUpdateWithoutJoinedPlansInput>
    create: XOR<UserCreateWithoutJoinedPlansInput, UserUncheckedCreateWithoutJoinedPlansInput>
  }

  export type UserUpdateWithWhereUniqueWithoutJoinedPlansInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutJoinedPlansInput, UserUncheckedUpdateWithoutJoinedPlansInput>
  }

  export type UserUpdateManyWithWhereWithoutJoinedPlansInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutJoinedPlansInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    currentLocation?: StringNullableFilter<"User"> | string | null
    travelInterests?: StringNullableListFilter<"User">
    visitedCountries?: StringNullableListFilter<"User">
    userStatus?: EnumStatusFilter<"User"> | $Enums.Status
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verified?: BoolFilter<"User"> | boolean
    contactNumber?: StringNullableFilter<"User"> | string | null
    rating?: IntFilter<"User"> | number
    subscriptionActive?: BoolFilter<"User"> | boolean
    subscriptionExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutPlanInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutPlanInput, JoinRequestUncheckedUpdateWithoutPlanInput>
    create: XOR<JoinRequestCreateWithoutPlanInput, JoinRequestUncheckedCreateWithoutPlanInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutPlanInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutPlanInput, JoinRequestUncheckedUpdateWithoutPlanInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutPlanInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutPlanInput>
  }

  export type JoinRequestScalarWhereInput = {
    AND?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    OR?: JoinRequestScalarWhereInput[]
    NOT?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    id?: StringFilter<"JoinRequest"> | string
    planId?: StringFilter<"JoinRequest"> | string
    applicantId?: StringFilter<"JoinRequest"> | string
    status?: EnumRequestStatusFilter<"JoinRequest"> | $Enums.RequestStatus
    message?: StringNullableFilter<"JoinRequest"> | string | null
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutTravelPlanInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTravelPlanInput, ReviewUncheckedUpdateWithoutTravelPlanInput>
    create: XOR<ReviewCreateWithoutTravelPlanInput, ReviewUncheckedCreateWithoutTravelPlanInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTravelPlanInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTravelPlanInput, ReviewUncheckedUpdateWithoutTravelPlanInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTravelPlanInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTravelPlanInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    travelPlanId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    paymentGateway: string
    transactionId?: string | null
    paymentType: string
    status: string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    paymentGateway: string
    transactionId?: string | null
    paymentType: string
    status: string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TravelPlanCreateWithoutHostInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserCreateNestedManyWithoutJoinedPlansInput
    joinRequests?: JoinRequestCreateNestedManyWithoutPlanInput
    reviews?: ReviewCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutHostInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: UserUncheckedCreateNestedManyWithoutJoinedPlansInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutPlanInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutHostInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutHostInput, TravelPlanUncheckedCreateWithoutHostInput>
  }

  export type TravelPlanCreateManyHostInputEnvelope = {
    data: TravelPlanCreateManyHostInput | TravelPlanCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type TravelPlanCreateWithoutParticipantsInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostedPlansInput
    joinRequests?: JoinRequestCreateNestedManyWithoutPlanInput
    reviews?: ReviewCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    hostId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutPlanInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTravelPlanInput
  }

  export type TravelPlanCreateOrConnectWithoutParticipantsInput = {
    where: TravelPlanWhereUniqueInput
    create: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput>
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    travelPlan: TravelPlanCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    rating?: number
    comment: string
    travelPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type JoinRequestCreateWithoutApplicantInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
    plan: TravelPlanCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutApplicantInput = {
    id?: string
    planId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type JoinRequestCreateOrConnectWithoutApplicantInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutApplicantInput, JoinRequestUncheckedCreateWithoutApplicantInput>
  }

  export type JoinRequestCreateManyApplicantInputEnvelope = {
    data: JoinRequestCreateManyApplicantInput | JoinRequestCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentGateway?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    paymentType?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type TravelPlanUpsertWithWhereUniqueWithoutHostInput = {
    where: TravelPlanWhereUniqueInput
    update: XOR<TravelPlanUpdateWithoutHostInput, TravelPlanUncheckedUpdateWithoutHostInput>
    create: XOR<TravelPlanCreateWithoutHostInput, TravelPlanUncheckedCreateWithoutHostInput>
  }

  export type TravelPlanUpdateWithWhereUniqueWithoutHostInput = {
    where: TravelPlanWhereUniqueInput
    data: XOR<TravelPlanUpdateWithoutHostInput, TravelPlanUncheckedUpdateWithoutHostInput>
  }

  export type TravelPlanUpdateManyWithWhereWithoutHostInput = {
    where: TravelPlanScalarWhereInput
    data: XOR<TravelPlanUpdateManyMutationInput, TravelPlanUncheckedUpdateManyWithoutHostInput>
  }

  export type TravelPlanScalarWhereInput = {
    AND?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
    OR?: TravelPlanScalarWhereInput[]
    NOT?: TravelPlanScalarWhereInput | TravelPlanScalarWhereInput[]
    id?: StringFilter<"TravelPlan"> | string
    title?: StringFilter<"TravelPlan"> | string
    photoUrl?: StringNullableFilter<"TravelPlan"> | string | null
    destination?: StringFilter<"TravelPlan"> | string
    startDate?: DateTimeFilter<"TravelPlan"> | Date | string
    endDate?: DateTimeFilter<"TravelPlan"> | Date | string
    budget?: IntFilter<"TravelPlan"> | number
    travelType?: StringNullableFilter<"TravelPlan"> | string | null
    description?: StringFilter<"TravelPlan"> | string
    ageLimit?: IntNullableFilter<"TravelPlan"> | number | null
    members?: IntNullableFilter<"TravelPlan"> | number | null
    stay?: StringNullableFilter<"TravelPlan"> | string | null
    accommodationType?: StringNullableFilter<"TravelPlan"> | string | null
    transportType?: StringNullableFilter<"TravelPlan"> | string | null
    mealPlan?: StringNullableFilter<"TravelPlan"> | string | null
    requiredDocuments?: StringNullableFilter<"TravelPlan"> | string | null
    included?: StringNullableFilter<"TravelPlan"> | string | null
    excluded?: StringNullableFilter<"TravelPlan"> | string | null
    meetingPoint?: StringNullableFilter<"TravelPlan"> | string | null
    emergencyContact?: StringNullableFilter<"TravelPlan"> | string | null
    planStatus?: EnumPlanStatusFilter<"TravelPlan"> | $Enums.PlanStatus
    hostId?: StringFilter<"TravelPlan"> | string
    createdAt?: DateTimeFilter<"TravelPlan"> | Date | string
    updatedAt?: DateTimeFilter<"TravelPlan"> | Date | string
  }

  export type TravelPlanUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: TravelPlanWhereUniqueInput
    update: XOR<TravelPlanUpdateWithoutParticipantsInput, TravelPlanUncheckedUpdateWithoutParticipantsInput>
    create: XOR<TravelPlanCreateWithoutParticipantsInput, TravelPlanUncheckedCreateWithoutParticipantsInput>
  }

  export type TravelPlanUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: TravelPlanWhereUniqueInput
    data: XOR<TravelPlanUpdateWithoutParticipantsInput, TravelPlanUncheckedUpdateWithoutParticipantsInput>
  }

  export type TravelPlanUpdateManyWithWhereWithoutParticipantsInput = {
    where: TravelPlanScalarWhereInput
    data: XOR<TravelPlanUpdateManyMutationInput, TravelPlanUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutApplicantInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutApplicantInput, JoinRequestUncheckedUpdateWithoutApplicantInput>
    create: XOR<JoinRequestCreateWithoutApplicantInput, JoinRequestUncheckedCreateWithoutApplicantInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutApplicantInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutApplicantInput, JoinRequestUncheckedUpdateWithoutApplicantInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutApplicantInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutApplicantInput>
  }

  export type JoinRequestCreateManyPlanInput = {
    id?: string
    applicantId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyTravelPlanInput = {
    id?: string
    rating?: number
    comment: string
    reviewerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutJoinedPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUpdateManyWithoutHostNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinedPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    hostedPlans?: TravelPlanUncheckedUpdateManyWithoutHostNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateManyWithoutJoinedPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    travelInterests?: UserUpdatetravelInterestsInput | string[]
    visitedCountries?: UserUpdatevisitedCountriesInput | string[]
    userStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verified?: BoolFieldUpdateOperationsInput | boolean
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    subscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    subscriptionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutTravelPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTravelPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTravelPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    amount: number
    paymentGateway: string
    transactionId?: string | null
    paymentType: string
    status: string
    createdAt?: Date | string
  }

  export type TravelPlanCreateManyHostInput = {
    id?: string
    title: string
    photoUrl?: string | null
    destination: string
    startDate: Date | string
    endDate: Date | string
    budget?: number
    travelType?: string | null
    description: string
    ageLimit?: number | null
    members?: number | null
    stay?: string | null
    accommodationType?: string | null
    transportType?: string | null
    mealPlan?: string | null
    requiredDocuments?: string | null
    included?: string | null
    excluded?: string | null
    meetingPoint?: string | null
    emergencyContact?: string | null
    planStatus?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    rating?: number
    comment: string
    travelPlanId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JoinRequestCreateManyApplicantInput = {
    id?: string
    planId: string
    status?: $Enums.RequestStatus
    message?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentGateway?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentGateway?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentGateway?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUpdateManyWithoutJoinedPlansNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUpdateManyWithoutTravelPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: UserUncheckedUpdateManyWithoutJoinedPlansNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTravelPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelPlanUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedPlansNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUpdateManyWithoutTravelPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutPlanNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTravelPlanNestedInput
  }

  export type TravelPlanUncheckedUpdateManyWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: IntFieldUpdateOperationsInput | number
    travelType?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    ageLimit?: NullableIntFieldUpdateOperationsInput | number | null
    members?: NullableIntFieldUpdateOperationsInput | number | null
    stay?: NullableStringFieldUpdateOperationsInput | string | null
    accommodationType?: NullableStringFieldUpdateOperationsInput | string | null
    transportType?: NullableStringFieldUpdateOperationsInput | string | null
    mealPlan?: NullableStringFieldUpdateOperationsInput | string | null
    requiredDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    included?: NullableStringFieldUpdateOperationsInput | string | null
    excluded?: NullableStringFieldUpdateOperationsInput | string | null
    meetingPoint?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelPlan?: TravelPlanUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    travelPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    travelPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: TravelPlanUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}