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
  .query_block{
    padding:10px;
  }
  .query_block .txt{
    color: #495060;
    font-size: 16px;
    line-height: 30px;
  }
</style>

<template>
  <div>
    <div class="btnBlock">
      <p v-if="has_query" style="overflow: hidden;" class="query_block">
          <span class="txt">区情地图</span>
          <Input v-model="query_key" placeholder="学校姓名" style="width: 200px;float:right">
            <span slot="append" style="cursor: pointer" @click="queryValue">
                &nbsp;&nbsp;
                <Icon type="search" size="18"></Icon>
                &nbsp;&nbsp;
            </span>
          </Input>
      </p>
      <button @click="addAll(mapObj.map,mapObj.markMapData)">全部</button>
      <button @click="showMarker('XQJY')">学前教育</button>
      <button @click="showMarker('XX')">小学</button>
      <button @click="showMarker('ZX')">中学</button>
      <button @click="showMarker('YGZ')">一贯制</button>
      <button @click="showMarker('TSJY')">特殊教育</button>
      <button @click="showMarker('ZZCX')">中职成校</button>
      <button @click="showMarker('MBJY')">民办教育</button>
      <button @click="showMarker('QTDW')">其他单位</button>
      <button @click="showMarker('XGJG')">相关机构</button>
      <button @click="showMarker('null')">未分类</button>
    </div>
    <div id="mapDiv" style="height: 70vh;"></div>
  </div>
</template>

<script>
  var infoWindow = new AMap.InfoWindow({//生成一个信息窗体对象
    autoMove: true,
    offset: {x: 0, y: -12}
  });
  export default {
      data: function () {
        return {mapObj:{},query_key:""}
      },
      props: {
        has_query: {
          default: false,
          type:Boolean
        }
      },
      methods: {
          //处理数据
          processData:function(data){
            var mapData = {};
            var data = data.data;
            for(var i = 0; i < data.length; i++){
              var obj = {};
              obj.title = data[i].title;
              obj.position = [data[i].lng,data[i].lat];
              obj.detail =
                "名称："+data[i].title
                +"<br>地址："+data[i].address
                +"<br>tel："+data[i].tel
                +"<br>网址："+((data[i].url=="null")?"暂无记录":"<a target='_blank' href='"+data[i].url+"'>"+data[i].url+"</a>")
              if(mapData[data[i].type_py]!=undefined){
                mapData[data[i].type_py].push(obj)
              }else{
                mapData[data[i].type_py]=[];
                mapData[data[i].type_py].push(obj)
              }
            }
            return mapData;
          },
          //创建一个地图
          initmap:function(){
            var map = new AMap.Map('mapDiv', {
              mapStyle: 'amap://styles/f85400cb023a7ef6191dfd5faa051592',//样式URL
              center: [121.099109,31.147121],
              resizeEnable: true,
              scrollWheel:false,//不允许滚轮放大缩小
              zoom: 11
            });
            //初始化标记点
            this.$http.get(window.getHost + 'json/json/School_schoolInfo_schoolMap.json?r=' + Math.random()
            ).then(function (data) {
                var mapData = this.processData(data);
                //初始化标记点，得到所有标记点的数据
                var mapMarkArr = this.initMarkerAll(map,mapData);
                this.mapObj.mapMarkArr=mapMarkArr;//在组件里保存地图标记点数据
                this.mapObj.markMapData=mapData;//js处理过的后台数据
            })
            //添加地图的平移和缩放控件
            AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){map.addControl(new AMap.ToolBar())});
            //绘制青浦描边
            this.addqpblock(map);
            this.mapObj.map=map;//在组件里保存地图对象
          },
          //初始化所有的地图标注点，返回地图标记点数组,参数data传递处理过的后台数据
          initMarkerAll:function (map,data){
            var markAll = {};//数据格式{key1:{1:obj,2:obj},key2:{1:obj,2:obj}}
            for(var key in data){
              markAll[key]={};
              data[key].forEach(function (value,index,mark) {
                if(value.position[0]!=undefined&&value.position[1]!=undefined){ //判断经纬度是否为undefined
                  markAll[key][index]=new AMap.Marker({ //添加自定义点标记
                    map: map,
                    position: value.position, //基点位置
                    title:value.title,
                    offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
                    content: '<div class="markerIcon1 '+key+'"></div>'   //自定义点标记覆盖物的容器
                  })
                  AMap.event.addListener( markAll[key][index], "click", function(e){
                    infoWindow.setContent(value.detail);//设置小弹框的内容
                    infoWindow.open(map, [e.lnglat.lng,e.lnglat.lat]);//在特定的位置打开小弹框
                  })//, context
                }
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
            this.deleteMarkerAll();//清空原来的标记点
            infoWindow.close();//清除所有的地图小弹框
            this.mapObj.mapMarkArr=this.initMarkerAll(map,data);
          },
          //显示点击的标记点
          showMarker:function(key){
            //清空所有的标记点
            this.deleteMarkerAll();
            infoWindow.close();//清除所有的地图小弹框
            var map = this.mapObj.map;//地图对象
            var markAll = {};//数据格式{key1:{1:obj,2:obj},key2:{1:obj,2:obj}}
              markAll[key]={};
              //遍历处理过的后台数据
              this.mapObj.markMapData[key].forEach(function (value,index,mark) {
                if(value.position[0]!=undefined&&value.position[1]!=undefined){ //判断经纬度是否为undefined
                  markAll[key][index]=new AMap.Marker({ //添加自定义点标记
                    map: map,
                    position: value.position, //基点位置
                    title:value.title,//标记点的标题
                    offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
                    content: '<div class="markerIcon1 '+key+'"></div>'   //自定义点标记覆盖物的样式容器
                  })
                  //为标记点添加点击事件，markAll[key][index]为标记点，click为触发方式，第三个参数是回调函数
                  AMap.event.addListener( markAll[key][index] , "click", function(e){
                    infoWindow.setContent(value.detail);
                    infoWindow.open(map, [e.lnglat.lng,e.lnglat.lat]);
                  })
                }
              })
            this.mapObj.mapMarkArr = markAll;
          },
          //queryValue查询学校的函数
          queryValue:function(){
            this.query_key=this.query_key.replace(/^\s+|\s+$/gm,'')//获取input输入
            if(this.query_key==""){//空字符串跳出
                return false;
            }
            this.deleteMarkerAll();//删除所有的点
            infoWindow.close();//清除所有的地图小弹框
            var markAll = {};//数据格式{key1:{1:obj,2:obj},key2:{1:obj,2:obj}},存放标记点
            //开始请求数据，并进行生成标记
            this.$http.get(window.getHost+"json/School_schoolInfo_schoolMap.json?schoolName="+this.query_key).then(function (data) {
                var singleMarker = this.processData(data);//处理拿到的数据
                for(var key in singleMarker){//返回数据就一条，循环为了拿到key
                  var map = this.mapObj.map;//地图对象
                  if(singleMarker[key].length==1){
                    markAll[key]={};
                    markAll[key][0] = new AMap.Marker({ //添加自定义点标记
                      map: map,
                      position: singleMarker[key][0].position, //基点位置
                      title:singleMarker[key][0].title,//标记点的标题
                      offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
                      content: '<div class="markerIcon1 '+key+'"></div>'   //自定义点标记覆盖物的样式容器
                    })
                    //为标记点添加点击事件，markAll[key][index]为标记点，click为触发方式，第三个参数是回调函数
                    AMap.event.addListener(markAll[key][0], "click", function(e){
                      infoWindow.setContent(singleMarker[key][0].detail);
                      infoWindow.open(map, [e.lnglat.lng,e.lnglat.lat]);
                    })
                  }
                }
                this.mapObj.mapMarkArr = markAll;//更改mapMarkArr，为删除做准备
            })
          }
      },
      mounted:function () {
          this.initmap();
      }
  }
</script>
