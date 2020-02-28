import { Pipe, PipeTransform } from '@angular/core';
import { Assets } from '../../../manage-assets/models/assets';

@Pipe({
  name: 'assetLocFilter'
})
export class AssetLocFilterPipe implements PipeTransform {

  constructor() { }

  transform(location: Assets[] ): any {
    const siteAddress: string[] = location.map(
      l => l.SiteAddress
    );

    const noDups = [...new Set(siteAddress)];
    return noDups;
  }
}
