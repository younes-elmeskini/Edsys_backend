
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Recuired
 * 
 */
export type Recuired = $Result.DefaultSelection<Prisma.$RecuiredPayload>
/**
 * Model futher
 * 
 */
export type futher = $Result.DefaultSelection<Prisma.$futherPayload>
/**
 * Model self_employed
 * 
 */
export type self_employed = $Result.DefaultSelection<Prisma.$self_employedPayload>
/**
 * Model searching
 * 
 */
export type searching = $Result.DefaultSelection<Prisma.$searchingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VISITOR: 'VISITOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  RECRUITED: 'RECRUITED',
  FARTHER: 'FARTHER',
  EMPLOYED: 'EMPLOYED',
  SEARCHING: 'SEARCHING'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recuired`: Exposes CRUD operations for the **Recuired** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recuireds
    * const recuireds = await prisma.recuired.findMany()
    * ```
    */
  get recuired(): Prisma.RecuiredDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.futher`: Exposes CRUD operations for the **futher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Futhers
    * const futhers = await prisma.futher.findMany()
    * ```
    */
  get futher(): Prisma.futherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.self_employed`: Exposes CRUD operations for the **self_employed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Self_employeds
    * const self_employeds = await prisma.self_employed.findMany()
    * ```
    */
  get self_employed(): Prisma.self_employedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searching`: Exposes CRUD operations for the **searching** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Searchings
    * const searchings = await prisma.searching.findMany()
    * ```
    */
  get searching(): Prisma.searchingDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Client: 'Client',
    Recuired: 'Recuired',
    futher: 'futher',
    self_employed: 'self_employed',
    searching: 'searching'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "recuired" | "futher" | "self_employed" | "searching"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Recuired: {
        payload: Prisma.$RecuiredPayload<ExtArgs>
        fields: Prisma.RecuiredFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecuiredFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecuiredFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>
          }
          findFirst: {
            args: Prisma.RecuiredFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecuiredFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>
          }
          findMany: {
            args: Prisma.RecuiredFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>[]
          }
          create: {
            args: Prisma.RecuiredCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>
          }
          createMany: {
            args: Prisma.RecuiredCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecuiredCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>[]
          }
          delete: {
            args: Prisma.RecuiredDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>
          }
          update: {
            args: Prisma.RecuiredUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>
          }
          deleteMany: {
            args: Prisma.RecuiredDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecuiredUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecuiredUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>[]
          }
          upsert: {
            args: Prisma.RecuiredUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecuiredPayload>
          }
          aggregate: {
            args: Prisma.RecuiredAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecuired>
          }
          groupBy: {
            args: Prisma.RecuiredGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecuiredGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecuiredCountArgs<ExtArgs>
            result: $Utils.Optional<RecuiredCountAggregateOutputType> | number
          }
        }
      }
      futher: {
        payload: Prisma.$futherPayload<ExtArgs>
        fields: Prisma.futherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.futherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.futherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>
          }
          findFirst: {
            args: Prisma.futherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.futherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>
          }
          findMany: {
            args: Prisma.futherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>[]
          }
          create: {
            args: Prisma.futherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>
          }
          createMany: {
            args: Prisma.futherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.futherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>[]
          }
          delete: {
            args: Prisma.futherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>
          }
          update: {
            args: Prisma.futherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>
          }
          deleteMany: {
            args: Prisma.futherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.futherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.futherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>[]
          }
          upsert: {
            args: Prisma.futherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$futherPayload>
          }
          aggregate: {
            args: Prisma.FutherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuther>
          }
          groupBy: {
            args: Prisma.futherGroupByArgs<ExtArgs>
            result: $Utils.Optional<FutherGroupByOutputType>[]
          }
          count: {
            args: Prisma.futherCountArgs<ExtArgs>
            result: $Utils.Optional<FutherCountAggregateOutputType> | number
          }
        }
      }
      self_employed: {
        payload: Prisma.$self_employedPayload<ExtArgs>
        fields: Prisma.self_employedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.self_employedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.self_employedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>
          }
          findFirst: {
            args: Prisma.self_employedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.self_employedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>
          }
          findMany: {
            args: Prisma.self_employedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>[]
          }
          create: {
            args: Prisma.self_employedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>
          }
          createMany: {
            args: Prisma.self_employedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.self_employedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>[]
          }
          delete: {
            args: Prisma.self_employedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>
          }
          update: {
            args: Prisma.self_employedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>
          }
          deleteMany: {
            args: Prisma.self_employedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.self_employedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.self_employedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>[]
          }
          upsert: {
            args: Prisma.self_employedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$self_employedPayload>
          }
          aggregate: {
            args: Prisma.Self_employedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSelf_employed>
          }
          groupBy: {
            args: Prisma.self_employedGroupByArgs<ExtArgs>
            result: $Utils.Optional<Self_employedGroupByOutputType>[]
          }
          count: {
            args: Prisma.self_employedCountArgs<ExtArgs>
            result: $Utils.Optional<Self_employedCountAggregateOutputType> | number
          }
        }
      }
      searching: {
        payload: Prisma.$searchingPayload<ExtArgs>
        fields: Prisma.searchingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.searchingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.searchingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>
          }
          findFirst: {
            args: Prisma.searchingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.searchingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>
          }
          findMany: {
            args: Prisma.searchingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>[]
          }
          create: {
            args: Prisma.searchingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>
          }
          createMany: {
            args: Prisma.searchingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.searchingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>[]
          }
          delete: {
            args: Prisma.searchingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>
          }
          update: {
            args: Prisma.searchingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>
          }
          deleteMany: {
            args: Prisma.searchingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.searchingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.searchingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>[]
          }
          upsert: {
            args: Prisma.searchingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$searchingPayload>
          }
          aggregate: {
            args: Prisma.SearchingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearching>
          }
          groupBy: {
            args: Prisma.searchingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchingGroupByOutputType>[]
          }
          count: {
            args: Prisma.searchingCountArgs<ExtArgs>
            result: $Utils.Optional<SearchingCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    recuired?: RecuiredOmit
    futher?: futherOmit
    self_employed?: self_employedOmit
    searching?: searchingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    userName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    userName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    userName: number
    email: number
    password: number
    role: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    userName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "email" | "password" | "role" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      userName: string | null
      email: string | null
      password: string | null
      role: $Enums.Role
      avatar: string | null
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    readonly userId: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly avatar: FieldRef<"User", 'String'>
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
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    clientId: string | null
    fistName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    education: string | null
    Status: $Enums.Status | null
    academicYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    clientId: string | null
    fistName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    education: string | null
    Status: $Enums.Status | null
    academicYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    clientId: number
    fistName: number
    lastName: number
    phone: number
    email: number
    education: number
    Status: number
    academicYear: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    clientId?: true
    fistName?: true
    lastName?: true
    phone?: true
    email?: true
    education?: true
    Status?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    clientId?: true
    fistName?: true
    lastName?: true
    phone?: true
    email?: true
    education?: true
    Status?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    clientId?: true
    fistName?: true
    lastName?: true
    phone?: true
    email?: true
    education?: true
    Status?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    clientId: string
    fistName: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    education: string | null
    Status: $Enums.Status
    academicYear: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    fistName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    education?: boolean
    Status?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    fistName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    education?: boolean
    Status?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    fistName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    education?: boolean
    Status?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    clientId?: boolean
    fistName?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    education?: boolean
    Status?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clientId" | "fistName" | "lastName" | "phone" | "email" | "education" | "Status" | "academicYear" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      clientId: string
      fistName: string | null
      lastName: string | null
      phone: string | null
      email: string | null
      education: string | null
      Status: $Enums.Status
      academicYear: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `clientId`
     * const clientWithClientIdOnly = await prisma.client.findMany({ select: { clientId: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `clientId`
     * const clientWithClientIdOnly = await prisma.client.createManyAndReturn({
     *   select: { clientId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `clientId`
     * const clientWithClientIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { clientId: true },
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly clientId: FieldRef<"Client", 'String'>
    readonly fistName: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly education: FieldRef<"Client", 'String'>
    readonly Status: FieldRef<"Client", 'Status'>
    readonly academicYear: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
  }


  /**
   * Model Recuired
   */

  export type AggregateRecuired = {
    _count: RecuiredCountAggregateOutputType | null
    _min: RecuiredMinAggregateOutputType | null
    _max: RecuiredMaxAggregateOutputType | null
  }

  export type RecuiredMinAggregateOutputType = {
    recuiredId: string | null
    title: string | null
    campany: string | null
    position: string | null
    graduationYear: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecuiredMaxAggregateOutputType = {
    recuiredId: string | null
    title: string | null
    campany: string | null
    position: string | null
    graduationYear: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecuiredCountAggregateOutputType = {
    recuiredId: number
    title: number
    campany: number
    position: number
    graduationYear: number
    city: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecuiredMinAggregateInputType = {
    recuiredId?: true
    title?: true
    campany?: true
    position?: true
    graduationYear?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecuiredMaxAggregateInputType = {
    recuiredId?: true
    title?: true
    campany?: true
    position?: true
    graduationYear?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecuiredCountAggregateInputType = {
    recuiredId?: true
    title?: true
    campany?: true
    position?: true
    graduationYear?: true
    city?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecuiredAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recuired to aggregate.
     */
    where?: RecuiredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recuireds to fetch.
     */
    orderBy?: RecuiredOrderByWithRelationInput | RecuiredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecuiredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recuireds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recuireds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recuireds
    **/
    _count?: true | RecuiredCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecuiredMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecuiredMaxAggregateInputType
  }

  export type GetRecuiredAggregateType<T extends RecuiredAggregateArgs> = {
        [P in keyof T & keyof AggregateRecuired]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecuired[P]>
      : GetScalarType<T[P], AggregateRecuired[P]>
  }




  export type RecuiredGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecuiredWhereInput
    orderBy?: RecuiredOrderByWithAggregationInput | RecuiredOrderByWithAggregationInput[]
    by: RecuiredScalarFieldEnum[] | RecuiredScalarFieldEnum
    having?: RecuiredScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecuiredCountAggregateInputType | true
    _min?: RecuiredMinAggregateInputType
    _max?: RecuiredMaxAggregateInputType
  }

  export type RecuiredGroupByOutputType = {
    recuiredId: string
    title: string | null
    campany: string | null
    position: string | null
    graduationYear: string | null
    city: string | null
    createdAt: Date
    updatedAt: Date
    _count: RecuiredCountAggregateOutputType | null
    _min: RecuiredMinAggregateOutputType | null
    _max: RecuiredMaxAggregateOutputType | null
  }

  type GetRecuiredGroupByPayload<T extends RecuiredGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecuiredGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecuiredGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecuiredGroupByOutputType[P]>
            : GetScalarType<T[P], RecuiredGroupByOutputType[P]>
        }
      >
    >


  export type RecuiredSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recuiredId?: boolean
    title?: boolean
    campany?: boolean
    position?: boolean
    graduationYear?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recuired"]>

  export type RecuiredSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recuiredId?: boolean
    title?: boolean
    campany?: boolean
    position?: boolean
    graduationYear?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recuired"]>

  export type RecuiredSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recuiredId?: boolean
    title?: boolean
    campany?: boolean
    position?: boolean
    graduationYear?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recuired"]>

  export type RecuiredSelectScalar = {
    recuiredId?: boolean
    title?: boolean
    campany?: boolean
    position?: boolean
    graduationYear?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecuiredOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recuiredId" | "title" | "campany" | "position" | "graduationYear" | "city" | "createdAt" | "updatedAt", ExtArgs["result"]["recuired"]>

  export type $RecuiredPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recuired"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      recuiredId: string
      title: string | null
      campany: string | null
      position: string | null
      graduationYear: string | null
      city: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recuired"]>
    composites: {}
  }

  type RecuiredGetPayload<S extends boolean | null | undefined | RecuiredDefaultArgs> = $Result.GetResult<Prisma.$RecuiredPayload, S>

  type RecuiredCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecuiredFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecuiredCountAggregateInputType | true
    }

  export interface RecuiredDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recuired'], meta: { name: 'Recuired' } }
    /**
     * Find zero or one Recuired that matches the filter.
     * @param {RecuiredFindUniqueArgs} args - Arguments to find a Recuired
     * @example
     * // Get one Recuired
     * const recuired = await prisma.recuired.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecuiredFindUniqueArgs>(args: SelectSubset<T, RecuiredFindUniqueArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recuired that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecuiredFindUniqueOrThrowArgs} args - Arguments to find a Recuired
     * @example
     * // Get one Recuired
     * const recuired = await prisma.recuired.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecuiredFindUniqueOrThrowArgs>(args: SelectSubset<T, RecuiredFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recuired that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecuiredFindFirstArgs} args - Arguments to find a Recuired
     * @example
     * // Get one Recuired
     * const recuired = await prisma.recuired.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecuiredFindFirstArgs>(args?: SelectSubset<T, RecuiredFindFirstArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recuired that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecuiredFindFirstOrThrowArgs} args - Arguments to find a Recuired
     * @example
     * // Get one Recuired
     * const recuired = await prisma.recuired.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecuiredFindFirstOrThrowArgs>(args?: SelectSubset<T, RecuiredFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recuireds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecuiredFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recuireds
     * const recuireds = await prisma.recuired.findMany()
     * 
     * // Get first 10 Recuireds
     * const recuireds = await prisma.recuired.findMany({ take: 10 })
     * 
     * // Only select the `recuiredId`
     * const recuiredWithRecuiredIdOnly = await prisma.recuired.findMany({ select: { recuiredId: true } })
     * 
     */
    findMany<T extends RecuiredFindManyArgs>(args?: SelectSubset<T, RecuiredFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recuired.
     * @param {RecuiredCreateArgs} args - Arguments to create a Recuired.
     * @example
     * // Create one Recuired
     * const Recuired = await prisma.recuired.create({
     *   data: {
     *     // ... data to create a Recuired
     *   }
     * })
     * 
     */
    create<T extends RecuiredCreateArgs>(args: SelectSubset<T, RecuiredCreateArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recuireds.
     * @param {RecuiredCreateManyArgs} args - Arguments to create many Recuireds.
     * @example
     * // Create many Recuireds
     * const recuired = await prisma.recuired.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecuiredCreateManyArgs>(args?: SelectSubset<T, RecuiredCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recuireds and returns the data saved in the database.
     * @param {RecuiredCreateManyAndReturnArgs} args - Arguments to create many Recuireds.
     * @example
     * // Create many Recuireds
     * const recuired = await prisma.recuired.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recuireds and only return the `recuiredId`
     * const recuiredWithRecuiredIdOnly = await prisma.recuired.createManyAndReturn({
     *   select: { recuiredId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecuiredCreateManyAndReturnArgs>(args?: SelectSubset<T, RecuiredCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recuired.
     * @param {RecuiredDeleteArgs} args - Arguments to delete one Recuired.
     * @example
     * // Delete one Recuired
     * const Recuired = await prisma.recuired.delete({
     *   where: {
     *     // ... filter to delete one Recuired
     *   }
     * })
     * 
     */
    delete<T extends RecuiredDeleteArgs>(args: SelectSubset<T, RecuiredDeleteArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recuired.
     * @param {RecuiredUpdateArgs} args - Arguments to update one Recuired.
     * @example
     * // Update one Recuired
     * const recuired = await prisma.recuired.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecuiredUpdateArgs>(args: SelectSubset<T, RecuiredUpdateArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recuireds.
     * @param {RecuiredDeleteManyArgs} args - Arguments to filter Recuireds to delete.
     * @example
     * // Delete a few Recuireds
     * const { count } = await prisma.recuired.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecuiredDeleteManyArgs>(args?: SelectSubset<T, RecuiredDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recuireds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecuiredUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recuireds
     * const recuired = await prisma.recuired.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecuiredUpdateManyArgs>(args: SelectSubset<T, RecuiredUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recuireds and returns the data updated in the database.
     * @param {RecuiredUpdateManyAndReturnArgs} args - Arguments to update many Recuireds.
     * @example
     * // Update many Recuireds
     * const recuired = await prisma.recuired.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recuireds and only return the `recuiredId`
     * const recuiredWithRecuiredIdOnly = await prisma.recuired.updateManyAndReturn({
     *   select: { recuiredId: true },
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
    updateManyAndReturn<T extends RecuiredUpdateManyAndReturnArgs>(args: SelectSubset<T, RecuiredUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recuired.
     * @param {RecuiredUpsertArgs} args - Arguments to update or create a Recuired.
     * @example
     * // Update or create a Recuired
     * const recuired = await prisma.recuired.upsert({
     *   create: {
     *     // ... data to create a Recuired
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recuired we want to update
     *   }
     * })
     */
    upsert<T extends RecuiredUpsertArgs>(args: SelectSubset<T, RecuiredUpsertArgs<ExtArgs>>): Prisma__RecuiredClient<$Result.GetResult<Prisma.$RecuiredPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recuireds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecuiredCountArgs} args - Arguments to filter Recuireds to count.
     * @example
     * // Count the number of Recuireds
     * const count = await prisma.recuired.count({
     *   where: {
     *     // ... the filter for the Recuireds we want to count
     *   }
     * })
    **/
    count<T extends RecuiredCountArgs>(
      args?: Subset<T, RecuiredCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecuiredCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recuired.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecuiredAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecuiredAggregateArgs>(args: Subset<T, RecuiredAggregateArgs>): Prisma.PrismaPromise<GetRecuiredAggregateType<T>>

    /**
     * Group by Recuired.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecuiredGroupByArgs} args - Group by arguments.
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
      T extends RecuiredGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecuiredGroupByArgs['orderBy'] }
        : { orderBy?: RecuiredGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecuiredGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecuiredGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recuired model
   */
  readonly fields: RecuiredFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recuired.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecuiredClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Recuired model
   */
  interface RecuiredFieldRefs {
    readonly recuiredId: FieldRef<"Recuired", 'String'>
    readonly title: FieldRef<"Recuired", 'String'>
    readonly campany: FieldRef<"Recuired", 'String'>
    readonly position: FieldRef<"Recuired", 'String'>
    readonly graduationYear: FieldRef<"Recuired", 'String'>
    readonly city: FieldRef<"Recuired", 'String'>
    readonly createdAt: FieldRef<"Recuired", 'DateTime'>
    readonly updatedAt: FieldRef<"Recuired", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recuired findUnique
   */
  export type RecuiredFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * Filter, which Recuired to fetch.
     */
    where: RecuiredWhereUniqueInput
  }

  /**
   * Recuired findUniqueOrThrow
   */
  export type RecuiredFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * Filter, which Recuired to fetch.
     */
    where: RecuiredWhereUniqueInput
  }

  /**
   * Recuired findFirst
   */
  export type RecuiredFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * Filter, which Recuired to fetch.
     */
    where?: RecuiredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recuireds to fetch.
     */
    orderBy?: RecuiredOrderByWithRelationInput | RecuiredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recuireds.
     */
    cursor?: RecuiredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recuireds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recuireds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recuireds.
     */
    distinct?: RecuiredScalarFieldEnum | RecuiredScalarFieldEnum[]
  }

  /**
   * Recuired findFirstOrThrow
   */
  export type RecuiredFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * Filter, which Recuired to fetch.
     */
    where?: RecuiredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recuireds to fetch.
     */
    orderBy?: RecuiredOrderByWithRelationInput | RecuiredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recuireds.
     */
    cursor?: RecuiredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recuireds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recuireds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recuireds.
     */
    distinct?: RecuiredScalarFieldEnum | RecuiredScalarFieldEnum[]
  }

  /**
   * Recuired findMany
   */
  export type RecuiredFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * Filter, which Recuireds to fetch.
     */
    where?: RecuiredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recuireds to fetch.
     */
    orderBy?: RecuiredOrderByWithRelationInput | RecuiredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recuireds.
     */
    cursor?: RecuiredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recuireds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recuireds.
     */
    skip?: number
    distinct?: RecuiredScalarFieldEnum | RecuiredScalarFieldEnum[]
  }

  /**
   * Recuired create
   */
  export type RecuiredCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * The data needed to create a Recuired.
     */
    data: XOR<RecuiredCreateInput, RecuiredUncheckedCreateInput>
  }

  /**
   * Recuired createMany
   */
  export type RecuiredCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recuireds.
     */
    data: RecuiredCreateManyInput | RecuiredCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recuired createManyAndReturn
   */
  export type RecuiredCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * The data used to create many Recuireds.
     */
    data: RecuiredCreateManyInput | RecuiredCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recuired update
   */
  export type RecuiredUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * The data needed to update a Recuired.
     */
    data: XOR<RecuiredUpdateInput, RecuiredUncheckedUpdateInput>
    /**
     * Choose, which Recuired to update.
     */
    where: RecuiredWhereUniqueInput
  }

  /**
   * Recuired updateMany
   */
  export type RecuiredUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recuireds.
     */
    data: XOR<RecuiredUpdateManyMutationInput, RecuiredUncheckedUpdateManyInput>
    /**
     * Filter which Recuireds to update
     */
    where?: RecuiredWhereInput
    /**
     * Limit how many Recuireds to update.
     */
    limit?: number
  }

  /**
   * Recuired updateManyAndReturn
   */
  export type RecuiredUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * The data used to update Recuireds.
     */
    data: XOR<RecuiredUpdateManyMutationInput, RecuiredUncheckedUpdateManyInput>
    /**
     * Filter which Recuireds to update
     */
    where?: RecuiredWhereInput
    /**
     * Limit how many Recuireds to update.
     */
    limit?: number
  }

  /**
   * Recuired upsert
   */
  export type RecuiredUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * The filter to search for the Recuired to update in case it exists.
     */
    where: RecuiredWhereUniqueInput
    /**
     * In case the Recuired found by the `where` argument doesn't exist, create a new Recuired with this data.
     */
    create: XOR<RecuiredCreateInput, RecuiredUncheckedCreateInput>
    /**
     * In case the Recuired was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecuiredUpdateInput, RecuiredUncheckedUpdateInput>
  }

  /**
   * Recuired delete
   */
  export type RecuiredDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
    /**
     * Filter which Recuired to delete.
     */
    where: RecuiredWhereUniqueInput
  }

  /**
   * Recuired deleteMany
   */
  export type RecuiredDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recuireds to delete
     */
    where?: RecuiredWhereInput
    /**
     * Limit how many Recuireds to delete.
     */
    limit?: number
  }

  /**
   * Recuired without action
   */
  export type RecuiredDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recuired
     */
    select?: RecuiredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recuired
     */
    omit?: RecuiredOmit<ExtArgs> | null
  }


  /**
   * Model futher
   */

  export type AggregateFuther = {
    _count: FutherCountAggregateOutputType | null
    _min: FutherMinAggregateOutputType | null
    _max: FutherMaxAggregateOutputType | null
  }

  export type FutherMinAggregateOutputType = {
    futhId: string | null
    school: string | null
    education: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FutherMaxAggregateOutputType = {
    futhId: string | null
    school: string | null
    education: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FutherCountAggregateOutputType = {
    futhId: number
    school: number
    education: number
    city: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FutherMinAggregateInputType = {
    futhId?: true
    school?: true
    education?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FutherMaxAggregateInputType = {
    futhId?: true
    school?: true
    education?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FutherCountAggregateInputType = {
    futhId?: true
    school?: true
    education?: true
    city?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FutherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which futher to aggregate.
     */
    where?: futherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of futhers to fetch.
     */
    orderBy?: futherOrderByWithRelationInput | futherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: futherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` futhers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` futhers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned futhers
    **/
    _count?: true | FutherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FutherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FutherMaxAggregateInputType
  }

  export type GetFutherAggregateType<T extends FutherAggregateArgs> = {
        [P in keyof T & keyof AggregateFuther]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuther[P]>
      : GetScalarType<T[P], AggregateFuther[P]>
  }




  export type futherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: futherWhereInput
    orderBy?: futherOrderByWithAggregationInput | futherOrderByWithAggregationInput[]
    by: FutherScalarFieldEnum[] | FutherScalarFieldEnum
    having?: futherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FutherCountAggregateInputType | true
    _min?: FutherMinAggregateInputType
    _max?: FutherMaxAggregateInputType
  }

  export type FutherGroupByOutputType = {
    futhId: string
    school: string | null
    education: string | null
    city: string | null
    createdAt: Date
    updatedAt: Date
    _count: FutherCountAggregateOutputType | null
    _min: FutherMinAggregateOutputType | null
    _max: FutherMaxAggregateOutputType | null
  }

  type GetFutherGroupByPayload<T extends futherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FutherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FutherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FutherGroupByOutputType[P]>
            : GetScalarType<T[P], FutherGroupByOutputType[P]>
        }
      >
    >


  export type futherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    futhId?: boolean
    school?: boolean
    education?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["futher"]>

  export type futherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    futhId?: boolean
    school?: boolean
    education?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["futher"]>

  export type futherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    futhId?: boolean
    school?: boolean
    education?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["futher"]>

  export type futherSelectScalar = {
    futhId?: boolean
    school?: boolean
    education?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type futherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"futhId" | "school" | "education" | "city" | "createdAt" | "updatedAt", ExtArgs["result"]["futher"]>

  export type $futherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "futher"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      futhId: string
      school: string | null
      education: string | null
      city: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["futher"]>
    composites: {}
  }

  type futherGetPayload<S extends boolean | null | undefined | futherDefaultArgs> = $Result.GetResult<Prisma.$futherPayload, S>

  type futherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<futherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FutherCountAggregateInputType | true
    }

  export interface futherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['futher'], meta: { name: 'futher' } }
    /**
     * Find zero or one Futher that matches the filter.
     * @param {futherFindUniqueArgs} args - Arguments to find a Futher
     * @example
     * // Get one Futher
     * const futher = await prisma.futher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends futherFindUniqueArgs>(args: SelectSubset<T, futherFindUniqueArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Futher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {futherFindUniqueOrThrowArgs} args - Arguments to find a Futher
     * @example
     * // Get one Futher
     * const futher = await prisma.futher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends futherFindUniqueOrThrowArgs>(args: SelectSubset<T, futherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Futher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {futherFindFirstArgs} args - Arguments to find a Futher
     * @example
     * // Get one Futher
     * const futher = await prisma.futher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends futherFindFirstArgs>(args?: SelectSubset<T, futherFindFirstArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Futher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {futherFindFirstOrThrowArgs} args - Arguments to find a Futher
     * @example
     * // Get one Futher
     * const futher = await prisma.futher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends futherFindFirstOrThrowArgs>(args?: SelectSubset<T, futherFindFirstOrThrowArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Futhers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {futherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Futhers
     * const futhers = await prisma.futher.findMany()
     * 
     * // Get first 10 Futhers
     * const futhers = await prisma.futher.findMany({ take: 10 })
     * 
     * // Only select the `futhId`
     * const futherWithFuthIdOnly = await prisma.futher.findMany({ select: { futhId: true } })
     * 
     */
    findMany<T extends futherFindManyArgs>(args?: SelectSubset<T, futherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Futher.
     * @param {futherCreateArgs} args - Arguments to create a Futher.
     * @example
     * // Create one Futher
     * const Futher = await prisma.futher.create({
     *   data: {
     *     // ... data to create a Futher
     *   }
     * })
     * 
     */
    create<T extends futherCreateArgs>(args: SelectSubset<T, futherCreateArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Futhers.
     * @param {futherCreateManyArgs} args - Arguments to create many Futhers.
     * @example
     * // Create many Futhers
     * const futher = await prisma.futher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends futherCreateManyArgs>(args?: SelectSubset<T, futherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Futhers and returns the data saved in the database.
     * @param {futherCreateManyAndReturnArgs} args - Arguments to create many Futhers.
     * @example
     * // Create many Futhers
     * const futher = await prisma.futher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Futhers and only return the `futhId`
     * const futherWithFuthIdOnly = await prisma.futher.createManyAndReturn({
     *   select: { futhId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends futherCreateManyAndReturnArgs>(args?: SelectSubset<T, futherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Futher.
     * @param {futherDeleteArgs} args - Arguments to delete one Futher.
     * @example
     * // Delete one Futher
     * const Futher = await prisma.futher.delete({
     *   where: {
     *     // ... filter to delete one Futher
     *   }
     * })
     * 
     */
    delete<T extends futherDeleteArgs>(args: SelectSubset<T, futherDeleteArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Futher.
     * @param {futherUpdateArgs} args - Arguments to update one Futher.
     * @example
     * // Update one Futher
     * const futher = await prisma.futher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends futherUpdateArgs>(args: SelectSubset<T, futherUpdateArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Futhers.
     * @param {futherDeleteManyArgs} args - Arguments to filter Futhers to delete.
     * @example
     * // Delete a few Futhers
     * const { count } = await prisma.futher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends futherDeleteManyArgs>(args?: SelectSubset<T, futherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Futhers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {futherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Futhers
     * const futher = await prisma.futher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends futherUpdateManyArgs>(args: SelectSubset<T, futherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Futhers and returns the data updated in the database.
     * @param {futherUpdateManyAndReturnArgs} args - Arguments to update many Futhers.
     * @example
     * // Update many Futhers
     * const futher = await prisma.futher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Futhers and only return the `futhId`
     * const futherWithFuthIdOnly = await prisma.futher.updateManyAndReturn({
     *   select: { futhId: true },
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
    updateManyAndReturn<T extends futherUpdateManyAndReturnArgs>(args: SelectSubset<T, futherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Futher.
     * @param {futherUpsertArgs} args - Arguments to update or create a Futher.
     * @example
     * // Update or create a Futher
     * const futher = await prisma.futher.upsert({
     *   create: {
     *     // ... data to create a Futher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Futher we want to update
     *   }
     * })
     */
    upsert<T extends futherUpsertArgs>(args: SelectSubset<T, futherUpsertArgs<ExtArgs>>): Prisma__futherClient<$Result.GetResult<Prisma.$futherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Futhers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {futherCountArgs} args - Arguments to filter Futhers to count.
     * @example
     * // Count the number of Futhers
     * const count = await prisma.futher.count({
     *   where: {
     *     // ... the filter for the Futhers we want to count
     *   }
     * })
    **/
    count<T extends futherCountArgs>(
      args?: Subset<T, futherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FutherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Futher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FutherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FutherAggregateArgs>(args: Subset<T, FutherAggregateArgs>): Prisma.PrismaPromise<GetFutherAggregateType<T>>

    /**
     * Group by Futher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {futherGroupByArgs} args - Group by arguments.
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
      T extends futherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: futherGroupByArgs['orderBy'] }
        : { orderBy?: futherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, futherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFutherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the futher model
   */
  readonly fields: futherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for futher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__futherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the futher model
   */
  interface futherFieldRefs {
    readonly futhId: FieldRef<"futher", 'String'>
    readonly school: FieldRef<"futher", 'String'>
    readonly education: FieldRef<"futher", 'String'>
    readonly city: FieldRef<"futher", 'String'>
    readonly createdAt: FieldRef<"futher", 'DateTime'>
    readonly updatedAt: FieldRef<"futher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * futher findUnique
   */
  export type futherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * Filter, which futher to fetch.
     */
    where: futherWhereUniqueInput
  }

  /**
   * futher findUniqueOrThrow
   */
  export type futherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * Filter, which futher to fetch.
     */
    where: futherWhereUniqueInput
  }

  /**
   * futher findFirst
   */
  export type futherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * Filter, which futher to fetch.
     */
    where?: futherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of futhers to fetch.
     */
    orderBy?: futherOrderByWithRelationInput | futherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for futhers.
     */
    cursor?: futherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` futhers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` futhers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of futhers.
     */
    distinct?: FutherScalarFieldEnum | FutherScalarFieldEnum[]
  }

  /**
   * futher findFirstOrThrow
   */
  export type futherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * Filter, which futher to fetch.
     */
    where?: futherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of futhers to fetch.
     */
    orderBy?: futherOrderByWithRelationInput | futherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for futhers.
     */
    cursor?: futherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` futhers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` futhers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of futhers.
     */
    distinct?: FutherScalarFieldEnum | FutherScalarFieldEnum[]
  }

  /**
   * futher findMany
   */
  export type futherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * Filter, which futhers to fetch.
     */
    where?: futherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of futhers to fetch.
     */
    orderBy?: futherOrderByWithRelationInput | futherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing futhers.
     */
    cursor?: futherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` futhers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` futhers.
     */
    skip?: number
    distinct?: FutherScalarFieldEnum | FutherScalarFieldEnum[]
  }

  /**
   * futher create
   */
  export type futherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * The data needed to create a futher.
     */
    data: XOR<futherCreateInput, futherUncheckedCreateInput>
  }

  /**
   * futher createMany
   */
  export type futherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many futhers.
     */
    data: futherCreateManyInput | futherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * futher createManyAndReturn
   */
  export type futherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * The data used to create many futhers.
     */
    data: futherCreateManyInput | futherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * futher update
   */
  export type futherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * The data needed to update a futher.
     */
    data: XOR<futherUpdateInput, futherUncheckedUpdateInput>
    /**
     * Choose, which futher to update.
     */
    where: futherWhereUniqueInput
  }

  /**
   * futher updateMany
   */
  export type futherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update futhers.
     */
    data: XOR<futherUpdateManyMutationInput, futherUncheckedUpdateManyInput>
    /**
     * Filter which futhers to update
     */
    where?: futherWhereInput
    /**
     * Limit how many futhers to update.
     */
    limit?: number
  }

  /**
   * futher updateManyAndReturn
   */
  export type futherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * The data used to update futhers.
     */
    data: XOR<futherUpdateManyMutationInput, futherUncheckedUpdateManyInput>
    /**
     * Filter which futhers to update
     */
    where?: futherWhereInput
    /**
     * Limit how many futhers to update.
     */
    limit?: number
  }

  /**
   * futher upsert
   */
  export type futherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * The filter to search for the futher to update in case it exists.
     */
    where: futherWhereUniqueInput
    /**
     * In case the futher found by the `where` argument doesn't exist, create a new futher with this data.
     */
    create: XOR<futherCreateInput, futherUncheckedCreateInput>
    /**
     * In case the futher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<futherUpdateInput, futherUncheckedUpdateInput>
  }

  /**
   * futher delete
   */
  export type futherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
    /**
     * Filter which futher to delete.
     */
    where: futherWhereUniqueInput
  }

  /**
   * futher deleteMany
   */
  export type futherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which futhers to delete
     */
    where?: futherWhereInput
    /**
     * Limit how many futhers to delete.
     */
    limit?: number
  }

  /**
   * futher without action
   */
  export type futherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the futher
     */
    select?: futherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the futher
     */
    omit?: futherOmit<ExtArgs> | null
  }


  /**
   * Model self_employed
   */

  export type AggregateSelf_employed = {
    _count: Self_employedCountAggregateOutputType | null
    _min: Self_employedMinAggregateOutputType | null
    _max: Self_employedMaxAggregateOutputType | null
  }

  export type Self_employedMinAggregateOutputType = {
    employedId: string | null
    selfEmployed: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Self_employedMaxAggregateOutputType = {
    employedId: string | null
    selfEmployed: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Self_employedCountAggregateOutputType = {
    employedId: number
    selfEmployed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Self_employedMinAggregateInputType = {
    employedId?: true
    selfEmployed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Self_employedMaxAggregateInputType = {
    employedId?: true
    selfEmployed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Self_employedCountAggregateInputType = {
    employedId?: true
    selfEmployed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Self_employedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which self_employed to aggregate.
     */
    where?: self_employedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of self_employeds to fetch.
     */
    orderBy?: self_employedOrderByWithRelationInput | self_employedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: self_employedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` self_employeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` self_employeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned self_employeds
    **/
    _count?: true | Self_employedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Self_employedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Self_employedMaxAggregateInputType
  }

  export type GetSelf_employedAggregateType<T extends Self_employedAggregateArgs> = {
        [P in keyof T & keyof AggregateSelf_employed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelf_employed[P]>
      : GetScalarType<T[P], AggregateSelf_employed[P]>
  }




  export type self_employedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: self_employedWhereInput
    orderBy?: self_employedOrderByWithAggregationInput | self_employedOrderByWithAggregationInput[]
    by: Self_employedScalarFieldEnum[] | Self_employedScalarFieldEnum
    having?: self_employedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Self_employedCountAggregateInputType | true
    _min?: Self_employedMinAggregateInputType
    _max?: Self_employedMaxAggregateInputType
  }

  export type Self_employedGroupByOutputType = {
    employedId: string
    selfEmployed: string | null
    createdAt: Date
    updatedAt: Date
    _count: Self_employedCountAggregateOutputType | null
    _min: Self_employedMinAggregateOutputType | null
    _max: Self_employedMaxAggregateOutputType | null
  }

  type GetSelf_employedGroupByPayload<T extends self_employedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Self_employedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Self_employedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Self_employedGroupByOutputType[P]>
            : GetScalarType<T[P], Self_employedGroupByOutputType[P]>
        }
      >
    >


  export type self_employedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employedId?: boolean
    selfEmployed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["self_employed"]>

  export type self_employedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employedId?: boolean
    selfEmployed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["self_employed"]>

  export type self_employedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employedId?: boolean
    selfEmployed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["self_employed"]>

  export type self_employedSelectScalar = {
    employedId?: boolean
    selfEmployed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type self_employedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employedId" | "selfEmployed" | "createdAt" | "updatedAt", ExtArgs["result"]["self_employed"]>

  export type $self_employedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "self_employed"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      employedId: string
      selfEmployed: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["self_employed"]>
    composites: {}
  }

  type self_employedGetPayload<S extends boolean | null | undefined | self_employedDefaultArgs> = $Result.GetResult<Prisma.$self_employedPayload, S>

  type self_employedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<self_employedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Self_employedCountAggregateInputType | true
    }

  export interface self_employedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['self_employed'], meta: { name: 'self_employed' } }
    /**
     * Find zero or one Self_employed that matches the filter.
     * @param {self_employedFindUniqueArgs} args - Arguments to find a Self_employed
     * @example
     * // Get one Self_employed
     * const self_employed = await prisma.self_employed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends self_employedFindUniqueArgs>(args: SelectSubset<T, self_employedFindUniqueArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Self_employed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {self_employedFindUniqueOrThrowArgs} args - Arguments to find a Self_employed
     * @example
     * // Get one Self_employed
     * const self_employed = await prisma.self_employed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends self_employedFindUniqueOrThrowArgs>(args: SelectSubset<T, self_employedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Self_employed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {self_employedFindFirstArgs} args - Arguments to find a Self_employed
     * @example
     * // Get one Self_employed
     * const self_employed = await prisma.self_employed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends self_employedFindFirstArgs>(args?: SelectSubset<T, self_employedFindFirstArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Self_employed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {self_employedFindFirstOrThrowArgs} args - Arguments to find a Self_employed
     * @example
     * // Get one Self_employed
     * const self_employed = await prisma.self_employed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends self_employedFindFirstOrThrowArgs>(args?: SelectSubset<T, self_employedFindFirstOrThrowArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Self_employeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {self_employedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Self_employeds
     * const self_employeds = await prisma.self_employed.findMany()
     * 
     * // Get first 10 Self_employeds
     * const self_employeds = await prisma.self_employed.findMany({ take: 10 })
     * 
     * // Only select the `employedId`
     * const self_employedWithEmployedIdOnly = await prisma.self_employed.findMany({ select: { employedId: true } })
     * 
     */
    findMany<T extends self_employedFindManyArgs>(args?: SelectSubset<T, self_employedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Self_employed.
     * @param {self_employedCreateArgs} args - Arguments to create a Self_employed.
     * @example
     * // Create one Self_employed
     * const Self_employed = await prisma.self_employed.create({
     *   data: {
     *     // ... data to create a Self_employed
     *   }
     * })
     * 
     */
    create<T extends self_employedCreateArgs>(args: SelectSubset<T, self_employedCreateArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Self_employeds.
     * @param {self_employedCreateManyArgs} args - Arguments to create many Self_employeds.
     * @example
     * // Create many Self_employeds
     * const self_employed = await prisma.self_employed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends self_employedCreateManyArgs>(args?: SelectSubset<T, self_employedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Self_employeds and returns the data saved in the database.
     * @param {self_employedCreateManyAndReturnArgs} args - Arguments to create many Self_employeds.
     * @example
     * // Create many Self_employeds
     * const self_employed = await prisma.self_employed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Self_employeds and only return the `employedId`
     * const self_employedWithEmployedIdOnly = await prisma.self_employed.createManyAndReturn({
     *   select: { employedId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends self_employedCreateManyAndReturnArgs>(args?: SelectSubset<T, self_employedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Self_employed.
     * @param {self_employedDeleteArgs} args - Arguments to delete one Self_employed.
     * @example
     * // Delete one Self_employed
     * const Self_employed = await prisma.self_employed.delete({
     *   where: {
     *     // ... filter to delete one Self_employed
     *   }
     * })
     * 
     */
    delete<T extends self_employedDeleteArgs>(args: SelectSubset<T, self_employedDeleteArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Self_employed.
     * @param {self_employedUpdateArgs} args - Arguments to update one Self_employed.
     * @example
     * // Update one Self_employed
     * const self_employed = await prisma.self_employed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends self_employedUpdateArgs>(args: SelectSubset<T, self_employedUpdateArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Self_employeds.
     * @param {self_employedDeleteManyArgs} args - Arguments to filter Self_employeds to delete.
     * @example
     * // Delete a few Self_employeds
     * const { count } = await prisma.self_employed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends self_employedDeleteManyArgs>(args?: SelectSubset<T, self_employedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Self_employeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {self_employedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Self_employeds
     * const self_employed = await prisma.self_employed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends self_employedUpdateManyArgs>(args: SelectSubset<T, self_employedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Self_employeds and returns the data updated in the database.
     * @param {self_employedUpdateManyAndReturnArgs} args - Arguments to update many Self_employeds.
     * @example
     * // Update many Self_employeds
     * const self_employed = await prisma.self_employed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Self_employeds and only return the `employedId`
     * const self_employedWithEmployedIdOnly = await prisma.self_employed.updateManyAndReturn({
     *   select: { employedId: true },
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
    updateManyAndReturn<T extends self_employedUpdateManyAndReturnArgs>(args: SelectSubset<T, self_employedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Self_employed.
     * @param {self_employedUpsertArgs} args - Arguments to update or create a Self_employed.
     * @example
     * // Update or create a Self_employed
     * const self_employed = await prisma.self_employed.upsert({
     *   create: {
     *     // ... data to create a Self_employed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Self_employed we want to update
     *   }
     * })
     */
    upsert<T extends self_employedUpsertArgs>(args: SelectSubset<T, self_employedUpsertArgs<ExtArgs>>): Prisma__self_employedClient<$Result.GetResult<Prisma.$self_employedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Self_employeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {self_employedCountArgs} args - Arguments to filter Self_employeds to count.
     * @example
     * // Count the number of Self_employeds
     * const count = await prisma.self_employed.count({
     *   where: {
     *     // ... the filter for the Self_employeds we want to count
     *   }
     * })
    **/
    count<T extends self_employedCountArgs>(
      args?: Subset<T, self_employedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Self_employedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Self_employed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Self_employedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Self_employedAggregateArgs>(args: Subset<T, Self_employedAggregateArgs>): Prisma.PrismaPromise<GetSelf_employedAggregateType<T>>

    /**
     * Group by Self_employed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {self_employedGroupByArgs} args - Group by arguments.
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
      T extends self_employedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: self_employedGroupByArgs['orderBy'] }
        : { orderBy?: self_employedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, self_employedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelf_employedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the self_employed model
   */
  readonly fields: self_employedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for self_employed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__self_employedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the self_employed model
   */
  interface self_employedFieldRefs {
    readonly employedId: FieldRef<"self_employed", 'String'>
    readonly selfEmployed: FieldRef<"self_employed", 'String'>
    readonly createdAt: FieldRef<"self_employed", 'DateTime'>
    readonly updatedAt: FieldRef<"self_employed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * self_employed findUnique
   */
  export type self_employedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * Filter, which self_employed to fetch.
     */
    where: self_employedWhereUniqueInput
  }

  /**
   * self_employed findUniqueOrThrow
   */
  export type self_employedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * Filter, which self_employed to fetch.
     */
    where: self_employedWhereUniqueInput
  }

  /**
   * self_employed findFirst
   */
  export type self_employedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * Filter, which self_employed to fetch.
     */
    where?: self_employedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of self_employeds to fetch.
     */
    orderBy?: self_employedOrderByWithRelationInput | self_employedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for self_employeds.
     */
    cursor?: self_employedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` self_employeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` self_employeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of self_employeds.
     */
    distinct?: Self_employedScalarFieldEnum | Self_employedScalarFieldEnum[]
  }

  /**
   * self_employed findFirstOrThrow
   */
  export type self_employedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * Filter, which self_employed to fetch.
     */
    where?: self_employedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of self_employeds to fetch.
     */
    orderBy?: self_employedOrderByWithRelationInput | self_employedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for self_employeds.
     */
    cursor?: self_employedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` self_employeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` self_employeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of self_employeds.
     */
    distinct?: Self_employedScalarFieldEnum | Self_employedScalarFieldEnum[]
  }

  /**
   * self_employed findMany
   */
  export type self_employedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * Filter, which self_employeds to fetch.
     */
    where?: self_employedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of self_employeds to fetch.
     */
    orderBy?: self_employedOrderByWithRelationInput | self_employedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing self_employeds.
     */
    cursor?: self_employedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` self_employeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` self_employeds.
     */
    skip?: number
    distinct?: Self_employedScalarFieldEnum | Self_employedScalarFieldEnum[]
  }

  /**
   * self_employed create
   */
  export type self_employedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * The data needed to create a self_employed.
     */
    data: XOR<self_employedCreateInput, self_employedUncheckedCreateInput>
  }

  /**
   * self_employed createMany
   */
  export type self_employedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many self_employeds.
     */
    data: self_employedCreateManyInput | self_employedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * self_employed createManyAndReturn
   */
  export type self_employedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * The data used to create many self_employeds.
     */
    data: self_employedCreateManyInput | self_employedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * self_employed update
   */
  export type self_employedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * The data needed to update a self_employed.
     */
    data: XOR<self_employedUpdateInput, self_employedUncheckedUpdateInput>
    /**
     * Choose, which self_employed to update.
     */
    where: self_employedWhereUniqueInput
  }

  /**
   * self_employed updateMany
   */
  export type self_employedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update self_employeds.
     */
    data: XOR<self_employedUpdateManyMutationInput, self_employedUncheckedUpdateManyInput>
    /**
     * Filter which self_employeds to update
     */
    where?: self_employedWhereInput
    /**
     * Limit how many self_employeds to update.
     */
    limit?: number
  }

  /**
   * self_employed updateManyAndReturn
   */
  export type self_employedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * The data used to update self_employeds.
     */
    data: XOR<self_employedUpdateManyMutationInput, self_employedUncheckedUpdateManyInput>
    /**
     * Filter which self_employeds to update
     */
    where?: self_employedWhereInput
    /**
     * Limit how many self_employeds to update.
     */
    limit?: number
  }

  /**
   * self_employed upsert
   */
  export type self_employedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * The filter to search for the self_employed to update in case it exists.
     */
    where: self_employedWhereUniqueInput
    /**
     * In case the self_employed found by the `where` argument doesn't exist, create a new self_employed with this data.
     */
    create: XOR<self_employedCreateInput, self_employedUncheckedCreateInput>
    /**
     * In case the self_employed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<self_employedUpdateInput, self_employedUncheckedUpdateInput>
  }

  /**
   * self_employed delete
   */
  export type self_employedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
    /**
     * Filter which self_employed to delete.
     */
    where: self_employedWhereUniqueInput
  }

  /**
   * self_employed deleteMany
   */
  export type self_employedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which self_employeds to delete
     */
    where?: self_employedWhereInput
    /**
     * Limit how many self_employeds to delete.
     */
    limit?: number
  }

  /**
   * self_employed without action
   */
  export type self_employedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the self_employed
     */
    select?: self_employedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the self_employed
     */
    omit?: self_employedOmit<ExtArgs> | null
  }


  /**
   * Model searching
   */

  export type AggregateSearching = {
    _count: SearchingCountAggregateOutputType | null
    _min: SearchingMinAggregateOutputType | null
    _max: SearchingMaxAggregateOutputType | null
  }

  export type SearchingMinAggregateOutputType = {
    searchId: string | null
    researchDuration: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchingMaxAggregateOutputType = {
    searchId: string | null
    researchDuration: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchingCountAggregateOutputType = {
    searchId: number
    researchDuration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchingMinAggregateInputType = {
    searchId?: true
    researchDuration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchingMaxAggregateInputType = {
    searchId?: true
    researchDuration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchingCountAggregateInputType = {
    searchId?: true
    researchDuration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which searching to aggregate.
     */
    where?: searchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of searchings to fetch.
     */
    orderBy?: searchingOrderByWithRelationInput | searchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: searchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` searchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` searchings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned searchings
    **/
    _count?: true | SearchingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchingMaxAggregateInputType
  }

  export type GetSearchingAggregateType<T extends SearchingAggregateArgs> = {
        [P in keyof T & keyof AggregateSearching]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearching[P]>
      : GetScalarType<T[P], AggregateSearching[P]>
  }




  export type searchingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: searchingWhereInput
    orderBy?: searchingOrderByWithAggregationInput | searchingOrderByWithAggregationInput[]
    by: SearchingScalarFieldEnum[] | SearchingScalarFieldEnum
    having?: searchingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchingCountAggregateInputType | true
    _min?: SearchingMinAggregateInputType
    _max?: SearchingMaxAggregateInputType
  }

  export type SearchingGroupByOutputType = {
    searchId: string
    researchDuration: string | null
    createdAt: Date
    updatedAt: Date
    _count: SearchingCountAggregateOutputType | null
    _min: SearchingMinAggregateOutputType | null
    _max: SearchingMaxAggregateOutputType | null
  }

  type GetSearchingGroupByPayload<T extends searchingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchingGroupByOutputType[P]>
            : GetScalarType<T[P], SearchingGroupByOutputType[P]>
        }
      >
    >


  export type searchingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    searchId?: boolean
    researchDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searching"]>

  export type searchingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    searchId?: boolean
    researchDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searching"]>

  export type searchingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    searchId?: boolean
    researchDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searching"]>

  export type searchingSelectScalar = {
    searchId?: boolean
    researchDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type searchingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"searchId" | "researchDuration" | "createdAt" | "updatedAt", ExtArgs["result"]["searching"]>

  export type $searchingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "searching"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      searchId: string
      researchDuration: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searching"]>
    composites: {}
  }

  type searchingGetPayload<S extends boolean | null | undefined | searchingDefaultArgs> = $Result.GetResult<Prisma.$searchingPayload, S>

  type searchingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<searchingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchingCountAggregateInputType | true
    }

  export interface searchingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['searching'], meta: { name: 'searching' } }
    /**
     * Find zero or one Searching that matches the filter.
     * @param {searchingFindUniqueArgs} args - Arguments to find a Searching
     * @example
     * // Get one Searching
     * const searching = await prisma.searching.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends searchingFindUniqueArgs>(args: SelectSubset<T, searchingFindUniqueArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Searching that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {searchingFindUniqueOrThrowArgs} args - Arguments to find a Searching
     * @example
     * // Get one Searching
     * const searching = await prisma.searching.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends searchingFindUniqueOrThrowArgs>(args: SelectSubset<T, searchingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Searching that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchingFindFirstArgs} args - Arguments to find a Searching
     * @example
     * // Get one Searching
     * const searching = await prisma.searching.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends searchingFindFirstArgs>(args?: SelectSubset<T, searchingFindFirstArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Searching that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchingFindFirstOrThrowArgs} args - Arguments to find a Searching
     * @example
     * // Get one Searching
     * const searching = await prisma.searching.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends searchingFindFirstOrThrowArgs>(args?: SelectSubset<T, searchingFindFirstOrThrowArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Searchings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Searchings
     * const searchings = await prisma.searching.findMany()
     * 
     * // Get first 10 Searchings
     * const searchings = await prisma.searching.findMany({ take: 10 })
     * 
     * // Only select the `searchId`
     * const searchingWithSearchIdOnly = await prisma.searching.findMany({ select: { searchId: true } })
     * 
     */
    findMany<T extends searchingFindManyArgs>(args?: SelectSubset<T, searchingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Searching.
     * @param {searchingCreateArgs} args - Arguments to create a Searching.
     * @example
     * // Create one Searching
     * const Searching = await prisma.searching.create({
     *   data: {
     *     // ... data to create a Searching
     *   }
     * })
     * 
     */
    create<T extends searchingCreateArgs>(args: SelectSubset<T, searchingCreateArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Searchings.
     * @param {searchingCreateManyArgs} args - Arguments to create many Searchings.
     * @example
     * // Create many Searchings
     * const searching = await prisma.searching.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends searchingCreateManyArgs>(args?: SelectSubset<T, searchingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Searchings and returns the data saved in the database.
     * @param {searchingCreateManyAndReturnArgs} args - Arguments to create many Searchings.
     * @example
     * // Create many Searchings
     * const searching = await prisma.searching.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Searchings and only return the `searchId`
     * const searchingWithSearchIdOnly = await prisma.searching.createManyAndReturn({
     *   select: { searchId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends searchingCreateManyAndReturnArgs>(args?: SelectSubset<T, searchingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Searching.
     * @param {searchingDeleteArgs} args - Arguments to delete one Searching.
     * @example
     * // Delete one Searching
     * const Searching = await prisma.searching.delete({
     *   where: {
     *     // ... filter to delete one Searching
     *   }
     * })
     * 
     */
    delete<T extends searchingDeleteArgs>(args: SelectSubset<T, searchingDeleteArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Searching.
     * @param {searchingUpdateArgs} args - Arguments to update one Searching.
     * @example
     * // Update one Searching
     * const searching = await prisma.searching.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends searchingUpdateArgs>(args: SelectSubset<T, searchingUpdateArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Searchings.
     * @param {searchingDeleteManyArgs} args - Arguments to filter Searchings to delete.
     * @example
     * // Delete a few Searchings
     * const { count } = await prisma.searching.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends searchingDeleteManyArgs>(args?: SelectSubset<T, searchingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Searchings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Searchings
     * const searching = await prisma.searching.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends searchingUpdateManyArgs>(args: SelectSubset<T, searchingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Searchings and returns the data updated in the database.
     * @param {searchingUpdateManyAndReturnArgs} args - Arguments to update many Searchings.
     * @example
     * // Update many Searchings
     * const searching = await prisma.searching.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Searchings and only return the `searchId`
     * const searchingWithSearchIdOnly = await prisma.searching.updateManyAndReturn({
     *   select: { searchId: true },
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
    updateManyAndReturn<T extends searchingUpdateManyAndReturnArgs>(args: SelectSubset<T, searchingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Searching.
     * @param {searchingUpsertArgs} args - Arguments to update or create a Searching.
     * @example
     * // Update or create a Searching
     * const searching = await prisma.searching.upsert({
     *   create: {
     *     // ... data to create a Searching
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Searching we want to update
     *   }
     * })
     */
    upsert<T extends searchingUpsertArgs>(args: SelectSubset<T, searchingUpsertArgs<ExtArgs>>): Prisma__searchingClient<$Result.GetResult<Prisma.$searchingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Searchings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchingCountArgs} args - Arguments to filter Searchings to count.
     * @example
     * // Count the number of Searchings
     * const count = await prisma.searching.count({
     *   where: {
     *     // ... the filter for the Searchings we want to count
     *   }
     * })
    **/
    count<T extends searchingCountArgs>(
      args?: Subset<T, searchingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Searching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchingAggregateArgs>(args: Subset<T, SearchingAggregateArgs>): Prisma.PrismaPromise<GetSearchingAggregateType<T>>

    /**
     * Group by Searching.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchingGroupByArgs} args - Group by arguments.
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
      T extends searchingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: searchingGroupByArgs['orderBy'] }
        : { orderBy?: searchingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, searchingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the searching model
   */
  readonly fields: searchingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for searching.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__searchingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the searching model
   */
  interface searchingFieldRefs {
    readonly searchId: FieldRef<"searching", 'String'>
    readonly researchDuration: FieldRef<"searching", 'String'>
    readonly createdAt: FieldRef<"searching", 'DateTime'>
    readonly updatedAt: FieldRef<"searching", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * searching findUnique
   */
  export type searchingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * Filter, which searching to fetch.
     */
    where: searchingWhereUniqueInput
  }

  /**
   * searching findUniqueOrThrow
   */
  export type searchingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * Filter, which searching to fetch.
     */
    where: searchingWhereUniqueInput
  }

  /**
   * searching findFirst
   */
  export type searchingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * Filter, which searching to fetch.
     */
    where?: searchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of searchings to fetch.
     */
    orderBy?: searchingOrderByWithRelationInput | searchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for searchings.
     */
    cursor?: searchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` searchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` searchings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of searchings.
     */
    distinct?: SearchingScalarFieldEnum | SearchingScalarFieldEnum[]
  }

  /**
   * searching findFirstOrThrow
   */
  export type searchingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * Filter, which searching to fetch.
     */
    where?: searchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of searchings to fetch.
     */
    orderBy?: searchingOrderByWithRelationInput | searchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for searchings.
     */
    cursor?: searchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` searchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` searchings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of searchings.
     */
    distinct?: SearchingScalarFieldEnum | SearchingScalarFieldEnum[]
  }

  /**
   * searching findMany
   */
  export type searchingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * Filter, which searchings to fetch.
     */
    where?: searchingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of searchings to fetch.
     */
    orderBy?: searchingOrderByWithRelationInput | searchingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing searchings.
     */
    cursor?: searchingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` searchings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` searchings.
     */
    skip?: number
    distinct?: SearchingScalarFieldEnum | SearchingScalarFieldEnum[]
  }

  /**
   * searching create
   */
  export type searchingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * The data needed to create a searching.
     */
    data: XOR<searchingCreateInput, searchingUncheckedCreateInput>
  }

  /**
   * searching createMany
   */
  export type searchingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many searchings.
     */
    data: searchingCreateManyInput | searchingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * searching createManyAndReturn
   */
  export type searchingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * The data used to create many searchings.
     */
    data: searchingCreateManyInput | searchingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * searching update
   */
  export type searchingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * The data needed to update a searching.
     */
    data: XOR<searchingUpdateInput, searchingUncheckedUpdateInput>
    /**
     * Choose, which searching to update.
     */
    where: searchingWhereUniqueInput
  }

  /**
   * searching updateMany
   */
  export type searchingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update searchings.
     */
    data: XOR<searchingUpdateManyMutationInput, searchingUncheckedUpdateManyInput>
    /**
     * Filter which searchings to update
     */
    where?: searchingWhereInput
    /**
     * Limit how many searchings to update.
     */
    limit?: number
  }

  /**
   * searching updateManyAndReturn
   */
  export type searchingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * The data used to update searchings.
     */
    data: XOR<searchingUpdateManyMutationInput, searchingUncheckedUpdateManyInput>
    /**
     * Filter which searchings to update
     */
    where?: searchingWhereInput
    /**
     * Limit how many searchings to update.
     */
    limit?: number
  }

  /**
   * searching upsert
   */
  export type searchingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * The filter to search for the searching to update in case it exists.
     */
    where: searchingWhereUniqueInput
    /**
     * In case the searching found by the `where` argument doesn't exist, create a new searching with this data.
     */
    create: XOR<searchingCreateInput, searchingUncheckedCreateInput>
    /**
     * In case the searching was found with the provided `where` argument, update it with this data.
     */
    update: XOR<searchingUpdateInput, searchingUncheckedUpdateInput>
  }

  /**
   * searching delete
   */
  export type searchingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
    /**
     * Filter which searching to delete.
     */
    where: searchingWhereUniqueInput
  }

  /**
   * searching deleteMany
   */
  export type searchingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which searchings to delete
     */
    where?: searchingWhereInput
    /**
     * Limit how many searchings to delete.
     */
    limit?: number
  }

  /**
   * searching without action
   */
  export type searchingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the searching
     */
    select?: searchingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the searching
     */
    omit?: searchingOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    clientId: 'clientId',
    fistName: 'fistName',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    education: 'education',
    Status: 'Status',
    academicYear: 'academicYear',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const RecuiredScalarFieldEnum: {
    recuiredId: 'recuiredId',
    title: 'title',
    campany: 'campany',
    position: 'position',
    graduationYear: 'graduationYear',
    city: 'city',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecuiredScalarFieldEnum = (typeof RecuiredScalarFieldEnum)[keyof typeof RecuiredScalarFieldEnum]


  export const FutherScalarFieldEnum: {
    futhId: 'futhId',
    school: 'school',
    education: 'education',
    city: 'city',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FutherScalarFieldEnum = (typeof FutherScalarFieldEnum)[keyof typeof FutherScalarFieldEnum]


  export const Self_employedScalarFieldEnum: {
    employedId: 'employedId',
    selfEmployed: 'selfEmployed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Self_employedScalarFieldEnum = (typeof Self_employedScalarFieldEnum)[keyof typeof Self_employedScalarFieldEnum]


  export const SearchingScalarFieldEnum: {
    searchId: 'searchId',
    researchDuration: 'researchDuration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchingScalarFieldEnum = (typeof SearchingScalarFieldEnum)[keyof typeof SearchingScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    userName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    clientId?: StringFilter<"Client"> | string
    fistName?: StringNullableFilter<"Client"> | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    education?: StringNullableFilter<"Client"> | string | null
    Status?: EnumStatusFilter<"Client"> | $Enums.Status
    academicYear?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type ClientOrderByWithRelationInput = {
    clientId?: SortOrder
    fistName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    Status?: SortOrder
    academicYear?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    clientId?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    fistName?: StringNullableFilter<"Client"> | string | null
    lastName?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    education?: StringNullableFilter<"Client"> | string | null
    Status?: EnumStatusFilter<"Client"> | $Enums.Status
    academicYear?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }, "clientId" | "email">

  export type ClientOrderByWithAggregationInput = {
    clientId?: SortOrder
    fistName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    Status?: SortOrder
    academicYear?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    clientId?: StringWithAggregatesFilter<"Client"> | string
    fistName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    education?: StringNullableWithAggregatesFilter<"Client"> | string | null
    Status?: EnumStatusWithAggregatesFilter<"Client"> | $Enums.Status
    academicYear?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type RecuiredWhereInput = {
    AND?: RecuiredWhereInput | RecuiredWhereInput[]
    OR?: RecuiredWhereInput[]
    NOT?: RecuiredWhereInput | RecuiredWhereInput[]
    recuiredId?: StringFilter<"Recuired"> | string
    title?: StringNullableFilter<"Recuired"> | string | null
    campany?: StringNullableFilter<"Recuired"> | string | null
    position?: StringNullableFilter<"Recuired"> | string | null
    graduationYear?: StringNullableFilter<"Recuired"> | string | null
    city?: StringNullableFilter<"Recuired"> | string | null
    createdAt?: DateTimeFilter<"Recuired"> | Date | string
    updatedAt?: DateTimeFilter<"Recuired"> | Date | string
  }

  export type RecuiredOrderByWithRelationInput = {
    recuiredId?: SortOrder
    title?: SortOrderInput | SortOrder
    campany?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecuiredWhereUniqueInput = Prisma.AtLeast<{
    recuiredId?: string
    AND?: RecuiredWhereInput | RecuiredWhereInput[]
    OR?: RecuiredWhereInput[]
    NOT?: RecuiredWhereInput | RecuiredWhereInput[]
    title?: StringNullableFilter<"Recuired"> | string | null
    campany?: StringNullableFilter<"Recuired"> | string | null
    position?: StringNullableFilter<"Recuired"> | string | null
    graduationYear?: StringNullableFilter<"Recuired"> | string | null
    city?: StringNullableFilter<"Recuired"> | string | null
    createdAt?: DateTimeFilter<"Recuired"> | Date | string
    updatedAt?: DateTimeFilter<"Recuired"> | Date | string
  }, "recuiredId">

  export type RecuiredOrderByWithAggregationInput = {
    recuiredId?: SortOrder
    title?: SortOrderInput | SortOrder
    campany?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecuiredCountOrderByAggregateInput
    _max?: RecuiredMaxOrderByAggregateInput
    _min?: RecuiredMinOrderByAggregateInput
  }

  export type RecuiredScalarWhereWithAggregatesInput = {
    AND?: RecuiredScalarWhereWithAggregatesInput | RecuiredScalarWhereWithAggregatesInput[]
    OR?: RecuiredScalarWhereWithAggregatesInput[]
    NOT?: RecuiredScalarWhereWithAggregatesInput | RecuiredScalarWhereWithAggregatesInput[]
    recuiredId?: StringWithAggregatesFilter<"Recuired"> | string
    title?: StringNullableWithAggregatesFilter<"Recuired"> | string | null
    campany?: StringNullableWithAggregatesFilter<"Recuired"> | string | null
    position?: StringNullableWithAggregatesFilter<"Recuired"> | string | null
    graduationYear?: StringNullableWithAggregatesFilter<"Recuired"> | string | null
    city?: StringNullableWithAggregatesFilter<"Recuired"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Recuired"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recuired"> | Date | string
  }

  export type futherWhereInput = {
    AND?: futherWhereInput | futherWhereInput[]
    OR?: futherWhereInput[]
    NOT?: futherWhereInput | futherWhereInput[]
    futhId?: StringFilter<"futher"> | string
    school?: StringNullableFilter<"futher"> | string | null
    education?: StringNullableFilter<"futher"> | string | null
    city?: StringNullableFilter<"futher"> | string | null
    createdAt?: DateTimeFilter<"futher"> | Date | string
    updatedAt?: DateTimeFilter<"futher"> | Date | string
  }

  export type futherOrderByWithRelationInput = {
    futhId?: SortOrder
    school?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type futherWhereUniqueInput = Prisma.AtLeast<{
    futhId?: string
    AND?: futherWhereInput | futherWhereInput[]
    OR?: futherWhereInput[]
    NOT?: futherWhereInput | futherWhereInput[]
    school?: StringNullableFilter<"futher"> | string | null
    education?: StringNullableFilter<"futher"> | string | null
    city?: StringNullableFilter<"futher"> | string | null
    createdAt?: DateTimeFilter<"futher"> | Date | string
    updatedAt?: DateTimeFilter<"futher"> | Date | string
  }, "futhId">

  export type futherOrderByWithAggregationInput = {
    futhId?: SortOrder
    school?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: futherCountOrderByAggregateInput
    _max?: futherMaxOrderByAggregateInput
    _min?: futherMinOrderByAggregateInput
  }

  export type futherScalarWhereWithAggregatesInput = {
    AND?: futherScalarWhereWithAggregatesInput | futherScalarWhereWithAggregatesInput[]
    OR?: futherScalarWhereWithAggregatesInput[]
    NOT?: futherScalarWhereWithAggregatesInput | futherScalarWhereWithAggregatesInput[]
    futhId?: StringWithAggregatesFilter<"futher"> | string
    school?: StringNullableWithAggregatesFilter<"futher"> | string | null
    education?: StringNullableWithAggregatesFilter<"futher"> | string | null
    city?: StringNullableWithAggregatesFilter<"futher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"futher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"futher"> | Date | string
  }

  export type self_employedWhereInput = {
    AND?: self_employedWhereInput | self_employedWhereInput[]
    OR?: self_employedWhereInput[]
    NOT?: self_employedWhereInput | self_employedWhereInput[]
    employedId?: StringFilter<"self_employed"> | string
    selfEmployed?: StringNullableFilter<"self_employed"> | string | null
    createdAt?: DateTimeFilter<"self_employed"> | Date | string
    updatedAt?: DateTimeFilter<"self_employed"> | Date | string
  }

  export type self_employedOrderByWithRelationInput = {
    employedId?: SortOrder
    selfEmployed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type self_employedWhereUniqueInput = Prisma.AtLeast<{
    employedId?: string
    AND?: self_employedWhereInput | self_employedWhereInput[]
    OR?: self_employedWhereInput[]
    NOT?: self_employedWhereInput | self_employedWhereInput[]
    selfEmployed?: StringNullableFilter<"self_employed"> | string | null
    createdAt?: DateTimeFilter<"self_employed"> | Date | string
    updatedAt?: DateTimeFilter<"self_employed"> | Date | string
  }, "employedId">

  export type self_employedOrderByWithAggregationInput = {
    employedId?: SortOrder
    selfEmployed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: self_employedCountOrderByAggregateInput
    _max?: self_employedMaxOrderByAggregateInput
    _min?: self_employedMinOrderByAggregateInput
  }

  export type self_employedScalarWhereWithAggregatesInput = {
    AND?: self_employedScalarWhereWithAggregatesInput | self_employedScalarWhereWithAggregatesInput[]
    OR?: self_employedScalarWhereWithAggregatesInput[]
    NOT?: self_employedScalarWhereWithAggregatesInput | self_employedScalarWhereWithAggregatesInput[]
    employedId?: StringWithAggregatesFilter<"self_employed"> | string
    selfEmployed?: StringNullableWithAggregatesFilter<"self_employed"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"self_employed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"self_employed"> | Date | string
  }

  export type searchingWhereInput = {
    AND?: searchingWhereInput | searchingWhereInput[]
    OR?: searchingWhereInput[]
    NOT?: searchingWhereInput | searchingWhereInput[]
    searchId?: StringFilter<"searching"> | string
    researchDuration?: StringNullableFilter<"searching"> | string | null
    createdAt?: DateTimeFilter<"searching"> | Date | string
    updatedAt?: DateTimeFilter<"searching"> | Date | string
  }

  export type searchingOrderByWithRelationInput = {
    searchId?: SortOrder
    researchDuration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type searchingWhereUniqueInput = Prisma.AtLeast<{
    searchId?: string
    AND?: searchingWhereInput | searchingWhereInput[]
    OR?: searchingWhereInput[]
    NOT?: searchingWhereInput | searchingWhereInput[]
    researchDuration?: StringNullableFilter<"searching"> | string | null
    createdAt?: DateTimeFilter<"searching"> | Date | string
    updatedAt?: DateTimeFilter<"searching"> | Date | string
  }, "searchId">

  export type searchingOrderByWithAggregationInput = {
    searchId?: SortOrder
    researchDuration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: searchingCountOrderByAggregateInput
    _max?: searchingMaxOrderByAggregateInput
    _min?: searchingMinOrderByAggregateInput
  }

  export type searchingScalarWhereWithAggregatesInput = {
    AND?: searchingScalarWhereWithAggregatesInput | searchingScalarWhereWithAggregatesInput[]
    OR?: searchingScalarWhereWithAggregatesInput[]
    NOT?: searchingScalarWhereWithAggregatesInput | searchingScalarWhereWithAggregatesInput[]
    searchId?: StringWithAggregatesFilter<"searching"> | string
    researchDuration?: StringNullableWithAggregatesFilter<"searching"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"searching"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"searching"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    userName?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    userName?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    userId?: string
    userName?: string | null
    email?: string | null
    password?: string | null
    role: $Enums.Role
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    clientId?: string
    fistName?: string | null
    lastName?: string | null
    phone?: string | null
    email?: string | null
    education?: string | null
    Status: $Enums.Status
    academicYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateInput = {
    clientId?: string
    fistName?: string | null
    lastName?: string | null
    phone?: string | null
    email?: string | null
    education?: string | null
    Status: $Enums.Status
    academicYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    fistName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    fistName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateManyInput = {
    clientId?: string
    fistName?: string | null
    lastName?: string | null
    phone?: string | null
    email?: string | null
    education?: string | null
    Status: $Enums.Status
    academicYear?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    fistName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    fistName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    academicYear?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecuiredCreateInput = {
    recuiredId?: string
    title?: string | null
    campany?: string | null
    position?: string | null
    graduationYear?: string | null
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecuiredUncheckedCreateInput = {
    recuiredId?: string
    title?: string | null
    campany?: string | null
    position?: string | null
    graduationYear?: string | null
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecuiredUpdateInput = {
    recuiredId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    campany?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecuiredUncheckedUpdateInput = {
    recuiredId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    campany?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecuiredCreateManyInput = {
    recuiredId?: string
    title?: string | null
    campany?: string | null
    position?: string | null
    graduationYear?: string | null
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecuiredUpdateManyMutationInput = {
    recuiredId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    campany?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecuiredUncheckedUpdateManyInput = {
    recuiredId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    campany?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type futherCreateInput = {
    futhId?: string
    school?: string | null
    education?: string | null
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type futherUncheckedCreateInput = {
    futhId?: string
    school?: string | null
    education?: string | null
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type futherUpdateInput = {
    futhId?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type futherUncheckedUpdateInput = {
    futhId?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type futherCreateManyInput = {
    futhId?: string
    school?: string | null
    education?: string | null
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type futherUpdateManyMutationInput = {
    futhId?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type futherUncheckedUpdateManyInput = {
    futhId?: StringFieldUpdateOperationsInput | string
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type self_employedCreateInput = {
    employedId?: string
    selfEmployed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type self_employedUncheckedCreateInput = {
    employedId?: string
    selfEmployed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type self_employedUpdateInput = {
    employedId?: StringFieldUpdateOperationsInput | string
    selfEmployed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type self_employedUncheckedUpdateInput = {
    employedId?: StringFieldUpdateOperationsInput | string
    selfEmployed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type self_employedCreateManyInput = {
    employedId?: string
    selfEmployed?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type self_employedUpdateManyMutationInput = {
    employedId?: StringFieldUpdateOperationsInput | string
    selfEmployed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type self_employedUncheckedUpdateManyInput = {
    employedId?: StringFieldUpdateOperationsInput | string
    selfEmployed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type searchingCreateInput = {
    searchId?: string
    researchDuration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type searchingUncheckedCreateInput = {
    searchId?: string
    researchDuration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type searchingUpdateInput = {
    searchId?: StringFieldUpdateOperationsInput | string
    researchDuration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type searchingUncheckedUpdateInput = {
    searchId?: StringFieldUpdateOperationsInput | string
    researchDuration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type searchingCreateManyInput = {
    searchId?: string
    researchDuration?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type searchingUpdateManyMutationInput = {
    searchId?: StringFieldUpdateOperationsInput | string
    researchDuration?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type searchingUncheckedUpdateManyInput = {
    searchId?: StringFieldUpdateOperationsInput | string
    researchDuration?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ClientCountOrderByAggregateInput = {
    clientId?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    education?: SortOrder
    Status?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    clientId?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    education?: SortOrder
    Status?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    clientId?: SortOrder
    fistName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    education?: SortOrder
    Status?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type RecuiredCountOrderByAggregateInput = {
    recuiredId?: SortOrder
    title?: SortOrder
    campany?: SortOrder
    position?: SortOrder
    graduationYear?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecuiredMaxOrderByAggregateInput = {
    recuiredId?: SortOrder
    title?: SortOrder
    campany?: SortOrder
    position?: SortOrder
    graduationYear?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecuiredMinOrderByAggregateInput = {
    recuiredId?: SortOrder
    title?: SortOrder
    campany?: SortOrder
    position?: SortOrder
    graduationYear?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type futherCountOrderByAggregateInput = {
    futhId?: SortOrder
    school?: SortOrder
    education?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type futherMaxOrderByAggregateInput = {
    futhId?: SortOrder
    school?: SortOrder
    education?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type futherMinOrderByAggregateInput = {
    futhId?: SortOrder
    school?: SortOrder
    education?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type self_employedCountOrderByAggregateInput = {
    employedId?: SortOrder
    selfEmployed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type self_employedMaxOrderByAggregateInput = {
    employedId?: SortOrder
    selfEmployed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type self_employedMinOrderByAggregateInput = {
    employedId?: SortOrder
    selfEmployed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type searchingCountOrderByAggregateInput = {
    searchId?: SortOrder
    researchDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type searchingMaxOrderByAggregateInput = {
    searchId?: SortOrder
    researchDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type searchingMinOrderByAggregateInput = {
    searchId?: SortOrder
    researchDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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