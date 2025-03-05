async function loadData() {
    const url = 'https://script.google.com/macros/s/AKfycbzCmwO-jmBPzawRrc0U8aIWbGyMExSwYrxMauI9A6BcvNkcWsOlcUqGO59h4FzRBmEj/exec';
    
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        let data = await response.json();

        let list = document.getElementById("product-list");
        list.innerHTML = ""; // Очищаем список перед загрузкой

        data.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.Название} - ${item.Цена} грн (${item.Количество} шт.)`;
            list.appendChild(li);
        });
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}
