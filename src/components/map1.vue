<style scoped>
    /**
    * Created by web17code on 2017/7/12.
    */
  .btnBlock{
    padding-top:15px;
    padding-bottom: 15px;
  }
  .btnBlock button{
    min-width: 80px;
    padding: 4px 9px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #f7f7f7;
    border-color: #dddee1;
    display: inline-block;
    margin-bottom: 0px;
    vertical-align: middle;
    cursor: pointer;
    color:#495060;
    transition: color .2s linear,background-color .2s linear,border .2s linear;
  }
    .btnBlock button:focus{
      color:#495060;
      background-color: #f7f7f7;
      outline: 0;
    }
  .btnBlock button:hover{
    background: #fff;
  }

</style>

<template>
  <div>
    <p>区情地图</p>
    <div class="btnBlock">
      <button @click="deleteMarkerAll">全部</button>
      <button @click="addAll(mapObj.map,mapObj.markMapData)">学前教育</button>
      <button>小学</button>
      <button>中学</button>
      <button>一贯制</button>
      <button>特殊教育</button>
      <button>中职成校</button>
      <button>民办教育</button>
      <button>其他单位</button>
      <button>相关机构</button>
    </div>
    <div id="mapDiv" style="height: 480px;"></div>
  </div>
</template>

<script>
  import markerdata from "../config/mapdata.json"
  export default {
      data: function () {
        return {mapObj:{}}
      },
      props: {
        age: {
          /*type: String,//Number,Boolean,Function,Object,Array,Symbol
            default: "",
            required: true,
            validator: function (value) {
                return value > 10
            }*/
        }
      },
      methods: {
          //创建一个地图
          initmap:function(){
            var map = new AMap.Map('mapDiv', {
              mapStyle: 'amap://styles/f85400cb023a7ef6191dfd5faa051592',//样式URL
              center: [121.099109,31.147121],
              resizeEnable: true,
              scrollWheel:false,//不允许滚轮放大缩小
              //zoomEnable:false,
              zoom: 11
            });
            //添加地图的平移和缩放控件
            AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){map.addControl(new AMap.ToolBar())});
            //绘制青浦描边
            this.addqpblock(map);
            //初始化标记点
            var mapMarkArr = this.initMarkerAll(map,markerdata.data);
            this.mapObj.map=map;//地图对象
            this.mapObj.mapMarkArr=mapMarkArr;//地图标注点数组
            this.mapObj.markMapData=markerdata.data;//后台数据
          },
          //初始化所有的地图标注点
          initMarkerAll:function (map,data){
            var markAll = {};
            for(var key in data){
              markAll[key]={};
              data[key].forEach(function (value,index,mark) {
                markAll[key][index]=new AMap.Marker({ //添加自定义点标记
                  map: map,
                  position: value.position, //基点位置
                  title:value.title,
                  offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
                  content: '<div class="markerIcon1 '+key+'"></div>'   //自定义点标记覆盖物内容
                })
              })
            }
            return markAll;
          },
          //添加青浦区的描边函数
          addqpblock:function (map) {
            //加载行政区划插件
            AMap.service('AMap.DistrictSearch', function() {
              var opts = {
                subdistrict: 1,   //返回下一级行政区
                extensions: 'all',  //返回行政区边界坐标组等具体信息
                level: 'city'  //查询行政级别为 市
              };
              //实例化DistrictSearch
              var district = new AMap.DistrictSearch(opts);
              district.setLevel('district');
              //行政区查询
              district.search('青浦区', function(status, result) {
                var bounds = result.districtList[0].boundaries;
                var polygons = [];
                if (bounds) {
                  for (var i = 0, l = bounds.length; i < l; i++) {
                    //生成行政区划polygon
                    var polygon = new AMap.Polygon({
                      map: map,
                      strokeWeight: 1,
                      path: bounds[i],
                      fillOpacity: 0.7,
                      fillColor: '#CCF3FF',
                      strokeColor: '#CC66CC'
                    });
                    polygons.push(polygon);
                  }
                  //map.setFitView();//地图自适应
                }
              })
            })
          },
          //删除所有的标注点
          deleteMarkerAll: function (){//删除所有的标注点函数
            var data=this.mapObj.mapMarkArr;
            for(var key in data){
              for(var innerkey in data[key]){
                data[key][innerkey].setMap(null);//对marker集合的每一个进行删除
              }
            }
          },
          addAll:function(map,data){
            this.mapObj.mapMarkArr=this.initMarkerAll(map,data);
          }
      },
      mounted:function () {
          this.initmap();
      }
  }
</script>
