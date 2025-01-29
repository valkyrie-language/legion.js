(module
	(func $print (import "spectest" "print_i32") (param i32))
	;; ;; ⸬⟨u32⟩
	(func $"std⸬main"
		(call $print (i32.const 42))
	)
	(start $"std⸬main")
)