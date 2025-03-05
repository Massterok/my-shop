async function loadData() {
    const url = 'https://script.google.com/macros/s/AKfycbxpiItO7qxoGkQYrEMimXJrYgt-UhwHDnGWr4DdYG0tXtV0XnIZQIxSrGJxajB3eEAP/exec';

    try {
        let response = await fetch(url);
        
        // Проверка на успешный ответ
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
        }

        // Преобразование ответа в JSON
        let data = await response.json();

        // Логируем полученные данные для отладки
        console.log(data);

        // Получаем элемент списка на странице
        let list = document.getElementById("product-list");
        list.innerHTML = ""; // Очищаем список перед загрузкой новых данных

        // Добавляем каждый товар в список
        data.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item["Название товара"]} - ${item["Цена"]} грн (${item["Количество"]} шт.)`;
            list.appendChild(li);
        });
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}
