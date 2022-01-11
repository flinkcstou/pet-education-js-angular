### Введение

- js может работать везде (браузер, сервер, устройство) нужен только движок, один из них V8. Движок компилирует js в машинный код и только потом запускается машинный код
- js браузер не может общаться между двумя страницами для того чтоб они могли общаться есть `(Same Origin Policy)`
- Есть языки над js, которые в конечном итоге транспилируют(конвертируют) в js code. Такие языки как (CoffeeScript, TypeScript, Brython, Flow, Dart)

### Справочники и спецификации

- чтоб искать что то в интернете связанный с js можете добавлять суффикс `MDN` пример `MDN js parseInt`
- есть сайт `http://caniuse.com` где вы можете посмотреть какие функции поддерживается в разных браузерах. Не только js и все технологии браузера.
 

### IDE

 **есть такие IDE:** 
- `Visual Studio Code (бесплатно)`
-  `WebStorm (платно)`.

Предпочтительнее WebStorm

**есть еще редакторы кода:**

- Atom (кроссплатформенный, бесплатный).
- Sublime Text (кроссплатформенный, условно-бесплатный).
- Notepad++ (Windows, бесплатный).


### Основы javascript 

**как добавлять script в html:**
 - `<script src="/js/script1.js"></script>`
- `<script>
  alert(1);
  </script>`

нельзя в одном скрипте писать и загружать скрипт
 - `<script src="/js/script1.js">    alert(1); </script>` ERROR

### Структура кода

нужно всегда ставить точку запятую в конце строки. В js это опционально, но рекомендуется ставить точку запятую(перевод).

Причина:

        alert("Сейчас будет ошибка")
        [1, 2].forEach(alert)
  
будет прочитан как  `alert("Сейчас будет ошибка")[1, 2].forEach(alert)` и функция alert возвращает undefined и у undefined хотим взять первый второй элемент массива.


Есть два вида Комментарии внутри кода: 

- Однострочные комментарии начинаются с двойной косой черты `//`. 
- Многострочные комментарии начинаются косой чертой со звёздочкой `/*` и заканчиваются звёздочкой с косой чертой `*/`.

- `//`
- `/**/`

### Переменные(перевод)

Приведённая ниже инструкция создаёт (другими словами: объявляет или определяет) переменную с именем «message»:
            
    var message

Для краткости можно совместить объявление переменной и запись данных в одну строку:

    var message = 'Hello!'

Мы также можем объявить несколько переменных в одной строке:

    let user = 'John', age = 25, message = 'Hello';

`var`  это устаревший вид объявления вместо него сейчас используется `let` 

разница между ними:

- `var` можно хоть сколько раз объявлять одну и ту же переменную, а let выкинет ошибку.
  
    
        var message ='sdf';
        var message ='sdf; // не будет ошибки
        
        let cat = 'John';
        let cat = 'John'; // будет ошибка
        


- `var` будет существовать вне блока а `let` не может 
    
        {
        var message ='sdf' 
        } 
        console.error(message) // message будет доступен и вне блока
        
        {
        let cat = 'John
        }
        console.error(cat) // ошибка cat не будет доступен вне блока        

Чтобы объявить константную, то есть, неизменяемую переменную, используйте `const` вместо `let`:

    const COLOR_RED = "#F00";

В JavaScript есть два ограничения, касающиеся имён переменных:

- Имя переменной должно содержать только буквы, цифры или символы $ и _.
- Первый символ не должен быть цифрой.

        let userName;
        let test123;
        let $ = 1; // объявили переменную с именем "$"
        let _ = 2; // а теперь переменную с именем "_"

Примеры неправильных имён переменных:

        let 1a; // не может начинаться с цифры        
        let my-name; // дефис '-' не разрешён в имени
    

### Типы данных

Есть восемь основных типов данных в JavaScript.

> number, bigint, string, boolean, undefined, object, symbol, function  

**Число**

Числовой тип данных (number)
 
к числам относятся 1,2,3... Infinity, -Infinity и NaN. и 

В JavaScript тип «number» не может содержать числа больше, чем (2^53-1) (т. е. 9007199254740991)

**bigInt**

есть `bigInt` чтоб работать с произвольной длины 

        // символ "n" в конце означает, что это BigInt
        const bigInt = 1234567890123456789012345678901234567890n;
        


**Строка**

Строка (string) в JavaScript должна быть заключена в кавычки.

В JavaScript существует три типа кавычек.
Двойные, Одинарные, Обратные(перевод)


        let str = "Привет";
        let str2 = 'Одинарные кавычки тоже подойдут';
        let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;(перевод)

Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например:

        let name = "Иван";
       
        // Вставим переменную
        alert( `Привет, ${name}!` ); // Привет, Иван!
        

**Булевый (логический) тип**

это `true` `false` и результаты сравнения 

        let nameFieldChecked = true; // да, поле отмечено
        let ageFieldChecked = false; // нет, поле не отмечено
        let isGreater = 4 > 1; // результаты сравнений:


**Значение «null»**

Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

    let age = null;
    
    // особенности null 
    typeof null // object
    +null // 0
    null == 0 // false
    null >= 0
    null == undefined // true
     
    

**Значение «undefined»**

Оно означает, что «значение не было присвоено».

    let age;
    
    alert(age); // выведет "undefined"
    
    
**Объекты и символы**

Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.


**Оператор typeof**

Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.

У него есть две синтаксические формы:

- Синтаксис оператора: `typeof x`.
- Синтаксис функции: `typeof(x)`.

        typeof undefined // "undefined"
        
        typeof 0 // "number"
        
        typeof 10n // "bigint"
        
        typeof true // "boolean"
        
        typeof "foo" // "string"
        
        typeof Symbol("id") // "symbol"
        
        typeof Math // "object"  (1)
        
        typeof null // "object"  (2)
        
        typeof alert // "function"  (3)


### Преобразование типов

преобразование примитовных типов  в другие типы 

**Строковое преобразование**

 value primitive to string used:  
- String(value);
- value + "" // бинарный оператор(перевод);
- alert(value)

            
            var message = 'hello'
            var isMessage = true
            var countMessage = 5
            var undefinedMessage; // undefined
            var nullMessage = null

            String(message) // "hello"
            String(isMessage) // "true"
            String(countMessage) // "5"
            String(undefinedMessage) // "undefined"
            String(nullMessage) // "null"
            
            message + "" =  "hello"  
            isMessage + "" =  "true"  
            countMessage + "" =  "5"  
            undefinedMessage + "" =  "undefined"  
            nullMessage + "" =  "null"  
            
            alert(countMessage) // "5"

> значения `undefined`, `null` когда преобразуем в `string` становится строчным значением `"null" "undefined"`.            
            

**Численное преобразование**

value primitive to number used: 
- Number(value)
- +value // унарный оператор(перевод)
- any mathematical arithmetic (/, %, -, *)

        var message = 'hello'
        var isMessage = true
        var countMessage = 5
        var undefinedMessage; // undefined
        var nullMessage = null

        Number(message) // NaN
        Number(isMessage) // 1
        Number(countMessage) // 5
        Number(undefinedMessage) // NaN
        Number(nullMessage) // 0
        
        +message // NaN
        +isMessage // 1
        +countMessage // 5
        +undefinedMessage // NaN
        +nullMessage // 0
        
        "6" / "2" // 3
        
        true + "1" // 2
        
> undefined => NaN
>
> null	=> 0
>
> true / false =>	1 / 0
>
> `string`	Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.       

        Number("  123  ") // 123
        Number("  hello  ") // NaN
        Number("  123 hello  ") // NaN
        Number("") // 0
        


**Логическое преобразование**

value primitive to boolean used:
- Boolean(value)
- !value
- результаты сравнения 

        Boolean(1) // true
        Boolean(0) // false
        Boolean(NaN) // false
        Boolean(undefined) // false
        Boolean(null) // false
        Boolean("") // false
        Boolean(" ") // true
        Boolean("0") // true
        
        !undefined // true
        !null // true
        
        5 > 4 // true
        
        false == 0 // true

> 0, null, undefined, NaN, "" => false
>
> любое другое значение => true



### Базовые операторы, математика


Термины: «унарный», «бинарный»

- `Унарным` называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный:

        let x = 1;
        
        x = -x;
        alert( x ); // -1, применили унарный минус

- `Бинарным` называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

        let x = 1, y = 3;
        alert( y - x ); // 2, бинарный минус вычитает значения

> у бинарного `+` может сложить числа, а также строки

        let s = "моя" + "строка";
        alert(s); // моястрока
        alert( '1' + 2 ); // "12"
        alert( 2 + '1' ); // "21"  

Бинарный `+` имеет степень важности
- между двумя примитивами кроме `string`  преобразуется в `number` и вычисляется. Так как бинарный `+` работает как математический оператор  
- между любой примитивом и `string` преобразуется в `string`
            
            true + null // 1
            undefined + null + true // NaN
            true + '1' // "true1" 




### Операторы сравнения

**Сравнение одинаковых типов**

работает как обычно 
- если `number` то у кого больше значения там и true 
- если `string` то у кого больше index по unicode там и true
- если `boolean` то у кого true там и true :)  

**Сравнение разных типов**

При сравнении значений разных типов JavaScript приводит каждое из них к `number`.

        alert( '2' > 1 ); // true, строка '2' становится числом 2
        alert( '01' == 1 ); // true, строка '01' становится числом 1
        alert( true == 1 ); // true, true становится числом 1
        alert( false == 0 ); // true, false становится 0

 есть два варианта сравнивания:
- сравниваем сразу между разными типами 
- сначала преобразуем в один из типов и потом сравниваем

в чем разница ? 
- сравним сразу разные типы без преобразования где за нас сам js сделает и преобразует в тип `number`
- преобразуем разные типы в boolean и потом сравним. 

            let a = 0;
            let b = "0";
            a == b // true, переменная b преобразуется в `number` и значения будет 0 
            
            let aB = Boolean(a) //false, переменная a в boolean это false  
            let bB = Boolean(b) // true, переменная b в boolean это true
            aB == bB // false 

Как мы видим разные ответы получаем в зависимости какой тип преобразования использовать в сравнениях

Мы можем сами изначально определить по какому типу преобразования будем работать при сравнении, либо работаем по логике js где он сам преобразуется в тип `number`

**Строгое сравнение**(перевод)

для строго неравенства используется `===`

если будем сравнивать разные типы будет всегда `false`, 
так как он проверяет для начало сами типы если типы разные значит `false` 

**Сравнение с null и undefined**

как мы знаем преобразования null к `number` равен 0,
но тут есть одна загвоздка 

        null == 0 // false, хотя должен был ответ быть true так как null станвится 0 и 0 == 0 должен дать true
        null >= 0 // true

к этому случаю есть исключения:

- для нестрогого равенства == значений `undefined` и `null` действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.



### Условное ветвление: if, '?'

**Условный оператор „?“**

Синтаксис:
        
        let result = условие ? значение1 : значение2;
        
        let accessAllowed = (age > 18) ? true : false; // true


### Логические операторы

В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).(перевод)

**|| (ИЛИ)**(перевод)
- будет выполняться до тех пор пока первое значения не будет true 
- Если все операнды являются ложными (false), возвращает последний из них.        

        result = value1 || value2 || value3;
        

**&& (И)**(перевод)
- находит первое ложное значение
- Если все операнды были истинными, возвращается последний.

        result = value1 && value2 && value3;

>  Приоритет оператора && больше, чем у ||
>
Таким образом, код `a && b || c && d` по существу такой же, как если бы выражения && были в круглых скобках: `(a && b) || (c && d)`.

**! (НЕ)**(перевод)

Оператор НЕ представлен восклицательным знаком !.
        
        result = !value;


### Оператор объединения с null '??' (перевод)

|| возвращает первое истинное значение.
?? возвращает первое определённое значение.

        (null) || '' || 'user' // 'user'
        (null) ?? '' ?? 'user' ?? ''
- для ?? только если не `null` и `undefined`
- для || все что логический `boolean` не `false`

### Циклы while и for
отличие идет в переменных, как было сказано ранее `let` живет только внутри блока

        for(){
        let message= 'message'
        var varMessage ='varMesssage'
        } 
        message // undefined
        varMessage // 'varMessage
        

### Функции

        function имя(параметры) {
          ...тело...
        }(перевод)
        

### Function Expression

 Function Declaration (Объявление Функции):
 
        function sayHi() {
          alert( "Привет" );
        }

Function Expression (Функциональное Выражение).

        let sayHi = function() {
          alert( "Привет" );
        };


«стрелочные функции» (arrow functions),
 
        let func = (arg1, arg2, ...argN) => expression
        
        let func = (arg1, arg2, ...argN) => {body}
        

function in object 

        user = {
          sayHi: function() {
            alert("Привет");
          }
        };
        
        // сокращённая запись выглядит лучше, не так ли?
        user = {
          sayHi() { // то же самое, что и "sayHi: function()"
            alert("Привет");
          }
        };


### Полифилы(перевод)

Babel – это транспилер(перевод). Он переписывает современный JavaScript-код в предыдущий стандарт.

core js  - это полифил(перевод)


Транспайлер - переписывает новый синтаксис языка в старый.
Например:

    // объявление переменных в новом стиле
    const a = `константа`;
    let b = `изменяемая переменная`;

    // приводит к объявлению в старом стиле
    var a = `константа`;
    var b = `изменяемая переменная`;

Полифилл - реализовывает функции из новой версии языка, которых нет в старой
Например:

    // проверка является ли arr массивом в новом варианте
    if (Array.isArray(arr) === true) alert('массив!');
    
    // проверка является ли arr массивом в старом варианте
    
    // Полифилл функции из "новой" версии для старой "версии" языка
    // (для примера здесь, пропишем прямо в прототип Array)
    Array.__proto__.isArray = function(value) {
    return value instanceof Array;
    };
    
    if (Array.isArray(arr) === true) alert('массив!');

### Объекты


    let user = new Object(); // синтаксис "конструктор объекта"(перевод)
    let user = {};  // синтаксис "литерал объекта"(перевод)

    let user = {
      name: "John",
      "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
    };
    
    let user = {};
    
    // присваивание значения свойству
    user["likes birds"] = true;
    
    // получение значения свойства
    user["likes birds"]
    
    let key = "likes birds";
   
    // то же самое, что и user["likes birds"] = true;
    user[key] = true;
    
    let bag = {
      [fruit]: 5, // имя свойства будет взято из переменной fruit
    };
    
    alert( bag.apple ); // 5, если fruit="apple"
    
    
    let user = { name: "John", age: 30 };
    
    alert( "age" in user ); // true, user.age существует
    alert( "blabla" in user ); // false, user.blabla не существует
    
    for (let key in user) {
      // ключи
      alert( key );  // name, age, isAdmin
      // значения ключей
      alert( user[key] ); // John, 30, true
    }



### Методы объекта, "this"


        name = 'Global Name';
        function sayHi() {
          console.error( this.name );
        }

> Значение this – это объект «перед точкой», который использовался для вызова метода.
>
> Значение this не смотрит на блоки js а смотрит на reference Type


        var user = {
        name:'John' 
        };        
        user.say = sayHi;
        user.say() // 'John'

Если просто вызывать sayHi, то возьмет глобальный объект

        sayHi() // 'Global Name'

Даже если вызывать внутри объекта, все равно возьмет глобальный объект

        var user = {
            name:'John',
            sayHiUser(){
            console.error(this.name);
            sayHi()
            }
        }
        
        user.sayHiUser() // 'John', 'Global Name'

Если передать как переменную функцию, то она потеряет свой контекст, нельзя об этом забывать,  

- в первом случае ничем не будет отличаться так как мы создали функцию глобальную 
                
                
        // первый способ присвоения 
        var copyHi = sayHi
        
        copyHi() //'Global Name'
        
        // второй способ это через function
        function callHi(callback){
        callback()
        }
        
        callHi(sayHi) //'Global Name'

- второй случай это когда мы берем функцию у объекта


        var user = {
                name:'John' 
                };        
        user.say = sayHi;
        
        var copyHi = user.say
        
        copyHi() // 'Global Name' not 'John'
        
        function callHi(callback){
                callback()
                }
                
        callHi(user.say) // 'Global Name' not 'John'
        

>
> Специальное значение «ссылочного типа», называемого Reference Type.
>
>Этот ссылочный тип (Reference Type) является внутренним типом. Мы не можем явно использовать его, но он используется внутри языка.
>
>Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:

- base – это объект.
- name – это имя свойства объекта.
- strict – это режим исполнения. Является true, если действует строгий режим (use strict).

> Результатом доступа к свойству user.say является не функция, а значение ссылочного типа. Для user.say в строгом режиме оно будет таким:
        
        // значение ссылочного типа (Reference Type)
        (user, "say", true)
        
        //как только передали в переменную 
        var copyHi = user.say
        (global, 'copyHi, true)
        // где base стал уже глабольным

**У стрелочных функций нет «this»**(перевод)

        let user = {
          firstName: "Илья",
          sayHi() {
            let arrow = () => alert(this.firstName);
            arrow();
          }
        };
        
        user.sayHi(); // 'Илья'


кое-какие особенности:

        let obj, method;
        
        obj = {
          go: function() { alert(this); }
        };
        
        obj.go();               // (1) [object Object], call self function 
        
        (obj.go)();             // (2) [object Object], call self function скобки никак не влияяет
        
        (method = obj.go)();    // (3) undefined, тут идет присвоения и поэтому меняется reference Type
        
        (obj.go || obj.stop)(); // (4) undefined, тоже самое идет присвоение один из функции, меняется reference Type



### Конструкторы, создание объектов через "new"

оператор `new` дает неявное создание нового объекта `this`

        function User(name) {
          // this = {};  (неявно)
        
          // добавляет свойства к this
          this.name = name;
          this.isAdmin = false;
        
          // return this;  (неявно)
        }
        
        let user = new User("Вася");
        
        alert(user.name); // Вася
        alert(user.isAdmin); // false

 
есть анонимный вызов

        var user = new function(){}
        
        // не нужно вызывать метод так как оператор `new` сделал все за нас
        // посмотрим на это по другому
        
        function User(){
        this.name ='John';
        }
        var user = new User; // это будет валиден, не зависимо от того, что нет скобок так как 'new' все делает за нас
        var user = new User(); // ничено не будет от того что вызываем скобки

для проверки что функция вызвана обычным способом без оператора `new` 
        
        function User(){
        console.error(new.target) // вернет функцию если был вызван через  оператор `new`
        }

если мы в функции возвращаем примитивный тип, то значения `this` сохранится, а если объект возвращаем, то вернет объект

        function SmallUser() {
        
          this.name = "Вася";
        
          return; // <-- возвращает this
        }
        
        alert( new SmallUser().name );  // Вася
        

        function BigUser() {
          this.name = "Вася";
          return { name: "Godzilla" };  // <-- возвращает этот объект
        }
        
        console.error(new BigUser().name) // Godzilla, получили этот объект
        
        

### Тип данных Symbol

Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.


        var description = "id"

        var id = Symbol(description) // local Symbol
        
        var user = {}
        
        user[id] = 'some key'
        
        // user[id] is not  user.id
        
        Symbol.for("id") // create, get global Symbol by description
        
        Symbol.keyFor(id) // get description by global Symbol 

`Symbol` используется разработчиками для сокрытия каких либо данных, либо во избежания конфликтов

`Symbol` используется в самом js для сокрытия функции которые отвечает 
 за основы систем такие функции как:
 - Symbol.hasInstance
 - Symbol.isConcatSpreadable
 - Symbol.iterator
 - Symbol.toPrimitive
