/*
18. O que retorna a expressão (true || false) && !(false && true)?
                                   true       &&      false
                                    true      &&     !false
                                     true     &&     true
                                             true
*/
(true || false) && !(false && true)
console.log((true || false) && !(false && true)) //true