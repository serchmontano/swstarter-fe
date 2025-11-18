import { BaseResourceService } from './BaseResourceService'
import type { Film } from '../types'

class FilmsService extends BaseResourceService<Film> {
  protected resourceName = 'films'

  /**
   * Search films by title
   */
  async searchByTitle(title: string, page: number = 1) {
    return this.search(title, page)
  }
}

export const filmsService = new FilmsService()
