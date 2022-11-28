import React from "react";

import mainStyle from "./style/main.module.scss";

export function Main() {
  const width = document.documentElement.clientWidth;

  return (
    <div className={mainStyle.main}>
      <div className={mainStyle.flex}>
        <div className={mainStyle.tagline}>
          <div className={mainStyle.tit}>
            <h1>
              Зарабатывайте
              <br /> больше
            </h1>
            <h1 className={mainStyle.spotlight}>с WELBEX</h1>
            <span className={mainStyle.secondText}>
              <p>
                Развиваем и контролируем
                <br /> продажи за вас
              </p>
            </span>
          </div>
        </div>
        <div className={mainStyle.present}>
          <div className={mainStyle.text}>
            <div className={mainStyle.upText}>
              <h3>Вместе с&nbsp;</h3>
              <p>бесплатной</p>
            </div>
            <div className={mainStyle.bottomText}>
              <p>консультацией&nbsp;</p>
              <h3>мы дарим:</h3>
            </div>
          </div>
          <div className={mainStyle.grid}>
            <div className={mainStyle.element}>
              <div className={mainStyle.flexStill}>
                <div className={mainStyle.still}></div>
                <h3>{width > 768 ? "Виджеты" : "Skype аудит"}</h3>
              </div>

              <p>
                30 готовых
                <br />
                решений
              </p>
            </div>
            <div className={mainStyle.element}>
              <div className={mainStyle.flexStill}>
                <div className={mainStyle.still}></div>
                <h3>{width > 768 ? "Dashboard" : "30 виджетов"}</h3>
              </div>
              <p>
                с показателями
                <br />
                вашего бизнеса
              </p>
            </div>
            <div className={mainStyle.element}>
              <div className={mainStyle.flexStill}>
                <div className={mainStyle.still}></div>
                <h3>{width > 768 ? "Skype Аудит" : "Dashboard"}</h3>
              </div>
              <p>
                отдела продаж
                <br />и CRM системы
              </p>
            </div>
            <div className={mainStyle.element}>
              <div className={mainStyle.flexStill}>
                <div className={mainStyle.still}></div>
                <h3>{width > 768 ? "35 дней" : "Месяц аmoCRM"}</h3>
              </div>
              <p>
                использования
                <br />
                CRM
              </p>
            </div>
          </div>
          <div className={mainStyle.buttonFlex}>
            <input
              type="button"
              value="Получить консультацию"
              className={mainStyle.button}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
