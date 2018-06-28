import {Pipe, PipeTransform} from '@angular/core';

import { environment } from '../../../../environments/environment';

@Pipe({name: 'pathFromApi'})
export class PathFromApiPipe implements PipeTransform {
  transform(path: any): any {
    if (!path) {
      return path;
    }

    const result: string = environment.api + '/' + path;

    return result;
  }
}
