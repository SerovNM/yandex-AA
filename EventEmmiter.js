/**
 * Реализовать класс EventEmitter.
 * Этот интерфейс аналогичен тому, который используется в Node.js или интерфейсу Event Target в DOM.
 * EventEmitter должен позволять подписываться на события и вызывать их.
 */
/*
 данной реализации класса EventEmitter,
  для каждого типа события (event) существует собственный массив обратных вызовов (eventCallbacks[event]),
   в котором хранятся все функции-обработчики этого события.
 */
class EventEmitter {
    eventCallbacks = {}; // Создаем объект для хранения обратных вызовов событий

    // Метод подписки на событие
    subscribe(eventName, callback) {
        // Если уже есть обратные вызовы для этого события, добавляем новый обратный вызов в конец массива
        if (this.eventCallbacks[eventName]) {
            this.eventCallbacks[eventName].push(callback);
        }
        // Если обратных вызовов для этого события нет, создаем новый массив и добавляем обратный вызов в него
        else{
            this.eventCallbacks[eventName] = [callback];
        }



        // Возвращаем объект с методом отписки от события
        return {
            unsubscribe: () => {
                if (this.eventCallbacks[eventName]) { // Если уже есть обратные вызовы для этого события,
                    const index = this.eventCallbacks[eventName].indexOf(callback); // находим индекс обратного вызова в массиве
                    if (index !== -1) { //и если он существует
                        this.eventCallbacks[eventName].splice(index, 1); // Удаляем обратный вызов из массива по его индексу
                        // Если массив обратных вызовов стал пустым после удаления,
                        if (this.eventCallbacks[eventName].length === 0) {
                            delete this.eventCallbacks[eventName]; //удаляем событие из объекта обратных вызовов
                        }
                    }
                }
            },
        };
    }

    // Метод вызова события
    emit(eventName, args = []) {

        // Если есть обратные вызовы для этого события, вызываем каждый из них с переданными аргументами и возвращаем массив результатов
        if (this.eventCallbacks[eventName])
            return this.eventCallbacks[eventName].map(ele => ele(...args)); // вызов метода массива map, который применяет указанную функцию к каждому элементу массива.

        // Если обратных вызовов для этого события нет, возвращаем пустой массив
        return [];
    }
}
