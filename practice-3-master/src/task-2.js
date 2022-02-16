
export default class EnhancedSet extends Set {

    union(s) {
        /*
            union(s) - (объединение множеств) создать новое множество, куда входят все объекты
            из множества this и множества s
        */
        const res = new EnhancedSet(this);
        s.forEach(element => {
            res.add(element);
        });
        return res;
    }

    intersection(s) {
        /*
            intersection(s) - (пересечение множеств) создать новое множество, куда входят только объекты,
            принадлежащие и this, и множеству s
        */
        const result = new EnhancedSet();
        s.forEach(elem1 => {
            if (this.has(elem1)) {
                result.add(elem1);
            }
        });
        return result;
    }

    difference(s) {
        /* difference(s) - (разность множеств) создать новое множество, куда входят объекты, принадлежащие this,
        но не принадлежащие множеству s */
        const result = new EnhancedSet(this);
        s.forEach(elem => {
            if (result.has(elem)) {
                result.delete(elem);
            }
        });
        return result;
    }

    symmetricDifference(s) {
        const result = new EnhancedSet();
        this.forEach(elem => {
            if (!s.has(elem)) {
                result.add(elem);
            }
        });
        s.forEach(elem => {
            if (!this.has(elem)) {
                result.add(elem);
            }
        });
        return result;
    }

    isSuperset(s) {
        // isSuperset(s) - функция, возвращающая true, если множество s вложено в множество this
        let flag = true;
        s.forEach(elem => {
            if (this.has(elem) === false) {
                flag = false;
            }
        });
        return flag;
    }

    isSubset(s) {
        // isSubset(s) - функция, возвращающая true, если множество this вложено в множество s
        return s.isSuperset(this);
    }
}
