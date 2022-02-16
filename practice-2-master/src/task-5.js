import runRover from "./task-4.js";
import boundingRect from "./task-3.js";

function getExpeditionsTargets(commandSeries) {
    // Change me!
    /*
    Теперь объединим предыдущие задачи.

    5.1 Напишите вспомогательную функцию getExpeditionsTargets, которая принимает массив из нескольких серий 
    серий команд марсохода. Каждая из серий команд подчиняется в точности тем же правилам что и в задаче 4,
    и для каждой серии команд движение марсохода начинается в точке 0, 0, как и в предыдущей задаче. 
    Эта функция должна вернуть массив конечных координат марсохода для каждой из серий передвижений. 
    Пример выходных данных:

    [
        { x: 1, y: 5 },
        { x: -13, y: 6 },
        { x: 0, y: -1 }
    ]

    */
    const myArr = [];
    myArr.push(commandSeries.map(cur => runRover(cur)));
    return myArr;
}

export default function boundingRover(commandSeries) {
    // Change me!
    // console.log(commandSeries);
    /*
    5.2 Напишите функцию boundingRover, которая принимает несколько серий передвижений марсохода, и возвращает минимальный
    ограничивающий прямоугольник для конечных точек, в которых окажется марсоход в результате выполнения каждой из серий 
    команд. Ответ нужно предоставить в том же формате, что и в задаче 3:

    {
        top: 6,
        bottom: -1,
        left: -13,
        right: 1
    }
    */
    // повертає масив в середині якого масив Н:[ [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: -1, y: 5 } ] ]
    return boundingRect(...getExpeditionsTargets(commandSeries));
}
