async function loadData() {
    const url = 'ТВОЙ_УРЛ_СКРИПТА_APPS_SCRIPT';
    
    try {
        let response = await fetch(url);
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
