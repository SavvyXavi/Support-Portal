import { Pipe, PipeTransform } from '@angular/core';
import { Assets } from './../../../models/assets';

@Pipe({
  name: 'assetLocFilter'
})
export class AssetLocFilterPipe implements PipeTransform {

  transform(value: Assets[], filter: Object): any {
    return [...new Set(value.map( ad => ad.SiteAddress)).values() ];

}

}
