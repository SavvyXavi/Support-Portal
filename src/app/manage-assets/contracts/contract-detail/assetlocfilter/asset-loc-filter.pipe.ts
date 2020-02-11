import { Pipe, PipeTransform } from '@angular/core';
import { Assets } from './../../../models/assets';

@Pipe({
  name: 'assetLocFilter'
})
export class AssetLocFilterPipe implements PipeTransform {

  transform(value: string[], filter: Assets[]): any {
    value = [...new Set(filter.map( ad => ad.SiteAddress)) ];
    return value;

}

}
