Search.setIndex({docnames:["advanced-topics","api-reference/controller/device/base","api-reference/controller/device/channel","api-reference/controller/device/generic","api-reference/controller/device/hub","api-reference/controller/mixins/consumption","api-reference/controller/mixins/electricity","api-reference/controller/mixins/garage","api-reference/controller/mixins/hub","api-reference/controller/mixins/light","api-reference/controller/mixins/spray","api-reference/controller/mixins/system","api-reference/controller/mixins/toggle","api-reference/controller/subdevice/sensor","api-reference/controller/subdevice/valve","api-reference/http","api-reference/index","api-reference/manager","common-gotchas","index","installation","meross-arch","quick-start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["advanced-topics.rst","api-reference/controller/device/base.rst","api-reference/controller/device/channel.rst","api-reference/controller/device/generic.rst","api-reference/controller/device/hub.rst","api-reference/controller/mixins/consumption.rst","api-reference/controller/mixins/electricity.rst","api-reference/controller/mixins/garage.rst","api-reference/controller/mixins/hub.rst","api-reference/controller/mixins/light.rst","api-reference/controller/mixins/spray.rst","api-reference/controller/mixins/system.rst","api-reference/controller/mixins/toggle.rst","api-reference/controller/subdevice/sensor.rst","api-reference/controller/subdevice/valve.rst","api-reference/http.rst","api-reference/index.rst","api-reference/manager.rst","common-gotchas.rst","index.rst","installation.rst","meross-arch.rst","quick-start.rst"],objects:{"meross_iot.controller.device":{BaseDevice:[1,0,1,""],ChannelInfo:[2,0,1,""],GenericSubDevice:[3,0,1,""],HubDevice:[4,0,1,""]},"meross_iot.controller.device.BaseDevice":{async_update:[1,1,1,""],channels:[1,1,1,""],firmware_version:[1,1,1,""],hardware_version:[1,1,1,""],internal_id:[1,1,1,""],lookup_channel:[1,1,1,""],name:[1,1,1,""],online_status:[1,1,1,""],register_push_notification_handler_coroutine:[1,1,1,""],type:[1,1,1,""],unregister_push_notification_handler_coroutine:[1,1,1,""],uuid:[1,1,1,""]},"meross_iot.controller.device.GenericSubDevice":{async_get_battery_life:[3,1,1,""],async_update:[3,1,1,""],internal_id:[3,1,1,""],online_status:[3,1,1,""]},"meross_iot.controller.mixins.consumption":{ConsumptionXMixin:[5,0,1,""]},"meross_iot.controller.mixins.consumption.ConsumptionXMixin":{async_get_daily_power_consumption:[5,1,1,""]},"meross_iot.controller.mixins.electricity":{ElectricityMixin:[6,0,1,""]},"meross_iot.controller.mixins.electricity.ElectricityMixin":{async_get_instant_metrics:[6,1,1,""],get_last_sample:[6,1,1,""]},"meross_iot.controller.mixins.garage":{GarageOpenerMixin:[7,0,1,""]},"meross_iot.controller.mixins.garage.GarageOpenerMixin":{async_close:[7,1,1,""],async_open:[7,1,1,""],get_is_open:[7,1,1,""]},"meross_iot.controller.mixins.hub":{HubMixn:[8,0,1,""],HubMts100Mixin:[8,0,1,""]},"meross_iot.controller.mixins.light":{LightMixin:[9,0,1,""]},"meross_iot.controller.mixins.light.LightMixin":{async_set_light_color:[9,1,1,""],get_color_temperature:[9,1,1,""],get_light_is_on:[9,1,1,""],get_luminance:[9,1,1,""],get_rgb_color:[9,1,1,""],get_supports_luminance:[9,1,1,""],get_supports_rgb:[9,1,1,""],get_supports_temperature:[9,1,1,""]},"meross_iot.controller.mixins.spray":{SprayMixin:[10,0,1,""]},"meross_iot.controller.mixins.system":{SystemAllMixin:[11,0,1,""],SystemOnlineMixin:[11,0,1,""]},"meross_iot.controller.mixins.toggle":{ToggleMixin:[12,0,1,""],ToggleXMixin:[12,0,1,""]},"meross_iot.controller.mixins.toggle.ToggleXMixin":{async_toggle:[12,1,1,""],async_turn_off:[12,1,1,""],async_turn_on:[12,1,1,""],is_on:[12,1,1,""]},"meross_iot.controller.subdevice":{Ms100Sensor:[13,0,1,""],Mts100v3Valve:[14,0,1,""]},"meross_iot.controller.subdevice.Ms100Sensor":{last_sampled_humidity:[13,1,1,""],last_sampled_temperature:[13,1,1,""],last_sampled_time:[13,1,1,""],max_supported_temperature:[13,1,1,""],min_supported_temperature:[13,1,1,""]},"meross_iot.controller.subdevice.Mts100v3Valve":{async_get_temperature:[14,1,1,""],async_set_preset_temperature:[14,1,1,""],get_preset_temperature:[14,1,1,""],get_supported_presets:[14,1,1,""],last_sampled_temperature:[14,1,1,""],last_sampled_time:[14,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:method"},terms:{"3rd":19,"8bit":9,"case":[0,18,19,22],"class":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,18,22],"default":[6,7,9,12],"enum":[1,22],"float":[13,14],"function":[0,1,13,22],"import":[19,22],"int":[1,2,7,9],"new":[0,18,22],"return":[1,3,5,6,7,9,12,13,14],"static":14,"switch":[1,12,19],"true":[7,9,12],"try":[1,3],"while":18,For:[0,18,19,22],The:[0,6,7,13,18,19,22],Then:22,There:18,__main__:22,__name__:22,__onoff:9,about:[19,22],absolv:22,abus:18,access:[18,22],account:[0,18,22],accur:6,acquir:18,actual:18,actuat:22,add:[0,18],added:0,advanc:19,advis:0,after:[18,22],again:[18,22],against:18,albertogeniola:20,alert:13,align:18,all:[0,22],allow:[1,22],also:0,altern:0,alwai:[0,18],ambient:22,ambient_temperatur:22,ani:[1,6,18,19],api:[18,19,22],app:[0,18,19],approach:[18,19],architectur:19,archiv:20,arg:[1,3,5,6,7,9,12,14],argument:22,aris:0,around:22,assign:1,async:[1,3,5,6,7,9,12,14,19,22],async_clos:7,async_device_discoveri:22,async_from_user_password:22,async_get_battery_lif:3,async_get_daily_power_consumpt:5,async_get_instant_metr:[6,22],async_get_temperatur:14,async_init:22,async_logout:22,async_open:7,async_set_light_color:[9,22],async_set_preset_temperatur:14,async_toggl:12,async_turn_off:[12,22],async_turn_on:[12,22],async_upd:[1,3,13,18,22],asynchron:18,asyncio:[18,19,22],attribut:6,author:22,autom:19,automat:[0,1,3,18],avail:[13,14,22],avoid:[6,18,22],await:[1,18,22],awar:18,backend:19,bandwidth:[1,3],basedevic:[16,19],basic:[0,1,3,19,22],batteri:3,batteryinfo:3,becom:18,been:[0,1,13,14,22],befor:[0,18,22],between:[19,22],bit:[0,19,22],block:[18,19],blue:9,bool:[2,7,9,12],both:22,bought:19,bright:9,broker:[18,19],build:19,built:19,bulb:[9,12,19],button:22,cach:[6,14,22],calcul:6,call:[6,13,18],callabl:1,can:[0,1,9,13,18,20,22],capabl:[9,13,22],carefulli:22,caus:18,celsiu:[13,14],chang:[0,1,18,19,22],channel:[1,5,6,7,9,12,22],channel_id_or_nam:1,channel_typ:2,channelinfo:[16,19],character:1,check:22,choos:22,chose:22,chosen:22,client:[16,19,22],clone:20,close:[7,18,22],cloud:[1,3,18],code:[20,22],collect:0,color:[9,22],color_temperatur:9,com:20,combin:6,command:[0,7,9,18,20,22],common:19,complet:[18,22],compos:[1,3],configur:[9,14,22],connect:18,consid:19,consumpt:[5,6,22],consumptionxmixin:[16,19,22],contain:9,continu:0,contrari:22,control:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,19],core:22,coro:1,coroutin:1,could:18,creat:[0,22],credenti:0,current:[0,1,3,6,7,9,14,18,22],current_color:22,danger:22,data:[1,3,5,6,13,19,22],datetim:[13,14],decid:0,dedic:0,def:22,defin:1,degre:[13,14],deliv:1,demo:22,describ:6,design:0,detail:22,dev:22,develop:[0,1,18,19,22],devic:[1,2,3,4,5,6,9,12,13,14,18,19],device_class:22,device_typ:22,device_uuid:[1,4,5,6,7,8,9,10,11,12],devid:0,dict:[1,5],did:19,differ:[18,22],directori:0,dirti:22,disconnect:18,discov:[0,18,22],document:22,doe:[0,18,19,22],domot:19,done:0,door:[7,19],download:20,due:1,each:[9,18],easi:0,edg:18,effort:22,electr:[6,22],electricitymixin:[16,19,22],els:[18,22],email:22,embed:[1,3],enabl:9,end:18,endpoint:18,enough:6,enter:0,entir:22,enumer:18,environ:22,equip:22,error:18,even:[0,19,22],event:[1,18],everi:18,exampl:22,exchang:0,exclus:22,experienc:18,explicitli:19,expos:[0,1,13,22],fact:22,fals:[2,7,9,12],far:19,fast:22,featur:0,fetch:18,file:0,filter:22,find:22,find_devic:22,firmwar:1,firmware_vers:1,first:[18,19,22],flood:6,folder:0,follow:[0,20,22],forc:[1,3,13,22],forward:22,found:22,framework:19,from:[0,5,6,9,18,20,22],full:[1,3,13],further:19,garag:[7,19],garageopenermixin:[16,19,22],gather:[0,6],gener:[0,1,9,22],genericsubdevic:[16,19],get:[1,3,9,22],get_color_temperatur:9,get_event_loop:22,get_is_open:7,get_last_sampl:6,get_light_is_on:9,get_lumin:9,get_preset_temperatur:14,get_rgb_color:[9,22],get_supported_preset:14,get_supports_lumin:9,get_supports_rgb:[9,22],get_supports_temperatur:9,git:20,github:[0,20],given:[7,9,14],going:19,gotcha:[19,22],grade:13,green:9,gui:19,hand:22,handl:[18,22],handler:1,happen:[18,19],happi:19,hard:19,hardwar:[1,19],hardware_vers:1,has:[0,13,14,18,22],have:[0,1,9,19,20,22],heat:22,here:22,histor:5,hit:18,hoc:0,hour:18,how:[18,19,22],howev:[0,18,22],http:[16,19,20,22],http_api:22,http_api_cli:22,http_client:22,hub:[3,8],hubdevic:[16,19],hubdevice_uuid:[3,13,14],hubmixn:[16,19],hubmts100mixin:[16,19],humid:[13,22],identifi:[1,3],ignor:9,immedi:22,implement:[0,12,18,22],inconsist:18,index:[1,2,12,19],info:[0,6,9,14],inform:[0,1,6,22],instal:19,instanc:18,instant:6,instant_consumpt:22,instead:[6,14,22],integ:9,intens:9,interest:[0,12],interfac:22,intern:[1,3],internal_id:[1,3],internet:18,invok:[1,3,18,22],iot:20,is_heat:22,is_master_channel:2,is_on:[12,22],is_open:22,isoformat:22,issu:[20,22],iter:14,its:[0,3],keep:18,keyword:18,know:[19,22],known:18,kwarg:[1,3,4,5,6,7,8,9,10,11,12,13,14],last_sampled_humid:[13,22],last_sampled_temperatur:[13,14,22],last_sampled_tim:[13,14,22],latest:[13,14,20,22],least:9,len:22,let:[19,22],level:0,leverag:19,librari:[0,1,3,18,20,22],light:[9,22],lightmixin:[16,19,22],like:22,limit:[1,3,18],line:18,list:[1,5,19],listen:[0,18],log:[0,18],logout:[18,22],look:[1,19,22],lookup_channel:1,loop:[18,22],loos:18,lost:18,low:0,lumin:[9,22],machin:18,magnet:22,mai:[0,6,18],main:22,make:[0,18,20],manag:[1,3,4,5,6,7,8,9,10,11,12,13,14,22],mani:18,manual:[20,22],map:13,mark:22,market:0,master:1,matter:0,max:22,max_supported_temperatur:[13,22],maximum:13,meant:19,measur:6,meross:[0,1,3,18,19,20,22],meross_devic:22,meross_email:22,meross_iot:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,22],meross_password:22,meross_sniff:0,merosshttpcli:[18,22],merossiot:[0,20],merossmanag:[16,18,19,22],merosssnif:0,messag:18,method:[1,3,6,14,18,22],metric:6,might:[1,18,19,22],min:22,min_supported_temperatur:[13,22],mind:19,minimum:13,mixin:[5,6,7,8,9,10,11,12,22],mode:[9,22],model:[1,3,6,22],modul:19,moment:18,monitor:22,more:22,moreov:13,most:[0,1,3,19,22],motor:22,mount:22,mqtt:[1,3,18,19],ms100:[13,22],ms100sensor:[16,19,22],msl120:[9,22],mss310:22,mts100v3:22,mts100v3valv:[16,19,22],multi:1,must:[9,18,22],name:[0,1,2,22],namespac:1,need:[1,3,7,22],network:[0,1,3,19],new_temp:22,none:[1,2,3,6,7,9,12,14],note:[6,9,19,22],notif:[1,3,18],now:19,number:[14,18,22],object:[1,6,18],occur:18,off:[9,12,22],offer:[6,13,22],offici:19,often:6,ofter:14,on_off:22,onc:[0,22],one:[0,9,22],ones:18,onli:[1,3,9,20,22],onlin:[0,1,3,22],online_statu:[1,3,22],onlinestatu:22,onoff:9,open:[7,19],open_statu:22,oper:[1,7,9,12,22],operations__:9,option:[2,6,7,9,12,14,22],order:[0,14,18,22],origin:0,other:[1,22],otherwis:[7,9],over:0,own:22,page:19,panoram:22,param:1,paramet:[1,3,5,6,7,9,12,14],parti:19,pass:22,password:[0,22],pattern:[18,19],perform:[0,19],piec:19,pip:20,pipi:20,place:19,plai:[0,22],plan:19,pleas:[6,9,19],plu:[1,3],plug:22,plugin:[3,6,19],point:22,poll:[3,6,14],power:[5,6,22],powerinfo:6,preced:18,prefix:[1,3],preset:14,press:[0,22],pretti:0,previous:[1,6,18],print:22,proactoreventloop:18,probabl:19,product:19,program:[0,1,3,19],proper:22,properti:[1,3,13,14,22],provid:19,proxim:22,push:[1,3,18],python:[18,19,20,22],quick:19,quickli:22,quit:22,randint:22,random:22,randomli:22,rather:6,reach:18,react:1,read:[5,6,19],readabl:22,realli:22,reason:[0,18,19,22],receiv:[1,3,18],recent:6,recipi:22,red:9,refer:[6,19,22],refresh:[6,13],regist:[0,1,5,22],register_push_notification_handler_coroutin:1,relat:18,releas:[0,18],reli:[6,14,19,22],remov:0,report:[0,13,14,22],represent:1,requir:20,respons:[0,22],restor:18,result:18,retriev:[14,22],revis:1,rgb:[9,22],right:19,risk:22,room:14,run:[0,1,3,18],run_until_complet:22,runtimeerror:18,safe:22,sampl:[13,14,22],sample_timestamp:6,script:[18,22],search:[19,22],section:[18,22],seem:19,select:0,send:[0,7,18,22],sens:[6,13,22],sensit:0,sensor:[13,14,19],set:[14,22],set_event_loop_polici:[18,22],settabl:13,setup:[18,22],should:[0,1,6,14,18,19,22],show:22,signal:22,signatur:22,simul:22,situat:18,sleep:22,smart:[0,12,22],snif:0,sniff:19,sniffer:0,snippet:22,solv:18,some:[1,3,18,19,22],somehow:22,someon:[18,22],soon:22,sourc:20,specif:[0,1,22],specifi:[9,12],sprai:10,spraymixin:[16,19],start:[0,18,19],stat:12,state:[1,9,12,18,22],statu:[0,1,3,7,12,18,22],stop:0,str:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],straight:22,strictli:[1,3],string:14,strongli:0,stuff:19,subdevic:[13,14,22],subdevice_id:[3,13,14],suffix:[1,3],support:[0,9,12,13,14,22],sure:[0,18,20],system:11,systemallmixin:[16,19],systemonlinemixin:[16,19],take:19,taken:22,target:22,target_temperatur:22,task:19,tbd:21,tell:9,temp:22,temperatur:[9,13,14,22],test:0,than:6,thei:22,them:22,themselv:22,thermostat:19,thi:[0,1,3,5,6,9,12,13,14,18,20,22],thing:[19,22],though:0,three:9,time:[13,14,18,19,22],toggl:[9,12,22],togglemixin:[16,19,22],togglex:[9,12],togglexmixin:[16,19,22],togglexmixn:22,token:18,too:[18,19],tool:0,top:18,topic:19,traffic:19,trigger:13,tupl:9,ture:22,turn:[9,12,22],txt:20,type:[1,22],unavail:1,uncom:22,understand:19,unfortun:22,union:1,unknown:1,unoffici:19,unregist:1,unregister_push_notification_handler_coroutin:1,unsupport:19,unzip:20,updat:[1,3,13,14,18,22],upgrad:20,upload:0,upon:[1,3],use:[0,14,18,19,22],used:[1,3,9,18,19,22],user:[0,1,18,22],using:[0,18],usual:[9,18],utc:[13,14],util:0,uuid:1,valu:[6,9,13,14],valv:22,vari:9,version:1,via:[9,22],voltag:[6,22],wai:[0,18,19],wait:[0,22],want:[0,13,19,20,22],warranti:19,well:[19,22],when:[1,3,9,12,13,14,18,22],whenev:1,where:[0,6,9],which:[0,7,18,22],why:22,window:[18,22],windowsselectoreventlooppolici:[18,22],within:22,without:18,work:[18,19,20,22],would:22,write:22,wrong:18,yet:0,you:[0,1,3,6,13,14,18,19,20,22],your:[0,1,3,18,22],your_meross_cloud_email:22,your_meross_cloud_password:22,zip:0},titles:["Advanced topics","BaseDevice","ChannelInfo","GenericSubDevice","HubDevice","ConsumptionXMixin","ElectricityMixin","GarageOpenerMixin","HubMixn","LightMixin","SprayMixin","SystemAllMixin","ToggleXMixin","Ms100Sensor","Mts100v3Valve","HTTP Client","API Reference","MerossManager","Common gotchas","Welcome to MerossIot Library\u2019s documentation!","Installation","Meross Architecture","Quick start"],titleterms:{"switch":22,advanc:0,api:16,architectur:21,basedevic:1,befor:19,bulb:22,channelinfo:2,client:15,common:18,consumptionxmixin:5,content:19,control:22,data:0,devic:[0,22],document:19,door:22,electricitymixin:6,garag:22,garageopenermixin:7,genericsubdevic:3,gotcha:18,http:15,hubdevic:4,hubmixn:8,hubmts100mixin:8,indic:19,instal:20,librari:19,lightmixin:9,list:22,meross:21,merossiot:19,merossmanag:17,ms100sensor:13,mts100v3valv:14,open:22,quick:22,read:22,refer:16,sensor:22,sniff:0,spraymixin:10,start:22,systemallmixin:11,systemonlinemixin:11,tabl:19,thermostat:22,thi:19,togglemixin:12,togglexmixin:12,topic:0,using:19,welcom:19}})