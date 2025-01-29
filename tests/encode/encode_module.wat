(module
    (import "wasi_snapshot_preview1" "fd_write" (func (param i32 i32 i32 i32) (result i32)))
    (memory 1) ;; 内存 (至少) 1 页, 1 页 = 64KB
    (export "memory" (memory 0))
    ;; 从内存 8 开始写入数据, 前两个字节有用
    (data (i32.const 8) "Hello World!")
    (func
        ;; 写入 iov.iov_base, 代表要写入的数据的起始位置
        (i32.store (i32.const 0) (i32.const 8))
        ;; 写入 iov.iov_len, 代表要写入的数据的长度
        (i32.store (i32.const 4) (i32.const 12))
        (i32.const 1) ;; 文件描述符, 1 代表 stdout
        (i32.const 0) ;; iov.iov_base 的地址
        (i32.const 1) ;; iov.iov_len 的地址
        (i32.const 24) ;; 回写的字节数的地址
        call 0
        drop
    )
    (start 1)
)