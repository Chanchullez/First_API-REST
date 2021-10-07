# First API-REST
## Notas del Hito 2
En los documentos que he subido me dedico a hacer literalmente lo que se hace en el tutorial de mongoDB adaptándolo a lo que solicita EsLint. He metido un par de datos en una base de Mongo y parecen funcionar. He probado a hacer `get`, `post`, y `delete`.

###Dudas
Hay varias cosas de la terminología que no entiendo:
1. Lo más fundamental que hacen `res` y `req`. Por lo que he podido entender, uno sirve para solicitar una serie de cosas al body y el otro para imprimirlas, creo.
2. Dónde introducir los códigos de error, entiendo que dentro de los controladores cuando estos devuelven un error pero cómo sabemos que error va a dar.

También hay piezas de código que puedo intuir que hacen pero no las entiendo bien:
1. Qué hace esta función? (entiendo que es para evitar que se quede esperando en el puerto mucho tiempo, o evitar un bucle infinito):
```
    module.exports.get = (callback, limit) => {
     Contact.find(callback).limit(limit);
```  
2. Cuál es la función exactamente de BodyParser?
3. Cómo encuentras la versión no deprecada de alguna función u objeto o lo que sea)
4. Qué pasa si instalamos varias veces la misma dependencia sin querer? Se copia dos veces o se sobreescribe? (porque en la consola se puede leer que audita archivos, entiendo que lo hace con los que ya existen).
5. Al subir el archivo a GitHub la consola me dice qu está quitando los LF y sustituyendolos por CRLF, cómo puedo hacer para evitar que modifique cosas relacionadas con EsLint?
