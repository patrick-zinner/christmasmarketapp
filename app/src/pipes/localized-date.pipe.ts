
import { DatePipe } from "@angular/common";
import { PipeTransform, Pipe } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Pipe({ name: 'localizedDate' })
export class LocalizedDatePipe implements PipeTransform {

  constructor(
    private translate: TranslateService) {

  }

  transform(value: any, pattern?: string) : string{
      let lang = this.translate.currentLang;
      let datePipe = new DatePipe(lang);
      return datePipe.transform(value, pattern);
  }


}
