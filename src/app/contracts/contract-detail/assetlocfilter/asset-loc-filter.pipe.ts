import { Pipe, PipeTransform } from '@angular/core';
import { Assets } from '../../../manage-assets/models/assets';

@Pipe({
  name: 'assetLocFilter'
})
export class AssetLocFilterPipe implements PipeTransform {

  constructor() { }

  transform(filter: Assets[]): any {
    const value = filter.map(x => x.SiteAddress);
   const locs = [...new Set(value) ];
    return locs;

}

}
