import { Pipe, PipeTransform } from '@angular/core';
import { Assets } from '../../../manage-assets/models/assets';

@Pipe({
  name: 'assetLocFilter'
})
export class AssetLocFilterPipe implements PipeTransform {

  constructor() { }

  transform(value: any, location: String ): any {
    const noDups: any[]  = [];
    for ( let i = 0; i <= value.length; i++) {
     const locations: string = value[i].SiteAddress;
    }
}

}

// const siteAddress: string[] = location.map(
//   l => l.SiteAddress
// );

// const noDups = [...new Set(siteAddress)];
