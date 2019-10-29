import React from 'react';
import './reset.css';
import './App.css';
import logo from './img/Logo.png';
import rectangle from './img/Rectangle.png';
import layer_2 from './img/Layer 2.png';
import layer_3 from './img/Layer 3.png';
import layer_4 from './img/Layer 4.png';
import layer_5 from './img/Layer 5.png';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <img src={logo}/>
          <nav className="header__navigation">
            <a href="#" className="titleText">О компании</a>
            <a href="#" className="titleText">Услуги</a>
            <a href="#" className="titleText">Отзывы</a>
            <a href="#" className="titleText">Контакти</a>
          </nav>
        </header>
        <main className="mainContent">

          <section className="mainContent__head">
            <img src={rectangle}/>
            <div className="mainContent__head__mainTitleBox">
              <h1 className="mainTitle">Типы контента, которые вы можете публиковать в своем интернет-магазине.</h1>
              <p className="contentText">
                Грамотная контентная стратегия для интернет-магазина позволяет значительно увеличить объемы поискового трафика на сайт, за который предпринимателю нет необходимости платить. Это повышает рентабельность бизнеса, ускоряет его развитие и дает преимущество...
              </p>
              <a className="myButton">Подробнее</a>
            </div>
          </section>

          <section className="mainContent__article">
            <h2 className="titleText">Эффективность контентной стратегии</h2>
            <p className="contentText">
              Грамотная контентная стратегия для интернет-магазина позволяет значительно увеличить объемы поискового трафика на сайт, за который предпринимателю нет необходимости платить. Это повышает рентабельность бизнеса, ускоряет его развитие и дает преимущество по сравнению с конкурентами.Поэтому выстраивать эффективную стратегию контент-маркетинга в современных реалиях просто необходимо.
            </p>
            <div className="listSuccess">
              <div className="listSuccess__item">
                <img src={layer_2}/>
                <p className="itemText">Улучшение посещяемости</p>
              </div>

              <div className="listSuccess__item">
                <img src={layer_3}/>
                <p className="itemText">Увеличение количества продаж</p>
              </div>

              <div className="listSuccess__item">
                <img src={layer_4}/>
                <p className="itemText">Рост прибыли</p>
              </div>

              <div className="listSuccess__item">
                <img src={layer_5}/>
                <p className="itemText">Стабильность бизнеса</p>
              </div>

            </div>
          </section>

          <section className="mainContent__article">
            <h2 className="titleText">Информация о товаре</h2>
            <p className="contentText">
              Это текст, который доступен посетителю на странице товара. Это может быть как качественно подготовленное описание, так и дополнительная информация: интересные факты, видеообзор, а также преимущества данного товара по сравнению с аналогами от конкурентов. Согласитесь, это будет гораздо интереснее, чем банальное описание технических характеристик.
            </p>
          </section>

          <section className="mainContent__article">
            <h2 className="titleText">Маркетинговый контент</h2>
            <p className="contentText">
              Речь идет о заметках и публикациях с информацией о скидках, распродажах, конкурсах и прочих акционных предложениях. Такой текст тоже необходимо тщательно прорабатывать, так как от стиля подачи во многом зависит и успех подобной акции. В современных реалиях вызвать интерес со стороны потенциального клиента не так уж и просто.
            </p>
          </section>

          <section className="mainContent__article">
            <h2 className="titleText">Обзорные статьи</h2>
            <p className="contentText">
              Они могут быть самыми разными – от разъяснения особенностей той или иной технологии и до демонстрации вариантов применения гаджета или другого подобного устройства. Важно раскрывать тему и давать пользователю исчерпывающий ответ на интересующий его вопрос. И да, не забывайте отвечать на комментарии – коммуникация должна быть двухсторонней.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
