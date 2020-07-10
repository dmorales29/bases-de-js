//El Boolean() es una función que nos devuelve si es true o false

//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(" "); //true por ser un caracter de espacio
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function () {}); //Cualquier función es verdadera también
Boolean(true); //true
