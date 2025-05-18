
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
 * Model Estado
 * 
 */
export type Estado = $Result.DefaultSelection<Prisma.$EstadoPayload>
/**
 * Model Municipio
 * 
 */
export type Municipio = $Result.DefaultSelection<Prisma.$MunicipioPayload>
/**
 * Model TipoVegetacao
 * 
 */
export type TipoVegetacao = $Result.DefaultSelection<Prisma.$TipoVegetacaoPayload>
/**
 * Model TipoRelevo
 * 
 */
export type TipoRelevo = $Result.DefaultSelection<Prisma.$TipoRelevoPayload>
/**
 * Model TipoSolo
 * 
 */
export type TipoSolo = $Result.DefaultSelection<Prisma.$TipoSoloPayload>
/**
 * Model Expedicao
 * 
 */
export type Expedicao = $Result.DefaultSelection<Prisma.$ExpedicaoPayload>
/**
 * Model ExpedicaoMidia
 * 
 */
export type ExpedicaoMidia = $Result.DefaultSelection<Prisma.$ExpedicaoMidiaPayload>
/**
 * Model DadoEcologico
 * 
 */
export type DadoEcologico = $Result.DefaultSelection<Prisma.$DadoEcologicoPayload>
/**
 * Model ItemDado
 * 
 */
export type ItemDado = $Result.DefaultSelection<Prisma.$ItemDadoPayload>
/**
 * Model Planta
 * 
 */
export type Planta = $Result.DefaultSelection<Prisma.$PlantaPayload>
/**
 * Model PlantaDado
 * 
 */
export type PlantaDado = $Result.DefaultSelection<Prisma.$PlantaDadoPayload>
/**
 * Model Amostra
 * 
 */
export type Amostra = $Result.DefaultSelection<Prisma.$AmostraPayload>
/**
 * Model AmostraDado
 * 
 */
export type AmostraDado = $Result.DefaultSelection<Prisma.$AmostraDadoPayload>
/**
 * Model AmostraMidia
 * 
 */
export type AmostraMidia = $Result.DefaultSelection<Prisma.$AmostraMidiaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estados
 * const estados = await prisma.estado.findMany()
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
   * // Fetch zero or more Estados
   * const estados = await prisma.estado.findMany()
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
   * `prisma.estado`: Exposes CRUD operations for the **Estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.EstadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipio`: Exposes CRUD operations for the **Municipio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipios
    * const municipios = await prisma.municipio.findMany()
    * ```
    */
  get municipio(): Prisma.MunicipioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoVegetacao`: Exposes CRUD operations for the **TipoVegetacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoVegetacaos
    * const tipoVegetacaos = await prisma.tipoVegetacao.findMany()
    * ```
    */
  get tipoVegetacao(): Prisma.TipoVegetacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoRelevo`: Exposes CRUD operations for the **TipoRelevo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoRelevos
    * const tipoRelevos = await prisma.tipoRelevo.findMany()
    * ```
    */
  get tipoRelevo(): Prisma.TipoRelevoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoSolo`: Exposes CRUD operations for the **TipoSolo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoSolos
    * const tipoSolos = await prisma.tipoSolo.findMany()
    * ```
    */
  get tipoSolo(): Prisma.TipoSoloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expedicao`: Exposes CRUD operations for the **Expedicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expedicaos
    * const expedicaos = await prisma.expedicao.findMany()
    * ```
    */
  get expedicao(): Prisma.ExpedicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expedicaoMidia`: Exposes CRUD operations for the **ExpedicaoMidia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpedicaoMidias
    * const expedicaoMidias = await prisma.expedicaoMidia.findMany()
    * ```
    */
  get expedicaoMidia(): Prisma.ExpedicaoMidiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dadoEcologico`: Exposes CRUD operations for the **DadoEcologico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DadoEcologicos
    * const dadoEcologicos = await prisma.dadoEcologico.findMany()
    * ```
    */
  get dadoEcologico(): Prisma.DadoEcologicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemDado`: Exposes CRUD operations for the **ItemDado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemDados
    * const itemDados = await prisma.itemDado.findMany()
    * ```
    */
  get itemDado(): Prisma.ItemDadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planta`: Exposes CRUD operations for the **Planta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plantas
    * const plantas = await prisma.planta.findMany()
    * ```
    */
  get planta(): Prisma.PlantaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantaDado`: Exposes CRUD operations for the **PlantaDado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantaDados
    * const plantaDados = await prisma.plantaDado.findMany()
    * ```
    */
  get plantaDado(): Prisma.PlantaDadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amostra`: Exposes CRUD operations for the **Amostra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amostras
    * const amostras = await prisma.amostra.findMany()
    * ```
    */
  get amostra(): Prisma.AmostraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amostraDado`: Exposes CRUD operations for the **AmostraDado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AmostraDados
    * const amostraDados = await prisma.amostraDado.findMany()
    * ```
    */
  get amostraDado(): Prisma.AmostraDadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amostraMidia`: Exposes CRUD operations for the **AmostraMidia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AmostraMidias
    * const amostraMidias = await prisma.amostraMidia.findMany()
    * ```
    */
  get amostraMidia(): Prisma.AmostraMidiaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Estado: 'Estado',
    Municipio: 'Municipio',
    TipoVegetacao: 'TipoVegetacao',
    TipoRelevo: 'TipoRelevo',
    TipoSolo: 'TipoSolo',
    Expedicao: 'Expedicao',
    ExpedicaoMidia: 'ExpedicaoMidia',
    DadoEcologico: 'DadoEcologico',
    ItemDado: 'ItemDado',
    Planta: 'Planta',
    PlantaDado: 'PlantaDado',
    Amostra: 'Amostra',
    AmostraDado: 'AmostraDado',
    AmostraMidia: 'AmostraMidia'
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
      modelProps: "estado" | "municipio" | "tipoVegetacao" | "tipoRelevo" | "tipoSolo" | "expedicao" | "expedicaoMidia" | "dadoEcologico" | "itemDado" | "planta" | "plantaDado" | "amostra" | "amostraDado" | "amostraMidia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Estado: {
        payload: Prisma.$EstadoPayload<ExtArgs>
        fields: Prisma.EstadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findFirst: {
            args: Prisma.EstadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findMany: {
            args: Prisma.EstadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          create: {
            args: Prisma.EstadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          createMany: {
            args: Prisma.EstadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          delete: {
            args: Prisma.EstadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          update: {
            args: Prisma.EstadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          deleteMany: {
            args: Prisma.EstadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          upsert: {
            args: Prisma.EstadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.EstadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      Municipio: {
        payload: Prisma.$MunicipioPayload<ExtArgs>
        fields: Prisma.MunicipioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findFirst: {
            args: Prisma.MunicipioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findMany: {
            args: Prisma.MunicipioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          create: {
            args: Prisma.MunicipioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          createMany: {
            args: Prisma.MunicipioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          delete: {
            args: Prisma.MunicipioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          update: {
            args: Prisma.MunicipioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          deleteMany: {
            args: Prisma.MunicipioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          upsert: {
            args: Prisma.MunicipioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          aggregate: {
            args: Prisma.MunicipioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipio>
          }
          groupBy: {
            args: Prisma.MunicipioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipioCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipioCountAggregateOutputType> | number
          }
        }
      }
      TipoVegetacao: {
        payload: Prisma.$TipoVegetacaoPayload<ExtArgs>
        fields: Prisma.TipoVegetacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoVegetacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoVegetacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>
          }
          findFirst: {
            args: Prisma.TipoVegetacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoVegetacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>
          }
          findMany: {
            args: Prisma.TipoVegetacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>[]
          }
          create: {
            args: Prisma.TipoVegetacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>
          }
          createMany: {
            args: Prisma.TipoVegetacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoVegetacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>[]
          }
          delete: {
            args: Prisma.TipoVegetacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>
          }
          update: {
            args: Prisma.TipoVegetacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>
          }
          deleteMany: {
            args: Prisma.TipoVegetacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoVegetacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoVegetacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>[]
          }
          upsert: {
            args: Prisma.TipoVegetacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVegetacaoPayload>
          }
          aggregate: {
            args: Prisma.TipoVegetacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoVegetacao>
          }
          groupBy: {
            args: Prisma.TipoVegetacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoVegetacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoVegetacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoVegetacaoCountAggregateOutputType> | number
          }
        }
      }
      TipoRelevo: {
        payload: Prisma.$TipoRelevoPayload<ExtArgs>
        fields: Prisma.TipoRelevoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoRelevoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoRelevoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>
          }
          findFirst: {
            args: Prisma.TipoRelevoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoRelevoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>
          }
          findMany: {
            args: Prisma.TipoRelevoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>[]
          }
          create: {
            args: Prisma.TipoRelevoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>
          }
          createMany: {
            args: Prisma.TipoRelevoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoRelevoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>[]
          }
          delete: {
            args: Prisma.TipoRelevoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>
          }
          update: {
            args: Prisma.TipoRelevoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>
          }
          deleteMany: {
            args: Prisma.TipoRelevoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoRelevoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoRelevoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>[]
          }
          upsert: {
            args: Prisma.TipoRelevoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoRelevoPayload>
          }
          aggregate: {
            args: Prisma.TipoRelevoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoRelevo>
          }
          groupBy: {
            args: Prisma.TipoRelevoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoRelevoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoRelevoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoRelevoCountAggregateOutputType> | number
          }
        }
      }
      TipoSolo: {
        payload: Prisma.$TipoSoloPayload<ExtArgs>
        fields: Prisma.TipoSoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoSoloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoSoloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>
          }
          findFirst: {
            args: Prisma.TipoSoloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoSoloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>
          }
          findMany: {
            args: Prisma.TipoSoloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>[]
          }
          create: {
            args: Prisma.TipoSoloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>
          }
          createMany: {
            args: Prisma.TipoSoloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoSoloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>[]
          }
          delete: {
            args: Prisma.TipoSoloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>
          }
          update: {
            args: Prisma.TipoSoloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>
          }
          deleteMany: {
            args: Prisma.TipoSoloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoSoloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoSoloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>[]
          }
          upsert: {
            args: Prisma.TipoSoloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSoloPayload>
          }
          aggregate: {
            args: Prisma.TipoSoloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoSolo>
          }
          groupBy: {
            args: Prisma.TipoSoloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoSoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoSoloCountArgs<ExtArgs>
            result: $Utils.Optional<TipoSoloCountAggregateOutputType> | number
          }
        }
      }
      Expedicao: {
        payload: Prisma.$ExpedicaoPayload<ExtArgs>
        fields: Prisma.ExpedicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpedicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpedicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>
          }
          findFirst: {
            args: Prisma.ExpedicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpedicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>
          }
          findMany: {
            args: Prisma.ExpedicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>[]
          }
          create: {
            args: Prisma.ExpedicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>
          }
          createMany: {
            args: Prisma.ExpedicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpedicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>[]
          }
          delete: {
            args: Prisma.ExpedicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>
          }
          update: {
            args: Prisma.ExpedicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>
          }
          deleteMany: {
            args: Prisma.ExpedicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpedicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpedicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>[]
          }
          upsert: {
            args: Prisma.ExpedicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoPayload>
          }
          aggregate: {
            args: Prisma.ExpedicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpedicao>
          }
          groupBy: {
            args: Prisma.ExpedicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpedicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpedicaoCountArgs<ExtArgs>
            result: $Utils.Optional<ExpedicaoCountAggregateOutputType> | number
          }
        }
      }
      ExpedicaoMidia: {
        payload: Prisma.$ExpedicaoMidiaPayload<ExtArgs>
        fields: Prisma.ExpedicaoMidiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpedicaoMidiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpedicaoMidiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>
          }
          findFirst: {
            args: Prisma.ExpedicaoMidiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpedicaoMidiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>
          }
          findMany: {
            args: Prisma.ExpedicaoMidiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>[]
          }
          create: {
            args: Prisma.ExpedicaoMidiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>
          }
          createMany: {
            args: Prisma.ExpedicaoMidiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpedicaoMidiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>[]
          }
          delete: {
            args: Prisma.ExpedicaoMidiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>
          }
          update: {
            args: Prisma.ExpedicaoMidiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>
          }
          deleteMany: {
            args: Prisma.ExpedicaoMidiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpedicaoMidiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpedicaoMidiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>[]
          }
          upsert: {
            args: Prisma.ExpedicaoMidiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpedicaoMidiaPayload>
          }
          aggregate: {
            args: Prisma.ExpedicaoMidiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpedicaoMidia>
          }
          groupBy: {
            args: Prisma.ExpedicaoMidiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpedicaoMidiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpedicaoMidiaCountArgs<ExtArgs>
            result: $Utils.Optional<ExpedicaoMidiaCountAggregateOutputType> | number
          }
        }
      }
      DadoEcologico: {
        payload: Prisma.$DadoEcologicoPayload<ExtArgs>
        fields: Prisma.DadoEcologicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DadoEcologicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DadoEcologicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>
          }
          findFirst: {
            args: Prisma.DadoEcologicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DadoEcologicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>
          }
          findMany: {
            args: Prisma.DadoEcologicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>[]
          }
          create: {
            args: Prisma.DadoEcologicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>
          }
          createMany: {
            args: Prisma.DadoEcologicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DadoEcologicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>[]
          }
          delete: {
            args: Prisma.DadoEcologicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>
          }
          update: {
            args: Prisma.DadoEcologicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>
          }
          deleteMany: {
            args: Prisma.DadoEcologicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DadoEcologicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DadoEcologicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>[]
          }
          upsert: {
            args: Prisma.DadoEcologicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DadoEcologicoPayload>
          }
          aggregate: {
            args: Prisma.DadoEcologicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDadoEcologico>
          }
          groupBy: {
            args: Prisma.DadoEcologicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DadoEcologicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DadoEcologicoCountArgs<ExtArgs>
            result: $Utils.Optional<DadoEcologicoCountAggregateOutputType> | number
          }
        }
      }
      ItemDado: {
        payload: Prisma.$ItemDadoPayload<ExtArgs>
        fields: Prisma.ItemDadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemDadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemDadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>
          }
          findFirst: {
            args: Prisma.ItemDadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemDadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>
          }
          findMany: {
            args: Prisma.ItemDadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>[]
          }
          create: {
            args: Prisma.ItemDadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>
          }
          createMany: {
            args: Prisma.ItemDadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemDadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>[]
          }
          delete: {
            args: Prisma.ItemDadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>
          }
          update: {
            args: Prisma.ItemDadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>
          }
          deleteMany: {
            args: Prisma.ItemDadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemDadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemDadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>[]
          }
          upsert: {
            args: Prisma.ItemDadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDadoPayload>
          }
          aggregate: {
            args: Prisma.ItemDadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemDado>
          }
          groupBy: {
            args: Prisma.ItemDadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemDadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemDadoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemDadoCountAggregateOutputType> | number
          }
        }
      }
      Planta: {
        payload: Prisma.$PlantaPayload<ExtArgs>
        fields: Prisma.PlantaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          findFirst: {
            args: Prisma.PlantaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          findMany: {
            args: Prisma.PlantaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>[]
          }
          create: {
            args: Prisma.PlantaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          createMany: {
            args: Prisma.PlantaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>[]
          }
          delete: {
            args: Prisma.PlantaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          update: {
            args: Prisma.PlantaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          deleteMany: {
            args: Prisma.PlantaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>[]
          }
          upsert: {
            args: Prisma.PlantaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          aggregate: {
            args: Prisma.PlantaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanta>
          }
          groupBy: {
            args: Prisma.PlantaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantaCountArgs<ExtArgs>
            result: $Utils.Optional<PlantaCountAggregateOutputType> | number
          }
        }
      }
      PlantaDado: {
        payload: Prisma.$PlantaDadoPayload<ExtArgs>
        fields: Prisma.PlantaDadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantaDadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantaDadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>
          }
          findFirst: {
            args: Prisma.PlantaDadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantaDadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>
          }
          findMany: {
            args: Prisma.PlantaDadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>[]
          }
          create: {
            args: Prisma.PlantaDadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>
          }
          createMany: {
            args: Prisma.PlantaDadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantaDadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>[]
          }
          delete: {
            args: Prisma.PlantaDadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>
          }
          update: {
            args: Prisma.PlantaDadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>
          }
          deleteMany: {
            args: Prisma.PlantaDadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantaDadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantaDadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>[]
          }
          upsert: {
            args: Prisma.PlantaDadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaDadoPayload>
          }
          aggregate: {
            args: Prisma.PlantaDadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantaDado>
          }
          groupBy: {
            args: Prisma.PlantaDadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantaDadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantaDadoCountArgs<ExtArgs>
            result: $Utils.Optional<PlantaDadoCountAggregateOutputType> | number
          }
        }
      }
      Amostra: {
        payload: Prisma.$AmostraPayload<ExtArgs>
        fields: Prisma.AmostraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmostraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmostraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>
          }
          findFirst: {
            args: Prisma.AmostraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmostraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>
          }
          findMany: {
            args: Prisma.AmostraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>[]
          }
          create: {
            args: Prisma.AmostraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>
          }
          createMany: {
            args: Prisma.AmostraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmostraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>[]
          }
          delete: {
            args: Prisma.AmostraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>
          }
          update: {
            args: Prisma.AmostraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>
          }
          deleteMany: {
            args: Prisma.AmostraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmostraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmostraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>[]
          }
          upsert: {
            args: Prisma.AmostraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraPayload>
          }
          aggregate: {
            args: Prisma.AmostraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmostra>
          }
          groupBy: {
            args: Prisma.AmostraGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmostraGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmostraCountArgs<ExtArgs>
            result: $Utils.Optional<AmostraCountAggregateOutputType> | number
          }
        }
      }
      AmostraDado: {
        payload: Prisma.$AmostraDadoPayload<ExtArgs>
        fields: Prisma.AmostraDadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmostraDadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmostraDadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>
          }
          findFirst: {
            args: Prisma.AmostraDadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmostraDadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>
          }
          findMany: {
            args: Prisma.AmostraDadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>[]
          }
          create: {
            args: Prisma.AmostraDadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>
          }
          createMany: {
            args: Prisma.AmostraDadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmostraDadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>[]
          }
          delete: {
            args: Prisma.AmostraDadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>
          }
          update: {
            args: Prisma.AmostraDadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>
          }
          deleteMany: {
            args: Prisma.AmostraDadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmostraDadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmostraDadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>[]
          }
          upsert: {
            args: Prisma.AmostraDadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraDadoPayload>
          }
          aggregate: {
            args: Prisma.AmostraDadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmostraDado>
          }
          groupBy: {
            args: Prisma.AmostraDadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmostraDadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmostraDadoCountArgs<ExtArgs>
            result: $Utils.Optional<AmostraDadoCountAggregateOutputType> | number
          }
        }
      }
      AmostraMidia: {
        payload: Prisma.$AmostraMidiaPayload<ExtArgs>
        fields: Prisma.AmostraMidiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmostraMidiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmostraMidiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>
          }
          findFirst: {
            args: Prisma.AmostraMidiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmostraMidiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>
          }
          findMany: {
            args: Prisma.AmostraMidiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>[]
          }
          create: {
            args: Prisma.AmostraMidiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>
          }
          createMany: {
            args: Prisma.AmostraMidiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmostraMidiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>[]
          }
          delete: {
            args: Prisma.AmostraMidiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>
          }
          update: {
            args: Prisma.AmostraMidiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>
          }
          deleteMany: {
            args: Prisma.AmostraMidiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmostraMidiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmostraMidiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>[]
          }
          upsert: {
            args: Prisma.AmostraMidiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmostraMidiaPayload>
          }
          aggregate: {
            args: Prisma.AmostraMidiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmostraMidia>
          }
          groupBy: {
            args: Prisma.AmostraMidiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmostraMidiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmostraMidiaCountArgs<ExtArgs>
            result: $Utils.Optional<AmostraMidiaCountAggregateOutputType> | number
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
    estado?: EstadoOmit
    municipio?: MunicipioOmit
    tipoVegetacao?: TipoVegetacaoOmit
    tipoRelevo?: TipoRelevoOmit
    tipoSolo?: TipoSoloOmit
    expedicao?: ExpedicaoOmit
    expedicaoMidia?: ExpedicaoMidiaOmit
    dadoEcologico?: DadoEcologicoOmit
    itemDado?: ItemDadoOmit
    planta?: PlantaOmit
    plantaDado?: PlantaDadoOmit
    amostra?: AmostraOmit
    amostraDado?: AmostraDadoOmit
    amostraMidia?: AmostraMidiaOmit
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
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    municipios: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | EstadoCountOutputTypeCountMunicipiosArgs
  }

  // Custom InputTypes
  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountMunicipiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipioWhereInput
  }


  /**
   * Count Type MunicipioCountOutputType
   */

  export type MunicipioCountOutputType = {
    expedicoes: number
  }

  export type MunicipioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedicoes?: boolean | MunicipioCountOutputTypeCountExpedicoesArgs
  }

  // Custom InputTypes
  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipioCountOutputType
     */
    select?: MunicipioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeCountExpedicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedicaoWhereInput
  }


  /**
   * Count Type TipoVegetacaoCountOutputType
   */

  export type TipoVegetacaoCountOutputType = {
    expedicoes: number
  }

  export type TipoVegetacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedicoes?: boolean | TipoVegetacaoCountOutputTypeCountExpedicoesArgs
  }

  // Custom InputTypes
  /**
   * TipoVegetacaoCountOutputType without action
   */
  export type TipoVegetacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacaoCountOutputType
     */
    select?: TipoVegetacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoVegetacaoCountOutputType without action
   */
  export type TipoVegetacaoCountOutputTypeCountExpedicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedicaoWhereInput
  }


  /**
   * Count Type TipoRelevoCountOutputType
   */

  export type TipoRelevoCountOutputType = {
    amostras: number
  }

  export type TipoRelevoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostras?: boolean | TipoRelevoCountOutputTypeCountAmostrasArgs
  }

  // Custom InputTypes
  /**
   * TipoRelevoCountOutputType without action
   */
  export type TipoRelevoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevoCountOutputType
     */
    select?: TipoRelevoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoRelevoCountOutputType without action
   */
  export type TipoRelevoCountOutputTypeCountAmostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraWhereInput
  }


  /**
   * Count Type TipoSoloCountOutputType
   */

  export type TipoSoloCountOutputType = {
    amostras: number
  }

  export type TipoSoloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostras?: boolean | TipoSoloCountOutputTypeCountAmostrasArgs
  }

  // Custom InputTypes
  /**
   * TipoSoloCountOutputType without action
   */
  export type TipoSoloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSoloCountOutputType
     */
    select?: TipoSoloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoSoloCountOutputType without action
   */
  export type TipoSoloCountOutputTypeCountAmostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraWhereInput
  }


  /**
   * Count Type ExpedicaoCountOutputType
   */

  export type ExpedicaoCountOutputType = {
    expedicaoMidia: number
    amostras: number
  }

  export type ExpedicaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedicaoMidia?: boolean | ExpedicaoCountOutputTypeCountExpedicaoMidiaArgs
    amostras?: boolean | ExpedicaoCountOutputTypeCountAmostrasArgs
  }

  // Custom InputTypes
  /**
   * ExpedicaoCountOutputType without action
   */
  export type ExpedicaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoCountOutputType
     */
    select?: ExpedicaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpedicaoCountOutputType without action
   */
  export type ExpedicaoCountOutputTypeCountExpedicaoMidiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedicaoMidiaWhereInput
  }

  /**
   * ExpedicaoCountOutputType without action
   */
  export type ExpedicaoCountOutputTypeCountAmostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraWhereInput
  }


  /**
   * Count Type DadoEcologicoCountOutputType
   */

  export type DadoEcologicoCountOutputType = {
    item_dados: number
    planta_dados: number
    amostra_dados: number
  }

  export type DadoEcologicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_dados?: boolean | DadoEcologicoCountOutputTypeCountItem_dadosArgs
    planta_dados?: boolean | DadoEcologicoCountOutputTypeCountPlanta_dadosArgs
    amostra_dados?: boolean | DadoEcologicoCountOutputTypeCountAmostra_dadosArgs
  }

  // Custom InputTypes
  /**
   * DadoEcologicoCountOutputType without action
   */
  export type DadoEcologicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologicoCountOutputType
     */
    select?: DadoEcologicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DadoEcologicoCountOutputType without action
   */
  export type DadoEcologicoCountOutputTypeCountItem_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDadoWhereInput
  }

  /**
   * DadoEcologicoCountOutputType without action
   */
  export type DadoEcologicoCountOutputTypeCountPlanta_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantaDadoWhereInput
  }

  /**
   * DadoEcologicoCountOutputType without action
   */
  export type DadoEcologicoCountOutputTypeCountAmostra_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraDadoWhereInput
  }


  /**
   * Count Type ItemDadoCountOutputType
   */

  export type ItemDadoCountOutputType = {
    planta_dados: number
    amostra_dados: number
  }

  export type ItemDadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta_dados?: boolean | ItemDadoCountOutputTypeCountPlanta_dadosArgs
    amostra_dados?: boolean | ItemDadoCountOutputTypeCountAmostra_dadosArgs
  }

  // Custom InputTypes
  /**
   * ItemDadoCountOutputType without action
   */
  export type ItemDadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDadoCountOutputType
     */
    select?: ItemDadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemDadoCountOutputType without action
   */
  export type ItemDadoCountOutputTypeCountPlanta_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantaDadoWhereInput
  }

  /**
   * ItemDadoCountOutputType without action
   */
  export type ItemDadoCountOutputTypeCountAmostra_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraDadoWhereInput
  }


  /**
   * Count Type PlantaCountOutputType
   */

  export type PlantaCountOutputType = {
    planta_dados: number
    amostras: number
  }

  export type PlantaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta_dados?: boolean | PlantaCountOutputTypeCountPlanta_dadosArgs
    amostras?: boolean | PlantaCountOutputTypeCountAmostrasArgs
  }

  // Custom InputTypes
  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaCountOutputType
     */
    select?: PlantaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeCountPlanta_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantaDadoWhereInput
  }

  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeCountAmostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraWhereInput
  }


  /**
   * Count Type AmostraCountOutputType
   */

  export type AmostraCountOutputType = {
    amostra_dados: number
    amostra_midias: number
  }

  export type AmostraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostra_dados?: boolean | AmostraCountOutputTypeCountAmostra_dadosArgs
    amostra_midias?: boolean | AmostraCountOutputTypeCountAmostra_midiasArgs
  }

  // Custom InputTypes
  /**
   * AmostraCountOutputType without action
   */
  export type AmostraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraCountOutputType
     */
    select?: AmostraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmostraCountOutputType without action
   */
  export type AmostraCountOutputTypeCountAmostra_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraDadoWhereInput
  }

  /**
   * AmostraCountOutputType without action
   */
  export type AmostraCountOutputTypeCountAmostra_midiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraMidiaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoMinAggregateOutputType = {
    id_estado: string | null
    nm_estado: string | null
  }

  export type EstadoMaxAggregateOutputType = {
    id_estado: string | null
    nm_estado: string | null
  }

  export type EstadoCountAggregateOutputType = {
    id_estado: number
    nm_estado: number
    _all: number
  }


  export type EstadoMinAggregateInputType = {
    id_estado?: true
    nm_estado?: true
  }

  export type EstadoMaxAggregateInputType = {
    id_estado?: true
    nm_estado?: true
  }

  export type EstadoCountAggregateInputType = {
    id_estado?: true
    nm_estado?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado to aggregate.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type EstadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoWhereInput
    orderBy?: EstadoOrderByWithAggregationInput | EstadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: EstadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    id_estado: string
    nm_estado: string
    _count: EstadoCountAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends EstadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type EstadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado?: boolean
    nm_estado?: boolean
    municipios?: boolean | Estado$municipiosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado?: boolean
    nm_estado?: boolean
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado?: boolean
    nm_estado?: boolean
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectScalar = {
    id_estado?: boolean
    nm_estado?: boolean
  }

  export type EstadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estado" | "nm_estado", ExtArgs["result"]["estado"]>
  export type EstadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | Estado$municipiosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estado"
    objects: {
      municipios: Prisma.$MunicipioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estado: string
      nm_estado: string
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }

  type EstadoGetPayload<S extends boolean | null | undefined | EstadoDefaultArgs> = $Result.GetResult<Prisma.$EstadoPayload, S>

  type EstadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface EstadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado'], meta: { name: 'Estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {EstadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoFindUniqueArgs>(args: SelectSubset<T, EstadoFindUniqueArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoFindFirstArgs>(args?: SelectSubset<T, EstadoFindFirstArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `id_estado`
     * const estadoWithId_estadoOnly = await prisma.estado.findMany({ select: { id_estado: true } })
     * 
     */
    findMany<T extends EstadoFindManyArgs>(args?: SelectSubset<T, EstadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado.
     * @param {EstadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
     */
    create<T extends EstadoCreateArgs>(args: SelectSubset<T, EstadoCreateArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {EstadoCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoCreateManyArgs>(args?: SelectSubset<T, EstadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {EstadoCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id_estado`
     * const estadoWithId_estadoOnly = await prisma.estado.createManyAndReturn({
     *   select: { id_estado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado.
     * @param {EstadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
     */
    delete<T extends EstadoDeleteArgs>(args: SelectSubset<T, EstadoDeleteArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado.
     * @param {EstadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoUpdateArgs>(args: SelectSubset<T, EstadoUpdateArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {EstadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoDeleteManyArgs>(args?: SelectSubset<T, EstadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoUpdateManyArgs>(args: SelectSubset<T, EstadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {EstadoUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id_estado`
     * const estadoWithId_estadoOnly = await prisma.estado.updateManyAndReturn({
     *   select: { id_estado: true },
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
    updateManyAndReturn<T extends EstadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado.
     * @param {EstadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
     */
    upsert<T extends EstadoUpsertArgs>(args: SelectSubset<T, EstadoUpsertArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends EstadoCountArgs>(
      args?: Subset<T, EstadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoGroupByArgs} args - Group by arguments.
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
      T extends EstadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoGroupByArgs['orderBy'] }
        : { orderBy?: EstadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado model
   */
  readonly fields: EstadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipios<T extends Estado$municipiosArgs<ExtArgs> = {}>(args?: Subset<T, Estado$municipiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estado model
   */
  interface EstadoFieldRefs {
    readonly id_estado: FieldRef<"Estado", 'String'>
    readonly nm_estado: FieldRef<"Estado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estado findUnique
   */
  export type EstadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado findUniqueOrThrow
   */
  export type EstadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado findFirst
   */
  export type EstadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado findFirstOrThrow
   */
  export type EstadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado findMany
   */
  export type EstadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado create
   */
  export type EstadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado.
     */
    data: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
  }

  /**
   * Estado createMany
   */
  export type EstadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado createManyAndReturn
   */
  export type EstadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado update
   */
  export type EstadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado.
     */
    data: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
    /**
     * Choose, which Estado to update.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado updateMany
   */
  export type EstadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estado updateManyAndReturn
   */
  export type EstadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estado upsert
   */
  export type EstadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado to update in case it exists.
     */
    where: EstadoWhereUniqueInput
    /**
     * In case the Estado found by the `where` argument doesn't exist, create a new Estado with this data.
     */
    create: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
    /**
     * In case the Estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
  }

  /**
   * Estado delete
   */
  export type EstadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter which Estado to delete.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado deleteMany
   */
  export type EstadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to delete
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to delete.
     */
    limit?: number
  }

  /**
   * Estado.municipios
   */
  export type Estado$municipiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    where?: MunicipioWhereInput
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    cursor?: MunicipioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Estado without action
   */
  export type EstadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
  }


  /**
   * Model Municipio
   */

  export type AggregateMunicipio = {
    _count: MunicipioCountAggregateOutputType | null
    _avg: MunicipioAvgAggregateOutputType | null
    _sum: MunicipioSumAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  export type MunicipioAvgAggregateOutputType = {
    id_municipio: number | null
  }

  export type MunicipioSumAggregateOutputType = {
    id_municipio: number | null
  }

  export type MunicipioMinAggregateOutputType = {
    id_municipio: number | null
    nm_municipio: string | null
    id_estado: string | null
  }

  export type MunicipioMaxAggregateOutputType = {
    id_municipio: number | null
    nm_municipio: string | null
    id_estado: string | null
  }

  export type MunicipioCountAggregateOutputType = {
    id_municipio: number
    nm_municipio: number
    id_estado: number
    _all: number
  }


  export type MunicipioAvgAggregateInputType = {
    id_municipio?: true
  }

  export type MunicipioSumAggregateInputType = {
    id_municipio?: true
  }

  export type MunicipioMinAggregateInputType = {
    id_municipio?: true
    nm_municipio?: true
    id_estado?: true
  }

  export type MunicipioMaxAggregateInputType = {
    id_municipio?: true
    nm_municipio?: true
    id_estado?: true
  }

  export type MunicipioCountAggregateInputType = {
    id_municipio?: true
    nm_municipio?: true
    id_estado?: true
    _all?: true
  }

  export type MunicipioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipio to aggregate.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipios
    **/
    _count?: true | MunicipioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipioMaxAggregateInputType
  }

  export type GetMunicipioAggregateType<T extends MunicipioAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipio[P]>
      : GetScalarType<T[P], AggregateMunicipio[P]>
  }




  export type MunicipioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipioWhereInput
    orderBy?: MunicipioOrderByWithAggregationInput | MunicipioOrderByWithAggregationInput[]
    by: MunicipioScalarFieldEnum[] | MunicipioScalarFieldEnum
    having?: MunicipioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipioCountAggregateInputType | true
    _avg?: MunicipioAvgAggregateInputType
    _sum?: MunicipioSumAggregateInputType
    _min?: MunicipioMinAggregateInputType
    _max?: MunicipioMaxAggregateInputType
  }

  export type MunicipioGroupByOutputType = {
    id_municipio: number
    nm_municipio: string
    id_estado: string
    _count: MunicipioCountAggregateOutputType | null
    _avg: MunicipioAvgAggregateOutputType | null
    _sum: MunicipioSumAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  type GetMunicipioGroupByPayload<T extends MunicipioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
        }
      >
    >


  export type MunicipioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_municipio?: boolean
    nm_municipio?: boolean
    id_estado?: boolean
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
    expedicoes?: boolean | Municipio$expedicoesArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_municipio?: boolean
    nm_municipio?: boolean
    id_estado?: boolean
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_municipio?: boolean
    nm_municipio?: boolean
    id_estado?: boolean
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectScalar = {
    id_municipio?: boolean
    nm_municipio?: boolean
    id_estado?: boolean
  }

  export type MunicipioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_municipio" | "nm_municipio" | "id_estado", ExtArgs["result"]["municipio"]>
  export type MunicipioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
    expedicoes?: boolean | Municipio$expedicoesArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MunicipioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }
  export type MunicipioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }

  export type $MunicipioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipio"
    objects: {
      estado: Prisma.$EstadoPayload<ExtArgs>
      expedicoes: Prisma.$ExpedicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_municipio: number
      nm_municipio: string
      id_estado: string
    }, ExtArgs["result"]["municipio"]>
    composites: {}
  }

  type MunicipioGetPayload<S extends boolean | null | undefined | MunicipioDefaultArgs> = $Result.GetResult<Prisma.$MunicipioPayload, S>

  type MunicipioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipioCountAggregateInputType | true
    }

  export interface MunicipioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipio'], meta: { name: 'Municipio' } }
    /**
     * Find zero or one Municipio that matches the filter.
     * @param {MunicipioFindUniqueArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipioFindUniqueArgs>(args: SelectSubset<T, MunicipioFindUniqueArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipioFindUniqueOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipioFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipioFindFirstArgs>(args?: SelectSubset<T, MunicipioFindFirstArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipioFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipios
     * const municipios = await prisma.municipio.findMany()
     * 
     * // Get first 10 Municipios
     * const municipios = await prisma.municipio.findMany({ take: 10 })
     * 
     * // Only select the `id_municipio`
     * const municipioWithId_municipioOnly = await prisma.municipio.findMany({ select: { id_municipio: true } })
     * 
     */
    findMany<T extends MunicipioFindManyArgs>(args?: SelectSubset<T, MunicipioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipio.
     * @param {MunicipioCreateArgs} args - Arguments to create a Municipio.
     * @example
     * // Create one Municipio
     * const Municipio = await prisma.municipio.create({
     *   data: {
     *     // ... data to create a Municipio
     *   }
     * })
     * 
     */
    create<T extends MunicipioCreateArgs>(args: SelectSubset<T, MunicipioCreateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipios.
     * @param {MunicipioCreateManyArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipio = await prisma.municipio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipioCreateManyArgs>(args?: SelectSubset<T, MunicipioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Municipios and returns the data saved in the database.
     * @param {MunicipioCreateManyAndReturnArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipio = await prisma.municipio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Municipios and only return the `id_municipio`
     * const municipioWithId_municipioOnly = await prisma.municipio.createManyAndReturn({
     *   select: { id_municipio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipioCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Municipio.
     * @param {MunicipioDeleteArgs} args - Arguments to delete one Municipio.
     * @example
     * // Delete one Municipio
     * const Municipio = await prisma.municipio.delete({
     *   where: {
     *     // ... filter to delete one Municipio
     *   }
     * })
     * 
     */
    delete<T extends MunicipioDeleteArgs>(args: SelectSubset<T, MunicipioDeleteArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipio.
     * @param {MunicipioUpdateArgs} args - Arguments to update one Municipio.
     * @example
     * // Update one Municipio
     * const municipio = await prisma.municipio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipioUpdateArgs>(args: SelectSubset<T, MunicipioUpdateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipios.
     * @param {MunicipioDeleteManyArgs} args - Arguments to filter Municipios to delete.
     * @example
     * // Delete a few Municipios
     * const { count } = await prisma.municipio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipioDeleteManyArgs>(args?: SelectSubset<T, MunicipioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipios
     * const municipio = await prisma.municipio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipioUpdateManyArgs>(args: SelectSubset<T, MunicipioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios and returns the data updated in the database.
     * @param {MunicipioUpdateManyAndReturnArgs} args - Arguments to update many Municipios.
     * @example
     * // Update many Municipios
     * const municipio = await prisma.municipio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Municipios and only return the `id_municipio`
     * const municipioWithId_municipioOnly = await prisma.municipio.updateManyAndReturn({
     *   select: { id_municipio: true },
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
    updateManyAndReturn<T extends MunicipioUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Municipio.
     * @param {MunicipioUpsertArgs} args - Arguments to update or create a Municipio.
     * @example
     * // Update or create a Municipio
     * const municipio = await prisma.municipio.upsert({
     *   create: {
     *     // ... data to create a Municipio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipio we want to update
     *   }
     * })
     */
    upsert<T extends MunicipioUpsertArgs>(args: SelectSubset<T, MunicipioUpsertArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioCountArgs} args - Arguments to filter Municipios to count.
     * @example
     * // Count the number of Municipios
     * const count = await prisma.municipio.count({
     *   where: {
     *     // ... the filter for the Municipios we want to count
     *   }
     * })
    **/
    count<T extends MunicipioCountArgs>(
      args?: Subset<T, MunicipioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MunicipioAggregateArgs>(args: Subset<T, MunicipioAggregateArgs>): Prisma.PrismaPromise<GetMunicipioAggregateType<T>>

    /**
     * Group by Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioGroupByArgs} args - Group by arguments.
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
      T extends MunicipioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipioGroupByArgs['orderBy'] }
        : { orderBy?: MunicipioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MunicipioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipio model
   */
  readonly fields: MunicipioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estado<T extends EstadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoDefaultArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expedicoes<T extends Municipio$expedicoesArgs<ExtArgs> = {}>(args?: Subset<T, Municipio$expedicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Municipio model
   */
  interface MunicipioFieldRefs {
    readonly id_municipio: FieldRef<"Municipio", 'Int'>
    readonly nm_municipio: FieldRef<"Municipio", 'String'>
    readonly id_estado: FieldRef<"Municipio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Municipio findUnique
   */
  export type MunicipioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio findUniqueOrThrow
   */
  export type MunicipioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio findFirst
   */
  export type MunicipioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio findFirstOrThrow
   */
  export type MunicipioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio findMany
   */
  export type MunicipioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio create
   */
  export type MunicipioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipio.
     */
    data: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
  }

  /**
   * Municipio createMany
   */
  export type MunicipioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipios.
     */
    data: MunicipioCreateManyInput | MunicipioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipio createManyAndReturn
   */
  export type MunicipioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * The data used to create many Municipios.
     */
    data: MunicipioCreateManyInput | MunicipioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Municipio update
   */
  export type MunicipioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipio.
     */
    data: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
    /**
     * Choose, which Municipio to update.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio updateMany
   */
  export type MunicipioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
  }

  /**
   * Municipio updateManyAndReturn
   */
  export type MunicipioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Municipio upsert
   */
  export type MunicipioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipio to update in case it exists.
     */
    where: MunicipioWhereUniqueInput
    /**
     * In case the Municipio found by the `where` argument doesn't exist, create a new Municipio with this data.
     */
    create: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
    /**
     * In case the Municipio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
  }

  /**
   * Municipio delete
   */
  export type MunicipioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter which Municipio to delete.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio deleteMany
   */
  export type MunicipioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipios to delete
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to delete.
     */
    limit?: number
  }

  /**
   * Municipio.expedicoes
   */
  export type Municipio$expedicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    where?: ExpedicaoWhereInput
    orderBy?: ExpedicaoOrderByWithRelationInput | ExpedicaoOrderByWithRelationInput[]
    cursor?: ExpedicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedicaoScalarFieldEnum | ExpedicaoScalarFieldEnum[]
  }

  /**
   * Municipio without action
   */
  export type MunicipioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
  }


  /**
   * Model TipoVegetacao
   */

  export type AggregateTipoVegetacao = {
    _count: TipoVegetacaoCountAggregateOutputType | null
    _avg: TipoVegetacaoAvgAggregateOutputType | null
    _sum: TipoVegetacaoSumAggregateOutputType | null
    _min: TipoVegetacaoMinAggregateOutputType | null
    _max: TipoVegetacaoMaxAggregateOutputType | null
  }

  export type TipoVegetacaoAvgAggregateOutputType = {
    id_vegetacao: number | null
  }

  export type TipoVegetacaoSumAggregateOutputType = {
    id_vegetacao: number | null
  }

  export type TipoVegetacaoMinAggregateOutputType = {
    id_vegetacao: number | null
    nm_vegetacao: string | null
  }

  export type TipoVegetacaoMaxAggregateOutputType = {
    id_vegetacao: number | null
    nm_vegetacao: string | null
  }

  export type TipoVegetacaoCountAggregateOutputType = {
    id_vegetacao: number
    nm_vegetacao: number
    _all: number
  }


  export type TipoVegetacaoAvgAggregateInputType = {
    id_vegetacao?: true
  }

  export type TipoVegetacaoSumAggregateInputType = {
    id_vegetacao?: true
  }

  export type TipoVegetacaoMinAggregateInputType = {
    id_vegetacao?: true
    nm_vegetacao?: true
  }

  export type TipoVegetacaoMaxAggregateInputType = {
    id_vegetacao?: true
    nm_vegetacao?: true
  }

  export type TipoVegetacaoCountAggregateInputType = {
    id_vegetacao?: true
    nm_vegetacao?: true
    _all?: true
  }

  export type TipoVegetacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVegetacao to aggregate.
     */
    where?: TipoVegetacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVegetacaos to fetch.
     */
    orderBy?: TipoVegetacaoOrderByWithRelationInput | TipoVegetacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoVegetacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVegetacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVegetacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoVegetacaos
    **/
    _count?: true | TipoVegetacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoVegetacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoVegetacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoVegetacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoVegetacaoMaxAggregateInputType
  }

  export type GetTipoVegetacaoAggregateType<T extends TipoVegetacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoVegetacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoVegetacao[P]>
      : GetScalarType<T[P], AggregateTipoVegetacao[P]>
  }




  export type TipoVegetacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoVegetacaoWhereInput
    orderBy?: TipoVegetacaoOrderByWithAggregationInput | TipoVegetacaoOrderByWithAggregationInput[]
    by: TipoVegetacaoScalarFieldEnum[] | TipoVegetacaoScalarFieldEnum
    having?: TipoVegetacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoVegetacaoCountAggregateInputType | true
    _avg?: TipoVegetacaoAvgAggregateInputType
    _sum?: TipoVegetacaoSumAggregateInputType
    _min?: TipoVegetacaoMinAggregateInputType
    _max?: TipoVegetacaoMaxAggregateInputType
  }

  export type TipoVegetacaoGroupByOutputType = {
    id_vegetacao: number
    nm_vegetacao: string
    _count: TipoVegetacaoCountAggregateOutputType | null
    _avg: TipoVegetacaoAvgAggregateOutputType | null
    _sum: TipoVegetacaoSumAggregateOutputType | null
    _min: TipoVegetacaoMinAggregateOutputType | null
    _max: TipoVegetacaoMaxAggregateOutputType | null
  }

  type GetTipoVegetacaoGroupByPayload<T extends TipoVegetacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoVegetacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoVegetacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoVegetacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoVegetacaoGroupByOutputType[P]>
        }
      >
    >


  export type TipoVegetacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vegetacao?: boolean
    nm_vegetacao?: boolean
    expedicoes?: boolean | TipoVegetacao$expedicoesArgs<ExtArgs>
    _count?: boolean | TipoVegetacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoVegetacao"]>

  export type TipoVegetacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vegetacao?: boolean
    nm_vegetacao?: boolean
  }, ExtArgs["result"]["tipoVegetacao"]>

  export type TipoVegetacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vegetacao?: boolean
    nm_vegetacao?: boolean
  }, ExtArgs["result"]["tipoVegetacao"]>

  export type TipoVegetacaoSelectScalar = {
    id_vegetacao?: boolean
    nm_vegetacao?: boolean
  }

  export type TipoVegetacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_vegetacao" | "nm_vegetacao", ExtArgs["result"]["tipoVegetacao"]>
  export type TipoVegetacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedicoes?: boolean | TipoVegetacao$expedicoesArgs<ExtArgs>
    _count?: boolean | TipoVegetacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoVegetacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoVegetacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoVegetacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoVegetacao"
    objects: {
      expedicoes: Prisma.$ExpedicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_vegetacao: number
      nm_vegetacao: string
    }, ExtArgs["result"]["tipoVegetacao"]>
    composites: {}
  }

  type TipoVegetacaoGetPayload<S extends boolean | null | undefined | TipoVegetacaoDefaultArgs> = $Result.GetResult<Prisma.$TipoVegetacaoPayload, S>

  type TipoVegetacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoVegetacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoVegetacaoCountAggregateInputType | true
    }

  export interface TipoVegetacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoVegetacao'], meta: { name: 'TipoVegetacao' } }
    /**
     * Find zero or one TipoVegetacao that matches the filter.
     * @param {TipoVegetacaoFindUniqueArgs} args - Arguments to find a TipoVegetacao
     * @example
     * // Get one TipoVegetacao
     * const tipoVegetacao = await prisma.tipoVegetacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoVegetacaoFindUniqueArgs>(args: SelectSubset<T, TipoVegetacaoFindUniqueArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoVegetacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoVegetacaoFindUniqueOrThrowArgs} args - Arguments to find a TipoVegetacao
     * @example
     * // Get one TipoVegetacao
     * const tipoVegetacao = await prisma.tipoVegetacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoVegetacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoVegetacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVegetacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVegetacaoFindFirstArgs} args - Arguments to find a TipoVegetacao
     * @example
     * // Get one TipoVegetacao
     * const tipoVegetacao = await prisma.tipoVegetacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoVegetacaoFindFirstArgs>(args?: SelectSubset<T, TipoVegetacaoFindFirstArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVegetacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVegetacaoFindFirstOrThrowArgs} args - Arguments to find a TipoVegetacao
     * @example
     * // Get one TipoVegetacao
     * const tipoVegetacao = await prisma.tipoVegetacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoVegetacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoVegetacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoVegetacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVegetacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoVegetacaos
     * const tipoVegetacaos = await prisma.tipoVegetacao.findMany()
     * 
     * // Get first 10 TipoVegetacaos
     * const tipoVegetacaos = await prisma.tipoVegetacao.findMany({ take: 10 })
     * 
     * // Only select the `id_vegetacao`
     * const tipoVegetacaoWithId_vegetacaoOnly = await prisma.tipoVegetacao.findMany({ select: { id_vegetacao: true } })
     * 
     */
    findMany<T extends TipoVegetacaoFindManyArgs>(args?: SelectSubset<T, TipoVegetacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoVegetacao.
     * @param {TipoVegetacaoCreateArgs} args - Arguments to create a TipoVegetacao.
     * @example
     * // Create one TipoVegetacao
     * const TipoVegetacao = await prisma.tipoVegetacao.create({
     *   data: {
     *     // ... data to create a TipoVegetacao
     *   }
     * })
     * 
     */
    create<T extends TipoVegetacaoCreateArgs>(args: SelectSubset<T, TipoVegetacaoCreateArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoVegetacaos.
     * @param {TipoVegetacaoCreateManyArgs} args - Arguments to create many TipoVegetacaos.
     * @example
     * // Create many TipoVegetacaos
     * const tipoVegetacao = await prisma.tipoVegetacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoVegetacaoCreateManyArgs>(args?: SelectSubset<T, TipoVegetacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoVegetacaos and returns the data saved in the database.
     * @param {TipoVegetacaoCreateManyAndReturnArgs} args - Arguments to create many TipoVegetacaos.
     * @example
     * // Create many TipoVegetacaos
     * const tipoVegetacao = await prisma.tipoVegetacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoVegetacaos and only return the `id_vegetacao`
     * const tipoVegetacaoWithId_vegetacaoOnly = await prisma.tipoVegetacao.createManyAndReturn({
     *   select: { id_vegetacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoVegetacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoVegetacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoVegetacao.
     * @param {TipoVegetacaoDeleteArgs} args - Arguments to delete one TipoVegetacao.
     * @example
     * // Delete one TipoVegetacao
     * const TipoVegetacao = await prisma.tipoVegetacao.delete({
     *   where: {
     *     // ... filter to delete one TipoVegetacao
     *   }
     * })
     * 
     */
    delete<T extends TipoVegetacaoDeleteArgs>(args: SelectSubset<T, TipoVegetacaoDeleteArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoVegetacao.
     * @param {TipoVegetacaoUpdateArgs} args - Arguments to update one TipoVegetacao.
     * @example
     * // Update one TipoVegetacao
     * const tipoVegetacao = await prisma.tipoVegetacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoVegetacaoUpdateArgs>(args: SelectSubset<T, TipoVegetacaoUpdateArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoVegetacaos.
     * @param {TipoVegetacaoDeleteManyArgs} args - Arguments to filter TipoVegetacaos to delete.
     * @example
     * // Delete a few TipoVegetacaos
     * const { count } = await prisma.tipoVegetacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoVegetacaoDeleteManyArgs>(args?: SelectSubset<T, TipoVegetacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoVegetacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVegetacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoVegetacaos
     * const tipoVegetacao = await prisma.tipoVegetacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoVegetacaoUpdateManyArgs>(args: SelectSubset<T, TipoVegetacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoVegetacaos and returns the data updated in the database.
     * @param {TipoVegetacaoUpdateManyAndReturnArgs} args - Arguments to update many TipoVegetacaos.
     * @example
     * // Update many TipoVegetacaos
     * const tipoVegetacao = await prisma.tipoVegetacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoVegetacaos and only return the `id_vegetacao`
     * const tipoVegetacaoWithId_vegetacaoOnly = await prisma.tipoVegetacao.updateManyAndReturn({
     *   select: { id_vegetacao: true },
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
    updateManyAndReturn<T extends TipoVegetacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoVegetacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoVegetacao.
     * @param {TipoVegetacaoUpsertArgs} args - Arguments to update or create a TipoVegetacao.
     * @example
     * // Update or create a TipoVegetacao
     * const tipoVegetacao = await prisma.tipoVegetacao.upsert({
     *   create: {
     *     // ... data to create a TipoVegetacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoVegetacao we want to update
     *   }
     * })
     */
    upsert<T extends TipoVegetacaoUpsertArgs>(args: SelectSubset<T, TipoVegetacaoUpsertArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoVegetacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVegetacaoCountArgs} args - Arguments to filter TipoVegetacaos to count.
     * @example
     * // Count the number of TipoVegetacaos
     * const count = await prisma.tipoVegetacao.count({
     *   where: {
     *     // ... the filter for the TipoVegetacaos we want to count
     *   }
     * })
    **/
    count<T extends TipoVegetacaoCountArgs>(
      args?: Subset<T, TipoVegetacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoVegetacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoVegetacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVegetacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoVegetacaoAggregateArgs>(args: Subset<T, TipoVegetacaoAggregateArgs>): Prisma.PrismaPromise<GetTipoVegetacaoAggregateType<T>>

    /**
     * Group by TipoVegetacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVegetacaoGroupByArgs} args - Group by arguments.
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
      T extends TipoVegetacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoVegetacaoGroupByArgs['orderBy'] }
        : { orderBy?: TipoVegetacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoVegetacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoVegetacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoVegetacao model
   */
  readonly fields: TipoVegetacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoVegetacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoVegetacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expedicoes<T extends TipoVegetacao$expedicoesArgs<ExtArgs> = {}>(args?: Subset<T, TipoVegetacao$expedicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoVegetacao model
   */
  interface TipoVegetacaoFieldRefs {
    readonly id_vegetacao: FieldRef<"TipoVegetacao", 'Int'>
    readonly nm_vegetacao: FieldRef<"TipoVegetacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoVegetacao findUnique
   */
  export type TipoVegetacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVegetacao to fetch.
     */
    where: TipoVegetacaoWhereUniqueInput
  }

  /**
   * TipoVegetacao findUniqueOrThrow
   */
  export type TipoVegetacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVegetacao to fetch.
     */
    where: TipoVegetacaoWhereUniqueInput
  }

  /**
   * TipoVegetacao findFirst
   */
  export type TipoVegetacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVegetacao to fetch.
     */
    where?: TipoVegetacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVegetacaos to fetch.
     */
    orderBy?: TipoVegetacaoOrderByWithRelationInput | TipoVegetacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVegetacaos.
     */
    cursor?: TipoVegetacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVegetacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVegetacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVegetacaos.
     */
    distinct?: TipoVegetacaoScalarFieldEnum | TipoVegetacaoScalarFieldEnum[]
  }

  /**
   * TipoVegetacao findFirstOrThrow
   */
  export type TipoVegetacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVegetacao to fetch.
     */
    where?: TipoVegetacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVegetacaos to fetch.
     */
    orderBy?: TipoVegetacaoOrderByWithRelationInput | TipoVegetacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVegetacaos.
     */
    cursor?: TipoVegetacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVegetacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVegetacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVegetacaos.
     */
    distinct?: TipoVegetacaoScalarFieldEnum | TipoVegetacaoScalarFieldEnum[]
  }

  /**
   * TipoVegetacao findMany
   */
  export type TipoVegetacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVegetacaos to fetch.
     */
    where?: TipoVegetacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVegetacaos to fetch.
     */
    orderBy?: TipoVegetacaoOrderByWithRelationInput | TipoVegetacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoVegetacaos.
     */
    cursor?: TipoVegetacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVegetacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVegetacaos.
     */
    skip?: number
    distinct?: TipoVegetacaoScalarFieldEnum | TipoVegetacaoScalarFieldEnum[]
  }

  /**
   * TipoVegetacao create
   */
  export type TipoVegetacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoVegetacao.
     */
    data: XOR<TipoVegetacaoCreateInput, TipoVegetacaoUncheckedCreateInput>
  }

  /**
   * TipoVegetacao createMany
   */
  export type TipoVegetacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoVegetacaos.
     */
    data: TipoVegetacaoCreateManyInput | TipoVegetacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoVegetacao createManyAndReturn
   */
  export type TipoVegetacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoVegetacaos.
     */
    data: TipoVegetacaoCreateManyInput | TipoVegetacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoVegetacao update
   */
  export type TipoVegetacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoVegetacao.
     */
    data: XOR<TipoVegetacaoUpdateInput, TipoVegetacaoUncheckedUpdateInput>
    /**
     * Choose, which TipoVegetacao to update.
     */
    where: TipoVegetacaoWhereUniqueInput
  }

  /**
   * TipoVegetacao updateMany
   */
  export type TipoVegetacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoVegetacaos.
     */
    data: XOR<TipoVegetacaoUpdateManyMutationInput, TipoVegetacaoUncheckedUpdateManyInput>
    /**
     * Filter which TipoVegetacaos to update
     */
    where?: TipoVegetacaoWhereInput
    /**
     * Limit how many TipoVegetacaos to update.
     */
    limit?: number
  }

  /**
   * TipoVegetacao updateManyAndReturn
   */
  export type TipoVegetacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * The data used to update TipoVegetacaos.
     */
    data: XOR<TipoVegetacaoUpdateManyMutationInput, TipoVegetacaoUncheckedUpdateManyInput>
    /**
     * Filter which TipoVegetacaos to update
     */
    where?: TipoVegetacaoWhereInput
    /**
     * Limit how many TipoVegetacaos to update.
     */
    limit?: number
  }

  /**
   * TipoVegetacao upsert
   */
  export type TipoVegetacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoVegetacao to update in case it exists.
     */
    where: TipoVegetacaoWhereUniqueInput
    /**
     * In case the TipoVegetacao found by the `where` argument doesn't exist, create a new TipoVegetacao with this data.
     */
    create: XOR<TipoVegetacaoCreateInput, TipoVegetacaoUncheckedCreateInput>
    /**
     * In case the TipoVegetacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoVegetacaoUpdateInput, TipoVegetacaoUncheckedUpdateInput>
  }

  /**
   * TipoVegetacao delete
   */
  export type TipoVegetacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    /**
     * Filter which TipoVegetacao to delete.
     */
    where: TipoVegetacaoWhereUniqueInput
  }

  /**
   * TipoVegetacao deleteMany
   */
  export type TipoVegetacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVegetacaos to delete
     */
    where?: TipoVegetacaoWhereInput
    /**
     * Limit how many TipoVegetacaos to delete.
     */
    limit?: number
  }

  /**
   * TipoVegetacao.expedicoes
   */
  export type TipoVegetacao$expedicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    where?: ExpedicaoWhereInput
    orderBy?: ExpedicaoOrderByWithRelationInput | ExpedicaoOrderByWithRelationInput[]
    cursor?: ExpedicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedicaoScalarFieldEnum | ExpedicaoScalarFieldEnum[]
  }

  /**
   * TipoVegetacao without action
   */
  export type TipoVegetacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
  }


  /**
   * Model TipoRelevo
   */

  export type AggregateTipoRelevo = {
    _count: TipoRelevoCountAggregateOutputType | null
    _avg: TipoRelevoAvgAggregateOutputType | null
    _sum: TipoRelevoSumAggregateOutputType | null
    _min: TipoRelevoMinAggregateOutputType | null
    _max: TipoRelevoMaxAggregateOutputType | null
  }

  export type TipoRelevoAvgAggregateOutputType = {
    id_relevo: number | null
  }

  export type TipoRelevoSumAggregateOutputType = {
    id_relevo: number | null
  }

  export type TipoRelevoMinAggregateOutputType = {
    id_relevo: number | null
    nm_relevo: string | null
  }

  export type TipoRelevoMaxAggregateOutputType = {
    id_relevo: number | null
    nm_relevo: string | null
  }

  export type TipoRelevoCountAggregateOutputType = {
    id_relevo: number
    nm_relevo: number
    _all: number
  }


  export type TipoRelevoAvgAggregateInputType = {
    id_relevo?: true
  }

  export type TipoRelevoSumAggregateInputType = {
    id_relevo?: true
  }

  export type TipoRelevoMinAggregateInputType = {
    id_relevo?: true
    nm_relevo?: true
  }

  export type TipoRelevoMaxAggregateInputType = {
    id_relevo?: true
    nm_relevo?: true
  }

  export type TipoRelevoCountAggregateInputType = {
    id_relevo?: true
    nm_relevo?: true
    _all?: true
  }

  export type TipoRelevoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRelevo to aggregate.
     */
    where?: TipoRelevoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRelevos to fetch.
     */
    orderBy?: TipoRelevoOrderByWithRelationInput | TipoRelevoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoRelevoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRelevos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRelevos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoRelevos
    **/
    _count?: true | TipoRelevoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoRelevoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoRelevoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoRelevoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoRelevoMaxAggregateInputType
  }

  export type GetTipoRelevoAggregateType<T extends TipoRelevoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoRelevo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoRelevo[P]>
      : GetScalarType<T[P], AggregateTipoRelevo[P]>
  }




  export type TipoRelevoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoRelevoWhereInput
    orderBy?: TipoRelevoOrderByWithAggregationInput | TipoRelevoOrderByWithAggregationInput[]
    by: TipoRelevoScalarFieldEnum[] | TipoRelevoScalarFieldEnum
    having?: TipoRelevoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoRelevoCountAggregateInputType | true
    _avg?: TipoRelevoAvgAggregateInputType
    _sum?: TipoRelevoSumAggregateInputType
    _min?: TipoRelevoMinAggregateInputType
    _max?: TipoRelevoMaxAggregateInputType
  }

  export type TipoRelevoGroupByOutputType = {
    id_relevo: number
    nm_relevo: string
    _count: TipoRelevoCountAggregateOutputType | null
    _avg: TipoRelevoAvgAggregateOutputType | null
    _sum: TipoRelevoSumAggregateOutputType | null
    _min: TipoRelevoMinAggregateOutputType | null
    _max: TipoRelevoMaxAggregateOutputType | null
  }

  type GetTipoRelevoGroupByPayload<T extends TipoRelevoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoRelevoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoRelevoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoRelevoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoRelevoGroupByOutputType[P]>
        }
      >
    >


  export type TipoRelevoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_relevo?: boolean
    nm_relevo?: boolean
    amostras?: boolean | TipoRelevo$amostrasArgs<ExtArgs>
    _count?: boolean | TipoRelevoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoRelevo"]>

  export type TipoRelevoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_relevo?: boolean
    nm_relevo?: boolean
  }, ExtArgs["result"]["tipoRelevo"]>

  export type TipoRelevoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_relevo?: boolean
    nm_relevo?: boolean
  }, ExtArgs["result"]["tipoRelevo"]>

  export type TipoRelevoSelectScalar = {
    id_relevo?: boolean
    nm_relevo?: boolean
  }

  export type TipoRelevoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_relevo" | "nm_relevo", ExtArgs["result"]["tipoRelevo"]>
  export type TipoRelevoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostras?: boolean | TipoRelevo$amostrasArgs<ExtArgs>
    _count?: boolean | TipoRelevoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoRelevoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoRelevoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoRelevoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoRelevo"
    objects: {
      amostras: Prisma.$AmostraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_relevo: number
      nm_relevo: string
    }, ExtArgs["result"]["tipoRelevo"]>
    composites: {}
  }

  type TipoRelevoGetPayload<S extends boolean | null | undefined | TipoRelevoDefaultArgs> = $Result.GetResult<Prisma.$TipoRelevoPayload, S>

  type TipoRelevoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoRelevoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoRelevoCountAggregateInputType | true
    }

  export interface TipoRelevoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoRelevo'], meta: { name: 'TipoRelevo' } }
    /**
     * Find zero or one TipoRelevo that matches the filter.
     * @param {TipoRelevoFindUniqueArgs} args - Arguments to find a TipoRelevo
     * @example
     * // Get one TipoRelevo
     * const tipoRelevo = await prisma.tipoRelevo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoRelevoFindUniqueArgs>(args: SelectSubset<T, TipoRelevoFindUniqueArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoRelevo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoRelevoFindUniqueOrThrowArgs} args - Arguments to find a TipoRelevo
     * @example
     * // Get one TipoRelevo
     * const tipoRelevo = await prisma.tipoRelevo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoRelevoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoRelevoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoRelevo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRelevoFindFirstArgs} args - Arguments to find a TipoRelevo
     * @example
     * // Get one TipoRelevo
     * const tipoRelevo = await prisma.tipoRelevo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoRelevoFindFirstArgs>(args?: SelectSubset<T, TipoRelevoFindFirstArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoRelevo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRelevoFindFirstOrThrowArgs} args - Arguments to find a TipoRelevo
     * @example
     * // Get one TipoRelevo
     * const tipoRelevo = await prisma.tipoRelevo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoRelevoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoRelevoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoRelevos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRelevoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoRelevos
     * const tipoRelevos = await prisma.tipoRelevo.findMany()
     * 
     * // Get first 10 TipoRelevos
     * const tipoRelevos = await prisma.tipoRelevo.findMany({ take: 10 })
     * 
     * // Only select the `id_relevo`
     * const tipoRelevoWithId_relevoOnly = await prisma.tipoRelevo.findMany({ select: { id_relevo: true } })
     * 
     */
    findMany<T extends TipoRelevoFindManyArgs>(args?: SelectSubset<T, TipoRelevoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoRelevo.
     * @param {TipoRelevoCreateArgs} args - Arguments to create a TipoRelevo.
     * @example
     * // Create one TipoRelevo
     * const TipoRelevo = await prisma.tipoRelevo.create({
     *   data: {
     *     // ... data to create a TipoRelevo
     *   }
     * })
     * 
     */
    create<T extends TipoRelevoCreateArgs>(args: SelectSubset<T, TipoRelevoCreateArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoRelevos.
     * @param {TipoRelevoCreateManyArgs} args - Arguments to create many TipoRelevos.
     * @example
     * // Create many TipoRelevos
     * const tipoRelevo = await prisma.tipoRelevo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoRelevoCreateManyArgs>(args?: SelectSubset<T, TipoRelevoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoRelevos and returns the data saved in the database.
     * @param {TipoRelevoCreateManyAndReturnArgs} args - Arguments to create many TipoRelevos.
     * @example
     * // Create many TipoRelevos
     * const tipoRelevo = await prisma.tipoRelevo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoRelevos and only return the `id_relevo`
     * const tipoRelevoWithId_relevoOnly = await prisma.tipoRelevo.createManyAndReturn({
     *   select: { id_relevo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoRelevoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoRelevoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoRelevo.
     * @param {TipoRelevoDeleteArgs} args - Arguments to delete one TipoRelevo.
     * @example
     * // Delete one TipoRelevo
     * const TipoRelevo = await prisma.tipoRelevo.delete({
     *   where: {
     *     // ... filter to delete one TipoRelevo
     *   }
     * })
     * 
     */
    delete<T extends TipoRelevoDeleteArgs>(args: SelectSubset<T, TipoRelevoDeleteArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoRelevo.
     * @param {TipoRelevoUpdateArgs} args - Arguments to update one TipoRelevo.
     * @example
     * // Update one TipoRelevo
     * const tipoRelevo = await prisma.tipoRelevo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoRelevoUpdateArgs>(args: SelectSubset<T, TipoRelevoUpdateArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoRelevos.
     * @param {TipoRelevoDeleteManyArgs} args - Arguments to filter TipoRelevos to delete.
     * @example
     * // Delete a few TipoRelevos
     * const { count } = await prisma.tipoRelevo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoRelevoDeleteManyArgs>(args?: SelectSubset<T, TipoRelevoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoRelevos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRelevoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoRelevos
     * const tipoRelevo = await prisma.tipoRelevo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoRelevoUpdateManyArgs>(args: SelectSubset<T, TipoRelevoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoRelevos and returns the data updated in the database.
     * @param {TipoRelevoUpdateManyAndReturnArgs} args - Arguments to update many TipoRelevos.
     * @example
     * // Update many TipoRelevos
     * const tipoRelevo = await prisma.tipoRelevo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoRelevos and only return the `id_relevo`
     * const tipoRelevoWithId_relevoOnly = await prisma.tipoRelevo.updateManyAndReturn({
     *   select: { id_relevo: true },
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
    updateManyAndReturn<T extends TipoRelevoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoRelevoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoRelevo.
     * @param {TipoRelevoUpsertArgs} args - Arguments to update or create a TipoRelevo.
     * @example
     * // Update or create a TipoRelevo
     * const tipoRelevo = await prisma.tipoRelevo.upsert({
     *   create: {
     *     // ... data to create a TipoRelevo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoRelevo we want to update
     *   }
     * })
     */
    upsert<T extends TipoRelevoUpsertArgs>(args: SelectSubset<T, TipoRelevoUpsertArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoRelevos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRelevoCountArgs} args - Arguments to filter TipoRelevos to count.
     * @example
     * // Count the number of TipoRelevos
     * const count = await prisma.tipoRelevo.count({
     *   where: {
     *     // ... the filter for the TipoRelevos we want to count
     *   }
     * })
    **/
    count<T extends TipoRelevoCountArgs>(
      args?: Subset<T, TipoRelevoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoRelevoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoRelevo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRelevoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoRelevoAggregateArgs>(args: Subset<T, TipoRelevoAggregateArgs>): Prisma.PrismaPromise<GetTipoRelevoAggregateType<T>>

    /**
     * Group by TipoRelevo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoRelevoGroupByArgs} args - Group by arguments.
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
      T extends TipoRelevoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoRelevoGroupByArgs['orderBy'] }
        : { orderBy?: TipoRelevoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoRelevoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoRelevoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoRelevo model
   */
  readonly fields: TipoRelevoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoRelevo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoRelevoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amostras<T extends TipoRelevo$amostrasArgs<ExtArgs> = {}>(args?: Subset<T, TipoRelevo$amostrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoRelevo model
   */
  interface TipoRelevoFieldRefs {
    readonly id_relevo: FieldRef<"TipoRelevo", 'Int'>
    readonly nm_relevo: FieldRef<"TipoRelevo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoRelevo findUnique
   */
  export type TipoRelevoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRelevo to fetch.
     */
    where: TipoRelevoWhereUniqueInput
  }

  /**
   * TipoRelevo findUniqueOrThrow
   */
  export type TipoRelevoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRelevo to fetch.
     */
    where: TipoRelevoWhereUniqueInput
  }

  /**
   * TipoRelevo findFirst
   */
  export type TipoRelevoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRelevo to fetch.
     */
    where?: TipoRelevoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRelevos to fetch.
     */
    orderBy?: TipoRelevoOrderByWithRelationInput | TipoRelevoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRelevos.
     */
    cursor?: TipoRelevoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRelevos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRelevos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRelevos.
     */
    distinct?: TipoRelevoScalarFieldEnum | TipoRelevoScalarFieldEnum[]
  }

  /**
   * TipoRelevo findFirstOrThrow
   */
  export type TipoRelevoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRelevo to fetch.
     */
    where?: TipoRelevoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRelevos to fetch.
     */
    orderBy?: TipoRelevoOrderByWithRelationInput | TipoRelevoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoRelevos.
     */
    cursor?: TipoRelevoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRelevos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRelevos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoRelevos.
     */
    distinct?: TipoRelevoScalarFieldEnum | TipoRelevoScalarFieldEnum[]
  }

  /**
   * TipoRelevo findMany
   */
  export type TipoRelevoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * Filter, which TipoRelevos to fetch.
     */
    where?: TipoRelevoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoRelevos to fetch.
     */
    orderBy?: TipoRelevoOrderByWithRelationInput | TipoRelevoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoRelevos.
     */
    cursor?: TipoRelevoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoRelevos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoRelevos.
     */
    skip?: number
    distinct?: TipoRelevoScalarFieldEnum | TipoRelevoScalarFieldEnum[]
  }

  /**
   * TipoRelevo create
   */
  export type TipoRelevoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoRelevo.
     */
    data: XOR<TipoRelevoCreateInput, TipoRelevoUncheckedCreateInput>
  }

  /**
   * TipoRelevo createMany
   */
  export type TipoRelevoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoRelevos.
     */
    data: TipoRelevoCreateManyInput | TipoRelevoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoRelevo createManyAndReturn
   */
  export type TipoRelevoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoRelevos.
     */
    data: TipoRelevoCreateManyInput | TipoRelevoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoRelevo update
   */
  export type TipoRelevoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoRelevo.
     */
    data: XOR<TipoRelevoUpdateInput, TipoRelevoUncheckedUpdateInput>
    /**
     * Choose, which TipoRelevo to update.
     */
    where: TipoRelevoWhereUniqueInput
  }

  /**
   * TipoRelevo updateMany
   */
  export type TipoRelevoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoRelevos.
     */
    data: XOR<TipoRelevoUpdateManyMutationInput, TipoRelevoUncheckedUpdateManyInput>
    /**
     * Filter which TipoRelevos to update
     */
    where?: TipoRelevoWhereInput
    /**
     * Limit how many TipoRelevos to update.
     */
    limit?: number
  }

  /**
   * TipoRelevo updateManyAndReturn
   */
  export type TipoRelevoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * The data used to update TipoRelevos.
     */
    data: XOR<TipoRelevoUpdateManyMutationInput, TipoRelevoUncheckedUpdateManyInput>
    /**
     * Filter which TipoRelevos to update
     */
    where?: TipoRelevoWhereInput
    /**
     * Limit how many TipoRelevos to update.
     */
    limit?: number
  }

  /**
   * TipoRelevo upsert
   */
  export type TipoRelevoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoRelevo to update in case it exists.
     */
    where: TipoRelevoWhereUniqueInput
    /**
     * In case the TipoRelevo found by the `where` argument doesn't exist, create a new TipoRelevo with this data.
     */
    create: XOR<TipoRelevoCreateInput, TipoRelevoUncheckedCreateInput>
    /**
     * In case the TipoRelevo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoRelevoUpdateInput, TipoRelevoUncheckedUpdateInput>
  }

  /**
   * TipoRelevo delete
   */
  export type TipoRelevoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    /**
     * Filter which TipoRelevo to delete.
     */
    where: TipoRelevoWhereUniqueInput
  }

  /**
   * TipoRelevo deleteMany
   */
  export type TipoRelevoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoRelevos to delete
     */
    where?: TipoRelevoWhereInput
    /**
     * Limit how many TipoRelevos to delete.
     */
    limit?: number
  }

  /**
   * TipoRelevo.amostras
   */
  export type TipoRelevo$amostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    where?: AmostraWhereInput
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    cursor?: AmostraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraScalarFieldEnum | AmostraScalarFieldEnum[]
  }

  /**
   * TipoRelevo without action
   */
  export type TipoRelevoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
  }


  /**
   * Model TipoSolo
   */

  export type AggregateTipoSolo = {
    _count: TipoSoloCountAggregateOutputType | null
    _avg: TipoSoloAvgAggregateOutputType | null
    _sum: TipoSoloSumAggregateOutputType | null
    _min: TipoSoloMinAggregateOutputType | null
    _max: TipoSoloMaxAggregateOutputType | null
  }

  export type TipoSoloAvgAggregateOutputType = {
    id_solo: number | null
  }

  export type TipoSoloSumAggregateOutputType = {
    id_solo: number | null
  }

  export type TipoSoloMinAggregateOutputType = {
    id_solo: number | null
    nm_solo: string | null
  }

  export type TipoSoloMaxAggregateOutputType = {
    id_solo: number | null
    nm_solo: string | null
  }

  export type TipoSoloCountAggregateOutputType = {
    id_solo: number
    nm_solo: number
    _all: number
  }


  export type TipoSoloAvgAggregateInputType = {
    id_solo?: true
  }

  export type TipoSoloSumAggregateInputType = {
    id_solo?: true
  }

  export type TipoSoloMinAggregateInputType = {
    id_solo?: true
    nm_solo?: true
  }

  export type TipoSoloMaxAggregateInputType = {
    id_solo?: true
    nm_solo?: true
  }

  export type TipoSoloCountAggregateInputType = {
    id_solo?: true
    nm_solo?: true
    _all?: true
  }

  export type TipoSoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoSolo to aggregate.
     */
    where?: TipoSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSolos to fetch.
     */
    orderBy?: TipoSoloOrderByWithRelationInput | TipoSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoSolos
    **/
    _count?: true | TipoSoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoSoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoSoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoSoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoSoloMaxAggregateInputType
  }

  export type GetTipoSoloAggregateType<T extends TipoSoloAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoSolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoSolo[P]>
      : GetScalarType<T[P], AggregateTipoSolo[P]>
  }




  export type TipoSoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoSoloWhereInput
    orderBy?: TipoSoloOrderByWithAggregationInput | TipoSoloOrderByWithAggregationInput[]
    by: TipoSoloScalarFieldEnum[] | TipoSoloScalarFieldEnum
    having?: TipoSoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoSoloCountAggregateInputType | true
    _avg?: TipoSoloAvgAggregateInputType
    _sum?: TipoSoloSumAggregateInputType
    _min?: TipoSoloMinAggregateInputType
    _max?: TipoSoloMaxAggregateInputType
  }

  export type TipoSoloGroupByOutputType = {
    id_solo: number
    nm_solo: string
    _count: TipoSoloCountAggregateOutputType | null
    _avg: TipoSoloAvgAggregateOutputType | null
    _sum: TipoSoloSumAggregateOutputType | null
    _min: TipoSoloMinAggregateOutputType | null
    _max: TipoSoloMaxAggregateOutputType | null
  }

  type GetTipoSoloGroupByPayload<T extends TipoSoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoSoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoSoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoSoloGroupByOutputType[P]>
            : GetScalarType<T[P], TipoSoloGroupByOutputType[P]>
        }
      >
    >


  export type TipoSoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_solo?: boolean
    nm_solo?: boolean
    amostras?: boolean | TipoSolo$amostrasArgs<ExtArgs>
    _count?: boolean | TipoSoloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoSolo"]>

  export type TipoSoloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_solo?: boolean
    nm_solo?: boolean
  }, ExtArgs["result"]["tipoSolo"]>

  export type TipoSoloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_solo?: boolean
    nm_solo?: boolean
  }, ExtArgs["result"]["tipoSolo"]>

  export type TipoSoloSelectScalar = {
    id_solo?: boolean
    nm_solo?: boolean
  }

  export type TipoSoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_solo" | "nm_solo", ExtArgs["result"]["tipoSolo"]>
  export type TipoSoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostras?: boolean | TipoSolo$amostrasArgs<ExtArgs>
    _count?: boolean | TipoSoloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoSoloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoSoloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoSoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoSolo"
    objects: {
      amostras: Prisma.$AmostraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_solo: number
      nm_solo: string
    }, ExtArgs["result"]["tipoSolo"]>
    composites: {}
  }

  type TipoSoloGetPayload<S extends boolean | null | undefined | TipoSoloDefaultArgs> = $Result.GetResult<Prisma.$TipoSoloPayload, S>

  type TipoSoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoSoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoSoloCountAggregateInputType | true
    }

  export interface TipoSoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoSolo'], meta: { name: 'TipoSolo' } }
    /**
     * Find zero or one TipoSolo that matches the filter.
     * @param {TipoSoloFindUniqueArgs} args - Arguments to find a TipoSolo
     * @example
     * // Get one TipoSolo
     * const tipoSolo = await prisma.tipoSolo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoSoloFindUniqueArgs>(args: SelectSubset<T, TipoSoloFindUniqueArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoSolo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoSoloFindUniqueOrThrowArgs} args - Arguments to find a TipoSolo
     * @example
     * // Get one TipoSolo
     * const tipoSolo = await prisma.tipoSolo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoSoloFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoSoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoSolo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSoloFindFirstArgs} args - Arguments to find a TipoSolo
     * @example
     * // Get one TipoSolo
     * const tipoSolo = await prisma.tipoSolo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoSoloFindFirstArgs>(args?: SelectSubset<T, TipoSoloFindFirstArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoSolo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSoloFindFirstOrThrowArgs} args - Arguments to find a TipoSolo
     * @example
     * // Get one TipoSolo
     * const tipoSolo = await prisma.tipoSolo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoSoloFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoSoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoSolos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoSolos
     * const tipoSolos = await prisma.tipoSolo.findMany()
     * 
     * // Get first 10 TipoSolos
     * const tipoSolos = await prisma.tipoSolo.findMany({ take: 10 })
     * 
     * // Only select the `id_solo`
     * const tipoSoloWithId_soloOnly = await prisma.tipoSolo.findMany({ select: { id_solo: true } })
     * 
     */
    findMany<T extends TipoSoloFindManyArgs>(args?: SelectSubset<T, TipoSoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoSolo.
     * @param {TipoSoloCreateArgs} args - Arguments to create a TipoSolo.
     * @example
     * // Create one TipoSolo
     * const TipoSolo = await prisma.tipoSolo.create({
     *   data: {
     *     // ... data to create a TipoSolo
     *   }
     * })
     * 
     */
    create<T extends TipoSoloCreateArgs>(args: SelectSubset<T, TipoSoloCreateArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoSolos.
     * @param {TipoSoloCreateManyArgs} args - Arguments to create many TipoSolos.
     * @example
     * // Create many TipoSolos
     * const tipoSolo = await prisma.tipoSolo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoSoloCreateManyArgs>(args?: SelectSubset<T, TipoSoloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoSolos and returns the data saved in the database.
     * @param {TipoSoloCreateManyAndReturnArgs} args - Arguments to create many TipoSolos.
     * @example
     * // Create many TipoSolos
     * const tipoSolo = await prisma.tipoSolo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoSolos and only return the `id_solo`
     * const tipoSoloWithId_soloOnly = await prisma.tipoSolo.createManyAndReturn({
     *   select: { id_solo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoSoloCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoSoloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoSolo.
     * @param {TipoSoloDeleteArgs} args - Arguments to delete one TipoSolo.
     * @example
     * // Delete one TipoSolo
     * const TipoSolo = await prisma.tipoSolo.delete({
     *   where: {
     *     // ... filter to delete one TipoSolo
     *   }
     * })
     * 
     */
    delete<T extends TipoSoloDeleteArgs>(args: SelectSubset<T, TipoSoloDeleteArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoSolo.
     * @param {TipoSoloUpdateArgs} args - Arguments to update one TipoSolo.
     * @example
     * // Update one TipoSolo
     * const tipoSolo = await prisma.tipoSolo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoSoloUpdateArgs>(args: SelectSubset<T, TipoSoloUpdateArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoSolos.
     * @param {TipoSoloDeleteManyArgs} args - Arguments to filter TipoSolos to delete.
     * @example
     * // Delete a few TipoSolos
     * const { count } = await prisma.tipoSolo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoSoloDeleteManyArgs>(args?: SelectSubset<T, TipoSoloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoSolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoSolos
     * const tipoSolo = await prisma.tipoSolo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoSoloUpdateManyArgs>(args: SelectSubset<T, TipoSoloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoSolos and returns the data updated in the database.
     * @param {TipoSoloUpdateManyAndReturnArgs} args - Arguments to update many TipoSolos.
     * @example
     * // Update many TipoSolos
     * const tipoSolo = await prisma.tipoSolo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoSolos and only return the `id_solo`
     * const tipoSoloWithId_soloOnly = await prisma.tipoSolo.updateManyAndReturn({
     *   select: { id_solo: true },
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
    updateManyAndReturn<T extends TipoSoloUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoSoloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoSolo.
     * @param {TipoSoloUpsertArgs} args - Arguments to update or create a TipoSolo.
     * @example
     * // Update or create a TipoSolo
     * const tipoSolo = await prisma.tipoSolo.upsert({
     *   create: {
     *     // ... data to create a TipoSolo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoSolo we want to update
     *   }
     * })
     */
    upsert<T extends TipoSoloUpsertArgs>(args: SelectSubset<T, TipoSoloUpsertArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoSolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSoloCountArgs} args - Arguments to filter TipoSolos to count.
     * @example
     * // Count the number of TipoSolos
     * const count = await prisma.tipoSolo.count({
     *   where: {
     *     // ... the filter for the TipoSolos we want to count
     *   }
     * })
    **/
    count<T extends TipoSoloCountArgs>(
      args?: Subset<T, TipoSoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoSoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoSolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoSoloAggregateArgs>(args: Subset<T, TipoSoloAggregateArgs>): Prisma.PrismaPromise<GetTipoSoloAggregateType<T>>

    /**
     * Group by TipoSolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSoloGroupByArgs} args - Group by arguments.
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
      T extends TipoSoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoSoloGroupByArgs['orderBy'] }
        : { orderBy?: TipoSoloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoSoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoSoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoSolo model
   */
  readonly fields: TipoSoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoSolo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoSoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amostras<T extends TipoSolo$amostrasArgs<ExtArgs> = {}>(args?: Subset<T, TipoSolo$amostrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoSolo model
   */
  interface TipoSoloFieldRefs {
    readonly id_solo: FieldRef<"TipoSolo", 'Int'>
    readonly nm_solo: FieldRef<"TipoSolo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoSolo findUnique
   */
  export type TipoSoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * Filter, which TipoSolo to fetch.
     */
    where: TipoSoloWhereUniqueInput
  }

  /**
   * TipoSolo findUniqueOrThrow
   */
  export type TipoSoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * Filter, which TipoSolo to fetch.
     */
    where: TipoSoloWhereUniqueInput
  }

  /**
   * TipoSolo findFirst
   */
  export type TipoSoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * Filter, which TipoSolo to fetch.
     */
    where?: TipoSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSolos to fetch.
     */
    orderBy?: TipoSoloOrderByWithRelationInput | TipoSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoSolos.
     */
    cursor?: TipoSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoSolos.
     */
    distinct?: TipoSoloScalarFieldEnum | TipoSoloScalarFieldEnum[]
  }

  /**
   * TipoSolo findFirstOrThrow
   */
  export type TipoSoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * Filter, which TipoSolo to fetch.
     */
    where?: TipoSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSolos to fetch.
     */
    orderBy?: TipoSoloOrderByWithRelationInput | TipoSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoSolos.
     */
    cursor?: TipoSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoSolos.
     */
    distinct?: TipoSoloScalarFieldEnum | TipoSoloScalarFieldEnum[]
  }

  /**
   * TipoSolo findMany
   */
  export type TipoSoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * Filter, which TipoSolos to fetch.
     */
    where?: TipoSoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSolos to fetch.
     */
    orderBy?: TipoSoloOrderByWithRelationInput | TipoSoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoSolos.
     */
    cursor?: TipoSoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSolos.
     */
    skip?: number
    distinct?: TipoSoloScalarFieldEnum | TipoSoloScalarFieldEnum[]
  }

  /**
   * TipoSolo create
   */
  export type TipoSoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoSolo.
     */
    data: XOR<TipoSoloCreateInput, TipoSoloUncheckedCreateInput>
  }

  /**
   * TipoSolo createMany
   */
  export type TipoSoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoSolos.
     */
    data: TipoSoloCreateManyInput | TipoSoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoSolo createManyAndReturn
   */
  export type TipoSoloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * The data used to create many TipoSolos.
     */
    data: TipoSoloCreateManyInput | TipoSoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoSolo update
   */
  export type TipoSoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoSolo.
     */
    data: XOR<TipoSoloUpdateInput, TipoSoloUncheckedUpdateInput>
    /**
     * Choose, which TipoSolo to update.
     */
    where: TipoSoloWhereUniqueInput
  }

  /**
   * TipoSolo updateMany
   */
  export type TipoSoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoSolos.
     */
    data: XOR<TipoSoloUpdateManyMutationInput, TipoSoloUncheckedUpdateManyInput>
    /**
     * Filter which TipoSolos to update
     */
    where?: TipoSoloWhereInput
    /**
     * Limit how many TipoSolos to update.
     */
    limit?: number
  }

  /**
   * TipoSolo updateManyAndReturn
   */
  export type TipoSoloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * The data used to update TipoSolos.
     */
    data: XOR<TipoSoloUpdateManyMutationInput, TipoSoloUncheckedUpdateManyInput>
    /**
     * Filter which TipoSolos to update
     */
    where?: TipoSoloWhereInput
    /**
     * Limit how many TipoSolos to update.
     */
    limit?: number
  }

  /**
   * TipoSolo upsert
   */
  export type TipoSoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoSolo to update in case it exists.
     */
    where: TipoSoloWhereUniqueInput
    /**
     * In case the TipoSolo found by the `where` argument doesn't exist, create a new TipoSolo with this data.
     */
    create: XOR<TipoSoloCreateInput, TipoSoloUncheckedCreateInput>
    /**
     * In case the TipoSolo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoSoloUpdateInput, TipoSoloUncheckedUpdateInput>
  }

  /**
   * TipoSolo delete
   */
  export type TipoSoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    /**
     * Filter which TipoSolo to delete.
     */
    where: TipoSoloWhereUniqueInput
  }

  /**
   * TipoSolo deleteMany
   */
  export type TipoSoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoSolos to delete
     */
    where?: TipoSoloWhereInput
    /**
     * Limit how many TipoSolos to delete.
     */
    limit?: number
  }

  /**
   * TipoSolo.amostras
   */
  export type TipoSolo$amostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    where?: AmostraWhereInput
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    cursor?: AmostraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraScalarFieldEnum | AmostraScalarFieldEnum[]
  }

  /**
   * TipoSolo without action
   */
  export type TipoSoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
  }


  /**
   * Model Expedicao
   */

  export type AggregateExpedicao = {
    _count: ExpedicaoCountAggregateOutputType | null
    _avg: ExpedicaoAvgAggregateOutputType | null
    _sum: ExpedicaoSumAggregateOutputType | null
    _min: ExpedicaoMinAggregateOutputType | null
    _max: ExpedicaoMaxAggregateOutputType | null
  }

  export type ExpedicaoAvgAggregateOutputType = {
    id_expedicao: number | null
    id_municipio: number | null
    id_vegetacao: number | null
  }

  export type ExpedicaoSumAggregateOutputType = {
    id_expedicao: number | null
    id_municipio: number | null
    id_vegetacao: number | null
  }

  export type ExpedicaoMinAggregateOutputType = {
    id_expedicao: number | null
    dt_expedicao: Date | null
    id_municipio: number | null
    id_vegetacao: number | null
  }

  export type ExpedicaoMaxAggregateOutputType = {
    id_expedicao: number | null
    dt_expedicao: Date | null
    id_municipio: number | null
    id_vegetacao: number | null
  }

  export type ExpedicaoCountAggregateOutputType = {
    id_expedicao: number
    dt_expedicao: number
    id_municipio: number
    id_vegetacao: number
    _all: number
  }


  export type ExpedicaoAvgAggregateInputType = {
    id_expedicao?: true
    id_municipio?: true
    id_vegetacao?: true
  }

  export type ExpedicaoSumAggregateInputType = {
    id_expedicao?: true
    id_municipio?: true
    id_vegetacao?: true
  }

  export type ExpedicaoMinAggregateInputType = {
    id_expedicao?: true
    dt_expedicao?: true
    id_municipio?: true
    id_vegetacao?: true
  }

  export type ExpedicaoMaxAggregateInputType = {
    id_expedicao?: true
    dt_expedicao?: true
    id_municipio?: true
    id_vegetacao?: true
  }

  export type ExpedicaoCountAggregateInputType = {
    id_expedicao?: true
    dt_expedicao?: true
    id_municipio?: true
    id_vegetacao?: true
    _all?: true
  }

  export type ExpedicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expedicao to aggregate.
     */
    where?: ExpedicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedicaos to fetch.
     */
    orderBy?: ExpedicaoOrderByWithRelationInput | ExpedicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpedicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expedicaos
    **/
    _count?: true | ExpedicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpedicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpedicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpedicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpedicaoMaxAggregateInputType
  }

  export type GetExpedicaoAggregateType<T extends ExpedicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateExpedicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpedicao[P]>
      : GetScalarType<T[P], AggregateExpedicao[P]>
  }




  export type ExpedicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedicaoWhereInput
    orderBy?: ExpedicaoOrderByWithAggregationInput | ExpedicaoOrderByWithAggregationInput[]
    by: ExpedicaoScalarFieldEnum[] | ExpedicaoScalarFieldEnum
    having?: ExpedicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpedicaoCountAggregateInputType | true
    _avg?: ExpedicaoAvgAggregateInputType
    _sum?: ExpedicaoSumAggregateInputType
    _min?: ExpedicaoMinAggregateInputType
    _max?: ExpedicaoMaxAggregateInputType
  }

  export type ExpedicaoGroupByOutputType = {
    id_expedicao: number
    dt_expedicao: Date
    id_municipio: number
    id_vegetacao: number | null
    _count: ExpedicaoCountAggregateOutputType | null
    _avg: ExpedicaoAvgAggregateOutputType | null
    _sum: ExpedicaoSumAggregateOutputType | null
    _min: ExpedicaoMinAggregateOutputType | null
    _max: ExpedicaoMaxAggregateOutputType | null
  }

  type GetExpedicaoGroupByPayload<T extends ExpedicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpedicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpedicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpedicaoGroupByOutputType[P]>
            : GetScalarType<T[P], ExpedicaoGroupByOutputType[P]>
        }
      >
    >


  export type ExpedicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expedicao?: boolean
    dt_expedicao?: boolean
    id_municipio?: boolean
    id_vegetacao?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    tipoVegetacao?: boolean | Expedicao$tipoVegetacaoArgs<ExtArgs>
    expedicaoMidia?: boolean | Expedicao$expedicaoMidiaArgs<ExtArgs>
    amostras?: boolean | Expedicao$amostrasArgs<ExtArgs>
    _count?: boolean | ExpedicaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expedicao"]>

  export type ExpedicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expedicao?: boolean
    dt_expedicao?: boolean
    id_municipio?: boolean
    id_vegetacao?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    tipoVegetacao?: boolean | Expedicao$tipoVegetacaoArgs<ExtArgs>
  }, ExtArgs["result"]["expedicao"]>

  export type ExpedicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expedicao?: boolean
    dt_expedicao?: boolean
    id_municipio?: boolean
    id_vegetacao?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    tipoVegetacao?: boolean | Expedicao$tipoVegetacaoArgs<ExtArgs>
  }, ExtArgs["result"]["expedicao"]>

  export type ExpedicaoSelectScalar = {
    id_expedicao?: boolean
    dt_expedicao?: boolean
    id_municipio?: boolean
    id_vegetacao?: boolean
  }

  export type ExpedicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_expedicao" | "dt_expedicao" | "id_municipio" | "id_vegetacao", ExtArgs["result"]["expedicao"]>
  export type ExpedicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    tipoVegetacao?: boolean | Expedicao$tipoVegetacaoArgs<ExtArgs>
    expedicaoMidia?: boolean | Expedicao$expedicaoMidiaArgs<ExtArgs>
    amostras?: boolean | Expedicao$amostrasArgs<ExtArgs>
    _count?: boolean | ExpedicaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpedicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    tipoVegetacao?: boolean | Expedicao$tipoVegetacaoArgs<ExtArgs>
  }
  export type ExpedicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
    tipoVegetacao?: boolean | Expedicao$tipoVegetacaoArgs<ExtArgs>
  }

  export type $ExpedicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expedicao"
    objects: {
      municipio: Prisma.$MunicipioPayload<ExtArgs>
      tipoVegetacao: Prisma.$TipoVegetacaoPayload<ExtArgs> | null
      expedicaoMidia: Prisma.$ExpedicaoMidiaPayload<ExtArgs>[]
      amostras: Prisma.$AmostraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_expedicao: number
      dt_expedicao: Date
      id_municipio: number
      id_vegetacao: number | null
    }, ExtArgs["result"]["expedicao"]>
    composites: {}
  }

  type ExpedicaoGetPayload<S extends boolean | null | undefined | ExpedicaoDefaultArgs> = $Result.GetResult<Prisma.$ExpedicaoPayload, S>

  type ExpedicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpedicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpedicaoCountAggregateInputType | true
    }

  export interface ExpedicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expedicao'], meta: { name: 'Expedicao' } }
    /**
     * Find zero or one Expedicao that matches the filter.
     * @param {ExpedicaoFindUniqueArgs} args - Arguments to find a Expedicao
     * @example
     * // Get one Expedicao
     * const expedicao = await prisma.expedicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpedicaoFindUniqueArgs>(args: SelectSubset<T, ExpedicaoFindUniqueArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expedicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpedicaoFindUniqueOrThrowArgs} args - Arguments to find a Expedicao
     * @example
     * // Get one Expedicao
     * const expedicao = await prisma.expedicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpedicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpedicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expedicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoFindFirstArgs} args - Arguments to find a Expedicao
     * @example
     * // Get one Expedicao
     * const expedicao = await prisma.expedicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpedicaoFindFirstArgs>(args?: SelectSubset<T, ExpedicaoFindFirstArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expedicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoFindFirstOrThrowArgs} args - Arguments to find a Expedicao
     * @example
     * // Get one Expedicao
     * const expedicao = await prisma.expedicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpedicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpedicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expedicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expedicaos
     * const expedicaos = await prisma.expedicao.findMany()
     * 
     * // Get first 10 Expedicaos
     * const expedicaos = await prisma.expedicao.findMany({ take: 10 })
     * 
     * // Only select the `id_expedicao`
     * const expedicaoWithId_expedicaoOnly = await prisma.expedicao.findMany({ select: { id_expedicao: true } })
     * 
     */
    findMany<T extends ExpedicaoFindManyArgs>(args?: SelectSubset<T, ExpedicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expedicao.
     * @param {ExpedicaoCreateArgs} args - Arguments to create a Expedicao.
     * @example
     * // Create one Expedicao
     * const Expedicao = await prisma.expedicao.create({
     *   data: {
     *     // ... data to create a Expedicao
     *   }
     * })
     * 
     */
    create<T extends ExpedicaoCreateArgs>(args: SelectSubset<T, ExpedicaoCreateArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expedicaos.
     * @param {ExpedicaoCreateManyArgs} args - Arguments to create many Expedicaos.
     * @example
     * // Create many Expedicaos
     * const expedicao = await prisma.expedicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpedicaoCreateManyArgs>(args?: SelectSubset<T, ExpedicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expedicaos and returns the data saved in the database.
     * @param {ExpedicaoCreateManyAndReturnArgs} args - Arguments to create many Expedicaos.
     * @example
     * // Create many Expedicaos
     * const expedicao = await prisma.expedicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expedicaos and only return the `id_expedicao`
     * const expedicaoWithId_expedicaoOnly = await prisma.expedicao.createManyAndReturn({
     *   select: { id_expedicao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpedicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpedicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expedicao.
     * @param {ExpedicaoDeleteArgs} args - Arguments to delete one Expedicao.
     * @example
     * // Delete one Expedicao
     * const Expedicao = await prisma.expedicao.delete({
     *   where: {
     *     // ... filter to delete one Expedicao
     *   }
     * })
     * 
     */
    delete<T extends ExpedicaoDeleteArgs>(args: SelectSubset<T, ExpedicaoDeleteArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expedicao.
     * @param {ExpedicaoUpdateArgs} args - Arguments to update one Expedicao.
     * @example
     * // Update one Expedicao
     * const expedicao = await prisma.expedicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpedicaoUpdateArgs>(args: SelectSubset<T, ExpedicaoUpdateArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expedicaos.
     * @param {ExpedicaoDeleteManyArgs} args - Arguments to filter Expedicaos to delete.
     * @example
     * // Delete a few Expedicaos
     * const { count } = await prisma.expedicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpedicaoDeleteManyArgs>(args?: SelectSubset<T, ExpedicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expedicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expedicaos
     * const expedicao = await prisma.expedicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpedicaoUpdateManyArgs>(args: SelectSubset<T, ExpedicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expedicaos and returns the data updated in the database.
     * @param {ExpedicaoUpdateManyAndReturnArgs} args - Arguments to update many Expedicaos.
     * @example
     * // Update many Expedicaos
     * const expedicao = await prisma.expedicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expedicaos and only return the `id_expedicao`
     * const expedicaoWithId_expedicaoOnly = await prisma.expedicao.updateManyAndReturn({
     *   select: { id_expedicao: true },
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
    updateManyAndReturn<T extends ExpedicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpedicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expedicao.
     * @param {ExpedicaoUpsertArgs} args - Arguments to update or create a Expedicao.
     * @example
     * // Update or create a Expedicao
     * const expedicao = await prisma.expedicao.upsert({
     *   create: {
     *     // ... data to create a Expedicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expedicao we want to update
     *   }
     * })
     */
    upsert<T extends ExpedicaoUpsertArgs>(args: SelectSubset<T, ExpedicaoUpsertArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expedicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoCountArgs} args - Arguments to filter Expedicaos to count.
     * @example
     * // Count the number of Expedicaos
     * const count = await prisma.expedicao.count({
     *   where: {
     *     // ... the filter for the Expedicaos we want to count
     *   }
     * })
    **/
    count<T extends ExpedicaoCountArgs>(
      args?: Subset<T, ExpedicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpedicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expedicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpedicaoAggregateArgs>(args: Subset<T, ExpedicaoAggregateArgs>): Prisma.PrismaPromise<GetExpedicaoAggregateType<T>>

    /**
     * Group by Expedicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoGroupByArgs} args - Group by arguments.
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
      T extends ExpedicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpedicaoGroupByArgs['orderBy'] }
        : { orderBy?: ExpedicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpedicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpedicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expedicao model
   */
  readonly fields: ExpedicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expedicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpedicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipio<T extends MunicipioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipioDefaultArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoVegetacao<T extends Expedicao$tipoVegetacaoArgs<ExtArgs> = {}>(args?: Subset<T, Expedicao$tipoVegetacaoArgs<ExtArgs>>): Prisma__TipoVegetacaoClient<$Result.GetResult<Prisma.$TipoVegetacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expedicaoMidia<T extends Expedicao$expedicaoMidiaArgs<ExtArgs> = {}>(args?: Subset<T, Expedicao$expedicaoMidiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amostras<T extends Expedicao$amostrasArgs<ExtArgs> = {}>(args?: Subset<T, Expedicao$amostrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Expedicao model
   */
  interface ExpedicaoFieldRefs {
    readonly id_expedicao: FieldRef<"Expedicao", 'Int'>
    readonly dt_expedicao: FieldRef<"Expedicao", 'DateTime'>
    readonly id_municipio: FieldRef<"Expedicao", 'Int'>
    readonly id_vegetacao: FieldRef<"Expedicao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expedicao findUnique
   */
  export type ExpedicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * Filter, which Expedicao to fetch.
     */
    where: ExpedicaoWhereUniqueInput
  }

  /**
   * Expedicao findUniqueOrThrow
   */
  export type ExpedicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * Filter, which Expedicao to fetch.
     */
    where: ExpedicaoWhereUniqueInput
  }

  /**
   * Expedicao findFirst
   */
  export type ExpedicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * Filter, which Expedicao to fetch.
     */
    where?: ExpedicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedicaos to fetch.
     */
    orderBy?: ExpedicaoOrderByWithRelationInput | ExpedicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expedicaos.
     */
    cursor?: ExpedicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expedicaos.
     */
    distinct?: ExpedicaoScalarFieldEnum | ExpedicaoScalarFieldEnum[]
  }

  /**
   * Expedicao findFirstOrThrow
   */
  export type ExpedicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * Filter, which Expedicao to fetch.
     */
    where?: ExpedicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedicaos to fetch.
     */
    orderBy?: ExpedicaoOrderByWithRelationInput | ExpedicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expedicaos.
     */
    cursor?: ExpedicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expedicaos.
     */
    distinct?: ExpedicaoScalarFieldEnum | ExpedicaoScalarFieldEnum[]
  }

  /**
   * Expedicao findMany
   */
  export type ExpedicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * Filter, which Expedicaos to fetch.
     */
    where?: ExpedicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expedicaos to fetch.
     */
    orderBy?: ExpedicaoOrderByWithRelationInput | ExpedicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expedicaos.
     */
    cursor?: ExpedicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expedicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expedicaos.
     */
    skip?: number
    distinct?: ExpedicaoScalarFieldEnum | ExpedicaoScalarFieldEnum[]
  }

  /**
   * Expedicao create
   */
  export type ExpedicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Expedicao.
     */
    data: XOR<ExpedicaoCreateInput, ExpedicaoUncheckedCreateInput>
  }

  /**
   * Expedicao createMany
   */
  export type ExpedicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expedicaos.
     */
    data: ExpedicaoCreateManyInput | ExpedicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expedicao createManyAndReturn
   */
  export type ExpedicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Expedicaos.
     */
    data: ExpedicaoCreateManyInput | ExpedicaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expedicao update
   */
  export type ExpedicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Expedicao.
     */
    data: XOR<ExpedicaoUpdateInput, ExpedicaoUncheckedUpdateInput>
    /**
     * Choose, which Expedicao to update.
     */
    where: ExpedicaoWhereUniqueInput
  }

  /**
   * Expedicao updateMany
   */
  export type ExpedicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expedicaos.
     */
    data: XOR<ExpedicaoUpdateManyMutationInput, ExpedicaoUncheckedUpdateManyInput>
    /**
     * Filter which Expedicaos to update
     */
    where?: ExpedicaoWhereInput
    /**
     * Limit how many Expedicaos to update.
     */
    limit?: number
  }

  /**
   * Expedicao updateManyAndReturn
   */
  export type ExpedicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * The data used to update Expedicaos.
     */
    data: XOR<ExpedicaoUpdateManyMutationInput, ExpedicaoUncheckedUpdateManyInput>
    /**
     * Filter which Expedicaos to update
     */
    where?: ExpedicaoWhereInput
    /**
     * Limit how many Expedicaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expedicao upsert
   */
  export type ExpedicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Expedicao to update in case it exists.
     */
    where: ExpedicaoWhereUniqueInput
    /**
     * In case the Expedicao found by the `where` argument doesn't exist, create a new Expedicao with this data.
     */
    create: XOR<ExpedicaoCreateInput, ExpedicaoUncheckedCreateInput>
    /**
     * In case the Expedicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpedicaoUpdateInput, ExpedicaoUncheckedUpdateInput>
  }

  /**
   * Expedicao delete
   */
  export type ExpedicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    /**
     * Filter which Expedicao to delete.
     */
    where: ExpedicaoWhereUniqueInput
  }

  /**
   * Expedicao deleteMany
   */
  export type ExpedicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expedicaos to delete
     */
    where?: ExpedicaoWhereInput
    /**
     * Limit how many Expedicaos to delete.
     */
    limit?: number
  }

  /**
   * Expedicao.tipoVegetacao
   */
  export type Expedicao$tipoVegetacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVegetacao
     */
    select?: TipoVegetacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVegetacao
     */
    omit?: TipoVegetacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVegetacaoInclude<ExtArgs> | null
    where?: TipoVegetacaoWhereInput
  }

  /**
   * Expedicao.expedicaoMidia
   */
  export type Expedicao$expedicaoMidiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    where?: ExpedicaoMidiaWhereInput
    orderBy?: ExpedicaoMidiaOrderByWithRelationInput | ExpedicaoMidiaOrderByWithRelationInput[]
    cursor?: ExpedicaoMidiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpedicaoMidiaScalarFieldEnum | ExpedicaoMidiaScalarFieldEnum[]
  }

  /**
   * Expedicao.amostras
   */
  export type Expedicao$amostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    where?: AmostraWhereInput
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    cursor?: AmostraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraScalarFieldEnum | AmostraScalarFieldEnum[]
  }

  /**
   * Expedicao without action
   */
  export type ExpedicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
  }


  /**
   * Model ExpedicaoMidia
   */

  export type AggregateExpedicaoMidia = {
    _count: ExpedicaoMidiaCountAggregateOutputType | null
    _avg: ExpedicaoMidiaAvgAggregateOutputType | null
    _sum: ExpedicaoMidiaSumAggregateOutputType | null
    _min: ExpedicaoMidiaMinAggregateOutputType | null
    _max: ExpedicaoMidiaMaxAggregateOutputType | null
  }

  export type ExpedicaoMidiaAvgAggregateOutputType = {
    id_expedicaomidia: number | null
    id_expedicao: number | null
  }

  export type ExpedicaoMidiaSumAggregateOutputType = {
    id_expedicaomidia: number | null
    id_expedicao: number | null
  }

  export type ExpedicaoMidiaMinAggregateOutputType = {
    id_expedicaomidia: number | null
    id_expedicao: number | null
    tp_arquivo: string | null
    arquivo: Uint8Array | null
    descricao: string | null
    data_upload: Date | null
  }

  export type ExpedicaoMidiaMaxAggregateOutputType = {
    id_expedicaomidia: number | null
    id_expedicao: number | null
    tp_arquivo: string | null
    arquivo: Uint8Array | null
    descricao: string | null
    data_upload: Date | null
  }

  export type ExpedicaoMidiaCountAggregateOutputType = {
    id_expedicaomidia: number
    id_expedicao: number
    tp_arquivo: number
    arquivo: number
    descricao: number
    data_upload: number
    _all: number
  }


  export type ExpedicaoMidiaAvgAggregateInputType = {
    id_expedicaomidia?: true
    id_expedicao?: true
  }

  export type ExpedicaoMidiaSumAggregateInputType = {
    id_expedicaomidia?: true
    id_expedicao?: true
  }

  export type ExpedicaoMidiaMinAggregateInputType = {
    id_expedicaomidia?: true
    id_expedicao?: true
    tp_arquivo?: true
    arquivo?: true
    descricao?: true
    data_upload?: true
  }

  export type ExpedicaoMidiaMaxAggregateInputType = {
    id_expedicaomidia?: true
    id_expedicao?: true
    tp_arquivo?: true
    arquivo?: true
    descricao?: true
    data_upload?: true
  }

  export type ExpedicaoMidiaCountAggregateInputType = {
    id_expedicaomidia?: true
    id_expedicao?: true
    tp_arquivo?: true
    arquivo?: true
    descricao?: true
    data_upload?: true
    _all?: true
  }

  export type ExpedicaoMidiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpedicaoMidia to aggregate.
     */
    where?: ExpedicaoMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedicaoMidias to fetch.
     */
    orderBy?: ExpedicaoMidiaOrderByWithRelationInput | ExpedicaoMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpedicaoMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedicaoMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedicaoMidias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpedicaoMidias
    **/
    _count?: true | ExpedicaoMidiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpedicaoMidiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpedicaoMidiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpedicaoMidiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpedicaoMidiaMaxAggregateInputType
  }

  export type GetExpedicaoMidiaAggregateType<T extends ExpedicaoMidiaAggregateArgs> = {
        [P in keyof T & keyof AggregateExpedicaoMidia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpedicaoMidia[P]>
      : GetScalarType<T[P], AggregateExpedicaoMidia[P]>
  }




  export type ExpedicaoMidiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpedicaoMidiaWhereInput
    orderBy?: ExpedicaoMidiaOrderByWithAggregationInput | ExpedicaoMidiaOrderByWithAggregationInput[]
    by: ExpedicaoMidiaScalarFieldEnum[] | ExpedicaoMidiaScalarFieldEnum
    having?: ExpedicaoMidiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpedicaoMidiaCountAggregateInputType | true
    _avg?: ExpedicaoMidiaAvgAggregateInputType
    _sum?: ExpedicaoMidiaSumAggregateInputType
    _min?: ExpedicaoMidiaMinAggregateInputType
    _max?: ExpedicaoMidiaMaxAggregateInputType
  }

  export type ExpedicaoMidiaGroupByOutputType = {
    id_expedicaomidia: number
    id_expedicao: number | null
    tp_arquivo: string
    arquivo: Uint8Array
    descricao: string | null
    data_upload: Date
    _count: ExpedicaoMidiaCountAggregateOutputType | null
    _avg: ExpedicaoMidiaAvgAggregateOutputType | null
    _sum: ExpedicaoMidiaSumAggregateOutputType | null
    _min: ExpedicaoMidiaMinAggregateOutputType | null
    _max: ExpedicaoMidiaMaxAggregateOutputType | null
  }

  type GetExpedicaoMidiaGroupByPayload<T extends ExpedicaoMidiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpedicaoMidiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpedicaoMidiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpedicaoMidiaGroupByOutputType[P]>
            : GetScalarType<T[P], ExpedicaoMidiaGroupByOutputType[P]>
        }
      >
    >


  export type ExpedicaoMidiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expedicaomidia?: boolean
    id_expedicao?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
    expedicao?: boolean | ExpedicaoMidia$expedicaoArgs<ExtArgs>
  }, ExtArgs["result"]["expedicaoMidia"]>

  export type ExpedicaoMidiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expedicaomidia?: boolean
    id_expedicao?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
    expedicao?: boolean | ExpedicaoMidia$expedicaoArgs<ExtArgs>
  }, ExtArgs["result"]["expedicaoMidia"]>

  export type ExpedicaoMidiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_expedicaomidia?: boolean
    id_expedicao?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
    expedicao?: boolean | ExpedicaoMidia$expedicaoArgs<ExtArgs>
  }, ExtArgs["result"]["expedicaoMidia"]>

  export type ExpedicaoMidiaSelectScalar = {
    id_expedicaomidia?: boolean
    id_expedicao?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
  }

  export type ExpedicaoMidiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_expedicaomidia" | "id_expedicao" | "tp_arquivo" | "arquivo" | "descricao" | "data_upload", ExtArgs["result"]["expedicaoMidia"]>
  export type ExpedicaoMidiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedicao?: boolean | ExpedicaoMidia$expedicaoArgs<ExtArgs>
  }
  export type ExpedicaoMidiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedicao?: boolean | ExpedicaoMidia$expedicaoArgs<ExtArgs>
  }
  export type ExpedicaoMidiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expedicao?: boolean | ExpedicaoMidia$expedicaoArgs<ExtArgs>
  }

  export type $ExpedicaoMidiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpedicaoMidia"
    objects: {
      expedicao: Prisma.$ExpedicaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_expedicaomidia: number
      id_expedicao: number | null
      tp_arquivo: string
      arquivo: Uint8Array
      descricao: string | null
      data_upload: Date
    }, ExtArgs["result"]["expedicaoMidia"]>
    composites: {}
  }

  type ExpedicaoMidiaGetPayload<S extends boolean | null | undefined | ExpedicaoMidiaDefaultArgs> = $Result.GetResult<Prisma.$ExpedicaoMidiaPayload, S>

  type ExpedicaoMidiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpedicaoMidiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpedicaoMidiaCountAggregateInputType | true
    }

  export interface ExpedicaoMidiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpedicaoMidia'], meta: { name: 'ExpedicaoMidia' } }
    /**
     * Find zero or one ExpedicaoMidia that matches the filter.
     * @param {ExpedicaoMidiaFindUniqueArgs} args - Arguments to find a ExpedicaoMidia
     * @example
     * // Get one ExpedicaoMidia
     * const expedicaoMidia = await prisma.expedicaoMidia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpedicaoMidiaFindUniqueArgs>(args: SelectSubset<T, ExpedicaoMidiaFindUniqueArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpedicaoMidia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpedicaoMidiaFindUniqueOrThrowArgs} args - Arguments to find a ExpedicaoMidia
     * @example
     * // Get one ExpedicaoMidia
     * const expedicaoMidia = await prisma.expedicaoMidia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpedicaoMidiaFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpedicaoMidiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpedicaoMidia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoMidiaFindFirstArgs} args - Arguments to find a ExpedicaoMidia
     * @example
     * // Get one ExpedicaoMidia
     * const expedicaoMidia = await prisma.expedicaoMidia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpedicaoMidiaFindFirstArgs>(args?: SelectSubset<T, ExpedicaoMidiaFindFirstArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpedicaoMidia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoMidiaFindFirstOrThrowArgs} args - Arguments to find a ExpedicaoMidia
     * @example
     * // Get one ExpedicaoMidia
     * const expedicaoMidia = await prisma.expedicaoMidia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpedicaoMidiaFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpedicaoMidiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpedicaoMidias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoMidiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpedicaoMidias
     * const expedicaoMidias = await prisma.expedicaoMidia.findMany()
     * 
     * // Get first 10 ExpedicaoMidias
     * const expedicaoMidias = await prisma.expedicaoMidia.findMany({ take: 10 })
     * 
     * // Only select the `id_expedicaomidia`
     * const expedicaoMidiaWithId_expedicaomidiaOnly = await prisma.expedicaoMidia.findMany({ select: { id_expedicaomidia: true } })
     * 
     */
    findMany<T extends ExpedicaoMidiaFindManyArgs>(args?: SelectSubset<T, ExpedicaoMidiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpedicaoMidia.
     * @param {ExpedicaoMidiaCreateArgs} args - Arguments to create a ExpedicaoMidia.
     * @example
     * // Create one ExpedicaoMidia
     * const ExpedicaoMidia = await prisma.expedicaoMidia.create({
     *   data: {
     *     // ... data to create a ExpedicaoMidia
     *   }
     * })
     * 
     */
    create<T extends ExpedicaoMidiaCreateArgs>(args: SelectSubset<T, ExpedicaoMidiaCreateArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpedicaoMidias.
     * @param {ExpedicaoMidiaCreateManyArgs} args - Arguments to create many ExpedicaoMidias.
     * @example
     * // Create many ExpedicaoMidias
     * const expedicaoMidia = await prisma.expedicaoMidia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpedicaoMidiaCreateManyArgs>(args?: SelectSubset<T, ExpedicaoMidiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpedicaoMidias and returns the data saved in the database.
     * @param {ExpedicaoMidiaCreateManyAndReturnArgs} args - Arguments to create many ExpedicaoMidias.
     * @example
     * // Create many ExpedicaoMidias
     * const expedicaoMidia = await prisma.expedicaoMidia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpedicaoMidias and only return the `id_expedicaomidia`
     * const expedicaoMidiaWithId_expedicaomidiaOnly = await prisma.expedicaoMidia.createManyAndReturn({
     *   select: { id_expedicaomidia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpedicaoMidiaCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpedicaoMidiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpedicaoMidia.
     * @param {ExpedicaoMidiaDeleteArgs} args - Arguments to delete one ExpedicaoMidia.
     * @example
     * // Delete one ExpedicaoMidia
     * const ExpedicaoMidia = await prisma.expedicaoMidia.delete({
     *   where: {
     *     // ... filter to delete one ExpedicaoMidia
     *   }
     * })
     * 
     */
    delete<T extends ExpedicaoMidiaDeleteArgs>(args: SelectSubset<T, ExpedicaoMidiaDeleteArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpedicaoMidia.
     * @param {ExpedicaoMidiaUpdateArgs} args - Arguments to update one ExpedicaoMidia.
     * @example
     * // Update one ExpedicaoMidia
     * const expedicaoMidia = await prisma.expedicaoMidia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpedicaoMidiaUpdateArgs>(args: SelectSubset<T, ExpedicaoMidiaUpdateArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpedicaoMidias.
     * @param {ExpedicaoMidiaDeleteManyArgs} args - Arguments to filter ExpedicaoMidias to delete.
     * @example
     * // Delete a few ExpedicaoMidias
     * const { count } = await prisma.expedicaoMidia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpedicaoMidiaDeleteManyArgs>(args?: SelectSubset<T, ExpedicaoMidiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpedicaoMidias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoMidiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpedicaoMidias
     * const expedicaoMidia = await prisma.expedicaoMidia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpedicaoMidiaUpdateManyArgs>(args: SelectSubset<T, ExpedicaoMidiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpedicaoMidias and returns the data updated in the database.
     * @param {ExpedicaoMidiaUpdateManyAndReturnArgs} args - Arguments to update many ExpedicaoMidias.
     * @example
     * // Update many ExpedicaoMidias
     * const expedicaoMidia = await prisma.expedicaoMidia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpedicaoMidias and only return the `id_expedicaomidia`
     * const expedicaoMidiaWithId_expedicaomidiaOnly = await prisma.expedicaoMidia.updateManyAndReturn({
     *   select: { id_expedicaomidia: true },
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
    updateManyAndReturn<T extends ExpedicaoMidiaUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpedicaoMidiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpedicaoMidia.
     * @param {ExpedicaoMidiaUpsertArgs} args - Arguments to update or create a ExpedicaoMidia.
     * @example
     * // Update or create a ExpedicaoMidia
     * const expedicaoMidia = await prisma.expedicaoMidia.upsert({
     *   create: {
     *     // ... data to create a ExpedicaoMidia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpedicaoMidia we want to update
     *   }
     * })
     */
    upsert<T extends ExpedicaoMidiaUpsertArgs>(args: SelectSubset<T, ExpedicaoMidiaUpsertArgs<ExtArgs>>): Prisma__ExpedicaoMidiaClient<$Result.GetResult<Prisma.$ExpedicaoMidiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpedicaoMidias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoMidiaCountArgs} args - Arguments to filter ExpedicaoMidias to count.
     * @example
     * // Count the number of ExpedicaoMidias
     * const count = await prisma.expedicaoMidia.count({
     *   where: {
     *     // ... the filter for the ExpedicaoMidias we want to count
     *   }
     * })
    **/
    count<T extends ExpedicaoMidiaCountArgs>(
      args?: Subset<T, ExpedicaoMidiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpedicaoMidiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpedicaoMidia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoMidiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpedicaoMidiaAggregateArgs>(args: Subset<T, ExpedicaoMidiaAggregateArgs>): Prisma.PrismaPromise<GetExpedicaoMidiaAggregateType<T>>

    /**
     * Group by ExpedicaoMidia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpedicaoMidiaGroupByArgs} args - Group by arguments.
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
      T extends ExpedicaoMidiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpedicaoMidiaGroupByArgs['orderBy'] }
        : { orderBy?: ExpedicaoMidiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpedicaoMidiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpedicaoMidiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpedicaoMidia model
   */
  readonly fields: ExpedicaoMidiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpedicaoMidia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpedicaoMidiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expedicao<T extends ExpedicaoMidia$expedicaoArgs<ExtArgs> = {}>(args?: Subset<T, ExpedicaoMidia$expedicaoArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExpedicaoMidia model
   */
  interface ExpedicaoMidiaFieldRefs {
    readonly id_expedicaomidia: FieldRef<"ExpedicaoMidia", 'Int'>
    readonly id_expedicao: FieldRef<"ExpedicaoMidia", 'Int'>
    readonly tp_arquivo: FieldRef<"ExpedicaoMidia", 'String'>
    readonly arquivo: FieldRef<"ExpedicaoMidia", 'Bytes'>
    readonly descricao: FieldRef<"ExpedicaoMidia", 'String'>
    readonly data_upload: FieldRef<"ExpedicaoMidia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpedicaoMidia findUnique
   */
  export type ExpedicaoMidiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedicaoMidia to fetch.
     */
    where: ExpedicaoMidiaWhereUniqueInput
  }

  /**
   * ExpedicaoMidia findUniqueOrThrow
   */
  export type ExpedicaoMidiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedicaoMidia to fetch.
     */
    where: ExpedicaoMidiaWhereUniqueInput
  }

  /**
   * ExpedicaoMidia findFirst
   */
  export type ExpedicaoMidiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedicaoMidia to fetch.
     */
    where?: ExpedicaoMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedicaoMidias to fetch.
     */
    orderBy?: ExpedicaoMidiaOrderByWithRelationInput | ExpedicaoMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpedicaoMidias.
     */
    cursor?: ExpedicaoMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedicaoMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedicaoMidias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpedicaoMidias.
     */
    distinct?: ExpedicaoMidiaScalarFieldEnum | ExpedicaoMidiaScalarFieldEnum[]
  }

  /**
   * ExpedicaoMidia findFirstOrThrow
   */
  export type ExpedicaoMidiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedicaoMidia to fetch.
     */
    where?: ExpedicaoMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedicaoMidias to fetch.
     */
    orderBy?: ExpedicaoMidiaOrderByWithRelationInput | ExpedicaoMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpedicaoMidias.
     */
    cursor?: ExpedicaoMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedicaoMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedicaoMidias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpedicaoMidias.
     */
    distinct?: ExpedicaoMidiaScalarFieldEnum | ExpedicaoMidiaScalarFieldEnum[]
  }

  /**
   * ExpedicaoMidia findMany
   */
  export type ExpedicaoMidiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * Filter, which ExpedicaoMidias to fetch.
     */
    where?: ExpedicaoMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpedicaoMidias to fetch.
     */
    orderBy?: ExpedicaoMidiaOrderByWithRelationInput | ExpedicaoMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpedicaoMidias.
     */
    cursor?: ExpedicaoMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpedicaoMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpedicaoMidias.
     */
    skip?: number
    distinct?: ExpedicaoMidiaScalarFieldEnum | ExpedicaoMidiaScalarFieldEnum[]
  }

  /**
   * ExpedicaoMidia create
   */
  export type ExpedicaoMidiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpedicaoMidia.
     */
    data: XOR<ExpedicaoMidiaCreateInput, ExpedicaoMidiaUncheckedCreateInput>
  }

  /**
   * ExpedicaoMidia createMany
   */
  export type ExpedicaoMidiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpedicaoMidias.
     */
    data: ExpedicaoMidiaCreateManyInput | ExpedicaoMidiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpedicaoMidia createManyAndReturn
   */
  export type ExpedicaoMidiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * The data used to create many ExpedicaoMidias.
     */
    data: ExpedicaoMidiaCreateManyInput | ExpedicaoMidiaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpedicaoMidia update
   */
  export type ExpedicaoMidiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpedicaoMidia.
     */
    data: XOR<ExpedicaoMidiaUpdateInput, ExpedicaoMidiaUncheckedUpdateInput>
    /**
     * Choose, which ExpedicaoMidia to update.
     */
    where: ExpedicaoMidiaWhereUniqueInput
  }

  /**
   * ExpedicaoMidia updateMany
   */
  export type ExpedicaoMidiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpedicaoMidias.
     */
    data: XOR<ExpedicaoMidiaUpdateManyMutationInput, ExpedicaoMidiaUncheckedUpdateManyInput>
    /**
     * Filter which ExpedicaoMidias to update
     */
    where?: ExpedicaoMidiaWhereInput
    /**
     * Limit how many ExpedicaoMidias to update.
     */
    limit?: number
  }

  /**
   * ExpedicaoMidia updateManyAndReturn
   */
  export type ExpedicaoMidiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * The data used to update ExpedicaoMidias.
     */
    data: XOR<ExpedicaoMidiaUpdateManyMutationInput, ExpedicaoMidiaUncheckedUpdateManyInput>
    /**
     * Filter which ExpedicaoMidias to update
     */
    where?: ExpedicaoMidiaWhereInput
    /**
     * Limit how many ExpedicaoMidias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpedicaoMidia upsert
   */
  export type ExpedicaoMidiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpedicaoMidia to update in case it exists.
     */
    where: ExpedicaoMidiaWhereUniqueInput
    /**
     * In case the ExpedicaoMidia found by the `where` argument doesn't exist, create a new ExpedicaoMidia with this data.
     */
    create: XOR<ExpedicaoMidiaCreateInput, ExpedicaoMidiaUncheckedCreateInput>
    /**
     * In case the ExpedicaoMidia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpedicaoMidiaUpdateInput, ExpedicaoMidiaUncheckedUpdateInput>
  }

  /**
   * ExpedicaoMidia delete
   */
  export type ExpedicaoMidiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
    /**
     * Filter which ExpedicaoMidia to delete.
     */
    where: ExpedicaoMidiaWhereUniqueInput
  }

  /**
   * ExpedicaoMidia deleteMany
   */
  export type ExpedicaoMidiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpedicaoMidias to delete
     */
    where?: ExpedicaoMidiaWhereInput
    /**
     * Limit how many ExpedicaoMidias to delete.
     */
    limit?: number
  }

  /**
   * ExpedicaoMidia.expedicao
   */
  export type ExpedicaoMidia$expedicaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    where?: ExpedicaoWhereInput
  }

  /**
   * ExpedicaoMidia without action
   */
  export type ExpedicaoMidiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpedicaoMidia
     */
    select?: ExpedicaoMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpedicaoMidia
     */
    omit?: ExpedicaoMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoMidiaInclude<ExtArgs> | null
  }


  /**
   * Model DadoEcologico
   */

  export type AggregateDadoEcologico = {
    _count: DadoEcologicoCountAggregateOutputType | null
    _avg: DadoEcologicoAvgAggregateOutputType | null
    _sum: DadoEcologicoSumAggregateOutputType | null
    _min: DadoEcologicoMinAggregateOutputType | null
    _max: DadoEcologicoMaxAggregateOutputType | null
  }

  export type DadoEcologicoAvgAggregateOutputType = {
    id_dadoeco: number | null
  }

  export type DadoEcologicoSumAggregateOutputType = {
    id_dadoeco: number | null
  }

  export type DadoEcologicoMinAggregateOutputType = {
    id_dadoeco: number | null
    ds_dadoeco: string | null
  }

  export type DadoEcologicoMaxAggregateOutputType = {
    id_dadoeco: number | null
    ds_dadoeco: string | null
  }

  export type DadoEcologicoCountAggregateOutputType = {
    id_dadoeco: number
    ds_dadoeco: number
    _all: number
  }


  export type DadoEcologicoAvgAggregateInputType = {
    id_dadoeco?: true
  }

  export type DadoEcologicoSumAggregateInputType = {
    id_dadoeco?: true
  }

  export type DadoEcologicoMinAggregateInputType = {
    id_dadoeco?: true
    ds_dadoeco?: true
  }

  export type DadoEcologicoMaxAggregateInputType = {
    id_dadoeco?: true
    ds_dadoeco?: true
  }

  export type DadoEcologicoCountAggregateInputType = {
    id_dadoeco?: true
    ds_dadoeco?: true
    _all?: true
  }

  export type DadoEcologicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DadoEcologico to aggregate.
     */
    where?: DadoEcologicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEcologicos to fetch.
     */
    orderBy?: DadoEcologicoOrderByWithRelationInput | DadoEcologicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DadoEcologicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEcologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEcologicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DadoEcologicos
    **/
    _count?: true | DadoEcologicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DadoEcologicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DadoEcologicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DadoEcologicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DadoEcologicoMaxAggregateInputType
  }

  export type GetDadoEcologicoAggregateType<T extends DadoEcologicoAggregateArgs> = {
        [P in keyof T & keyof AggregateDadoEcologico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDadoEcologico[P]>
      : GetScalarType<T[P], AggregateDadoEcologico[P]>
  }




  export type DadoEcologicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DadoEcologicoWhereInput
    orderBy?: DadoEcologicoOrderByWithAggregationInput | DadoEcologicoOrderByWithAggregationInput[]
    by: DadoEcologicoScalarFieldEnum[] | DadoEcologicoScalarFieldEnum
    having?: DadoEcologicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DadoEcologicoCountAggregateInputType | true
    _avg?: DadoEcologicoAvgAggregateInputType
    _sum?: DadoEcologicoSumAggregateInputType
    _min?: DadoEcologicoMinAggregateInputType
    _max?: DadoEcologicoMaxAggregateInputType
  }

  export type DadoEcologicoGroupByOutputType = {
    id_dadoeco: number
    ds_dadoeco: string
    _count: DadoEcologicoCountAggregateOutputType | null
    _avg: DadoEcologicoAvgAggregateOutputType | null
    _sum: DadoEcologicoSumAggregateOutputType | null
    _min: DadoEcologicoMinAggregateOutputType | null
    _max: DadoEcologicoMaxAggregateOutputType | null
  }

  type GetDadoEcologicoGroupByPayload<T extends DadoEcologicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DadoEcologicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DadoEcologicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DadoEcologicoGroupByOutputType[P]>
            : GetScalarType<T[P], DadoEcologicoGroupByOutputType[P]>
        }
      >
    >


  export type DadoEcologicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dadoeco?: boolean
    ds_dadoeco?: boolean
    item_dados?: boolean | DadoEcologico$item_dadosArgs<ExtArgs>
    planta_dados?: boolean | DadoEcologico$planta_dadosArgs<ExtArgs>
    amostra_dados?: boolean | DadoEcologico$amostra_dadosArgs<ExtArgs>
    _count?: boolean | DadoEcologicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dadoEcologico"]>

  export type DadoEcologicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dadoeco?: boolean
    ds_dadoeco?: boolean
  }, ExtArgs["result"]["dadoEcologico"]>

  export type DadoEcologicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dadoeco?: boolean
    ds_dadoeco?: boolean
  }, ExtArgs["result"]["dadoEcologico"]>

  export type DadoEcologicoSelectScalar = {
    id_dadoeco?: boolean
    ds_dadoeco?: boolean
  }

  export type DadoEcologicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dadoeco" | "ds_dadoeco", ExtArgs["result"]["dadoEcologico"]>
  export type DadoEcologicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_dados?: boolean | DadoEcologico$item_dadosArgs<ExtArgs>
    planta_dados?: boolean | DadoEcologico$planta_dadosArgs<ExtArgs>
    amostra_dados?: boolean | DadoEcologico$amostra_dadosArgs<ExtArgs>
    _count?: boolean | DadoEcologicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DadoEcologicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DadoEcologicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DadoEcologicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DadoEcologico"
    objects: {
      item_dados: Prisma.$ItemDadoPayload<ExtArgs>[]
      planta_dados: Prisma.$PlantaDadoPayload<ExtArgs>[]
      amostra_dados: Prisma.$AmostraDadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_dadoeco: number
      ds_dadoeco: string
    }, ExtArgs["result"]["dadoEcologico"]>
    composites: {}
  }

  type DadoEcologicoGetPayload<S extends boolean | null | undefined | DadoEcologicoDefaultArgs> = $Result.GetResult<Prisma.$DadoEcologicoPayload, S>

  type DadoEcologicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DadoEcologicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DadoEcologicoCountAggregateInputType | true
    }

  export interface DadoEcologicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DadoEcologico'], meta: { name: 'DadoEcologico' } }
    /**
     * Find zero or one DadoEcologico that matches the filter.
     * @param {DadoEcologicoFindUniqueArgs} args - Arguments to find a DadoEcologico
     * @example
     * // Get one DadoEcologico
     * const dadoEcologico = await prisma.dadoEcologico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DadoEcologicoFindUniqueArgs>(args: SelectSubset<T, DadoEcologicoFindUniqueArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DadoEcologico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DadoEcologicoFindUniqueOrThrowArgs} args - Arguments to find a DadoEcologico
     * @example
     * // Get one DadoEcologico
     * const dadoEcologico = await prisma.dadoEcologico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DadoEcologicoFindUniqueOrThrowArgs>(args: SelectSubset<T, DadoEcologicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DadoEcologico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEcologicoFindFirstArgs} args - Arguments to find a DadoEcologico
     * @example
     * // Get one DadoEcologico
     * const dadoEcologico = await prisma.dadoEcologico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DadoEcologicoFindFirstArgs>(args?: SelectSubset<T, DadoEcologicoFindFirstArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DadoEcologico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEcologicoFindFirstOrThrowArgs} args - Arguments to find a DadoEcologico
     * @example
     * // Get one DadoEcologico
     * const dadoEcologico = await prisma.dadoEcologico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DadoEcologicoFindFirstOrThrowArgs>(args?: SelectSubset<T, DadoEcologicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DadoEcologicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEcologicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DadoEcologicos
     * const dadoEcologicos = await prisma.dadoEcologico.findMany()
     * 
     * // Get first 10 DadoEcologicos
     * const dadoEcologicos = await prisma.dadoEcologico.findMany({ take: 10 })
     * 
     * // Only select the `id_dadoeco`
     * const dadoEcologicoWithId_dadoecoOnly = await prisma.dadoEcologico.findMany({ select: { id_dadoeco: true } })
     * 
     */
    findMany<T extends DadoEcologicoFindManyArgs>(args?: SelectSubset<T, DadoEcologicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DadoEcologico.
     * @param {DadoEcologicoCreateArgs} args - Arguments to create a DadoEcologico.
     * @example
     * // Create one DadoEcologico
     * const DadoEcologico = await prisma.dadoEcologico.create({
     *   data: {
     *     // ... data to create a DadoEcologico
     *   }
     * })
     * 
     */
    create<T extends DadoEcologicoCreateArgs>(args: SelectSubset<T, DadoEcologicoCreateArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DadoEcologicos.
     * @param {DadoEcologicoCreateManyArgs} args - Arguments to create many DadoEcologicos.
     * @example
     * // Create many DadoEcologicos
     * const dadoEcologico = await prisma.dadoEcologico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DadoEcologicoCreateManyArgs>(args?: SelectSubset<T, DadoEcologicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DadoEcologicos and returns the data saved in the database.
     * @param {DadoEcologicoCreateManyAndReturnArgs} args - Arguments to create many DadoEcologicos.
     * @example
     * // Create many DadoEcologicos
     * const dadoEcologico = await prisma.dadoEcologico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DadoEcologicos and only return the `id_dadoeco`
     * const dadoEcologicoWithId_dadoecoOnly = await prisma.dadoEcologico.createManyAndReturn({
     *   select: { id_dadoeco: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DadoEcologicoCreateManyAndReturnArgs>(args?: SelectSubset<T, DadoEcologicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DadoEcologico.
     * @param {DadoEcologicoDeleteArgs} args - Arguments to delete one DadoEcologico.
     * @example
     * // Delete one DadoEcologico
     * const DadoEcologico = await prisma.dadoEcologico.delete({
     *   where: {
     *     // ... filter to delete one DadoEcologico
     *   }
     * })
     * 
     */
    delete<T extends DadoEcologicoDeleteArgs>(args: SelectSubset<T, DadoEcologicoDeleteArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DadoEcologico.
     * @param {DadoEcologicoUpdateArgs} args - Arguments to update one DadoEcologico.
     * @example
     * // Update one DadoEcologico
     * const dadoEcologico = await prisma.dadoEcologico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DadoEcologicoUpdateArgs>(args: SelectSubset<T, DadoEcologicoUpdateArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DadoEcologicos.
     * @param {DadoEcologicoDeleteManyArgs} args - Arguments to filter DadoEcologicos to delete.
     * @example
     * // Delete a few DadoEcologicos
     * const { count } = await prisma.dadoEcologico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DadoEcologicoDeleteManyArgs>(args?: SelectSubset<T, DadoEcologicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DadoEcologicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEcologicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DadoEcologicos
     * const dadoEcologico = await prisma.dadoEcologico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DadoEcologicoUpdateManyArgs>(args: SelectSubset<T, DadoEcologicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DadoEcologicos and returns the data updated in the database.
     * @param {DadoEcologicoUpdateManyAndReturnArgs} args - Arguments to update many DadoEcologicos.
     * @example
     * // Update many DadoEcologicos
     * const dadoEcologico = await prisma.dadoEcologico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DadoEcologicos and only return the `id_dadoeco`
     * const dadoEcologicoWithId_dadoecoOnly = await prisma.dadoEcologico.updateManyAndReturn({
     *   select: { id_dadoeco: true },
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
    updateManyAndReturn<T extends DadoEcologicoUpdateManyAndReturnArgs>(args: SelectSubset<T, DadoEcologicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DadoEcologico.
     * @param {DadoEcologicoUpsertArgs} args - Arguments to update or create a DadoEcologico.
     * @example
     * // Update or create a DadoEcologico
     * const dadoEcologico = await prisma.dadoEcologico.upsert({
     *   create: {
     *     // ... data to create a DadoEcologico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DadoEcologico we want to update
     *   }
     * })
     */
    upsert<T extends DadoEcologicoUpsertArgs>(args: SelectSubset<T, DadoEcologicoUpsertArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DadoEcologicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEcologicoCountArgs} args - Arguments to filter DadoEcologicos to count.
     * @example
     * // Count the number of DadoEcologicos
     * const count = await prisma.dadoEcologico.count({
     *   where: {
     *     // ... the filter for the DadoEcologicos we want to count
     *   }
     * })
    **/
    count<T extends DadoEcologicoCountArgs>(
      args?: Subset<T, DadoEcologicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DadoEcologicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DadoEcologico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEcologicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DadoEcologicoAggregateArgs>(args: Subset<T, DadoEcologicoAggregateArgs>): Prisma.PrismaPromise<GetDadoEcologicoAggregateType<T>>

    /**
     * Group by DadoEcologico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DadoEcologicoGroupByArgs} args - Group by arguments.
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
      T extends DadoEcologicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DadoEcologicoGroupByArgs['orderBy'] }
        : { orderBy?: DadoEcologicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DadoEcologicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDadoEcologicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DadoEcologico model
   */
  readonly fields: DadoEcologicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DadoEcologico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DadoEcologicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item_dados<T extends DadoEcologico$item_dadosArgs<ExtArgs> = {}>(args?: Subset<T, DadoEcologico$item_dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planta_dados<T extends DadoEcologico$planta_dadosArgs<ExtArgs> = {}>(args?: Subset<T, DadoEcologico$planta_dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amostra_dados<T extends DadoEcologico$amostra_dadosArgs<ExtArgs> = {}>(args?: Subset<T, DadoEcologico$amostra_dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DadoEcologico model
   */
  interface DadoEcologicoFieldRefs {
    readonly id_dadoeco: FieldRef<"DadoEcologico", 'Int'>
    readonly ds_dadoeco: FieldRef<"DadoEcologico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DadoEcologico findUnique
   */
  export type DadoEcologicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * Filter, which DadoEcologico to fetch.
     */
    where: DadoEcologicoWhereUniqueInput
  }

  /**
   * DadoEcologico findUniqueOrThrow
   */
  export type DadoEcologicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * Filter, which DadoEcologico to fetch.
     */
    where: DadoEcologicoWhereUniqueInput
  }

  /**
   * DadoEcologico findFirst
   */
  export type DadoEcologicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * Filter, which DadoEcologico to fetch.
     */
    where?: DadoEcologicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEcologicos to fetch.
     */
    orderBy?: DadoEcologicoOrderByWithRelationInput | DadoEcologicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DadoEcologicos.
     */
    cursor?: DadoEcologicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEcologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEcologicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DadoEcologicos.
     */
    distinct?: DadoEcologicoScalarFieldEnum | DadoEcologicoScalarFieldEnum[]
  }

  /**
   * DadoEcologico findFirstOrThrow
   */
  export type DadoEcologicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * Filter, which DadoEcologico to fetch.
     */
    where?: DadoEcologicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEcologicos to fetch.
     */
    orderBy?: DadoEcologicoOrderByWithRelationInput | DadoEcologicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DadoEcologicos.
     */
    cursor?: DadoEcologicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEcologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEcologicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DadoEcologicos.
     */
    distinct?: DadoEcologicoScalarFieldEnum | DadoEcologicoScalarFieldEnum[]
  }

  /**
   * DadoEcologico findMany
   */
  export type DadoEcologicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * Filter, which DadoEcologicos to fetch.
     */
    where?: DadoEcologicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DadoEcologicos to fetch.
     */
    orderBy?: DadoEcologicoOrderByWithRelationInput | DadoEcologicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DadoEcologicos.
     */
    cursor?: DadoEcologicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DadoEcologicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DadoEcologicos.
     */
    skip?: number
    distinct?: DadoEcologicoScalarFieldEnum | DadoEcologicoScalarFieldEnum[]
  }

  /**
   * DadoEcologico create
   */
  export type DadoEcologicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * The data needed to create a DadoEcologico.
     */
    data: XOR<DadoEcologicoCreateInput, DadoEcologicoUncheckedCreateInput>
  }

  /**
   * DadoEcologico createMany
   */
  export type DadoEcologicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DadoEcologicos.
     */
    data: DadoEcologicoCreateManyInput | DadoEcologicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DadoEcologico createManyAndReturn
   */
  export type DadoEcologicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * The data used to create many DadoEcologicos.
     */
    data: DadoEcologicoCreateManyInput | DadoEcologicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DadoEcologico update
   */
  export type DadoEcologicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * The data needed to update a DadoEcologico.
     */
    data: XOR<DadoEcologicoUpdateInput, DadoEcologicoUncheckedUpdateInput>
    /**
     * Choose, which DadoEcologico to update.
     */
    where: DadoEcologicoWhereUniqueInput
  }

  /**
   * DadoEcologico updateMany
   */
  export type DadoEcologicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DadoEcologicos.
     */
    data: XOR<DadoEcologicoUpdateManyMutationInput, DadoEcologicoUncheckedUpdateManyInput>
    /**
     * Filter which DadoEcologicos to update
     */
    where?: DadoEcologicoWhereInput
    /**
     * Limit how many DadoEcologicos to update.
     */
    limit?: number
  }

  /**
   * DadoEcologico updateManyAndReturn
   */
  export type DadoEcologicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * The data used to update DadoEcologicos.
     */
    data: XOR<DadoEcologicoUpdateManyMutationInput, DadoEcologicoUncheckedUpdateManyInput>
    /**
     * Filter which DadoEcologicos to update
     */
    where?: DadoEcologicoWhereInput
    /**
     * Limit how many DadoEcologicos to update.
     */
    limit?: number
  }

  /**
   * DadoEcologico upsert
   */
  export type DadoEcologicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * The filter to search for the DadoEcologico to update in case it exists.
     */
    where: DadoEcologicoWhereUniqueInput
    /**
     * In case the DadoEcologico found by the `where` argument doesn't exist, create a new DadoEcologico with this data.
     */
    create: XOR<DadoEcologicoCreateInput, DadoEcologicoUncheckedCreateInput>
    /**
     * In case the DadoEcologico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DadoEcologicoUpdateInput, DadoEcologicoUncheckedUpdateInput>
  }

  /**
   * DadoEcologico delete
   */
  export type DadoEcologicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
    /**
     * Filter which DadoEcologico to delete.
     */
    where: DadoEcologicoWhereUniqueInput
  }

  /**
   * DadoEcologico deleteMany
   */
  export type DadoEcologicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DadoEcologicos to delete
     */
    where?: DadoEcologicoWhereInput
    /**
     * Limit how many DadoEcologicos to delete.
     */
    limit?: number
  }

  /**
   * DadoEcologico.item_dados
   */
  export type DadoEcologico$item_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    where?: ItemDadoWhereInput
    orderBy?: ItemDadoOrderByWithRelationInput | ItemDadoOrderByWithRelationInput[]
    cursor?: ItemDadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemDadoScalarFieldEnum | ItemDadoScalarFieldEnum[]
  }

  /**
   * DadoEcologico.planta_dados
   */
  export type DadoEcologico$planta_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    where?: PlantaDadoWhereInput
    orderBy?: PlantaDadoOrderByWithRelationInput | PlantaDadoOrderByWithRelationInput[]
    cursor?: PlantaDadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantaDadoScalarFieldEnum | PlantaDadoScalarFieldEnum[]
  }

  /**
   * DadoEcologico.amostra_dados
   */
  export type DadoEcologico$amostra_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    where?: AmostraDadoWhereInput
    orderBy?: AmostraDadoOrderByWithRelationInput | AmostraDadoOrderByWithRelationInput[]
    cursor?: AmostraDadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraDadoScalarFieldEnum | AmostraDadoScalarFieldEnum[]
  }

  /**
   * DadoEcologico without action
   */
  export type DadoEcologicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DadoEcologico
     */
    select?: DadoEcologicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DadoEcologico
     */
    omit?: DadoEcologicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DadoEcologicoInclude<ExtArgs> | null
  }


  /**
   * Model ItemDado
   */

  export type AggregateItemDado = {
    _count: ItemDadoCountAggregateOutputType | null
    _avg: ItemDadoAvgAggregateOutputType | null
    _sum: ItemDadoSumAggregateOutputType | null
    _min: ItemDadoMinAggregateOutputType | null
    _max: ItemDadoMaxAggregateOutputType | null
  }

  export type ItemDadoAvgAggregateOutputType = {
    id_dadoeco: number | null
    id_itemdado: number | null
  }

  export type ItemDadoSumAggregateOutputType = {
    id_dadoeco: number | null
    id_itemdado: number | null
  }

  export type ItemDadoMinAggregateOutputType = {
    id_dadoeco: number | null
    id_itemdado: number | null
    ds_itemdado: string | null
  }

  export type ItemDadoMaxAggregateOutputType = {
    id_dadoeco: number | null
    id_itemdado: number | null
    ds_itemdado: string | null
  }

  export type ItemDadoCountAggregateOutputType = {
    id_dadoeco: number
    id_itemdado: number
    ds_itemdado: number
    _all: number
  }


  export type ItemDadoAvgAggregateInputType = {
    id_dadoeco?: true
    id_itemdado?: true
  }

  export type ItemDadoSumAggregateInputType = {
    id_dadoeco?: true
    id_itemdado?: true
  }

  export type ItemDadoMinAggregateInputType = {
    id_dadoeco?: true
    id_itemdado?: true
    ds_itemdado?: true
  }

  export type ItemDadoMaxAggregateInputType = {
    id_dadoeco?: true
    id_itemdado?: true
    ds_itemdado?: true
  }

  export type ItemDadoCountAggregateInputType = {
    id_dadoeco?: true
    id_itemdado?: true
    ds_itemdado?: true
    _all?: true
  }

  export type ItemDadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDado to aggregate.
     */
    where?: ItemDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDados to fetch.
     */
    orderBy?: ItemDadoOrderByWithRelationInput | ItemDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemDados
    **/
    _count?: true | ItemDadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemDadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemDadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemDadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemDadoMaxAggregateInputType
  }

  export type GetItemDadoAggregateType<T extends ItemDadoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemDado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemDado[P]>
      : GetScalarType<T[P], AggregateItemDado[P]>
  }




  export type ItemDadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDadoWhereInput
    orderBy?: ItemDadoOrderByWithAggregationInput | ItemDadoOrderByWithAggregationInput[]
    by: ItemDadoScalarFieldEnum[] | ItemDadoScalarFieldEnum
    having?: ItemDadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemDadoCountAggregateInputType | true
    _avg?: ItemDadoAvgAggregateInputType
    _sum?: ItemDadoSumAggregateInputType
    _min?: ItemDadoMinAggregateInputType
    _max?: ItemDadoMaxAggregateInputType
  }

  export type ItemDadoGroupByOutputType = {
    id_dadoeco: number
    id_itemdado: number
    ds_itemdado: string
    _count: ItemDadoCountAggregateOutputType | null
    _avg: ItemDadoAvgAggregateOutputType | null
    _sum: ItemDadoSumAggregateOutputType | null
    _min: ItemDadoMinAggregateOutputType | null
    _max: ItemDadoMaxAggregateOutputType | null
  }

  type GetItemDadoGroupByPayload<T extends ItemDadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemDadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemDadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemDadoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemDadoGroupByOutputType[P]>
        }
      >
    >


  export type ItemDadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_itemdado?: boolean
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
    planta_dados?: boolean | ItemDado$planta_dadosArgs<ExtArgs>
    amostra_dados?: boolean | ItemDado$amostra_dadosArgs<ExtArgs>
    _count?: boolean | ItemDadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDado"]>

  export type ItemDadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_itemdado?: boolean
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDado"]>

  export type ItemDadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_itemdado?: boolean
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDado"]>

  export type ItemDadoSelectScalar = {
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_itemdado?: boolean
  }

  export type ItemDadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dadoeco" | "id_itemdado" | "ds_itemdado", ExtArgs["result"]["itemDado"]>
  export type ItemDadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
    planta_dados?: boolean | ItemDado$planta_dadosArgs<ExtArgs>
    amostra_dados?: boolean | ItemDado$amostra_dadosArgs<ExtArgs>
    _count?: boolean | ItemDadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemDadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }
  export type ItemDadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }

  export type $ItemDadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemDado"
    objects: {
      dadoEcologico: Prisma.$DadoEcologicoPayload<ExtArgs>
      planta_dados: Prisma.$PlantaDadoPayload<ExtArgs>[]
      amostra_dados: Prisma.$AmostraDadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_dadoeco: number
      id_itemdado: number
      ds_itemdado: string
    }, ExtArgs["result"]["itemDado"]>
    composites: {}
  }

  type ItemDadoGetPayload<S extends boolean | null | undefined | ItemDadoDefaultArgs> = $Result.GetResult<Prisma.$ItemDadoPayload, S>

  type ItemDadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemDadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemDadoCountAggregateInputType | true
    }

  export interface ItemDadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemDado'], meta: { name: 'ItemDado' } }
    /**
     * Find zero or one ItemDado that matches the filter.
     * @param {ItemDadoFindUniqueArgs} args - Arguments to find a ItemDado
     * @example
     * // Get one ItemDado
     * const itemDado = await prisma.itemDado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemDadoFindUniqueArgs>(args: SelectSubset<T, ItemDadoFindUniqueArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemDado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemDadoFindUniqueOrThrowArgs} args - Arguments to find a ItemDado
     * @example
     * // Get one ItemDado
     * const itemDado = await prisma.itemDado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemDadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemDadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDadoFindFirstArgs} args - Arguments to find a ItemDado
     * @example
     * // Get one ItemDado
     * const itemDado = await prisma.itemDado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemDadoFindFirstArgs>(args?: SelectSubset<T, ItemDadoFindFirstArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDadoFindFirstOrThrowArgs} args - Arguments to find a ItemDado
     * @example
     * // Get one ItemDado
     * const itemDado = await prisma.itemDado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemDadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemDadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemDados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemDados
     * const itemDados = await prisma.itemDado.findMany()
     * 
     * // Get first 10 ItemDados
     * const itemDados = await prisma.itemDado.findMany({ take: 10 })
     * 
     * // Only select the `id_dadoeco`
     * const itemDadoWithId_dadoecoOnly = await prisma.itemDado.findMany({ select: { id_dadoeco: true } })
     * 
     */
    findMany<T extends ItemDadoFindManyArgs>(args?: SelectSubset<T, ItemDadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemDado.
     * @param {ItemDadoCreateArgs} args - Arguments to create a ItemDado.
     * @example
     * // Create one ItemDado
     * const ItemDado = await prisma.itemDado.create({
     *   data: {
     *     // ... data to create a ItemDado
     *   }
     * })
     * 
     */
    create<T extends ItemDadoCreateArgs>(args: SelectSubset<T, ItemDadoCreateArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemDados.
     * @param {ItemDadoCreateManyArgs} args - Arguments to create many ItemDados.
     * @example
     * // Create many ItemDados
     * const itemDado = await prisma.itemDado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemDadoCreateManyArgs>(args?: SelectSubset<T, ItemDadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemDados and returns the data saved in the database.
     * @param {ItemDadoCreateManyAndReturnArgs} args - Arguments to create many ItemDados.
     * @example
     * // Create many ItemDados
     * const itemDado = await prisma.itemDado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemDados and only return the `id_dadoeco`
     * const itemDadoWithId_dadoecoOnly = await prisma.itemDado.createManyAndReturn({
     *   select: { id_dadoeco: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemDadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemDadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemDado.
     * @param {ItemDadoDeleteArgs} args - Arguments to delete one ItemDado.
     * @example
     * // Delete one ItemDado
     * const ItemDado = await prisma.itemDado.delete({
     *   where: {
     *     // ... filter to delete one ItemDado
     *   }
     * })
     * 
     */
    delete<T extends ItemDadoDeleteArgs>(args: SelectSubset<T, ItemDadoDeleteArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemDado.
     * @param {ItemDadoUpdateArgs} args - Arguments to update one ItemDado.
     * @example
     * // Update one ItemDado
     * const itemDado = await prisma.itemDado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemDadoUpdateArgs>(args: SelectSubset<T, ItemDadoUpdateArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemDados.
     * @param {ItemDadoDeleteManyArgs} args - Arguments to filter ItemDados to delete.
     * @example
     * // Delete a few ItemDados
     * const { count } = await prisma.itemDado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDadoDeleteManyArgs>(args?: SelectSubset<T, ItemDadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemDados
     * const itemDado = await prisma.itemDado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemDadoUpdateManyArgs>(args: SelectSubset<T, ItemDadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDados and returns the data updated in the database.
     * @param {ItemDadoUpdateManyAndReturnArgs} args - Arguments to update many ItemDados.
     * @example
     * // Update many ItemDados
     * const itemDado = await prisma.itemDado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemDados and only return the `id_dadoeco`
     * const itemDadoWithId_dadoecoOnly = await prisma.itemDado.updateManyAndReturn({
     *   select: { id_dadoeco: true },
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
    updateManyAndReturn<T extends ItemDadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemDadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemDado.
     * @param {ItemDadoUpsertArgs} args - Arguments to update or create a ItemDado.
     * @example
     * // Update or create a ItemDado
     * const itemDado = await prisma.itemDado.upsert({
     *   create: {
     *     // ... data to create a ItemDado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemDado we want to update
     *   }
     * })
     */
    upsert<T extends ItemDadoUpsertArgs>(args: SelectSubset<T, ItemDadoUpsertArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemDados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDadoCountArgs} args - Arguments to filter ItemDados to count.
     * @example
     * // Count the number of ItemDados
     * const count = await prisma.itemDado.count({
     *   where: {
     *     // ... the filter for the ItemDados we want to count
     *   }
     * })
    **/
    count<T extends ItemDadoCountArgs>(
      args?: Subset<T, ItemDadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemDadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemDado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemDadoAggregateArgs>(args: Subset<T, ItemDadoAggregateArgs>): Prisma.PrismaPromise<GetItemDadoAggregateType<T>>

    /**
     * Group by ItemDado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDadoGroupByArgs} args - Group by arguments.
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
      T extends ItemDadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemDadoGroupByArgs['orderBy'] }
        : { orderBy?: ItemDadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemDadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemDadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemDado model
   */
  readonly fields: ItemDadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemDado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemDadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dadoEcologico<T extends DadoEcologicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DadoEcologicoDefaultArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    planta_dados<T extends ItemDado$planta_dadosArgs<ExtArgs> = {}>(args?: Subset<T, ItemDado$planta_dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amostra_dados<T extends ItemDado$amostra_dadosArgs<ExtArgs> = {}>(args?: Subset<T, ItemDado$amostra_dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ItemDado model
   */
  interface ItemDadoFieldRefs {
    readonly id_dadoeco: FieldRef<"ItemDado", 'Int'>
    readonly id_itemdado: FieldRef<"ItemDado", 'Int'>
    readonly ds_itemdado: FieldRef<"ItemDado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemDado findUnique
   */
  export type ItemDadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDado to fetch.
     */
    where: ItemDadoWhereUniqueInput
  }

  /**
   * ItemDado findUniqueOrThrow
   */
  export type ItemDadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDado to fetch.
     */
    where: ItemDadoWhereUniqueInput
  }

  /**
   * ItemDado findFirst
   */
  export type ItemDadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDado to fetch.
     */
    where?: ItemDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDados to fetch.
     */
    orderBy?: ItemDadoOrderByWithRelationInput | ItemDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDados.
     */
    cursor?: ItemDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDados.
     */
    distinct?: ItemDadoScalarFieldEnum | ItemDadoScalarFieldEnum[]
  }

  /**
   * ItemDado findFirstOrThrow
   */
  export type ItemDadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDado to fetch.
     */
    where?: ItemDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDados to fetch.
     */
    orderBy?: ItemDadoOrderByWithRelationInput | ItemDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDados.
     */
    cursor?: ItemDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDados.
     */
    distinct?: ItemDadoScalarFieldEnum | ItemDadoScalarFieldEnum[]
  }

  /**
   * ItemDado findMany
   */
  export type ItemDadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDados to fetch.
     */
    where?: ItemDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDados to fetch.
     */
    orderBy?: ItemDadoOrderByWithRelationInput | ItemDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemDados.
     */
    cursor?: ItemDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDados.
     */
    skip?: number
    distinct?: ItemDadoScalarFieldEnum | ItemDadoScalarFieldEnum[]
  }

  /**
   * ItemDado create
   */
  export type ItemDadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemDado.
     */
    data: XOR<ItemDadoCreateInput, ItemDadoUncheckedCreateInput>
  }

  /**
   * ItemDado createMany
   */
  export type ItemDadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemDados.
     */
    data: ItemDadoCreateManyInput | ItemDadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemDado createManyAndReturn
   */
  export type ItemDadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemDados.
     */
    data: ItemDadoCreateManyInput | ItemDadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDado update
   */
  export type ItemDadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemDado.
     */
    data: XOR<ItemDadoUpdateInput, ItemDadoUncheckedUpdateInput>
    /**
     * Choose, which ItemDado to update.
     */
    where: ItemDadoWhereUniqueInput
  }

  /**
   * ItemDado updateMany
   */
  export type ItemDadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemDados.
     */
    data: XOR<ItemDadoUpdateManyMutationInput, ItemDadoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDados to update
     */
    where?: ItemDadoWhereInput
    /**
     * Limit how many ItemDados to update.
     */
    limit?: number
  }

  /**
   * ItemDado updateManyAndReturn
   */
  export type ItemDadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * The data used to update ItemDados.
     */
    data: XOR<ItemDadoUpdateManyMutationInput, ItemDadoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDados to update
     */
    where?: ItemDadoWhereInput
    /**
     * Limit how many ItemDados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDado upsert
   */
  export type ItemDadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemDado to update in case it exists.
     */
    where: ItemDadoWhereUniqueInput
    /**
     * In case the ItemDado found by the `where` argument doesn't exist, create a new ItemDado with this data.
     */
    create: XOR<ItemDadoCreateInput, ItemDadoUncheckedCreateInput>
    /**
     * In case the ItemDado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemDadoUpdateInput, ItemDadoUncheckedUpdateInput>
  }

  /**
   * ItemDado delete
   */
  export type ItemDadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
    /**
     * Filter which ItemDado to delete.
     */
    where: ItemDadoWhereUniqueInput
  }

  /**
   * ItemDado deleteMany
   */
  export type ItemDadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDados to delete
     */
    where?: ItemDadoWhereInput
    /**
     * Limit how many ItemDados to delete.
     */
    limit?: number
  }

  /**
   * ItemDado.planta_dados
   */
  export type ItemDado$planta_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    where?: PlantaDadoWhereInput
    orderBy?: PlantaDadoOrderByWithRelationInput | PlantaDadoOrderByWithRelationInput[]
    cursor?: PlantaDadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantaDadoScalarFieldEnum | PlantaDadoScalarFieldEnum[]
  }

  /**
   * ItemDado.amostra_dados
   */
  export type ItemDado$amostra_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    where?: AmostraDadoWhereInput
    orderBy?: AmostraDadoOrderByWithRelationInput | AmostraDadoOrderByWithRelationInput[]
    cursor?: AmostraDadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraDadoScalarFieldEnum | AmostraDadoScalarFieldEnum[]
  }

  /**
   * ItemDado without action
   */
  export type ItemDadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDado
     */
    select?: ItemDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDado
     */
    omit?: ItemDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDadoInclude<ExtArgs> | null
  }


  /**
   * Model Planta
   */

  export type AggregatePlanta = {
    _count: PlantaCountAggregateOutputType | null
    _avg: PlantaAvgAggregateOutputType | null
    _sum: PlantaSumAggregateOutputType | null
    _min: PlantaMinAggregateOutputType | null
    _max: PlantaMaxAggregateOutputType | null
  }

  export type PlantaAvgAggregateOutputType = {
    id_planta: number | null
  }

  export type PlantaSumAggregateOutputType = {
    id_planta: number | null
  }

  export type PlantaMinAggregateOutputType = {
    id_planta: number | null
    nm_vulgar: string | null
    nm_cientifico: string | null
    nm_familia: string | null
  }

  export type PlantaMaxAggregateOutputType = {
    id_planta: number | null
    nm_vulgar: string | null
    nm_cientifico: string | null
    nm_familia: string | null
  }

  export type PlantaCountAggregateOutputType = {
    id_planta: number
    nm_vulgar: number
    nm_cientifico: number
    nm_familia: number
    _all: number
  }


  export type PlantaAvgAggregateInputType = {
    id_planta?: true
  }

  export type PlantaSumAggregateInputType = {
    id_planta?: true
  }

  export type PlantaMinAggregateInputType = {
    id_planta?: true
    nm_vulgar?: true
    nm_cientifico?: true
    nm_familia?: true
  }

  export type PlantaMaxAggregateInputType = {
    id_planta?: true
    nm_vulgar?: true
    nm_cientifico?: true
    nm_familia?: true
  }

  export type PlantaCountAggregateInputType = {
    id_planta?: true
    nm_vulgar?: true
    nm_cientifico?: true
    nm_familia?: true
    _all?: true
  }

  export type PlantaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planta to aggregate.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plantas
    **/
    _count?: true | PlantaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantaMaxAggregateInputType
  }

  export type GetPlantaAggregateType<T extends PlantaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanta[P]>
      : GetScalarType<T[P], AggregatePlanta[P]>
  }




  export type PlantaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantaWhereInput
    orderBy?: PlantaOrderByWithAggregationInput | PlantaOrderByWithAggregationInput[]
    by: PlantaScalarFieldEnum[] | PlantaScalarFieldEnum
    having?: PlantaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantaCountAggregateInputType | true
    _avg?: PlantaAvgAggregateInputType
    _sum?: PlantaSumAggregateInputType
    _min?: PlantaMinAggregateInputType
    _max?: PlantaMaxAggregateInputType
  }

  export type PlantaGroupByOutputType = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
    _count: PlantaCountAggregateOutputType | null
    _avg: PlantaAvgAggregateOutputType | null
    _sum: PlantaSumAggregateOutputType | null
    _min: PlantaMinAggregateOutputType | null
    _max: PlantaMaxAggregateOutputType | null
  }

  type GetPlantaGroupByPayload<T extends PlantaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantaGroupByOutputType[P]>
            : GetScalarType<T[P], PlantaGroupByOutputType[P]>
        }
      >
    >


  export type PlantaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_planta?: boolean
    nm_vulgar?: boolean
    nm_cientifico?: boolean
    nm_familia?: boolean
    planta_dados?: boolean | Planta$planta_dadosArgs<ExtArgs>
    amostras?: boolean | Planta$amostrasArgs<ExtArgs>
    _count?: boolean | PlantaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planta"]>

  export type PlantaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_planta?: boolean
    nm_vulgar?: boolean
    nm_cientifico?: boolean
    nm_familia?: boolean
  }, ExtArgs["result"]["planta"]>

  export type PlantaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_planta?: boolean
    nm_vulgar?: boolean
    nm_cientifico?: boolean
    nm_familia?: boolean
  }, ExtArgs["result"]["planta"]>

  export type PlantaSelectScalar = {
    id_planta?: boolean
    nm_vulgar?: boolean
    nm_cientifico?: boolean
    nm_familia?: boolean
  }

  export type PlantaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_planta" | "nm_vulgar" | "nm_cientifico" | "nm_familia", ExtArgs["result"]["planta"]>
  export type PlantaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta_dados?: boolean | Planta$planta_dadosArgs<ExtArgs>
    amostras?: boolean | Planta$amostrasArgs<ExtArgs>
    _count?: boolean | PlantaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlantaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planta"
    objects: {
      planta_dados: Prisma.$PlantaDadoPayload<ExtArgs>[]
      amostras: Prisma.$AmostraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_planta: number
      nm_vulgar: string
      nm_cientifico: string
      nm_familia: string
    }, ExtArgs["result"]["planta"]>
    composites: {}
  }

  type PlantaGetPayload<S extends boolean | null | undefined | PlantaDefaultArgs> = $Result.GetResult<Prisma.$PlantaPayload, S>

  type PlantaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantaCountAggregateInputType | true
    }

  export interface PlantaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planta'], meta: { name: 'Planta' } }
    /**
     * Find zero or one Planta that matches the filter.
     * @param {PlantaFindUniqueArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantaFindUniqueArgs>(args: SelectSubset<T, PlantaFindUniqueArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Planta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantaFindUniqueOrThrowArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindFirstArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantaFindFirstArgs>(args?: SelectSubset<T, PlantaFindFirstArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindFirstOrThrowArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plantas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plantas
     * const plantas = await prisma.planta.findMany()
     * 
     * // Get first 10 Plantas
     * const plantas = await prisma.planta.findMany({ take: 10 })
     * 
     * // Only select the `id_planta`
     * const plantaWithId_plantaOnly = await prisma.planta.findMany({ select: { id_planta: true } })
     * 
     */
    findMany<T extends PlantaFindManyArgs>(args?: SelectSubset<T, PlantaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Planta.
     * @param {PlantaCreateArgs} args - Arguments to create a Planta.
     * @example
     * // Create one Planta
     * const Planta = await prisma.planta.create({
     *   data: {
     *     // ... data to create a Planta
     *   }
     * })
     * 
     */
    create<T extends PlantaCreateArgs>(args: SelectSubset<T, PlantaCreateArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plantas.
     * @param {PlantaCreateManyArgs} args - Arguments to create many Plantas.
     * @example
     * // Create many Plantas
     * const planta = await prisma.planta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantaCreateManyArgs>(args?: SelectSubset<T, PlantaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plantas and returns the data saved in the database.
     * @param {PlantaCreateManyAndReturnArgs} args - Arguments to create many Plantas.
     * @example
     * // Create many Plantas
     * const planta = await prisma.planta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plantas and only return the `id_planta`
     * const plantaWithId_plantaOnly = await prisma.planta.createManyAndReturn({
     *   select: { id_planta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Planta.
     * @param {PlantaDeleteArgs} args - Arguments to delete one Planta.
     * @example
     * // Delete one Planta
     * const Planta = await prisma.planta.delete({
     *   where: {
     *     // ... filter to delete one Planta
     *   }
     * })
     * 
     */
    delete<T extends PlantaDeleteArgs>(args: SelectSubset<T, PlantaDeleteArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Planta.
     * @param {PlantaUpdateArgs} args - Arguments to update one Planta.
     * @example
     * // Update one Planta
     * const planta = await prisma.planta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantaUpdateArgs>(args: SelectSubset<T, PlantaUpdateArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plantas.
     * @param {PlantaDeleteManyArgs} args - Arguments to filter Plantas to delete.
     * @example
     * // Delete a few Plantas
     * const { count } = await prisma.planta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantaDeleteManyArgs>(args?: SelectSubset<T, PlantaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plantas
     * const planta = await prisma.planta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantaUpdateManyArgs>(args: SelectSubset<T, PlantaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantas and returns the data updated in the database.
     * @param {PlantaUpdateManyAndReturnArgs} args - Arguments to update many Plantas.
     * @example
     * // Update many Plantas
     * const planta = await prisma.planta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plantas and only return the `id_planta`
     * const plantaWithId_plantaOnly = await prisma.planta.updateManyAndReturn({
     *   select: { id_planta: true },
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
    updateManyAndReturn<T extends PlantaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Planta.
     * @param {PlantaUpsertArgs} args - Arguments to update or create a Planta.
     * @example
     * // Update or create a Planta
     * const planta = await prisma.planta.upsert({
     *   create: {
     *     // ... data to create a Planta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planta we want to update
     *   }
     * })
     */
    upsert<T extends PlantaUpsertArgs>(args: SelectSubset<T, PlantaUpsertArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaCountArgs} args - Arguments to filter Plantas to count.
     * @example
     * // Count the number of Plantas
     * const count = await prisma.planta.count({
     *   where: {
     *     // ... the filter for the Plantas we want to count
     *   }
     * })
    **/
    count<T extends PlantaCountArgs>(
      args?: Subset<T, PlantaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantaAggregateArgs>(args: Subset<T, PlantaAggregateArgs>): Prisma.PrismaPromise<GetPlantaAggregateType<T>>

    /**
     * Group by Planta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaGroupByArgs} args - Group by arguments.
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
      T extends PlantaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantaGroupByArgs['orderBy'] }
        : { orderBy?: PlantaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planta model
   */
  readonly fields: PlantaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planta_dados<T extends Planta$planta_dadosArgs<ExtArgs> = {}>(args?: Subset<T, Planta$planta_dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amostras<T extends Planta$amostrasArgs<ExtArgs> = {}>(args?: Subset<T, Planta$amostrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Planta model
   */
  interface PlantaFieldRefs {
    readonly id_planta: FieldRef<"Planta", 'Int'>
    readonly nm_vulgar: FieldRef<"Planta", 'String'>
    readonly nm_cientifico: FieldRef<"Planta", 'String'>
    readonly nm_familia: FieldRef<"Planta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Planta findUnique
   */
  export type PlantaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta findUniqueOrThrow
   */
  export type PlantaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta findFirst
   */
  export type PlantaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantas.
     */
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta findFirstOrThrow
   */
  export type PlantaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantas.
     */
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta findMany
   */
  export type PlantaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Plantas to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta create
   */
  export type PlantaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The data needed to create a Planta.
     */
    data: XOR<PlantaCreateInput, PlantaUncheckedCreateInput>
  }

  /**
   * Planta createMany
   */
  export type PlantaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plantas.
     */
    data: PlantaCreateManyInput | PlantaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planta createManyAndReturn
   */
  export type PlantaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * The data used to create many Plantas.
     */
    data: PlantaCreateManyInput | PlantaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planta update
   */
  export type PlantaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The data needed to update a Planta.
     */
    data: XOR<PlantaUpdateInput, PlantaUncheckedUpdateInput>
    /**
     * Choose, which Planta to update.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta updateMany
   */
  export type PlantaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plantas.
     */
    data: XOR<PlantaUpdateManyMutationInput, PlantaUncheckedUpdateManyInput>
    /**
     * Filter which Plantas to update
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to update.
     */
    limit?: number
  }

  /**
   * Planta updateManyAndReturn
   */
  export type PlantaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * The data used to update Plantas.
     */
    data: XOR<PlantaUpdateManyMutationInput, PlantaUncheckedUpdateManyInput>
    /**
     * Filter which Plantas to update
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to update.
     */
    limit?: number
  }

  /**
   * Planta upsert
   */
  export type PlantaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The filter to search for the Planta to update in case it exists.
     */
    where: PlantaWhereUniqueInput
    /**
     * In case the Planta found by the `where` argument doesn't exist, create a new Planta with this data.
     */
    create: XOR<PlantaCreateInput, PlantaUncheckedCreateInput>
    /**
     * In case the Planta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantaUpdateInput, PlantaUncheckedUpdateInput>
  }

  /**
   * Planta delete
   */
  export type PlantaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter which Planta to delete.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta deleteMany
   */
  export type PlantaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantas to delete
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to delete.
     */
    limit?: number
  }

  /**
   * Planta.planta_dados
   */
  export type Planta$planta_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    where?: PlantaDadoWhereInput
    orderBy?: PlantaDadoOrderByWithRelationInput | PlantaDadoOrderByWithRelationInput[]
    cursor?: PlantaDadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantaDadoScalarFieldEnum | PlantaDadoScalarFieldEnum[]
  }

  /**
   * Planta.amostras
   */
  export type Planta$amostrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    where?: AmostraWhereInput
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    cursor?: AmostraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraScalarFieldEnum | AmostraScalarFieldEnum[]
  }

  /**
   * Planta without action
   */
  export type PlantaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
  }


  /**
   * Model PlantaDado
   */

  export type AggregatePlantaDado = {
    _count: PlantaDadoCountAggregateOutputType | null
    _avg: PlantaDadoAvgAggregateOutputType | null
    _sum: PlantaDadoSumAggregateOutputType | null
    _min: PlantaDadoMinAggregateOutputType | null
    _max: PlantaDadoMaxAggregateOutputType | null
  }

  export type PlantaDadoAvgAggregateOutputType = {
    id_planta: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
  }

  export type PlantaDadoSumAggregateOutputType = {
    id_planta: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
  }

  export type PlantaDadoMinAggregateOutputType = {
    id_planta: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
    ds_obs: string | null
  }

  export type PlantaDadoMaxAggregateOutputType = {
    id_planta: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
    ds_obs: string | null
  }

  export type PlantaDadoCountAggregateOutputType = {
    id_planta: number
    id_dadoeco: number
    id_itemdado: number
    ds_obs: number
    _all: number
  }


  export type PlantaDadoAvgAggregateInputType = {
    id_planta?: true
    id_dadoeco?: true
    id_itemdado?: true
  }

  export type PlantaDadoSumAggregateInputType = {
    id_planta?: true
    id_dadoeco?: true
    id_itemdado?: true
  }

  export type PlantaDadoMinAggregateInputType = {
    id_planta?: true
    id_dadoeco?: true
    id_itemdado?: true
    ds_obs?: true
  }

  export type PlantaDadoMaxAggregateInputType = {
    id_planta?: true
    id_dadoeco?: true
    id_itemdado?: true
    ds_obs?: true
  }

  export type PlantaDadoCountAggregateInputType = {
    id_planta?: true
    id_dadoeco?: true
    id_itemdado?: true
    ds_obs?: true
    _all?: true
  }

  export type PlantaDadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantaDado to aggregate.
     */
    where?: PlantaDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantaDados to fetch.
     */
    orderBy?: PlantaDadoOrderByWithRelationInput | PlantaDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantaDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantaDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantaDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantaDados
    **/
    _count?: true | PlantaDadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantaDadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantaDadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantaDadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantaDadoMaxAggregateInputType
  }

  export type GetPlantaDadoAggregateType<T extends PlantaDadoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantaDado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantaDado[P]>
      : GetScalarType<T[P], AggregatePlantaDado[P]>
  }




  export type PlantaDadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantaDadoWhereInput
    orderBy?: PlantaDadoOrderByWithAggregationInput | PlantaDadoOrderByWithAggregationInput[]
    by: PlantaDadoScalarFieldEnum[] | PlantaDadoScalarFieldEnum
    having?: PlantaDadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantaDadoCountAggregateInputType | true
    _avg?: PlantaDadoAvgAggregateInputType
    _sum?: PlantaDadoSumAggregateInputType
    _min?: PlantaDadoMinAggregateInputType
    _max?: PlantaDadoMaxAggregateInputType
  }

  export type PlantaDadoGroupByOutputType = {
    id_planta: number
    id_dadoeco: number
    id_itemdado: number
    ds_obs: string | null
    _count: PlantaDadoCountAggregateOutputType | null
    _avg: PlantaDadoAvgAggregateOutputType | null
    _sum: PlantaDadoSumAggregateOutputType | null
    _min: PlantaDadoMinAggregateOutputType | null
    _max: PlantaDadoMaxAggregateOutputType | null
  }

  type GetPlantaDadoGroupByPayload<T extends PlantaDadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantaDadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantaDadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantaDadoGroupByOutputType[P]>
            : GetScalarType<T[P], PlantaDadoGroupByOutputType[P]>
        }
      >
    >


  export type PlantaDadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_planta?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_obs?: boolean
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantaDado"]>

  export type PlantaDadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_planta?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_obs?: boolean
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantaDado"]>

  export type PlantaDadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_planta?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_obs?: boolean
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantaDado"]>

  export type PlantaDadoSelectScalar = {
    id_planta?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_obs?: boolean
  }

  export type PlantaDadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_planta" | "id_dadoeco" | "id_itemdado" | "ds_obs", ExtArgs["result"]["plantaDado"]>
  export type PlantaDadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }
  export type PlantaDadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }
  export type PlantaDadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }

  export type $PlantaDadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantaDado"
    objects: {
      planta: Prisma.$PlantaPayload<ExtArgs>
      item_dado: Prisma.$ItemDadoPayload<ExtArgs>
      dadoEcologico: Prisma.$DadoEcologicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_planta: number
      id_dadoeco: number
      id_itemdado: number
      ds_obs: string | null
    }, ExtArgs["result"]["plantaDado"]>
    composites: {}
  }

  type PlantaDadoGetPayload<S extends boolean | null | undefined | PlantaDadoDefaultArgs> = $Result.GetResult<Prisma.$PlantaDadoPayload, S>

  type PlantaDadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantaDadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantaDadoCountAggregateInputType | true
    }

  export interface PlantaDadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantaDado'], meta: { name: 'PlantaDado' } }
    /**
     * Find zero or one PlantaDado that matches the filter.
     * @param {PlantaDadoFindUniqueArgs} args - Arguments to find a PlantaDado
     * @example
     * // Get one PlantaDado
     * const plantaDado = await prisma.plantaDado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantaDadoFindUniqueArgs>(args: SelectSubset<T, PlantaDadoFindUniqueArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlantaDado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantaDadoFindUniqueOrThrowArgs} args - Arguments to find a PlantaDado
     * @example
     * // Get one PlantaDado
     * const plantaDado = await prisma.plantaDado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantaDadoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantaDadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantaDado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaDadoFindFirstArgs} args - Arguments to find a PlantaDado
     * @example
     * // Get one PlantaDado
     * const plantaDado = await prisma.plantaDado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantaDadoFindFirstArgs>(args?: SelectSubset<T, PlantaDadoFindFirstArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantaDado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaDadoFindFirstOrThrowArgs} args - Arguments to find a PlantaDado
     * @example
     * // Get one PlantaDado
     * const plantaDado = await prisma.plantaDado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantaDadoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantaDadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlantaDados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaDadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantaDados
     * const plantaDados = await prisma.plantaDado.findMany()
     * 
     * // Get first 10 PlantaDados
     * const plantaDados = await prisma.plantaDado.findMany({ take: 10 })
     * 
     * // Only select the `id_planta`
     * const plantaDadoWithId_plantaOnly = await prisma.plantaDado.findMany({ select: { id_planta: true } })
     * 
     */
    findMany<T extends PlantaDadoFindManyArgs>(args?: SelectSubset<T, PlantaDadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlantaDado.
     * @param {PlantaDadoCreateArgs} args - Arguments to create a PlantaDado.
     * @example
     * // Create one PlantaDado
     * const PlantaDado = await prisma.plantaDado.create({
     *   data: {
     *     // ... data to create a PlantaDado
     *   }
     * })
     * 
     */
    create<T extends PlantaDadoCreateArgs>(args: SelectSubset<T, PlantaDadoCreateArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlantaDados.
     * @param {PlantaDadoCreateManyArgs} args - Arguments to create many PlantaDados.
     * @example
     * // Create many PlantaDados
     * const plantaDado = await prisma.plantaDado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantaDadoCreateManyArgs>(args?: SelectSubset<T, PlantaDadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantaDados and returns the data saved in the database.
     * @param {PlantaDadoCreateManyAndReturnArgs} args - Arguments to create many PlantaDados.
     * @example
     * // Create many PlantaDados
     * const plantaDado = await prisma.plantaDado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantaDados and only return the `id_planta`
     * const plantaDadoWithId_plantaOnly = await prisma.plantaDado.createManyAndReturn({
     *   select: { id_planta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantaDadoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantaDadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlantaDado.
     * @param {PlantaDadoDeleteArgs} args - Arguments to delete one PlantaDado.
     * @example
     * // Delete one PlantaDado
     * const PlantaDado = await prisma.plantaDado.delete({
     *   where: {
     *     // ... filter to delete one PlantaDado
     *   }
     * })
     * 
     */
    delete<T extends PlantaDadoDeleteArgs>(args: SelectSubset<T, PlantaDadoDeleteArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlantaDado.
     * @param {PlantaDadoUpdateArgs} args - Arguments to update one PlantaDado.
     * @example
     * // Update one PlantaDado
     * const plantaDado = await prisma.plantaDado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantaDadoUpdateArgs>(args: SelectSubset<T, PlantaDadoUpdateArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlantaDados.
     * @param {PlantaDadoDeleteManyArgs} args - Arguments to filter PlantaDados to delete.
     * @example
     * // Delete a few PlantaDados
     * const { count } = await prisma.plantaDado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantaDadoDeleteManyArgs>(args?: SelectSubset<T, PlantaDadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantaDados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaDadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantaDados
     * const plantaDado = await prisma.plantaDado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantaDadoUpdateManyArgs>(args: SelectSubset<T, PlantaDadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantaDados and returns the data updated in the database.
     * @param {PlantaDadoUpdateManyAndReturnArgs} args - Arguments to update many PlantaDados.
     * @example
     * // Update many PlantaDados
     * const plantaDado = await prisma.plantaDado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlantaDados and only return the `id_planta`
     * const plantaDadoWithId_plantaOnly = await prisma.plantaDado.updateManyAndReturn({
     *   select: { id_planta: true },
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
    updateManyAndReturn<T extends PlantaDadoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantaDadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlantaDado.
     * @param {PlantaDadoUpsertArgs} args - Arguments to update or create a PlantaDado.
     * @example
     * // Update or create a PlantaDado
     * const plantaDado = await prisma.plantaDado.upsert({
     *   create: {
     *     // ... data to create a PlantaDado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantaDado we want to update
     *   }
     * })
     */
    upsert<T extends PlantaDadoUpsertArgs>(args: SelectSubset<T, PlantaDadoUpsertArgs<ExtArgs>>): Prisma__PlantaDadoClient<$Result.GetResult<Prisma.$PlantaDadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlantaDados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaDadoCountArgs} args - Arguments to filter PlantaDados to count.
     * @example
     * // Count the number of PlantaDados
     * const count = await prisma.plantaDado.count({
     *   where: {
     *     // ... the filter for the PlantaDados we want to count
     *   }
     * })
    **/
    count<T extends PlantaDadoCountArgs>(
      args?: Subset<T, PlantaDadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantaDadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantaDado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaDadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantaDadoAggregateArgs>(args: Subset<T, PlantaDadoAggregateArgs>): Prisma.PrismaPromise<GetPlantaDadoAggregateType<T>>

    /**
     * Group by PlantaDado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaDadoGroupByArgs} args - Group by arguments.
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
      T extends PlantaDadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantaDadoGroupByArgs['orderBy'] }
        : { orderBy?: PlantaDadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantaDadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantaDadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantaDado model
   */
  readonly fields: PlantaDadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantaDado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantaDadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planta<T extends PlantaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantaDefaultArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item_dado<T extends ItemDadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDadoDefaultArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dadoEcologico<T extends DadoEcologicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DadoEcologicoDefaultArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlantaDado model
   */
  interface PlantaDadoFieldRefs {
    readonly id_planta: FieldRef<"PlantaDado", 'Int'>
    readonly id_dadoeco: FieldRef<"PlantaDado", 'Int'>
    readonly id_itemdado: FieldRef<"PlantaDado", 'Int'>
    readonly ds_obs: FieldRef<"PlantaDado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlantaDado findUnique
   */
  export type PlantaDadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * Filter, which PlantaDado to fetch.
     */
    where: PlantaDadoWhereUniqueInput
  }

  /**
   * PlantaDado findUniqueOrThrow
   */
  export type PlantaDadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * Filter, which PlantaDado to fetch.
     */
    where: PlantaDadoWhereUniqueInput
  }

  /**
   * PlantaDado findFirst
   */
  export type PlantaDadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * Filter, which PlantaDado to fetch.
     */
    where?: PlantaDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantaDados to fetch.
     */
    orderBy?: PlantaDadoOrderByWithRelationInput | PlantaDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantaDados.
     */
    cursor?: PlantaDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantaDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantaDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantaDados.
     */
    distinct?: PlantaDadoScalarFieldEnum | PlantaDadoScalarFieldEnum[]
  }

  /**
   * PlantaDado findFirstOrThrow
   */
  export type PlantaDadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * Filter, which PlantaDado to fetch.
     */
    where?: PlantaDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantaDados to fetch.
     */
    orderBy?: PlantaDadoOrderByWithRelationInput | PlantaDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantaDados.
     */
    cursor?: PlantaDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantaDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantaDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantaDados.
     */
    distinct?: PlantaDadoScalarFieldEnum | PlantaDadoScalarFieldEnum[]
  }

  /**
   * PlantaDado findMany
   */
  export type PlantaDadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * Filter, which PlantaDados to fetch.
     */
    where?: PlantaDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantaDados to fetch.
     */
    orderBy?: PlantaDadoOrderByWithRelationInput | PlantaDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantaDados.
     */
    cursor?: PlantaDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantaDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantaDados.
     */
    skip?: number
    distinct?: PlantaDadoScalarFieldEnum | PlantaDadoScalarFieldEnum[]
  }

  /**
   * PlantaDado create
   */
  export type PlantaDadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantaDado.
     */
    data: XOR<PlantaDadoCreateInput, PlantaDadoUncheckedCreateInput>
  }

  /**
   * PlantaDado createMany
   */
  export type PlantaDadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantaDados.
     */
    data: PlantaDadoCreateManyInput | PlantaDadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantaDado createManyAndReturn
   */
  export type PlantaDadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * The data used to create many PlantaDados.
     */
    data: PlantaDadoCreateManyInput | PlantaDadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantaDado update
   */
  export type PlantaDadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantaDado.
     */
    data: XOR<PlantaDadoUpdateInput, PlantaDadoUncheckedUpdateInput>
    /**
     * Choose, which PlantaDado to update.
     */
    where: PlantaDadoWhereUniqueInput
  }

  /**
   * PlantaDado updateMany
   */
  export type PlantaDadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantaDados.
     */
    data: XOR<PlantaDadoUpdateManyMutationInput, PlantaDadoUncheckedUpdateManyInput>
    /**
     * Filter which PlantaDados to update
     */
    where?: PlantaDadoWhereInput
    /**
     * Limit how many PlantaDados to update.
     */
    limit?: number
  }

  /**
   * PlantaDado updateManyAndReturn
   */
  export type PlantaDadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * The data used to update PlantaDados.
     */
    data: XOR<PlantaDadoUpdateManyMutationInput, PlantaDadoUncheckedUpdateManyInput>
    /**
     * Filter which PlantaDados to update
     */
    where?: PlantaDadoWhereInput
    /**
     * Limit how many PlantaDados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantaDado upsert
   */
  export type PlantaDadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantaDado to update in case it exists.
     */
    where: PlantaDadoWhereUniqueInput
    /**
     * In case the PlantaDado found by the `where` argument doesn't exist, create a new PlantaDado with this data.
     */
    create: XOR<PlantaDadoCreateInput, PlantaDadoUncheckedCreateInput>
    /**
     * In case the PlantaDado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantaDadoUpdateInput, PlantaDadoUncheckedUpdateInput>
  }

  /**
   * PlantaDado delete
   */
  export type PlantaDadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
    /**
     * Filter which PlantaDado to delete.
     */
    where: PlantaDadoWhereUniqueInput
  }

  /**
   * PlantaDado deleteMany
   */
  export type PlantaDadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantaDados to delete
     */
    where?: PlantaDadoWhereInput
    /**
     * Limit how many PlantaDados to delete.
     */
    limit?: number
  }

  /**
   * PlantaDado without action
   */
  export type PlantaDadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaDado
     */
    select?: PlantaDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantaDado
     */
    omit?: PlantaDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaDadoInclude<ExtArgs> | null
  }


  /**
   * Model Amostra
   */

  export type AggregateAmostra = {
    _count: AmostraCountAggregateOutputType | null
    _avg: AmostraAvgAggregateOutputType | null
    _sum: AmostraSumAggregateOutputType | null
    _min: AmostraMinAggregateOutputType | null
    _max: AmostraMaxAggregateOutputType | null
  }

  export type AmostraAvgAggregateOutputType = {
    id_amostra: number | null
    id_planta: number | null
    id_expedicao: number | null
    id_relevo: number | null
    id_solo: number | null
    nr_altitude: Decimal | null
    nr_longitude: Decimal | null
    nr_latitude: Decimal | null
    nr_altura: Decimal | null
    nr_DAP: Decimal | null
    nr_CAP: Decimal | null
  }

  export type AmostraSumAggregateOutputType = {
    id_amostra: number | null
    id_planta: number | null
    id_expedicao: number | null
    id_relevo: number | null
    id_solo: number | null
    nr_altitude: Decimal | null
    nr_longitude: Decimal | null
    nr_latitude: Decimal | null
    nr_altura: Decimal | null
    nr_DAP: Decimal | null
    nr_CAP: Decimal | null
  }

  export type AmostraMinAggregateOutputType = {
    id_amostra: number | null
    id_planta: number | null
    id_expedicao: number | null
    id_relevo: number | null
    id_solo: number | null
    nm_coletor: string | null
    nr_altitude: Decimal | null
    nr_longitude: Decimal | null
    nr_latitude: Decimal | null
    nr_altura: Decimal | null
    nr_DAP: Decimal | null
    nr_CAP: Decimal | null
    ds_exsudado: string | null
    ds_obscomplement: string | null
  }

  export type AmostraMaxAggregateOutputType = {
    id_amostra: number | null
    id_planta: number | null
    id_expedicao: number | null
    id_relevo: number | null
    id_solo: number | null
    nm_coletor: string | null
    nr_altitude: Decimal | null
    nr_longitude: Decimal | null
    nr_latitude: Decimal | null
    nr_altura: Decimal | null
    nr_DAP: Decimal | null
    nr_CAP: Decimal | null
    ds_exsudado: string | null
    ds_obscomplement: string | null
  }

  export type AmostraCountAggregateOutputType = {
    id_amostra: number
    id_planta: number
    id_expedicao: number
    id_relevo: number
    id_solo: number
    nm_coletor: number
    nr_altitude: number
    nr_longitude: number
    nr_latitude: number
    nr_altura: number
    nr_DAP: number
    nr_CAP: number
    ds_exsudado: number
    ds_obscomplement: number
    _all: number
  }


  export type AmostraAvgAggregateInputType = {
    id_amostra?: true
    id_planta?: true
    id_expedicao?: true
    id_relevo?: true
    id_solo?: true
    nr_altitude?: true
    nr_longitude?: true
    nr_latitude?: true
    nr_altura?: true
    nr_DAP?: true
    nr_CAP?: true
  }

  export type AmostraSumAggregateInputType = {
    id_amostra?: true
    id_planta?: true
    id_expedicao?: true
    id_relevo?: true
    id_solo?: true
    nr_altitude?: true
    nr_longitude?: true
    nr_latitude?: true
    nr_altura?: true
    nr_DAP?: true
    nr_CAP?: true
  }

  export type AmostraMinAggregateInputType = {
    id_amostra?: true
    id_planta?: true
    id_expedicao?: true
    id_relevo?: true
    id_solo?: true
    nm_coletor?: true
    nr_altitude?: true
    nr_longitude?: true
    nr_latitude?: true
    nr_altura?: true
    nr_DAP?: true
    nr_CAP?: true
    ds_exsudado?: true
    ds_obscomplement?: true
  }

  export type AmostraMaxAggregateInputType = {
    id_amostra?: true
    id_planta?: true
    id_expedicao?: true
    id_relevo?: true
    id_solo?: true
    nm_coletor?: true
    nr_altitude?: true
    nr_longitude?: true
    nr_latitude?: true
    nr_altura?: true
    nr_DAP?: true
    nr_CAP?: true
    ds_exsudado?: true
    ds_obscomplement?: true
  }

  export type AmostraCountAggregateInputType = {
    id_amostra?: true
    id_planta?: true
    id_expedicao?: true
    id_relevo?: true
    id_solo?: true
    nm_coletor?: true
    nr_altitude?: true
    nr_longitude?: true
    nr_latitude?: true
    nr_altura?: true
    nr_DAP?: true
    nr_CAP?: true
    ds_exsudado?: true
    ds_obscomplement?: true
    _all?: true
  }

  export type AmostraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amostra to aggregate.
     */
    where?: AmostraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amostras to fetch.
     */
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmostraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amostras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amostras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amostras
    **/
    _count?: true | AmostraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmostraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmostraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmostraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmostraMaxAggregateInputType
  }

  export type GetAmostraAggregateType<T extends AmostraAggregateArgs> = {
        [P in keyof T & keyof AggregateAmostra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmostra[P]>
      : GetScalarType<T[P], AggregateAmostra[P]>
  }




  export type AmostraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraWhereInput
    orderBy?: AmostraOrderByWithAggregationInput | AmostraOrderByWithAggregationInput[]
    by: AmostraScalarFieldEnum[] | AmostraScalarFieldEnum
    having?: AmostraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmostraCountAggregateInputType | true
    _avg?: AmostraAvgAggregateInputType
    _sum?: AmostraSumAggregateInputType
    _min?: AmostraMinAggregateInputType
    _max?: AmostraMaxAggregateInputType
  }

  export type AmostraGroupByOutputType = {
    id_amostra: number
    id_planta: number | null
    id_expedicao: number | null
    id_relevo: number | null
    id_solo: number | null
    nm_coletor: string
    nr_altitude: Decimal | null
    nr_longitude: Decimal | null
    nr_latitude: Decimal | null
    nr_altura: Decimal | null
    nr_DAP: Decimal | null
    nr_CAP: Decimal | null
    ds_exsudado: string | null
    ds_obscomplement: string | null
    _count: AmostraCountAggregateOutputType | null
    _avg: AmostraAvgAggregateOutputType | null
    _sum: AmostraSumAggregateOutputType | null
    _min: AmostraMinAggregateOutputType | null
    _max: AmostraMaxAggregateOutputType | null
  }

  type GetAmostraGroupByPayload<T extends AmostraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmostraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmostraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmostraGroupByOutputType[P]>
            : GetScalarType<T[P], AmostraGroupByOutputType[P]>
        }
      >
    >


  export type AmostraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostra?: boolean
    id_planta?: boolean
    id_expedicao?: boolean
    id_relevo?: boolean
    id_solo?: boolean
    nm_coletor?: boolean
    nr_altitude?: boolean
    nr_longitude?: boolean
    nr_latitude?: boolean
    nr_altura?: boolean
    nr_DAP?: boolean
    nr_CAP?: boolean
    ds_exsudado?: boolean
    ds_obscomplement?: boolean
    planta?: boolean | Amostra$plantaArgs<ExtArgs>
    expedicao?: boolean | Amostra$expedicaoArgs<ExtArgs>
    tipoRelevo?: boolean | Amostra$tipoRelevoArgs<ExtArgs>
    tipoSolo?: boolean | Amostra$tipoSoloArgs<ExtArgs>
    amostra_dados?: boolean | Amostra$amostra_dadosArgs<ExtArgs>
    amostra_midias?: boolean | Amostra$amostra_midiasArgs<ExtArgs>
    _count?: boolean | AmostraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amostra"]>

  export type AmostraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostra?: boolean
    id_planta?: boolean
    id_expedicao?: boolean
    id_relevo?: boolean
    id_solo?: boolean
    nm_coletor?: boolean
    nr_altitude?: boolean
    nr_longitude?: boolean
    nr_latitude?: boolean
    nr_altura?: boolean
    nr_DAP?: boolean
    nr_CAP?: boolean
    ds_exsudado?: boolean
    ds_obscomplement?: boolean
    planta?: boolean | Amostra$plantaArgs<ExtArgs>
    expedicao?: boolean | Amostra$expedicaoArgs<ExtArgs>
    tipoRelevo?: boolean | Amostra$tipoRelevoArgs<ExtArgs>
    tipoSolo?: boolean | Amostra$tipoSoloArgs<ExtArgs>
  }, ExtArgs["result"]["amostra"]>

  export type AmostraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostra?: boolean
    id_planta?: boolean
    id_expedicao?: boolean
    id_relevo?: boolean
    id_solo?: boolean
    nm_coletor?: boolean
    nr_altitude?: boolean
    nr_longitude?: boolean
    nr_latitude?: boolean
    nr_altura?: boolean
    nr_DAP?: boolean
    nr_CAP?: boolean
    ds_exsudado?: boolean
    ds_obscomplement?: boolean
    planta?: boolean | Amostra$plantaArgs<ExtArgs>
    expedicao?: boolean | Amostra$expedicaoArgs<ExtArgs>
    tipoRelevo?: boolean | Amostra$tipoRelevoArgs<ExtArgs>
    tipoSolo?: boolean | Amostra$tipoSoloArgs<ExtArgs>
  }, ExtArgs["result"]["amostra"]>

  export type AmostraSelectScalar = {
    id_amostra?: boolean
    id_planta?: boolean
    id_expedicao?: boolean
    id_relevo?: boolean
    id_solo?: boolean
    nm_coletor?: boolean
    nr_altitude?: boolean
    nr_longitude?: boolean
    nr_latitude?: boolean
    nr_altura?: boolean
    nr_DAP?: boolean
    nr_CAP?: boolean
    ds_exsudado?: boolean
    ds_obscomplement?: boolean
  }

  export type AmostraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_amostra" | "id_planta" | "id_expedicao" | "id_relevo" | "id_solo" | "nm_coletor" | "nr_altitude" | "nr_longitude" | "nr_latitude" | "nr_altura" | "nr_DAP" | "nr_CAP" | "ds_exsudado" | "ds_obscomplement", ExtArgs["result"]["amostra"]>
  export type AmostraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | Amostra$plantaArgs<ExtArgs>
    expedicao?: boolean | Amostra$expedicaoArgs<ExtArgs>
    tipoRelevo?: boolean | Amostra$tipoRelevoArgs<ExtArgs>
    tipoSolo?: boolean | Amostra$tipoSoloArgs<ExtArgs>
    amostra_dados?: boolean | Amostra$amostra_dadosArgs<ExtArgs>
    amostra_midias?: boolean | Amostra$amostra_midiasArgs<ExtArgs>
    _count?: boolean | AmostraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmostraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | Amostra$plantaArgs<ExtArgs>
    expedicao?: boolean | Amostra$expedicaoArgs<ExtArgs>
    tipoRelevo?: boolean | Amostra$tipoRelevoArgs<ExtArgs>
    tipoSolo?: boolean | Amostra$tipoSoloArgs<ExtArgs>
  }
  export type AmostraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | Amostra$plantaArgs<ExtArgs>
    expedicao?: boolean | Amostra$expedicaoArgs<ExtArgs>
    tipoRelevo?: boolean | Amostra$tipoRelevoArgs<ExtArgs>
    tipoSolo?: boolean | Amostra$tipoSoloArgs<ExtArgs>
  }

  export type $AmostraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amostra"
    objects: {
      planta: Prisma.$PlantaPayload<ExtArgs> | null
      expedicao: Prisma.$ExpedicaoPayload<ExtArgs> | null
      tipoRelevo: Prisma.$TipoRelevoPayload<ExtArgs> | null
      tipoSolo: Prisma.$TipoSoloPayload<ExtArgs> | null
      amostra_dados: Prisma.$AmostraDadoPayload<ExtArgs>[]
      amostra_midias: Prisma.$AmostraMidiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_amostra: number
      id_planta: number | null
      id_expedicao: number | null
      id_relevo: number | null
      id_solo: number | null
      nm_coletor: string
      nr_altitude: Prisma.Decimal | null
      nr_longitude: Prisma.Decimal | null
      nr_latitude: Prisma.Decimal | null
      nr_altura: Prisma.Decimal | null
      nr_DAP: Prisma.Decimal | null
      nr_CAP: Prisma.Decimal | null
      ds_exsudado: string | null
      ds_obscomplement: string | null
    }, ExtArgs["result"]["amostra"]>
    composites: {}
  }

  type AmostraGetPayload<S extends boolean | null | undefined | AmostraDefaultArgs> = $Result.GetResult<Prisma.$AmostraPayload, S>

  type AmostraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmostraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmostraCountAggregateInputType | true
    }

  export interface AmostraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amostra'], meta: { name: 'Amostra' } }
    /**
     * Find zero or one Amostra that matches the filter.
     * @param {AmostraFindUniqueArgs} args - Arguments to find a Amostra
     * @example
     * // Get one Amostra
     * const amostra = await prisma.amostra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmostraFindUniqueArgs>(args: SelectSubset<T, AmostraFindUniqueArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amostra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmostraFindUniqueOrThrowArgs} args - Arguments to find a Amostra
     * @example
     * // Get one Amostra
     * const amostra = await prisma.amostra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmostraFindUniqueOrThrowArgs>(args: SelectSubset<T, AmostraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amostra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraFindFirstArgs} args - Arguments to find a Amostra
     * @example
     * // Get one Amostra
     * const amostra = await prisma.amostra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmostraFindFirstArgs>(args?: SelectSubset<T, AmostraFindFirstArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amostra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraFindFirstOrThrowArgs} args - Arguments to find a Amostra
     * @example
     * // Get one Amostra
     * const amostra = await prisma.amostra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmostraFindFirstOrThrowArgs>(args?: SelectSubset<T, AmostraFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amostras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amostras
     * const amostras = await prisma.amostra.findMany()
     * 
     * // Get first 10 Amostras
     * const amostras = await prisma.amostra.findMany({ take: 10 })
     * 
     * // Only select the `id_amostra`
     * const amostraWithId_amostraOnly = await prisma.amostra.findMany({ select: { id_amostra: true } })
     * 
     */
    findMany<T extends AmostraFindManyArgs>(args?: SelectSubset<T, AmostraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amostra.
     * @param {AmostraCreateArgs} args - Arguments to create a Amostra.
     * @example
     * // Create one Amostra
     * const Amostra = await prisma.amostra.create({
     *   data: {
     *     // ... data to create a Amostra
     *   }
     * })
     * 
     */
    create<T extends AmostraCreateArgs>(args: SelectSubset<T, AmostraCreateArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amostras.
     * @param {AmostraCreateManyArgs} args - Arguments to create many Amostras.
     * @example
     * // Create many Amostras
     * const amostra = await prisma.amostra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmostraCreateManyArgs>(args?: SelectSubset<T, AmostraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amostras and returns the data saved in the database.
     * @param {AmostraCreateManyAndReturnArgs} args - Arguments to create many Amostras.
     * @example
     * // Create many Amostras
     * const amostra = await prisma.amostra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amostras and only return the `id_amostra`
     * const amostraWithId_amostraOnly = await prisma.amostra.createManyAndReturn({
     *   select: { id_amostra: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmostraCreateManyAndReturnArgs>(args?: SelectSubset<T, AmostraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amostra.
     * @param {AmostraDeleteArgs} args - Arguments to delete one Amostra.
     * @example
     * // Delete one Amostra
     * const Amostra = await prisma.amostra.delete({
     *   where: {
     *     // ... filter to delete one Amostra
     *   }
     * })
     * 
     */
    delete<T extends AmostraDeleteArgs>(args: SelectSubset<T, AmostraDeleteArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amostra.
     * @param {AmostraUpdateArgs} args - Arguments to update one Amostra.
     * @example
     * // Update one Amostra
     * const amostra = await prisma.amostra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmostraUpdateArgs>(args: SelectSubset<T, AmostraUpdateArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amostras.
     * @param {AmostraDeleteManyArgs} args - Arguments to filter Amostras to delete.
     * @example
     * // Delete a few Amostras
     * const { count } = await prisma.amostra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmostraDeleteManyArgs>(args?: SelectSubset<T, AmostraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amostras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amostras
     * const amostra = await prisma.amostra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmostraUpdateManyArgs>(args: SelectSubset<T, AmostraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amostras and returns the data updated in the database.
     * @param {AmostraUpdateManyAndReturnArgs} args - Arguments to update many Amostras.
     * @example
     * // Update many Amostras
     * const amostra = await prisma.amostra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amostras and only return the `id_amostra`
     * const amostraWithId_amostraOnly = await prisma.amostra.updateManyAndReturn({
     *   select: { id_amostra: true },
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
    updateManyAndReturn<T extends AmostraUpdateManyAndReturnArgs>(args: SelectSubset<T, AmostraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amostra.
     * @param {AmostraUpsertArgs} args - Arguments to update or create a Amostra.
     * @example
     * // Update or create a Amostra
     * const amostra = await prisma.amostra.upsert({
     *   create: {
     *     // ... data to create a Amostra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amostra we want to update
     *   }
     * })
     */
    upsert<T extends AmostraUpsertArgs>(args: SelectSubset<T, AmostraUpsertArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amostras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraCountArgs} args - Arguments to filter Amostras to count.
     * @example
     * // Count the number of Amostras
     * const count = await prisma.amostra.count({
     *   where: {
     *     // ... the filter for the Amostras we want to count
     *   }
     * })
    **/
    count<T extends AmostraCountArgs>(
      args?: Subset<T, AmostraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmostraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amostra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmostraAggregateArgs>(args: Subset<T, AmostraAggregateArgs>): Prisma.PrismaPromise<GetAmostraAggregateType<T>>

    /**
     * Group by Amostra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraGroupByArgs} args - Group by arguments.
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
      T extends AmostraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmostraGroupByArgs['orderBy'] }
        : { orderBy?: AmostraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmostraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmostraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amostra model
   */
  readonly fields: AmostraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amostra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmostraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planta<T extends Amostra$plantaArgs<ExtArgs> = {}>(args?: Subset<T, Amostra$plantaArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expedicao<T extends Amostra$expedicaoArgs<ExtArgs> = {}>(args?: Subset<T, Amostra$expedicaoArgs<ExtArgs>>): Prisma__ExpedicaoClient<$Result.GetResult<Prisma.$ExpedicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipoRelevo<T extends Amostra$tipoRelevoArgs<ExtArgs> = {}>(args?: Subset<T, Amostra$tipoRelevoArgs<ExtArgs>>): Prisma__TipoRelevoClient<$Result.GetResult<Prisma.$TipoRelevoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipoSolo<T extends Amostra$tipoSoloArgs<ExtArgs> = {}>(args?: Subset<T, Amostra$tipoSoloArgs<ExtArgs>>): Prisma__TipoSoloClient<$Result.GetResult<Prisma.$TipoSoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    amostra_dados<T extends Amostra$amostra_dadosArgs<ExtArgs> = {}>(args?: Subset<T, Amostra$amostra_dadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amostra_midias<T extends Amostra$amostra_midiasArgs<ExtArgs> = {}>(args?: Subset<T, Amostra$amostra_midiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Amostra model
   */
  interface AmostraFieldRefs {
    readonly id_amostra: FieldRef<"Amostra", 'Int'>
    readonly id_planta: FieldRef<"Amostra", 'Int'>
    readonly id_expedicao: FieldRef<"Amostra", 'Int'>
    readonly id_relevo: FieldRef<"Amostra", 'Int'>
    readonly id_solo: FieldRef<"Amostra", 'Int'>
    readonly nm_coletor: FieldRef<"Amostra", 'String'>
    readonly nr_altitude: FieldRef<"Amostra", 'Decimal'>
    readonly nr_longitude: FieldRef<"Amostra", 'Decimal'>
    readonly nr_latitude: FieldRef<"Amostra", 'Decimal'>
    readonly nr_altura: FieldRef<"Amostra", 'Decimal'>
    readonly nr_DAP: FieldRef<"Amostra", 'Decimal'>
    readonly nr_CAP: FieldRef<"Amostra", 'Decimal'>
    readonly ds_exsudado: FieldRef<"Amostra", 'String'>
    readonly ds_obscomplement: FieldRef<"Amostra", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Amostra findUnique
   */
  export type AmostraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * Filter, which Amostra to fetch.
     */
    where: AmostraWhereUniqueInput
  }

  /**
   * Amostra findUniqueOrThrow
   */
  export type AmostraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * Filter, which Amostra to fetch.
     */
    where: AmostraWhereUniqueInput
  }

  /**
   * Amostra findFirst
   */
  export type AmostraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * Filter, which Amostra to fetch.
     */
    where?: AmostraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amostras to fetch.
     */
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amostras.
     */
    cursor?: AmostraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amostras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amostras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amostras.
     */
    distinct?: AmostraScalarFieldEnum | AmostraScalarFieldEnum[]
  }

  /**
   * Amostra findFirstOrThrow
   */
  export type AmostraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * Filter, which Amostra to fetch.
     */
    where?: AmostraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amostras to fetch.
     */
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amostras.
     */
    cursor?: AmostraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amostras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amostras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amostras.
     */
    distinct?: AmostraScalarFieldEnum | AmostraScalarFieldEnum[]
  }

  /**
   * Amostra findMany
   */
  export type AmostraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * Filter, which Amostras to fetch.
     */
    where?: AmostraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amostras to fetch.
     */
    orderBy?: AmostraOrderByWithRelationInput | AmostraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amostras.
     */
    cursor?: AmostraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amostras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amostras.
     */
    skip?: number
    distinct?: AmostraScalarFieldEnum | AmostraScalarFieldEnum[]
  }

  /**
   * Amostra create
   */
  export type AmostraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * The data needed to create a Amostra.
     */
    data: XOR<AmostraCreateInput, AmostraUncheckedCreateInput>
  }

  /**
   * Amostra createMany
   */
  export type AmostraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amostras.
     */
    data: AmostraCreateManyInput | AmostraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amostra createManyAndReturn
   */
  export type AmostraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * The data used to create many Amostras.
     */
    data: AmostraCreateManyInput | AmostraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amostra update
   */
  export type AmostraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * The data needed to update a Amostra.
     */
    data: XOR<AmostraUpdateInput, AmostraUncheckedUpdateInput>
    /**
     * Choose, which Amostra to update.
     */
    where: AmostraWhereUniqueInput
  }

  /**
   * Amostra updateMany
   */
  export type AmostraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amostras.
     */
    data: XOR<AmostraUpdateManyMutationInput, AmostraUncheckedUpdateManyInput>
    /**
     * Filter which Amostras to update
     */
    where?: AmostraWhereInput
    /**
     * Limit how many Amostras to update.
     */
    limit?: number
  }

  /**
   * Amostra updateManyAndReturn
   */
  export type AmostraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * The data used to update Amostras.
     */
    data: XOR<AmostraUpdateManyMutationInput, AmostraUncheckedUpdateManyInput>
    /**
     * Filter which Amostras to update
     */
    where?: AmostraWhereInput
    /**
     * Limit how many Amostras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amostra upsert
   */
  export type AmostraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * The filter to search for the Amostra to update in case it exists.
     */
    where: AmostraWhereUniqueInput
    /**
     * In case the Amostra found by the `where` argument doesn't exist, create a new Amostra with this data.
     */
    create: XOR<AmostraCreateInput, AmostraUncheckedCreateInput>
    /**
     * In case the Amostra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmostraUpdateInput, AmostraUncheckedUpdateInput>
  }

  /**
   * Amostra delete
   */
  export type AmostraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    /**
     * Filter which Amostra to delete.
     */
    where: AmostraWhereUniqueInput
  }

  /**
   * Amostra deleteMany
   */
  export type AmostraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amostras to delete
     */
    where?: AmostraWhereInput
    /**
     * Limit how many Amostras to delete.
     */
    limit?: number
  }

  /**
   * Amostra.planta
   */
  export type Amostra$plantaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    where?: PlantaWhereInput
  }

  /**
   * Amostra.expedicao
   */
  export type Amostra$expedicaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expedicao
     */
    select?: ExpedicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expedicao
     */
    omit?: ExpedicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpedicaoInclude<ExtArgs> | null
    where?: ExpedicaoWhereInput
  }

  /**
   * Amostra.tipoRelevo
   */
  export type Amostra$tipoRelevoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoRelevo
     */
    select?: TipoRelevoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoRelevo
     */
    omit?: TipoRelevoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoRelevoInclude<ExtArgs> | null
    where?: TipoRelevoWhereInput
  }

  /**
   * Amostra.tipoSolo
   */
  export type Amostra$tipoSoloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSolo
     */
    select?: TipoSoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSolo
     */
    omit?: TipoSoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSoloInclude<ExtArgs> | null
    where?: TipoSoloWhereInput
  }

  /**
   * Amostra.amostra_dados
   */
  export type Amostra$amostra_dadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    where?: AmostraDadoWhereInput
    orderBy?: AmostraDadoOrderByWithRelationInput | AmostraDadoOrderByWithRelationInput[]
    cursor?: AmostraDadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraDadoScalarFieldEnum | AmostraDadoScalarFieldEnum[]
  }

  /**
   * Amostra.amostra_midias
   */
  export type Amostra$amostra_midiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    where?: AmostraMidiaWhereInput
    orderBy?: AmostraMidiaOrderByWithRelationInput | AmostraMidiaOrderByWithRelationInput[]
    cursor?: AmostraMidiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmostraMidiaScalarFieldEnum | AmostraMidiaScalarFieldEnum[]
  }

  /**
   * Amostra without action
   */
  export type AmostraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
  }


  /**
   * Model AmostraDado
   */

  export type AggregateAmostraDado = {
    _count: AmostraDadoCountAggregateOutputType | null
    _avg: AmostraDadoAvgAggregateOutputType | null
    _sum: AmostraDadoSumAggregateOutputType | null
    _min: AmostraDadoMinAggregateOutputType | null
    _max: AmostraDadoMaxAggregateOutputType | null
  }

  export type AmostraDadoAvgAggregateOutputType = {
    id_amostra: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
  }

  export type AmostraDadoSumAggregateOutputType = {
    id_amostra: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
  }

  export type AmostraDadoMinAggregateOutputType = {
    id_amostra: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
    ds_cor: string | null
    ds_obs: string | null
  }

  export type AmostraDadoMaxAggregateOutputType = {
    id_amostra: number | null
    id_dadoeco: number | null
    id_itemdado: number | null
    ds_cor: string | null
    ds_obs: string | null
  }

  export type AmostraDadoCountAggregateOutputType = {
    id_amostra: number
    id_dadoeco: number
    id_itemdado: number
    ds_cor: number
    ds_obs: number
    _all: number
  }


  export type AmostraDadoAvgAggregateInputType = {
    id_amostra?: true
    id_dadoeco?: true
    id_itemdado?: true
  }

  export type AmostraDadoSumAggregateInputType = {
    id_amostra?: true
    id_dadoeco?: true
    id_itemdado?: true
  }

  export type AmostraDadoMinAggregateInputType = {
    id_amostra?: true
    id_dadoeco?: true
    id_itemdado?: true
    ds_cor?: true
    ds_obs?: true
  }

  export type AmostraDadoMaxAggregateInputType = {
    id_amostra?: true
    id_dadoeco?: true
    id_itemdado?: true
    ds_cor?: true
    ds_obs?: true
  }

  export type AmostraDadoCountAggregateInputType = {
    id_amostra?: true
    id_dadoeco?: true
    id_itemdado?: true
    ds_cor?: true
    ds_obs?: true
    _all?: true
  }

  export type AmostraDadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmostraDado to aggregate.
     */
    where?: AmostraDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraDados to fetch.
     */
    orderBy?: AmostraDadoOrderByWithRelationInput | AmostraDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmostraDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AmostraDados
    **/
    _count?: true | AmostraDadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmostraDadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmostraDadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmostraDadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmostraDadoMaxAggregateInputType
  }

  export type GetAmostraDadoAggregateType<T extends AmostraDadoAggregateArgs> = {
        [P in keyof T & keyof AggregateAmostraDado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmostraDado[P]>
      : GetScalarType<T[P], AggregateAmostraDado[P]>
  }




  export type AmostraDadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraDadoWhereInput
    orderBy?: AmostraDadoOrderByWithAggregationInput | AmostraDadoOrderByWithAggregationInput[]
    by: AmostraDadoScalarFieldEnum[] | AmostraDadoScalarFieldEnum
    having?: AmostraDadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmostraDadoCountAggregateInputType | true
    _avg?: AmostraDadoAvgAggregateInputType
    _sum?: AmostraDadoSumAggregateInputType
    _min?: AmostraDadoMinAggregateInputType
    _max?: AmostraDadoMaxAggregateInputType
  }

  export type AmostraDadoGroupByOutputType = {
    id_amostra: number
    id_dadoeco: number
    id_itemdado: number
    ds_cor: string | null
    ds_obs: string | null
    _count: AmostraDadoCountAggregateOutputType | null
    _avg: AmostraDadoAvgAggregateOutputType | null
    _sum: AmostraDadoSumAggregateOutputType | null
    _min: AmostraDadoMinAggregateOutputType | null
    _max: AmostraDadoMaxAggregateOutputType | null
  }

  type GetAmostraDadoGroupByPayload<T extends AmostraDadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmostraDadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmostraDadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmostraDadoGroupByOutputType[P]>
            : GetScalarType<T[P], AmostraDadoGroupByOutputType[P]>
        }
      >
    >


  export type AmostraDadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostra?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_cor?: boolean
    ds_obs?: boolean
    amostra?: boolean | AmostraDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amostraDado"]>

  export type AmostraDadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostra?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_cor?: boolean
    ds_obs?: boolean
    amostra?: boolean | AmostraDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amostraDado"]>

  export type AmostraDadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostra?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_cor?: boolean
    ds_obs?: boolean
    amostra?: boolean | AmostraDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amostraDado"]>

  export type AmostraDadoSelectScalar = {
    id_amostra?: boolean
    id_dadoeco?: boolean
    id_itemdado?: boolean
    ds_cor?: boolean
    ds_obs?: boolean
  }

  export type AmostraDadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_amostra" | "id_dadoeco" | "id_itemdado" | "ds_cor" | "ds_obs", ExtArgs["result"]["amostraDado"]>
  export type AmostraDadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostra?: boolean | AmostraDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }
  export type AmostraDadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostra?: boolean | AmostraDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }
  export type AmostraDadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostra?: boolean | AmostraDefaultArgs<ExtArgs>
    item_dado?: boolean | ItemDadoDefaultArgs<ExtArgs>
    dadoEcologico?: boolean | DadoEcologicoDefaultArgs<ExtArgs>
  }

  export type $AmostraDadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AmostraDado"
    objects: {
      amostra: Prisma.$AmostraPayload<ExtArgs>
      item_dado: Prisma.$ItemDadoPayload<ExtArgs>
      dadoEcologico: Prisma.$DadoEcologicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_amostra: number
      id_dadoeco: number
      id_itemdado: number
      ds_cor: string | null
      ds_obs: string | null
    }, ExtArgs["result"]["amostraDado"]>
    composites: {}
  }

  type AmostraDadoGetPayload<S extends boolean | null | undefined | AmostraDadoDefaultArgs> = $Result.GetResult<Prisma.$AmostraDadoPayload, S>

  type AmostraDadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmostraDadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmostraDadoCountAggregateInputType | true
    }

  export interface AmostraDadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AmostraDado'], meta: { name: 'AmostraDado' } }
    /**
     * Find zero or one AmostraDado that matches the filter.
     * @param {AmostraDadoFindUniqueArgs} args - Arguments to find a AmostraDado
     * @example
     * // Get one AmostraDado
     * const amostraDado = await prisma.amostraDado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmostraDadoFindUniqueArgs>(args: SelectSubset<T, AmostraDadoFindUniqueArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AmostraDado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmostraDadoFindUniqueOrThrowArgs} args - Arguments to find a AmostraDado
     * @example
     * // Get one AmostraDado
     * const amostraDado = await prisma.amostraDado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmostraDadoFindUniqueOrThrowArgs>(args: SelectSubset<T, AmostraDadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmostraDado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraDadoFindFirstArgs} args - Arguments to find a AmostraDado
     * @example
     * // Get one AmostraDado
     * const amostraDado = await prisma.amostraDado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmostraDadoFindFirstArgs>(args?: SelectSubset<T, AmostraDadoFindFirstArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmostraDado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraDadoFindFirstOrThrowArgs} args - Arguments to find a AmostraDado
     * @example
     * // Get one AmostraDado
     * const amostraDado = await prisma.amostraDado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmostraDadoFindFirstOrThrowArgs>(args?: SelectSubset<T, AmostraDadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AmostraDados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraDadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AmostraDados
     * const amostraDados = await prisma.amostraDado.findMany()
     * 
     * // Get first 10 AmostraDados
     * const amostraDados = await prisma.amostraDado.findMany({ take: 10 })
     * 
     * // Only select the `id_amostra`
     * const amostraDadoWithId_amostraOnly = await prisma.amostraDado.findMany({ select: { id_amostra: true } })
     * 
     */
    findMany<T extends AmostraDadoFindManyArgs>(args?: SelectSubset<T, AmostraDadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AmostraDado.
     * @param {AmostraDadoCreateArgs} args - Arguments to create a AmostraDado.
     * @example
     * // Create one AmostraDado
     * const AmostraDado = await prisma.amostraDado.create({
     *   data: {
     *     // ... data to create a AmostraDado
     *   }
     * })
     * 
     */
    create<T extends AmostraDadoCreateArgs>(args: SelectSubset<T, AmostraDadoCreateArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AmostraDados.
     * @param {AmostraDadoCreateManyArgs} args - Arguments to create many AmostraDados.
     * @example
     * // Create many AmostraDados
     * const amostraDado = await prisma.amostraDado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmostraDadoCreateManyArgs>(args?: SelectSubset<T, AmostraDadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AmostraDados and returns the data saved in the database.
     * @param {AmostraDadoCreateManyAndReturnArgs} args - Arguments to create many AmostraDados.
     * @example
     * // Create many AmostraDados
     * const amostraDado = await prisma.amostraDado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AmostraDados and only return the `id_amostra`
     * const amostraDadoWithId_amostraOnly = await prisma.amostraDado.createManyAndReturn({
     *   select: { id_amostra: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmostraDadoCreateManyAndReturnArgs>(args?: SelectSubset<T, AmostraDadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AmostraDado.
     * @param {AmostraDadoDeleteArgs} args - Arguments to delete one AmostraDado.
     * @example
     * // Delete one AmostraDado
     * const AmostraDado = await prisma.amostraDado.delete({
     *   where: {
     *     // ... filter to delete one AmostraDado
     *   }
     * })
     * 
     */
    delete<T extends AmostraDadoDeleteArgs>(args: SelectSubset<T, AmostraDadoDeleteArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AmostraDado.
     * @param {AmostraDadoUpdateArgs} args - Arguments to update one AmostraDado.
     * @example
     * // Update one AmostraDado
     * const amostraDado = await prisma.amostraDado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmostraDadoUpdateArgs>(args: SelectSubset<T, AmostraDadoUpdateArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AmostraDados.
     * @param {AmostraDadoDeleteManyArgs} args - Arguments to filter AmostraDados to delete.
     * @example
     * // Delete a few AmostraDados
     * const { count } = await prisma.amostraDado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmostraDadoDeleteManyArgs>(args?: SelectSubset<T, AmostraDadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmostraDados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraDadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AmostraDados
     * const amostraDado = await prisma.amostraDado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmostraDadoUpdateManyArgs>(args: SelectSubset<T, AmostraDadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmostraDados and returns the data updated in the database.
     * @param {AmostraDadoUpdateManyAndReturnArgs} args - Arguments to update many AmostraDados.
     * @example
     * // Update many AmostraDados
     * const amostraDado = await prisma.amostraDado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AmostraDados and only return the `id_amostra`
     * const amostraDadoWithId_amostraOnly = await prisma.amostraDado.updateManyAndReturn({
     *   select: { id_amostra: true },
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
    updateManyAndReturn<T extends AmostraDadoUpdateManyAndReturnArgs>(args: SelectSubset<T, AmostraDadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AmostraDado.
     * @param {AmostraDadoUpsertArgs} args - Arguments to update or create a AmostraDado.
     * @example
     * // Update or create a AmostraDado
     * const amostraDado = await prisma.amostraDado.upsert({
     *   create: {
     *     // ... data to create a AmostraDado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AmostraDado we want to update
     *   }
     * })
     */
    upsert<T extends AmostraDadoUpsertArgs>(args: SelectSubset<T, AmostraDadoUpsertArgs<ExtArgs>>): Prisma__AmostraDadoClient<$Result.GetResult<Prisma.$AmostraDadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AmostraDados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraDadoCountArgs} args - Arguments to filter AmostraDados to count.
     * @example
     * // Count the number of AmostraDados
     * const count = await prisma.amostraDado.count({
     *   where: {
     *     // ... the filter for the AmostraDados we want to count
     *   }
     * })
    **/
    count<T extends AmostraDadoCountArgs>(
      args?: Subset<T, AmostraDadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmostraDadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AmostraDado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraDadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmostraDadoAggregateArgs>(args: Subset<T, AmostraDadoAggregateArgs>): Prisma.PrismaPromise<GetAmostraDadoAggregateType<T>>

    /**
     * Group by AmostraDado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraDadoGroupByArgs} args - Group by arguments.
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
      T extends AmostraDadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmostraDadoGroupByArgs['orderBy'] }
        : { orderBy?: AmostraDadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmostraDadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmostraDadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AmostraDado model
   */
  readonly fields: AmostraDadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AmostraDado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmostraDadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amostra<T extends AmostraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmostraDefaultArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item_dado<T extends ItemDadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDadoDefaultArgs<ExtArgs>>): Prisma__ItemDadoClient<$Result.GetResult<Prisma.$ItemDadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dadoEcologico<T extends DadoEcologicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DadoEcologicoDefaultArgs<ExtArgs>>): Prisma__DadoEcologicoClient<$Result.GetResult<Prisma.$DadoEcologicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AmostraDado model
   */
  interface AmostraDadoFieldRefs {
    readonly id_amostra: FieldRef<"AmostraDado", 'Int'>
    readonly id_dadoeco: FieldRef<"AmostraDado", 'Int'>
    readonly id_itemdado: FieldRef<"AmostraDado", 'Int'>
    readonly ds_cor: FieldRef<"AmostraDado", 'String'>
    readonly ds_obs: FieldRef<"AmostraDado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AmostraDado findUnique
   */
  export type AmostraDadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * Filter, which AmostraDado to fetch.
     */
    where: AmostraDadoWhereUniqueInput
  }

  /**
   * AmostraDado findUniqueOrThrow
   */
  export type AmostraDadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * Filter, which AmostraDado to fetch.
     */
    where: AmostraDadoWhereUniqueInput
  }

  /**
   * AmostraDado findFirst
   */
  export type AmostraDadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * Filter, which AmostraDado to fetch.
     */
    where?: AmostraDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraDados to fetch.
     */
    orderBy?: AmostraDadoOrderByWithRelationInput | AmostraDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmostraDados.
     */
    cursor?: AmostraDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmostraDados.
     */
    distinct?: AmostraDadoScalarFieldEnum | AmostraDadoScalarFieldEnum[]
  }

  /**
   * AmostraDado findFirstOrThrow
   */
  export type AmostraDadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * Filter, which AmostraDado to fetch.
     */
    where?: AmostraDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraDados to fetch.
     */
    orderBy?: AmostraDadoOrderByWithRelationInput | AmostraDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmostraDados.
     */
    cursor?: AmostraDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraDados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmostraDados.
     */
    distinct?: AmostraDadoScalarFieldEnum | AmostraDadoScalarFieldEnum[]
  }

  /**
   * AmostraDado findMany
   */
  export type AmostraDadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * Filter, which AmostraDados to fetch.
     */
    where?: AmostraDadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraDados to fetch.
     */
    orderBy?: AmostraDadoOrderByWithRelationInput | AmostraDadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AmostraDados.
     */
    cursor?: AmostraDadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraDados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraDados.
     */
    skip?: number
    distinct?: AmostraDadoScalarFieldEnum | AmostraDadoScalarFieldEnum[]
  }

  /**
   * AmostraDado create
   */
  export type AmostraDadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * The data needed to create a AmostraDado.
     */
    data: XOR<AmostraDadoCreateInput, AmostraDadoUncheckedCreateInput>
  }

  /**
   * AmostraDado createMany
   */
  export type AmostraDadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AmostraDados.
     */
    data: AmostraDadoCreateManyInput | AmostraDadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AmostraDado createManyAndReturn
   */
  export type AmostraDadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * The data used to create many AmostraDados.
     */
    data: AmostraDadoCreateManyInput | AmostraDadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AmostraDado update
   */
  export type AmostraDadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * The data needed to update a AmostraDado.
     */
    data: XOR<AmostraDadoUpdateInput, AmostraDadoUncheckedUpdateInput>
    /**
     * Choose, which AmostraDado to update.
     */
    where: AmostraDadoWhereUniqueInput
  }

  /**
   * AmostraDado updateMany
   */
  export type AmostraDadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AmostraDados.
     */
    data: XOR<AmostraDadoUpdateManyMutationInput, AmostraDadoUncheckedUpdateManyInput>
    /**
     * Filter which AmostraDados to update
     */
    where?: AmostraDadoWhereInput
    /**
     * Limit how many AmostraDados to update.
     */
    limit?: number
  }

  /**
   * AmostraDado updateManyAndReturn
   */
  export type AmostraDadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * The data used to update AmostraDados.
     */
    data: XOR<AmostraDadoUpdateManyMutationInput, AmostraDadoUncheckedUpdateManyInput>
    /**
     * Filter which AmostraDados to update
     */
    where?: AmostraDadoWhereInput
    /**
     * Limit how many AmostraDados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AmostraDado upsert
   */
  export type AmostraDadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * The filter to search for the AmostraDado to update in case it exists.
     */
    where: AmostraDadoWhereUniqueInput
    /**
     * In case the AmostraDado found by the `where` argument doesn't exist, create a new AmostraDado with this data.
     */
    create: XOR<AmostraDadoCreateInput, AmostraDadoUncheckedCreateInput>
    /**
     * In case the AmostraDado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmostraDadoUpdateInput, AmostraDadoUncheckedUpdateInput>
  }

  /**
   * AmostraDado delete
   */
  export type AmostraDadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
    /**
     * Filter which AmostraDado to delete.
     */
    where: AmostraDadoWhereUniqueInput
  }

  /**
   * AmostraDado deleteMany
   */
  export type AmostraDadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmostraDados to delete
     */
    where?: AmostraDadoWhereInput
    /**
     * Limit how many AmostraDados to delete.
     */
    limit?: number
  }

  /**
   * AmostraDado without action
   */
  export type AmostraDadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraDado
     */
    select?: AmostraDadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraDado
     */
    omit?: AmostraDadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraDadoInclude<ExtArgs> | null
  }


  /**
   * Model AmostraMidia
   */

  export type AggregateAmostraMidia = {
    _count: AmostraMidiaCountAggregateOutputType | null
    _avg: AmostraMidiaAvgAggregateOutputType | null
    _sum: AmostraMidiaSumAggregateOutputType | null
    _min: AmostraMidiaMinAggregateOutputType | null
    _max: AmostraMidiaMaxAggregateOutputType | null
  }

  export type AmostraMidiaAvgAggregateOutputType = {
    id_amostramidia: number | null
    id_amostra: number | null
  }

  export type AmostraMidiaSumAggregateOutputType = {
    id_amostramidia: number | null
    id_amostra: number | null
  }

  export type AmostraMidiaMinAggregateOutputType = {
    id_amostramidia: number | null
    id_amostra: number | null
    tp_arquivo: string | null
    arquivo: Uint8Array | null
    descricao: string | null
    data_upload: Date | null
  }

  export type AmostraMidiaMaxAggregateOutputType = {
    id_amostramidia: number | null
    id_amostra: number | null
    tp_arquivo: string | null
    arquivo: Uint8Array | null
    descricao: string | null
    data_upload: Date | null
  }

  export type AmostraMidiaCountAggregateOutputType = {
    id_amostramidia: number
    id_amostra: number
    tp_arquivo: number
    arquivo: number
    descricao: number
    data_upload: number
    _all: number
  }


  export type AmostraMidiaAvgAggregateInputType = {
    id_amostramidia?: true
    id_amostra?: true
  }

  export type AmostraMidiaSumAggregateInputType = {
    id_amostramidia?: true
    id_amostra?: true
  }

  export type AmostraMidiaMinAggregateInputType = {
    id_amostramidia?: true
    id_amostra?: true
    tp_arquivo?: true
    arquivo?: true
    descricao?: true
    data_upload?: true
  }

  export type AmostraMidiaMaxAggregateInputType = {
    id_amostramidia?: true
    id_amostra?: true
    tp_arquivo?: true
    arquivo?: true
    descricao?: true
    data_upload?: true
  }

  export type AmostraMidiaCountAggregateInputType = {
    id_amostramidia?: true
    id_amostra?: true
    tp_arquivo?: true
    arquivo?: true
    descricao?: true
    data_upload?: true
    _all?: true
  }

  export type AmostraMidiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmostraMidia to aggregate.
     */
    where?: AmostraMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraMidias to fetch.
     */
    orderBy?: AmostraMidiaOrderByWithRelationInput | AmostraMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmostraMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraMidias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AmostraMidias
    **/
    _count?: true | AmostraMidiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmostraMidiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmostraMidiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmostraMidiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmostraMidiaMaxAggregateInputType
  }

  export type GetAmostraMidiaAggregateType<T extends AmostraMidiaAggregateArgs> = {
        [P in keyof T & keyof AggregateAmostraMidia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmostraMidia[P]>
      : GetScalarType<T[P], AggregateAmostraMidia[P]>
  }




  export type AmostraMidiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmostraMidiaWhereInput
    orderBy?: AmostraMidiaOrderByWithAggregationInput | AmostraMidiaOrderByWithAggregationInput[]
    by: AmostraMidiaScalarFieldEnum[] | AmostraMidiaScalarFieldEnum
    having?: AmostraMidiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmostraMidiaCountAggregateInputType | true
    _avg?: AmostraMidiaAvgAggregateInputType
    _sum?: AmostraMidiaSumAggregateInputType
    _min?: AmostraMidiaMinAggregateInputType
    _max?: AmostraMidiaMaxAggregateInputType
  }

  export type AmostraMidiaGroupByOutputType = {
    id_amostramidia: number
    id_amostra: number | null
    tp_arquivo: string
    arquivo: Uint8Array
    descricao: string | null
    data_upload: Date
    _count: AmostraMidiaCountAggregateOutputType | null
    _avg: AmostraMidiaAvgAggregateOutputType | null
    _sum: AmostraMidiaSumAggregateOutputType | null
    _min: AmostraMidiaMinAggregateOutputType | null
    _max: AmostraMidiaMaxAggregateOutputType | null
  }

  type GetAmostraMidiaGroupByPayload<T extends AmostraMidiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmostraMidiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmostraMidiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmostraMidiaGroupByOutputType[P]>
            : GetScalarType<T[P], AmostraMidiaGroupByOutputType[P]>
        }
      >
    >


  export type AmostraMidiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostramidia?: boolean
    id_amostra?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
    amostra?: boolean | AmostraMidia$amostraArgs<ExtArgs>
  }, ExtArgs["result"]["amostraMidia"]>

  export type AmostraMidiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostramidia?: boolean
    id_amostra?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
    amostra?: boolean | AmostraMidia$amostraArgs<ExtArgs>
  }, ExtArgs["result"]["amostraMidia"]>

  export type AmostraMidiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_amostramidia?: boolean
    id_amostra?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
    amostra?: boolean | AmostraMidia$amostraArgs<ExtArgs>
  }, ExtArgs["result"]["amostraMidia"]>

  export type AmostraMidiaSelectScalar = {
    id_amostramidia?: boolean
    id_amostra?: boolean
    tp_arquivo?: boolean
    arquivo?: boolean
    descricao?: boolean
    data_upload?: boolean
  }

  export type AmostraMidiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_amostramidia" | "id_amostra" | "tp_arquivo" | "arquivo" | "descricao" | "data_upload", ExtArgs["result"]["amostraMidia"]>
  export type AmostraMidiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostra?: boolean | AmostraMidia$amostraArgs<ExtArgs>
  }
  export type AmostraMidiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostra?: boolean | AmostraMidia$amostraArgs<ExtArgs>
  }
  export type AmostraMidiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amostra?: boolean | AmostraMidia$amostraArgs<ExtArgs>
  }

  export type $AmostraMidiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AmostraMidia"
    objects: {
      amostra: Prisma.$AmostraPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_amostramidia: number
      id_amostra: number | null
      tp_arquivo: string
      arquivo: Uint8Array
      descricao: string | null
      data_upload: Date
    }, ExtArgs["result"]["amostraMidia"]>
    composites: {}
  }

  type AmostraMidiaGetPayload<S extends boolean | null | undefined | AmostraMidiaDefaultArgs> = $Result.GetResult<Prisma.$AmostraMidiaPayload, S>

  type AmostraMidiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmostraMidiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmostraMidiaCountAggregateInputType | true
    }

  export interface AmostraMidiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AmostraMidia'], meta: { name: 'AmostraMidia' } }
    /**
     * Find zero or one AmostraMidia that matches the filter.
     * @param {AmostraMidiaFindUniqueArgs} args - Arguments to find a AmostraMidia
     * @example
     * // Get one AmostraMidia
     * const amostraMidia = await prisma.amostraMidia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmostraMidiaFindUniqueArgs>(args: SelectSubset<T, AmostraMidiaFindUniqueArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AmostraMidia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmostraMidiaFindUniqueOrThrowArgs} args - Arguments to find a AmostraMidia
     * @example
     * // Get one AmostraMidia
     * const amostraMidia = await prisma.amostraMidia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmostraMidiaFindUniqueOrThrowArgs>(args: SelectSubset<T, AmostraMidiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmostraMidia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraMidiaFindFirstArgs} args - Arguments to find a AmostraMidia
     * @example
     * // Get one AmostraMidia
     * const amostraMidia = await prisma.amostraMidia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmostraMidiaFindFirstArgs>(args?: SelectSubset<T, AmostraMidiaFindFirstArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmostraMidia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraMidiaFindFirstOrThrowArgs} args - Arguments to find a AmostraMidia
     * @example
     * // Get one AmostraMidia
     * const amostraMidia = await prisma.amostraMidia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmostraMidiaFindFirstOrThrowArgs>(args?: SelectSubset<T, AmostraMidiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AmostraMidias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraMidiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AmostraMidias
     * const amostraMidias = await prisma.amostraMidia.findMany()
     * 
     * // Get first 10 AmostraMidias
     * const amostraMidias = await prisma.amostraMidia.findMany({ take: 10 })
     * 
     * // Only select the `id_amostramidia`
     * const amostraMidiaWithId_amostramidiaOnly = await prisma.amostraMidia.findMany({ select: { id_amostramidia: true } })
     * 
     */
    findMany<T extends AmostraMidiaFindManyArgs>(args?: SelectSubset<T, AmostraMidiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AmostraMidia.
     * @param {AmostraMidiaCreateArgs} args - Arguments to create a AmostraMidia.
     * @example
     * // Create one AmostraMidia
     * const AmostraMidia = await prisma.amostraMidia.create({
     *   data: {
     *     // ... data to create a AmostraMidia
     *   }
     * })
     * 
     */
    create<T extends AmostraMidiaCreateArgs>(args: SelectSubset<T, AmostraMidiaCreateArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AmostraMidias.
     * @param {AmostraMidiaCreateManyArgs} args - Arguments to create many AmostraMidias.
     * @example
     * // Create many AmostraMidias
     * const amostraMidia = await prisma.amostraMidia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmostraMidiaCreateManyArgs>(args?: SelectSubset<T, AmostraMidiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AmostraMidias and returns the data saved in the database.
     * @param {AmostraMidiaCreateManyAndReturnArgs} args - Arguments to create many AmostraMidias.
     * @example
     * // Create many AmostraMidias
     * const amostraMidia = await prisma.amostraMidia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AmostraMidias and only return the `id_amostramidia`
     * const amostraMidiaWithId_amostramidiaOnly = await prisma.amostraMidia.createManyAndReturn({
     *   select: { id_amostramidia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmostraMidiaCreateManyAndReturnArgs>(args?: SelectSubset<T, AmostraMidiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AmostraMidia.
     * @param {AmostraMidiaDeleteArgs} args - Arguments to delete one AmostraMidia.
     * @example
     * // Delete one AmostraMidia
     * const AmostraMidia = await prisma.amostraMidia.delete({
     *   where: {
     *     // ... filter to delete one AmostraMidia
     *   }
     * })
     * 
     */
    delete<T extends AmostraMidiaDeleteArgs>(args: SelectSubset<T, AmostraMidiaDeleteArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AmostraMidia.
     * @param {AmostraMidiaUpdateArgs} args - Arguments to update one AmostraMidia.
     * @example
     * // Update one AmostraMidia
     * const amostraMidia = await prisma.amostraMidia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmostraMidiaUpdateArgs>(args: SelectSubset<T, AmostraMidiaUpdateArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AmostraMidias.
     * @param {AmostraMidiaDeleteManyArgs} args - Arguments to filter AmostraMidias to delete.
     * @example
     * // Delete a few AmostraMidias
     * const { count } = await prisma.amostraMidia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmostraMidiaDeleteManyArgs>(args?: SelectSubset<T, AmostraMidiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmostraMidias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraMidiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AmostraMidias
     * const amostraMidia = await prisma.amostraMidia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmostraMidiaUpdateManyArgs>(args: SelectSubset<T, AmostraMidiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmostraMidias and returns the data updated in the database.
     * @param {AmostraMidiaUpdateManyAndReturnArgs} args - Arguments to update many AmostraMidias.
     * @example
     * // Update many AmostraMidias
     * const amostraMidia = await prisma.amostraMidia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AmostraMidias and only return the `id_amostramidia`
     * const amostraMidiaWithId_amostramidiaOnly = await prisma.amostraMidia.updateManyAndReturn({
     *   select: { id_amostramidia: true },
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
    updateManyAndReturn<T extends AmostraMidiaUpdateManyAndReturnArgs>(args: SelectSubset<T, AmostraMidiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AmostraMidia.
     * @param {AmostraMidiaUpsertArgs} args - Arguments to update or create a AmostraMidia.
     * @example
     * // Update or create a AmostraMidia
     * const amostraMidia = await prisma.amostraMidia.upsert({
     *   create: {
     *     // ... data to create a AmostraMidia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AmostraMidia we want to update
     *   }
     * })
     */
    upsert<T extends AmostraMidiaUpsertArgs>(args: SelectSubset<T, AmostraMidiaUpsertArgs<ExtArgs>>): Prisma__AmostraMidiaClient<$Result.GetResult<Prisma.$AmostraMidiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AmostraMidias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraMidiaCountArgs} args - Arguments to filter AmostraMidias to count.
     * @example
     * // Count the number of AmostraMidias
     * const count = await prisma.amostraMidia.count({
     *   where: {
     *     // ... the filter for the AmostraMidias we want to count
     *   }
     * })
    **/
    count<T extends AmostraMidiaCountArgs>(
      args?: Subset<T, AmostraMidiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmostraMidiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AmostraMidia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraMidiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmostraMidiaAggregateArgs>(args: Subset<T, AmostraMidiaAggregateArgs>): Prisma.PrismaPromise<GetAmostraMidiaAggregateType<T>>

    /**
     * Group by AmostraMidia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmostraMidiaGroupByArgs} args - Group by arguments.
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
      T extends AmostraMidiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmostraMidiaGroupByArgs['orderBy'] }
        : { orderBy?: AmostraMidiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmostraMidiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmostraMidiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AmostraMidia model
   */
  readonly fields: AmostraMidiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AmostraMidia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmostraMidiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amostra<T extends AmostraMidia$amostraArgs<ExtArgs> = {}>(args?: Subset<T, AmostraMidia$amostraArgs<ExtArgs>>): Prisma__AmostraClient<$Result.GetResult<Prisma.$AmostraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AmostraMidia model
   */
  interface AmostraMidiaFieldRefs {
    readonly id_amostramidia: FieldRef<"AmostraMidia", 'Int'>
    readonly id_amostra: FieldRef<"AmostraMidia", 'Int'>
    readonly tp_arquivo: FieldRef<"AmostraMidia", 'String'>
    readonly arquivo: FieldRef<"AmostraMidia", 'Bytes'>
    readonly descricao: FieldRef<"AmostraMidia", 'String'>
    readonly data_upload: FieldRef<"AmostraMidia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AmostraMidia findUnique
   */
  export type AmostraMidiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * Filter, which AmostraMidia to fetch.
     */
    where: AmostraMidiaWhereUniqueInput
  }

  /**
   * AmostraMidia findUniqueOrThrow
   */
  export type AmostraMidiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * Filter, which AmostraMidia to fetch.
     */
    where: AmostraMidiaWhereUniqueInput
  }

  /**
   * AmostraMidia findFirst
   */
  export type AmostraMidiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * Filter, which AmostraMidia to fetch.
     */
    where?: AmostraMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraMidias to fetch.
     */
    orderBy?: AmostraMidiaOrderByWithRelationInput | AmostraMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmostraMidias.
     */
    cursor?: AmostraMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraMidias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmostraMidias.
     */
    distinct?: AmostraMidiaScalarFieldEnum | AmostraMidiaScalarFieldEnum[]
  }

  /**
   * AmostraMidia findFirstOrThrow
   */
  export type AmostraMidiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * Filter, which AmostraMidia to fetch.
     */
    where?: AmostraMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraMidias to fetch.
     */
    orderBy?: AmostraMidiaOrderByWithRelationInput | AmostraMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmostraMidias.
     */
    cursor?: AmostraMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraMidias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmostraMidias.
     */
    distinct?: AmostraMidiaScalarFieldEnum | AmostraMidiaScalarFieldEnum[]
  }

  /**
   * AmostraMidia findMany
   */
  export type AmostraMidiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * Filter, which AmostraMidias to fetch.
     */
    where?: AmostraMidiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmostraMidias to fetch.
     */
    orderBy?: AmostraMidiaOrderByWithRelationInput | AmostraMidiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AmostraMidias.
     */
    cursor?: AmostraMidiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmostraMidias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmostraMidias.
     */
    skip?: number
    distinct?: AmostraMidiaScalarFieldEnum | AmostraMidiaScalarFieldEnum[]
  }

  /**
   * AmostraMidia create
   */
  export type AmostraMidiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * The data needed to create a AmostraMidia.
     */
    data: XOR<AmostraMidiaCreateInput, AmostraMidiaUncheckedCreateInput>
  }

  /**
   * AmostraMidia createMany
   */
  export type AmostraMidiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AmostraMidias.
     */
    data: AmostraMidiaCreateManyInput | AmostraMidiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AmostraMidia createManyAndReturn
   */
  export type AmostraMidiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * The data used to create many AmostraMidias.
     */
    data: AmostraMidiaCreateManyInput | AmostraMidiaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AmostraMidia update
   */
  export type AmostraMidiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * The data needed to update a AmostraMidia.
     */
    data: XOR<AmostraMidiaUpdateInput, AmostraMidiaUncheckedUpdateInput>
    /**
     * Choose, which AmostraMidia to update.
     */
    where: AmostraMidiaWhereUniqueInput
  }

  /**
   * AmostraMidia updateMany
   */
  export type AmostraMidiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AmostraMidias.
     */
    data: XOR<AmostraMidiaUpdateManyMutationInput, AmostraMidiaUncheckedUpdateManyInput>
    /**
     * Filter which AmostraMidias to update
     */
    where?: AmostraMidiaWhereInput
    /**
     * Limit how many AmostraMidias to update.
     */
    limit?: number
  }

  /**
   * AmostraMidia updateManyAndReturn
   */
  export type AmostraMidiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * The data used to update AmostraMidias.
     */
    data: XOR<AmostraMidiaUpdateManyMutationInput, AmostraMidiaUncheckedUpdateManyInput>
    /**
     * Filter which AmostraMidias to update
     */
    where?: AmostraMidiaWhereInput
    /**
     * Limit how many AmostraMidias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AmostraMidia upsert
   */
  export type AmostraMidiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * The filter to search for the AmostraMidia to update in case it exists.
     */
    where: AmostraMidiaWhereUniqueInput
    /**
     * In case the AmostraMidia found by the `where` argument doesn't exist, create a new AmostraMidia with this data.
     */
    create: XOR<AmostraMidiaCreateInput, AmostraMidiaUncheckedCreateInput>
    /**
     * In case the AmostraMidia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmostraMidiaUpdateInput, AmostraMidiaUncheckedUpdateInput>
  }

  /**
   * AmostraMidia delete
   */
  export type AmostraMidiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
    /**
     * Filter which AmostraMidia to delete.
     */
    where: AmostraMidiaWhereUniqueInput
  }

  /**
   * AmostraMidia deleteMany
   */
  export type AmostraMidiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmostraMidias to delete
     */
    where?: AmostraMidiaWhereInput
    /**
     * Limit how many AmostraMidias to delete.
     */
    limit?: number
  }

  /**
   * AmostraMidia.amostra
   */
  export type AmostraMidia$amostraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amostra
     */
    select?: AmostraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amostra
     */
    omit?: AmostraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraInclude<ExtArgs> | null
    where?: AmostraWhereInput
  }

  /**
   * AmostraMidia without action
   */
  export type AmostraMidiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmostraMidia
     */
    select?: AmostraMidiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmostraMidia
     */
    omit?: AmostraMidiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmostraMidiaInclude<ExtArgs> | null
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


  export const EstadoScalarFieldEnum: {
    id_estado: 'id_estado',
    nm_estado: 'nm_estado'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const MunicipioScalarFieldEnum: {
    id_municipio: 'id_municipio',
    nm_municipio: 'nm_municipio',
    id_estado: 'id_estado'
  };

  export type MunicipioScalarFieldEnum = (typeof MunicipioScalarFieldEnum)[keyof typeof MunicipioScalarFieldEnum]


  export const TipoVegetacaoScalarFieldEnum: {
    id_vegetacao: 'id_vegetacao',
    nm_vegetacao: 'nm_vegetacao'
  };

  export type TipoVegetacaoScalarFieldEnum = (typeof TipoVegetacaoScalarFieldEnum)[keyof typeof TipoVegetacaoScalarFieldEnum]


  export const TipoRelevoScalarFieldEnum: {
    id_relevo: 'id_relevo',
    nm_relevo: 'nm_relevo'
  };

  export type TipoRelevoScalarFieldEnum = (typeof TipoRelevoScalarFieldEnum)[keyof typeof TipoRelevoScalarFieldEnum]


  export const TipoSoloScalarFieldEnum: {
    id_solo: 'id_solo',
    nm_solo: 'nm_solo'
  };

  export type TipoSoloScalarFieldEnum = (typeof TipoSoloScalarFieldEnum)[keyof typeof TipoSoloScalarFieldEnum]


  export const ExpedicaoScalarFieldEnum: {
    id_expedicao: 'id_expedicao',
    dt_expedicao: 'dt_expedicao',
    id_municipio: 'id_municipio',
    id_vegetacao: 'id_vegetacao'
  };

  export type ExpedicaoScalarFieldEnum = (typeof ExpedicaoScalarFieldEnum)[keyof typeof ExpedicaoScalarFieldEnum]


  export const ExpedicaoMidiaScalarFieldEnum: {
    id_expedicaomidia: 'id_expedicaomidia',
    id_expedicao: 'id_expedicao',
    tp_arquivo: 'tp_arquivo',
    arquivo: 'arquivo',
    descricao: 'descricao',
    data_upload: 'data_upload'
  };

  export type ExpedicaoMidiaScalarFieldEnum = (typeof ExpedicaoMidiaScalarFieldEnum)[keyof typeof ExpedicaoMidiaScalarFieldEnum]


  export const DadoEcologicoScalarFieldEnum: {
    id_dadoeco: 'id_dadoeco',
    ds_dadoeco: 'ds_dadoeco'
  };

  export type DadoEcologicoScalarFieldEnum = (typeof DadoEcologicoScalarFieldEnum)[keyof typeof DadoEcologicoScalarFieldEnum]


  export const ItemDadoScalarFieldEnum: {
    id_dadoeco: 'id_dadoeco',
    id_itemdado: 'id_itemdado',
    ds_itemdado: 'ds_itemdado'
  };

  export type ItemDadoScalarFieldEnum = (typeof ItemDadoScalarFieldEnum)[keyof typeof ItemDadoScalarFieldEnum]


  export const PlantaScalarFieldEnum: {
    id_planta: 'id_planta',
    nm_vulgar: 'nm_vulgar',
    nm_cientifico: 'nm_cientifico',
    nm_familia: 'nm_familia'
  };

  export type PlantaScalarFieldEnum = (typeof PlantaScalarFieldEnum)[keyof typeof PlantaScalarFieldEnum]


  export const PlantaDadoScalarFieldEnum: {
    id_planta: 'id_planta',
    id_dadoeco: 'id_dadoeco',
    id_itemdado: 'id_itemdado',
    ds_obs: 'ds_obs'
  };

  export type PlantaDadoScalarFieldEnum = (typeof PlantaDadoScalarFieldEnum)[keyof typeof PlantaDadoScalarFieldEnum]


  export const AmostraScalarFieldEnum: {
    id_amostra: 'id_amostra',
    id_planta: 'id_planta',
    id_expedicao: 'id_expedicao',
    id_relevo: 'id_relevo',
    id_solo: 'id_solo',
    nm_coletor: 'nm_coletor',
    nr_altitude: 'nr_altitude',
    nr_longitude: 'nr_longitude',
    nr_latitude: 'nr_latitude',
    nr_altura: 'nr_altura',
    nr_DAP: 'nr_DAP',
    nr_CAP: 'nr_CAP',
    ds_exsudado: 'ds_exsudado',
    ds_obscomplement: 'ds_obscomplement'
  };

  export type AmostraScalarFieldEnum = (typeof AmostraScalarFieldEnum)[keyof typeof AmostraScalarFieldEnum]


  export const AmostraDadoScalarFieldEnum: {
    id_amostra: 'id_amostra',
    id_dadoeco: 'id_dadoeco',
    id_itemdado: 'id_itemdado',
    ds_cor: 'ds_cor',
    ds_obs: 'ds_obs'
  };

  export type AmostraDadoScalarFieldEnum = (typeof AmostraDadoScalarFieldEnum)[keyof typeof AmostraDadoScalarFieldEnum]


  export const AmostraMidiaScalarFieldEnum: {
    id_amostramidia: 'id_amostramidia',
    id_amostra: 'id_amostra',
    tp_arquivo: 'tp_arquivo',
    arquivo: 'arquivo',
    descricao: 'descricao',
    data_upload: 'data_upload'
  };

  export type AmostraMidiaScalarFieldEnum = (typeof AmostraMidiaScalarFieldEnum)[keyof typeof AmostraMidiaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EstadoWhereInput = {
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    id_estado?: StringFilter<"Estado"> | string
    nm_estado?: StringFilter<"Estado"> | string
    municipios?: MunicipioListRelationFilter
  }

  export type EstadoOrderByWithRelationInput = {
    id_estado?: SortOrder
    nm_estado?: SortOrder
    municipios?: MunicipioOrderByRelationAggregateInput
  }

  export type EstadoWhereUniqueInput = Prisma.AtLeast<{
    id_estado?: string
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    nm_estado?: StringFilter<"Estado"> | string
    municipios?: MunicipioListRelationFilter
  }, "id_estado">

  export type EstadoOrderByWithAggregationInput = {
    id_estado?: SortOrder
    nm_estado?: SortOrder
    _count?: EstadoCountOrderByAggregateInput
    _max?: EstadoMaxOrderByAggregateInput
    _min?: EstadoMinOrderByAggregateInput
  }

  export type EstadoScalarWhereWithAggregatesInput = {
    AND?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    OR?: EstadoScalarWhereWithAggregatesInput[]
    NOT?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    id_estado?: StringWithAggregatesFilter<"Estado"> | string
    nm_estado?: StringWithAggregatesFilter<"Estado"> | string
  }

  export type MunicipioWhereInput = {
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    id_municipio?: IntFilter<"Municipio"> | number
    nm_municipio?: StringFilter<"Municipio"> | string
    id_estado?: StringFilter<"Municipio"> | string
    estado?: XOR<EstadoScalarRelationFilter, EstadoWhereInput>
    expedicoes?: ExpedicaoListRelationFilter
  }

  export type MunicipioOrderByWithRelationInput = {
    id_municipio?: SortOrder
    nm_municipio?: SortOrder
    id_estado?: SortOrder
    estado?: EstadoOrderByWithRelationInput
    expedicoes?: ExpedicaoOrderByRelationAggregateInput
  }

  export type MunicipioWhereUniqueInput = Prisma.AtLeast<{
    id_municipio?: number
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    nm_municipio?: StringFilter<"Municipio"> | string
    id_estado?: StringFilter<"Municipio"> | string
    estado?: XOR<EstadoScalarRelationFilter, EstadoWhereInput>
    expedicoes?: ExpedicaoListRelationFilter
  }, "id_municipio">

  export type MunicipioOrderByWithAggregationInput = {
    id_municipio?: SortOrder
    nm_municipio?: SortOrder
    id_estado?: SortOrder
    _count?: MunicipioCountOrderByAggregateInput
    _avg?: MunicipioAvgOrderByAggregateInput
    _max?: MunicipioMaxOrderByAggregateInput
    _min?: MunicipioMinOrderByAggregateInput
    _sum?: MunicipioSumOrderByAggregateInput
  }

  export type MunicipioScalarWhereWithAggregatesInput = {
    AND?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    OR?: MunicipioScalarWhereWithAggregatesInput[]
    NOT?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    id_municipio?: IntWithAggregatesFilter<"Municipio"> | number
    nm_municipio?: StringWithAggregatesFilter<"Municipio"> | string
    id_estado?: StringWithAggregatesFilter<"Municipio"> | string
  }

  export type TipoVegetacaoWhereInput = {
    AND?: TipoVegetacaoWhereInput | TipoVegetacaoWhereInput[]
    OR?: TipoVegetacaoWhereInput[]
    NOT?: TipoVegetacaoWhereInput | TipoVegetacaoWhereInput[]
    id_vegetacao?: IntFilter<"TipoVegetacao"> | number
    nm_vegetacao?: StringFilter<"TipoVegetacao"> | string
    expedicoes?: ExpedicaoListRelationFilter
  }

  export type TipoVegetacaoOrderByWithRelationInput = {
    id_vegetacao?: SortOrder
    nm_vegetacao?: SortOrder
    expedicoes?: ExpedicaoOrderByRelationAggregateInput
  }

  export type TipoVegetacaoWhereUniqueInput = Prisma.AtLeast<{
    id_vegetacao?: number
    AND?: TipoVegetacaoWhereInput | TipoVegetacaoWhereInput[]
    OR?: TipoVegetacaoWhereInput[]
    NOT?: TipoVegetacaoWhereInput | TipoVegetacaoWhereInput[]
    nm_vegetacao?: StringFilter<"TipoVegetacao"> | string
    expedicoes?: ExpedicaoListRelationFilter
  }, "id_vegetacao">

  export type TipoVegetacaoOrderByWithAggregationInput = {
    id_vegetacao?: SortOrder
    nm_vegetacao?: SortOrder
    _count?: TipoVegetacaoCountOrderByAggregateInput
    _avg?: TipoVegetacaoAvgOrderByAggregateInput
    _max?: TipoVegetacaoMaxOrderByAggregateInput
    _min?: TipoVegetacaoMinOrderByAggregateInput
    _sum?: TipoVegetacaoSumOrderByAggregateInput
  }

  export type TipoVegetacaoScalarWhereWithAggregatesInput = {
    AND?: TipoVegetacaoScalarWhereWithAggregatesInput | TipoVegetacaoScalarWhereWithAggregatesInput[]
    OR?: TipoVegetacaoScalarWhereWithAggregatesInput[]
    NOT?: TipoVegetacaoScalarWhereWithAggregatesInput | TipoVegetacaoScalarWhereWithAggregatesInput[]
    id_vegetacao?: IntWithAggregatesFilter<"TipoVegetacao"> | number
    nm_vegetacao?: StringWithAggregatesFilter<"TipoVegetacao"> | string
  }

  export type TipoRelevoWhereInput = {
    AND?: TipoRelevoWhereInput | TipoRelevoWhereInput[]
    OR?: TipoRelevoWhereInput[]
    NOT?: TipoRelevoWhereInput | TipoRelevoWhereInput[]
    id_relevo?: IntFilter<"TipoRelevo"> | number
    nm_relevo?: StringFilter<"TipoRelevo"> | string
    amostras?: AmostraListRelationFilter
  }

  export type TipoRelevoOrderByWithRelationInput = {
    id_relevo?: SortOrder
    nm_relevo?: SortOrder
    amostras?: AmostraOrderByRelationAggregateInput
  }

  export type TipoRelevoWhereUniqueInput = Prisma.AtLeast<{
    id_relevo?: number
    AND?: TipoRelevoWhereInput | TipoRelevoWhereInput[]
    OR?: TipoRelevoWhereInput[]
    NOT?: TipoRelevoWhereInput | TipoRelevoWhereInput[]
    nm_relevo?: StringFilter<"TipoRelevo"> | string
    amostras?: AmostraListRelationFilter
  }, "id_relevo">

  export type TipoRelevoOrderByWithAggregationInput = {
    id_relevo?: SortOrder
    nm_relevo?: SortOrder
    _count?: TipoRelevoCountOrderByAggregateInput
    _avg?: TipoRelevoAvgOrderByAggregateInput
    _max?: TipoRelevoMaxOrderByAggregateInput
    _min?: TipoRelevoMinOrderByAggregateInput
    _sum?: TipoRelevoSumOrderByAggregateInput
  }

  export type TipoRelevoScalarWhereWithAggregatesInput = {
    AND?: TipoRelevoScalarWhereWithAggregatesInput | TipoRelevoScalarWhereWithAggregatesInput[]
    OR?: TipoRelevoScalarWhereWithAggregatesInput[]
    NOT?: TipoRelevoScalarWhereWithAggregatesInput | TipoRelevoScalarWhereWithAggregatesInput[]
    id_relevo?: IntWithAggregatesFilter<"TipoRelevo"> | number
    nm_relevo?: StringWithAggregatesFilter<"TipoRelevo"> | string
  }

  export type TipoSoloWhereInput = {
    AND?: TipoSoloWhereInput | TipoSoloWhereInput[]
    OR?: TipoSoloWhereInput[]
    NOT?: TipoSoloWhereInput | TipoSoloWhereInput[]
    id_solo?: IntFilter<"TipoSolo"> | number
    nm_solo?: StringFilter<"TipoSolo"> | string
    amostras?: AmostraListRelationFilter
  }

  export type TipoSoloOrderByWithRelationInput = {
    id_solo?: SortOrder
    nm_solo?: SortOrder
    amostras?: AmostraOrderByRelationAggregateInput
  }

  export type TipoSoloWhereUniqueInput = Prisma.AtLeast<{
    id_solo?: number
    AND?: TipoSoloWhereInput | TipoSoloWhereInput[]
    OR?: TipoSoloWhereInput[]
    NOT?: TipoSoloWhereInput | TipoSoloWhereInput[]
    nm_solo?: StringFilter<"TipoSolo"> | string
    amostras?: AmostraListRelationFilter
  }, "id_solo">

  export type TipoSoloOrderByWithAggregationInput = {
    id_solo?: SortOrder
    nm_solo?: SortOrder
    _count?: TipoSoloCountOrderByAggregateInput
    _avg?: TipoSoloAvgOrderByAggregateInput
    _max?: TipoSoloMaxOrderByAggregateInput
    _min?: TipoSoloMinOrderByAggregateInput
    _sum?: TipoSoloSumOrderByAggregateInput
  }

  export type TipoSoloScalarWhereWithAggregatesInput = {
    AND?: TipoSoloScalarWhereWithAggregatesInput | TipoSoloScalarWhereWithAggregatesInput[]
    OR?: TipoSoloScalarWhereWithAggregatesInput[]
    NOT?: TipoSoloScalarWhereWithAggregatesInput | TipoSoloScalarWhereWithAggregatesInput[]
    id_solo?: IntWithAggregatesFilter<"TipoSolo"> | number
    nm_solo?: StringWithAggregatesFilter<"TipoSolo"> | string
  }

  export type ExpedicaoWhereInput = {
    AND?: ExpedicaoWhereInput | ExpedicaoWhereInput[]
    OR?: ExpedicaoWhereInput[]
    NOT?: ExpedicaoWhereInput | ExpedicaoWhereInput[]
    id_expedicao?: IntFilter<"Expedicao"> | number
    dt_expedicao?: DateTimeFilter<"Expedicao"> | Date | string
    id_municipio?: IntFilter<"Expedicao"> | number
    id_vegetacao?: IntNullableFilter<"Expedicao"> | number | null
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
    tipoVegetacao?: XOR<TipoVegetacaoNullableScalarRelationFilter, TipoVegetacaoWhereInput> | null
    expedicaoMidia?: ExpedicaoMidiaListRelationFilter
    amostras?: AmostraListRelationFilter
  }

  export type ExpedicaoOrderByWithRelationInput = {
    id_expedicao?: SortOrder
    dt_expedicao?: SortOrder
    id_municipio?: SortOrder
    id_vegetacao?: SortOrderInput | SortOrder
    municipio?: MunicipioOrderByWithRelationInput
    tipoVegetacao?: TipoVegetacaoOrderByWithRelationInput
    expedicaoMidia?: ExpedicaoMidiaOrderByRelationAggregateInput
    amostras?: AmostraOrderByRelationAggregateInput
  }

  export type ExpedicaoWhereUniqueInput = Prisma.AtLeast<{
    id_expedicao?: number
    AND?: ExpedicaoWhereInput | ExpedicaoWhereInput[]
    OR?: ExpedicaoWhereInput[]
    NOT?: ExpedicaoWhereInput | ExpedicaoWhereInput[]
    dt_expedicao?: DateTimeFilter<"Expedicao"> | Date | string
    id_municipio?: IntFilter<"Expedicao"> | number
    id_vegetacao?: IntNullableFilter<"Expedicao"> | number | null
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
    tipoVegetacao?: XOR<TipoVegetacaoNullableScalarRelationFilter, TipoVegetacaoWhereInput> | null
    expedicaoMidia?: ExpedicaoMidiaListRelationFilter
    amostras?: AmostraListRelationFilter
  }, "id_expedicao">

  export type ExpedicaoOrderByWithAggregationInput = {
    id_expedicao?: SortOrder
    dt_expedicao?: SortOrder
    id_municipio?: SortOrder
    id_vegetacao?: SortOrderInput | SortOrder
    _count?: ExpedicaoCountOrderByAggregateInput
    _avg?: ExpedicaoAvgOrderByAggregateInput
    _max?: ExpedicaoMaxOrderByAggregateInput
    _min?: ExpedicaoMinOrderByAggregateInput
    _sum?: ExpedicaoSumOrderByAggregateInput
  }

  export type ExpedicaoScalarWhereWithAggregatesInput = {
    AND?: ExpedicaoScalarWhereWithAggregatesInput | ExpedicaoScalarWhereWithAggregatesInput[]
    OR?: ExpedicaoScalarWhereWithAggregatesInput[]
    NOT?: ExpedicaoScalarWhereWithAggregatesInput | ExpedicaoScalarWhereWithAggregatesInput[]
    id_expedicao?: IntWithAggregatesFilter<"Expedicao"> | number
    dt_expedicao?: DateTimeWithAggregatesFilter<"Expedicao"> | Date | string
    id_municipio?: IntWithAggregatesFilter<"Expedicao"> | number
    id_vegetacao?: IntNullableWithAggregatesFilter<"Expedicao"> | number | null
  }

  export type ExpedicaoMidiaWhereInput = {
    AND?: ExpedicaoMidiaWhereInput | ExpedicaoMidiaWhereInput[]
    OR?: ExpedicaoMidiaWhereInput[]
    NOT?: ExpedicaoMidiaWhereInput | ExpedicaoMidiaWhereInput[]
    id_expedicaomidia?: IntFilter<"ExpedicaoMidia"> | number
    id_expedicao?: IntNullableFilter<"ExpedicaoMidia"> | number | null
    tp_arquivo?: StringFilter<"ExpedicaoMidia"> | string
    arquivo?: BytesFilter<"ExpedicaoMidia"> | Uint8Array
    descricao?: StringNullableFilter<"ExpedicaoMidia"> | string | null
    data_upload?: DateTimeFilter<"ExpedicaoMidia"> | Date | string
    expedicao?: XOR<ExpedicaoNullableScalarRelationFilter, ExpedicaoWhereInput> | null
  }

  export type ExpedicaoMidiaOrderByWithRelationInput = {
    id_expedicaomidia?: SortOrder
    id_expedicao?: SortOrderInput | SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_upload?: SortOrder
    expedicao?: ExpedicaoOrderByWithRelationInput
  }

  export type ExpedicaoMidiaWhereUniqueInput = Prisma.AtLeast<{
    id_expedicaomidia?: number
    AND?: ExpedicaoMidiaWhereInput | ExpedicaoMidiaWhereInput[]
    OR?: ExpedicaoMidiaWhereInput[]
    NOT?: ExpedicaoMidiaWhereInput | ExpedicaoMidiaWhereInput[]
    id_expedicao?: IntNullableFilter<"ExpedicaoMidia"> | number | null
    tp_arquivo?: StringFilter<"ExpedicaoMidia"> | string
    arquivo?: BytesFilter<"ExpedicaoMidia"> | Uint8Array
    descricao?: StringNullableFilter<"ExpedicaoMidia"> | string | null
    data_upload?: DateTimeFilter<"ExpedicaoMidia"> | Date | string
    expedicao?: XOR<ExpedicaoNullableScalarRelationFilter, ExpedicaoWhereInput> | null
  }, "id_expedicaomidia">

  export type ExpedicaoMidiaOrderByWithAggregationInput = {
    id_expedicaomidia?: SortOrder
    id_expedicao?: SortOrderInput | SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_upload?: SortOrder
    _count?: ExpedicaoMidiaCountOrderByAggregateInput
    _avg?: ExpedicaoMidiaAvgOrderByAggregateInput
    _max?: ExpedicaoMidiaMaxOrderByAggregateInput
    _min?: ExpedicaoMidiaMinOrderByAggregateInput
    _sum?: ExpedicaoMidiaSumOrderByAggregateInput
  }

  export type ExpedicaoMidiaScalarWhereWithAggregatesInput = {
    AND?: ExpedicaoMidiaScalarWhereWithAggregatesInput | ExpedicaoMidiaScalarWhereWithAggregatesInput[]
    OR?: ExpedicaoMidiaScalarWhereWithAggregatesInput[]
    NOT?: ExpedicaoMidiaScalarWhereWithAggregatesInput | ExpedicaoMidiaScalarWhereWithAggregatesInput[]
    id_expedicaomidia?: IntWithAggregatesFilter<"ExpedicaoMidia"> | number
    id_expedicao?: IntNullableWithAggregatesFilter<"ExpedicaoMidia"> | number | null
    tp_arquivo?: StringWithAggregatesFilter<"ExpedicaoMidia"> | string
    arquivo?: BytesWithAggregatesFilter<"ExpedicaoMidia"> | Uint8Array
    descricao?: StringNullableWithAggregatesFilter<"ExpedicaoMidia"> | string | null
    data_upload?: DateTimeWithAggregatesFilter<"ExpedicaoMidia"> | Date | string
  }

  export type DadoEcologicoWhereInput = {
    AND?: DadoEcologicoWhereInput | DadoEcologicoWhereInput[]
    OR?: DadoEcologicoWhereInput[]
    NOT?: DadoEcologicoWhereInput | DadoEcologicoWhereInput[]
    id_dadoeco?: IntFilter<"DadoEcologico"> | number
    ds_dadoeco?: StringFilter<"DadoEcologico"> | string
    item_dados?: ItemDadoListRelationFilter
    planta_dados?: PlantaDadoListRelationFilter
    amostra_dados?: AmostraDadoListRelationFilter
  }

  export type DadoEcologicoOrderByWithRelationInput = {
    id_dadoeco?: SortOrder
    ds_dadoeco?: SortOrder
    item_dados?: ItemDadoOrderByRelationAggregateInput
    planta_dados?: PlantaDadoOrderByRelationAggregateInput
    amostra_dados?: AmostraDadoOrderByRelationAggregateInput
  }

  export type DadoEcologicoWhereUniqueInput = Prisma.AtLeast<{
    id_dadoeco?: number
    AND?: DadoEcologicoWhereInput | DadoEcologicoWhereInput[]
    OR?: DadoEcologicoWhereInput[]
    NOT?: DadoEcologicoWhereInput | DadoEcologicoWhereInput[]
    ds_dadoeco?: StringFilter<"DadoEcologico"> | string
    item_dados?: ItemDadoListRelationFilter
    planta_dados?: PlantaDadoListRelationFilter
    amostra_dados?: AmostraDadoListRelationFilter
  }, "id_dadoeco">

  export type DadoEcologicoOrderByWithAggregationInput = {
    id_dadoeco?: SortOrder
    ds_dadoeco?: SortOrder
    _count?: DadoEcologicoCountOrderByAggregateInput
    _avg?: DadoEcologicoAvgOrderByAggregateInput
    _max?: DadoEcologicoMaxOrderByAggregateInput
    _min?: DadoEcologicoMinOrderByAggregateInput
    _sum?: DadoEcologicoSumOrderByAggregateInput
  }

  export type DadoEcologicoScalarWhereWithAggregatesInput = {
    AND?: DadoEcologicoScalarWhereWithAggregatesInput | DadoEcologicoScalarWhereWithAggregatesInput[]
    OR?: DadoEcologicoScalarWhereWithAggregatesInput[]
    NOT?: DadoEcologicoScalarWhereWithAggregatesInput | DadoEcologicoScalarWhereWithAggregatesInput[]
    id_dadoeco?: IntWithAggregatesFilter<"DadoEcologico"> | number
    ds_dadoeco?: StringWithAggregatesFilter<"DadoEcologico"> | string
  }

  export type ItemDadoWhereInput = {
    AND?: ItemDadoWhereInput | ItemDadoWhereInput[]
    OR?: ItemDadoWhereInput[]
    NOT?: ItemDadoWhereInput | ItemDadoWhereInput[]
    id_dadoeco?: IntFilter<"ItemDado"> | number
    id_itemdado?: IntFilter<"ItemDado"> | number
    ds_itemdado?: StringFilter<"ItemDado"> | string
    dadoEcologico?: XOR<DadoEcologicoScalarRelationFilter, DadoEcologicoWhereInput>
    planta_dados?: PlantaDadoListRelationFilter
    amostra_dados?: AmostraDadoListRelationFilter
  }

  export type ItemDadoOrderByWithRelationInput = {
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_itemdado?: SortOrder
    dadoEcologico?: DadoEcologicoOrderByWithRelationInput
    planta_dados?: PlantaDadoOrderByRelationAggregateInput
    amostra_dados?: AmostraDadoOrderByRelationAggregateInput
  }

  export type ItemDadoWhereUniqueInput = Prisma.AtLeast<{
    id_dadoeco_id_itemdado?: ItemDadoId_dadoecoId_itemdadoCompoundUniqueInput
    AND?: ItemDadoWhereInput | ItemDadoWhereInput[]
    OR?: ItemDadoWhereInput[]
    NOT?: ItemDadoWhereInput | ItemDadoWhereInput[]
    id_dadoeco?: IntFilter<"ItemDado"> | number
    id_itemdado?: IntFilter<"ItemDado"> | number
    ds_itemdado?: StringFilter<"ItemDado"> | string
    dadoEcologico?: XOR<DadoEcologicoScalarRelationFilter, DadoEcologicoWhereInput>
    planta_dados?: PlantaDadoListRelationFilter
    amostra_dados?: AmostraDadoListRelationFilter
  }, "id_dadoeco_id_itemdado">

  export type ItemDadoOrderByWithAggregationInput = {
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_itemdado?: SortOrder
    _count?: ItemDadoCountOrderByAggregateInput
    _avg?: ItemDadoAvgOrderByAggregateInput
    _max?: ItemDadoMaxOrderByAggregateInput
    _min?: ItemDadoMinOrderByAggregateInput
    _sum?: ItemDadoSumOrderByAggregateInput
  }

  export type ItemDadoScalarWhereWithAggregatesInput = {
    AND?: ItemDadoScalarWhereWithAggregatesInput | ItemDadoScalarWhereWithAggregatesInput[]
    OR?: ItemDadoScalarWhereWithAggregatesInput[]
    NOT?: ItemDadoScalarWhereWithAggregatesInput | ItemDadoScalarWhereWithAggregatesInput[]
    id_dadoeco?: IntWithAggregatesFilter<"ItemDado"> | number
    id_itemdado?: IntWithAggregatesFilter<"ItemDado"> | number
    ds_itemdado?: StringWithAggregatesFilter<"ItemDado"> | string
  }

  export type PlantaWhereInput = {
    AND?: PlantaWhereInput | PlantaWhereInput[]
    OR?: PlantaWhereInput[]
    NOT?: PlantaWhereInput | PlantaWhereInput[]
    id_planta?: IntFilter<"Planta"> | number
    nm_vulgar?: StringFilter<"Planta"> | string
    nm_cientifico?: StringFilter<"Planta"> | string
    nm_familia?: StringFilter<"Planta"> | string
    planta_dados?: PlantaDadoListRelationFilter
    amostras?: AmostraListRelationFilter
  }

  export type PlantaOrderByWithRelationInput = {
    id_planta?: SortOrder
    nm_vulgar?: SortOrder
    nm_cientifico?: SortOrder
    nm_familia?: SortOrder
    planta_dados?: PlantaDadoOrderByRelationAggregateInput
    amostras?: AmostraOrderByRelationAggregateInput
  }

  export type PlantaWhereUniqueInput = Prisma.AtLeast<{
    id_planta?: number
    AND?: PlantaWhereInput | PlantaWhereInput[]
    OR?: PlantaWhereInput[]
    NOT?: PlantaWhereInput | PlantaWhereInput[]
    nm_vulgar?: StringFilter<"Planta"> | string
    nm_cientifico?: StringFilter<"Planta"> | string
    nm_familia?: StringFilter<"Planta"> | string
    planta_dados?: PlantaDadoListRelationFilter
    amostras?: AmostraListRelationFilter
  }, "id_planta">

  export type PlantaOrderByWithAggregationInput = {
    id_planta?: SortOrder
    nm_vulgar?: SortOrder
    nm_cientifico?: SortOrder
    nm_familia?: SortOrder
    _count?: PlantaCountOrderByAggregateInput
    _avg?: PlantaAvgOrderByAggregateInput
    _max?: PlantaMaxOrderByAggregateInput
    _min?: PlantaMinOrderByAggregateInput
    _sum?: PlantaSumOrderByAggregateInput
  }

  export type PlantaScalarWhereWithAggregatesInput = {
    AND?: PlantaScalarWhereWithAggregatesInput | PlantaScalarWhereWithAggregatesInput[]
    OR?: PlantaScalarWhereWithAggregatesInput[]
    NOT?: PlantaScalarWhereWithAggregatesInput | PlantaScalarWhereWithAggregatesInput[]
    id_planta?: IntWithAggregatesFilter<"Planta"> | number
    nm_vulgar?: StringWithAggregatesFilter<"Planta"> | string
    nm_cientifico?: StringWithAggregatesFilter<"Planta"> | string
    nm_familia?: StringWithAggregatesFilter<"Planta"> | string
  }

  export type PlantaDadoWhereInput = {
    AND?: PlantaDadoWhereInput | PlantaDadoWhereInput[]
    OR?: PlantaDadoWhereInput[]
    NOT?: PlantaDadoWhereInput | PlantaDadoWhereInput[]
    id_planta?: IntFilter<"PlantaDado"> | number
    id_dadoeco?: IntFilter<"PlantaDado"> | number
    id_itemdado?: IntFilter<"PlantaDado"> | number
    ds_obs?: StringNullableFilter<"PlantaDado"> | string | null
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
    item_dado?: XOR<ItemDadoScalarRelationFilter, ItemDadoWhereInput>
    dadoEcologico?: XOR<DadoEcologicoScalarRelationFilter, DadoEcologicoWhereInput>
  }

  export type PlantaDadoOrderByWithRelationInput = {
    id_planta?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_obs?: SortOrderInput | SortOrder
    planta?: PlantaOrderByWithRelationInput
    item_dado?: ItemDadoOrderByWithRelationInput
    dadoEcologico?: DadoEcologicoOrderByWithRelationInput
  }

  export type PlantaDadoWhereUniqueInput = Prisma.AtLeast<{
    id_planta_id_dadoeco_id_itemdado?: PlantaDadoId_plantaId_dadoecoId_itemdadoCompoundUniqueInput
    AND?: PlantaDadoWhereInput | PlantaDadoWhereInput[]
    OR?: PlantaDadoWhereInput[]
    NOT?: PlantaDadoWhereInput | PlantaDadoWhereInput[]
    id_planta?: IntFilter<"PlantaDado"> | number
    id_dadoeco?: IntFilter<"PlantaDado"> | number
    id_itemdado?: IntFilter<"PlantaDado"> | number
    ds_obs?: StringNullableFilter<"PlantaDado"> | string | null
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
    item_dado?: XOR<ItemDadoScalarRelationFilter, ItemDadoWhereInput>
    dadoEcologico?: XOR<DadoEcologicoScalarRelationFilter, DadoEcologicoWhereInput>
  }, "id_planta_id_dadoeco_id_itemdado">

  export type PlantaDadoOrderByWithAggregationInput = {
    id_planta?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_obs?: SortOrderInput | SortOrder
    _count?: PlantaDadoCountOrderByAggregateInput
    _avg?: PlantaDadoAvgOrderByAggregateInput
    _max?: PlantaDadoMaxOrderByAggregateInput
    _min?: PlantaDadoMinOrderByAggregateInput
    _sum?: PlantaDadoSumOrderByAggregateInput
  }

  export type PlantaDadoScalarWhereWithAggregatesInput = {
    AND?: PlantaDadoScalarWhereWithAggregatesInput | PlantaDadoScalarWhereWithAggregatesInput[]
    OR?: PlantaDadoScalarWhereWithAggregatesInput[]
    NOT?: PlantaDadoScalarWhereWithAggregatesInput | PlantaDadoScalarWhereWithAggregatesInput[]
    id_planta?: IntWithAggregatesFilter<"PlantaDado"> | number
    id_dadoeco?: IntWithAggregatesFilter<"PlantaDado"> | number
    id_itemdado?: IntWithAggregatesFilter<"PlantaDado"> | number
    ds_obs?: StringNullableWithAggregatesFilter<"PlantaDado"> | string | null
  }

  export type AmostraWhereInput = {
    AND?: AmostraWhereInput | AmostraWhereInput[]
    OR?: AmostraWhereInput[]
    NOT?: AmostraWhereInput | AmostraWhereInput[]
    id_amostra?: IntFilter<"Amostra"> | number
    id_planta?: IntNullableFilter<"Amostra"> | number | null
    id_expedicao?: IntNullableFilter<"Amostra"> | number | null
    id_relevo?: IntNullableFilter<"Amostra"> | number | null
    id_solo?: IntNullableFilter<"Amostra"> | number | null
    nm_coletor?: StringFilter<"Amostra"> | string
    nr_altitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_altura?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: StringNullableFilter<"Amostra"> | string | null
    ds_obscomplement?: StringNullableFilter<"Amostra"> | string | null
    planta?: XOR<PlantaNullableScalarRelationFilter, PlantaWhereInput> | null
    expedicao?: XOR<ExpedicaoNullableScalarRelationFilter, ExpedicaoWhereInput> | null
    tipoRelevo?: XOR<TipoRelevoNullableScalarRelationFilter, TipoRelevoWhereInput> | null
    tipoSolo?: XOR<TipoSoloNullableScalarRelationFilter, TipoSoloWhereInput> | null
    amostra_dados?: AmostraDadoListRelationFilter
    amostra_midias?: AmostraMidiaListRelationFilter
  }

  export type AmostraOrderByWithRelationInput = {
    id_amostra?: SortOrder
    id_planta?: SortOrderInput | SortOrder
    id_expedicao?: SortOrderInput | SortOrder
    id_relevo?: SortOrderInput | SortOrder
    id_solo?: SortOrderInput | SortOrder
    nm_coletor?: SortOrder
    nr_altitude?: SortOrderInput | SortOrder
    nr_longitude?: SortOrderInput | SortOrder
    nr_latitude?: SortOrderInput | SortOrder
    nr_altura?: SortOrderInput | SortOrder
    nr_DAP?: SortOrderInput | SortOrder
    nr_CAP?: SortOrderInput | SortOrder
    ds_exsudado?: SortOrderInput | SortOrder
    ds_obscomplement?: SortOrderInput | SortOrder
    planta?: PlantaOrderByWithRelationInput
    expedicao?: ExpedicaoOrderByWithRelationInput
    tipoRelevo?: TipoRelevoOrderByWithRelationInput
    tipoSolo?: TipoSoloOrderByWithRelationInput
    amostra_dados?: AmostraDadoOrderByRelationAggregateInput
    amostra_midias?: AmostraMidiaOrderByRelationAggregateInput
  }

  export type AmostraWhereUniqueInput = Prisma.AtLeast<{
    id_amostra?: number
    AND?: AmostraWhereInput | AmostraWhereInput[]
    OR?: AmostraWhereInput[]
    NOT?: AmostraWhereInput | AmostraWhereInput[]
    id_planta?: IntNullableFilter<"Amostra"> | number | null
    id_expedicao?: IntNullableFilter<"Amostra"> | number | null
    id_relevo?: IntNullableFilter<"Amostra"> | number | null
    id_solo?: IntNullableFilter<"Amostra"> | number | null
    nm_coletor?: StringFilter<"Amostra"> | string
    nr_altitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_altura?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: StringNullableFilter<"Amostra"> | string | null
    ds_obscomplement?: StringNullableFilter<"Amostra"> | string | null
    planta?: XOR<PlantaNullableScalarRelationFilter, PlantaWhereInput> | null
    expedicao?: XOR<ExpedicaoNullableScalarRelationFilter, ExpedicaoWhereInput> | null
    tipoRelevo?: XOR<TipoRelevoNullableScalarRelationFilter, TipoRelevoWhereInput> | null
    tipoSolo?: XOR<TipoSoloNullableScalarRelationFilter, TipoSoloWhereInput> | null
    amostra_dados?: AmostraDadoListRelationFilter
    amostra_midias?: AmostraMidiaListRelationFilter
  }, "id_amostra">

  export type AmostraOrderByWithAggregationInput = {
    id_amostra?: SortOrder
    id_planta?: SortOrderInput | SortOrder
    id_expedicao?: SortOrderInput | SortOrder
    id_relevo?: SortOrderInput | SortOrder
    id_solo?: SortOrderInput | SortOrder
    nm_coletor?: SortOrder
    nr_altitude?: SortOrderInput | SortOrder
    nr_longitude?: SortOrderInput | SortOrder
    nr_latitude?: SortOrderInput | SortOrder
    nr_altura?: SortOrderInput | SortOrder
    nr_DAP?: SortOrderInput | SortOrder
    nr_CAP?: SortOrderInput | SortOrder
    ds_exsudado?: SortOrderInput | SortOrder
    ds_obscomplement?: SortOrderInput | SortOrder
    _count?: AmostraCountOrderByAggregateInput
    _avg?: AmostraAvgOrderByAggregateInput
    _max?: AmostraMaxOrderByAggregateInput
    _min?: AmostraMinOrderByAggregateInput
    _sum?: AmostraSumOrderByAggregateInput
  }

  export type AmostraScalarWhereWithAggregatesInput = {
    AND?: AmostraScalarWhereWithAggregatesInput | AmostraScalarWhereWithAggregatesInput[]
    OR?: AmostraScalarWhereWithAggregatesInput[]
    NOT?: AmostraScalarWhereWithAggregatesInput | AmostraScalarWhereWithAggregatesInput[]
    id_amostra?: IntWithAggregatesFilter<"Amostra"> | number
    id_planta?: IntNullableWithAggregatesFilter<"Amostra"> | number | null
    id_expedicao?: IntNullableWithAggregatesFilter<"Amostra"> | number | null
    id_relevo?: IntNullableWithAggregatesFilter<"Amostra"> | number | null
    id_solo?: IntNullableWithAggregatesFilter<"Amostra"> | number | null
    nm_coletor?: StringWithAggregatesFilter<"Amostra"> | string
    nr_altitude?: DecimalNullableWithAggregatesFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: DecimalNullableWithAggregatesFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: DecimalNullableWithAggregatesFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_altura?: DecimalNullableWithAggregatesFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: DecimalNullableWithAggregatesFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: DecimalNullableWithAggregatesFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: StringNullableWithAggregatesFilter<"Amostra"> | string | null
    ds_obscomplement?: StringNullableWithAggregatesFilter<"Amostra"> | string | null
  }

  export type AmostraDadoWhereInput = {
    AND?: AmostraDadoWhereInput | AmostraDadoWhereInput[]
    OR?: AmostraDadoWhereInput[]
    NOT?: AmostraDadoWhereInput | AmostraDadoWhereInput[]
    id_amostra?: IntFilter<"AmostraDado"> | number
    id_dadoeco?: IntFilter<"AmostraDado"> | number
    id_itemdado?: IntFilter<"AmostraDado"> | number
    ds_cor?: StringNullableFilter<"AmostraDado"> | string | null
    ds_obs?: StringNullableFilter<"AmostraDado"> | string | null
    amostra?: XOR<AmostraScalarRelationFilter, AmostraWhereInput>
    item_dado?: XOR<ItemDadoScalarRelationFilter, ItemDadoWhereInput>
    dadoEcologico?: XOR<DadoEcologicoScalarRelationFilter, DadoEcologicoWhereInput>
  }

  export type AmostraDadoOrderByWithRelationInput = {
    id_amostra?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_cor?: SortOrderInput | SortOrder
    ds_obs?: SortOrderInput | SortOrder
    amostra?: AmostraOrderByWithRelationInput
    item_dado?: ItemDadoOrderByWithRelationInput
    dadoEcologico?: DadoEcologicoOrderByWithRelationInput
  }

  export type AmostraDadoWhereUniqueInput = Prisma.AtLeast<{
    id_amostra_id_dadoeco_id_itemdado?: AmostraDadoId_amostraId_dadoecoId_itemdadoCompoundUniqueInput
    AND?: AmostraDadoWhereInput | AmostraDadoWhereInput[]
    OR?: AmostraDadoWhereInput[]
    NOT?: AmostraDadoWhereInput | AmostraDadoWhereInput[]
    id_amostra?: IntFilter<"AmostraDado"> | number
    id_dadoeco?: IntFilter<"AmostraDado"> | number
    id_itemdado?: IntFilter<"AmostraDado"> | number
    ds_cor?: StringNullableFilter<"AmostraDado"> | string | null
    ds_obs?: StringNullableFilter<"AmostraDado"> | string | null
    amostra?: XOR<AmostraScalarRelationFilter, AmostraWhereInput>
    item_dado?: XOR<ItemDadoScalarRelationFilter, ItemDadoWhereInput>
    dadoEcologico?: XOR<DadoEcologicoScalarRelationFilter, DadoEcologicoWhereInput>
  }, "id_amostra_id_dadoeco_id_itemdado">

  export type AmostraDadoOrderByWithAggregationInput = {
    id_amostra?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_cor?: SortOrderInput | SortOrder
    ds_obs?: SortOrderInput | SortOrder
    _count?: AmostraDadoCountOrderByAggregateInput
    _avg?: AmostraDadoAvgOrderByAggregateInput
    _max?: AmostraDadoMaxOrderByAggregateInput
    _min?: AmostraDadoMinOrderByAggregateInput
    _sum?: AmostraDadoSumOrderByAggregateInput
  }

  export type AmostraDadoScalarWhereWithAggregatesInput = {
    AND?: AmostraDadoScalarWhereWithAggregatesInput | AmostraDadoScalarWhereWithAggregatesInput[]
    OR?: AmostraDadoScalarWhereWithAggregatesInput[]
    NOT?: AmostraDadoScalarWhereWithAggregatesInput | AmostraDadoScalarWhereWithAggregatesInput[]
    id_amostra?: IntWithAggregatesFilter<"AmostraDado"> | number
    id_dadoeco?: IntWithAggregatesFilter<"AmostraDado"> | number
    id_itemdado?: IntWithAggregatesFilter<"AmostraDado"> | number
    ds_cor?: StringNullableWithAggregatesFilter<"AmostraDado"> | string | null
    ds_obs?: StringNullableWithAggregatesFilter<"AmostraDado"> | string | null
  }

  export type AmostraMidiaWhereInput = {
    AND?: AmostraMidiaWhereInput | AmostraMidiaWhereInput[]
    OR?: AmostraMidiaWhereInput[]
    NOT?: AmostraMidiaWhereInput | AmostraMidiaWhereInput[]
    id_amostramidia?: IntFilter<"AmostraMidia"> | number
    id_amostra?: IntNullableFilter<"AmostraMidia"> | number | null
    tp_arquivo?: StringFilter<"AmostraMidia"> | string
    arquivo?: BytesFilter<"AmostraMidia"> | Uint8Array
    descricao?: StringNullableFilter<"AmostraMidia"> | string | null
    data_upload?: DateTimeFilter<"AmostraMidia"> | Date | string
    amostra?: XOR<AmostraNullableScalarRelationFilter, AmostraWhereInput> | null
  }

  export type AmostraMidiaOrderByWithRelationInput = {
    id_amostramidia?: SortOrder
    id_amostra?: SortOrderInput | SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_upload?: SortOrder
    amostra?: AmostraOrderByWithRelationInput
  }

  export type AmostraMidiaWhereUniqueInput = Prisma.AtLeast<{
    id_amostramidia?: number
    AND?: AmostraMidiaWhereInput | AmostraMidiaWhereInput[]
    OR?: AmostraMidiaWhereInput[]
    NOT?: AmostraMidiaWhereInput | AmostraMidiaWhereInput[]
    id_amostra?: IntNullableFilter<"AmostraMidia"> | number | null
    tp_arquivo?: StringFilter<"AmostraMidia"> | string
    arquivo?: BytesFilter<"AmostraMidia"> | Uint8Array
    descricao?: StringNullableFilter<"AmostraMidia"> | string | null
    data_upload?: DateTimeFilter<"AmostraMidia"> | Date | string
    amostra?: XOR<AmostraNullableScalarRelationFilter, AmostraWhereInput> | null
  }, "id_amostramidia">

  export type AmostraMidiaOrderByWithAggregationInput = {
    id_amostramidia?: SortOrder
    id_amostra?: SortOrderInput | SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    data_upload?: SortOrder
    _count?: AmostraMidiaCountOrderByAggregateInput
    _avg?: AmostraMidiaAvgOrderByAggregateInput
    _max?: AmostraMidiaMaxOrderByAggregateInput
    _min?: AmostraMidiaMinOrderByAggregateInput
    _sum?: AmostraMidiaSumOrderByAggregateInput
  }

  export type AmostraMidiaScalarWhereWithAggregatesInput = {
    AND?: AmostraMidiaScalarWhereWithAggregatesInput | AmostraMidiaScalarWhereWithAggregatesInput[]
    OR?: AmostraMidiaScalarWhereWithAggregatesInput[]
    NOT?: AmostraMidiaScalarWhereWithAggregatesInput | AmostraMidiaScalarWhereWithAggregatesInput[]
    id_amostramidia?: IntWithAggregatesFilter<"AmostraMidia"> | number
    id_amostra?: IntNullableWithAggregatesFilter<"AmostraMidia"> | number | null
    tp_arquivo?: StringWithAggregatesFilter<"AmostraMidia"> | string
    arquivo?: BytesWithAggregatesFilter<"AmostraMidia"> | Uint8Array
    descricao?: StringNullableWithAggregatesFilter<"AmostraMidia"> | string | null
    data_upload?: DateTimeWithAggregatesFilter<"AmostraMidia"> | Date | string
  }

  export type EstadoCreateInput = {
    id_estado: string
    nm_estado: string
    municipios?: MunicipioCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUncheckedCreateInput = {
    id_estado: string
    nm_estado: string
    municipios?: MunicipioUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUpdateInput = {
    id_estado?: StringFieldUpdateOperationsInput | string
    nm_estado?: StringFieldUpdateOperationsInput | string
    municipios?: MunicipioUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateInput = {
    id_estado?: StringFieldUpdateOperationsInput | string
    nm_estado?: StringFieldUpdateOperationsInput | string
    municipios?: MunicipioUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoCreateManyInput = {
    id_estado: string
    nm_estado: string
  }

  export type EstadoUpdateManyMutationInput = {
    id_estado?: StringFieldUpdateOperationsInput | string
    nm_estado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateManyInput = {
    id_estado?: StringFieldUpdateOperationsInput | string
    nm_estado?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipioCreateInput = {
    id_municipio: number
    nm_municipio: string
    estado: EstadoCreateNestedOneWithoutMunicipiosInput
    expedicoes?: ExpedicaoCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateInput = {
    id_municipio: number
    nm_municipio: string
    id_estado: string
    expedicoes?: ExpedicaoUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUpdateInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
    estado?: EstadoUpdateOneRequiredWithoutMunicipiosNestedInput
    expedicoes?: ExpedicaoUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
    id_estado?: StringFieldUpdateOperationsInput | string
    expedicoes?: ExpedicaoUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioCreateManyInput = {
    id_municipio: number
    nm_municipio: string
    id_estado: string
  }

  export type MunicipioUpdateManyMutationInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipioUncheckedUpdateManyInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
    id_estado?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVegetacaoCreateInput = {
    id_vegetacao: number
    nm_vegetacao: string
    expedicoes?: ExpedicaoCreateNestedManyWithoutTipoVegetacaoInput
  }

  export type TipoVegetacaoUncheckedCreateInput = {
    id_vegetacao: number
    nm_vegetacao: string
    expedicoes?: ExpedicaoUncheckedCreateNestedManyWithoutTipoVegetacaoInput
  }

  export type TipoVegetacaoUpdateInput = {
    id_vegetacao?: IntFieldUpdateOperationsInput | number
    nm_vegetacao?: StringFieldUpdateOperationsInput | string
    expedicoes?: ExpedicaoUpdateManyWithoutTipoVegetacaoNestedInput
  }

  export type TipoVegetacaoUncheckedUpdateInput = {
    id_vegetacao?: IntFieldUpdateOperationsInput | number
    nm_vegetacao?: StringFieldUpdateOperationsInput | string
    expedicoes?: ExpedicaoUncheckedUpdateManyWithoutTipoVegetacaoNestedInput
  }

  export type TipoVegetacaoCreateManyInput = {
    id_vegetacao: number
    nm_vegetacao: string
  }

  export type TipoVegetacaoUpdateManyMutationInput = {
    id_vegetacao?: IntFieldUpdateOperationsInput | number
    nm_vegetacao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVegetacaoUncheckedUpdateManyInput = {
    id_vegetacao?: IntFieldUpdateOperationsInput | number
    nm_vegetacao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoRelevoCreateInput = {
    id_relevo: number
    nm_relevo: string
    amostras?: AmostraCreateNestedManyWithoutTipoRelevoInput
  }

  export type TipoRelevoUncheckedCreateInput = {
    id_relevo: number
    nm_relevo: string
    amostras?: AmostraUncheckedCreateNestedManyWithoutTipoRelevoInput
  }

  export type TipoRelevoUpdateInput = {
    id_relevo?: IntFieldUpdateOperationsInput | number
    nm_relevo?: StringFieldUpdateOperationsInput | string
    amostras?: AmostraUpdateManyWithoutTipoRelevoNestedInput
  }

  export type TipoRelevoUncheckedUpdateInput = {
    id_relevo?: IntFieldUpdateOperationsInput | number
    nm_relevo?: StringFieldUpdateOperationsInput | string
    amostras?: AmostraUncheckedUpdateManyWithoutTipoRelevoNestedInput
  }

  export type TipoRelevoCreateManyInput = {
    id_relevo: number
    nm_relevo: string
  }

  export type TipoRelevoUpdateManyMutationInput = {
    id_relevo?: IntFieldUpdateOperationsInput | number
    nm_relevo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoRelevoUncheckedUpdateManyInput = {
    id_relevo?: IntFieldUpdateOperationsInput | number
    nm_relevo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoSoloCreateInput = {
    id_solo: number
    nm_solo: string
    amostras?: AmostraCreateNestedManyWithoutTipoSoloInput
  }

  export type TipoSoloUncheckedCreateInput = {
    id_solo: number
    nm_solo: string
    amostras?: AmostraUncheckedCreateNestedManyWithoutTipoSoloInput
  }

  export type TipoSoloUpdateInput = {
    id_solo?: IntFieldUpdateOperationsInput | number
    nm_solo?: StringFieldUpdateOperationsInput | string
    amostras?: AmostraUpdateManyWithoutTipoSoloNestedInput
  }

  export type TipoSoloUncheckedUpdateInput = {
    id_solo?: IntFieldUpdateOperationsInput | number
    nm_solo?: StringFieldUpdateOperationsInput | string
    amostras?: AmostraUncheckedUpdateManyWithoutTipoSoloNestedInput
  }

  export type TipoSoloCreateManyInput = {
    id_solo: number
    nm_solo: string
  }

  export type TipoSoloUpdateManyMutationInput = {
    id_solo?: IntFieldUpdateOperationsInput | number
    nm_solo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoSoloUncheckedUpdateManyInput = {
    id_solo?: IntFieldUpdateOperationsInput | number
    nm_solo?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedicaoCreateInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    municipio: MunicipioCreateNestedOneWithoutExpedicoesInput
    tipoVegetacao?: TipoVegetacaoCreateNestedOneWithoutExpedicoesInput
    expedicaoMidia?: ExpedicaoMidiaCreateNestedManyWithoutExpedicaoInput
    amostras?: AmostraCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoUncheckedCreateInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_municipio: number
    id_vegetacao?: number | null
    expedicaoMidia?: ExpedicaoMidiaUncheckedCreateNestedManyWithoutExpedicaoInput
    amostras?: AmostraUncheckedCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoUpdateInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    municipio?: MunicipioUpdateOneRequiredWithoutExpedicoesNestedInput
    tipoVegetacao?: TipoVegetacaoUpdateOneWithoutExpedicoesNestedInput
    expedicaoMidia?: ExpedicaoMidiaUpdateManyWithoutExpedicaoNestedInput
    amostras?: AmostraUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoUncheckedUpdateInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_vegetacao?: NullableIntFieldUpdateOperationsInput | number | null
    expedicaoMidia?: ExpedicaoMidiaUncheckedUpdateManyWithoutExpedicaoNestedInput
    amostras?: AmostraUncheckedUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoCreateManyInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_municipio: number
    id_vegetacao?: number | null
  }

  export type ExpedicaoUpdateManyMutationInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpedicaoUncheckedUpdateManyInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_vegetacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpedicaoMidiaCreateInput = {
    id_expedicaomidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
    expedicao?: ExpedicaoCreateNestedOneWithoutExpedicaoMidiaInput
  }

  export type ExpedicaoMidiaUncheckedCreateInput = {
    id_expedicaomidia: number
    id_expedicao?: number | null
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type ExpedicaoMidiaUpdateInput = {
    id_expedicaomidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    expedicao?: ExpedicaoUpdateOneWithoutExpedicaoMidiaNestedInput
  }

  export type ExpedicaoMidiaUncheckedUpdateInput = {
    id_expedicaomidia?: IntFieldUpdateOperationsInput | number
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpedicaoMidiaCreateManyInput = {
    id_expedicaomidia: number
    id_expedicao?: number | null
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type ExpedicaoMidiaUpdateManyMutationInput = {
    id_expedicaomidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpedicaoMidiaUncheckedUpdateManyInput = {
    id_expedicaomidia?: IntFieldUpdateOperationsInput | number
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DadoEcologicoCreateInput = {
    id_dadoeco: number
    ds_dadoeco: string
    item_dados?: ItemDadoCreateNestedManyWithoutDadoEcologicoInput
    planta_dados?: PlantaDadoCreateNestedManyWithoutDadoEcologicoInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoUncheckedCreateInput = {
    id_dadoeco: number
    ds_dadoeco: string
    item_dados?: ItemDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoUpdateInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    item_dados?: ItemDadoUpdateManyWithoutDadoEcologicoNestedInput
    planta_dados?: PlantaDadoUpdateManyWithoutDadoEcologicoNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type DadoEcologicoUncheckedUpdateInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    item_dados?: ItemDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type DadoEcologicoCreateManyInput = {
    id_dadoeco: number
    ds_dadoeco: string
  }

  export type DadoEcologicoUpdateManyMutationInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
  }

  export type DadoEcologicoUncheckedUpdateManyInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
  }

  export type ItemDadoCreateInput = {
    id_itemdado: number
    ds_itemdado: string
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutItem_dadosInput
    planta_dados?: PlantaDadoCreateNestedManyWithoutItem_dadoInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoUncheckedCreateInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_itemdado: string
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutItem_dadoInput
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoUpdateInput = {
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutItem_dadosNestedInput
    planta_dados?: PlantaDadoUpdateManyWithoutItem_dadoNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutItem_dadoNestedInput
  }

  export type ItemDadoUncheckedUpdateInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutItem_dadoNestedInput
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutItem_dadoNestedInput
  }

  export type ItemDadoCreateManyInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_itemdado: string
  }

  export type ItemDadoUpdateManyMutationInput = {
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
  }

  export type ItemDadoUncheckedUpdateManyInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
  }

  export type PlantaCreateInput = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
    planta_dados?: PlantaDadoCreateNestedManyWithoutPlantaInput
    amostras?: AmostraCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUncheckedCreateInput = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutPlantaInput
    amostras?: AmostraUncheckedCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUpdateInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUpdateManyWithoutPlantaNestedInput
    amostras?: AmostraUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaUncheckedUpdateInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutPlantaNestedInput
    amostras?: AmostraUncheckedUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaCreateManyInput = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
  }

  export type PlantaUpdateManyMutationInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
  }

  export type PlantaUncheckedUpdateManyInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
  }

  export type PlantaDadoCreateInput = {
    ds_obs?: string | null
    planta: PlantaCreateNestedOneWithoutPlanta_dadosInput
    item_dado: ItemDadoCreateNestedOneWithoutPlanta_dadosInput
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutPlanta_dadosInput
  }

  export type PlantaDadoUncheckedCreateInput = {
    id_planta: number
    id_dadoeco: number
    id_itemdado: number
    ds_obs?: string | null
  }

  export type PlantaDadoUpdateInput = {
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneRequiredWithoutPlanta_dadosNestedInput
    item_dado?: ItemDadoUpdateOneRequiredWithoutPlanta_dadosNestedInput
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutPlanta_dadosNestedInput
  }

  export type PlantaDadoUncheckedUpdateInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantaDadoCreateManyInput = {
    id_planta: number
    id_dadoeco: number
    id_itemdado: number
    ds_obs?: string | null
  }

  export type PlantaDadoUpdateManyMutationInput = {
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantaDadoUncheckedUpdateManyInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraCreateInput = {
    id_amostra: number
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    planta?: PlantaCreateNestedOneWithoutAmostrasInput
    expedicao?: ExpedicaoCreateNestedOneWithoutAmostrasInput
    tipoRelevo?: TipoRelevoCreateNestedOneWithoutAmostrasInput
    tipoSolo?: TipoSoloCreateNestedOneWithoutAmostrasInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUncheckedCreateInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaUncheckedCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUpdateInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneWithoutAmostrasNestedInput
    expedicao?: ExpedicaoUpdateOneWithoutAmostrasNestedInput
    tipoRelevo?: TipoRelevoUpdateOneWithoutAmostrasNestedInput
    tipoSolo?: TipoSoloUpdateOneWithoutAmostrasNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUncheckedUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraCreateManyInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
  }

  export type AmostraUpdateManyMutationInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraUncheckedUpdateManyInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoCreateInput = {
    ds_cor?: string | null
    ds_obs?: string | null
    amostra: AmostraCreateNestedOneWithoutAmostra_dadosInput
    item_dado: ItemDadoCreateNestedOneWithoutAmostra_dadosInput
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutAmostra_dadosInput
  }

  export type AmostraDadoUncheckedCreateInput = {
    id_amostra: number
    id_dadoeco: number
    id_itemdado: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type AmostraDadoUpdateInput = {
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    amostra?: AmostraUpdateOneRequiredWithoutAmostra_dadosNestedInput
    item_dado?: ItemDadoUpdateOneRequiredWithoutAmostra_dadosNestedInput
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutAmostra_dadosNestedInput
  }

  export type AmostraDadoUncheckedUpdateInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoCreateManyInput = {
    id_amostra: number
    id_dadoeco: number
    id_itemdado: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type AmostraDadoUpdateManyMutationInput = {
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoUncheckedUpdateManyInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraMidiaCreateInput = {
    id_amostramidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
    amostra?: AmostraCreateNestedOneWithoutAmostra_midiasInput
  }

  export type AmostraMidiaUncheckedCreateInput = {
    id_amostramidia: number
    id_amostra?: number | null
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type AmostraMidiaUpdateInput = {
    id_amostramidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    amostra?: AmostraUpdateOneWithoutAmostra_midiasNestedInput
  }

  export type AmostraMidiaUncheckedUpdateInput = {
    id_amostramidia?: IntFieldUpdateOperationsInput | number
    id_amostra?: NullableIntFieldUpdateOperationsInput | number | null
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmostraMidiaCreateManyInput = {
    id_amostramidia: number
    id_amostra?: number | null
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type AmostraMidiaUpdateManyMutationInput = {
    id_amostramidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmostraMidiaUncheckedUpdateManyInput = {
    id_amostramidia?: IntFieldUpdateOperationsInput | number
    id_amostra?: NullableIntFieldUpdateOperationsInput | number | null
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MunicipioListRelationFilter = {
    every?: MunicipioWhereInput
    some?: MunicipioWhereInput
    none?: MunicipioWhereInput
  }

  export type MunicipioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstadoCountOrderByAggregateInput = {
    id_estado?: SortOrder
    nm_estado?: SortOrder
  }

  export type EstadoMaxOrderByAggregateInput = {
    id_estado?: SortOrder
    nm_estado?: SortOrder
  }

  export type EstadoMinOrderByAggregateInput = {
    id_estado?: SortOrder
    nm_estado?: SortOrder
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

  export type EstadoScalarRelationFilter = {
    is?: EstadoWhereInput
    isNot?: EstadoWhereInput
  }

  export type ExpedicaoListRelationFilter = {
    every?: ExpedicaoWhereInput
    some?: ExpedicaoWhereInput
    none?: ExpedicaoWhereInput
  }

  export type ExpedicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipioCountOrderByAggregateInput = {
    id_municipio?: SortOrder
    nm_municipio?: SortOrder
    id_estado?: SortOrder
  }

  export type MunicipioAvgOrderByAggregateInput = {
    id_municipio?: SortOrder
  }

  export type MunicipioMaxOrderByAggregateInput = {
    id_municipio?: SortOrder
    nm_municipio?: SortOrder
    id_estado?: SortOrder
  }

  export type MunicipioMinOrderByAggregateInput = {
    id_municipio?: SortOrder
    nm_municipio?: SortOrder
    id_estado?: SortOrder
  }

  export type MunicipioSumOrderByAggregateInput = {
    id_municipio?: SortOrder
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

  export type TipoVegetacaoCountOrderByAggregateInput = {
    id_vegetacao?: SortOrder
    nm_vegetacao?: SortOrder
  }

  export type TipoVegetacaoAvgOrderByAggregateInput = {
    id_vegetacao?: SortOrder
  }

  export type TipoVegetacaoMaxOrderByAggregateInput = {
    id_vegetacao?: SortOrder
    nm_vegetacao?: SortOrder
  }

  export type TipoVegetacaoMinOrderByAggregateInput = {
    id_vegetacao?: SortOrder
    nm_vegetacao?: SortOrder
  }

  export type TipoVegetacaoSumOrderByAggregateInput = {
    id_vegetacao?: SortOrder
  }

  export type AmostraListRelationFilter = {
    every?: AmostraWhereInput
    some?: AmostraWhereInput
    none?: AmostraWhereInput
  }

  export type AmostraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoRelevoCountOrderByAggregateInput = {
    id_relevo?: SortOrder
    nm_relevo?: SortOrder
  }

  export type TipoRelevoAvgOrderByAggregateInput = {
    id_relevo?: SortOrder
  }

  export type TipoRelevoMaxOrderByAggregateInput = {
    id_relevo?: SortOrder
    nm_relevo?: SortOrder
  }

  export type TipoRelevoMinOrderByAggregateInput = {
    id_relevo?: SortOrder
    nm_relevo?: SortOrder
  }

  export type TipoRelevoSumOrderByAggregateInput = {
    id_relevo?: SortOrder
  }

  export type TipoSoloCountOrderByAggregateInput = {
    id_solo?: SortOrder
    nm_solo?: SortOrder
  }

  export type TipoSoloAvgOrderByAggregateInput = {
    id_solo?: SortOrder
  }

  export type TipoSoloMaxOrderByAggregateInput = {
    id_solo?: SortOrder
    nm_solo?: SortOrder
  }

  export type TipoSoloMinOrderByAggregateInput = {
    id_solo?: SortOrder
    nm_solo?: SortOrder
  }

  export type TipoSoloSumOrderByAggregateInput = {
    id_solo?: SortOrder
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

  export type MunicipioScalarRelationFilter = {
    is?: MunicipioWhereInput
    isNot?: MunicipioWhereInput
  }

  export type TipoVegetacaoNullableScalarRelationFilter = {
    is?: TipoVegetacaoWhereInput | null
    isNot?: TipoVegetacaoWhereInput | null
  }

  export type ExpedicaoMidiaListRelationFilter = {
    every?: ExpedicaoMidiaWhereInput
    some?: ExpedicaoMidiaWhereInput
    none?: ExpedicaoMidiaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpedicaoMidiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpedicaoCountOrderByAggregateInput = {
    id_expedicao?: SortOrder
    dt_expedicao?: SortOrder
    id_municipio?: SortOrder
    id_vegetacao?: SortOrder
  }

  export type ExpedicaoAvgOrderByAggregateInput = {
    id_expedicao?: SortOrder
    id_municipio?: SortOrder
    id_vegetacao?: SortOrder
  }

  export type ExpedicaoMaxOrderByAggregateInput = {
    id_expedicao?: SortOrder
    dt_expedicao?: SortOrder
    id_municipio?: SortOrder
    id_vegetacao?: SortOrder
  }

  export type ExpedicaoMinOrderByAggregateInput = {
    id_expedicao?: SortOrder
    dt_expedicao?: SortOrder
    id_municipio?: SortOrder
    id_vegetacao?: SortOrder
  }

  export type ExpedicaoSumOrderByAggregateInput = {
    id_expedicao?: SortOrder
    id_municipio?: SortOrder
    id_vegetacao?: SortOrder
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

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
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

  export type ExpedicaoNullableScalarRelationFilter = {
    is?: ExpedicaoWhereInput | null
    isNot?: ExpedicaoWhereInput | null
  }

  export type ExpedicaoMidiaCountOrderByAggregateInput = {
    id_expedicaomidia?: SortOrder
    id_expedicao?: SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrder
    data_upload?: SortOrder
  }

  export type ExpedicaoMidiaAvgOrderByAggregateInput = {
    id_expedicaomidia?: SortOrder
    id_expedicao?: SortOrder
  }

  export type ExpedicaoMidiaMaxOrderByAggregateInput = {
    id_expedicaomidia?: SortOrder
    id_expedicao?: SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrder
    data_upload?: SortOrder
  }

  export type ExpedicaoMidiaMinOrderByAggregateInput = {
    id_expedicaomidia?: SortOrder
    id_expedicao?: SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrder
    data_upload?: SortOrder
  }

  export type ExpedicaoMidiaSumOrderByAggregateInput = {
    id_expedicaomidia?: SortOrder
    id_expedicao?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type ItemDadoListRelationFilter = {
    every?: ItemDadoWhereInput
    some?: ItemDadoWhereInput
    none?: ItemDadoWhereInput
  }

  export type PlantaDadoListRelationFilter = {
    every?: PlantaDadoWhereInput
    some?: PlantaDadoWhereInput
    none?: PlantaDadoWhereInput
  }

  export type AmostraDadoListRelationFilter = {
    every?: AmostraDadoWhereInput
    some?: AmostraDadoWhereInput
    none?: AmostraDadoWhereInput
  }

  export type ItemDadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantaDadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmostraDadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DadoEcologicoCountOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    ds_dadoeco?: SortOrder
  }

  export type DadoEcologicoAvgOrderByAggregateInput = {
    id_dadoeco?: SortOrder
  }

  export type DadoEcologicoMaxOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    ds_dadoeco?: SortOrder
  }

  export type DadoEcologicoMinOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    ds_dadoeco?: SortOrder
  }

  export type DadoEcologicoSumOrderByAggregateInput = {
    id_dadoeco?: SortOrder
  }

  export type DadoEcologicoScalarRelationFilter = {
    is?: DadoEcologicoWhereInput
    isNot?: DadoEcologicoWhereInput
  }

  export type ItemDadoId_dadoecoId_itemdadoCompoundUniqueInput = {
    id_dadoeco: number
    id_itemdado: number
  }

  export type ItemDadoCountOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_itemdado?: SortOrder
  }

  export type ItemDadoAvgOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
  }

  export type ItemDadoMaxOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_itemdado?: SortOrder
  }

  export type ItemDadoMinOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_itemdado?: SortOrder
  }

  export type ItemDadoSumOrderByAggregateInput = {
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
  }

  export type PlantaCountOrderByAggregateInput = {
    id_planta?: SortOrder
    nm_vulgar?: SortOrder
    nm_cientifico?: SortOrder
    nm_familia?: SortOrder
  }

  export type PlantaAvgOrderByAggregateInput = {
    id_planta?: SortOrder
  }

  export type PlantaMaxOrderByAggregateInput = {
    id_planta?: SortOrder
    nm_vulgar?: SortOrder
    nm_cientifico?: SortOrder
    nm_familia?: SortOrder
  }

  export type PlantaMinOrderByAggregateInput = {
    id_planta?: SortOrder
    nm_vulgar?: SortOrder
    nm_cientifico?: SortOrder
    nm_familia?: SortOrder
  }

  export type PlantaSumOrderByAggregateInput = {
    id_planta?: SortOrder
  }

  export type PlantaScalarRelationFilter = {
    is?: PlantaWhereInput
    isNot?: PlantaWhereInput
  }

  export type ItemDadoScalarRelationFilter = {
    is?: ItemDadoWhereInput
    isNot?: ItemDadoWhereInput
  }

  export type PlantaDadoId_plantaId_dadoecoId_itemdadoCompoundUniqueInput = {
    id_planta: number
    id_dadoeco: number
    id_itemdado: number
  }

  export type PlantaDadoCountOrderByAggregateInput = {
    id_planta?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_obs?: SortOrder
  }

  export type PlantaDadoAvgOrderByAggregateInput = {
    id_planta?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
  }

  export type PlantaDadoMaxOrderByAggregateInput = {
    id_planta?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_obs?: SortOrder
  }

  export type PlantaDadoMinOrderByAggregateInput = {
    id_planta?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_obs?: SortOrder
  }

  export type PlantaDadoSumOrderByAggregateInput = {
    id_planta?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PlantaNullableScalarRelationFilter = {
    is?: PlantaWhereInput | null
    isNot?: PlantaWhereInput | null
  }

  export type TipoRelevoNullableScalarRelationFilter = {
    is?: TipoRelevoWhereInput | null
    isNot?: TipoRelevoWhereInput | null
  }

  export type TipoSoloNullableScalarRelationFilter = {
    is?: TipoSoloWhereInput | null
    isNot?: TipoSoloWhereInput | null
  }

  export type AmostraMidiaListRelationFilter = {
    every?: AmostraMidiaWhereInput
    some?: AmostraMidiaWhereInput
    none?: AmostraMidiaWhereInput
  }

  export type AmostraMidiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmostraCountOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_planta?: SortOrder
    id_expedicao?: SortOrder
    id_relevo?: SortOrder
    id_solo?: SortOrder
    nm_coletor?: SortOrder
    nr_altitude?: SortOrder
    nr_longitude?: SortOrder
    nr_latitude?: SortOrder
    nr_altura?: SortOrder
    nr_DAP?: SortOrder
    nr_CAP?: SortOrder
    ds_exsudado?: SortOrder
    ds_obscomplement?: SortOrder
  }

  export type AmostraAvgOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_planta?: SortOrder
    id_expedicao?: SortOrder
    id_relevo?: SortOrder
    id_solo?: SortOrder
    nr_altitude?: SortOrder
    nr_longitude?: SortOrder
    nr_latitude?: SortOrder
    nr_altura?: SortOrder
    nr_DAP?: SortOrder
    nr_CAP?: SortOrder
  }

  export type AmostraMaxOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_planta?: SortOrder
    id_expedicao?: SortOrder
    id_relevo?: SortOrder
    id_solo?: SortOrder
    nm_coletor?: SortOrder
    nr_altitude?: SortOrder
    nr_longitude?: SortOrder
    nr_latitude?: SortOrder
    nr_altura?: SortOrder
    nr_DAP?: SortOrder
    nr_CAP?: SortOrder
    ds_exsudado?: SortOrder
    ds_obscomplement?: SortOrder
  }

  export type AmostraMinOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_planta?: SortOrder
    id_expedicao?: SortOrder
    id_relevo?: SortOrder
    id_solo?: SortOrder
    nm_coletor?: SortOrder
    nr_altitude?: SortOrder
    nr_longitude?: SortOrder
    nr_latitude?: SortOrder
    nr_altura?: SortOrder
    nr_DAP?: SortOrder
    nr_CAP?: SortOrder
    ds_exsudado?: SortOrder
    ds_obscomplement?: SortOrder
  }

  export type AmostraSumOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_planta?: SortOrder
    id_expedicao?: SortOrder
    id_relevo?: SortOrder
    id_solo?: SortOrder
    nr_altitude?: SortOrder
    nr_longitude?: SortOrder
    nr_latitude?: SortOrder
    nr_altura?: SortOrder
    nr_DAP?: SortOrder
    nr_CAP?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type AmostraScalarRelationFilter = {
    is?: AmostraWhereInput
    isNot?: AmostraWhereInput
  }

  export type AmostraDadoId_amostraId_dadoecoId_itemdadoCompoundUniqueInput = {
    id_amostra: number
    id_dadoeco: number
    id_itemdado: number
  }

  export type AmostraDadoCountOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_cor?: SortOrder
    ds_obs?: SortOrder
  }

  export type AmostraDadoAvgOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
  }

  export type AmostraDadoMaxOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_cor?: SortOrder
    ds_obs?: SortOrder
  }

  export type AmostraDadoMinOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
    ds_cor?: SortOrder
    ds_obs?: SortOrder
  }

  export type AmostraDadoSumOrderByAggregateInput = {
    id_amostra?: SortOrder
    id_dadoeco?: SortOrder
    id_itemdado?: SortOrder
  }

  export type AmostraNullableScalarRelationFilter = {
    is?: AmostraWhereInput | null
    isNot?: AmostraWhereInput | null
  }

  export type AmostraMidiaCountOrderByAggregateInput = {
    id_amostramidia?: SortOrder
    id_amostra?: SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrder
    data_upload?: SortOrder
  }

  export type AmostraMidiaAvgOrderByAggregateInput = {
    id_amostramidia?: SortOrder
    id_amostra?: SortOrder
  }

  export type AmostraMidiaMaxOrderByAggregateInput = {
    id_amostramidia?: SortOrder
    id_amostra?: SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrder
    data_upload?: SortOrder
  }

  export type AmostraMidiaMinOrderByAggregateInput = {
    id_amostramidia?: SortOrder
    id_amostra?: SortOrder
    tp_arquivo?: SortOrder
    arquivo?: SortOrder
    descricao?: SortOrder
    data_upload?: SortOrder
  }

  export type AmostraMidiaSumOrderByAggregateInput = {
    id_amostramidia?: SortOrder
    id_amostra?: SortOrder
  }

  export type MunicipioCreateNestedManyWithoutEstadoInput = {
    create?: XOR<MunicipioCreateWithoutEstadoInput, MunicipioUncheckedCreateWithoutEstadoInput> | MunicipioCreateWithoutEstadoInput[] | MunicipioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipioCreateOrConnectWithoutEstadoInput | MunicipioCreateOrConnectWithoutEstadoInput[]
    createMany?: MunicipioCreateManyEstadoInputEnvelope
    connect?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
  }

  export type MunicipioUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<MunicipioCreateWithoutEstadoInput, MunicipioUncheckedCreateWithoutEstadoInput> | MunicipioCreateWithoutEstadoInput[] | MunicipioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipioCreateOrConnectWithoutEstadoInput | MunicipioCreateOrConnectWithoutEstadoInput[]
    createMany?: MunicipioCreateManyEstadoInputEnvelope
    connect?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MunicipioUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<MunicipioCreateWithoutEstadoInput, MunicipioUncheckedCreateWithoutEstadoInput> | MunicipioCreateWithoutEstadoInput[] | MunicipioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipioCreateOrConnectWithoutEstadoInput | MunicipioCreateOrConnectWithoutEstadoInput[]
    upsert?: MunicipioUpsertWithWhereUniqueWithoutEstadoInput | MunicipioUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: MunicipioCreateManyEstadoInputEnvelope
    set?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    disconnect?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    delete?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    connect?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    update?: MunicipioUpdateWithWhereUniqueWithoutEstadoInput | MunicipioUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: MunicipioUpdateManyWithWhereWithoutEstadoInput | MunicipioUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: MunicipioScalarWhereInput | MunicipioScalarWhereInput[]
  }

  export type MunicipioUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<MunicipioCreateWithoutEstadoInput, MunicipioUncheckedCreateWithoutEstadoInput> | MunicipioCreateWithoutEstadoInput[] | MunicipioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipioCreateOrConnectWithoutEstadoInput | MunicipioCreateOrConnectWithoutEstadoInput[]
    upsert?: MunicipioUpsertWithWhereUniqueWithoutEstadoInput | MunicipioUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: MunicipioCreateManyEstadoInputEnvelope
    set?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    disconnect?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    delete?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    connect?: MunicipioWhereUniqueInput | MunicipioWhereUniqueInput[]
    update?: MunicipioUpdateWithWhereUniqueWithoutEstadoInput | MunicipioUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: MunicipioUpdateManyWithWhereWithoutEstadoInput | MunicipioUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: MunicipioScalarWhereInput | MunicipioScalarWhereInput[]
  }

  export type EstadoCreateNestedOneWithoutMunicipiosInput = {
    create?: XOR<EstadoCreateWithoutMunicipiosInput, EstadoUncheckedCreateWithoutMunicipiosInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutMunicipiosInput
    connect?: EstadoWhereUniqueInput
  }

  export type ExpedicaoCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<ExpedicaoCreateWithoutMunicipioInput, ExpedicaoUncheckedCreateWithoutMunicipioInput> | ExpedicaoCreateWithoutMunicipioInput[] | ExpedicaoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutMunicipioInput | ExpedicaoCreateOrConnectWithoutMunicipioInput[]
    createMany?: ExpedicaoCreateManyMunicipioInputEnvelope
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
  }

  export type ExpedicaoUncheckedCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<ExpedicaoCreateWithoutMunicipioInput, ExpedicaoUncheckedCreateWithoutMunicipioInput> | ExpedicaoCreateWithoutMunicipioInput[] | ExpedicaoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutMunicipioInput | ExpedicaoCreateOrConnectWithoutMunicipioInput[]
    createMany?: ExpedicaoCreateManyMunicipioInputEnvelope
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstadoUpdateOneRequiredWithoutMunicipiosNestedInput = {
    create?: XOR<EstadoCreateWithoutMunicipiosInput, EstadoUncheckedCreateWithoutMunicipiosInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutMunicipiosInput
    upsert?: EstadoUpsertWithoutMunicipiosInput
    connect?: EstadoWhereUniqueInput
    update?: XOR<XOR<EstadoUpdateToOneWithWhereWithoutMunicipiosInput, EstadoUpdateWithoutMunicipiosInput>, EstadoUncheckedUpdateWithoutMunicipiosInput>
  }

  export type ExpedicaoUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<ExpedicaoCreateWithoutMunicipioInput, ExpedicaoUncheckedCreateWithoutMunicipioInput> | ExpedicaoCreateWithoutMunicipioInput[] | ExpedicaoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutMunicipioInput | ExpedicaoCreateOrConnectWithoutMunicipioInput[]
    upsert?: ExpedicaoUpsertWithWhereUniqueWithoutMunicipioInput | ExpedicaoUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: ExpedicaoCreateManyMunicipioInputEnvelope
    set?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    disconnect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    delete?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    update?: ExpedicaoUpdateWithWhereUniqueWithoutMunicipioInput | ExpedicaoUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: ExpedicaoUpdateManyWithWhereWithoutMunicipioInput | ExpedicaoUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: ExpedicaoScalarWhereInput | ExpedicaoScalarWhereInput[]
  }

  export type ExpedicaoUncheckedUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<ExpedicaoCreateWithoutMunicipioInput, ExpedicaoUncheckedCreateWithoutMunicipioInput> | ExpedicaoCreateWithoutMunicipioInput[] | ExpedicaoUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutMunicipioInput | ExpedicaoCreateOrConnectWithoutMunicipioInput[]
    upsert?: ExpedicaoUpsertWithWhereUniqueWithoutMunicipioInput | ExpedicaoUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: ExpedicaoCreateManyMunicipioInputEnvelope
    set?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    disconnect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    delete?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    update?: ExpedicaoUpdateWithWhereUniqueWithoutMunicipioInput | ExpedicaoUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: ExpedicaoUpdateManyWithWhereWithoutMunicipioInput | ExpedicaoUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: ExpedicaoScalarWhereInput | ExpedicaoScalarWhereInput[]
  }

  export type ExpedicaoCreateNestedManyWithoutTipoVegetacaoInput = {
    create?: XOR<ExpedicaoCreateWithoutTipoVegetacaoInput, ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput> | ExpedicaoCreateWithoutTipoVegetacaoInput[] | ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput | ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput[]
    createMany?: ExpedicaoCreateManyTipoVegetacaoInputEnvelope
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
  }

  export type ExpedicaoUncheckedCreateNestedManyWithoutTipoVegetacaoInput = {
    create?: XOR<ExpedicaoCreateWithoutTipoVegetacaoInput, ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput> | ExpedicaoCreateWithoutTipoVegetacaoInput[] | ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput | ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput[]
    createMany?: ExpedicaoCreateManyTipoVegetacaoInputEnvelope
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
  }

  export type ExpedicaoUpdateManyWithoutTipoVegetacaoNestedInput = {
    create?: XOR<ExpedicaoCreateWithoutTipoVegetacaoInput, ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput> | ExpedicaoCreateWithoutTipoVegetacaoInput[] | ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput | ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput[]
    upsert?: ExpedicaoUpsertWithWhereUniqueWithoutTipoVegetacaoInput | ExpedicaoUpsertWithWhereUniqueWithoutTipoVegetacaoInput[]
    createMany?: ExpedicaoCreateManyTipoVegetacaoInputEnvelope
    set?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    disconnect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    delete?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    update?: ExpedicaoUpdateWithWhereUniqueWithoutTipoVegetacaoInput | ExpedicaoUpdateWithWhereUniqueWithoutTipoVegetacaoInput[]
    updateMany?: ExpedicaoUpdateManyWithWhereWithoutTipoVegetacaoInput | ExpedicaoUpdateManyWithWhereWithoutTipoVegetacaoInput[]
    deleteMany?: ExpedicaoScalarWhereInput | ExpedicaoScalarWhereInput[]
  }

  export type ExpedicaoUncheckedUpdateManyWithoutTipoVegetacaoNestedInput = {
    create?: XOR<ExpedicaoCreateWithoutTipoVegetacaoInput, ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput> | ExpedicaoCreateWithoutTipoVegetacaoInput[] | ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput[]
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput | ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput[]
    upsert?: ExpedicaoUpsertWithWhereUniqueWithoutTipoVegetacaoInput | ExpedicaoUpsertWithWhereUniqueWithoutTipoVegetacaoInput[]
    createMany?: ExpedicaoCreateManyTipoVegetacaoInputEnvelope
    set?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    disconnect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    delete?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    connect?: ExpedicaoWhereUniqueInput | ExpedicaoWhereUniqueInput[]
    update?: ExpedicaoUpdateWithWhereUniqueWithoutTipoVegetacaoInput | ExpedicaoUpdateWithWhereUniqueWithoutTipoVegetacaoInput[]
    updateMany?: ExpedicaoUpdateManyWithWhereWithoutTipoVegetacaoInput | ExpedicaoUpdateManyWithWhereWithoutTipoVegetacaoInput[]
    deleteMany?: ExpedicaoScalarWhereInput | ExpedicaoScalarWhereInput[]
  }

  export type AmostraCreateNestedManyWithoutTipoRelevoInput = {
    create?: XOR<AmostraCreateWithoutTipoRelevoInput, AmostraUncheckedCreateWithoutTipoRelevoInput> | AmostraCreateWithoutTipoRelevoInput[] | AmostraUncheckedCreateWithoutTipoRelevoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoRelevoInput | AmostraCreateOrConnectWithoutTipoRelevoInput[]
    createMany?: AmostraCreateManyTipoRelevoInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type AmostraUncheckedCreateNestedManyWithoutTipoRelevoInput = {
    create?: XOR<AmostraCreateWithoutTipoRelevoInput, AmostraUncheckedCreateWithoutTipoRelevoInput> | AmostraCreateWithoutTipoRelevoInput[] | AmostraUncheckedCreateWithoutTipoRelevoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoRelevoInput | AmostraCreateOrConnectWithoutTipoRelevoInput[]
    createMany?: AmostraCreateManyTipoRelevoInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type AmostraUpdateManyWithoutTipoRelevoNestedInput = {
    create?: XOR<AmostraCreateWithoutTipoRelevoInput, AmostraUncheckedCreateWithoutTipoRelevoInput> | AmostraCreateWithoutTipoRelevoInput[] | AmostraUncheckedCreateWithoutTipoRelevoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoRelevoInput | AmostraCreateOrConnectWithoutTipoRelevoInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutTipoRelevoInput | AmostraUpsertWithWhereUniqueWithoutTipoRelevoInput[]
    createMany?: AmostraCreateManyTipoRelevoInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutTipoRelevoInput | AmostraUpdateWithWhereUniqueWithoutTipoRelevoInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutTipoRelevoInput | AmostraUpdateManyWithWhereWithoutTipoRelevoInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type AmostraUncheckedUpdateManyWithoutTipoRelevoNestedInput = {
    create?: XOR<AmostraCreateWithoutTipoRelevoInput, AmostraUncheckedCreateWithoutTipoRelevoInput> | AmostraCreateWithoutTipoRelevoInput[] | AmostraUncheckedCreateWithoutTipoRelevoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoRelevoInput | AmostraCreateOrConnectWithoutTipoRelevoInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutTipoRelevoInput | AmostraUpsertWithWhereUniqueWithoutTipoRelevoInput[]
    createMany?: AmostraCreateManyTipoRelevoInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutTipoRelevoInput | AmostraUpdateWithWhereUniqueWithoutTipoRelevoInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutTipoRelevoInput | AmostraUpdateManyWithWhereWithoutTipoRelevoInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type AmostraCreateNestedManyWithoutTipoSoloInput = {
    create?: XOR<AmostraCreateWithoutTipoSoloInput, AmostraUncheckedCreateWithoutTipoSoloInput> | AmostraCreateWithoutTipoSoloInput[] | AmostraUncheckedCreateWithoutTipoSoloInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoSoloInput | AmostraCreateOrConnectWithoutTipoSoloInput[]
    createMany?: AmostraCreateManyTipoSoloInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type AmostraUncheckedCreateNestedManyWithoutTipoSoloInput = {
    create?: XOR<AmostraCreateWithoutTipoSoloInput, AmostraUncheckedCreateWithoutTipoSoloInput> | AmostraCreateWithoutTipoSoloInput[] | AmostraUncheckedCreateWithoutTipoSoloInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoSoloInput | AmostraCreateOrConnectWithoutTipoSoloInput[]
    createMany?: AmostraCreateManyTipoSoloInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type AmostraUpdateManyWithoutTipoSoloNestedInput = {
    create?: XOR<AmostraCreateWithoutTipoSoloInput, AmostraUncheckedCreateWithoutTipoSoloInput> | AmostraCreateWithoutTipoSoloInput[] | AmostraUncheckedCreateWithoutTipoSoloInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoSoloInput | AmostraCreateOrConnectWithoutTipoSoloInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutTipoSoloInput | AmostraUpsertWithWhereUniqueWithoutTipoSoloInput[]
    createMany?: AmostraCreateManyTipoSoloInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutTipoSoloInput | AmostraUpdateWithWhereUniqueWithoutTipoSoloInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutTipoSoloInput | AmostraUpdateManyWithWhereWithoutTipoSoloInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type AmostraUncheckedUpdateManyWithoutTipoSoloNestedInput = {
    create?: XOR<AmostraCreateWithoutTipoSoloInput, AmostraUncheckedCreateWithoutTipoSoloInput> | AmostraCreateWithoutTipoSoloInput[] | AmostraUncheckedCreateWithoutTipoSoloInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutTipoSoloInput | AmostraCreateOrConnectWithoutTipoSoloInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutTipoSoloInput | AmostraUpsertWithWhereUniqueWithoutTipoSoloInput[]
    createMany?: AmostraCreateManyTipoSoloInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutTipoSoloInput | AmostraUpdateWithWhereUniqueWithoutTipoSoloInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutTipoSoloInput | AmostraUpdateManyWithWhereWithoutTipoSoloInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type MunicipioCreateNestedOneWithoutExpedicoesInput = {
    create?: XOR<MunicipioCreateWithoutExpedicoesInput, MunicipioUncheckedCreateWithoutExpedicoesInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutExpedicoesInput
    connect?: MunicipioWhereUniqueInput
  }

  export type TipoVegetacaoCreateNestedOneWithoutExpedicoesInput = {
    create?: XOR<TipoVegetacaoCreateWithoutExpedicoesInput, TipoVegetacaoUncheckedCreateWithoutExpedicoesInput>
    connectOrCreate?: TipoVegetacaoCreateOrConnectWithoutExpedicoesInput
    connect?: TipoVegetacaoWhereUniqueInput
  }

  export type ExpedicaoMidiaCreateNestedManyWithoutExpedicaoInput = {
    create?: XOR<ExpedicaoMidiaCreateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput> | ExpedicaoMidiaCreateWithoutExpedicaoInput[] | ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput | ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput[]
    createMany?: ExpedicaoMidiaCreateManyExpedicaoInputEnvelope
    connect?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
  }

  export type AmostraCreateNestedManyWithoutExpedicaoInput = {
    create?: XOR<AmostraCreateWithoutExpedicaoInput, AmostraUncheckedCreateWithoutExpedicaoInput> | AmostraCreateWithoutExpedicaoInput[] | AmostraUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutExpedicaoInput | AmostraCreateOrConnectWithoutExpedicaoInput[]
    createMany?: AmostraCreateManyExpedicaoInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type ExpedicaoMidiaUncheckedCreateNestedManyWithoutExpedicaoInput = {
    create?: XOR<ExpedicaoMidiaCreateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput> | ExpedicaoMidiaCreateWithoutExpedicaoInput[] | ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput | ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput[]
    createMany?: ExpedicaoMidiaCreateManyExpedicaoInputEnvelope
    connect?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
  }

  export type AmostraUncheckedCreateNestedManyWithoutExpedicaoInput = {
    create?: XOR<AmostraCreateWithoutExpedicaoInput, AmostraUncheckedCreateWithoutExpedicaoInput> | AmostraCreateWithoutExpedicaoInput[] | AmostraUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutExpedicaoInput | AmostraCreateOrConnectWithoutExpedicaoInput[]
    createMany?: AmostraCreateManyExpedicaoInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MunicipioUpdateOneRequiredWithoutExpedicoesNestedInput = {
    create?: XOR<MunicipioCreateWithoutExpedicoesInput, MunicipioUncheckedCreateWithoutExpedicoesInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutExpedicoesInput
    upsert?: MunicipioUpsertWithoutExpedicoesInput
    connect?: MunicipioWhereUniqueInput
    update?: XOR<XOR<MunicipioUpdateToOneWithWhereWithoutExpedicoesInput, MunicipioUpdateWithoutExpedicoesInput>, MunicipioUncheckedUpdateWithoutExpedicoesInput>
  }

  export type TipoVegetacaoUpdateOneWithoutExpedicoesNestedInput = {
    create?: XOR<TipoVegetacaoCreateWithoutExpedicoesInput, TipoVegetacaoUncheckedCreateWithoutExpedicoesInput>
    connectOrCreate?: TipoVegetacaoCreateOrConnectWithoutExpedicoesInput
    upsert?: TipoVegetacaoUpsertWithoutExpedicoesInput
    disconnect?: TipoVegetacaoWhereInput | boolean
    delete?: TipoVegetacaoWhereInput | boolean
    connect?: TipoVegetacaoWhereUniqueInput
    update?: XOR<XOR<TipoVegetacaoUpdateToOneWithWhereWithoutExpedicoesInput, TipoVegetacaoUpdateWithoutExpedicoesInput>, TipoVegetacaoUncheckedUpdateWithoutExpedicoesInput>
  }

  export type ExpedicaoMidiaUpdateManyWithoutExpedicaoNestedInput = {
    create?: XOR<ExpedicaoMidiaCreateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput> | ExpedicaoMidiaCreateWithoutExpedicaoInput[] | ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput | ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput[]
    upsert?: ExpedicaoMidiaUpsertWithWhereUniqueWithoutExpedicaoInput | ExpedicaoMidiaUpsertWithWhereUniqueWithoutExpedicaoInput[]
    createMany?: ExpedicaoMidiaCreateManyExpedicaoInputEnvelope
    set?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    disconnect?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    delete?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    connect?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    update?: ExpedicaoMidiaUpdateWithWhereUniqueWithoutExpedicaoInput | ExpedicaoMidiaUpdateWithWhereUniqueWithoutExpedicaoInput[]
    updateMany?: ExpedicaoMidiaUpdateManyWithWhereWithoutExpedicaoInput | ExpedicaoMidiaUpdateManyWithWhereWithoutExpedicaoInput[]
    deleteMany?: ExpedicaoMidiaScalarWhereInput | ExpedicaoMidiaScalarWhereInput[]
  }

  export type AmostraUpdateManyWithoutExpedicaoNestedInput = {
    create?: XOR<AmostraCreateWithoutExpedicaoInput, AmostraUncheckedCreateWithoutExpedicaoInput> | AmostraCreateWithoutExpedicaoInput[] | AmostraUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutExpedicaoInput | AmostraCreateOrConnectWithoutExpedicaoInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutExpedicaoInput | AmostraUpsertWithWhereUniqueWithoutExpedicaoInput[]
    createMany?: AmostraCreateManyExpedicaoInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutExpedicaoInput | AmostraUpdateWithWhereUniqueWithoutExpedicaoInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutExpedicaoInput | AmostraUpdateManyWithWhereWithoutExpedicaoInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpedicaoMidiaUncheckedUpdateManyWithoutExpedicaoNestedInput = {
    create?: XOR<ExpedicaoMidiaCreateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput> | ExpedicaoMidiaCreateWithoutExpedicaoInput[] | ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput | ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput[]
    upsert?: ExpedicaoMidiaUpsertWithWhereUniqueWithoutExpedicaoInput | ExpedicaoMidiaUpsertWithWhereUniqueWithoutExpedicaoInput[]
    createMany?: ExpedicaoMidiaCreateManyExpedicaoInputEnvelope
    set?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    disconnect?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    delete?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    connect?: ExpedicaoMidiaWhereUniqueInput | ExpedicaoMidiaWhereUniqueInput[]
    update?: ExpedicaoMidiaUpdateWithWhereUniqueWithoutExpedicaoInput | ExpedicaoMidiaUpdateWithWhereUniqueWithoutExpedicaoInput[]
    updateMany?: ExpedicaoMidiaUpdateManyWithWhereWithoutExpedicaoInput | ExpedicaoMidiaUpdateManyWithWhereWithoutExpedicaoInput[]
    deleteMany?: ExpedicaoMidiaScalarWhereInput | ExpedicaoMidiaScalarWhereInput[]
  }

  export type AmostraUncheckedUpdateManyWithoutExpedicaoNestedInput = {
    create?: XOR<AmostraCreateWithoutExpedicaoInput, AmostraUncheckedCreateWithoutExpedicaoInput> | AmostraCreateWithoutExpedicaoInput[] | AmostraUncheckedCreateWithoutExpedicaoInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutExpedicaoInput | AmostraCreateOrConnectWithoutExpedicaoInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutExpedicaoInput | AmostraUpsertWithWhereUniqueWithoutExpedicaoInput[]
    createMany?: AmostraCreateManyExpedicaoInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutExpedicaoInput | AmostraUpdateWithWhereUniqueWithoutExpedicaoInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutExpedicaoInput | AmostraUpdateManyWithWhereWithoutExpedicaoInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type ExpedicaoCreateNestedOneWithoutExpedicaoMidiaInput = {
    create?: XOR<ExpedicaoCreateWithoutExpedicaoMidiaInput, ExpedicaoUncheckedCreateWithoutExpedicaoMidiaInput>
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutExpedicaoMidiaInput
    connect?: ExpedicaoWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ExpedicaoUpdateOneWithoutExpedicaoMidiaNestedInput = {
    create?: XOR<ExpedicaoCreateWithoutExpedicaoMidiaInput, ExpedicaoUncheckedCreateWithoutExpedicaoMidiaInput>
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutExpedicaoMidiaInput
    upsert?: ExpedicaoUpsertWithoutExpedicaoMidiaInput
    disconnect?: ExpedicaoWhereInput | boolean
    delete?: ExpedicaoWhereInput | boolean
    connect?: ExpedicaoWhereUniqueInput
    update?: XOR<XOR<ExpedicaoUpdateToOneWithWhereWithoutExpedicaoMidiaInput, ExpedicaoUpdateWithoutExpedicaoMidiaInput>, ExpedicaoUncheckedUpdateWithoutExpedicaoMidiaInput>
  }

  export type ItemDadoCreateNestedManyWithoutDadoEcologicoInput = {
    create?: XOR<ItemDadoCreateWithoutDadoEcologicoInput, ItemDadoUncheckedCreateWithoutDadoEcologicoInput> | ItemDadoCreateWithoutDadoEcologicoInput[] | ItemDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: ItemDadoCreateOrConnectWithoutDadoEcologicoInput | ItemDadoCreateOrConnectWithoutDadoEcologicoInput[]
    createMany?: ItemDadoCreateManyDadoEcologicoInputEnvelope
    connect?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
  }

  export type PlantaDadoCreateNestedManyWithoutDadoEcologicoInput = {
    create?: XOR<PlantaDadoCreateWithoutDadoEcologicoInput, PlantaDadoUncheckedCreateWithoutDadoEcologicoInput> | PlantaDadoCreateWithoutDadoEcologicoInput[] | PlantaDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutDadoEcologicoInput | PlantaDadoCreateOrConnectWithoutDadoEcologicoInput[]
    createMany?: PlantaDadoCreateManyDadoEcologicoInputEnvelope
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
  }

  export type AmostraDadoCreateNestedManyWithoutDadoEcologicoInput = {
    create?: XOR<AmostraDadoCreateWithoutDadoEcologicoInput, AmostraDadoUncheckedCreateWithoutDadoEcologicoInput> | AmostraDadoCreateWithoutDadoEcologicoInput[] | AmostraDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutDadoEcologicoInput | AmostraDadoCreateOrConnectWithoutDadoEcologicoInput[]
    createMany?: AmostraDadoCreateManyDadoEcologicoInputEnvelope
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
  }

  export type ItemDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput = {
    create?: XOR<ItemDadoCreateWithoutDadoEcologicoInput, ItemDadoUncheckedCreateWithoutDadoEcologicoInput> | ItemDadoCreateWithoutDadoEcologicoInput[] | ItemDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: ItemDadoCreateOrConnectWithoutDadoEcologicoInput | ItemDadoCreateOrConnectWithoutDadoEcologicoInput[]
    createMany?: ItemDadoCreateManyDadoEcologicoInputEnvelope
    connect?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
  }

  export type PlantaDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput = {
    create?: XOR<PlantaDadoCreateWithoutDadoEcologicoInput, PlantaDadoUncheckedCreateWithoutDadoEcologicoInput> | PlantaDadoCreateWithoutDadoEcologicoInput[] | PlantaDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutDadoEcologicoInput | PlantaDadoCreateOrConnectWithoutDadoEcologicoInput[]
    createMany?: PlantaDadoCreateManyDadoEcologicoInputEnvelope
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
  }

  export type AmostraDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput = {
    create?: XOR<AmostraDadoCreateWithoutDadoEcologicoInput, AmostraDadoUncheckedCreateWithoutDadoEcologicoInput> | AmostraDadoCreateWithoutDadoEcologicoInput[] | AmostraDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutDadoEcologicoInput | AmostraDadoCreateOrConnectWithoutDadoEcologicoInput[]
    createMany?: AmostraDadoCreateManyDadoEcologicoInputEnvelope
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
  }

  export type ItemDadoUpdateManyWithoutDadoEcologicoNestedInput = {
    create?: XOR<ItemDadoCreateWithoutDadoEcologicoInput, ItemDadoUncheckedCreateWithoutDadoEcologicoInput> | ItemDadoCreateWithoutDadoEcologicoInput[] | ItemDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: ItemDadoCreateOrConnectWithoutDadoEcologicoInput | ItemDadoCreateOrConnectWithoutDadoEcologicoInput[]
    upsert?: ItemDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput | ItemDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput[]
    createMany?: ItemDadoCreateManyDadoEcologicoInputEnvelope
    set?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    disconnect?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    delete?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    connect?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    update?: ItemDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput | ItemDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput[]
    updateMany?: ItemDadoUpdateManyWithWhereWithoutDadoEcologicoInput | ItemDadoUpdateManyWithWhereWithoutDadoEcologicoInput[]
    deleteMany?: ItemDadoScalarWhereInput | ItemDadoScalarWhereInput[]
  }

  export type PlantaDadoUpdateManyWithoutDadoEcologicoNestedInput = {
    create?: XOR<PlantaDadoCreateWithoutDadoEcologicoInput, PlantaDadoUncheckedCreateWithoutDadoEcologicoInput> | PlantaDadoCreateWithoutDadoEcologicoInput[] | PlantaDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutDadoEcologicoInput | PlantaDadoCreateOrConnectWithoutDadoEcologicoInput[]
    upsert?: PlantaDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput | PlantaDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput[]
    createMany?: PlantaDadoCreateManyDadoEcologicoInputEnvelope
    set?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    disconnect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    delete?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    update?: PlantaDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput | PlantaDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput[]
    updateMany?: PlantaDadoUpdateManyWithWhereWithoutDadoEcologicoInput | PlantaDadoUpdateManyWithWhereWithoutDadoEcologicoInput[]
    deleteMany?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
  }

  export type AmostraDadoUpdateManyWithoutDadoEcologicoNestedInput = {
    create?: XOR<AmostraDadoCreateWithoutDadoEcologicoInput, AmostraDadoUncheckedCreateWithoutDadoEcologicoInput> | AmostraDadoCreateWithoutDadoEcologicoInput[] | AmostraDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutDadoEcologicoInput | AmostraDadoCreateOrConnectWithoutDadoEcologicoInput[]
    upsert?: AmostraDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput | AmostraDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput[]
    createMany?: AmostraDadoCreateManyDadoEcologicoInputEnvelope
    set?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    disconnect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    delete?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    update?: AmostraDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput | AmostraDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput[]
    updateMany?: AmostraDadoUpdateManyWithWhereWithoutDadoEcologicoInput | AmostraDadoUpdateManyWithWhereWithoutDadoEcologicoInput[]
    deleteMany?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
  }

  export type ItemDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput = {
    create?: XOR<ItemDadoCreateWithoutDadoEcologicoInput, ItemDadoUncheckedCreateWithoutDadoEcologicoInput> | ItemDadoCreateWithoutDadoEcologicoInput[] | ItemDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: ItemDadoCreateOrConnectWithoutDadoEcologicoInput | ItemDadoCreateOrConnectWithoutDadoEcologicoInput[]
    upsert?: ItemDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput | ItemDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput[]
    createMany?: ItemDadoCreateManyDadoEcologicoInputEnvelope
    set?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    disconnect?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    delete?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    connect?: ItemDadoWhereUniqueInput | ItemDadoWhereUniqueInput[]
    update?: ItemDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput | ItemDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput[]
    updateMany?: ItemDadoUpdateManyWithWhereWithoutDadoEcologicoInput | ItemDadoUpdateManyWithWhereWithoutDadoEcologicoInput[]
    deleteMany?: ItemDadoScalarWhereInput | ItemDadoScalarWhereInput[]
  }

  export type PlantaDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput = {
    create?: XOR<PlantaDadoCreateWithoutDadoEcologicoInput, PlantaDadoUncheckedCreateWithoutDadoEcologicoInput> | PlantaDadoCreateWithoutDadoEcologicoInput[] | PlantaDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutDadoEcologicoInput | PlantaDadoCreateOrConnectWithoutDadoEcologicoInput[]
    upsert?: PlantaDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput | PlantaDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput[]
    createMany?: PlantaDadoCreateManyDadoEcologicoInputEnvelope
    set?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    disconnect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    delete?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    update?: PlantaDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput | PlantaDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput[]
    updateMany?: PlantaDadoUpdateManyWithWhereWithoutDadoEcologicoInput | PlantaDadoUpdateManyWithWhereWithoutDadoEcologicoInput[]
    deleteMany?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
  }

  export type AmostraDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput = {
    create?: XOR<AmostraDadoCreateWithoutDadoEcologicoInput, AmostraDadoUncheckedCreateWithoutDadoEcologicoInput> | AmostraDadoCreateWithoutDadoEcologicoInput[] | AmostraDadoUncheckedCreateWithoutDadoEcologicoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutDadoEcologicoInput | AmostraDadoCreateOrConnectWithoutDadoEcologicoInput[]
    upsert?: AmostraDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput | AmostraDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput[]
    createMany?: AmostraDadoCreateManyDadoEcologicoInputEnvelope
    set?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    disconnect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    delete?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    update?: AmostraDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput | AmostraDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput[]
    updateMany?: AmostraDadoUpdateManyWithWhereWithoutDadoEcologicoInput | AmostraDadoUpdateManyWithWhereWithoutDadoEcologicoInput[]
    deleteMany?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
  }

  export type DadoEcologicoCreateNestedOneWithoutItem_dadosInput = {
    create?: XOR<DadoEcologicoCreateWithoutItem_dadosInput, DadoEcologicoUncheckedCreateWithoutItem_dadosInput>
    connectOrCreate?: DadoEcologicoCreateOrConnectWithoutItem_dadosInput
    connect?: DadoEcologicoWhereUniqueInput
  }

  export type PlantaDadoCreateNestedManyWithoutItem_dadoInput = {
    create?: XOR<PlantaDadoCreateWithoutItem_dadoInput, PlantaDadoUncheckedCreateWithoutItem_dadoInput> | PlantaDadoCreateWithoutItem_dadoInput[] | PlantaDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutItem_dadoInput | PlantaDadoCreateOrConnectWithoutItem_dadoInput[]
    createMany?: PlantaDadoCreateManyItem_dadoInputEnvelope
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
  }

  export type AmostraDadoCreateNestedManyWithoutItem_dadoInput = {
    create?: XOR<AmostraDadoCreateWithoutItem_dadoInput, AmostraDadoUncheckedCreateWithoutItem_dadoInput> | AmostraDadoCreateWithoutItem_dadoInput[] | AmostraDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutItem_dadoInput | AmostraDadoCreateOrConnectWithoutItem_dadoInput[]
    createMany?: AmostraDadoCreateManyItem_dadoInputEnvelope
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
  }

  export type PlantaDadoUncheckedCreateNestedManyWithoutItem_dadoInput = {
    create?: XOR<PlantaDadoCreateWithoutItem_dadoInput, PlantaDadoUncheckedCreateWithoutItem_dadoInput> | PlantaDadoCreateWithoutItem_dadoInput[] | PlantaDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutItem_dadoInput | PlantaDadoCreateOrConnectWithoutItem_dadoInput[]
    createMany?: PlantaDadoCreateManyItem_dadoInputEnvelope
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
  }

  export type AmostraDadoUncheckedCreateNestedManyWithoutItem_dadoInput = {
    create?: XOR<AmostraDadoCreateWithoutItem_dadoInput, AmostraDadoUncheckedCreateWithoutItem_dadoInput> | AmostraDadoCreateWithoutItem_dadoInput[] | AmostraDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutItem_dadoInput | AmostraDadoCreateOrConnectWithoutItem_dadoInput[]
    createMany?: AmostraDadoCreateManyItem_dadoInputEnvelope
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
  }

  export type DadoEcologicoUpdateOneRequiredWithoutItem_dadosNestedInput = {
    create?: XOR<DadoEcologicoCreateWithoutItem_dadosInput, DadoEcologicoUncheckedCreateWithoutItem_dadosInput>
    connectOrCreate?: DadoEcologicoCreateOrConnectWithoutItem_dadosInput
    upsert?: DadoEcologicoUpsertWithoutItem_dadosInput
    connect?: DadoEcologicoWhereUniqueInput
    update?: XOR<XOR<DadoEcologicoUpdateToOneWithWhereWithoutItem_dadosInput, DadoEcologicoUpdateWithoutItem_dadosInput>, DadoEcologicoUncheckedUpdateWithoutItem_dadosInput>
  }

  export type PlantaDadoUpdateManyWithoutItem_dadoNestedInput = {
    create?: XOR<PlantaDadoCreateWithoutItem_dadoInput, PlantaDadoUncheckedCreateWithoutItem_dadoInput> | PlantaDadoCreateWithoutItem_dadoInput[] | PlantaDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutItem_dadoInput | PlantaDadoCreateOrConnectWithoutItem_dadoInput[]
    upsert?: PlantaDadoUpsertWithWhereUniqueWithoutItem_dadoInput | PlantaDadoUpsertWithWhereUniqueWithoutItem_dadoInput[]
    createMany?: PlantaDadoCreateManyItem_dadoInputEnvelope
    set?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    disconnect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    delete?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    update?: PlantaDadoUpdateWithWhereUniqueWithoutItem_dadoInput | PlantaDadoUpdateWithWhereUniqueWithoutItem_dadoInput[]
    updateMany?: PlantaDadoUpdateManyWithWhereWithoutItem_dadoInput | PlantaDadoUpdateManyWithWhereWithoutItem_dadoInput[]
    deleteMany?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
  }

  export type AmostraDadoUpdateManyWithoutItem_dadoNestedInput = {
    create?: XOR<AmostraDadoCreateWithoutItem_dadoInput, AmostraDadoUncheckedCreateWithoutItem_dadoInput> | AmostraDadoCreateWithoutItem_dadoInput[] | AmostraDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutItem_dadoInput | AmostraDadoCreateOrConnectWithoutItem_dadoInput[]
    upsert?: AmostraDadoUpsertWithWhereUniqueWithoutItem_dadoInput | AmostraDadoUpsertWithWhereUniqueWithoutItem_dadoInput[]
    createMany?: AmostraDadoCreateManyItem_dadoInputEnvelope
    set?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    disconnect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    delete?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    update?: AmostraDadoUpdateWithWhereUniqueWithoutItem_dadoInput | AmostraDadoUpdateWithWhereUniqueWithoutItem_dadoInput[]
    updateMany?: AmostraDadoUpdateManyWithWhereWithoutItem_dadoInput | AmostraDadoUpdateManyWithWhereWithoutItem_dadoInput[]
    deleteMany?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
  }

  export type PlantaDadoUncheckedUpdateManyWithoutItem_dadoNestedInput = {
    create?: XOR<PlantaDadoCreateWithoutItem_dadoInput, PlantaDadoUncheckedCreateWithoutItem_dadoInput> | PlantaDadoCreateWithoutItem_dadoInput[] | PlantaDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutItem_dadoInput | PlantaDadoCreateOrConnectWithoutItem_dadoInput[]
    upsert?: PlantaDadoUpsertWithWhereUniqueWithoutItem_dadoInput | PlantaDadoUpsertWithWhereUniqueWithoutItem_dadoInput[]
    createMany?: PlantaDadoCreateManyItem_dadoInputEnvelope
    set?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    disconnect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    delete?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    update?: PlantaDadoUpdateWithWhereUniqueWithoutItem_dadoInput | PlantaDadoUpdateWithWhereUniqueWithoutItem_dadoInput[]
    updateMany?: PlantaDadoUpdateManyWithWhereWithoutItem_dadoInput | PlantaDadoUpdateManyWithWhereWithoutItem_dadoInput[]
    deleteMany?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
  }

  export type AmostraDadoUncheckedUpdateManyWithoutItem_dadoNestedInput = {
    create?: XOR<AmostraDadoCreateWithoutItem_dadoInput, AmostraDadoUncheckedCreateWithoutItem_dadoInput> | AmostraDadoCreateWithoutItem_dadoInput[] | AmostraDadoUncheckedCreateWithoutItem_dadoInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutItem_dadoInput | AmostraDadoCreateOrConnectWithoutItem_dadoInput[]
    upsert?: AmostraDadoUpsertWithWhereUniqueWithoutItem_dadoInput | AmostraDadoUpsertWithWhereUniqueWithoutItem_dadoInput[]
    createMany?: AmostraDadoCreateManyItem_dadoInputEnvelope
    set?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    disconnect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    delete?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    update?: AmostraDadoUpdateWithWhereUniqueWithoutItem_dadoInput | AmostraDadoUpdateWithWhereUniqueWithoutItem_dadoInput[]
    updateMany?: AmostraDadoUpdateManyWithWhereWithoutItem_dadoInput | AmostraDadoUpdateManyWithWhereWithoutItem_dadoInput[]
    deleteMany?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
  }

  export type PlantaDadoCreateNestedManyWithoutPlantaInput = {
    create?: XOR<PlantaDadoCreateWithoutPlantaInput, PlantaDadoUncheckedCreateWithoutPlantaInput> | PlantaDadoCreateWithoutPlantaInput[] | PlantaDadoUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutPlantaInput | PlantaDadoCreateOrConnectWithoutPlantaInput[]
    createMany?: PlantaDadoCreateManyPlantaInputEnvelope
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
  }

  export type AmostraCreateNestedManyWithoutPlantaInput = {
    create?: XOR<AmostraCreateWithoutPlantaInput, AmostraUncheckedCreateWithoutPlantaInput> | AmostraCreateWithoutPlantaInput[] | AmostraUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutPlantaInput | AmostraCreateOrConnectWithoutPlantaInput[]
    createMany?: AmostraCreateManyPlantaInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type PlantaDadoUncheckedCreateNestedManyWithoutPlantaInput = {
    create?: XOR<PlantaDadoCreateWithoutPlantaInput, PlantaDadoUncheckedCreateWithoutPlantaInput> | PlantaDadoCreateWithoutPlantaInput[] | PlantaDadoUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutPlantaInput | PlantaDadoCreateOrConnectWithoutPlantaInput[]
    createMany?: PlantaDadoCreateManyPlantaInputEnvelope
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
  }

  export type AmostraUncheckedCreateNestedManyWithoutPlantaInput = {
    create?: XOR<AmostraCreateWithoutPlantaInput, AmostraUncheckedCreateWithoutPlantaInput> | AmostraCreateWithoutPlantaInput[] | AmostraUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutPlantaInput | AmostraCreateOrConnectWithoutPlantaInput[]
    createMany?: AmostraCreateManyPlantaInputEnvelope
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
  }

  export type PlantaDadoUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<PlantaDadoCreateWithoutPlantaInput, PlantaDadoUncheckedCreateWithoutPlantaInput> | PlantaDadoCreateWithoutPlantaInput[] | PlantaDadoUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutPlantaInput | PlantaDadoCreateOrConnectWithoutPlantaInput[]
    upsert?: PlantaDadoUpsertWithWhereUniqueWithoutPlantaInput | PlantaDadoUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: PlantaDadoCreateManyPlantaInputEnvelope
    set?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    disconnect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    delete?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    update?: PlantaDadoUpdateWithWhereUniqueWithoutPlantaInput | PlantaDadoUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: PlantaDadoUpdateManyWithWhereWithoutPlantaInput | PlantaDadoUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
  }

  export type AmostraUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<AmostraCreateWithoutPlantaInput, AmostraUncheckedCreateWithoutPlantaInput> | AmostraCreateWithoutPlantaInput[] | AmostraUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutPlantaInput | AmostraCreateOrConnectWithoutPlantaInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutPlantaInput | AmostraUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: AmostraCreateManyPlantaInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutPlantaInput | AmostraUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutPlantaInput | AmostraUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type PlantaDadoUncheckedUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<PlantaDadoCreateWithoutPlantaInput, PlantaDadoUncheckedCreateWithoutPlantaInput> | PlantaDadoCreateWithoutPlantaInput[] | PlantaDadoUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: PlantaDadoCreateOrConnectWithoutPlantaInput | PlantaDadoCreateOrConnectWithoutPlantaInput[]
    upsert?: PlantaDadoUpsertWithWhereUniqueWithoutPlantaInput | PlantaDadoUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: PlantaDadoCreateManyPlantaInputEnvelope
    set?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    disconnect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    delete?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    connect?: PlantaDadoWhereUniqueInput | PlantaDadoWhereUniqueInput[]
    update?: PlantaDadoUpdateWithWhereUniqueWithoutPlantaInput | PlantaDadoUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: PlantaDadoUpdateManyWithWhereWithoutPlantaInput | PlantaDadoUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
  }

  export type AmostraUncheckedUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<AmostraCreateWithoutPlantaInput, AmostraUncheckedCreateWithoutPlantaInput> | AmostraCreateWithoutPlantaInput[] | AmostraUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: AmostraCreateOrConnectWithoutPlantaInput | AmostraCreateOrConnectWithoutPlantaInput[]
    upsert?: AmostraUpsertWithWhereUniqueWithoutPlantaInput | AmostraUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: AmostraCreateManyPlantaInputEnvelope
    set?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    disconnect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    delete?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    connect?: AmostraWhereUniqueInput | AmostraWhereUniqueInput[]
    update?: AmostraUpdateWithWhereUniqueWithoutPlantaInput | AmostraUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: AmostraUpdateManyWithWhereWithoutPlantaInput | AmostraUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
  }

  export type PlantaCreateNestedOneWithoutPlanta_dadosInput = {
    create?: XOR<PlantaCreateWithoutPlanta_dadosInput, PlantaUncheckedCreateWithoutPlanta_dadosInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutPlanta_dadosInput
    connect?: PlantaWhereUniqueInput
  }

  export type ItemDadoCreateNestedOneWithoutPlanta_dadosInput = {
    create?: XOR<ItemDadoCreateWithoutPlanta_dadosInput, ItemDadoUncheckedCreateWithoutPlanta_dadosInput>
    connectOrCreate?: ItemDadoCreateOrConnectWithoutPlanta_dadosInput
    connect?: ItemDadoWhereUniqueInput
  }

  export type DadoEcologicoCreateNestedOneWithoutPlanta_dadosInput = {
    create?: XOR<DadoEcologicoCreateWithoutPlanta_dadosInput, DadoEcologicoUncheckedCreateWithoutPlanta_dadosInput>
    connectOrCreate?: DadoEcologicoCreateOrConnectWithoutPlanta_dadosInput
    connect?: DadoEcologicoWhereUniqueInput
  }

  export type PlantaUpdateOneRequiredWithoutPlanta_dadosNestedInput = {
    create?: XOR<PlantaCreateWithoutPlanta_dadosInput, PlantaUncheckedCreateWithoutPlanta_dadosInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutPlanta_dadosInput
    upsert?: PlantaUpsertWithoutPlanta_dadosInput
    connect?: PlantaWhereUniqueInput
    update?: XOR<XOR<PlantaUpdateToOneWithWhereWithoutPlanta_dadosInput, PlantaUpdateWithoutPlanta_dadosInput>, PlantaUncheckedUpdateWithoutPlanta_dadosInput>
  }

  export type ItemDadoUpdateOneRequiredWithoutPlanta_dadosNestedInput = {
    create?: XOR<ItemDadoCreateWithoutPlanta_dadosInput, ItemDadoUncheckedCreateWithoutPlanta_dadosInput>
    connectOrCreate?: ItemDadoCreateOrConnectWithoutPlanta_dadosInput
    upsert?: ItemDadoUpsertWithoutPlanta_dadosInput
    connect?: ItemDadoWhereUniqueInput
    update?: XOR<XOR<ItemDadoUpdateToOneWithWhereWithoutPlanta_dadosInput, ItemDadoUpdateWithoutPlanta_dadosInput>, ItemDadoUncheckedUpdateWithoutPlanta_dadosInput>
  }

  export type DadoEcologicoUpdateOneRequiredWithoutPlanta_dadosNestedInput = {
    create?: XOR<DadoEcologicoCreateWithoutPlanta_dadosInput, DadoEcologicoUncheckedCreateWithoutPlanta_dadosInput>
    connectOrCreate?: DadoEcologicoCreateOrConnectWithoutPlanta_dadosInput
    upsert?: DadoEcologicoUpsertWithoutPlanta_dadosInput
    connect?: DadoEcologicoWhereUniqueInput
    update?: XOR<XOR<DadoEcologicoUpdateToOneWithWhereWithoutPlanta_dadosInput, DadoEcologicoUpdateWithoutPlanta_dadosInput>, DadoEcologicoUncheckedUpdateWithoutPlanta_dadosInput>
  }

  export type PlantaCreateNestedOneWithoutAmostrasInput = {
    create?: XOR<PlantaCreateWithoutAmostrasInput, PlantaUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutAmostrasInput
    connect?: PlantaWhereUniqueInput
  }

  export type ExpedicaoCreateNestedOneWithoutAmostrasInput = {
    create?: XOR<ExpedicaoCreateWithoutAmostrasInput, ExpedicaoUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutAmostrasInput
    connect?: ExpedicaoWhereUniqueInput
  }

  export type TipoRelevoCreateNestedOneWithoutAmostrasInput = {
    create?: XOR<TipoRelevoCreateWithoutAmostrasInput, TipoRelevoUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: TipoRelevoCreateOrConnectWithoutAmostrasInput
    connect?: TipoRelevoWhereUniqueInput
  }

  export type TipoSoloCreateNestedOneWithoutAmostrasInput = {
    create?: XOR<TipoSoloCreateWithoutAmostrasInput, TipoSoloUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: TipoSoloCreateOrConnectWithoutAmostrasInput
    connect?: TipoSoloWhereUniqueInput
  }

  export type AmostraDadoCreateNestedManyWithoutAmostraInput = {
    create?: XOR<AmostraDadoCreateWithoutAmostraInput, AmostraDadoUncheckedCreateWithoutAmostraInput> | AmostraDadoCreateWithoutAmostraInput[] | AmostraDadoUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutAmostraInput | AmostraDadoCreateOrConnectWithoutAmostraInput[]
    createMany?: AmostraDadoCreateManyAmostraInputEnvelope
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
  }

  export type AmostraMidiaCreateNestedManyWithoutAmostraInput = {
    create?: XOR<AmostraMidiaCreateWithoutAmostraInput, AmostraMidiaUncheckedCreateWithoutAmostraInput> | AmostraMidiaCreateWithoutAmostraInput[] | AmostraMidiaUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraMidiaCreateOrConnectWithoutAmostraInput | AmostraMidiaCreateOrConnectWithoutAmostraInput[]
    createMany?: AmostraMidiaCreateManyAmostraInputEnvelope
    connect?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
  }

  export type AmostraDadoUncheckedCreateNestedManyWithoutAmostraInput = {
    create?: XOR<AmostraDadoCreateWithoutAmostraInput, AmostraDadoUncheckedCreateWithoutAmostraInput> | AmostraDadoCreateWithoutAmostraInput[] | AmostraDadoUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutAmostraInput | AmostraDadoCreateOrConnectWithoutAmostraInput[]
    createMany?: AmostraDadoCreateManyAmostraInputEnvelope
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
  }

  export type AmostraMidiaUncheckedCreateNestedManyWithoutAmostraInput = {
    create?: XOR<AmostraMidiaCreateWithoutAmostraInput, AmostraMidiaUncheckedCreateWithoutAmostraInput> | AmostraMidiaCreateWithoutAmostraInput[] | AmostraMidiaUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraMidiaCreateOrConnectWithoutAmostraInput | AmostraMidiaCreateOrConnectWithoutAmostraInput[]
    createMany?: AmostraMidiaCreateManyAmostraInputEnvelope
    connect?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PlantaUpdateOneWithoutAmostrasNestedInput = {
    create?: XOR<PlantaCreateWithoutAmostrasInput, PlantaUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutAmostrasInput
    upsert?: PlantaUpsertWithoutAmostrasInput
    disconnect?: PlantaWhereInput | boolean
    delete?: PlantaWhereInput | boolean
    connect?: PlantaWhereUniqueInput
    update?: XOR<XOR<PlantaUpdateToOneWithWhereWithoutAmostrasInput, PlantaUpdateWithoutAmostrasInput>, PlantaUncheckedUpdateWithoutAmostrasInput>
  }

  export type ExpedicaoUpdateOneWithoutAmostrasNestedInput = {
    create?: XOR<ExpedicaoCreateWithoutAmostrasInput, ExpedicaoUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: ExpedicaoCreateOrConnectWithoutAmostrasInput
    upsert?: ExpedicaoUpsertWithoutAmostrasInput
    disconnect?: ExpedicaoWhereInput | boolean
    delete?: ExpedicaoWhereInput | boolean
    connect?: ExpedicaoWhereUniqueInput
    update?: XOR<XOR<ExpedicaoUpdateToOneWithWhereWithoutAmostrasInput, ExpedicaoUpdateWithoutAmostrasInput>, ExpedicaoUncheckedUpdateWithoutAmostrasInput>
  }

  export type TipoRelevoUpdateOneWithoutAmostrasNestedInput = {
    create?: XOR<TipoRelevoCreateWithoutAmostrasInput, TipoRelevoUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: TipoRelevoCreateOrConnectWithoutAmostrasInput
    upsert?: TipoRelevoUpsertWithoutAmostrasInput
    disconnect?: TipoRelevoWhereInput | boolean
    delete?: TipoRelevoWhereInput | boolean
    connect?: TipoRelevoWhereUniqueInput
    update?: XOR<XOR<TipoRelevoUpdateToOneWithWhereWithoutAmostrasInput, TipoRelevoUpdateWithoutAmostrasInput>, TipoRelevoUncheckedUpdateWithoutAmostrasInput>
  }

  export type TipoSoloUpdateOneWithoutAmostrasNestedInput = {
    create?: XOR<TipoSoloCreateWithoutAmostrasInput, TipoSoloUncheckedCreateWithoutAmostrasInput>
    connectOrCreate?: TipoSoloCreateOrConnectWithoutAmostrasInput
    upsert?: TipoSoloUpsertWithoutAmostrasInput
    disconnect?: TipoSoloWhereInput | boolean
    delete?: TipoSoloWhereInput | boolean
    connect?: TipoSoloWhereUniqueInput
    update?: XOR<XOR<TipoSoloUpdateToOneWithWhereWithoutAmostrasInput, TipoSoloUpdateWithoutAmostrasInput>, TipoSoloUncheckedUpdateWithoutAmostrasInput>
  }

  export type AmostraDadoUpdateManyWithoutAmostraNestedInput = {
    create?: XOR<AmostraDadoCreateWithoutAmostraInput, AmostraDadoUncheckedCreateWithoutAmostraInput> | AmostraDadoCreateWithoutAmostraInput[] | AmostraDadoUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutAmostraInput | AmostraDadoCreateOrConnectWithoutAmostraInput[]
    upsert?: AmostraDadoUpsertWithWhereUniqueWithoutAmostraInput | AmostraDadoUpsertWithWhereUniqueWithoutAmostraInput[]
    createMany?: AmostraDadoCreateManyAmostraInputEnvelope
    set?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    disconnect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    delete?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    update?: AmostraDadoUpdateWithWhereUniqueWithoutAmostraInput | AmostraDadoUpdateWithWhereUniqueWithoutAmostraInput[]
    updateMany?: AmostraDadoUpdateManyWithWhereWithoutAmostraInput | AmostraDadoUpdateManyWithWhereWithoutAmostraInput[]
    deleteMany?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
  }

  export type AmostraMidiaUpdateManyWithoutAmostraNestedInput = {
    create?: XOR<AmostraMidiaCreateWithoutAmostraInput, AmostraMidiaUncheckedCreateWithoutAmostraInput> | AmostraMidiaCreateWithoutAmostraInput[] | AmostraMidiaUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraMidiaCreateOrConnectWithoutAmostraInput | AmostraMidiaCreateOrConnectWithoutAmostraInput[]
    upsert?: AmostraMidiaUpsertWithWhereUniqueWithoutAmostraInput | AmostraMidiaUpsertWithWhereUniqueWithoutAmostraInput[]
    createMany?: AmostraMidiaCreateManyAmostraInputEnvelope
    set?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    disconnect?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    delete?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    connect?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    update?: AmostraMidiaUpdateWithWhereUniqueWithoutAmostraInput | AmostraMidiaUpdateWithWhereUniqueWithoutAmostraInput[]
    updateMany?: AmostraMidiaUpdateManyWithWhereWithoutAmostraInput | AmostraMidiaUpdateManyWithWhereWithoutAmostraInput[]
    deleteMany?: AmostraMidiaScalarWhereInput | AmostraMidiaScalarWhereInput[]
  }

  export type AmostraDadoUncheckedUpdateManyWithoutAmostraNestedInput = {
    create?: XOR<AmostraDadoCreateWithoutAmostraInput, AmostraDadoUncheckedCreateWithoutAmostraInput> | AmostraDadoCreateWithoutAmostraInput[] | AmostraDadoUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraDadoCreateOrConnectWithoutAmostraInput | AmostraDadoCreateOrConnectWithoutAmostraInput[]
    upsert?: AmostraDadoUpsertWithWhereUniqueWithoutAmostraInput | AmostraDadoUpsertWithWhereUniqueWithoutAmostraInput[]
    createMany?: AmostraDadoCreateManyAmostraInputEnvelope
    set?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    disconnect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    delete?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    connect?: AmostraDadoWhereUniqueInput | AmostraDadoWhereUniqueInput[]
    update?: AmostraDadoUpdateWithWhereUniqueWithoutAmostraInput | AmostraDadoUpdateWithWhereUniqueWithoutAmostraInput[]
    updateMany?: AmostraDadoUpdateManyWithWhereWithoutAmostraInput | AmostraDadoUpdateManyWithWhereWithoutAmostraInput[]
    deleteMany?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
  }

  export type AmostraMidiaUncheckedUpdateManyWithoutAmostraNestedInput = {
    create?: XOR<AmostraMidiaCreateWithoutAmostraInput, AmostraMidiaUncheckedCreateWithoutAmostraInput> | AmostraMidiaCreateWithoutAmostraInput[] | AmostraMidiaUncheckedCreateWithoutAmostraInput[]
    connectOrCreate?: AmostraMidiaCreateOrConnectWithoutAmostraInput | AmostraMidiaCreateOrConnectWithoutAmostraInput[]
    upsert?: AmostraMidiaUpsertWithWhereUniqueWithoutAmostraInput | AmostraMidiaUpsertWithWhereUniqueWithoutAmostraInput[]
    createMany?: AmostraMidiaCreateManyAmostraInputEnvelope
    set?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    disconnect?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    delete?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    connect?: AmostraMidiaWhereUniqueInput | AmostraMidiaWhereUniqueInput[]
    update?: AmostraMidiaUpdateWithWhereUniqueWithoutAmostraInput | AmostraMidiaUpdateWithWhereUniqueWithoutAmostraInput[]
    updateMany?: AmostraMidiaUpdateManyWithWhereWithoutAmostraInput | AmostraMidiaUpdateManyWithWhereWithoutAmostraInput[]
    deleteMany?: AmostraMidiaScalarWhereInput | AmostraMidiaScalarWhereInput[]
  }

  export type AmostraCreateNestedOneWithoutAmostra_dadosInput = {
    create?: XOR<AmostraCreateWithoutAmostra_dadosInput, AmostraUncheckedCreateWithoutAmostra_dadosInput>
    connectOrCreate?: AmostraCreateOrConnectWithoutAmostra_dadosInput
    connect?: AmostraWhereUniqueInput
  }

  export type ItemDadoCreateNestedOneWithoutAmostra_dadosInput = {
    create?: XOR<ItemDadoCreateWithoutAmostra_dadosInput, ItemDadoUncheckedCreateWithoutAmostra_dadosInput>
    connectOrCreate?: ItemDadoCreateOrConnectWithoutAmostra_dadosInput
    connect?: ItemDadoWhereUniqueInput
  }

  export type DadoEcologicoCreateNestedOneWithoutAmostra_dadosInput = {
    create?: XOR<DadoEcologicoCreateWithoutAmostra_dadosInput, DadoEcologicoUncheckedCreateWithoutAmostra_dadosInput>
    connectOrCreate?: DadoEcologicoCreateOrConnectWithoutAmostra_dadosInput
    connect?: DadoEcologicoWhereUniqueInput
  }

  export type AmostraUpdateOneRequiredWithoutAmostra_dadosNestedInput = {
    create?: XOR<AmostraCreateWithoutAmostra_dadosInput, AmostraUncheckedCreateWithoutAmostra_dadosInput>
    connectOrCreate?: AmostraCreateOrConnectWithoutAmostra_dadosInput
    upsert?: AmostraUpsertWithoutAmostra_dadosInput
    connect?: AmostraWhereUniqueInput
    update?: XOR<XOR<AmostraUpdateToOneWithWhereWithoutAmostra_dadosInput, AmostraUpdateWithoutAmostra_dadosInput>, AmostraUncheckedUpdateWithoutAmostra_dadosInput>
  }

  export type ItemDadoUpdateOneRequiredWithoutAmostra_dadosNestedInput = {
    create?: XOR<ItemDadoCreateWithoutAmostra_dadosInput, ItemDadoUncheckedCreateWithoutAmostra_dadosInput>
    connectOrCreate?: ItemDadoCreateOrConnectWithoutAmostra_dadosInput
    upsert?: ItemDadoUpsertWithoutAmostra_dadosInput
    connect?: ItemDadoWhereUniqueInput
    update?: XOR<XOR<ItemDadoUpdateToOneWithWhereWithoutAmostra_dadosInput, ItemDadoUpdateWithoutAmostra_dadosInput>, ItemDadoUncheckedUpdateWithoutAmostra_dadosInput>
  }

  export type DadoEcologicoUpdateOneRequiredWithoutAmostra_dadosNestedInput = {
    create?: XOR<DadoEcologicoCreateWithoutAmostra_dadosInput, DadoEcologicoUncheckedCreateWithoutAmostra_dadosInput>
    connectOrCreate?: DadoEcologicoCreateOrConnectWithoutAmostra_dadosInput
    upsert?: DadoEcologicoUpsertWithoutAmostra_dadosInput
    connect?: DadoEcologicoWhereUniqueInput
    update?: XOR<XOR<DadoEcologicoUpdateToOneWithWhereWithoutAmostra_dadosInput, DadoEcologicoUpdateWithoutAmostra_dadosInput>, DadoEcologicoUncheckedUpdateWithoutAmostra_dadosInput>
  }

  export type AmostraCreateNestedOneWithoutAmostra_midiasInput = {
    create?: XOR<AmostraCreateWithoutAmostra_midiasInput, AmostraUncheckedCreateWithoutAmostra_midiasInput>
    connectOrCreate?: AmostraCreateOrConnectWithoutAmostra_midiasInput
    connect?: AmostraWhereUniqueInput
  }

  export type AmostraUpdateOneWithoutAmostra_midiasNestedInput = {
    create?: XOR<AmostraCreateWithoutAmostra_midiasInput, AmostraUncheckedCreateWithoutAmostra_midiasInput>
    connectOrCreate?: AmostraCreateOrConnectWithoutAmostra_midiasInput
    upsert?: AmostraUpsertWithoutAmostra_midiasInput
    disconnect?: AmostraWhereInput | boolean
    delete?: AmostraWhereInput | boolean
    connect?: AmostraWhereUniqueInput
    update?: XOR<XOR<AmostraUpdateToOneWithWhereWithoutAmostra_midiasInput, AmostraUpdateWithoutAmostra_midiasInput>, AmostraUncheckedUpdateWithoutAmostra_midiasInput>
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
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

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type MunicipioCreateWithoutEstadoInput = {
    id_municipio: number
    nm_municipio: string
    expedicoes?: ExpedicaoCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateWithoutEstadoInput = {
    id_municipio: number
    nm_municipio: string
    expedicoes?: ExpedicaoUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioCreateOrConnectWithoutEstadoInput = {
    where: MunicipioWhereUniqueInput
    create: XOR<MunicipioCreateWithoutEstadoInput, MunicipioUncheckedCreateWithoutEstadoInput>
  }

  export type MunicipioCreateManyEstadoInputEnvelope = {
    data: MunicipioCreateManyEstadoInput | MunicipioCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type MunicipioUpsertWithWhereUniqueWithoutEstadoInput = {
    where: MunicipioWhereUniqueInput
    update: XOR<MunicipioUpdateWithoutEstadoInput, MunicipioUncheckedUpdateWithoutEstadoInput>
    create: XOR<MunicipioCreateWithoutEstadoInput, MunicipioUncheckedCreateWithoutEstadoInput>
  }

  export type MunicipioUpdateWithWhereUniqueWithoutEstadoInput = {
    where: MunicipioWhereUniqueInput
    data: XOR<MunicipioUpdateWithoutEstadoInput, MunicipioUncheckedUpdateWithoutEstadoInput>
  }

  export type MunicipioUpdateManyWithWhereWithoutEstadoInput = {
    where: MunicipioScalarWhereInput
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyWithoutEstadoInput>
  }

  export type MunicipioScalarWhereInput = {
    AND?: MunicipioScalarWhereInput | MunicipioScalarWhereInput[]
    OR?: MunicipioScalarWhereInput[]
    NOT?: MunicipioScalarWhereInput | MunicipioScalarWhereInput[]
    id_municipio?: IntFilter<"Municipio"> | number
    nm_municipio?: StringFilter<"Municipio"> | string
    id_estado?: StringFilter<"Municipio"> | string
  }

  export type EstadoCreateWithoutMunicipiosInput = {
    id_estado: string
    nm_estado: string
  }

  export type EstadoUncheckedCreateWithoutMunicipiosInput = {
    id_estado: string
    nm_estado: string
  }

  export type EstadoCreateOrConnectWithoutMunicipiosInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutMunicipiosInput, EstadoUncheckedCreateWithoutMunicipiosInput>
  }

  export type ExpedicaoCreateWithoutMunicipioInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    tipoVegetacao?: TipoVegetacaoCreateNestedOneWithoutExpedicoesInput
    expedicaoMidia?: ExpedicaoMidiaCreateNestedManyWithoutExpedicaoInput
    amostras?: AmostraCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoUncheckedCreateWithoutMunicipioInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_vegetacao?: number | null
    expedicaoMidia?: ExpedicaoMidiaUncheckedCreateNestedManyWithoutExpedicaoInput
    amostras?: AmostraUncheckedCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoCreateOrConnectWithoutMunicipioInput = {
    where: ExpedicaoWhereUniqueInput
    create: XOR<ExpedicaoCreateWithoutMunicipioInput, ExpedicaoUncheckedCreateWithoutMunicipioInput>
  }

  export type ExpedicaoCreateManyMunicipioInputEnvelope = {
    data: ExpedicaoCreateManyMunicipioInput | ExpedicaoCreateManyMunicipioInput[]
    skipDuplicates?: boolean
  }

  export type EstadoUpsertWithoutMunicipiosInput = {
    update: XOR<EstadoUpdateWithoutMunicipiosInput, EstadoUncheckedUpdateWithoutMunicipiosInput>
    create: XOR<EstadoCreateWithoutMunicipiosInput, EstadoUncheckedCreateWithoutMunicipiosInput>
    where?: EstadoWhereInput
  }

  export type EstadoUpdateToOneWithWhereWithoutMunicipiosInput = {
    where?: EstadoWhereInput
    data: XOR<EstadoUpdateWithoutMunicipiosInput, EstadoUncheckedUpdateWithoutMunicipiosInput>
  }

  export type EstadoUpdateWithoutMunicipiosInput = {
    id_estado?: StringFieldUpdateOperationsInput | string
    nm_estado?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateWithoutMunicipiosInput = {
    id_estado?: StringFieldUpdateOperationsInput | string
    nm_estado?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedicaoUpsertWithWhereUniqueWithoutMunicipioInput = {
    where: ExpedicaoWhereUniqueInput
    update: XOR<ExpedicaoUpdateWithoutMunicipioInput, ExpedicaoUncheckedUpdateWithoutMunicipioInput>
    create: XOR<ExpedicaoCreateWithoutMunicipioInput, ExpedicaoUncheckedCreateWithoutMunicipioInput>
  }

  export type ExpedicaoUpdateWithWhereUniqueWithoutMunicipioInput = {
    where: ExpedicaoWhereUniqueInput
    data: XOR<ExpedicaoUpdateWithoutMunicipioInput, ExpedicaoUncheckedUpdateWithoutMunicipioInput>
  }

  export type ExpedicaoUpdateManyWithWhereWithoutMunicipioInput = {
    where: ExpedicaoScalarWhereInput
    data: XOR<ExpedicaoUpdateManyMutationInput, ExpedicaoUncheckedUpdateManyWithoutMunicipioInput>
  }

  export type ExpedicaoScalarWhereInput = {
    AND?: ExpedicaoScalarWhereInput | ExpedicaoScalarWhereInput[]
    OR?: ExpedicaoScalarWhereInput[]
    NOT?: ExpedicaoScalarWhereInput | ExpedicaoScalarWhereInput[]
    id_expedicao?: IntFilter<"Expedicao"> | number
    dt_expedicao?: DateTimeFilter<"Expedicao"> | Date | string
    id_municipio?: IntFilter<"Expedicao"> | number
    id_vegetacao?: IntNullableFilter<"Expedicao"> | number | null
  }

  export type ExpedicaoCreateWithoutTipoVegetacaoInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    municipio: MunicipioCreateNestedOneWithoutExpedicoesInput
    expedicaoMidia?: ExpedicaoMidiaCreateNestedManyWithoutExpedicaoInput
    amostras?: AmostraCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_municipio: number
    expedicaoMidia?: ExpedicaoMidiaUncheckedCreateNestedManyWithoutExpedicaoInput
    amostras?: AmostraUncheckedCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoCreateOrConnectWithoutTipoVegetacaoInput = {
    where: ExpedicaoWhereUniqueInput
    create: XOR<ExpedicaoCreateWithoutTipoVegetacaoInput, ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput>
  }

  export type ExpedicaoCreateManyTipoVegetacaoInputEnvelope = {
    data: ExpedicaoCreateManyTipoVegetacaoInput | ExpedicaoCreateManyTipoVegetacaoInput[]
    skipDuplicates?: boolean
  }

  export type ExpedicaoUpsertWithWhereUniqueWithoutTipoVegetacaoInput = {
    where: ExpedicaoWhereUniqueInput
    update: XOR<ExpedicaoUpdateWithoutTipoVegetacaoInput, ExpedicaoUncheckedUpdateWithoutTipoVegetacaoInput>
    create: XOR<ExpedicaoCreateWithoutTipoVegetacaoInput, ExpedicaoUncheckedCreateWithoutTipoVegetacaoInput>
  }

  export type ExpedicaoUpdateWithWhereUniqueWithoutTipoVegetacaoInput = {
    where: ExpedicaoWhereUniqueInput
    data: XOR<ExpedicaoUpdateWithoutTipoVegetacaoInput, ExpedicaoUncheckedUpdateWithoutTipoVegetacaoInput>
  }

  export type ExpedicaoUpdateManyWithWhereWithoutTipoVegetacaoInput = {
    where: ExpedicaoScalarWhereInput
    data: XOR<ExpedicaoUpdateManyMutationInput, ExpedicaoUncheckedUpdateManyWithoutTipoVegetacaoInput>
  }

  export type AmostraCreateWithoutTipoRelevoInput = {
    id_amostra: number
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    planta?: PlantaCreateNestedOneWithoutAmostrasInput
    expedicao?: ExpedicaoCreateNestedOneWithoutAmostrasInput
    tipoSolo?: TipoSoloCreateNestedOneWithoutAmostrasInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUncheckedCreateWithoutTipoRelevoInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaUncheckedCreateNestedManyWithoutAmostraInput
  }

  export type AmostraCreateOrConnectWithoutTipoRelevoInput = {
    where: AmostraWhereUniqueInput
    create: XOR<AmostraCreateWithoutTipoRelevoInput, AmostraUncheckedCreateWithoutTipoRelevoInput>
  }

  export type AmostraCreateManyTipoRelevoInputEnvelope = {
    data: AmostraCreateManyTipoRelevoInput | AmostraCreateManyTipoRelevoInput[]
    skipDuplicates?: boolean
  }

  export type AmostraUpsertWithWhereUniqueWithoutTipoRelevoInput = {
    where: AmostraWhereUniqueInput
    update: XOR<AmostraUpdateWithoutTipoRelevoInput, AmostraUncheckedUpdateWithoutTipoRelevoInput>
    create: XOR<AmostraCreateWithoutTipoRelevoInput, AmostraUncheckedCreateWithoutTipoRelevoInput>
  }

  export type AmostraUpdateWithWhereUniqueWithoutTipoRelevoInput = {
    where: AmostraWhereUniqueInput
    data: XOR<AmostraUpdateWithoutTipoRelevoInput, AmostraUncheckedUpdateWithoutTipoRelevoInput>
  }

  export type AmostraUpdateManyWithWhereWithoutTipoRelevoInput = {
    where: AmostraScalarWhereInput
    data: XOR<AmostraUpdateManyMutationInput, AmostraUncheckedUpdateManyWithoutTipoRelevoInput>
  }

  export type AmostraScalarWhereInput = {
    AND?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
    OR?: AmostraScalarWhereInput[]
    NOT?: AmostraScalarWhereInput | AmostraScalarWhereInput[]
    id_amostra?: IntFilter<"Amostra"> | number
    id_planta?: IntNullableFilter<"Amostra"> | number | null
    id_expedicao?: IntNullableFilter<"Amostra"> | number | null
    id_relevo?: IntNullableFilter<"Amostra"> | number | null
    id_solo?: IntNullableFilter<"Amostra"> | number | null
    nm_coletor?: StringFilter<"Amostra"> | string
    nr_altitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_altura?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: DecimalNullableFilter<"Amostra"> | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: StringNullableFilter<"Amostra"> | string | null
    ds_obscomplement?: StringNullableFilter<"Amostra"> | string | null
  }

  export type AmostraCreateWithoutTipoSoloInput = {
    id_amostra: number
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    planta?: PlantaCreateNestedOneWithoutAmostrasInput
    expedicao?: ExpedicaoCreateNestedOneWithoutAmostrasInput
    tipoRelevo?: TipoRelevoCreateNestedOneWithoutAmostrasInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUncheckedCreateWithoutTipoSoloInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_relevo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaUncheckedCreateNestedManyWithoutAmostraInput
  }

  export type AmostraCreateOrConnectWithoutTipoSoloInput = {
    where: AmostraWhereUniqueInput
    create: XOR<AmostraCreateWithoutTipoSoloInput, AmostraUncheckedCreateWithoutTipoSoloInput>
  }

  export type AmostraCreateManyTipoSoloInputEnvelope = {
    data: AmostraCreateManyTipoSoloInput | AmostraCreateManyTipoSoloInput[]
    skipDuplicates?: boolean
  }

  export type AmostraUpsertWithWhereUniqueWithoutTipoSoloInput = {
    where: AmostraWhereUniqueInput
    update: XOR<AmostraUpdateWithoutTipoSoloInput, AmostraUncheckedUpdateWithoutTipoSoloInput>
    create: XOR<AmostraCreateWithoutTipoSoloInput, AmostraUncheckedCreateWithoutTipoSoloInput>
  }

  export type AmostraUpdateWithWhereUniqueWithoutTipoSoloInput = {
    where: AmostraWhereUniqueInput
    data: XOR<AmostraUpdateWithoutTipoSoloInput, AmostraUncheckedUpdateWithoutTipoSoloInput>
  }

  export type AmostraUpdateManyWithWhereWithoutTipoSoloInput = {
    where: AmostraScalarWhereInput
    data: XOR<AmostraUpdateManyMutationInput, AmostraUncheckedUpdateManyWithoutTipoSoloInput>
  }

  export type MunicipioCreateWithoutExpedicoesInput = {
    id_municipio: number
    nm_municipio: string
    estado: EstadoCreateNestedOneWithoutMunicipiosInput
  }

  export type MunicipioUncheckedCreateWithoutExpedicoesInput = {
    id_municipio: number
    nm_municipio: string
    id_estado: string
  }

  export type MunicipioCreateOrConnectWithoutExpedicoesInput = {
    where: MunicipioWhereUniqueInput
    create: XOR<MunicipioCreateWithoutExpedicoesInput, MunicipioUncheckedCreateWithoutExpedicoesInput>
  }

  export type TipoVegetacaoCreateWithoutExpedicoesInput = {
    id_vegetacao: number
    nm_vegetacao: string
  }

  export type TipoVegetacaoUncheckedCreateWithoutExpedicoesInput = {
    id_vegetacao: number
    nm_vegetacao: string
  }

  export type TipoVegetacaoCreateOrConnectWithoutExpedicoesInput = {
    where: TipoVegetacaoWhereUniqueInput
    create: XOR<TipoVegetacaoCreateWithoutExpedicoesInput, TipoVegetacaoUncheckedCreateWithoutExpedicoesInput>
  }

  export type ExpedicaoMidiaCreateWithoutExpedicaoInput = {
    id_expedicaomidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput = {
    id_expedicaomidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type ExpedicaoMidiaCreateOrConnectWithoutExpedicaoInput = {
    where: ExpedicaoMidiaWhereUniqueInput
    create: XOR<ExpedicaoMidiaCreateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput>
  }

  export type ExpedicaoMidiaCreateManyExpedicaoInputEnvelope = {
    data: ExpedicaoMidiaCreateManyExpedicaoInput | ExpedicaoMidiaCreateManyExpedicaoInput[]
    skipDuplicates?: boolean
  }

  export type AmostraCreateWithoutExpedicaoInput = {
    id_amostra: number
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    planta?: PlantaCreateNestedOneWithoutAmostrasInput
    tipoRelevo?: TipoRelevoCreateNestedOneWithoutAmostrasInput
    tipoSolo?: TipoSoloCreateNestedOneWithoutAmostrasInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUncheckedCreateWithoutExpedicaoInput = {
    id_amostra: number
    id_planta?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaUncheckedCreateNestedManyWithoutAmostraInput
  }

  export type AmostraCreateOrConnectWithoutExpedicaoInput = {
    where: AmostraWhereUniqueInput
    create: XOR<AmostraCreateWithoutExpedicaoInput, AmostraUncheckedCreateWithoutExpedicaoInput>
  }

  export type AmostraCreateManyExpedicaoInputEnvelope = {
    data: AmostraCreateManyExpedicaoInput | AmostraCreateManyExpedicaoInput[]
    skipDuplicates?: boolean
  }

  export type MunicipioUpsertWithoutExpedicoesInput = {
    update: XOR<MunicipioUpdateWithoutExpedicoesInput, MunicipioUncheckedUpdateWithoutExpedicoesInput>
    create: XOR<MunicipioCreateWithoutExpedicoesInput, MunicipioUncheckedCreateWithoutExpedicoesInput>
    where?: MunicipioWhereInput
  }

  export type MunicipioUpdateToOneWithWhereWithoutExpedicoesInput = {
    where?: MunicipioWhereInput
    data: XOR<MunicipioUpdateWithoutExpedicoesInput, MunicipioUncheckedUpdateWithoutExpedicoesInput>
  }

  export type MunicipioUpdateWithoutExpedicoesInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
    estado?: EstadoUpdateOneRequiredWithoutMunicipiosNestedInput
  }

  export type MunicipioUncheckedUpdateWithoutExpedicoesInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
    id_estado?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVegetacaoUpsertWithoutExpedicoesInput = {
    update: XOR<TipoVegetacaoUpdateWithoutExpedicoesInput, TipoVegetacaoUncheckedUpdateWithoutExpedicoesInput>
    create: XOR<TipoVegetacaoCreateWithoutExpedicoesInput, TipoVegetacaoUncheckedCreateWithoutExpedicoesInput>
    where?: TipoVegetacaoWhereInput
  }

  export type TipoVegetacaoUpdateToOneWithWhereWithoutExpedicoesInput = {
    where?: TipoVegetacaoWhereInput
    data: XOR<TipoVegetacaoUpdateWithoutExpedicoesInput, TipoVegetacaoUncheckedUpdateWithoutExpedicoesInput>
  }

  export type TipoVegetacaoUpdateWithoutExpedicoesInput = {
    id_vegetacao?: IntFieldUpdateOperationsInput | number
    nm_vegetacao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoVegetacaoUncheckedUpdateWithoutExpedicoesInput = {
    id_vegetacao?: IntFieldUpdateOperationsInput | number
    nm_vegetacao?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedicaoMidiaUpsertWithWhereUniqueWithoutExpedicaoInput = {
    where: ExpedicaoMidiaWhereUniqueInput
    update: XOR<ExpedicaoMidiaUpdateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedUpdateWithoutExpedicaoInput>
    create: XOR<ExpedicaoMidiaCreateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedCreateWithoutExpedicaoInput>
  }

  export type ExpedicaoMidiaUpdateWithWhereUniqueWithoutExpedicaoInput = {
    where: ExpedicaoMidiaWhereUniqueInput
    data: XOR<ExpedicaoMidiaUpdateWithoutExpedicaoInput, ExpedicaoMidiaUncheckedUpdateWithoutExpedicaoInput>
  }

  export type ExpedicaoMidiaUpdateManyWithWhereWithoutExpedicaoInput = {
    where: ExpedicaoMidiaScalarWhereInput
    data: XOR<ExpedicaoMidiaUpdateManyMutationInput, ExpedicaoMidiaUncheckedUpdateManyWithoutExpedicaoInput>
  }

  export type ExpedicaoMidiaScalarWhereInput = {
    AND?: ExpedicaoMidiaScalarWhereInput | ExpedicaoMidiaScalarWhereInput[]
    OR?: ExpedicaoMidiaScalarWhereInput[]
    NOT?: ExpedicaoMidiaScalarWhereInput | ExpedicaoMidiaScalarWhereInput[]
    id_expedicaomidia?: IntFilter<"ExpedicaoMidia"> | number
    id_expedicao?: IntNullableFilter<"ExpedicaoMidia"> | number | null
    tp_arquivo?: StringFilter<"ExpedicaoMidia"> | string
    arquivo?: BytesFilter<"ExpedicaoMidia"> | Uint8Array
    descricao?: StringNullableFilter<"ExpedicaoMidia"> | string | null
    data_upload?: DateTimeFilter<"ExpedicaoMidia"> | Date | string
  }

  export type AmostraUpsertWithWhereUniqueWithoutExpedicaoInput = {
    where: AmostraWhereUniqueInput
    update: XOR<AmostraUpdateWithoutExpedicaoInput, AmostraUncheckedUpdateWithoutExpedicaoInput>
    create: XOR<AmostraCreateWithoutExpedicaoInput, AmostraUncheckedCreateWithoutExpedicaoInput>
  }

  export type AmostraUpdateWithWhereUniqueWithoutExpedicaoInput = {
    where: AmostraWhereUniqueInput
    data: XOR<AmostraUpdateWithoutExpedicaoInput, AmostraUncheckedUpdateWithoutExpedicaoInput>
  }

  export type AmostraUpdateManyWithWhereWithoutExpedicaoInput = {
    where: AmostraScalarWhereInput
    data: XOR<AmostraUpdateManyMutationInput, AmostraUncheckedUpdateManyWithoutExpedicaoInput>
  }

  export type ExpedicaoCreateWithoutExpedicaoMidiaInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    municipio: MunicipioCreateNestedOneWithoutExpedicoesInput
    tipoVegetacao?: TipoVegetacaoCreateNestedOneWithoutExpedicoesInput
    amostras?: AmostraCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoUncheckedCreateWithoutExpedicaoMidiaInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_municipio: number
    id_vegetacao?: number | null
    amostras?: AmostraUncheckedCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoCreateOrConnectWithoutExpedicaoMidiaInput = {
    where: ExpedicaoWhereUniqueInput
    create: XOR<ExpedicaoCreateWithoutExpedicaoMidiaInput, ExpedicaoUncheckedCreateWithoutExpedicaoMidiaInput>
  }

  export type ExpedicaoUpsertWithoutExpedicaoMidiaInput = {
    update: XOR<ExpedicaoUpdateWithoutExpedicaoMidiaInput, ExpedicaoUncheckedUpdateWithoutExpedicaoMidiaInput>
    create: XOR<ExpedicaoCreateWithoutExpedicaoMidiaInput, ExpedicaoUncheckedCreateWithoutExpedicaoMidiaInput>
    where?: ExpedicaoWhereInput
  }

  export type ExpedicaoUpdateToOneWithWhereWithoutExpedicaoMidiaInput = {
    where?: ExpedicaoWhereInput
    data: XOR<ExpedicaoUpdateWithoutExpedicaoMidiaInput, ExpedicaoUncheckedUpdateWithoutExpedicaoMidiaInput>
  }

  export type ExpedicaoUpdateWithoutExpedicaoMidiaInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    municipio?: MunicipioUpdateOneRequiredWithoutExpedicoesNestedInput
    tipoVegetacao?: TipoVegetacaoUpdateOneWithoutExpedicoesNestedInput
    amostras?: AmostraUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoUncheckedUpdateWithoutExpedicaoMidiaInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_vegetacao?: NullableIntFieldUpdateOperationsInput | number | null
    amostras?: AmostraUncheckedUpdateManyWithoutExpedicaoNestedInput
  }

  export type ItemDadoCreateWithoutDadoEcologicoInput = {
    id_itemdado: number
    ds_itemdado: string
    planta_dados?: PlantaDadoCreateNestedManyWithoutItem_dadoInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoUncheckedCreateWithoutDadoEcologicoInput = {
    id_itemdado: number
    ds_itemdado: string
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutItem_dadoInput
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoCreateOrConnectWithoutDadoEcologicoInput = {
    where: ItemDadoWhereUniqueInput
    create: XOR<ItemDadoCreateWithoutDadoEcologicoInput, ItemDadoUncheckedCreateWithoutDadoEcologicoInput>
  }

  export type ItemDadoCreateManyDadoEcologicoInputEnvelope = {
    data: ItemDadoCreateManyDadoEcologicoInput | ItemDadoCreateManyDadoEcologicoInput[]
    skipDuplicates?: boolean
  }

  export type PlantaDadoCreateWithoutDadoEcologicoInput = {
    ds_obs?: string | null
    planta: PlantaCreateNestedOneWithoutPlanta_dadosInput
    item_dado: ItemDadoCreateNestedOneWithoutPlanta_dadosInput
  }

  export type PlantaDadoUncheckedCreateWithoutDadoEcologicoInput = {
    id_planta: number
    id_itemdado: number
    ds_obs?: string | null
  }

  export type PlantaDadoCreateOrConnectWithoutDadoEcologicoInput = {
    where: PlantaDadoWhereUniqueInput
    create: XOR<PlantaDadoCreateWithoutDadoEcologicoInput, PlantaDadoUncheckedCreateWithoutDadoEcologicoInput>
  }

  export type PlantaDadoCreateManyDadoEcologicoInputEnvelope = {
    data: PlantaDadoCreateManyDadoEcologicoInput | PlantaDadoCreateManyDadoEcologicoInput[]
    skipDuplicates?: boolean
  }

  export type AmostraDadoCreateWithoutDadoEcologicoInput = {
    ds_cor?: string | null
    ds_obs?: string | null
    amostra: AmostraCreateNestedOneWithoutAmostra_dadosInput
    item_dado: ItemDadoCreateNestedOneWithoutAmostra_dadosInput
  }

  export type AmostraDadoUncheckedCreateWithoutDadoEcologicoInput = {
    id_amostra: number
    id_itemdado: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type AmostraDadoCreateOrConnectWithoutDadoEcologicoInput = {
    where: AmostraDadoWhereUniqueInput
    create: XOR<AmostraDadoCreateWithoutDadoEcologicoInput, AmostraDadoUncheckedCreateWithoutDadoEcologicoInput>
  }

  export type AmostraDadoCreateManyDadoEcologicoInputEnvelope = {
    data: AmostraDadoCreateManyDadoEcologicoInput | AmostraDadoCreateManyDadoEcologicoInput[]
    skipDuplicates?: boolean
  }

  export type ItemDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput = {
    where: ItemDadoWhereUniqueInput
    update: XOR<ItemDadoUpdateWithoutDadoEcologicoInput, ItemDadoUncheckedUpdateWithoutDadoEcologicoInput>
    create: XOR<ItemDadoCreateWithoutDadoEcologicoInput, ItemDadoUncheckedCreateWithoutDadoEcologicoInput>
  }

  export type ItemDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput = {
    where: ItemDadoWhereUniqueInput
    data: XOR<ItemDadoUpdateWithoutDadoEcologicoInput, ItemDadoUncheckedUpdateWithoutDadoEcologicoInput>
  }

  export type ItemDadoUpdateManyWithWhereWithoutDadoEcologicoInput = {
    where: ItemDadoScalarWhereInput
    data: XOR<ItemDadoUpdateManyMutationInput, ItemDadoUncheckedUpdateManyWithoutDadoEcologicoInput>
  }

  export type ItemDadoScalarWhereInput = {
    AND?: ItemDadoScalarWhereInput | ItemDadoScalarWhereInput[]
    OR?: ItemDadoScalarWhereInput[]
    NOT?: ItemDadoScalarWhereInput | ItemDadoScalarWhereInput[]
    id_dadoeco?: IntFilter<"ItemDado"> | number
    id_itemdado?: IntFilter<"ItemDado"> | number
    ds_itemdado?: StringFilter<"ItemDado"> | string
  }

  export type PlantaDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput = {
    where: PlantaDadoWhereUniqueInput
    update: XOR<PlantaDadoUpdateWithoutDadoEcologicoInput, PlantaDadoUncheckedUpdateWithoutDadoEcologicoInput>
    create: XOR<PlantaDadoCreateWithoutDadoEcologicoInput, PlantaDadoUncheckedCreateWithoutDadoEcologicoInput>
  }

  export type PlantaDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput = {
    where: PlantaDadoWhereUniqueInput
    data: XOR<PlantaDadoUpdateWithoutDadoEcologicoInput, PlantaDadoUncheckedUpdateWithoutDadoEcologicoInput>
  }

  export type PlantaDadoUpdateManyWithWhereWithoutDadoEcologicoInput = {
    where: PlantaDadoScalarWhereInput
    data: XOR<PlantaDadoUpdateManyMutationInput, PlantaDadoUncheckedUpdateManyWithoutDadoEcologicoInput>
  }

  export type PlantaDadoScalarWhereInput = {
    AND?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
    OR?: PlantaDadoScalarWhereInput[]
    NOT?: PlantaDadoScalarWhereInput | PlantaDadoScalarWhereInput[]
    id_planta?: IntFilter<"PlantaDado"> | number
    id_dadoeco?: IntFilter<"PlantaDado"> | number
    id_itemdado?: IntFilter<"PlantaDado"> | number
    ds_obs?: StringNullableFilter<"PlantaDado"> | string | null
  }

  export type AmostraDadoUpsertWithWhereUniqueWithoutDadoEcologicoInput = {
    where: AmostraDadoWhereUniqueInput
    update: XOR<AmostraDadoUpdateWithoutDadoEcologicoInput, AmostraDadoUncheckedUpdateWithoutDadoEcologicoInput>
    create: XOR<AmostraDadoCreateWithoutDadoEcologicoInput, AmostraDadoUncheckedCreateWithoutDadoEcologicoInput>
  }

  export type AmostraDadoUpdateWithWhereUniqueWithoutDadoEcologicoInput = {
    where: AmostraDadoWhereUniqueInput
    data: XOR<AmostraDadoUpdateWithoutDadoEcologicoInput, AmostraDadoUncheckedUpdateWithoutDadoEcologicoInput>
  }

  export type AmostraDadoUpdateManyWithWhereWithoutDadoEcologicoInput = {
    where: AmostraDadoScalarWhereInput
    data: XOR<AmostraDadoUpdateManyMutationInput, AmostraDadoUncheckedUpdateManyWithoutDadoEcologicoInput>
  }

  export type AmostraDadoScalarWhereInput = {
    AND?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
    OR?: AmostraDadoScalarWhereInput[]
    NOT?: AmostraDadoScalarWhereInput | AmostraDadoScalarWhereInput[]
    id_amostra?: IntFilter<"AmostraDado"> | number
    id_dadoeco?: IntFilter<"AmostraDado"> | number
    id_itemdado?: IntFilter<"AmostraDado"> | number
    ds_cor?: StringNullableFilter<"AmostraDado"> | string | null
    ds_obs?: StringNullableFilter<"AmostraDado"> | string | null
  }

  export type DadoEcologicoCreateWithoutItem_dadosInput = {
    id_dadoeco: number
    ds_dadoeco: string
    planta_dados?: PlantaDadoCreateNestedManyWithoutDadoEcologicoInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoUncheckedCreateWithoutItem_dadosInput = {
    id_dadoeco: number
    ds_dadoeco: string
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoCreateOrConnectWithoutItem_dadosInput = {
    where: DadoEcologicoWhereUniqueInput
    create: XOR<DadoEcologicoCreateWithoutItem_dadosInput, DadoEcologicoUncheckedCreateWithoutItem_dadosInput>
  }

  export type PlantaDadoCreateWithoutItem_dadoInput = {
    ds_obs?: string | null
    planta: PlantaCreateNestedOneWithoutPlanta_dadosInput
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutPlanta_dadosInput
  }

  export type PlantaDadoUncheckedCreateWithoutItem_dadoInput = {
    id_planta: number
    ds_obs?: string | null
  }

  export type PlantaDadoCreateOrConnectWithoutItem_dadoInput = {
    where: PlantaDadoWhereUniqueInput
    create: XOR<PlantaDadoCreateWithoutItem_dadoInput, PlantaDadoUncheckedCreateWithoutItem_dadoInput>
  }

  export type PlantaDadoCreateManyItem_dadoInputEnvelope = {
    data: PlantaDadoCreateManyItem_dadoInput | PlantaDadoCreateManyItem_dadoInput[]
    skipDuplicates?: boolean
  }

  export type AmostraDadoCreateWithoutItem_dadoInput = {
    ds_cor?: string | null
    ds_obs?: string | null
    amostra: AmostraCreateNestedOneWithoutAmostra_dadosInput
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutAmostra_dadosInput
  }

  export type AmostraDadoUncheckedCreateWithoutItem_dadoInput = {
    id_amostra: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type AmostraDadoCreateOrConnectWithoutItem_dadoInput = {
    where: AmostraDadoWhereUniqueInput
    create: XOR<AmostraDadoCreateWithoutItem_dadoInput, AmostraDadoUncheckedCreateWithoutItem_dadoInput>
  }

  export type AmostraDadoCreateManyItem_dadoInputEnvelope = {
    data: AmostraDadoCreateManyItem_dadoInput | AmostraDadoCreateManyItem_dadoInput[]
    skipDuplicates?: boolean
  }

  export type DadoEcologicoUpsertWithoutItem_dadosInput = {
    update: XOR<DadoEcologicoUpdateWithoutItem_dadosInput, DadoEcologicoUncheckedUpdateWithoutItem_dadosInput>
    create: XOR<DadoEcologicoCreateWithoutItem_dadosInput, DadoEcologicoUncheckedCreateWithoutItem_dadosInput>
    where?: DadoEcologicoWhereInput
  }

  export type DadoEcologicoUpdateToOneWithWhereWithoutItem_dadosInput = {
    where?: DadoEcologicoWhereInput
    data: XOR<DadoEcologicoUpdateWithoutItem_dadosInput, DadoEcologicoUncheckedUpdateWithoutItem_dadosInput>
  }

  export type DadoEcologicoUpdateWithoutItem_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUpdateManyWithoutDadoEcologicoNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type DadoEcologicoUncheckedUpdateWithoutItem_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type PlantaDadoUpsertWithWhereUniqueWithoutItem_dadoInput = {
    where: PlantaDadoWhereUniqueInput
    update: XOR<PlantaDadoUpdateWithoutItem_dadoInput, PlantaDadoUncheckedUpdateWithoutItem_dadoInput>
    create: XOR<PlantaDadoCreateWithoutItem_dadoInput, PlantaDadoUncheckedCreateWithoutItem_dadoInput>
  }

  export type PlantaDadoUpdateWithWhereUniqueWithoutItem_dadoInput = {
    where: PlantaDadoWhereUniqueInput
    data: XOR<PlantaDadoUpdateWithoutItem_dadoInput, PlantaDadoUncheckedUpdateWithoutItem_dadoInput>
  }

  export type PlantaDadoUpdateManyWithWhereWithoutItem_dadoInput = {
    where: PlantaDadoScalarWhereInput
    data: XOR<PlantaDadoUpdateManyMutationInput, PlantaDadoUncheckedUpdateManyWithoutItem_dadoInput>
  }

  export type AmostraDadoUpsertWithWhereUniqueWithoutItem_dadoInput = {
    where: AmostraDadoWhereUniqueInput
    update: XOR<AmostraDadoUpdateWithoutItem_dadoInput, AmostraDadoUncheckedUpdateWithoutItem_dadoInput>
    create: XOR<AmostraDadoCreateWithoutItem_dadoInput, AmostraDadoUncheckedCreateWithoutItem_dadoInput>
  }

  export type AmostraDadoUpdateWithWhereUniqueWithoutItem_dadoInput = {
    where: AmostraDadoWhereUniqueInput
    data: XOR<AmostraDadoUpdateWithoutItem_dadoInput, AmostraDadoUncheckedUpdateWithoutItem_dadoInput>
  }

  export type AmostraDadoUpdateManyWithWhereWithoutItem_dadoInput = {
    where: AmostraDadoScalarWhereInput
    data: XOR<AmostraDadoUpdateManyMutationInput, AmostraDadoUncheckedUpdateManyWithoutItem_dadoInput>
  }

  export type PlantaDadoCreateWithoutPlantaInput = {
    ds_obs?: string | null
    item_dado: ItemDadoCreateNestedOneWithoutPlanta_dadosInput
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutPlanta_dadosInput
  }

  export type PlantaDadoUncheckedCreateWithoutPlantaInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_obs?: string | null
  }

  export type PlantaDadoCreateOrConnectWithoutPlantaInput = {
    where: PlantaDadoWhereUniqueInput
    create: XOR<PlantaDadoCreateWithoutPlantaInput, PlantaDadoUncheckedCreateWithoutPlantaInput>
  }

  export type PlantaDadoCreateManyPlantaInputEnvelope = {
    data: PlantaDadoCreateManyPlantaInput | PlantaDadoCreateManyPlantaInput[]
    skipDuplicates?: boolean
  }

  export type AmostraCreateWithoutPlantaInput = {
    id_amostra: number
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    expedicao?: ExpedicaoCreateNestedOneWithoutAmostrasInput
    tipoRelevo?: TipoRelevoCreateNestedOneWithoutAmostrasInput
    tipoSolo?: TipoSoloCreateNestedOneWithoutAmostrasInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUncheckedCreateWithoutPlantaInput = {
    id_amostra: number
    id_expedicao?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutAmostraInput
    amostra_midias?: AmostraMidiaUncheckedCreateNestedManyWithoutAmostraInput
  }

  export type AmostraCreateOrConnectWithoutPlantaInput = {
    where: AmostraWhereUniqueInput
    create: XOR<AmostraCreateWithoutPlantaInput, AmostraUncheckedCreateWithoutPlantaInput>
  }

  export type AmostraCreateManyPlantaInputEnvelope = {
    data: AmostraCreateManyPlantaInput | AmostraCreateManyPlantaInput[]
    skipDuplicates?: boolean
  }

  export type PlantaDadoUpsertWithWhereUniqueWithoutPlantaInput = {
    where: PlantaDadoWhereUniqueInput
    update: XOR<PlantaDadoUpdateWithoutPlantaInput, PlantaDadoUncheckedUpdateWithoutPlantaInput>
    create: XOR<PlantaDadoCreateWithoutPlantaInput, PlantaDadoUncheckedCreateWithoutPlantaInput>
  }

  export type PlantaDadoUpdateWithWhereUniqueWithoutPlantaInput = {
    where: PlantaDadoWhereUniqueInput
    data: XOR<PlantaDadoUpdateWithoutPlantaInput, PlantaDadoUncheckedUpdateWithoutPlantaInput>
  }

  export type PlantaDadoUpdateManyWithWhereWithoutPlantaInput = {
    where: PlantaDadoScalarWhereInput
    data: XOR<PlantaDadoUpdateManyMutationInput, PlantaDadoUncheckedUpdateManyWithoutPlantaInput>
  }

  export type AmostraUpsertWithWhereUniqueWithoutPlantaInput = {
    where: AmostraWhereUniqueInput
    update: XOR<AmostraUpdateWithoutPlantaInput, AmostraUncheckedUpdateWithoutPlantaInput>
    create: XOR<AmostraCreateWithoutPlantaInput, AmostraUncheckedCreateWithoutPlantaInput>
  }

  export type AmostraUpdateWithWhereUniqueWithoutPlantaInput = {
    where: AmostraWhereUniqueInput
    data: XOR<AmostraUpdateWithoutPlantaInput, AmostraUncheckedUpdateWithoutPlantaInput>
  }

  export type AmostraUpdateManyWithWhereWithoutPlantaInput = {
    where: AmostraScalarWhereInput
    data: XOR<AmostraUpdateManyMutationInput, AmostraUncheckedUpdateManyWithoutPlantaInput>
  }

  export type PlantaCreateWithoutPlanta_dadosInput = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
    amostras?: AmostraCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUncheckedCreateWithoutPlanta_dadosInput = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
    amostras?: AmostraUncheckedCreateNestedManyWithoutPlantaInput
  }

  export type PlantaCreateOrConnectWithoutPlanta_dadosInput = {
    where: PlantaWhereUniqueInput
    create: XOR<PlantaCreateWithoutPlanta_dadosInput, PlantaUncheckedCreateWithoutPlanta_dadosInput>
  }

  export type ItemDadoCreateWithoutPlanta_dadosInput = {
    id_itemdado: number
    ds_itemdado: string
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutItem_dadosInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoUncheckedCreateWithoutPlanta_dadosInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_itemdado: string
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoCreateOrConnectWithoutPlanta_dadosInput = {
    where: ItemDadoWhereUniqueInput
    create: XOR<ItemDadoCreateWithoutPlanta_dadosInput, ItemDadoUncheckedCreateWithoutPlanta_dadosInput>
  }

  export type DadoEcologicoCreateWithoutPlanta_dadosInput = {
    id_dadoeco: number
    ds_dadoeco: string
    item_dados?: ItemDadoCreateNestedManyWithoutDadoEcologicoInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoUncheckedCreateWithoutPlanta_dadosInput = {
    id_dadoeco: number
    ds_dadoeco: string
    item_dados?: ItemDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoCreateOrConnectWithoutPlanta_dadosInput = {
    where: DadoEcologicoWhereUniqueInput
    create: XOR<DadoEcologicoCreateWithoutPlanta_dadosInput, DadoEcologicoUncheckedCreateWithoutPlanta_dadosInput>
  }

  export type PlantaUpsertWithoutPlanta_dadosInput = {
    update: XOR<PlantaUpdateWithoutPlanta_dadosInput, PlantaUncheckedUpdateWithoutPlanta_dadosInput>
    create: XOR<PlantaCreateWithoutPlanta_dadosInput, PlantaUncheckedCreateWithoutPlanta_dadosInput>
    where?: PlantaWhereInput
  }

  export type PlantaUpdateToOneWithWhereWithoutPlanta_dadosInput = {
    where?: PlantaWhereInput
    data: XOR<PlantaUpdateWithoutPlanta_dadosInput, PlantaUncheckedUpdateWithoutPlanta_dadosInput>
  }

  export type PlantaUpdateWithoutPlanta_dadosInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
    amostras?: AmostraUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaUncheckedUpdateWithoutPlanta_dadosInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
    amostras?: AmostraUncheckedUpdateManyWithoutPlantaNestedInput
  }

  export type ItemDadoUpsertWithoutPlanta_dadosInput = {
    update: XOR<ItemDadoUpdateWithoutPlanta_dadosInput, ItemDadoUncheckedUpdateWithoutPlanta_dadosInput>
    create: XOR<ItemDadoCreateWithoutPlanta_dadosInput, ItemDadoUncheckedCreateWithoutPlanta_dadosInput>
    where?: ItemDadoWhereInput
  }

  export type ItemDadoUpdateToOneWithWhereWithoutPlanta_dadosInput = {
    where?: ItemDadoWhereInput
    data: XOR<ItemDadoUpdateWithoutPlanta_dadosInput, ItemDadoUncheckedUpdateWithoutPlanta_dadosInput>
  }

  export type ItemDadoUpdateWithoutPlanta_dadosInput = {
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutItem_dadosNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutItem_dadoNestedInput
  }

  export type ItemDadoUncheckedUpdateWithoutPlanta_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutItem_dadoNestedInput
  }

  export type DadoEcologicoUpsertWithoutPlanta_dadosInput = {
    update: XOR<DadoEcologicoUpdateWithoutPlanta_dadosInput, DadoEcologicoUncheckedUpdateWithoutPlanta_dadosInput>
    create: XOR<DadoEcologicoCreateWithoutPlanta_dadosInput, DadoEcologicoUncheckedCreateWithoutPlanta_dadosInput>
    where?: DadoEcologicoWhereInput
  }

  export type DadoEcologicoUpdateToOneWithWhereWithoutPlanta_dadosInput = {
    where?: DadoEcologicoWhereInput
    data: XOR<DadoEcologicoUpdateWithoutPlanta_dadosInput, DadoEcologicoUncheckedUpdateWithoutPlanta_dadosInput>
  }

  export type DadoEcologicoUpdateWithoutPlanta_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    item_dados?: ItemDadoUpdateManyWithoutDadoEcologicoNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type DadoEcologicoUncheckedUpdateWithoutPlanta_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    item_dados?: ItemDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type PlantaCreateWithoutAmostrasInput = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
    planta_dados?: PlantaDadoCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUncheckedCreateWithoutAmostrasInput = {
    id_planta: number
    nm_vulgar: string
    nm_cientifico: string
    nm_familia: string
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutPlantaInput
  }

  export type PlantaCreateOrConnectWithoutAmostrasInput = {
    where: PlantaWhereUniqueInput
    create: XOR<PlantaCreateWithoutAmostrasInput, PlantaUncheckedCreateWithoutAmostrasInput>
  }

  export type ExpedicaoCreateWithoutAmostrasInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    municipio: MunicipioCreateNestedOneWithoutExpedicoesInput
    tipoVegetacao?: TipoVegetacaoCreateNestedOneWithoutExpedicoesInput
    expedicaoMidia?: ExpedicaoMidiaCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoUncheckedCreateWithoutAmostrasInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_municipio: number
    id_vegetacao?: number | null
    expedicaoMidia?: ExpedicaoMidiaUncheckedCreateNestedManyWithoutExpedicaoInput
  }

  export type ExpedicaoCreateOrConnectWithoutAmostrasInput = {
    where: ExpedicaoWhereUniqueInput
    create: XOR<ExpedicaoCreateWithoutAmostrasInput, ExpedicaoUncheckedCreateWithoutAmostrasInput>
  }

  export type TipoRelevoCreateWithoutAmostrasInput = {
    id_relevo: number
    nm_relevo: string
  }

  export type TipoRelevoUncheckedCreateWithoutAmostrasInput = {
    id_relevo: number
    nm_relevo: string
  }

  export type TipoRelevoCreateOrConnectWithoutAmostrasInput = {
    where: TipoRelevoWhereUniqueInput
    create: XOR<TipoRelevoCreateWithoutAmostrasInput, TipoRelevoUncheckedCreateWithoutAmostrasInput>
  }

  export type TipoSoloCreateWithoutAmostrasInput = {
    id_solo: number
    nm_solo: string
  }

  export type TipoSoloUncheckedCreateWithoutAmostrasInput = {
    id_solo: number
    nm_solo: string
  }

  export type TipoSoloCreateOrConnectWithoutAmostrasInput = {
    where: TipoSoloWhereUniqueInput
    create: XOR<TipoSoloCreateWithoutAmostrasInput, TipoSoloUncheckedCreateWithoutAmostrasInput>
  }

  export type AmostraDadoCreateWithoutAmostraInput = {
    ds_cor?: string | null
    ds_obs?: string | null
    item_dado: ItemDadoCreateNestedOneWithoutAmostra_dadosInput
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutAmostra_dadosInput
  }

  export type AmostraDadoUncheckedCreateWithoutAmostraInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type AmostraDadoCreateOrConnectWithoutAmostraInput = {
    where: AmostraDadoWhereUniqueInput
    create: XOR<AmostraDadoCreateWithoutAmostraInput, AmostraDadoUncheckedCreateWithoutAmostraInput>
  }

  export type AmostraDadoCreateManyAmostraInputEnvelope = {
    data: AmostraDadoCreateManyAmostraInput | AmostraDadoCreateManyAmostraInput[]
    skipDuplicates?: boolean
  }

  export type AmostraMidiaCreateWithoutAmostraInput = {
    id_amostramidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type AmostraMidiaUncheckedCreateWithoutAmostraInput = {
    id_amostramidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type AmostraMidiaCreateOrConnectWithoutAmostraInput = {
    where: AmostraMidiaWhereUniqueInput
    create: XOR<AmostraMidiaCreateWithoutAmostraInput, AmostraMidiaUncheckedCreateWithoutAmostraInput>
  }

  export type AmostraMidiaCreateManyAmostraInputEnvelope = {
    data: AmostraMidiaCreateManyAmostraInput | AmostraMidiaCreateManyAmostraInput[]
    skipDuplicates?: boolean
  }

  export type PlantaUpsertWithoutAmostrasInput = {
    update: XOR<PlantaUpdateWithoutAmostrasInput, PlantaUncheckedUpdateWithoutAmostrasInput>
    create: XOR<PlantaCreateWithoutAmostrasInput, PlantaUncheckedCreateWithoutAmostrasInput>
    where?: PlantaWhereInput
  }

  export type PlantaUpdateToOneWithWhereWithoutAmostrasInput = {
    where?: PlantaWhereInput
    data: XOR<PlantaUpdateWithoutAmostrasInput, PlantaUncheckedUpdateWithoutAmostrasInput>
  }

  export type PlantaUpdateWithoutAmostrasInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaUncheckedUpdateWithoutAmostrasInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    nm_vulgar?: StringFieldUpdateOperationsInput | string
    nm_cientifico?: StringFieldUpdateOperationsInput | string
    nm_familia?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutPlantaNestedInput
  }

  export type ExpedicaoUpsertWithoutAmostrasInput = {
    update: XOR<ExpedicaoUpdateWithoutAmostrasInput, ExpedicaoUncheckedUpdateWithoutAmostrasInput>
    create: XOR<ExpedicaoCreateWithoutAmostrasInput, ExpedicaoUncheckedCreateWithoutAmostrasInput>
    where?: ExpedicaoWhereInput
  }

  export type ExpedicaoUpdateToOneWithWhereWithoutAmostrasInput = {
    where?: ExpedicaoWhereInput
    data: XOR<ExpedicaoUpdateWithoutAmostrasInput, ExpedicaoUncheckedUpdateWithoutAmostrasInput>
  }

  export type ExpedicaoUpdateWithoutAmostrasInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    municipio?: MunicipioUpdateOneRequiredWithoutExpedicoesNestedInput
    tipoVegetacao?: TipoVegetacaoUpdateOneWithoutExpedicoesNestedInput
    expedicaoMidia?: ExpedicaoMidiaUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoUncheckedUpdateWithoutAmostrasInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    id_vegetacao?: NullableIntFieldUpdateOperationsInput | number | null
    expedicaoMidia?: ExpedicaoMidiaUncheckedUpdateManyWithoutExpedicaoNestedInput
  }

  export type TipoRelevoUpsertWithoutAmostrasInput = {
    update: XOR<TipoRelevoUpdateWithoutAmostrasInput, TipoRelevoUncheckedUpdateWithoutAmostrasInput>
    create: XOR<TipoRelevoCreateWithoutAmostrasInput, TipoRelevoUncheckedCreateWithoutAmostrasInput>
    where?: TipoRelevoWhereInput
  }

  export type TipoRelevoUpdateToOneWithWhereWithoutAmostrasInput = {
    where?: TipoRelevoWhereInput
    data: XOR<TipoRelevoUpdateWithoutAmostrasInput, TipoRelevoUncheckedUpdateWithoutAmostrasInput>
  }

  export type TipoRelevoUpdateWithoutAmostrasInput = {
    id_relevo?: IntFieldUpdateOperationsInput | number
    nm_relevo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoRelevoUncheckedUpdateWithoutAmostrasInput = {
    id_relevo?: IntFieldUpdateOperationsInput | number
    nm_relevo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoSoloUpsertWithoutAmostrasInput = {
    update: XOR<TipoSoloUpdateWithoutAmostrasInput, TipoSoloUncheckedUpdateWithoutAmostrasInput>
    create: XOR<TipoSoloCreateWithoutAmostrasInput, TipoSoloUncheckedCreateWithoutAmostrasInput>
    where?: TipoSoloWhereInput
  }

  export type TipoSoloUpdateToOneWithWhereWithoutAmostrasInput = {
    where?: TipoSoloWhereInput
    data: XOR<TipoSoloUpdateWithoutAmostrasInput, TipoSoloUncheckedUpdateWithoutAmostrasInput>
  }

  export type TipoSoloUpdateWithoutAmostrasInput = {
    id_solo?: IntFieldUpdateOperationsInput | number
    nm_solo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoSoloUncheckedUpdateWithoutAmostrasInput = {
    id_solo?: IntFieldUpdateOperationsInput | number
    nm_solo?: StringFieldUpdateOperationsInput | string
  }

  export type AmostraDadoUpsertWithWhereUniqueWithoutAmostraInput = {
    where: AmostraDadoWhereUniqueInput
    update: XOR<AmostraDadoUpdateWithoutAmostraInput, AmostraDadoUncheckedUpdateWithoutAmostraInput>
    create: XOR<AmostraDadoCreateWithoutAmostraInput, AmostraDadoUncheckedCreateWithoutAmostraInput>
  }

  export type AmostraDadoUpdateWithWhereUniqueWithoutAmostraInput = {
    where: AmostraDadoWhereUniqueInput
    data: XOR<AmostraDadoUpdateWithoutAmostraInput, AmostraDadoUncheckedUpdateWithoutAmostraInput>
  }

  export type AmostraDadoUpdateManyWithWhereWithoutAmostraInput = {
    where: AmostraDadoScalarWhereInput
    data: XOR<AmostraDadoUpdateManyMutationInput, AmostraDadoUncheckedUpdateManyWithoutAmostraInput>
  }

  export type AmostraMidiaUpsertWithWhereUniqueWithoutAmostraInput = {
    where: AmostraMidiaWhereUniqueInput
    update: XOR<AmostraMidiaUpdateWithoutAmostraInput, AmostraMidiaUncheckedUpdateWithoutAmostraInput>
    create: XOR<AmostraMidiaCreateWithoutAmostraInput, AmostraMidiaUncheckedCreateWithoutAmostraInput>
  }

  export type AmostraMidiaUpdateWithWhereUniqueWithoutAmostraInput = {
    where: AmostraMidiaWhereUniqueInput
    data: XOR<AmostraMidiaUpdateWithoutAmostraInput, AmostraMidiaUncheckedUpdateWithoutAmostraInput>
  }

  export type AmostraMidiaUpdateManyWithWhereWithoutAmostraInput = {
    where: AmostraMidiaScalarWhereInput
    data: XOR<AmostraMidiaUpdateManyMutationInput, AmostraMidiaUncheckedUpdateManyWithoutAmostraInput>
  }

  export type AmostraMidiaScalarWhereInput = {
    AND?: AmostraMidiaScalarWhereInput | AmostraMidiaScalarWhereInput[]
    OR?: AmostraMidiaScalarWhereInput[]
    NOT?: AmostraMidiaScalarWhereInput | AmostraMidiaScalarWhereInput[]
    id_amostramidia?: IntFilter<"AmostraMidia"> | number
    id_amostra?: IntNullableFilter<"AmostraMidia"> | number | null
    tp_arquivo?: StringFilter<"AmostraMidia"> | string
    arquivo?: BytesFilter<"AmostraMidia"> | Uint8Array
    descricao?: StringNullableFilter<"AmostraMidia"> | string | null
    data_upload?: DateTimeFilter<"AmostraMidia"> | Date | string
  }

  export type AmostraCreateWithoutAmostra_dadosInput = {
    id_amostra: number
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    planta?: PlantaCreateNestedOneWithoutAmostrasInput
    expedicao?: ExpedicaoCreateNestedOneWithoutAmostrasInput
    tipoRelevo?: TipoRelevoCreateNestedOneWithoutAmostrasInput
    tipoSolo?: TipoSoloCreateNestedOneWithoutAmostrasInput
    amostra_midias?: AmostraMidiaCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUncheckedCreateWithoutAmostra_dadosInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    amostra_midias?: AmostraMidiaUncheckedCreateNestedManyWithoutAmostraInput
  }

  export type AmostraCreateOrConnectWithoutAmostra_dadosInput = {
    where: AmostraWhereUniqueInput
    create: XOR<AmostraCreateWithoutAmostra_dadosInput, AmostraUncheckedCreateWithoutAmostra_dadosInput>
  }

  export type ItemDadoCreateWithoutAmostra_dadosInput = {
    id_itemdado: number
    ds_itemdado: string
    dadoEcologico: DadoEcologicoCreateNestedOneWithoutItem_dadosInput
    planta_dados?: PlantaDadoCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoUncheckedCreateWithoutAmostra_dadosInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_itemdado: string
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutItem_dadoInput
  }

  export type ItemDadoCreateOrConnectWithoutAmostra_dadosInput = {
    where: ItemDadoWhereUniqueInput
    create: XOR<ItemDadoCreateWithoutAmostra_dadosInput, ItemDadoUncheckedCreateWithoutAmostra_dadosInput>
  }

  export type DadoEcologicoCreateWithoutAmostra_dadosInput = {
    id_dadoeco: number
    ds_dadoeco: string
    item_dados?: ItemDadoCreateNestedManyWithoutDadoEcologicoInput
    planta_dados?: PlantaDadoCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoUncheckedCreateWithoutAmostra_dadosInput = {
    id_dadoeco: number
    ds_dadoeco: string
    item_dados?: ItemDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
    planta_dados?: PlantaDadoUncheckedCreateNestedManyWithoutDadoEcologicoInput
  }

  export type DadoEcologicoCreateOrConnectWithoutAmostra_dadosInput = {
    where: DadoEcologicoWhereUniqueInput
    create: XOR<DadoEcologicoCreateWithoutAmostra_dadosInput, DadoEcologicoUncheckedCreateWithoutAmostra_dadosInput>
  }

  export type AmostraUpsertWithoutAmostra_dadosInput = {
    update: XOR<AmostraUpdateWithoutAmostra_dadosInput, AmostraUncheckedUpdateWithoutAmostra_dadosInput>
    create: XOR<AmostraCreateWithoutAmostra_dadosInput, AmostraUncheckedCreateWithoutAmostra_dadosInput>
    where?: AmostraWhereInput
  }

  export type AmostraUpdateToOneWithWhereWithoutAmostra_dadosInput = {
    where?: AmostraWhereInput
    data: XOR<AmostraUpdateWithoutAmostra_dadosInput, AmostraUncheckedUpdateWithoutAmostra_dadosInput>
  }

  export type AmostraUpdateWithoutAmostra_dadosInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneWithoutAmostrasNestedInput
    expedicao?: ExpedicaoUpdateOneWithoutAmostrasNestedInput
    tipoRelevo?: TipoRelevoUpdateOneWithoutAmostrasNestedInput
    tipoSolo?: TipoSoloUpdateOneWithoutAmostrasNestedInput
    amostra_midias?: AmostraMidiaUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateWithoutAmostra_dadosInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    amostra_midias?: AmostraMidiaUncheckedUpdateManyWithoutAmostraNestedInput
  }

  export type ItemDadoUpsertWithoutAmostra_dadosInput = {
    update: XOR<ItemDadoUpdateWithoutAmostra_dadosInput, ItemDadoUncheckedUpdateWithoutAmostra_dadosInput>
    create: XOR<ItemDadoCreateWithoutAmostra_dadosInput, ItemDadoUncheckedCreateWithoutAmostra_dadosInput>
    where?: ItemDadoWhereInput
  }

  export type ItemDadoUpdateToOneWithWhereWithoutAmostra_dadosInput = {
    where?: ItemDadoWhereInput
    data: XOR<ItemDadoUpdateWithoutAmostra_dadosInput, ItemDadoUncheckedUpdateWithoutAmostra_dadosInput>
  }

  export type ItemDadoUpdateWithoutAmostra_dadosInput = {
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutItem_dadosNestedInput
    planta_dados?: PlantaDadoUpdateManyWithoutItem_dadoNestedInput
  }

  export type ItemDadoUncheckedUpdateWithoutAmostra_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutItem_dadoNestedInput
  }

  export type DadoEcologicoUpsertWithoutAmostra_dadosInput = {
    update: XOR<DadoEcologicoUpdateWithoutAmostra_dadosInput, DadoEcologicoUncheckedUpdateWithoutAmostra_dadosInput>
    create: XOR<DadoEcologicoCreateWithoutAmostra_dadosInput, DadoEcologicoUncheckedCreateWithoutAmostra_dadosInput>
    where?: DadoEcologicoWhereInput
  }

  export type DadoEcologicoUpdateToOneWithWhereWithoutAmostra_dadosInput = {
    where?: DadoEcologicoWhereInput
    data: XOR<DadoEcologicoUpdateWithoutAmostra_dadosInput, DadoEcologicoUncheckedUpdateWithoutAmostra_dadosInput>
  }

  export type DadoEcologicoUpdateWithoutAmostra_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    item_dados?: ItemDadoUpdateManyWithoutDadoEcologicoNestedInput
    planta_dados?: PlantaDadoUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type DadoEcologicoUncheckedUpdateWithoutAmostra_dadosInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    ds_dadoeco?: StringFieldUpdateOperationsInput | string
    item_dados?: ItemDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutDadoEcologicoNestedInput
  }

  export type AmostraCreateWithoutAmostra_midiasInput = {
    id_amostra: number
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    planta?: PlantaCreateNestedOneWithoutAmostrasInput
    expedicao?: ExpedicaoCreateNestedOneWithoutAmostrasInput
    tipoRelevo?: TipoRelevoCreateNestedOneWithoutAmostrasInput
    tipoSolo?: TipoSoloCreateNestedOneWithoutAmostrasInput
    amostra_dados?: AmostraDadoCreateNestedManyWithoutAmostraInput
  }

  export type AmostraUncheckedCreateWithoutAmostra_midiasInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
    amostra_dados?: AmostraDadoUncheckedCreateNestedManyWithoutAmostraInput
  }

  export type AmostraCreateOrConnectWithoutAmostra_midiasInput = {
    where: AmostraWhereUniqueInput
    create: XOR<AmostraCreateWithoutAmostra_midiasInput, AmostraUncheckedCreateWithoutAmostra_midiasInput>
  }

  export type AmostraUpsertWithoutAmostra_midiasInput = {
    update: XOR<AmostraUpdateWithoutAmostra_midiasInput, AmostraUncheckedUpdateWithoutAmostra_midiasInput>
    create: XOR<AmostraCreateWithoutAmostra_midiasInput, AmostraUncheckedCreateWithoutAmostra_midiasInput>
    where?: AmostraWhereInput
  }

  export type AmostraUpdateToOneWithWhereWithoutAmostra_midiasInput = {
    where?: AmostraWhereInput
    data: XOR<AmostraUpdateWithoutAmostra_midiasInput, AmostraUncheckedUpdateWithoutAmostra_midiasInput>
  }

  export type AmostraUpdateWithoutAmostra_midiasInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneWithoutAmostrasNestedInput
    expedicao?: ExpedicaoUpdateOneWithoutAmostrasNestedInput
    tipoRelevo?: TipoRelevoUpdateOneWithoutAmostrasNestedInput
    tipoSolo?: TipoSoloUpdateOneWithoutAmostrasNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateWithoutAmostra_midiasInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutAmostraNestedInput
  }

  export type MunicipioCreateManyEstadoInput = {
    id_municipio: number
    nm_municipio: string
  }

  export type MunicipioUpdateWithoutEstadoInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
    expedicoes?: ExpedicaoUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateWithoutEstadoInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
    expedicoes?: ExpedicaoUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateManyWithoutEstadoInput = {
    id_municipio?: IntFieldUpdateOperationsInput | number
    nm_municipio?: StringFieldUpdateOperationsInput | string
  }

  export type ExpedicaoCreateManyMunicipioInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_vegetacao?: number | null
  }

  export type ExpedicaoUpdateWithoutMunicipioInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoVegetacao?: TipoVegetacaoUpdateOneWithoutExpedicoesNestedInput
    expedicaoMidia?: ExpedicaoMidiaUpdateManyWithoutExpedicaoNestedInput
    amostras?: AmostraUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoUncheckedUpdateWithoutMunicipioInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_vegetacao?: NullableIntFieldUpdateOperationsInput | number | null
    expedicaoMidia?: ExpedicaoMidiaUncheckedUpdateManyWithoutExpedicaoNestedInput
    amostras?: AmostraUncheckedUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoUncheckedUpdateManyWithoutMunicipioInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_vegetacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpedicaoCreateManyTipoVegetacaoInput = {
    id_expedicao: number
    dt_expedicao: Date | string
    id_municipio: number
  }

  export type ExpedicaoUpdateWithoutTipoVegetacaoInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    municipio?: MunicipioUpdateOneRequiredWithoutExpedicoesNestedInput
    expedicaoMidia?: ExpedicaoMidiaUpdateManyWithoutExpedicaoNestedInput
    amostras?: AmostraUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoUncheckedUpdateWithoutTipoVegetacaoInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_municipio?: IntFieldUpdateOperationsInput | number
    expedicaoMidia?: ExpedicaoMidiaUncheckedUpdateManyWithoutExpedicaoNestedInput
    amostras?: AmostraUncheckedUpdateManyWithoutExpedicaoNestedInput
  }

  export type ExpedicaoUncheckedUpdateManyWithoutTipoVegetacaoInput = {
    id_expedicao?: IntFieldUpdateOperationsInput | number
    dt_expedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_municipio?: IntFieldUpdateOperationsInput | number
  }

  export type AmostraCreateManyTipoRelevoInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
  }

  export type AmostraUpdateWithoutTipoRelevoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneWithoutAmostrasNestedInput
    expedicao?: ExpedicaoUpdateOneWithoutAmostrasNestedInput
    tipoSolo?: TipoSoloUpdateOneWithoutAmostrasNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateWithoutTipoRelevoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUncheckedUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateManyWithoutTipoRelevoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraCreateManyTipoSoloInput = {
    id_amostra: number
    id_planta?: number | null
    id_expedicao?: number | null
    id_relevo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
  }

  export type AmostraUpdateWithoutTipoSoloInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneWithoutAmostrasNestedInput
    expedicao?: ExpedicaoUpdateOneWithoutAmostrasNestedInput
    tipoRelevo?: TipoRelevoUpdateOneWithoutAmostrasNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateWithoutTipoSoloInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUncheckedUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateManyWithoutTipoSoloInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpedicaoMidiaCreateManyExpedicaoInput = {
    id_expedicaomidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type AmostraCreateManyExpedicaoInput = {
    id_amostra: number
    id_planta?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
  }

  export type ExpedicaoMidiaUpdateWithoutExpedicaoInput = {
    id_expedicaomidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpedicaoMidiaUncheckedUpdateWithoutExpedicaoInput = {
    id_expedicaomidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpedicaoMidiaUncheckedUpdateManyWithoutExpedicaoInput = {
    id_expedicaomidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmostraUpdateWithoutExpedicaoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneWithoutAmostrasNestedInput
    tipoRelevo?: TipoRelevoUpdateOneWithoutAmostrasNestedInput
    tipoSolo?: TipoSoloUpdateOneWithoutAmostrasNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateWithoutExpedicaoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUncheckedUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateManyWithoutExpedicaoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_planta?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemDadoCreateManyDadoEcologicoInput = {
    id_itemdado: number
    ds_itemdado: string
  }

  export type PlantaDadoCreateManyDadoEcologicoInput = {
    id_planta: number
    id_itemdado: number
    ds_obs?: string | null
  }

  export type AmostraDadoCreateManyDadoEcologicoInput = {
    id_amostra: number
    id_itemdado: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type ItemDadoUpdateWithoutDadoEcologicoInput = {
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUpdateManyWithoutItem_dadoNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutItem_dadoNestedInput
  }

  export type ItemDadoUncheckedUpdateWithoutDadoEcologicoInput = {
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
    planta_dados?: PlantaDadoUncheckedUpdateManyWithoutItem_dadoNestedInput
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutItem_dadoNestedInput
  }

  export type ItemDadoUncheckedUpdateManyWithoutDadoEcologicoInput = {
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_itemdado?: StringFieldUpdateOperationsInput | string
  }

  export type PlantaDadoUpdateWithoutDadoEcologicoInput = {
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneRequiredWithoutPlanta_dadosNestedInput
    item_dado?: ItemDadoUpdateOneRequiredWithoutPlanta_dadosNestedInput
  }

  export type PlantaDadoUncheckedUpdateWithoutDadoEcologicoInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantaDadoUncheckedUpdateManyWithoutDadoEcologicoInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoUpdateWithoutDadoEcologicoInput = {
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    amostra?: AmostraUpdateOneRequiredWithoutAmostra_dadosNestedInput
    item_dado?: ItemDadoUpdateOneRequiredWithoutAmostra_dadosNestedInput
  }

  export type AmostraDadoUncheckedUpdateWithoutDadoEcologicoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoUncheckedUpdateManyWithoutDadoEcologicoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantaDadoCreateManyItem_dadoInput = {
    id_planta: number
    ds_obs?: string | null
  }

  export type AmostraDadoCreateManyItem_dadoInput = {
    id_amostra: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type PlantaDadoUpdateWithoutItem_dadoInput = {
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    planta?: PlantaUpdateOneRequiredWithoutPlanta_dadosNestedInput
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutPlanta_dadosNestedInput
  }

  export type PlantaDadoUncheckedUpdateWithoutItem_dadoInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantaDadoUncheckedUpdateManyWithoutItem_dadoInput = {
    id_planta?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoUpdateWithoutItem_dadoInput = {
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    amostra?: AmostraUpdateOneRequiredWithoutAmostra_dadosNestedInput
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutAmostra_dadosNestedInput
  }

  export type AmostraDadoUncheckedUpdateWithoutItem_dadoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoUncheckedUpdateManyWithoutItem_dadoInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantaDadoCreateManyPlantaInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_obs?: string | null
  }

  export type AmostraCreateManyPlantaInput = {
    id_amostra: number
    id_expedicao?: number | null
    id_relevo?: number | null
    id_solo?: number | null
    nm_coletor: string
    nr_altitude?: Decimal | DecimalJsLike | number | string | null
    nr_longitude?: Decimal | DecimalJsLike | number | string | null
    nr_latitude?: Decimal | DecimalJsLike | number | string | null
    nr_altura?: Decimal | DecimalJsLike | number | string | null
    nr_DAP?: Decimal | DecimalJsLike | number | string | null
    nr_CAP?: Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: string | null
    ds_obscomplement?: string | null
  }

  export type PlantaDadoUpdateWithoutPlantaInput = {
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    item_dado?: ItemDadoUpdateOneRequiredWithoutPlanta_dadosNestedInput
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutPlanta_dadosNestedInput
  }

  export type PlantaDadoUncheckedUpdateWithoutPlantaInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantaDadoUncheckedUpdateManyWithoutPlantaInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraUpdateWithoutPlantaInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    expedicao?: ExpedicaoUpdateOneWithoutAmostrasNestedInput
    tipoRelevo?: TipoRelevoUpdateOneWithoutAmostrasNestedInput
    tipoSolo?: TipoSoloUpdateOneWithoutAmostrasNestedInput
    amostra_dados?: AmostraDadoUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateWithoutPlantaInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
    amostra_dados?: AmostraDadoUncheckedUpdateManyWithoutAmostraNestedInput
    amostra_midias?: AmostraMidiaUncheckedUpdateManyWithoutAmostraNestedInput
  }

  export type AmostraUncheckedUpdateManyWithoutPlantaInput = {
    id_amostra?: IntFieldUpdateOperationsInput | number
    id_expedicao?: NullableIntFieldUpdateOperationsInput | number | null
    id_relevo?: NullableIntFieldUpdateOperationsInput | number | null
    id_solo?: NullableIntFieldUpdateOperationsInput | number | null
    nm_coletor?: StringFieldUpdateOperationsInput | string
    nr_altitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_DAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nr_CAP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ds_exsudado?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obscomplement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoCreateManyAmostraInput = {
    id_dadoeco: number
    id_itemdado: number
    ds_cor?: string | null
    ds_obs?: string | null
  }

  export type AmostraMidiaCreateManyAmostraInput = {
    id_amostramidia: number
    tp_arquivo: string
    arquivo: Uint8Array
    descricao?: string | null
    data_upload?: Date | string
  }

  export type AmostraDadoUpdateWithoutAmostraInput = {
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
    item_dado?: ItemDadoUpdateOneRequiredWithoutAmostra_dadosNestedInput
    dadoEcologico?: DadoEcologicoUpdateOneRequiredWithoutAmostra_dadosNestedInput
  }

  export type AmostraDadoUncheckedUpdateWithoutAmostraInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraDadoUncheckedUpdateManyWithoutAmostraInput = {
    id_dadoeco?: IntFieldUpdateOperationsInput | number
    id_itemdado?: IntFieldUpdateOperationsInput | number
    ds_cor?: NullableStringFieldUpdateOperationsInput | string | null
    ds_obs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmostraMidiaUpdateWithoutAmostraInput = {
    id_amostramidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmostraMidiaUncheckedUpdateWithoutAmostraInput = {
    id_amostramidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmostraMidiaUncheckedUpdateManyWithoutAmostraInput = {
    id_amostramidia?: IntFieldUpdateOperationsInput | number
    tp_arquivo?: StringFieldUpdateOperationsInput | string
    arquivo?: BytesFieldUpdateOperationsInput | Uint8Array
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    data_upload?: DateTimeFieldUpdateOperationsInput | Date | string
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