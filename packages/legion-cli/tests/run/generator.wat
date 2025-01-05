(module $generator
  (type $Function<Unit> (func))
  ;; Types of continuations used by the generator:
  ;; No need for param or result types: No data data passed back to the
  ;; generator when resuming it, and $generator function has no return
  ;; values.
  (type $Generator<Return=Unit> (cont $Function<Unit>))

  ;; Tag used to coordinate between generator and consumer: The i32 param
  ;; corresponds to the generated values passed; no values passed back from
  ;; generator to consumer.
  (tag $Yield<i32> (param i32))


  (func $print (import "spectest" "print_i32") (param i32))

  ;; Simple generator yielding values from 100 down to 1
  (func $generator
    ;; let i: i32
    (local $i i32)
    ;; i = 100
    (local.set $"i::1" (i32.const 100))
    ;; while i > 0 { yield i; i -= 1 }
    (loop $l
      ;; yield i
      (suspend $Yield<i32> (local.get $i))
      ;; Decrement $i and exit loop once $i reaches 0
      (local.tee $i (i32.sub (local.get $i) (i32.const 1)))
      (br_if $l)
    )
  )
  (elem declare func $generator)

  (func $consumer ;; ⸬⟨u32⟩
    ;; let c: Generator<Yield=i32, Return=Unit>
    (local $c (ref $"std⸬coroutine⸬Generator⟨Yield=i32,Return=()⟩"))
    ;; c = generator()
    (local.set $c (cont.new $Generator<Return=Unit> (ref.func $generator)))
	;; while
    (loop $loop
      (block $on_yield (result i32 (ref $Generator<Return=Unit>))
        ;; Resume continuation $c
        (resume $Generator<Return=Unit> (on $Yield<i32> $on_yield) (local.get $c))
        ;; $generator returned: no more data
        (return)
      )
      ;; Generator suspended, stack now contains [i32 (ref $Generator<Return=Unit>)]
      ;; Save continuation to resume it in next iteration
      (local.set $c)
      ;; Stack now contains the i32 value yielded by $generator
      (call $print)

      (br $loop)
    )
  )
)