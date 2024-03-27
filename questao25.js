/*
25.O que significa a expressão true && !(false || true)?
                             true   &&   !true (não verdadeiro = falso)
                             true   &&  false
                                  false
                                   
*/
true && !(false || true)
console.log(true && !(false || true)) // false