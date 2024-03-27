
var maxProfit = function(prices, fee) {
    // Инициализация переменной для хранения максимальной прибыли, когда у нас нет акций
    let bestInCash = 0;
    // Инициализация переменной для хранения максимальной прибыли, когда у нас есть акции
    let bestWithStock = -Infinity;

    // Цикл по массиву цен
    for (let i = 0; i < prices.length; i++) {
        // Расчет прибыли, если купить акции на текущий день
        let buyThisRound = bestInCash - prices[i];
        // Расчет прибыли, если продать акции на текущий день, учитывая комиссию
        let sellThisRound = bestWithStock + prices[i] - fee;

        // Обновление максимальной прибыли, когда у нас нет акций, учитывая возможность продажи акций
        bestInCash = Math.max(bestInCash, sellThisRound);
        // Обновление максимальной прибыли, когда у нас есть акции, учитывая возможность покупки акций
        bestWithStock = Math.max(bestWithStock, buyThisRound);
    }

    // Возврат максимальной прибыли, учитывая возможность не совершать операций
    return Math.max(bestWithStock, bestInCash);
};
