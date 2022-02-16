
export default function boundingRect(coordsList) {
    // Change me!
    // можна створити 2 масиви, один з х, один з у та вибрати з них найбільше та найменше, але так більше памяті буде займати
    if (coordsList.length === 0) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }
    
    const result = coordsList.reduce((prev, cur) => {
        prev.left = Math.min(cur.x, prev.left);
        prev.right = Math.max(cur.x, prev.right);
        prev.top = Math.max(cur.y, prev.top);
        prev.bottom = Math.min(cur.y, prev.bottom);
        return prev;
    }, {
        top: coordsList[0].y, // top: coordsList[0]['y']
        right: coordsList[0].x, // right: coordsList[0]['x'],
        bottom: coordsList[0].y, // bottom: coordsList[0]['y'],
        left: coordsList[0].x // left: coordsList[0]['x']
    });

    return result;
}
// })([
//     { x: 49.2382, y: 28.4529 },
//     { x: 49.2433, y: 28.4641 },
//     { x: 49.2337, y: 28.4715 },
//     { x: 49.2365, y: 28.4637 }
// ]);
