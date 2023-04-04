import * as moment from "moment";

function convertToPrintableDate(date : Date) {

  return moment(date).format('yyyy-MM-DD HH:mm:ss');
}


export  {convertToPrintableDate}
