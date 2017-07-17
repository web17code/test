/**
 * Created by web17code on 2017/7/11.
 */
//var xx=JSON.parse(JSON.stringify(this.option_base));
//深拷贝对象,arr的typeof也是object。如果是深拷贝纯数组，使用arr.slice(0,length)
function deepCopy(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}
var utils={};
utils.deepCopy = deepCopy;
export default utils;
