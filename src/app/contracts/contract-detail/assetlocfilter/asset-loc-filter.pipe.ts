import { Pipe, PipeTransform } from '@angular/core';
import { Assets } from '../../../manage-assets/models/assets';

@Pipe({
  name: 'assetLocFilter'
})
export class AssetLocFilterPipe implements PipeTransform {

  constructor() { }

  transform(filter: Assets[]): any {
    const value = [...new Set(filter.map( ad => ad.SiteAddress)) ];
    return value;

}

}
