webpackJsonp(["app/js/classroom-manage/set-teachers/index"],{"55e73d7afebf9c74b73e":function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t,a,o){var n,r={itemId:Math.random(),nickname:t[o.nickname],isVisible:1==t[o.isVisible],avatar:t[o.avatar],seq:a,id:t[o.id],outputValue:(n={},i(n,o.id,t[o.id]),i(n,o.isVisible,t[o.isVisible]),n)};e.push(r)}function c(e,t){e.map(function(a,o){a.itemId==t&&(e[o].isVisible=!e[o].isVisible,e[o].outputValue.isVisible=e[o].isVisible?1:0)})}Object.defineProperty(t,"__esModule",{value:!0});var l=a("33a776824bec073629e5"),u=a.n(l),p=a("26fa658edb0135ccf5db"),f=a("d0399763e3c229c64154"),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},b=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),h=function(e){function t(e){o(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onChecked=function(e){var t=e.currentTarget.value;c(a.state.dataSourceUi,t),a.setState({dataSourceUi:a.state.dataSourceUi})},a.addItem=function(e,t){t&&(a.props.replaceItem&&(a.state.dataSourceUi=[]),s(a.state.dataSourceUi,t,a.state.dataSourceUi.length+1,a.props),a.setState({dataSourceUi:a.state.dataSourceUi}))},a}return r(t,e),b(t,[{key:"componentWillMount",value:function(){var e=this;this.state={dataSourceUi:[]},this.props.dataSource.map(function(t,a){s(e.state.dataSourceUi,t,a+1,e.props)})}},{key:"getChildContext",value:function(){return{addable:this.props.addable,searchable:this.props.searchable,sortable:this.props.sortable,listClassName:this.props.listClassName,inputName:this.props.inputName,showCheckbox:this.props.showCheckbox,showDeleteBtn:this.props.showDeleteBtn,checkBoxName:this.props.checkBoxName,onChecked:this.onChecked,removeItem:this.removeItem,sortItem:this.sortItem,addItem:this.addItem,dataSourceUi:this.state.dataSourceUi}}},{key:"getList",value:function(){return u.a.createElement(f.a,null)}}]),t}(p.default);t.default=h,h.propTypes=d({},p.default.propTypes,{id:u.a.PropTypes.string,nickname:u.a.PropTypes.string,avatar:u.a.PropTypes.string,isVisible:u.a.PropTypes.string,replaceItem:u.a.PropTypes.bool,showCheckbox:u.a.PropTypes.bool,showDeleteBtn:u.a.PropTypes.bool}),h.defaultProps=d({},p.default.defaultProps,{id:"id",nickname:"nickname",avatar:"avatar",isVisible:"isVisible",replaceItem:!1,showCheckbox:!0,showDeleteBtn:!0}),h.childContextTypes=d({},p.default.childContextTypes,{showCheckbox:u.a.PropTypes.bool,showDeleteBtn:u.a.PropTypes.bool,checkBoxName:u.a.PropTypes.string,onChecked:u.a.PropTypes.func})},c4c0c592951b81e54f85:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("5fdcf1aea784583ca083"),n=a.n(o),r=a("33a776824bec073629e5"),i=a.n(r),s=a("55e73d7afebf9c74b73e");n.a.render(i.a.createElement(s.default,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({showAddBtnGroup:!1,showDeleteBtn:!1,sortable:!0,showCheckbox:!1,addable:!0,outputDataElement:"teachers",searchable:{enable:!1},inputName:"teacherIds[]",dataSource:$("#classroom-manage-set-teachers").data("teachers")},"showAddBtnGroup",!1)),document.getElementById("classroom-manage-set-teachers"))},d0399763e3c229c64154:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a("33a776824bec073629e5"),s=a.n(i),c=(a("8f840897d9471c8c1fbd"),a("3fb32ce3bf28bfad7e02"),a("fdfc24440b4845bd47af")),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),p=function(e){function t(e){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.context,a=t.dataSourceUi,o=t.listClassName,n=t.sortable,r=t.showCheckbox,i=t.showDeleteBtn,c=t.checkBoxName,l=t.inputName,u="";return a.length>0&&(u="list-group"),s.a.createElement("ul",{id:this.listId,className:"multi-list sortable-list "+u+" "+o},a.map(function(t,a){return s.a.createElement("li",{className:"list-group-item",id:t.itemId,key:a,"data-seq":t.seq},n&&s.a.createElement("i",{className:"es-icon es-icon-yidong mrl color-gray inline-block vertical-middle"}),s.a.createElement("img",{className:"avatar-sm avatar-sm-square mrm",src:t.avatar}),s.a.createElement("span",{className:"label-name text-overflow inline-block vertical-middle"},t.nickname),s.a.createElement("label",{className:r?"":"hidden"},s.a.createElement("input",{type:"checkbox",name:c+t.id,checked:t.isVisible,onChange:function(t){return e.context.onChecked(t)},value:t.itemId}),"显示"),s.a.createElement("a",{className:i?"pull-right link-gray mtm":"hidden",onClick:function(t){return e.context.removeItem(t)},"data-item-id":t.itemId},s.a.createElement("i",{className:"es-icon es-icon-close01 text-12"})),s.a.createElement("input",{type:"hidden",name:l,value:t.id}))}))}}]),t}(c.a);t.a=p,p.contextTypes=l({},c.a.contextTypes,{showCheckbox:s.a.PropTypes.bool,showDeleteBtn:s.a.PropTypes.bool,checkBoxName:s.a.PropTypes.string,onChecked:s.a.PropTypes.func})}},["c4c0c592951b81e54f85"]);