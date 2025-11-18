import { BaseResourceService } from './BaseResourceService'
import type { Person } from '../types'

class PeopleService extends BaseResourceService<Person> {
  protected resourceName = 'people'

  /**
   * Search people by name
   */
  async searchByName(name: string, page: number = 1) {
    return this.search(name, page)
  }
}

export const peopleService = new PeopleService()
