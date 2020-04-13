export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'eteint',
    },
    {
      name: 'Frigo',
      status: 'allume',
    },
    {
      name: 'Ordinateur',
      status: 'eteint',
    },
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allume';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'eteint';
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allume';
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'eteint';
  }
}
