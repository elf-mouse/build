var moment = require('moment');
var util = require('util');

var newYear = moment([2016, 2, 8]);

calculate();
setInterval(calculate, 1000);

function calculate() {
  // 计算还差几天
  var now = moment();
  var diff = moment.duration(newYear.diff(now));

  document.getElementById('count-down-text').innerHTML =
    util.format(
      '距 2016 年春节还有 %s 月 %s 天 %s 时 %s 分 %s 秒',
      diff.months(),
      diff.days(),
      diff.hours(),
      diff.minutes(),
      diff.seconds()
    );
}
