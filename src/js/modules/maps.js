const kuzneckom = () => {
  let center = [55.761726653900105, 37.623258322090074];

  function init() {
    let map = new ymaps.Map("map-kuzneckom-new", {
      center: center,
      zoom: 16,
    });

    let placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "https://hishnikburger.ru/img/marker-big.png",
        iconImageSize: [62, 91],
        iconImageOffset: [-32, -80],
      }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};
const paveletskoy = () => {
  let center = [55.73009698458233, 37.63625932275382];

  function init() {
    let map = new ymaps.Map("map-pavleckoy-new", {
      center: center,
      zoom: 16,
    });

    let placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "https://hishnikburger.ru/img/marker-big.png",
        iconImageSize: [62, 91],
        iconImageOffset: [-27, -88],
      }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};

const dmitrovke = () => {
  let center = [55.76021556895837, 37.614769499999944];

  function init() {
    let map = new ymaps.Map("map-dmitrovke-new", {
      center: center,
      zoom: 16,
    });

    let placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "https://hishnikburger.ru/img/marker-big.png",
        iconImageSize: [62, 91],
        iconImageOffset: [-32, -91],
      }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};
const dmitrovkeEng = () => {
  let center = [55.76021556895837, 37.614769499999944];

  function init() {
    let map = new ymaps.Map("map-dmitrovke-eng", {
      center: center,
      zoom: 16,
    });

    let placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "https://hishnikburger.ru/img/marker-big.png",
        iconImageSize: [62, 91],
        iconImageOffset: [-32, -91],
      }
    );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип
    map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove("zoomControl"); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};

dmitrovke();
paveletskoy();
kuzneckom();
dmitrovkeEng();
