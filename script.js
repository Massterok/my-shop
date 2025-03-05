async function loadData() {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=U8bF69zqhPKVPnHwgIWIHcakZf1gqN-JZdmF-1EFe8SC8Z2bxSeFSOk17yDnpspfksvCVaLgX19klfO6ypFUj7NXCnYvoQCVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLQv_eivzQ8foSMLX0kPVHppgkBDadbybQyDMlFBzmoxPvVhVU80XmO0N-nCLmnucrGGDlWngRj8Sl7Ha0FhY5evrj2w6-IW8Q&lib=Mi861rc2CdYLI1pP_kmqJYrrONyUf71mb';
    
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
