## Module Data.Function.Eff

#### `ImportEffFn0`

``` purescript
data ImportEffFn0 :: * -> *
```

A native function of no arguments that returns an Eff value.

#### `ImportEffFn1`

``` purescript
data ImportEffFn1 :: * -> * -> *
```

A native function of one argument that returns an Eff value.

#### `ImportEffFn2`

``` purescript
data ImportEffFn2 :: * -> * -> * -> *
```

A native function of two arguments that returns an Eff value.

#### `ImportEffFn3`

``` purescript
data ImportEffFn3 :: * -> * -> * -> * -> *
```

A native function of three arguments that returns an Eff value.

#### `ImportEffFn4`

``` purescript
data ImportEffFn4 :: * -> * -> * -> * -> * -> *
```

A native function of four arguments that returns an Eff value.

#### `ImportEffFn5`

``` purescript
data ImportEffFn5 :: * -> * -> * -> * -> * -> * -> *
```

A native function of five arguments that returns an Eff value.

#### `ImportEffFn6`

``` purescript
data ImportEffFn6 :: * -> * -> * -> * -> * -> * -> * -> *
```

A native function of six arguments that returns an Eff value.

#### `ImportEffFn7`

``` purescript
data ImportEffFn7 :: * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of seven arguments that returns an Eff value.

#### `ImportEffFn8`

``` purescript
data ImportEffFn8 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of eight arguments that returns an Eff value.

#### `ImportEffFn9`

``` purescript
data ImportEffFn9 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of nine arguments that returns an Eff value.

#### `ImportEffFn10`

``` purescript
data ImportEffFn10 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of ten arguments that returns an Eff value.

#### `ExportEffFn0`

``` purescript
data ExportEffFn0 :: * -> *
```

A function of no arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn1`

``` purescript
data ExportEffFn1 :: * -> * -> *
```

A function of one argument that returns an Eff value to pass as a native callback.

#### `ExportEffFn2`

``` purescript
data ExportEffFn2 :: * -> * -> * -> *
```

A function of two arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn3`

``` purescript
data ExportEffFn3 :: * -> * -> * -> * -> *
```

A function of three arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn4`

``` purescript
data ExportEffFn4 :: * -> * -> * -> * -> * -> *
```

A function of four arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn5`

``` purescript
data ExportEffFn5 :: * -> * -> * -> * -> * -> * -> *
```

A function of five arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn6`

``` purescript
data ExportEffFn6 :: * -> * -> * -> * -> * -> * -> * -> *
```

A function of six arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn7`

``` purescript
data ExportEffFn7 :: * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of seven arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn8`

``` purescript
data ExportEffFn8 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of eight arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn9`

``` purescript
data ExportEffFn9 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of nine arguments that returns an Eff value to pass as a native callback.

#### `ExportEffFn10`

``` purescript
data ExportEffFn10 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A function of ten arguments that returns an Eff value to pass as a native callback.

#### `MethodEffFn0`

``` purescript
data MethodEffFn0 :: * -> * -> *
```

A native function of zero argument that must be invoked as method.

#### `MethodEffFn1`

``` purescript
data MethodEffFn1 :: * -> * -> * -> *
```

A native function of one argument that must be invoked as method.

#### `MethodEffFn2`

``` purescript
data MethodEffFn2 :: * -> * -> * -> * -> *
```

A native function of two arguments that must be invoked as method.

#### `MethodEffFn3`

``` purescript
data MethodEffFn3 :: * -> * -> * -> * -> * -> *
```

A native function of three arguments that must be invoked as method.

#### `MethodEffFn4`

``` purescript
data MethodEffFn4 :: * -> * -> * -> * -> * -> * -> *
```

A native function of four arguments that must be invoked as method.

#### `MethodEffFn5`

``` purescript
data MethodEffFn5 :: * -> * -> * -> * -> * -> * -> * -> *
```

A native function of five arguments that must be invoked as method.

#### `MethodEffFn6`

``` purescript
data MethodEffFn6 :: * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of six arguments that must be invoked as method.

#### `MethodEffFn7`

``` purescript
data MethodEffFn7 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of seven arguments that must be invoked as method.

#### `MethodEffFn8`

``` purescript
data MethodEffFn8 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of eight arguments that must be invoked as method.

#### `MethodEffFn9`

``` purescript
data MethodEffFn9 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of nine arguments that must be invoked as method.

#### `MethodEffFn10`

``` purescript
data MethodEffFn10 :: * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> * -> *
```

A native function of ten arguments that must be invoked as method.

#### `mkExportEffFn0`

``` purescript
mkExportEffFn0 :: forall a eff. (Unit -> Eff eff a) -> ExportEffFn0 (Eff eff a)
```

Create a native callback of no arguments that returns an Eff value.

#### `mkExportEffFn1`

``` purescript
mkExportEffFn1 :: forall a b eff. (a -> Eff eff b) -> ExportEffFn1 a (Eff eff b)
```

Create a native callback of one argument that returns an Eff value.

#### `mkExportEffFn2`

``` purescript
mkExportEffFn2 :: forall a b c eff. (a -> b -> Eff eff c) -> ExportEffFn2 a b (Eff eff c)
```

Create a native callback of two arguments that returns an Eff value.

#### `mkExportEffFn3`

``` purescript
mkExportEffFn3 :: forall a b c d eff. (a -> b -> c -> Eff eff d) -> ExportEffFn3 a b c (Eff eff d)
```

Create a native callback of three arguments that returns an Eff value.

#### `mkExportEffFn4`

``` purescript
mkExportEffFn4 :: forall a b c d e eff. (a -> b -> c -> d -> Eff eff e) -> ExportEffFn4 a b c d (Eff eff e)
```

Create a native callback of four arguments that returns an Eff value.

#### `mkExportEffFn5`

``` purescript
mkExportEffFn5 :: forall a b c d e f eff. (a -> b -> c -> d -> e -> Eff eff f) -> ExportEffFn5 a b c d e (Eff eff f)
```

Create a native callback of five arguments that returns an Eff value.

#### `mkExportEffFn6`

``` purescript
mkExportEffFn6 :: forall a b c d e f g eff. (a -> b -> c -> d -> e -> f -> Eff eff g) -> ExportEffFn6 a b c d e f (Eff eff g)
```

Create a native callback of six arguments that returns an Eff value.

#### `mkExportEffFn7`

``` purescript
mkExportEffFn7 :: forall a b c d e f g h eff. (a -> b -> c -> d -> e -> f -> g -> Eff eff h) -> ExportEffFn7 a b c d e f g (Eff eff h)
```

Create a native callback of seven arguments that returns an Eff value.

#### `mkExportEffFn8`

``` purescript
mkExportEffFn8 :: forall a b c d e f g h i eff. (a -> b -> c -> d -> e -> f -> g -> h -> Eff eff i) -> ExportEffFn8 a b c d e f g h (Eff eff i)
```

Create a native callback of eight arguments that returns an Eff value.

#### `mkExportEffFn9`

``` purescript
mkExportEffFn9 :: forall a b c d e f g h i j eff. (a -> b -> c -> d -> e -> f -> g -> h -> i -> Eff eff j) -> ExportEffFn9 a b c d e f g h i (Eff eff j)
```

Create a native callback of nine arguments that returns an Eff value.

#### `mkExportEffFn10`

``` purescript
mkExportEffFn10 :: forall a b c d e f g h i j k eff. (a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> Eff eff k) -> ExportEffFn10 a b c d e f g h i j (Eff eff k)
```

Create a native callback of ten arguments that returns an Eff value.

#### `runImportEffFn0`

``` purescript
runImportEffFn0 :: forall a eff. ImportEffFn0 (Eff eff a) -> Eff eff a
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn1`

``` purescript
runImportEffFn1 :: forall a b eff. ImportEffFn1 a (Eff eff b) -> a -> Eff eff b
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn2`

``` purescript
runImportEffFn2 :: forall a b c eff. ImportEffFn2 a b (Eff eff c) -> a -> b -> Eff eff c
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn3`

``` purescript
runImportEffFn3 :: forall a b c d eff. ImportEffFn3 a b c (Eff eff d) -> a -> b -> c -> Eff eff d
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn4`

``` purescript
runImportEffFn4 :: forall a b c d e eff. ImportEffFn4 a b c d (Eff eff e) -> a -> b -> c -> d -> Eff eff e
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn5`

``` purescript
runImportEffFn5 :: forall a b c d e f eff. ImportEffFn5 a b c d e (Eff eff f) -> a -> b -> c -> d -> e -> Eff eff f
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn6`

``` purescript
runImportEffFn6 :: forall a b c d e f g eff. ImportEffFn6 a b c d e f (Eff eff g) -> a -> b -> c -> d -> e -> f -> Eff eff g
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn7`

``` purescript
runImportEffFn7 :: forall a b c d e f g h eff. ImportEffFn7 a b c d e f g (Eff eff h) -> a -> b -> c -> d -> e -> f -> g -> Eff eff h
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn8`

``` purescript
runImportEffFn8 :: forall a b c d e f g h i eff. ImportEffFn8 a b c d e f g h (Eff eff i) -> a -> b -> c -> d -> e -> f -> g -> h -> Eff eff i
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn9`

``` purescript
runImportEffFn9 :: forall a b c d e f g h i j eff. ImportEffFn9 a b c d e f g h i (Eff eff j) -> a -> b -> c -> d -> e -> f -> g -> h -> i -> Eff eff j
```

Apply a function of no arguments that return an Eff value.

#### `runImportEffFn10`

``` purescript
runImportEffFn10 :: forall a b c d e f g h i j k eff. ImportEffFn10 a b c d e f g h i j (Eff eff k) -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> Eff eff k
```

Apply a function of no arguments that return an Eff value.

#### `runMethodEffFn0`

``` purescript
runMethodEffFn0 :: forall t a eff. MethodEffFn0 t (Eff eff a) -> t -> Eff eff a
```

Apply a native function of no arguments that must be invoked as method.

#### `runMethodEffFn1`

``` purescript
runMethodEffFn1 :: forall t a b eff. MethodEffFn1 t a (Eff eff b) -> t -> a -> Eff eff b
```

Apply a native function of one argument that must be invoked as method.

#### `runMethodEffFn2`

``` purescript
runMethodEffFn2 :: forall t a b c eff. MethodEffFn2 t a b (Eff eff c) -> t -> a -> b -> Eff eff c
```

Apply a native function of two arguments that must be invoked as method.

#### `runMethodEffFn3`

``` purescript
runMethodEffFn3 :: forall t a b c d eff. MethodEffFn3 t a b c (Eff eff d) -> t -> a -> b -> c -> Eff eff d
```

Apply a native function of three arguments that must be invoked as method.

#### `runMethodEffFn4`

``` purescript
runMethodEffFn4 :: forall t a b c d e eff. MethodEffFn4 t a b c d (Eff eff e) -> t -> a -> b -> c -> d -> Eff eff e
```

Apply a native function of four arguments that must be invoked as method.

#### `runMethodEffFn5`

``` purescript
runMethodEffFn5 :: forall t a b c d e f eff. MethodEffFn5 t a b c d e (Eff eff f) -> t -> a -> b -> c -> d -> e -> Eff eff f
```

Apply a native function of five arguments that must be invoked as method.

#### `runMethodEffFn6`

``` purescript
runMethodEffFn6 :: forall t a b c d e f g eff. MethodEffFn6 t a b c d e f (Eff eff g) -> t -> a -> b -> c -> d -> e -> f -> Eff eff g
```

Apply a native function of six arguments that must be invoked as method.

#### `runMethodEffFn7`

``` purescript
runMethodEffFn7 :: forall t a b c d e f g h eff. MethodEffFn7 t a b c d e f g (Eff eff h) -> t -> a -> b -> c -> d -> e -> f -> g -> Eff eff h
```

Apply a native function of seven arguments that must be invoked as method.

#### `runMethodEffFn8`

``` purescript
runMethodEffFn8 :: forall t a b c d e f g h i eff. MethodEffFn8 t a b c d e f g h (Eff eff i) -> t -> a -> b -> c -> d -> e -> f -> g -> h -> Eff eff i
```

Apply a native function of eight arguments that must be invoked as method.

#### `runMethodEffFn9`

``` purescript
runMethodEffFn9 :: forall t a b c d e f g h i j eff. MethodEffFn9 t a b c d e f g h i (Eff eff j) -> t -> a -> b -> c -> d -> e -> f -> g -> h -> i -> Eff eff j
```

Apply a native function of nine arguments that must be invoked as method.

#### `runMethodEffFn10`

``` purescript
runMethodEffFn10 :: forall t a b c d e f g h i j k eff. MethodEffFn10 t a b c d e f g h i j (Eff eff k) -> t -> a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> Eff eff k
```

Apply a native function of ten arguments that must be invoked as method.


