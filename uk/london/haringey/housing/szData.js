var szSize={"canvasWidth": "800","pieInnerRadius": "23%","pieOuterRadius": "89%"	};
var szParams={"header": {"title": {"text": "change title in calling htm",	"color": "#ffff00",	"fontSize": 24,	"font": "open sans"	},
"subtitle": {"text": "change subtitle in calling htm","color": "#fff",	"fontSize": 12,	"font": "open sans"},	"titleSubtitlePadding": 3},
"footer": {"text": "Source: StART Feasibility Study, Campbell Tickell 2020	","color": "#999999",	"font": "open sans","location": "bottom-center"	},
	"size": szSize,	"data": {},
	"labels": {	"outer": {"pieDistance": 16	},	"inner": {"format": "value","hideWhenLessThanPercentage": 3}, // add\remove "format": "value", from inner to switch between percentages
		"mainLabel": {	"color": "#ffff00",			"fontSize": 14	},
		"percentage": {	"color": "#ffff00",			"fontSize": 18,	"decimalPlaces": 0	},
		"value": {		"color": "#ffff00",			"fontSize": 36	},
		"lines": {		"enabled": true,			"style": "straight"	},		"truncation": {	"enabled": true		}
	},
	"effects": {	"pullOutSegmentOnClick": {	"effect": "linear",	"speed": 400,	"size": 8	}	},
	"misc": {		"gradient": {"enabled": true,"percentage": 100}	}
} // http://d3pie.org/#generator-data
// var pie = new d3pie("pieChart", {"header":{"title":{"text":"Haringey Housing need","color":"#ffff00","fontSize":24,"font":"open sans"},"subtitle":{"text":"Strategic Housing Market Assessment May 2014","color":"#999999","fontSize":12,"font":"open sans"},"titleSubtitlePadding":3},"footer":{"text":"Source: Haringey Council, 2014, GVA Analysis, 2014","color":"#999999","font":"open sans","location":"bottom-center"},"size":{"canvasWidth":590,"pieInnerRadius":"23%","pieOuterRadius":"89%"},"data":{"sortOrder":"value-desc","content":[{"label":"4+ Bed","value":40,"color":"#2383c1"},{"label":"Three bed","value":33,"color":"#64a61f"},{"label":"Two Bed","value":21,"color":"#7b6788"},{"label":"One Bed (inc studio)","value":6,"color":"#a05c56"}]},"labels":{"outer":{"pieDistance":16},"inner":{"hideWhenLessThanPercentage":3},"mainLabel":{"color":"#ffff00","fontSize":14},"percentage":{"color":"#ffffff","fontSize":18,"decimalPlaces":0},"value":{"color":"#adadad","fontSize":18},"lines":{"enabled":true,"style":"straight"},"truncation":{"enabled":true}},"effects":{"pullOutSegmentOnClick":{"effect":"linear","speed":400,"size":8}},"misc":{"gradient":{"enabled":true,"percentage":100}},"callbacks":{"onMouseoverSegment":null,"onMouseoutSegment":null,"onClickSegment":null}});