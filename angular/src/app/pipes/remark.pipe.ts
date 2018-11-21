import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remark'
})
export class RemarkPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value.length<=8){
      return value;
    }
    return value.substring(0,8)+'...';
  }

}
