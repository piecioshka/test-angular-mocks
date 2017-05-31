import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    return {
      piecioshka: require('./piecioshka.json'),
    };
  }
}
