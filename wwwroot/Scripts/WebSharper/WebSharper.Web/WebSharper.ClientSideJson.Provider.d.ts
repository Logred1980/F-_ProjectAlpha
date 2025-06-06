import LinkedList from "../WebSharper.StdLib/System.Collections.Generic.LinkedList`1"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
import FSharpSet from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpSet`1"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import DateTimeOffset from "../WebSharper.StdLib/System.DateTimeOffset"
export function DecodeLinkedList<T0>(decEl:(() => ((a:any) => T0))):(() => ((a:any) => LinkedList<T0>))
export function DecodeArrayDictionary<T0, T1>(decKey:(() => ((a:any) => T0)), decEl:(() => ((a:any) => T1))):(() => ((a:any) => Dictionary<T0, T1>))
export function DecodeStringDictionary<T0>(decEl:(() => ((a:any) => T0))):(() => ((a:any) => Dictionary<string, T0>))
export function DecodeArrayMap<T0, T1>(decKey:(() => ((a:any) => T0)), decEl:(() => ((a:any) => T1))):(() => ((a:any) => FSharpMap<T0, T1>))
export function DecodeStringMap<T0>(decEl:(() => ((a:any) => T0))):(() => ((a:any) => FSharpMap<string, T0>))
export function DecodeArray<T0>(decEl:(() => ((a:any) => T0))):(() => ((a:any) => (T0)[]))
export function DecodeUnion<T0>(t, discr, cases:([string, ([string, string, (() => ((a:any) => any)), number])[]])[]):(() => ((a:any) => T0))
export function DecodeClass<T0>(t, fields:([string, (() => ((a:any) => any)), number])[], subClassDecoders:((() => ((a:any) => T0)))[]):(() => ((a:any) => T0))
export function DecodeRecord<T0>(t, fields:([string, (() => ((a:any) => any)), number])[]):(() => ((a:any) => T0))
export function DecodeSet<T0>(decEl:(() => ((a:any) => T0))):(() => ((a:any) => FSharpSet<T0>))
export function DecodeList<T0>(decEl:(() => ((a:any) => T0))):(() => ((a:any) => FSharpList_T<T0>))
export function DecodeBigInteger():(() => ((a:any) => BigInt))
export function DecodeDateTimeOffset():(() => ((a:any) => DateTimeOffset))
export function DecodeDateTime():(() => ((a:any) => number))
export function DecodeTuple(decs:((() => ((a:any) => any)))[]):(() => ((a:any) => (any)[]))
export function EncodeLinkedList<T0>(encEl:(() => ((a?:T0) => any))):(() => ((a:LinkedList<T0>) => any))
export function EncodeArrayDictionary<T0, T1>(encKey:(() => ((a?:T0) => any)), encEl:(() => ((a?:T1) => any))):(() => ((a:Dictionary<T0, T1>) => any))
export function EncodeStringDictionary<T0>(encEl:(() => ((a?:T0) => any))):(() => ((a:Dictionary<string, T0>) => any))
export function EncodeArrayMap<T0, T1>(encKey:(() => ((a?:T0) => any)), encEl:(() => ((a?:T1) => any))):(() => ((a:FSharpMap<T0, T1>) => any))
export function EncodeStringMap<T0>(encEl:(() => ((a?:T0) => any))):(() => ((a:FSharpMap<string, T0>) => any))
export function EncodeSet<T0>(encEl:(() => ((a?:T0) => any))):(() => ((a:FSharpSet<T0>) => any))
export function EncodeArray<T0>(encEl:(() => ((a?:T0) => any))):(() => ((a:(T0)[]) => any))
export function EncodeUnion<T0>(a, discr, cases:([string, ([string, string, (() => ((a:any) => any)), number])[]])[]):(() => ((a?:T0) => any))
export function EncodeRecord<T0>(a, fields:([string, (() => ((a:any) => any)), number])[]):(() => ((a?:T0) => any))
export function EncodeList<T0>(encEl:(() => ((a?:T0) => any))):(() => ((a:FSharpList_T<T0>) => any))
export function EncodeBigInteger():(() => ((a:BigInt) => any))
export function EncodeDateTimeOffset():(() => ((a:DateTimeOffset) => any))
export function EncodeDateTime():(() => ((a:number) => any))
export function EncodeTuple(encs:((() => ((a:any) => any)))[]):(() => ((a:(any)[]) => any))
export function Id<T0>():(() => ((a?:T0) => T0))
