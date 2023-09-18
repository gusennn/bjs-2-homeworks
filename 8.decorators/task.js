//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    return function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash === hash);
        if(objectInCache) {
            console.log("Из кэша: " + objectInCache.result)
            return "Из кэша: " + objectInCache.result;
        }

        let result = func(...args);
        cache.push({hash, result});
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
        if(timeoutId === null) {
            func(...args);
            wrapper.count++;
        }

        if(timeoutId) {  //Повторил код лекции
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            timeoutId = true;
            func(...args);
            wrapper.count++;
        }, delay);
        wrapper.allCount++
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}
