(module
  (type $f (func))

  (type $ft1 (sub (func (param (ref $f)) (result (ref func)))))
  (type $ct1 (sub (cont $ft1)))

  (type $ft2 (func (param (ref any)) (result (ref func))))
  (type $ct2 (cont $ft2))

  (type $ft3 (sub $ft1 (func (param (ref func)) (result (ref $f)))))
  (type $ct3 (cont $ft3))

  ;; Okay: Continuation types are covariant, have declared $ft3 <: $ft1
  (type $ct_sub (sub $ct1 (cont $ft3)))

  (func $test
    (param $p1 (ref $ct1))
    (param $p2 (ref $ct_sub))

    ;; Okay: (ref $ct_sub) <: (ref $ct1)
    (local.set $p1 (local.get $p2))

)

)