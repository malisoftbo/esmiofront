(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{356:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return m}));var n=r(358),o=r(0),l=Object(o.i)("v-card__actions"),c=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),m=Object(o.i)("v-card__title");n.a},407:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(44),o=r(0),l=Object(o.i)("v-toolbar__title"),c=Object(o.i)("v-toolbar__items");n.a},417:function(e,t,r){"use strict";r(165);var n=r(166);t.a=Object(n.a)("flex")},419:function(e,t,r){"use strict";r(165);var n=r(166);t.a=Object(n.a)("layout")},423:function(e,t,r){"use strict";var n={props:{pais:{type:String}},data:function(){return{}},computed:{getPais:function(){return this.pais},getCountryImageUrl:function(){return"BOLIVIA"===this.pais?"https://res.cloudinary.com/malisoftbo/image/upload/c_thumb,w_71/a_0/v1590125316/800px-Flag_of_Bolivia__state_.svg_uh3dhy.png":"/favicon.ico"}}},o=r(43),l=r(55),c=r.n(l),d=r(152),m=r(131),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("v-avatar",{attrs:{color:"grey",size:"50",justify:"space-around"}},[t("v-img",{attrs:{tile:"",alt:this.getPais,src:this.getCountryImageUrl}})],1)],1)}),[],!1,null,null,null);t.a=component.exports;c()(component,{VAvatar:d.a,VImg:m.a})},429:function(e,t,r){"use strict";r(11),r(10),r(9);var n=r(2),o=(r(70),r(8),r(6),r(221),r(35),r(37),r(5)),l=r(66),c=r(78);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},506:function(e,t,r){"use strict";r.r(t);var n={components:{PaisView:r(423).a},created:function(){this.$store.getters.isLoggin?this.$router.push("/"):console.log("Registrate");var e=this;this.$store.watch((function(t){var r=e.$store.getters.getUbicacion,n=r.pais,o=r.departamento,l=r.cuidad;e.pais=n,"BOLIVIA"===e.pais?e.message=null:e.message="Lo sentimos solo estamos disponibles por ahora en BOLIVIA, usted se enecuentra en ".concat(e.pais),e.departamento=o,e.cuidad=l}))},data:function(){return{paisLista:["BOLIVIA"],departamentosBoliviaLista:["LA PAZ","SANTA CRUZ","COCHABAMBA","PANDO","BENI","ORURO","CHUQUISACA","TARIJA","POTOSI"],email:"",nombre:"",apellidos:"",password:"",password_repeat:"",tipo_documento:"",ubicacion:{pais:"BOLIVIA",departamento:"COCHABAMBA",cuidad:"COCHABAMBA"},documentos:["CI","DNI"],num_documento:"",direccion:"",telefono:"",message:null,pais:"",departamento:"",cuidad:"",loading:!1,valid:!1,emailRules:[function(e){return!!e||"E-mail es requerido"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],nombreRules:[function(e){return!!e||"Nombre es requerido"},function(e){return e&&e.length<=50||"Nombre tiene que ser menos de 50 caracteres."}],apellidosRules:[function(e){return!!e||"Apellidos es requerido"},function(e){return e&&e.length<=50||"Apellidos tiene  que ser menos de 50 caracteres"}],passwordRules:[function(e){return!!e||"Contraseña es requerido"},function(e){return e&&e.length<=50||"Contraseña tiene que tener menos de 50 caracteres"}],passwordRepeatRules:[function(e){return!!e||"Repite la contraseña"}],tipo_documentoRules:[function(e){return!!e||"Elije un tipo de documento"}],num_documentoRules:[function(e){return!!e||"Ingrese numero de documento"}],paisRules:[function(e){return!!e||"País es requerido"}],departamentoRules:[function(e){return!!e||"Departamento de país es requerido"}],cuidadRules:[function(e){return!!e||"Cuidad es requerido"},function(e){return e&&e.length<=100||"Contraseña tiene que tener menos de 100 caracteres"}],direccionRules:[function(e){return!!e||"Dirección es requerido"},function(e){return e&&e.length<=150||"Contraseña tiene que tener menos de 150 caracteres"}],telefonoRules:[function(e){return!!e||"Whatsapp es requerido"},function(e){return e&&e.length<=20||"Contraseña tiene que tener menos de 20 caracteres"}]}},methods:{send:function(){var e=this;this.loading=!0,this.$refs.form.validate(),""==!this.nombre&&""==!this.apellidos&&""==!this.email&&""==!this.password&&""==!this.tipo_documento&&""==!this.num_documento&&""==!this.pais&&""==!this.departamento&&""==!this.cuidad&&""==!this.direccion&&""==!this.telefono?this.password==this.password_repeat?this.$axios.post("user/add",{nombre:this.nombre,apellidos:this.apellidos,email:this.email,password:this.password,tipo_documento:this.tipo_documento,num_documento:this.num_documento,telefono:this.telefono,direccion:this.direccion,pais:this.pais,departamento:this.departamento,cuidad:this.cuidad}).then((function(e){return e.data})).then((function(data){e.$store.dispatch("guardarToken",data.tokenReturn),e.$store.dispatch("reloadUsuario"),e.loading=!1,e.$router.push("/")})).catch((function(t){e.message=null,404==t.response.status?e.message="No existe el usuario o las credenciales son incorrectas.":e.message="Ocurrió un error con el servidor, puede que los datos que intentas ingresar ya fueron registrados por otro Usuario. Corriga e intente nuevamente.",e.loading=!1})):(this.loading=!1,this.message="Contraseñas no Coincidem"):this.loading=!1}}},o=r(43),l=r(55),c=r.n(l),d=r(167),m=r(358),f=r(356),v=r(378),h=r(379),_=r(417),x=r(429),w=r(419),O=r(425),y=r(383),C=r(360),R=r(44),V=r(407),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"ma-0 pa-0"},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm10:"",md10:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Registrate Gratis")])],1),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[r("v-text-field",{attrs:{label:"Correo Electrónico",rules:e.emailRules,required:"",name:"email","prepend-icon":"mdi-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.nombreRules,counter:50,label:"Nombre",name:"name",required:"","prepend-icon":"mdi-account",type:"text"},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.apellidosRules,counter:50,required:"",label:"Apellidos",name:"lastname",type:"text"},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.passwordRules,counter:20,required:"",label:"Contraseña",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.passwordRepeatRules,counter:50,required:"",label:"Repite contraseña",name:"password",type:"password"},model:{value:e.password_repeat,callback:function(t){e.password_repeat=t},expression:"password_repeat"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-select",{attrs:{rules:e.tipo_documentoRules,counter:10,items:e.documentos,required:"","prepend-icon":"mdi-file-document",label:"Tipo Documento"},model:{value:e.tipo_documento,callback:function(t){e.tipo_documento=t},expression:"tipo_documento"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.num_documentoRules,counter:20,required:"",label:"Documento",name:"document",type:"text"},model:{value:e.num_documento,callback:function(t){e.num_documento=t},expression:"num_documento"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm2:"",md2:"",lg2:"",xl2:""}},[r("PaisView",{attrs:{pais:e.pais}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg4:"",xl4:""}},[r("v-select",{attrs:{rules:e.paisRules,required:"",label:"País",name:"country",items:e.paisLista},model:{value:e.pais,callback:function(t){e.pais=t},expression:"pais"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-select",{attrs:{rules:e.departamentoRules,required:"",label:"Departamento",name:"departament","prepend-icon":"mdi-directions",items:e.departamentosBoliviaLista},model:{value:e.departamento,callback:function(t){e.departamento=t},expression:"departamento"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.cuidadRules,counter:100,required:"",label:"Cuidad",name:"city","prepend-icon":"mdi-city",type:"text"},model:{value:e.cuidad,callback:function(t){e.cuidad=t},expression:"cuidad"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.direccionRules,counter:150,required:"",label:"Dirección",name:"home","prepend-icon":"mdi-home",type:"text"},model:{value:e.direccion,callback:function(t){e.direccion=t},expression:"direccion"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[r("v-text-field",{attrs:{rules:e.telefonoRules,counter:20,required:"",label:"Whatsapp Ej:77771111",name:"phone","prepend-icon":"mdi-whatsapp",type:"text"},model:{value:e.telefono,callback:function(t){e.telefono=t},expression:"telefono"}})],1)],1)],1)],1)],1),e._v(" "),r("v-card-text",[e._v("\n            Al registrarse usted acepta nuestros "),r("nuxt-link",{attrs:{to:"/terms/service"}},[e._v("Terminos de servicio")]),e._v(", "),r("nuxt-link",{attrs:{to:"/terms/politic"}},[e._v("Politicas de Cambio y Devoluciones")]),e._v(", "),r("nuxt-link",{attrs:{to:"/terms/privacy"}},[e._v("Aviso de Privacidad Integral")]),e._v(".\n          ")],1),e._v(" "),e.message?r("v-card-text",[r("small",{staticClass:"red--text"},[e._v("\n              "+e._s(e.message)+"\n            ")])]):e._e(),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{loading:e.loading,color:"primary"},on:{click:function(t){return e.send()}}},[e._v("Enviar")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VContainer:v.a,VContent:h.a,VFlex:_.a,VForm:x.a,VLayout:w.a,VSelect:O.a,VSpacer:y.a,VTextField:C.a,VToolbar:R.a,VToolbarTitle:V.a})}}]);