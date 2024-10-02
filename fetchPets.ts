// Определение типа для данных питомцев (в зависимости от документации)
interface Pet {
    id: number;
    name: string;
    status: string;
    // Могут быть другие поля, в зависимости от API
  }
  
  // URL запроса
  const url: string = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';
  
  // Функция для выполнения GET-запроса и вывода данных
  async function fetchData(): Promise<void> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data: Pet[] = await response.json();
      console.log('Полученные данные:', data);
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  }
  
  // Вызов функции для получения данных
  fetchData();
  