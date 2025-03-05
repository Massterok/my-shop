async function loadData() {
    const url = 'https://script.google.com/macros/s/AKfycbwS0WcaKhDpjFDWEC5YiijWU_GlKK-nEj_9UiRRncpe5DJHpHZY1DKmNE8lldXv-7LJ/exec';
    
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
