import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: "Search!",
    input: "",
    query: {
      name: "grażyna",
      total_tesult: 10,
      created: "2020-11-28T12:17:56.741Z",
    },
    results: [
      {
        model: "search_engine.item",
        pk: 227,
        fields: {
          position: 1,
          link:
            "https://www.google.com/mymaps/viewer?mid=1L2Dm_7IS4AdJBSG5_rT6kmuuwbM&hl=pl",
          title: "Willa Grażyna",
          desc:
            "Willa Grażyna. Zwiń legendę mapy. Szczegóły mapy. Kopiuj mapę. Drukuj mapę. \nPrzybliż widoczny obszar. Umieść mapę. Pobierz KML. 373 wyświetlenia.",
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 228,
        fields: {
          position: 2,
          link:
            "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yYzJjMWI2NC9wb2RjYXN0L3Jzcw==",
          title: "Grażyna Kopestyńska",
          desc:
            "To jest historia o tym, jak zaczęłam robić podcasty i to są pierwsze z nich. \nAvailable episodes.. Newest first. Oldest first. 7 hours ago. Zaprojektuj swoje \nżycie ...",
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 229,
        fields: {
          position: 3,
          link:
            "https://www.google.com/mymaps/viewer?mid=1YbtMTM4zou6SR4zA2wo42Nvpl3I&hl=pl",
          title:
            '"Łososiówka" - Grażyna i Zbigniew Łososiowie – Moje Mapy Google',
          desc: '"Łososiówka" - Grażyna i Zbigniew Łososiowie.',
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 230,
        fields: {
          position: 4,
          link:
            "https://www.google.com/maps/d/kml?mid=zwjnu8MA5iBg.kNQX95PcKvz8&ie=UTF8&hl=pl&msa=0&output=kml",
          title: "Autoryzowana Agencja Ubezpieczeniowa Grażyna Szubert",
          desc:
            "Autoryzowana Agencja Ubezpieczeniowa Grażyna Szubert (Biuro 1). ul. K. \nSzajnochy 11 85-738 Bydgoszcz tel. 052 346 60 03 kom. +48 601 644 774 e-\nmail: ...",
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 231,
        fields: {
          position: 5,
          link:
            "https://www.google.com/maps/d/embed?mid=1-yirpn2lgwwjErSFJYQ6Jx5HEWQ",
          title: "Radni WND",
          desc:
            "Grażyna Brzozowska. Jerzy Plackowski. Tomasz Reginis. Piotr Miszczak. \nKrystyna Nasiadka. Tadeusz Sosiński. Ryszard Brzeziński. Roman Biliński.",
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 232,
        fields: {
          position: 6,
          link:
            "https://www.google.com/maps/dir/Current+Location/51.263954,15.561187",
          title: "Where's the Map?",
          desc:
            "Find local businesses, view maps and get driving directions in Google Maps.",
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 233,
        fields: {
          position: 7,
          link:
            "https://www.google.com/maps/d/edit?mid=zZlGNl8IXi0U.kfRhFU97UENk&msa=0",
          title: "Malborska 91",
          desc:
            'Firma "RGM" - Grażyna Pieczyska 82-300 Elbląg, Malborska 91 tel. +48 601-444-\n120.',
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 234,
        fields: {
          position: 8,
          link: "http://google.com/patents/WO2013176560A1?cl=no",
          title: "Patent WO2013176560A1 - An insulin analogue or its ...",
          desc:
            "Nov 28, 2013 ... ... Diana MIKIEWICZ-SYGUŁA, Monika Bogiel, Dorota Stadnik, Grażyna \nPŁUCIENNICZAK, Bożena TEJCHMAN-MAŁECKA, Tadeusz GŁĄBSKI, ...",
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 235,
        fields: {
          position: 9,
          link:
            "https://www.google.com/maps/@27.173933,78.043219,3a,75y,264.8h,97.86t/data=!3m5!1e1!3m3!1sBKlPm5OH6iuzNr2HoNQxjA!2e0!3e5?hl=pl",
          title: "Mapy Google",
          desc:
            "Korzystaj z nawigacji w czasie rzeczywistym i innych funkcji w aplikacji Mapy. \nUżyj przeglądarki. Użyj aplikacji. Trasa. Jazda samochodem. Pieszo. Rower.",
          query: 28,
        },
      },
      {
        model: "search_engine.item",
        pk: 236,
        fields: {
          position: 10,
          link:
            "https://www.google.com/mymaps/viewer?mid=1CIlinUHigrcLq-PAEs69CiO7N6Y&hl=en_US",
          title: "Miejsca przyjazne poczęciu",
          desc:
            "maja poleca: Grażyna poleca: Aleksandra poleca: Joanna poleca: Krzysztof \npoleca: Patrycja poleca: Bartosz poleca: Ilona poleca: Liliana poleca: Monika \npoleca ...",
          query: 28,
        },
      },
    ],
    popular_words: [
      "Grayna",
      "poleca",
      "i",
      "map",
      "Mapy",
      "Google",
      "Willa",
      "mapy",
      "z",
      "first",
    ],
  },
  mutations,
  actions,
});
