import { Pipe, PipeTransform } from '@angular/core';
import { Assets } from './../../../models/assets';

@Pipe({
  name: 'assetLocFilter'
})
export class AssetLocFilterPipe implements PipeTransform {

  transform(value: any[], filter: Object): any {
    const address = [ ...new Set(value.map( ad => ad.SiteAddress))];


    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return address;
}

}
