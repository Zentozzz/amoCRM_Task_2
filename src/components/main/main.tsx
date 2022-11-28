import mainStyle from "./style/main.module.scss";

export function Main() {
  return (
    <div className={mainStyle.main}>
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
            <h3>Виджеты</h3>
            <p>
              30 готовых
              <br />
              решений
            </p>
          </div>
          <div className={mainStyle.element}>
            <h3>Dashboard</h3>
            <p>
              с показателями
              <br />
              вашего бизнеса
            </p>
          </div>
          <div className={mainStyle.element}>
            <h3>Skype Аудит</h3>
            <p>
              отдела продаж
              <br />и CRM системы
            </p>
          </div>
          <div className={mainStyle.element}>
            <h3>35 дней</h3>
            <p>
              использования
              <br />
              CRM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
