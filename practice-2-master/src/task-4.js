
export default function runRover(commandsList) {
    // Change me!
    /*
    Настало время писать серьёзные программы: в ваших руках судьба экспедиции на Марс.
     Для управления роботом с Земли поступают команды вида "go 2", "turn left", "go 1", "turn right", "go 3".
      Но из-за проблем со связью команды могут прийти в неправильном порядке. 
      Благо у каждой команды есть её порядковый номер, по которому можно восстановить правильную последовательность команд.
Также могут приходить команды, неизвестные марсоходу. Причина этой проблемы выясняется,
 но в качестве наказания у команды разработки уже отобрали их любимую кофемашину.
  Пока что если марсоход встречает неизвестную команду, он должен её проигнорировать.

В начале пути марсоход находится в точке { x: 0, y: 0 } и направлен на север (вверх). 
Имея полученные с Земли данные, определите конечные координаты, куда попадёт марсоход после выполнения всех команд.

Возможные команды:

Команда	Данные	Описание
go	целое число	Ехать прямо на указанное количество метров
turn	left	Повернуть налево
turn	right	Повернуть направо
Входные данные: Массив объектов:

[
    {
        order: 3, // Третья команда
        command: "go 1" // Ехать прямо на 1 метр
    }, {
        order: 4, // Четвёртая команда
        command: "turn right" // Повернуть направо
    }, {
        order: 7, // Пятая команда
        command: "Shake that X-Ray Instrument of yours!" // Непонятно что. Игнорировать
    }, {
        order: 1, // Первая команда
        command: "go 2" // Ехать прямо 2 метра
    }, {
        order: 6, // Шестая команда
        command: "go 3" // Ехать вперёд на 3 метра
    }, {
        order: 5, // Пятая команда
        command: "make a selfie" // Непонятно что. Игнорировать
    }, {
        order: 2, // Вторая команда
        command: "turn left" // Повернуть налево
    }
]
Выходные данные: объект из конечных координат x, y марсохода

{ x: -1, y: 5 }
    */
    // sort by order
    commandsList.sort((a, b) => {
        const temp = a.order - b.order;
        return temp;
    });

    let coordinates = [0, 0, 0, 0];// y, x, -y, -x
    let index = 0;

    // не зовсім правильне використання map???
    coordinates = commandsList.reduce((prev,cur) => {
        const strGo = cur.command.match(/go\s\d{1,}/);// go і число
        if (strGo) {
            const way = strGo[0].match(/\d{1,}/)[0];// число
            prev[index] += +way;// додаєм відповідну координату, з приведенням до числа
        }
        // console.log(prev);
        switch (cur.command) {
            case "turn left":
                index--;
                index = (index < 0) ? 3 : index;
                break;
            case "turn right":
                index++;
                index = (index > 3) ? 0 : index;
                break;
            default:
                break;
        }
        return prev;
    },coordinates);
    const result = {
        x: 0,
        y: 0
    };
    
    result.y = coordinates[0] - coordinates[2]; // координата y - координата (-y)
    result.x = coordinates[1] - coordinates[3]; // координата x - координата (-x)
    return result;
}
