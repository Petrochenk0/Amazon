import React from 'react';

// Типы данных
interface Address {
  id: number;
  address: string;
}

interface Order {
  id: number;
  items: string[];
  status: string;
  total: number;
}

interface Analytics {
  totalSpent: number;
  mostPurchased: string[];
}

const ProfilePage: React.FC = () => {
  // Пример данных (заменишь API позже)
  const userInfo = { name: 'Иван Иванов', email: 'ivan@example.com', phone: '+7 900 123-45-67' };
  const addresses: Address[] = [
    { id: 1, address: 'Москва, ул. Ленина, д. 1' },
    { id: 2, address: 'СПБ, Невский пр., д. 10' },
  ];
  const orders: Order[] = [
    { id: 1, items: ['Телефон', 'Наушники'], status: 'Доставлен', total: 20000 },
    { id: 2, items: ['Ноутбук'], status: 'В пути', total: 70000 },
  ];
  const analytics: Analytics = { totalSpent: 90000, mostPurchased: ['Ноутбук', 'Телефон'] };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Управление аккаунтом */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Управление аккаунтом</h2>
          <p>Имя: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Телефон: {userInfo.phone}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Редактировать
          </button>
        </div>

        {/* Адреса доставки */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Адреса доставки</h2>
          {addresses.map((addr) => (
            <div key={addr.id} className="flex justify-between items-center mb-2">
              <span>{addr.address}</span>
              <button className="text-red-500 hover:underline">Удалить</button>
            </div>
          ))}
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Добавить адрес
          </button>
        </div>

        {/* История заказов */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">История заказов</h2>
          {orders.map((order) => (
            <div key={order.id} className="border-b pb-4 mb-4">
              <h3 className="font-semibold">Заказ #{order.id}</h3>
              <p>Товары: {order.items.join(', ')}</p>
              <p>Статус: {order.status}</p>
              <p>Сумма: {order.total} ₽</p>
            </div>
          ))}
        </div>

        {/* Аналитика */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Личная аналитика</h2>
          <p>Всего потрачено: {analytics.totalSpent} ₽</p>
          <p>Часто покупаемые товары: {analytics.mostPurchased.join(', ')}</p>
        </div>

        {/* Уведомления */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Настройки уведомлений</h2>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" /> Получать обновления по email
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Получать обновления по SMS
          </label>
        </div>

        {/* Рекомендации */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Рекомендации</h2>
          <p>На основе ваших покупок мы рекомендуем:</p>
          <ul className="list-disc list-inside">
            <li>Пылесос</li>
            <li>Электрическая зубная щетка</li>
            <li>Геймпад</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
